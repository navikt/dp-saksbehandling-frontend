import { BodyShort, Heading, Label } from "@navikt/ds-react";

import { components as behandlingComponents } from "@/openapi/behandling-typer";
import { components } from "@/openapi/soknad-orkestrator-typer";
import { formaterTilNorskDato } from "~/utils/dato.utils";

interface IProps {
  barnNummer: number;
  barn: behandlingComponents["schemas"]["BarnVerdi"];
  orkestratorLandliste: components["schemas"]["Land"][];
}

export function OrkestratorBarn({ barnNummer, barn, orkestratorLandliste }: IProps) {
  const oppholdssted = orkestratorLandliste.find(
    (land) => land.alpha3kode === barn.statsborgerskap,
  )?.navn;

  return (
    <div className="card card-raised min-w-2xl p-2">
      <Heading level="4" size="xsmall" className="m-2" spacing>
        Barn {barnNummer}
      </Heading>

      <div className="flex flex-col gap-4 p-2">
        <dl>
          <Label as="dt">Fornavn</Label>
          <BodyShort as="dd">{barn.fornavnOgMellomnavn}</BodyShort>
          <Label as="dt">Etternavn</Label>
          <BodyShort as="dd">{barn.etternavn}</BodyShort>
          <Label as="dt">Fødselsdato</Label>
          <BodyShort as="dd">{formaterTilNorskDato(barn.fødselsdato)}</BodyShort>
          <Label as="dt">Oppholdssted</Label>
          <BodyShort as="dd">{oppholdssted}</BodyShort>
          <Label as="dt">Rett til barnetillegg</Label>
          <BodyShort as="dd">{barn.kvalifiserer ? "Ja" : "Nei"}</BodyShort>
        </dl>
      </div>
    </div>
  );
}
