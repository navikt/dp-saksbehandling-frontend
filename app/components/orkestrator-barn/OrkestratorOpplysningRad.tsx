import { IOrkestratorBarnOpplysning } from "~/models/orkestrator-opplysning.server";
import {
  hentFormatertOpplysninigsverdi,
  hentOrkestratorOpplysningVisningTekst,
} from "~/utils/orkestrator-opplysninger.utils";
import { OrkestratorOpplysning } from "../orkestrator-opplysning/OrkestratorOpplysning";
import { OrkestratorTag } from "./OrkestratorTag";
import { FormScope } from "@rvf/remix";

interface IProps {
  opplysning: IOrkestratorBarnOpplysning;
  readOnly?: boolean;
  formScope: FormScope<string>;
}

export function OrkestratorOpplysningRad({ opplysning, readOnly, formScope }: IProps) {
  if (readOnly) {
    return (
      <tr>
        <td>{hentOrkestratorOpplysningVisningTekst(opplysning.id)}</td>
        <td>{hentFormatertOpplysninigsverdi(opplysning)}</td>
        <td>
          <OrkestratorTag kilde={opplysning.kilde} />
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>
        <OrkestratorOpplysning opplysning={opplysning} formScope={formScope} />
      </td>
      <td></td>
      <td>
        <OrkestratorTag kilde={opplysning.kilde} />
      </td>
    </tr>
  );
}
