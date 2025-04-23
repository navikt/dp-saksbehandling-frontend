import { FormScope } from "@rvf/react-router";
import classNames from "classnames";
import { components } from "openapi/soknad-orkestrator-typer";

import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import {
  formatterOrkestratorOpplysningVerdi,
  hentOrkestratorBarnOpplysningLabel,
} from "~/utils/orkestrator-opplysninger.utils";
import { maskerVerdi } from "~/utils/skjul-sensitiv-opplysning";

import { OrkestratorOpplysning } from "../orkestrator-opplysning/OrkestratorOpplysning";
import styles from "./OrkestratorBarn.module.css";
import { OrkestratorTag } from "./OrkestratorTag";

interface IProps {
  opplysning: components["schemas"]["BarnOpplysning"];
  readOnly?: boolean;
  formScope: FormScope<string>;
}

export function OrkestratorOpplysningLinje({ opplysning, readOnly, formScope }: IProps) {
  const { skjulSensitiveOpplysninger } = useSaksbehandler();
  const sensitiveOpplyninger = ["fornavnOgMellomnavn", "etternavn"];
  const skjulOpplysning = sensitiveOpplyninger.includes(opplysning.id);

  if (readOnly) {
    return (
      <div className={classNames(styles.orkestratorOpplysningsLinje, styles.bakgrunn)}>
        <div>{hentOrkestratorBarnOpplysningLabel(opplysning.id)}</div>
        <div>
          {skjulOpplysning && skjulSensitiveOpplysninger
            ? maskerVerdi(opplysning.verdi)
            : formatterOrkestratorOpplysningVerdi(opplysning)}
        </div>
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
