import { Alert, Detail } from "@navikt/ds-react";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { defer } from "@remix-run/node";
import { Outlet, useActionData, useLoaderData } from "@remix-run/react";
import { Fragment } from "react";
import invariant from "tiny-invariant";

import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { BeslutterNotatProvider } from "~/context/beslutter-notat-context";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentBehandling } from "~/models/behandling.server";
import { hentOppgave } from "~/models/oppgave.server";
import { hentOrkestratorBarnOpplysninger } from "~/models/orkestrator-opplysning.server";
import { hentOppgaverForPerson } from "~/models/person.server";
import { hentJournalpost } from "~/models/saf.server";
import styles from "~/route-styles/oppgave.module.css";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { formaterNorskDato } from "~/utils/dato.utils";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");

  const oppgave = await hentOppgave(request, params.oppgaveId);
  const behandling = await hentBehandling(request, oppgave.behandlingId);
  const oppgaverForPerson = await hentOppgaverForPerson(request, oppgave.person.ident);
  const orkestratorBarnOpplysninger = await hentOrkestratorBarnOpplysninger(
    request,
    params.oppgaveId,
  );

  const journalposterResponses = await Promise.all(
    oppgave.journalpostIder.map((journalpostId) => hentJournalpost(request, journalpostId)),
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
      orkestratorBarnOpplysninger,
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
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);
  useHandleAlertMessages(alert);

  return (
    <Fragment key={oppgave.oppgaveId}>
      <PersonBoks person={oppgave.person} />
      {oppgave.person.sikkerhetstiltak?.map((tiltak) => (
        <Alert
          key={tiltak.beskrivelse}
          className={"alert--compact"}
          variant="warning"
          fullWidth={true}
        >
          {tiltak.beskrivelse}
          <Detail>Gjelder til og med {formaterNorskDato(tiltak.gyldigTom)}</Detail>
        </Alert>
      ))}

      <div className={styles.oppgaveContainer}>
        <BeslutterNotatProvider notat={oppgave.notat}>
          <OppgaveListe oppgaver={oppgaverForPerson} />
          <Outlet />
        </BeslutterNotatProvider>
      </div>
    </Fragment>
  );
}
