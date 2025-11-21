import { BodyLong, Detail, Process } from "@navikt/ds-react";

import { useOppgave } from "~/hooks/useOppgave";
import { formaterTilNorskDato } from "~/utils/dato.utils";

export function OppgaveHistorikk() {
  const { oppgave } = useOppgave();

  return (
    <div className={"py-2"}>
      <Process className={"aksel--compact"}>
        {oppgave.historikk.map((hendelse, index) => (
          <Process.Event
            key={index}
            title={hendelse.tittel}
            status={index === oppgave.historikk.length - 1 ? "uncompleted" : "completed"}
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
