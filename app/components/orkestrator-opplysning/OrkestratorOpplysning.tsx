import { IOrkestratorBarnOpplysning } from "~/models/orkestrator-opplysning.server";
import { OrkestratorOpplysningTekst } from "./OrkestratorOpplysningTekst";
import { OrkestratorOpplysningLand } from "./OrkestratorOpplysningLand";
import { OrkestratorOpplysningBoolsk } from "./OrkestratorOpplysningBoolsk";
import { OrkestratorOpplysningDato } from "./OrkestratorOpplysningDato";
import { FormScope } from "@rvf/remix";

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
      return (
        <>
          {opplysning.id}: {opplysning.verdi}
        </>
      );
  }
}
