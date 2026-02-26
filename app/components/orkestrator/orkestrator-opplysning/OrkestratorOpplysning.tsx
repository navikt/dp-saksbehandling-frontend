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
}

export function OrkestratorOpplysning({ opplysning, formScope, orkestratorLandliste }: IProps) {
  switch (opplysning.dataType) {
    case "tekst":
      return <OrkestratorOpplysningTekst opplysning={opplysning} formScope={formScope} />;

    case "land":
      return (
        <OrkestratorOpplysningLand
          opplysning={opplysning}
          formScope={formScope}
          orkestratorLandliste={orkestratorLandliste}
        />
      );

    case "boolsk":
      return <OrkestratorOpplysningBoolsk opplysning={opplysning} formScope={formScope} />;

    case "dato":
      return <OrkestratorOpplysningDato opplysning={opplysning} formScope={formScope} />;

    default:
      logger.error(`Ukjent orkestrator datatype ${opplysning.dataType}`);

      return (
        <>
          {opplysning.id}: {opplysning.verdi}
        </>
      );
  }
}
