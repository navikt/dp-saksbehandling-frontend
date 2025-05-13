import { Alert } from "@navikt/ds-react";
import { Suspense, useEffect, useState } from "react";
import { Await } from "react-router";

import { CenteredLoader } from "~/components/centered-loader/CenteredLoader";
import { HttpProblemAlert } from "~/components/http-problem-alert/HttpProblemAlert";
import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
import { useAwaitPromise } from "~/hooks/useResolvedPromise";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

import { components } from "../../../openapi/melding-om-vedtak-typer";
import { AsyncErrorMelding } from "../async-error-melding/AsyncErrorMelding";
import { UtvidedeBeskrivelser } from "../utvidede-beskrivelser/UtvidedeBeskrivelser";
import styles from "./MeldingOmVedtak.module.css";

interface IProps {
  readOnly?: boolean;
}

export function MeldingOmVedtak({ readOnly }: IProps) {
  const { meldingOmVedtakPromise } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  if (!meldingOmVedtakPromise) {
    return (
      <Alert variant="warning" className="m-2">
        Kan ikke hente melding om vedtak
      </Alert>
    );
  }

  const { response } = useAwaitPromise(meldingOmVedtakPromise);
  const [utvidedeBeskrivelser, setUtvidedeBeskrivelser] = useState<
    components["schemas"]["UtvidetBeskrivelse"][]
  >(response?.data?.utvidedeBeskrivelser ?? []);

  useEffect(() => {
    if (response?.data) {
      setUtvidedeBeskrivelser(response.data.utvidedeBeskrivelser);
    }
  }, [response?.data]);

  return (
    <Suspense fallback={<CenteredLoader size={"large"} />}>
      <Await
        resolve={meldingOmVedtakPromise}
        errorElement={
          <div className="p-2">
            <AsyncErrorMelding feilmelding="Klarte ikke hente melding om vedtak" />
          </div>
        }
      >
        {(meldingOmVedtak) => {
          if (meldingOmVedtak.error) {
            return (
              <div className="p-2">
                <HttpProblemAlert error={getHttpProblemAlert(meldingOmVedtak.error)} />
              </div>
            );
          }

          return (
            <>
              <div className={styles.meldingOmVedtakContainer}>
                <UtvidedeBeskrivelser
                  utvidedeBeskrivelser={utvidedeBeskrivelser}
                  setUtvidedeBeskrivelser={setUtvidedeBeskrivelser}
                  readOnly={readOnly}
                />

                <MeldingOmVedtakPreview
                  utvidedeBeskrivelser={utvidedeBeskrivelser}
                  html={meldingOmVedtak.data.html}
                />
              </div>
            </>
          );
        }}
      </Await>
    </Suspense>
  );
}
