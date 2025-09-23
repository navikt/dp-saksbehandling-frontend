import { Alert, Button } from "@navikt/ds-react";
import { AnimatePresence, motion } from "motion/react";
import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  Outlet,
  useActionData,
  useLoaderData,
  useRevalidator,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { OppgaveHandlinger } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import { OppgaveInformasjon } from "~/components/oppgave-informasjon/OppgaveInformasjon";
import { OppgaveTabs } from "~/components/oppgave-tabs/OppgaveTabs";
import { OpplysningGruppePanel } from "~/components/opplysning-gruppe-panel/OpplysningGruppePanel";
import { ResizableColumns } from "~/components/resizable-columns/ResizableColumns";
import { useDagpengerRettBehandling } from "~/hooks/useDagpengerRettBehandling";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentBehandling } from "~/models/behandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { getEnv } from "~/utils/env.utils";
import { isAlert, isTekstVerdi } from "~/utils/type-guards";

import { components as behandlingComponents } from "../../openapi/behandling-typer";
import { components as saksbehandlingComponents } from "../../openapi/saksbehandling-typer";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  const behandling = await hentBehandling(request, params.behandlingId);

  return {
    behandling,
  };
}

export default function BehandlingRoute() {
  const { behandling } = useLoaderData<typeof loader>();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const { aktivOpplysningsgruppeId } = useDagpengerRettBehandling();
  const { revalidate } = useRevalidator();
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);
  const minOppgave = oppgave.saksbehandler?.ident === saksbehandler.onPremisesSamAccountName;

  return (
    <>
      {behandling.tilstand === "Redigert" && (
        <Alert size={"small"} variant={"error"}>
          Det er løk i regelmotoren. Oppdater nettleseren for å se om løken er borte 🧅
          <Button
            size={"small"}
            className={"ml-2"}
            variant={"secondary-neutral"}
            onClick={() => revalidate()}
          >
            Oppdater nettleser
          </Button>
        </Alert>
      )}

      <OppgaveHandlinger behandling={behandling} />

      <ResizableColumns>
        <ResizableColumns.Left>
          <div className={"card"}>
            <OppgaveTabs />
            <Outlet />
          </div>
        </ResizableColumns.Left>

        <ResizableColumns.Right>
          <div className={"card h-[100%]"}>
            <AnimatePresence mode="popLayout">
              {aktivOpplysningsgruppeId ? (
                <motion.div
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 500 }}
                  transition={{
                    type: "spring",
                    duration: 0.5,
                  }}
                  key={aktivOpplysningsgruppeId}
                >
                  <OpplysningGruppePanel
                    behandling={behandling}
                    readonly={oppgave.tilstand !== "UNDER_BEHANDLING" || !minOppgave}
                  />
                </motion.div>
              ) : (
                <OppgaveInformasjon
                  defaultTab={hentDefaultTab(oppgave)}
                  visKontrollFane={oppgave.tilstand === "UNDER_KONTROLL"}
                  inntektRedigeringUrl={hentInntektRedigeringUrl(behandling)}
                />
              )}
            </AnimatePresence>
          </div>
        </ResizableColumns.Right>
      </ResizableColumns>
    </>
  );
}

function hentDefaultTab(oppgave: saksbehandlingComponents["schemas"]["Oppgave"]) {
  if (oppgave.tilstand === "UNDER_KONTROLL") {
    return "kontroll";
  }

  if (oppgave.beslutter) {
    return "historikk";
  }

  return "dokumenter";
}

function hentInntektRedigeringUrl(
  behandling: behandlingComponents["schemas"]["Behandling"],
): string | undefined {
  const inntektOpplysningGruppe = behandling.opplysningsgrupper.find(
    (gruppe) => gruppe.navn === "Inntektsopplysninger",
  );

  const inntektOpplysning = inntektOpplysningGruppe?.opplysninger?.find(
    (opplysning) => opplysning.navn === "Inntektsopplysninger",
  );

  if (inntektOpplysning && inntektOpplysning.verdien && isTekstVerdi(inntektOpplysning.verdien)) {
    const inntektId = inntektOpplysning.verdien.verdi;
    return `${getEnv("DP_INNTEKT_REDIGERING_FRONTEND_URL")}/inntektId/${inntektId}`;
  }

  return;
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
