import { IOrkestratorBarnOpplysning } from "~/models/orkestrator-opplysning.server";
import { OrkestratorOpplysningTekst } from "./OrkestratorOpplysningTekst";
import { OrkestratorOpplysningLand } from "./OrkestratorOpplysningLand";
import { OrkestratorOpplysningBoolsk } from "./OrkestratorOpplysningBoolsk";
import { OrkestratorOpplysningDato } from "./OrkestratorOpplysningDato";

interface IProps {
  opplysning: IOrkestratorBarnOpplysning;
}

export function OrkestratorOpplysning({ opplysning }: IProps) {
  switch (opplysning.datatype) {
    case "tekst":
      return <OrkestratorOpplysningTekst opplysning={opplysning} />;

    case "land":
      return <OrkestratorOpplysningLand opplysning={opplysning} />;

    case "dato":
      return <OrkestratorOpplysningDato opplysning={opplysning} />;

    case "boolsk":
      return <OrkestratorOpplysningBoolsk opplysning={opplysning} />;

    default:
      return (
        <>
          {opplysning.id} {opplysning.verdi}
        </>
      );
  }
}
