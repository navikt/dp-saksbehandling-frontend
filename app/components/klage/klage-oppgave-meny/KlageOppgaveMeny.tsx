import { ChevronDownIcon } from "@navikt/aksel-icons";
import { ActionMenu, Button } from "@navikt/ds-react";

import { OppgaveValgFerdigstillKlage } from "~/components/oppgave-valg/OppgaveValgFerdigstillKlage";
import { OppgaveValgLeggTilbake } from "~/components/oppgave-valg/OppgaveValgLeggTilbake";
import { OppgaveValgSettPåVent } from "~/components/oppgave-valg/OppgaveValgSettPåVent";
import { OppgaveValgTrekkKlage } from "~/components/oppgave-valg/OppgaveValgTrekkKlage";
import { IGyldigeOppgaveHandlinger } from "~/context/oppgave-context";
import { useOppgave } from "~/hooks/useOppgave";

import { components } from "../../../../openapi/saksbehandling-typer";

function KlageOppgaveMeny() {
  const { gyldigeOppgaveValg, oppgave } = useOppgave();

  const relevanteOppgaveValg = gyldigeOppgaveValg.filter((valg) =>
    ["legg-tilbake-oppgave", "utsett-oppgave", "trekk-klage", "ferdigstill-klage"].includes(valg),
  );

  return (
    <>
      {relevanteOppgaveValg.length > 0 && (
        <ActionMenu>
          <ActionMenu.Trigger>
            <Button
              variant="secondary"
              size="small"
              icon={<ChevronDownIcon aria-hidden />}
              iconPosition="right"
            >
              Oppgavemeny
            </Button>
          </ActionMenu.Trigger>
          <ActionMenu.Content>
            {relevanteOppgaveValg.map((valg) => {
              return renderOppgaveValg(oppgave, valg);
            })}
          </ActionMenu.Content>
        </ActionMenu>
      )}
    </>
    // <div className={"card flex justify-end gap-2 p-2"}>
    //   {gyldigeOppgaveValg.map((valg) => (
    //     <div key={valg}>{renderOppgaveValg(oppgave, valg)}</div>
    //   ))}
    // </div>
  );
}

export default KlageOppgaveMeny;

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
