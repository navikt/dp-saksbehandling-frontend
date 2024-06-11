import { useState } from "react";
import { Button } from "@navikt/ds-react";
import { BehandlingBekreftModal } from "~/components/behandling-bekreft-modal/BehandlingBekreftModal";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { avbrytBehandling, godkjennBehandling } from "~/models/behandling.server";
import { parseJsonSkjemaVerdi } from "~/utils/steg.utils";
import { tildelOppgave } from "~/models/oppgave.server";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { useLoaderData } from "@remix-run/react";
import { commitSession, getSession } from "~/sessions";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { getAlertMessage } from "~/utils/alert-message.utils";
import invariant from "tiny-invariant";
import styles from "~/route-styles/oppgave.module.css";

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

  const alert = getAlertMessage({ name: "tildel-oppgave", httpCode: response.status });
  return json({
    alert,
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
  const loaderData = useLoaderData<typeof loader>();
  useHandleAlertMessages(loaderData?.alert);
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const [aktivModalId, setAktivModalId] = useState<IFerdigstillValg | undefined>();

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
