import { AnimatePresence, motion } from "motion/react";
import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  Outlet,
  useActionData,
  useLoaderData,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { OppgaveInformasjon } from "~/components/oppgave-informasjon/OppgaveInformasjon";
import { OppgaveTabs } from "~/components/oppgave-tabs/OppgaveTabs";
import { OpplysningGruppePanel } from "~/components/opplysning-gruppe-panel/OpplysningGruppePanel";
import { ResizableColumns } from "~/components/resizable-columns/ResizableColumns";
import { useDagpengerRettBehandling } from "~/hooks/useDagpengerRettBehandling";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentBehandling } from "~/models/behandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

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
  const actionData = useActionData<typeof action>();

  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <ResizableColumns defaultLeftWidth={70}>
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
                <OpplysningGruppePanel behandling={behandling} />
              </motion.div>
            ) : (
              <OppgaveInformasjon
                defaultTab={oppgave.tilstand === "UNDER_KONTROLL" ? "kontroll" : "dokumenter"}
                visKontrollFane={oppgave.tilstand === "UNDER_KONTROLL"}
              />
            )}
          </AnimatePresence>
        </div>
      </ResizableColumns.Right>
    </ResizableColumns>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
