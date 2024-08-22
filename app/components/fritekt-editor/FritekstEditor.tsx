import { Detail, Textarea } from "@navikt/ds-react";
import { useMeldingOmVedtakTekst } from "~/hooks/useMeldingOmVedtakTekst";
import type { ISanityBrevBlokk } from "~/sanity/sanity-types";
import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "~/hooks/useDebouncedCallback";
import { formaterNorskDato } from "~/utils/dato.utils";
import { useFirstRender } from "~/hooks/useFirstRender";
import styles from "./FritekstEditor.module.css";
import { logger } from "~/utils/logger.utils";

export function FritekstEditor(props: { brevBlokker: ISanityBrevBlokk[] }) {
  const { utvidetBeskrivelser, setUtvidetBeskrivelser } = useMeldingOmVedtakTekst();

  function oppdaterUtvidetBeskrivelse(text: string, id: string) {
    let oppdatertUtvidetBeskrivelse = [...utvidetBeskrivelser];

    const utvidetBeskrivelseIndex = utvidetBeskrivelser.findIndex(
      (beskrivelse) => beskrivelse.id === id,
    );

    if (utvidetBeskrivelseIndex !== -1) {
      oppdatertUtvidetBeskrivelse[utvidetBeskrivelseIndex].text = text;
    } else {
      oppdatertUtvidetBeskrivelse = [...utvidetBeskrivelser, { id, text }];
    }

    setUtvidetBeskrivelser(oppdatertUtvidetBeskrivelse);
  }

  return (
    <div>
      {props.brevBlokker?.map(
        (blokk) =>
          blokk.utvidetBeskrivelse && (
            <Fritekst
              key={blokk.textId}
              label={`Utvidet beskrivelse for ${blokk.textId}`}
              onChange={(verdi) => oppdaterUtvidetBeskrivelse(verdi, blokk.textId)}
              verdi={
                utvidetBeskrivelser.find((beskrivelse) => beskrivelse.id === blokk.textId)?.text ||
                ""
              }
            />
          ),
      )}
    </div>
  );
}

interface IFritekst {
  verdi: string;
  label: string;
  onChange: (verdi: string) => void;
  sistLagretDato?: string;
}

export function Fritekst(props: IFritekst) {
  const isFirstRender = useFirstRender();
  const [sistLagret, setSistLagret] = useState(props.sistLagretDato);
  const [verdi, setVerdi] = useState(props.verdi);
  const [debouncedVerdi, setDebouncedVerdi] = useState<string>(verdi);
  const debouncedChange = useDebouncedCallback(setDebouncedVerdi, 2000);

  useEffect(() => {
    if (!isFirstRender) {
      // TODO: Lagre verdi
      logger.info("LAGRE: ", debouncedVerdi);
      setSistLagret(formaterNorskDato(new Date().toString(), true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedVerdi]);

  function onChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const verdi = event.currentTarget.value;
    setVerdi(verdi);
    props.onChange(verdi);
    debouncedChange(verdi);
  }

  return (
    <>
      <Textarea
        className={styles.container}
        label={props.label}
        value={verdi}
        onChange={onChange}
        onBlur={debouncedChange.flush}
      />
      {sistLagret && (
        <Detail textColor="subtle" size="small">
          Lagret {sistLagret}
        </Detail>
      )}
    </>
  );
}
