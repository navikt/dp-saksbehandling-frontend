import { Select } from "@navikt/ds-react";
import { FormScope, useField } from "@rvf/react-router";
import { components } from "openapi/soknad-orkestrator-typer";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentOrkestratorBarnOpplysningLabel } from "~/utils/orkestrator-opplysninger.utils";

interface IProps {
  opplysning: components["schemas"]["BarnOpplysning"];
  formScope: FormScope<string>;
}

export function OrkestratorOpplysningLand({ opplysning, formScope }: IProps) {
  const { orkestratorLandliste } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId.behandle",
  );
  const field = useField(formScope);

  if (!orkestratorLandliste) {
    return null;
  }
  return (
    <Select
      {...field.getInputProps()}
      error={field.error()}
      label={hentOrkestratorBarnOpplysningLabel(opplysning.id)}
      size="small"
    >
      <option value="">Velg land</option>
      {orkestratorLandliste.map((land: components["schemas"]["Land"]) => (
        <option key={land.alpha3kode} value={land.alpha3kode}>
          {land.navn}
        </option>
      ))}
    </Select>
  );
}
