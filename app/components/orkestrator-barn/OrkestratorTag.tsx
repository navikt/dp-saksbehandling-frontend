import { Tag } from "@navikt/ds-react";
import { IOrkestratorKilde } from "~/models/orkestrator-opplysning.server";

interface IProps {
  kilde?: IOrkestratorKilde;
}

export function OrkestratorTag({ kilde }: IProps) {
  if (kilde === undefined) {
    return null;
  }

  return (
    <Tag variant={kilde === "register" ? "alt1" : "warning"} size="small">
      {kilde === "register" ? "Register" : "Søknad"}
    </Tag>
  );
}
