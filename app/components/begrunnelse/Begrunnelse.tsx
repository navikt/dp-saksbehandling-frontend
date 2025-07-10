import { Alert } from "@navikt/ds-react";
import { Suspense } from "react";
import { Await } from "react-router";

import { AsyncErrorMelding } from "~/components/async-error-melding/AsyncErrorMelding";
import { BegrunnelseAvklaringer } from "~/components/begrunnelse/BegrunnelseAvklaringer";
import { BegrunnelseOpplysninger } from "~/components/begrunnelse/BegrunnelseOpplysninger";
import { CenteredLoader } from "~/components/centered-loader/CenteredLoader";
import { HttpProblemAlert } from "~/components/http-problem-alert/HttpProblemAlert";
import { hentVurderinger } from "~/models/behandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

interface IProps {
  vurderingerPromise: ReturnType<typeof hentVurderinger>;
  readOnly?: boolean;
}

export function Begrunnelse({ vurderingerPromise, readOnly }: IProps) {
  return (
    <>
      <Suspense fallback={<CenteredLoader size={"large"} loadingText={"Henter vurderinger"} />}>
        <Await
          resolve={vurderingerPromise}
          errorElement={<AsyncErrorMelding feilmelding={"Klarte ikke hente vurderinger"} />}
        >
          {(vurderingerResponse) => {
            if (vurderingerResponse.error) {
              return <HttpProblemAlert error={getHttpProblemAlert(vurderingerResponse.error)} />;
            }

            return (
              <>
                {vurderingerResponse.data.opplysninger.length === 0 &&
                  vurderingerResponse.data.avklaringer.length === 0 && (
                    <Alert variant={"info"}>
                      Det er ingen opplysninger som er endret eller avklaringer som er kvittert
                    </Alert>
                  )}

                {vurderingerResponse.data.opplysninger.length > 0 && (
                  <BegrunnelseOpplysninger
                    opplysninger={vurderingerResponse.data.opplysninger}
                    readOnly={readOnly}
                  />
                )}

                {vurderingerResponse.data.avklaringer.length > 0 && (
                  <BegrunnelseAvklaringer
                    avklaringer={vurderingerResponse.data.avklaringer}
                    readOnly={readOnly}
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
