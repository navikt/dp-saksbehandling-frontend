import { Alert, Detail } from "@navikt/ds-react";
import { Fragment } from "react";
import {
  ActionFunctionArgs,
  data,
  LoaderFunctionArgs,
  Outlet,
  useActionData,
  useLoaderData,
} from "react-router";
import invariant from "tiny-invariant";

import { OppgavelistePerson } from "~/components/oppgaveliste-person/OppgavelistePerson";
import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { BeslutterNotatProvider } from "~/context/beslutter-notat-context";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentBehandling, hentVurderinger } from "~/models/behandling.server";
import { hentMeldingOmVedtak } from "~/models/melding-om-vedtak.server";
import {
  hentOrkestratorBarn,
  hentOrkestratorLandListe,
} from "~/models/orkestrator-opplysning.server";
import { hentJournalpost } from "~/models/saf.server";
import { hentOppgave, hentOppgaverForPerson } from "~/models/saksbehandling.server";
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
  const behandlingPromise = hentBehandling(request, oppgave.behandlingId);
  const vurderingerPromise = hentVurderinger(request, oppgave.behandlingId);
  const oppgaverForPersonPromise = hentOppgaverForPerson(request, oppgave.person.ident);

  let meldingOmVedtakPromise;

  if (!oppgave?.saksbehandler) {
    throw new Error("Oppgave mangler saksbehandler, kan ikke vise oppgave");
  }

  if (!oppgave?.soknadId) {
    throw new Error("Oppgave id");
  }

  const orkestratorBarn = await hentOrkestratorBarn(request, oppgave.soknadId);
  console.log(`🔥 orkestratorBarn :`, orkestratorBarn);

  const orkestratorLandliste = await hentOrkestratorLandListe(request);
  console.log(`🔥 orkestratorLandliste :`, orkestratorLandliste);

  if (oppgave.saksbehandler) {
    meldingOmVedtakPromise = hentMeldingOmVedtak(request, oppgave.behandlingId, {
      fornavn: oppgave.person.fornavn,
      mellomnavn: oppgave.person.mellomnavn,
      etternavn: oppgave.person.etternavn,
      fodselsnummer: oppgave.person.ident,
      saksbehandler: oppgave.saksbehandler,
      beslutter: oppgave.beslutter,
    });
  }

  const journalposterPromises = Promise.all(
    oppgave.journalpostIder.map((journalpostId) => hentJournalpost(request, journalpostId)),
  );
  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return data(
    {
      alert,
      oppgave,
      behandlingPromise,
      vurderingerPromise,
      oppgaverForPersonPromise,
      journalposterPromises,
      meldingOmVedtakPromise,
      orkestratorBarn,
      orkestratorLandliste,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function Oppgave() {
  const { oppgave, alert } = useLoaderData<typeof loader>();

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
          <OppgavelistePerson />
          <Outlet />
        </BeslutterNotatProvider>
      </div>
    </Fragment>
  );
}
