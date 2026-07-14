import { ChevronDownIcon } from "@navikt/aksel-icons";
import { ActionMenu, Button } from "@navikt/ds-react";

import { OppgaveValgFerdigstillBehandlingKlage } from "~/components/oppgave-valg/OppgaveValgFerdigstillBehandlingKlage";
import { OppgaveValgFerdigstillKlage } from "~/components/oppgave-valg/OppgaveValgFerdigstillKlage";
import { OppgaveValgLeggTilbake } from "~/components/oppgave-valg/OppgaveValgLeggTilbake";
import { OppgaveValgSettPåVent } from "~/components/oppgave-valg/OppgaveValgSettPåVent";
import { OppgaveValgTrekkKlage } from "~/components/oppgave-valg/OppgaveValgTrekkKlage";
import { IGyldigeOppgaveHandlinger } from "~/context/oppgave-context";
import { useOppgave } from "~/hooks/useOppgave";
import { hentKlageFerdigstillModus } from "~/utils/klage.utils";

import { components } from "../../../../openapi/saksbehandling-typer";

interface IProps {
  klage: components["schemas"]["Klage"];
}

function KlageOppgaveMeny({ klage }: IProps) {
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
              return renderOppgaveValg(oppgave, valg, klage);
            })}
          </ActionMenu.Content>
        </ActionMenu>
      )}
    </>
  );
}

export default KlageOppgaveMeny;

function renderOppgaveValg(
  oppgave: components["schemas"]["Oppgave"],
  valg: IGyldigeOppgaveHandlinger,
  klage: components["schemas"]["Klage"],
) {
  switch (valg) {
    case "legg-tilbake-oppgave":
      return (
        <OppgaveValgLeggTilbake oppgave={oppgave} buttonVariant={"tertiary"} buttonSize={"small"} />
      );

    case "utsett-oppgave":
      return (
        <OppgaveValgSettPåVent oppgave={oppgave} buttonVariant={"tertiary"} buttonSize={"small"} />
      );

    case "trekk-klage":
      return (
        <OppgaveValgTrekkKlage oppgave={oppgave} buttonVariant={"tertiary"} buttonSize={"small"} />
      );

    case "ferdigstill-klage": {
      const modus = hentKlageFerdigstillModus(klage.utfall.verdi, klage.tilstand);

      if (modus === "ferdigstill-behandling") {
        return (
          <OppgaveValgFerdigstillBehandlingKlage
            oppgave={oppgave}
            buttonSize={"small"}
            buttonVariant={"primary"}
          />
        );
      }

      return (
        <OppgaveValgFerdigstillKlage
          oppgave={oppgave}
          buttonSize={"small"}
          buttonVariant={"primary"}
          label={modus === "fullfor-klage" ? "Fullfør klage" : undefined}
        />
      );
    }
  }
}
