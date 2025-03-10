import {
  hentFormatertOpplysninigsverdi,
  hentOrkestratorOpplysningVisningTekst,
} from "~/utils/orkestrator-opplysninger.utils";
import { OrkestratorTag } from "./OrkestratorTag";
import { IOrkestratorKilde } from "~/models/orkestrator-opplysning.server";

interface IProps {
  opplysning: string;
  verdi: string | boolean;
  kilde?: IOrkestratorKilde;
}

export function OrkestratorOpplysning({ opplysning, verdi, kilde }: IProps) {
  return (
    <tr>
      <td>{hentOrkestratorOpplysningVisningTekst(opplysning)}</td>
      <td>{hentFormatertOpplysninigsverdi(opplysning, verdi)}</td>
      <td>
        <OrkestratorTag kilde={kilde} />
      </td>
    </tr>
  );
}
