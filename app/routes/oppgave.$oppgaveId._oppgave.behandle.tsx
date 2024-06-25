import { useState } from "react";
import { Button } from "@navikt/ds-react";
import { BehandlingBekreftModal } from "~/components/behandling-bekreft-modal/BehandlingBekreftModal";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { avbrytBehandling, godkjennBehandling } from "~/models/behandling.server";
import { parseJsonSkjemaVerdi } from "~/utils/steg.utils";
import { hentOppgave } from "~/models/oppgave.server";
import { commitSession, getSession } from "~/sessions";
import invariant from "tiny-invariant";
import styles from "~/route-styles/oppgave.module.css";
import { getSaksbehandler } from "~/models/saksbehandler.server";

interface ISkjemadata {
  ferdigstillValg: IFerdigstillValg;
  personIdent: string;
  behandlingId: string;
}

export type IFerdigstillValg = "godkjenn" | "avbryt";

export async function loader({ request, params }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);
  console.time("behandle loader: hentOppgave");
  const oppgave = await hentOppgave(request, params.oppgaveId);
  console.timeEnd("behandle loader: hentOppgave");
  console.time("behandle loader: getSaksbehandler");
  const saksbehandler = await getSaksbehandler(request);
  console.timeEnd("behandle loader: getSaksbehandler");

  const minOppgave = oppgave.saksbehandlerIdent === saksbehandler.onPremisesSamAccountName;
  const kanTildeleOgBehandleOppgave =
    oppgave.tilstand === "KLAR_TIL_BEHANDLING" ||
    oppgave.tilstand === "PAA_VENT" ||
    (oppgave.tilstand === "UNDER_BEHANDLING" && minOppgave);

  if (!kanTildeleOgBehandleOppgave) {
    return redirect(`/oppgave/${oppgave.oppgaveId}`);
  }

  return null;
}

export async function action({ request, params }: ActionFunctionArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);

  const formData = await request.formData();
  const skjemadata = parseJsonSkjemaVerdi<ISkjemadata>(formData, "skjemadata");

  let response;
  let alertMessage: string;
  switch (skjemadata.ferdigstillValg) {
    case "avbryt":
      response = await avbrytBehandling(request, skjemadata.behandlingId, skjemadata.personIdent);
      alertMessage = `Søknad er sendt til arena for videre behandling`;
      break;

    case "godkjenn":
      response = await godkjennBehandling(request, skjemadata.behandlingId, skjemadata.personIdent);
      alertMessage = `Søknad er sendt til automatisk avslag`;
      break;
  }

  if (response.status === "success") {
    const session = await getSession(request.headers.get("Cookie"));
    session.flash("alert", { variant: "success", title: alertMessage });

    return redirect(`/`, {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  return response;
}

export default function Behandling() {
  const [aktivModalId, setAktivModalId] = useState<IFerdigstillValg | undefined>();

  return (
    <>
      <div className={styles.behandlingKnapper}>
        <Button
          type="button"
          variant="primary"
          size="small"
          onClick={() => setAktivModalId("godkjenn")}
        >
          Send til automatisk avslag
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="small"
          onClick={() => setAktivModalId("avbryt")}
        >
          Send til vanlig saksflyt i Arena
        </Button>
      </div>

      <BehandlingBekreftModal aktivModalId={aktivModalId} setAktivModalId={setAktivModalId} />
    </>
  );
}
