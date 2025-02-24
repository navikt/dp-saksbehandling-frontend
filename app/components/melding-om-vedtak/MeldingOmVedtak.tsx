import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";

import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
import { UtvidedeBeskrivelser } from "~/components/utvidede-beskrivelser/UtvidedeBeskrivelser";
import { useMeldingOmVedtakTekst } from "~/hooks/useMeldingOmVedtakTekst";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { IMeldingOmVedtak } from "~/models/melding-om-vedtak.server";
import { isIMeldingOmVedtak } from "~/utils/type-guards";

import styles from "./MeldingOmVedtak.module.css";

export function MeldingOmVedtak({ readOnly }: { readOnly?: boolean }) {
  const fetcher = useFetcher();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const [meldingOmVedtak, setMeldingOmVedtak] = useState<IMeldingOmVedtak | null>(null);
  const { utvidedeBeskrivelser } = useMeldingOmVedtakTekst();

  useEffect(() => {
    const fetchData = async () => {
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
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (fetcher.data && isIMeldingOmVedtak(fetcher.data)) {
      setMeldingOmVedtak(fetcher.data);
    }
  }, [fetcher.data]);

  return (
    <div className={styles.container}>
      <UtvidedeBeskrivelser utvidetBeskrivelser={utvidedeBeskrivelser} readOnly={readOnly} />

      {meldingOmVedtak && (
        <div className={styles.previewContainer}>
          <MeldingOmVedtakPreview
            meldingOmVedtak={meldingOmVedtak}
            utvidetBeskrivelser={utvidedeBeskrivelser}
          />
        </div>
      )}
    </div>
  );
}
