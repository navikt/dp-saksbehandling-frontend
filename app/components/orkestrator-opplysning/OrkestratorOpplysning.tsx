import { FormScope } from "@rvf/react-router";

import { IOrkestratorBarnOpplysning } from "~/models/orkestrator-opplysning.server";
import { logger } from "~/utils/logger.utils";

import { OrkestratorOpplysningBoolsk } from "./OrkestratorOpplysningBoolsk";
import { OrkestratorOpplysningDato } from "./OrkestratorOpplysningDato";
import { OrkestratorOpplysningLand } from "./OrkestratorOpplysningLand";
import { OrkestratorOpplysningTekst } from "./OrkestratorOpplysningTekst";

interface IProps {
  opplysning: IOrkestratorBarnOpplysning;
  formScope: FormScope<string>;
}

export function OrkestratorOpplysning({ opplysning, formScope }: IProps) {
  switch (opplysning.datatype) {
    case "tekst":
      return <OrkestratorOpplysningTekst opplysning={opplysning} formScope={formScope} />;

    case "land":
      return <OrkestratorOpplysningLand opplysning={opplysning} formScope={formScope} />;

    case "boolsk":
      return <OrkestratorOpplysningBoolsk opplysning={opplysning} formScope={formScope} />;

    case "dato":
      return <OrkestratorOpplysningDato opplysning={opplysning} formScope={formScope} />;

    default:
      logger.error(`Ukjent orkestrator datatype ${opplysning.datatype}`);

      return (
        <>
          {opplysning.id}: {opplysning.verdi}
        </>
      );
  }
}
