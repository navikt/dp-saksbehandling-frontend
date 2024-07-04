import { Textarea } from "@navikt/ds-react";
import { useMeldingOmVedtakTekst } from "~/hooks/useMeldingOmVedtakTekst";
import styles from "./FritekstEditor.module.css";

export function FritekstEditor() {
  const { fritekst, setFritekst } = useMeldingOmVedtakTekst();

  return (
    <Textarea
      className={styles.container}
      label="Fritekst"
      value={fritekst}
      onChange={(event) => setFritekst(event.currentTarget.value)}
    />
  );
}
