import { OppgaveValgFerdigstillKlage } from "~/components/oppgave-valg/OppgaveValgFerdigstillKlage";
import { OppgaveValgLeggTilbake } from "~/components/oppgave-valg/OppgaveValgLeggTilbake";
import { OppgaveValgSettPåVent } from "~/components/oppgave-valg/OppgaveValgSettPåVent";
import { OppgaveValgTrekkKlage } from "~/components/oppgave-valg/OppgaveValgTrekkKlage";
import { IGyldigeOppgaveHandlinger } from "~/context/oppgave-context";
import { useOppgave } from "~/hooks/useOppgave";

import { components } from "../../../../openapi/saksbehandling-typer";

function KlageOppgaveValg() {
  const { gyldigeOppgaveValg, oppgave } = useOppgave();

  return (
    <div className={"card flex justify-end gap-2 p-2"}>
      {gyldigeOppgaveValg.map((valg) => (
        <div key={valg}>{renderOppgaveValg(oppgave, valg)}</div>
      ))}
    </div>
  );
}

export default KlageOppgaveValg;

function renderOppgaveValg(
  oppgave: components["schemas"]["Oppgave"],
  valg: IGyldigeOppgaveHandlinger,
) {
  switch (valg) {
    case "legg-tilbake-oppgave":
      return (
        <OppgaveValgLeggTilbake
          oppgaveId={oppgave.oppgaveId}
          buttonVariant={"tertiary"}
          buttonSize={"small"}
        />
      );

    case "utsett-oppgave":
      return (
        <OppgaveValgSettPåVent oppgave={oppgave} buttonVariant={"tertiary"} buttonSize={"small"} />
      );

    case "trekk-klage":
      return (
        <OppgaveValgTrekkKlage oppgave={oppgave} buttonVariant={"tertiary"} buttonSize={"small"} />
      );

    case "ferdigstill-klage":
      return (
        <OppgaveValgFerdigstillKlage
          oppgave={oppgave}
          buttonSize={"small"}
          buttonVariant={"primary"}
        />
      );
  }
}
