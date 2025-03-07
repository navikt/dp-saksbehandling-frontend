import { Heading } from "@navikt/ds-react";
import { IOrkestratorBarnOpplysning } from "../../../mocks/data/mock-orkestrator-barn-opplysninger";
import styles from "./OrkestratorOpplysning.module.css";
import { OrkestratorOpplysningRad } from "./OrkestratorOpplysningRad";

interface IProps {
  barnNummer: number;
  barnOpplysning: IOrkestratorBarnOpplysning;
}

export function OrkestratorOpplysningTabell({ barnNummer, barnOpplysning }: IProps) {
  return (
    <>
      <Heading level="4" size="xsmall" className={styles.opplysningHeader} spacing>
        Barn {barnNummer}
      </Heading>
      <table className={styles.opplysningTabell}>
        <tbody>
          <OrkestratorOpplysningRad
            opplysning="fornavnOgMellomnavn"
            verdi={barnOpplysning.fornavnOgMellomnavn}
            fraRegister={barnOpplysning.fraRegister}
          />
          <OrkestratorOpplysningRad
            opplysning="etternavn"
            verdi={barnOpplysning.etternavn}
            fraRegister={barnOpplysning.fraRegister}
          />
          <OrkestratorOpplysningRad
            opplysning="fødselsdato"
            verdi={barnOpplysning.fødselsdato}
            fraRegister={barnOpplysning.fraRegister}
          />
          <OrkestratorOpplysningRad
            opplysning="oppholdssted"
            verdi={barnOpplysning.oppholdssted}
            fraRegister={barnOpplysning.fraRegister}
          />
          <OrkestratorOpplysningRad
            opplysning="forsørgerBarnet"
            verdi={barnOpplysning.forsørgerBarnet}
            fraRegister={false}
          />
          <OrkestratorOpplysningRad
            opplysning="barnetilleggFom"
            verdi={barnOpplysning.barnetilleggFom || ""}
          />
          <OrkestratorOpplysningRad
            opplysning="barnetilleggTom"
            verdi={barnOpplysning.barnetilleggTom || ""}
          />
          <OrkestratorOpplysningRad
            opplysning="kvalifisererTilBarnetillegg"
            verdi={barnOpplysning.kvalifisererTilBarnetillegg || false}
            bold
          />
          <OrkestratorOpplysningRad
            opplysning="begrunnelse"
            verdi={barnOpplysning.begrunnelse || ""}
          />
        </tbody>
      </table>
    </>
  );
}
