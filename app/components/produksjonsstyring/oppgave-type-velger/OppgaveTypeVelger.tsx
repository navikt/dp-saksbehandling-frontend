import { BodyShort, Button, Detail } from "@navikt/ds-react";
import { useSearchParams } from "react-router";

import { FilterKnapp } from "~/components/produksjonsstyring/filter-knapp/FilterKnapp";

import { components } from "../../../../openapi/saksbehandling-typer";

interface IProps {
  serier: components["schemas"]["StatistikkV2Serie"][];
}

export function OppgaveTypeVelger({ serier }: IProps) {
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
            {serier.reduce(
              (acc, serie) => acc + serie.verdier.reduce((sum, verdi) => sum + verdi, 0),
              0,
            )}
          </BodyShort>
        </Button>

        {serier.map((serie) => (
          <FilterKnapp
            key={serie.navn}
            emneknagg={{ navn: serie.navn, kategori: "oppgavetype" }}
            antallOppgaver={serie.verdier.reduce((acc, verdi) => acc + verdi, 0)}
          />
        ))}
      </div>
    </div>
  );
}
