import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { defer } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Fragment } from "react";
import invariant from "tiny-invariant";

import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentBehandling } from "~/models/behandling.server";
import { hentMeldingOmVedtak, IMeldingOmVedtak } from "~/models/melding-om-vedtak.server";
import { hentOppgave } from "~/models/oppgave.server";
import { hentOppgaverForPerson } from "~/models/person.server";
import { hentJournalpost } from "~/models/saf.server";
import styles from "~/route-styles/oppgave.module.css";
import { sanityClient } from "~/sanity/sanity-client";
import { hentBrevBlokkerMedId } from "~/sanity/sanity-queries";
import type { ISanityBrevBlokk } from "~/sanity/sanity-types";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");

  const oppgave = await hentOppgave(request, params.oppgaveId);
  const behandling = await hentBehandling(request, oppgave.behandlingId);
  const oppgaverForPerson = await hentOppgaverForPerson(request, oppgave.person.ident);

  const journalposterResponses = await Promise.all(
    oppgave.journalpostIder.map((journalpostId) => hentJournalpost(request, journalpostId)),
  );

  let meldingOmVedtak: IMeldingOmVedtak | undefined;
  let sanityBrevBlokker: ISanityBrevBlokk[] = [];
  if (oppgave.tilstand === "UNDER_KONTROLL" || oppgave.tilstand === "UNDER_BEHANDLING") {
    meldingOmVedtak = await hentMeldingOmVedtak(request, oppgave.behandlingId);
    sanityBrevBlokker = await sanityClient.fetch<ISanityBrevBlokk[]>(
      hentBrevBlokkerMedId(meldingOmVedtak.brevblokkIder),
    );
  }

  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return defer(
    {
      alert,
      oppgave,
      behandling,
      oppgaverForPerson,
      journalposterResponses,
      sanityBrevBlokker,
      meldingOmVedtak,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function Oppgave() {
  const { oppgave, oppgaverForPerson, alert } = useLoaderData<typeof loader>();
  useHandleAlertMessages(alert);

  return (
    <>
      <PersonBoks person={oppgave.person} />
      <div className={styles.oppgaveContainer}>
        <OppgaveListe oppgaver={oppgaverForPerson} />
        <Fragment key={oppgave.oppgaveId}>
          <Outlet />
        </Fragment>
      </div>
    </>
  );
}
