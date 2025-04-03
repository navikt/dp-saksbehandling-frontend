import { Tag } from "@navikt/ds-react";

import { components } from "../../../openapi/soknad-orkestrator-typer";

interface IProps {
  kilde?: components["schemas"]["BarnOpplysning"]["kilde"];
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
