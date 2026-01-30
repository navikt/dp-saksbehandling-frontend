import { BodyShort, Button, Detail } from "@navikt/ds-react";
import { useSearchParams } from "react-router";

import { FilterKnapp, IEmneknagg } from "~/components/produksjonsstyring/filter-knapp/FilterKnapp";

export function OppgaveTypeVelger() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <BodyShort weight={"semibold"}>Oppgavetyper</BodyShort>
      <div className={"flex gap-2"}>
        <Button
          className={"h-[120px] w-[120px] text-left"}
          variant={searchParams.get("oppgavetype") ? "secondary" : "primary"}
          onClick={() => {
            searchParams.delete("oppgavetype");
            setSearchParams(searchParams);
          }}
        >
          <Detail>Alle oppgavetyper</Detail>
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
    kategori: "oppgavetype",
    navn: "Søknader",
  },
  {
    kategori: "oppgavetype",
    navn: "Klager",
  },
  {
    kategori: "oppgavetype",
    navn: "Innsendinger",
  },
  {
    kategori: "oppgavetype",
    navn: "Meldekort",
  },
  {
    kategori: "oppgavetype",
    navn: "Manuelle",
  },
];
