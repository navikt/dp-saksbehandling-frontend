import { useEffect, useState } from "react";
import { Button } from "@navikt/ds-react";
import { BehandlingBekreftModal } from "~/components/behandling-bekreft-modal/BehandlingBekreftModal";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import styles from "~/route-styles/oppgave.module.css";
import { avbrytBehandling, godkjennBehandling } from "~/models/behandling.server";
import { parseJsonSkjemaVerdi } from "~/utils/steg.utils";
import { tildelOppgave } from "~/models/oppgave.server";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { useLoaderData } from "@remix-run/react";
import { useGlobalAlerts } from "~/hooks/useGlobalAlerts";
import type { IAlertResponse } from "~/context/alert-context";
import { handleTildelOppgaveMessages } from "~/components/alert-messages/handleAlertMessages";
import { commitSession, getSession } from "~/sessions";

interface ISkjemadata {
  ferdigstillValg: IFerdigstillValg;
  personIdent: string;
  behandlingId: string;
}

export type IFerdigstillValg = "godkjenn" | "avbryt";

export async function loader({ request, params }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);
  const response = await tildelOppgave(request, params.oppgaveId);

  if (response.ok) {
    return null;
  }

  return json<IAlertResponse>({
    alert: true,
    httpCode: response.status,
    message: response.statusText,
  });
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
  const { addAlert } = useGlobalAlerts();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const [aktivModalId, setAktivModalId] = useState<IFerdigstillValg | undefined>();
  const loaderData = useLoaderData<typeof loader>();

  useEffect(() => {
    if (loaderData?.alert) {
      handleTildelOppgaveMessages(loaderData.httpCode, loaderData.message, addAlert);
    }
    // Skal bare kjøre på mount
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {oppgave.tilstand === "UNDER_BEHANDLING" && (
        <>
          <div className={styles.buttonContainer}>
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
      )}
    </>
  );
}
