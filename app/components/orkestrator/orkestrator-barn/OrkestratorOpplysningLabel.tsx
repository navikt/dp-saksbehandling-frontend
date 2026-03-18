import { OrkestratorTag } from "~/components/orkestrator/orkestrator-barn/OrkestratorTag";
import { hentOrkestratorBarnOpplysningLabel } from "~/utils/orkestrator-opplysninger.utils";

import { components } from "../../../../openapi/soknad-orkestrator-typer";

interface IProps {
  opplysning: components["schemas"]["BarnOpplysning"];
}

export function OrkestratorOpplysningLabel({ opplysning }: IProps) {
  return (
    <div className={"flex gap-2"}>
      {hentOrkestratorBarnOpplysningLabel(opplysning.id)}
      {opplysning.kilde ? <OrkestratorTag kilde={opplysning.kilde} /> : ""}
    </div>
  );
}
