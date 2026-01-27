import { BodyShort, Button, Detail } from "@navikt/ds-react";
import { useSearchParams } from "react-router";

import { FilterKnapp, IEmneknagg } from "~/components/produksjonsstyring/filter-knapp/FilterKnapp";

export function OppgaveRettighetVelger() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <BodyShort weight={"semibold"}>Rettighetstyper</BodyShort>
      <div className={"flex gap-2"}>
        <Button
          className={"h-[120px] w-[120px] text-left"}
          variant={searchParams.get("rettighetstype") ? "secondary" : "primary"}
          onClick={() => {
            searchParams.delete("rettighetstype");
            setSearchParams(searchParams);
          }}
        >
          <Detail>Alle rettighetstyper</Detail>
          <BodyShort weight={"semibold"} className={"mt-2"}>
            16
          </BodyShort>
        </Button>

        {RettighetEmneknagger.map((emneknagg) => (
          <FilterKnapp
            key={emneknagg.navn}
            emneknagg={emneknagg}
            antallOppgaver={Math.floor(Math.random() * 401)}
          />
        ))}
      </div>
    </div>
  );
}

const RettighetEmneknagger: IEmneknagg[] = [
  {
    kategori: "rettighetstype",
    navn: "Ordinære",
  },
  {
    kategori: "rettighetstype",
    navn: "Permitering",
  },
  {
    kategori: "rettighetstype",
    navn: "Verneplikt",
  },
  {
    kategori: "rettighetstype",
    navn: "Fiske-permitering",
  },
  {
    kategori: "rettighetstype",
    navn: "Konkurs",
  },
  {
    kategori: "rettighetstype",
    navn: "Utdanning",
  },
  {
    kategori: "rettighetstype",
    navn: "Etablering",
  },
  {
    kategori: "rettighetstype",
    navn: "Eøs",
  },
];
