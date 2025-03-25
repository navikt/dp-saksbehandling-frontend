import { Heading } from "@navikt/ds-react";
import { Fragment, Suspense } from "react";
import { Await } from "react-router";

import { AsyncErrorMelding } from "~/components/async-error-melding/AsyncErrorMelding";
import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import { BegrunnelseLinje } from "~/components/begrunnelse-linje/BegrunnelseLinje";
import { CenteredLoader } from "~/components/centered-loader/CenteredLoader";
import { HttpProblemAlert } from "~/components/http-problem-alert/HttpProblemAlert";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

import styles from "./Begrunnelse.module.css";

export function Begrunnelse(props: { readonly?: boolean }) {
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
                <Avklaringer avklaringer={vurderingerResponse.data.avklaringer} />
                <div>
                  {vurderingerResponse.data.regelsett.map((regelsett) => (
                    <Fragment key={regelsett.navn}>
                      <Heading size="xsmall" className={styles.regelsettHeading}>
                        {regelsett.navn}
                      </Heading>
                      <ul className={styles.regelsettListe}>
                        {regelsett.opplysningIder?.map((opplysningId) => {
                          const opplysning = vurderingerResponse.data.opplysninger.find(
                            (opplysning) => opplysning.id === opplysningId,
                          );

                          if (!opplysning) {
                            return null;
                          }

                          return (
                            <BegrunnelseLinje
                              key={opplysning.id}
                              opplysning={opplysning}
                              readonly={props.readonly}
                            />
                          );
                        })}
                      </ul>
                    </Fragment>
                  ))}
                </div>
              </>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}
