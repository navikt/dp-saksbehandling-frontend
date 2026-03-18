import { FormScope } from "@rvf/react-router";

import { components } from "../../../../openapi/soknad-orkestrator-typer";
import { OrkestratorOpplysning } from "../orkestrator-opplysning/OrkestratorOpplysning";

interface IProps {
  opplysning: components["schemas"]["BarnOpplysning"];
  readOnly?: boolean;
  formScope: FormScope<string | boolean | undefined>;
  orkestratorLandliste: components["schemas"]["Land"][];
}

export function OrkestratorOpplysningLinje({
  opplysning,
  readOnly,
  formScope,
  orkestratorLandliste,
}: IProps) {
  return (
    <div className={"max-w-[350px]"}>
      <OrkestratorOpplysning
        opplysning={opplysning}
        formScope={formScope}
        orkestratorLandliste={orkestratorLandliste}
        readOnly={readOnly}
      />
    </div>
  );
}
