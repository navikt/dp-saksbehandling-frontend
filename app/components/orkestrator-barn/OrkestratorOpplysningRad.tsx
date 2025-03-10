import { IOrkestratorBarnOpplysning } from "~/models/orkestrator-opplysning.server";
import {
  hentFormatertOpplysninigsverdi,
  hentOrkestratorOpplysningVisningTekst,
} from "~/utils/orkestrator-opplysninger.utils";
import { OrkestratorOpplysning } from "../orkestrator-opplysning/OrkestratorOpplysning";
import { OrkestratorTag } from "./OrkestratorTag";

interface IProps {
  opplysning: IOrkestratorBarnOpplysning;
  readOnly?: boolean;
}

export function OrkestratorOpplysningRad({ opplysning, readOnly }: IProps) {
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
        <OrkestratorOpplysning opplysning={opplysning} />
      </td>
      <td>
        <OrkestratorTag kilde={opplysning.kilde} />
      </td>
    </tr>
  );
}
