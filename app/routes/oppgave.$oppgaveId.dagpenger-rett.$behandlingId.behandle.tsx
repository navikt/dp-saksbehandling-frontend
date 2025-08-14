import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  Outlet,
  redirect,
  useActionData,
  useLoaderData,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { RegelsettMeny } from "~/components/regelsett-meny/RegelsettMeny";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentBehandling } from "~/models/behandling.server";
import {
  hentOrkestratorBarn,
  hentOrkestratorLandListe,
} from "~/models/orkestrator-opplysning.server";
import { hentOppgave } from "~/models/saksbehandling.server";
import styles from "~/route-styles/behandling.module.css";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  const behandling = await hentBehandling(request, params.behandlingId);
  const oppgave = await hentOppgave(request, params.oppgaveId);

  const alleRegelsett = [...behandling.vilkår, ...behandling.fastsettelser];
  const førsteRegelsettMedOpplysninger = alleRegelsett.find(
    (regelsett) => regelsett.opplysningTypeIder.length > 0,
  );

  if (!params.regelsettNavn && førsteRegelsettMedOpplysninger) {
    return redirect(`${førsteRegelsettMedOpplysninger.navn}`);
  }

  let orkestratorBarn;
  let orkestratorLandliste;

  if (oppgave.soknadId) {
    orkestratorBarn = await hentOrkestratorBarn(request, oppgave.soknadId);
    orkestratorLandliste = await hentOrkestratorLandListe(request);
  }

  return { behandling, oppgave, orkestratorBarn, orkestratorLandliste };
}

export default function Oppgave() {
  const { behandling, oppgave } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <>
      <Avklaringer
        avklaringer={behandling.avklaringer}
        behandlingId={behandling.behandlingId}
        readOnly={oppgave.tilstand !== "UNDER_BEHANDLING"}
      />

      <div className={styles.container}>
        <RegelsettMeny behandling={behandling} />
        <Outlet />
      </div>
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
