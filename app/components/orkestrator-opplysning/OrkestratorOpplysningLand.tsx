import { Select } from "@navikt/ds-react";
import { FormScope, useField } from "@rvf/remix";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { IOrkestratorBarnOpplysning } from "~/models/orkestrator-opplysning.server";
import { hentOrkestratorBarnOpplysningLabel } from "~/utils/orkestrator-opplysninger.utils";

interface IProps {
  opplysning: IOrkestratorBarnOpplysning;
  formScope: FormScope<string>;
}

export function OrkestratorOpplysningLand({ opplysning, formScope }: IProps) {
  const { orkestratorLandliste } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const field = useField(formScope);

  // Todo: Finn ut hvordan vi skal håndtere readOnly på den her
  // Det skal være mulig å endre barn oppholdsland uansett om det er fra register eller søknad
  return (
    <Select
      {...field.getInputProps()}
      error={field.error()}
      label={hentOrkestratorBarnOpplysningLabel(opplysning.id)}
      size="small"
      readOnly={opplysning.kilde === "register"}
    >
      <option value="">Velg land</option>
      {orkestratorLandliste.map((land) => (
        <option key={land.alpha3kode} value={land.alpha3kode}>
          {land.navn}
        </option>
      ))}
    </Select>
  );
}
