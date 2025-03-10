import { Select } from "@navikt/ds-react";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { IOrkestratorBarnOpplysning } from "~/models/orkestrator-opplysning.server";
import { hentOrkestratorOpplysningVisningTekst } from "~/utils/orkestrator-opplysninger.utils";

interface IProps {
  opplysning: IOrkestratorBarnOpplysning;
}

export function OrkestratorOpplysningLand({ opplysning }: IProps) {
  const { orkestratorLandliste } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return (
    <Select
      label={hentOrkestratorOpplysningVisningTekst(opplysning.id)}
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
