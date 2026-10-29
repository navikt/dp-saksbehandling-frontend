import { Alert } from "@navikt/ds-react";
import { ActionFunctionArgs, useActionData, useRouteError, useSearchParams } from "react-router";

import { EndreBeregningsregelModal } from "~/components/endre-beregningsregel/EndreBeregningsregelModal";
import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { OpplysningPerioderTabell } from "~/components/opplysning-perioder-tabell/OpplysningPerioderTabell";
import { OpplysningerTittel } from "~/components/opplysninger-tittel/OpplysningerTittel";
import { PrøvingsdatoInput } from "~/components/rett-på-dagpenger/PrøvingsdatoInput";
import { VilkårTidslinje } from "~/components/vilkår-tidslinje/VilkårTidslinje";
import { useBehandling } from "~/hooks/useBehandling";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useOppgave } from "~/hooks/useOppgave";
import { handleActions } from "~/server-side-actions/handle-actions";
import { BEREGNINGSREGEL_OPPLYSNINGER } from "~/utils/beregningsregel.utils";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function Vilkårsvurderinger() {
  const { readonly } = useOppgave();
  const { behandling, prøvingsdatoOpplysning, sistePrøvingsdato } = useBehandling();
  const [searchParams] = useSearchParams();
  const opplysningId = searchParams.get("opplysning");
  const opplysning = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === opplysningId,
  );
  const regelsett = behandling.vilkår.find((vilkår) =>
    vilkår.opplysninger.includes(opplysningId ?? ""),
  );
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <div className="flex flex-col gap-4">
      {prøvingsdatoOpplysning && <PrøvingsdatoInput />}
      {opplysningId && (!opplysning || !regelsett) && (
        <Alert variant="warning">Finner ikke den valgte opplysningen i vilkårsvurderingene.</Alert>
      )}
      <VilkårTidslinje>
        {opplysning && regelsett && (
          <section key={opplysning.opplysningTypeId} className="flex flex-col gap-4">
            {regelsett.id === "MTEzODE3NjI5" && (
              <EndreBeregningsregelModal
                behandlingId={behandling.behandlingId}
                opplysninger={behandling.opplysninger.filter(
                  (opplysning) =>
                    regelsett.opplysninger.includes(opplysning.opplysningTypeId) &&
                    opplysning.synlig &&
                    BEREGNINGSREGEL_OPPLYSNINGER.some((id) => id === opplysning.opplysningTypeId),
                )}
                sistePrøvingsdato={sistePrøvingsdato}
              />
            )}
            <div className="p-4">
              <OpplysningerTittel
                tittel={opplysning.navn}
                redigertAvSaksbehandler={opplysning.redigertAvSaksbehandler}
                regelsettHjemmel={regelsett.hjemmel.tittel}
                opplysningKilde={opplysning.formål}
                opplysninger={[opplysning]}
                readonly={readonly}
              />
              <OpplysningPerioderTabell opplysning={opplysning} regelsettId={regelsett.id} />
            </div>
          </section>
        )}
      </VilkårTidslinje>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return <ErrorMessageComponent error={error} />;
}
