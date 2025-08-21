import { Tag } from "@navikt/ds-react";

import { hentBehandlingTypeTekstForVisning } from "~/components/oppgave-filter-behandling-type/OppgaveFilterBehandlingType";
import { TILSTANDER } from "~/components/oppgave-filter-status/OppgaveFilterStatus";
import { formaterTilNorskDato } from "~/utils/dato.utils";

import { components } from "../../../openapi/saksbehandling-typer";

interface IProps {
  aktivtOppgaveSok: string;
}

export function AktivOppgaveSøk({ aktivtOppgaveSok }: IProps) {
  const aktivtSøkParams = new URLSearchParams(aktivtOppgaveSok);
  const emneknagger = aktivtSøkParams.getAll("emneknagg");
  const behandlingTyper = aktivtSøkParams.getAll(
    "behandlingType",
  ) as components["schemas"]["BehandlingType"][];
  const tilstander = aktivtSøkParams.getAll("tilstand");
  const tom = aktivtSøkParams.get("tom");
  const fom = aktivtSøkParams.get("fom");

  return (
    <div className={"mt-4 flex flex-wrap justify-center gap-2"}>
      {emneknagger.map((knagg) => (
        <Tag key={knagg} size={"xsmall"} variant={"alt1"}>
          {knagg}
        </Tag>
      ))}

      {behandlingTyper.map((behandlingType) => (
        <Tag key={behandlingType} size={"xsmall"} variant={"info"}>
          {hentBehandlingTypeTekstForVisning(behandlingType)}
        </Tag>
      ))}

      {tilstander.map((tilstand) => (
        <Tag key={tilstand} size={"xsmall"} variant={"alt2"}>
          {TILSTANDER.find((t) => t.id === tilstand)?.tekst ?? tilstand}
        </Tag>
      ))}

      {(fom || tom) && (
        <Tag size={"xsmall"} variant={"alt3"}>
          {`${fom ? formaterTilNorskDato(fom) : "--"} – ${tom ? formaterTilNorskDato(tom) : "--"}`}
        </Tag>
      )}
    </div>
  );
}
