import { BodyLong, Detail, Process } from "@navikt/ds-react";

import { formaterTilNorskDato } from "~/utils/dato.utils";

import { components } from "../../../openapi/saksbehandling-typer";

interface IProps {
  oppgave: components["schemas"]["Oppgave"];
}

export function OppgaveHistorikk({ oppgave }: IProps) {
  return (
    <div className={"px-2 py-4"}>
      <Process className={"aksel--compact"}>
        {oppgave.historikk.map((hendelse, index) => (
          <Process.Event
            key={index}
            title={hendelse.tittel}
            timestamp={formaterTilNorskDato(hendelse.tidspunkt, true)}
          >
            <BodyLong size={"small"}>{hendelse.body}</BodyLong>

            <Detail className={"flex flex-col"} textColor={"subtle"}>
              <span className={"capitalize"}>{hendelse.behandler.rolle}</span>
              <span>{hendelse.behandler.navn}</span>
            </Detail>
          </Process.Event>
        ))}
      </Process>
    </div>
  );
}
