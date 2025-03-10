import { IOrkestratorBarnOpplysning } from "~/models/orkestrator-opplysning.server";
import styles from "../orkestrator-barn/OrkestratorBarn.module.css";
import { TextField } from "@navikt/ds-react";
import {
  hentFormatertOpplysninigsverdi,
  hentOrkestratorOpplysningVisningTekst,
} from "~/utils/orkestrator-opplysninger.utils";
import { OrkestratorTag } from "../orkestrator-barn/OrkestratorTag";

interface IProps {
  opplysning: IOrkestratorBarnOpplysning;
}

export function OrkestratorOpplysningTekst({ opplysning }: IProps) {
  return (
    <TextField
      label={hentOrkestratorOpplysningVisningTekst(opplysning.id)}
      value={hentFormatertOpplysninigsverdi(opplysning)}
      size="small"
      readOnly={opplysning.kilde === "register"}
    />
  );
}
