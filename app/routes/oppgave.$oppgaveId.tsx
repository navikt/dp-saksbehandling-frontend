import { Fragment } from "react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { defer } from "@remix-run/node";
import { Outlet, useLoaderData, useLocation } from "@remix-run/react";
import invariant from "tiny-invariant";
import { hentOppgave } from "~/models/oppgave.server";
import { hentJournalpost } from "~/models/saf.server";
import { hentOppgaverForPerson } from "~/models/person.server";
import { hentBehandling } from "~/models/behandling.server";
import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import { commitSession, getSession } from "~/sessions";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentMeldingOmVedtak } from "~/models/melding-om-vedtak.server";
import { sanityClient } from "~/sanity/sanity-client";
import type { ISanityBrevBlokk } from "~/sanity/sanity-types";
import { hentBrevBlokkerMedId } from "~/sanity/sanity-queries";
import { OppgaveHandlinger } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import styles from "~/route-styles/oppgave.module.css";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");

  const oppgave = await hentOppgave(request, params.oppgaveId);
  const behandling = await hentBehandling(request, oppgave.behandlingId);
  const oppgaverForPerson = await hentOppgaverForPerson(request, oppgave.person.ident);
  const meldingOmVedtak = await hentMeldingOmVedtak(request, oppgave.behandlingId);

  const journalposterResponses = await Promise.all(
    oppgave.journalpostIder.map((journalpostId) => hentJournalpost(request, journalpostId)),
  );

  const sanityBrevBlokker = await sanityClient.fetch<ISanityBrevBlokk[]>(
    hentBrevBlokkerMedId(meldingOmVedtak.brevblokkIder),
  );

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
  const location = useLocation();
  const { oppgave, oppgaverForPerson, alert } = useLoaderData<typeof loader>();
  useHandleAlertMessages(alert);

  return (
    <>
      <PersonBoks person={oppgave.person} />
      <div className={styles.oppgaveContainer}>
        <OppgaveListe oppgaver={oppgaverForPerson} />
        <OppgaveHandlinger />
        <Fragment key={location.key}>
          <Outlet />
        </Fragment>
      </div>
    </>
  );
}
