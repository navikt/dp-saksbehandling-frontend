import { Alert, BodyLong, Button, Heading, Loader } from "@navikt/ds-react";
import { useFetcher } from "@remix-run/react";
import classnames from "classnames";
import { useEffect, useState } from "react";

import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
import { UtvidedeBeskrivelser } from "~/components/utvidede-beskrivelser/UtvidedeBeskrivelser";
import { IAlert } from "~/context/alert-context";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { IMeldingOmVedtak, IUtvidetBeskrivelse } from "~/models/melding-om-vedtak.server";
import { logger } from "~/utils/logger.utils";
import { isAlert, isIMeldingOmVedtak } from "~/utils/type-guards";

import styles from "./MeldingOmVedtak.module.css";

export function MeldingOmVedtak({ readOnly }: { readOnly?: boolean }) {
  const fetcher = useFetcher();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  const [meldingOmVedtak, setMeldingOmVedtak] = useState<IMeldingOmVedtak | null>(null);
  const [utvidedeBeskrivelser, setUtvidedeBeskrivelser] = useState<IUtvidetBeskrivelse[]>(
    meldingOmVedtak?.utvidedeBeskrivelser || [],
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<IAlert | null>(null);

  async function hentMeldingOmVedtak() {
    try {
      const formData = new FormData();
      formData.append("behandlingId", oppgave.behandlingId);
      formData.append("fornavn", oppgave.person.fornavn);
      formData.append("mellomnavn", oppgave.person.mellomnavn || "");
      formData.append("etternavn", oppgave.person.etternavn);
      formData.append("fodselsnummer", oppgave.person.ident);
      if (oppgave.saksbehandler) {
        formData.append("saksbehandler", JSON.stringify(oppgave.saksbehandler));
      }
      if (oppgave.beslutter) {
        formData.append("beslutter", JSON.stringify(oppgave.beslutter));
      }

      fetcher.submit(formData, {
        action: "/api/hent-melding-om-vedtak",
        method: "post",
      });
    } catch (error) {
      logger.error(error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      await hentMeldingOmVedtak();
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (fetcher.data && isIMeldingOmVedtak(fetcher.data)) {
      setLoading(false);
      setMeldingOmVedtak(fetcher.data);
      setUtvidedeBeskrivelser(fetcher.data.utvidedeBeskrivelser);
    }

    if (fetcher.data && isAlert(fetcher.data)) {
      setLoading(false);
      setError(fetcher.data);
    }
  }, [fetcher.data]);

  return (
    <>
      <div className={styles.loaderErrorContainer}>
        <Loader size="xlarge" className={classnames("mt-4", styles.loader)} />
        {loading && <Loader size="xlarge" />}
        {error && (
          <Alert variant={error.variant}>
            <Heading size="small">{error.title}</Heading>
            {error.body && <BodyLong>{error.body}</BodyLong>}

            <Button size="xsmall" onClick={() => hentMeldingOmVedtak()}>
              Prøv på nytt
            </Button>
          </Alert>
        )}
      </div>

      {meldingOmVedtak && (
        <div className={styles.meldingOmVedtakContainer}>
          <UtvidedeBeskrivelser
            utvidedeBeskrivelser={utvidedeBeskrivelser}
            setUtvidedeBeskrivelser={setUtvidedeBeskrivelser}
            readOnly={readOnly}
          />

          <div className={styles.previewContainer}>
            <MeldingOmVedtakPreview
              meldingOmVedtak={meldingOmVedtak}
              utvidetBeskrivelser={utvidedeBeskrivelser}
            />
          </div>
        </div>
      )}
    </>
  );
}
