import type { IUtledetAv } from "~/models/behandling.server";
import { Detail } from "@navikt/ds-react";
import { finnOpplysning } from "~/vilkaar/Vilkaar";
import { Opplysning } from "~/components/opplysning/Opplysning";
import styles from "~/vilkaar/Vilkaar.module.css";

export function OpplysningUtledning({ utledetAv }: { utledetAv: IUtledetAv }) {
  return (
    <ul className={styles.utledetAvListe}>
      <Detail> Utledet av regel: {utledetAv.regel.navn} </Detail>

      {utledetAv.opplysninger.map((opplysningId) => {
        const opplysning = finnOpplysning(opplysningId);
        if (!opplysning) {
          return <li key={opplysningId}>Fant ikke opplysning: {opplysningId}</li>;
        }

        return (
          <li key={opplysningId} className={styles.utledetOpplysningLinje}>
            <span>{opplysning?.navn ?? opplysningId}</span>
            <Opplysning
              opplysning={opplysning}
              verdi={opplysning?.verdi}
              className={styles.opplysningVerdi}
              onChange={(verdi) => console.log(verdi)}
            />
            {opplysning?.utledetAv && <OpplysningUtledning utledetAv={opplysning.utledetAv} />}
          </li>
        );
      })}
    </ul>
  );
}
