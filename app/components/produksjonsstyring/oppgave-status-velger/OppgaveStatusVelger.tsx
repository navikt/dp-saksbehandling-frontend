import { BodyShort, Button, Detail } from "@navikt/ds-react";
import { useSearchParams } from "react-router";

import { FilterKnapp, IEmneknagg } from "~/components/produksjonsstyring/filter-knapp/FilterKnapp";

export function OppgaveStatusVelger() {
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
            16
          </BodyShort>
        </Button>

        {statusEmneknagger.map((emneknagg) => (
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

const statusEmneknagger: IEmneknagg[] = [
  {
    kategori: "tilstand",
    navn: "KLAR_TIL_BEHANDLING",
  },
  {
    kategori: "tilstand",
    navn: "UNDER_BEHANDLING",
  },
  {
    kategori: "tilstand",
    navn: "KLAR_TIL_KONTROLL",
  },
  {
    kategori: "tilstand",
    navn: "UNDER_KONTROLL",
  },
  {
    kategori: "tilstand",
    navn: "FERDIG_BEHANDLET",
  },
  {
    kategori: "tilstand",
    navn: "PAA_VENT",
  },
  {
    kategori: "tilstand",
    navn: "AVBRUTT",
  },
];
