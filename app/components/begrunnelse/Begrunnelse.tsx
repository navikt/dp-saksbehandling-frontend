import { Alert } from "@navikt/ds-react";
import { Suspense } from "react";
import { Await } from "react-router";

import { AsyncErrorMelding } from "~/components/async-error-melding/AsyncErrorMelding";
import { BegrunnelseAvklaringer } from "~/components/begrunnelse/BegrunnelseAvklaringer";
import { BegrunnelseOpplysninger } from "~/components/begrunnelse/BegrunnelseOpplysninger";
import { CenteredLoader } from "~/components/centered-loader/CenteredLoader";
import { HttpProblemAlert } from "~/components/http-problem-alert/HttpProblemAlert";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

export function Begrunnelse(props: { readOnly?: boolean }) {
  const { vurderingerPromise } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  return (
    <>
      <Suspense fallback={<CenteredLoader size={"large"} loadingText={"Henter vurderinger"} />}>
        <Await
          resolve={vurderingerPromise}
          errorElement={
            <div className={"p-2"}>
              <AsyncErrorMelding feilmelding={"Klarte ikke hente vurderinger"} />
            </div>
          }
        >
          {(vurderingerResponse) => {
            if (vurderingerResponse.error) {
              return (
                <div className={"p-2"}>
                  <HttpProblemAlert error={getHttpProblemAlert(vurderingerResponse.error)} />
                </div>
              );
            }

            return (
              <>
                {vurderingerResponse.data.opplysninger.length === 0 &&
                  vurderingerResponse.data.avklaringer.length === 0 && (
                    <Alert variant={"info"} className={"m-4"}>
                      Det er ingen opplysninger som er endret eller avklaringer som er kvittert
                    </Alert>
                  )}

                {vurderingerResponse.data.opplysninger.length > 0 && (
                  <BegrunnelseOpplysninger
                    opplysninger={vurderingerResponse.data.opplysninger}
                    readOnly={props.readOnly}
                  />
                )}

                {vurderingerResponse.data.avklaringer.length > 0 && (
                  <BegrunnelseAvklaringer
                    avklaringer={vurderingerResponse.data.avklaringer}
                    readOnly={props.readOnly}
                  />
                )}
              </>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}
