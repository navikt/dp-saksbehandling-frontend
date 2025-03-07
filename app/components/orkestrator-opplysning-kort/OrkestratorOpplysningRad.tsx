import { Tag } from "@navikt/ds-react";
import classNames from "classnames";
import {
  hentFormatertOpplysninigsverdi as hentFormatertOpplysningVerdi,
  hentOrkestratorOpplysningVisningTekst as hentOrkestratorOpplysningLabel,
} from "~/utils/orkestrator-opplysninger.utils";
import styles from "./OrkestratorOpplysning.module.css";
import { OrkestratorTag } from "./OrkestratorTag";

interface IProps {
  opplysning: string;
  verdi: string | boolean;
  fraRegister?: boolean;
  bold?: boolean;
}

export function OrkestratorOpplysningRad({ opplysning, verdi, fraRegister, bold }: IProps) {
  return (
    <tr
      className={classNames({
        [styles.bold]: bold,
      })}
    >
      <td>{hentOrkestratorOpplysningLabel(opplysning)}</td>
      <td>{hentFormatertOpplysningVerdi(opplysning, verdi)}</td>
      <td>
        <OrkestratorTag fraRegister={fraRegister} />
      </td>
    </tr>
  );
}
