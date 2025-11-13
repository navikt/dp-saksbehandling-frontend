import { ChevronDownIcon } from "@navikt/aksel-icons";
import { ActionMenu, Button } from "@navikt/ds-react";

import { OppgaveValgAvbryt } from "~/components/v2/oppgave-valg/OppgaveValgAvbryt";
import { OppgaveValgLeggTilbake } from "~/components/v2/oppgave-valg/OppgaveValgLeggTilbake";
import { OppgaveValgRekjørBehandling } from "~/components/v2/oppgave-valg/OppgaveValgRekjørBehandling";
import { OppgaveValgSettPåVent } from "~/components/v2/oppgave-valg/OppgaveValgSettPåVent";
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
              size={"small"}
              icon={<ChevronDownIcon aria-hidden />}
              iconPosition="right"
            >
              Oppgavemeny
            </Button>
          </ActionMenu.Trigger>

          <ActionMenu.Content>
            {gyldigeOppgaveValg.map((valg) => (
              <div key={valg}>
                {valg === "legg-tilbake-oppgave" && (
                  <OppgaveValgLeggTilbake oppgaveId={oppgave.oppgaveId} />
                )}
                {valg === "utsett-oppgave" && <OppgaveValgSettPåVent oppgave={oppgave} />}
                {valg === "rekjor-behandling" && (
                  <OppgaveValgRekjørBehandling
                    behandlingId={oppgave.behandlingId}
                    personIdent={oppgave.person.ident}
                  />
                )}
                {valg === "avbryt-behandling" && <OppgaveValgAvbryt oppgave={oppgave} />}
              </div>
            ))}
          </ActionMenu.Content>
        </ActionMenu>
      )}
    </>
  );
}
