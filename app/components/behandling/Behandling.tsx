import { Suspense, useEffect, useState } from "react";
import { Await } from "react-router";

import { AsyncErrorMelding } from "~/components/async-error-melding/AsyncErrorMelding";
import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import { CenteredLoader } from "~/components/centered-loader/CenteredLoader";
import { HttpProblemAlert } from "~/components/http-problem-alert/HttpProblemAlert";
import { Regelsett } from "~/components/regelsett/Regelsett";
import { RegelsettMeny } from "~/components/regelsett-meny/RegelsettMeny";
import { useAwaitPromise } from "~/hooks/useResolvedPromise";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

import { components } from "../../../openapi/behandling-typer";
import styles from "./Behandling.module.css";

interface IProps {
  readonly?: boolean;
}

export function Behandling(props: IProps) {
  const { behandlingPromise } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const { response } = useAwaitPromise(behandlingPromise);
  const [aktivtRegelsett, setAktivtRegelsett] = useState<components["schemas"]["Regelsett"] | null>(
    null,
  );

  useEffect(() => {
    if (response?.data) {
      const behandling = response.data;
      const alleRegelsett = [...behandling.vilkår, ...behandling.fastsettelser];
      const nåværendeRegelsett = alleRegelsett.find(
        (regelsett) => regelsett.navn === aktivtRegelsett?.navn,
      );

      if (nåværendeRegelsett) {
        setAktivtRegelsett(nåværendeRegelsett);
      } else {
        setAktivtRegelsett(behandling.vilkår[0]);
      }
    }
  }, [response?.data]);

  return (
    <Suspense fallback={<CenteredLoader size={"large"} loadingText={"Henter behandling"} />}>
      <Await
        resolve={behandlingPromise}
        errorElement={
          <div className={"p-2"}>
            <AsyncErrorMelding feilmelding={"Klarte ikke hente behandling"} />
          </div>
        }
      >
        {(behandling) => {
          if (behandling.error) {
            return (
              <div className={"p-2"}>
                <HttpProblemAlert error={getHttpProblemAlert(behandling.error)} />
              </div>
            );
          }

          return (
            <>
              <Avklaringer avklaringer={behandling.data.avklaringer} />
              {aktivtRegelsett && (
                <div className={styles.container}>
                  <RegelsettMeny
                    behandling={behandling.data}
                    aktivtRegelsett={aktivtRegelsett}
                    setAktivtRegelsett={setAktivtRegelsett}
                  />
                  <Regelsett
                    behandling={behandling.data}
                    aktivtRegelsett={aktivtRegelsett}
                    readonly={props.readonly}
                  />
                </div>
              )}
            </>
          );
        }}
      </Await>
    </Suspense>
  );
}
