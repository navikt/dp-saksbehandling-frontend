import { FormScope } from "@rvf/remix";
import { IOrkestratorBarnOpplysning } from "~/models/orkestrator-opplysning.server";
import {
  hentOrkestratorBarnOpplysningVerdi,
  hentOrkestratorBarnOpplysningLabel,
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
        <div>{hentOrkestratorBarnOpplysningLabel(opplysning.id)}</div>
        <div>{hentOrkestratorBarnOpplysningVerdi(opplysning)}</div>
        <div className={styles.alightRight}>
          <OrkestratorTag kilde={opplysning.kilde} />
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(styles.orkestratorOpplysningsLinje, styles.korrigering)}>
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
