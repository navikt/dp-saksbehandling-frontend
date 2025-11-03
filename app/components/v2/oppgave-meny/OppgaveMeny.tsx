import { ChevronDownIcon } from "@navikt/aksel-icons";
import { ActionMenu, Button } from "@navikt/ds-react";

import { OppgaveMenyAvbryt } from "~/components/v2/oppgave-meny/OppgaveMenyAvbryt";
import { OppgaveMenyLeggTilbake } from "~/components/v2/oppgave-meny/OppgaveMenyLeggTilbake";
import { OppgaveMenyRekjørBehandling } from "~/components/v2/oppgave-meny/OppgaveMenyRekjørBehandling";
import { OppgaveMenySettPåVent } from "~/components/v2/oppgave-meny/OppgaveMenySettPåVent";
import { OppgaveMenyTildel } from "~/components/v2/oppgave-meny/OppgaveMenyTildel";
import { useOppgave } from "~/hooks/useOppgave";

export function OppgaveMeny() {
  const { oppgave, gyldigeOppgaveValg } = useOppgave();

  return (
    <>
      {gyldigeOppgaveValg.length > 0 && (
        <ActionMenu>
          <ActionMenu.Trigger>
            <Button
              variant="secondary"
              size={"xsmall"}
              icon={<ChevronDownIcon aria-hidden />}
              iconPosition="right"
            >
              Oppgavemeny
            </Button>
          </ActionMenu.Trigger>

          <ActionMenu.Content>
            {gyldigeOppgaveValg.map((valg) => (
              <div key={valg}>
                {valg === "legg-tilbake" && <OppgaveMenyLeggTilbake oppgave={oppgave} />}
                {valg === "utsett" && <OppgaveMenySettPåVent oppgave={oppgave} />}
                {valg === "rekjor-behandling" && <OppgaveMenyRekjørBehandling oppgave={oppgave} />}
                {valg === "avbryt" && <OppgaveMenyAvbryt oppgave={oppgave} />}
                {oppgave.tilstand === "KLAR_TIL_BEHANDLING" && <OppgaveMenyTildel />}
              </div>
            ))}
          </ActionMenu.Content>
        </ActionMenu>
      )}
    </>
  );
}
