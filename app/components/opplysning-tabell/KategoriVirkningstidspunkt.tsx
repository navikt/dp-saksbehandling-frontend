import type { KategoriProps } from "./OpplysningTabellContent";
import styles from "./OpplysningTabell.module.css";
import { Table } from "@navikt/ds-react";
import { OpplysningTabellLinje } from "./OpplysningTabellLinje";

export function KategoriVirkningstidspunkt({ opplysninger, readonly }: KategoriProps) {
  const keys = ["Søknadsdato", "fagsakId", "Ønsker dagpenger fra dato"];

  const filteredOpplysninger = opplysninger.filter((opplysning) => {
    return keys.includes(opplysning.navn);
  });
  return (
    <div>
      <div className={styles.kategoriHeader}>
        <h1>Fastsett Virkningstidpunkt</h1>
        <p>
          Finn tidspunkt alle vilkår er oppfylt. Videre noe som hjelper og forklarer om noe er
          uklart om virkningstidspunktet.
        </p>
      </div>
      <Table>
        {filteredOpplysninger.map((opplysning) => (
          <OpplysningTabellLinje
            key={opplysning.navn}
            opplysning={opplysning}
            readonly={readonly}
          />
        ))}
      </Table>
    </div>
  );
}
