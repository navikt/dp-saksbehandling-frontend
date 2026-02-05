import { BodyShort, Button, Detail } from "@navikt/ds-react";
import { useSearchParams } from "react-router";

import { FilterKnapp } from "~/components/produksjonsstyring/filter-knapp/FilterKnapp";

import { components } from "../../../../openapi/saksbehandling-typer";

interface IProps {
  grupper: components["schemas"]["StatistikkV2Gruppe"][];
}

export function OppgaveStatusVelger({ grupper }: IProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <BodyShort weight={"semibold"}>Status</BodyShort>
      <div className={"flex gap-2"}>
        <Button
          className={"h-[120px] w-[120px] text-left"}
          variant={searchParams.get("tilstand") ? "secondary" : "primary"}
          onClick={() => {
            searchParams.delete("tilstand");
            setSearchParams(searchParams);
          }}
        >
          <Detail>Alle statuser</Detail>
          <BodyShort weight={"semibold"} className={"mt-2"}>
            {grupper.reduce((acc, gruppe) => acc + gruppe.total, 0)}
          </BodyShort>
        </Button>

        {grupper.map((gruppe) => (
          <FilterKnapp
            key={gruppe.navn}
            emneknagg={{ navn: gruppe.navn, kategori: "tilstand" }}
            antallOppgaver={gruppe.total}
          />
        ))}
      </div>
    </div>
  );
}
