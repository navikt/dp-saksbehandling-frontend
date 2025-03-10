import { Heading } from "@navikt/ds-react";
import { IOrkestratorBarn } from "~/models/orkestrator-opplysning.server";
import styles from "./OrkestratorBarn.module.css";
import { OrkestratorOpplysning } from "./OrkestratorOpplysning";

interface IProps {
  barnNummer: number;
  barn: IOrkestratorBarn;
}

export function OrkestratorOpplysningTabell({ barnNummer, barn }: IProps) {
  return (
    <>
      <Heading level="4" size="xsmall" className={styles.opplysningHeader} spacing>
        Barn {barnNummer}
      </Heading>
      <table className={styles.opplysningTabell}>
        <tbody>
          {barn.opplysninger.map(({ id, verdi, kilde }, index) => (
            <OrkestratorOpplysning key={index} opplysning={id} verdi={verdi} kilde={kilde} />
          ))}
        </tbody>
      </table>
    </>
  );
}
