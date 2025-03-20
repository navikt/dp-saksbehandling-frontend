import { Suspense, useEffect, useState } from "react";
import { Await } from "react-router";

import { CenteredLoader } from "~/components/centered-loader/CenteredLoader";
import { HttpProblemAlert } from "~/components/http-problem-alert/HttpProblemAlert";
import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
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
  const { meldingOmVedtakResponse } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const [utvidedeBeskrivelser, setUtvidedeBeskrivelser] = useState<
    components["schemas"]["UtvidetBeskrivelse"][]
  >([]);

  useEffect(() => {
    const test = async () => {
      const meldingOmVedtak = await meldingOmVedtakResponse;
      if (meldingOmVedtak.data) {
        setUtvidedeBeskrivelser(meldingOmVedtak.data.utvidedeBeskrivelser ?? []);
      }
    };

    test();
  }, [meldingOmVedtakResponse]);

  return (
    <Suspense fallback={<CenteredLoader size={"large"} />}>
      <Await
        resolve={meldingOmVedtakResponse}
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
                {meldingOmVedtak.data.utvidedeBeskrivelser && (
                  <UtvidedeBeskrivelser
                    utvidedeBeskrivelser={utvidedeBeskrivelser}
                    setUtvidedeBeskrivelser={setUtvidedeBeskrivelser}
                    readOnly={readOnly}
                  />
                )}

                <div className={styles.previewContainer}>
                  <MeldingOmVedtakPreview
                    utvidedeBeskrivelser={utvidedeBeskrivelser}
                    // @ts-expect-error TODO: Fiks type backend
                    html={meldingOmVedtak.data.html}
                  />
                </div>
              </div>
            </>
          );
        }}
      </Await>
    </Suspense>
  );
}
