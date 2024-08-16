import { Textarea } from "@navikt/ds-react";
import { useMeldingOmVedtakTekst } from "~/hooks/useMeldingOmVedtakTekst";
import styles from "./FritekstEditor.module.css";

export function FritekstEditor() {
  const { utvidetBeskrivelser, setUtvidetBeskrivelser, valgtBrevMal } = useMeldingOmVedtakTekst();

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
      {valgtBrevMal?.brevBlokker.map(
        (blokk) =>
          blokk.utvidetBeskrivelse && (
            <Textarea
              key={blokk.textId}
              className={styles.container}
              label={`Utvidet beskrivelse for ${blokk.textId}`}
              onChange={(event) => oppdaterUtvidetBeskrivelse(event.target.value, blokk.textId)}
              value={
                utvidetBeskrivelser.find((beskrivelse) => beskrivelse.id === blokk.textId)?.text
              }
            />
          ),
      )}
    </div>
  );
}
