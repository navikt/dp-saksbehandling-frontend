import { FormScope } from "@rvf/react-router";

import { logger } from "~/utils/logger.utils";

import { components } from "../../../../openapi/soknad-orkestrator-typer";
import { OrkestratorOpplysningBoolsk } from "./OrkestratorOpplysningBoolsk";
import { OrkestratorOpplysningDato } from "./OrkestratorOpplysningDato";
import { OrkestratorOpplysningLand } from "./OrkestratorOpplysningLand";
import { OrkestratorOpplysningTekst } from "./OrkestratorOpplysningTekst";

interface IProps {
  opplysning: components["schemas"]["BarnOpplysning"];
  formScope: FormScope<string | boolean | undefined>;
  orkestratorLandliste: components["schemas"]["Land"][];
  readOnly?: boolean;
}

export function OrkestratorOpplysning({
  opplysning,
  formScope,
  orkestratorLandliste,
  readOnly,
}: IProps) {
  switch (opplysning.dataType) {
    case "tekst":
      return (
        <OrkestratorOpplysningTekst
          opplysning={opplysning}
          formScope={formScope}
          readOnly={readOnly}
        />
      );

    case "land":
      return (
        <OrkestratorOpplysningLand
          opplysning={opplysning}
          formScope={formScope}
          orkestratorLandliste={orkestratorLandliste}
          readOnly={readOnly}
        />
      );

    case "boolsk":
      return (
        <OrkestratorOpplysningBoolsk
          opplysning={opplysning}
          formScope={formScope}
          readOnly={readOnly}
        />
      );

    case "dato":
      return (
        <OrkestratorOpplysningDato
          opplysning={opplysning}
          formScope={formScope}
          readOnly={readOnly}
        />
      );

    default:
      logger.error(`Ukjent orkestrator datatype ${opplysning.dataType}`);

      return (
        <>
          {opplysning.id}: {opplysning.verdi}
        </>
      );
  }
}
