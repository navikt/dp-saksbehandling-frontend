import { FormScope } from "@rvf/remix";
import { IOrkestratorBarnOpplysning } from "~/models/orkestrator-opplysning.server";
import {
  hentFormatertOpplysninigsverdi,
  hentOrkestratorOpplysningVisningTekst,
} from "~/utils/orkestrator-opplysninger.utils";
import { OrkestratorOpplysning } from "../orkestrator-opplysning/OrkestratorOpplysning";
import styles from "./OrkestratorBarn.module.css";
import { OrkestratorTag } from "./OrkestratorTag";
import classNames from "classnames";

interface IProps {
  opplysning: IOrkestratorBarnOpplysning;
  readOnly?: boolean;
  formScope: FormScope<string>;
}

export function OrkestratorOpplysninLinje({ opplysning, readOnly, formScope }: IProps) {
  if (readOnly) {
    return (
      <div className={classNames(styles.orkestratorOpplysningsLinje, styles.bakgrunn)}>
        <div>{hentOrkestratorOpplysningVisningTekst(opplysning.id)}</div>
        <div>{hentFormatertOpplysninigsverdi(opplysning)}</div>
        <div className={styles.alightRight}>
          <OrkestratorTag kilde={opplysning.kilde} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.orkestratorOpplysningsLinje}>
      <div>
        <OrkestratorOpplysning opplysning={opplysning} formScope={formScope} />
      </div>
      <div />
      <div className={styles.alightRight}>
        <OrkestratorTag kilde={opplysning.kilde} />
      </div>
    </div>
  );
}
