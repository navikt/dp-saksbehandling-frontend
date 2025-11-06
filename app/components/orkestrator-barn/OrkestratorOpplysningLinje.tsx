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
  formScope: FormScope<string | undefined>;
  orkestratorLandliste: components["schemas"]["Land"][];
}

export function OrkestratorOpplysningLinje({
  opplysning,
  readOnly,
  formScope,
  orkestratorLandliste,
}: IProps) {
  const { skjulSensitiveOpplysninger } = useSaksbehandler();

  function hentOpplysningVerdi() {
    if (opplysning.verdi === "null") {
      return "";
    }

    const sensitiveOpplyninger = ["fornavnOgMellomnavn", "etternavn"];
    const skjulOpplysning = sensitiveOpplyninger.includes(opplysning.id);

    if (skjulOpplysning && skjulSensitiveOpplysninger) {
      return maskerVerdi(opplysning.verdi);
    }

    return formatterOrkestratorOpplysningVerdi(opplysning, orkestratorLandliste);
  }

  if (readOnly) {
    return (
      <div className={classNames(styles.orkestratorOpplysningsLinje, styles.bakgrunn)}>
        <div>{hentOrkestratorBarnOpplysningLabel(opplysning.id)}</div>
        <div>{hentOpplysningVerdi()}</div>
        <div className={styles.alightRight}>
          <OrkestratorTag kilde={opplysning.kilde} />
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(styles.orkestratorOpplysningsLinje, styles.korrigering)}>
      <div>
        <OrkestratorOpplysning
          opplysning={opplysning}
          formScope={formScope}
          orkestratorLandliste={orkestratorLandliste}
        />
      </div>
      <div />
      <div className={styles.alightRight}>
        <OrkestratorTag kilde={opplysning.kilde} />
      </div>
    </div>
  );
}
