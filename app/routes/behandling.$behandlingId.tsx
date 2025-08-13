import { AnimatePresence, motion } from "motion/react";
import {
  ActionFunctionArgs,
  data,
  LoaderFunctionArgs,
  Outlet,
  redirect,
  useActionData,
  useLoaderData,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { OppgaveTabs } from "~/components/oppgave-tabs/OppgaveTabs";
import { OpplysningGruppePanel } from "~/components/opplysning-gruppe-panel/OpplysningGruppePanel";
import { RegelsettMeny } from "~/components/regelsett-meny/RegelsettMeny";
import { ResizableColumns } from "~/components/resizable-columns/ResizableColumns";
import { useDagpengerRettBehandling } from "~/hooks/useDagpengerRettBehandling";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentBehandling, hentVurderinger } from "~/models/behandling.server";
import styles from "~/route-styles/behandling.module.css";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.behandlingId, "params.behandlingId er påkrevd");

  const behandling = await hentBehandling(request, params.behandlingId);
  const vurderinger = await hentVurderinger(request, params.behandlingId);

  const alleRegelsett = [...behandling.vilkår, ...behandling.fastsettelser];
  const førsteRegelsettMedOpplysninger = alleRegelsett.find(
    (regelsett) => regelsett.opplysningTypeIder.length > 0,
  );

  if (!params.regelsettNavn && førsteRegelsettMedOpplysninger) {
    return redirect(`${førsteRegelsettMedOpplysninger.navn}`);
  }

  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return data(
    {
      alert,
      behandling,
      vurderinger,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function BehandlingRoute() {
  const { behandling } = useLoaderData<typeof loader>();
  const { aktivOpplysningsgruppeId } = useDagpengerRettBehandling();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <ResizableColumns>
      <ResizableColumns.Left>
        <div className={"card"}>
          <OppgaveTabs />
          <>
            <Avklaringer
              avklaringer={behandling.avklaringer}
              behandlingId={behandling.behandlingId}
              readOnly={false}
            />

            <div className={styles.container}>
              <RegelsettMeny behandling={behandling} />
              <Outlet />
            </div>
          </>
        </div>
      </ResizableColumns.Left>

      <ResizableColumns.Right>
        <div className={"card h-[100%]"}>
          <AnimatePresence mode="popLayout">
            {aktivOpplysningsgruppeId && (
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
