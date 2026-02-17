import { ChevronDownIcon } from "@navikt/aksel-icons";
import { ActionMenu, Button } from "@navikt/ds-react";

import { OppgaveValgAvbryt } from "~/components/oppgave-valg/OppgaveValgAvbryt";
import { OppgaveValgLeggTilbake } from "~/components/oppgave-valg/OppgaveValgLeggTilbake";
import { OppgaveValgRekjørBehandling } from "~/components/oppgave-valg/OppgaveValgRekjørBehandling";
import { OppgaveValgSendTilKontroll } from "~/components/oppgave-valg/OppgaveValgSendTilKontroll";
import { OppgaveValgSettPåVent } from "~/components/oppgave-valg/OppgaveValgSettPåVent";
import { useOppgave } from "~/hooks/useOppgave";

export function OppgaveMeny() {
  const { oppgave, gyldigeOppgaveValg } = useOppgave();

  return (
    <>
      {gyldigeOppgaveValg.filter((valg) => valg !== "se-oppgave").length > 0 && (
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
            {gyldigeOppgaveValg.map((valg) => {
              switch (valg) {
                case "legg-tilbake-oppgave":
                  return <OppgaveValgLeggTilbake oppgaveId={oppgave.oppgaveId} />;

                case "rekjor-behandling":
                  return (
                    <OppgaveValgRekjørBehandling
                      behandlingId={oppgave.behandlingId}
                      personIdent={oppgave.person.ident}
                    />
                  );

                case "utsett-oppgave":
                  return <OppgaveValgSettPåVent oppgave={oppgave} />;

                case "send-til-kontroll":
                  return <OppgaveValgSendTilKontroll oppgaveId={oppgave.oppgaveId} />;

                case "avbryt-behandling":
                  return (
                    <OppgaveValgAvbryt
                      oppgaveId={oppgave.oppgaveId}
                      lovligeEndringer={oppgave.lovligeEndringer}
                    />
                  );
              }
            })}
          </ActionMenu.Content>
        </ActionMenu>
      )}
    </>
  );
}
