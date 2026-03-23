import { Tag, TagProps } from "@navikt/ds-react";

import { components } from "../../../../openapi/soknad-orkestrator-typer";

type Kilde = NonNullable<components["schemas"]["BarnOpplysning"]["kilde"]>;

interface IProps {
  kilde?: components["schemas"]["BarnOpplysning"]["kilde"];
}

function hentVariant(kilde: Kilde): TagProps["variant"] {
  switch (kilde) {
    case "register":
      return "alt1";
    case "saksbehandler":
      return "neutral";
    case "soknad":
      return "warning";
  }
}

function hentLabel(kilde: Kilde): string {
  switch (kilde) {
    case "register":
      return "Register";
    case "saksbehandler":
      return "Saksbehandler";
    case "soknad":
      return "Søknad";
  }
}

export function OrkestratorTag({ kilde }: IProps) {
  if (kilde === undefined) {
    return null;
  }

  return (
    <Tag variant={hentVariant(kilde)} size="xsmall">
      {hentLabel(kilde)}
    </Tag>
  );
}
