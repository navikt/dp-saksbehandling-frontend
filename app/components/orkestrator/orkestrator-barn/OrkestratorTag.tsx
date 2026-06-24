import { Tag, TagProps } from "@navikt/ds-react";

import { components } from "@/openapi/behandling-typer";

type Kilde = NonNullable<components["schemas"]["BarnVerdi"]["kilde"]>;

interface IProps {
  kilde?: components["schemas"]["BarnVerdi"]["kilde"];
}

function hentVariant(kilde: Kilde): TagProps["variant"] {
  switch (kilde) {
    case "Register":
      return "alt1";
    case "Saksbehandler":
      return "neutral";
    case "Søknad":
      return "warning";
  }
}

function hentLabel(kilde: Kilde): string {
  switch (kilde) {
    case "Register":
      return "Register";
    case "Saksbehandler":
      return "Saksbehandler";
    case "Søknad":
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
