import { ChevronDownIcon } from "@navikt/aksel-icons";
import { ActionMenu, Button } from "@navikt/ds-react";

import { OppgaveHandlingerModaler } from "~/components/oppgave-valg/OppgaveHandlingerModaler";
import { OppgaveValgFlyttBehandlingTilNySak } from "~/components/oppgave-valg/OppgaveValgFlyttBehandlingTilNySak";
import { OppgaveValgKnapp } from "~/components/oppgave-valg/OppgaveValgKnapp";
import { OppgaveValgRekjørBehandling } from "~/components/oppgave-valg/OppgaveValgRekjørBehandling";
import { OppgaveValgSendTilKontroll } from "~/components/oppgave-valg/OppgaveValgSendTilKontroll";
import { OppgaveValgSettPåVent } from "~/components/oppgave-valg/OppgaveValgSettPåVent";
import { useBehandling } from "~/hooks/useBehandling";
import { useOppgave } from "~/hooks/useOppgave";
import { useOppgaveHandlinger } from "~/hooks/useOppgaveHandlinger";

export function OppgaveMeny() {
  const { oppgave, gyldigeOppgaveValg } = useOppgave();
  const { behandling } = useBehandling();
  const { handlinger, isPending, leggTilbake, avbryt } = useOppgaveHandlinger(oppgave);

  return (
    <>
      {gyldigeOppgaveValg.filter((valg) => valg !== "se-oppgave").length > 0 && (
        <ActionMenu>
          <ActionMenu.Trigger>
            <Button
              className="shrink-0"
              variant="secondary"
              size={"small"}
              icon={<ChevronDownIcon aria-hidden />}
              iconPosition="right"
              disabled={isPending}
            >
              Oppgavemeny
            </Button>
          </ActionMenu.Trigger>

          <ActionMenu.Content>
            {gyldigeOppgaveValg.map((valg) => {
              switch (valg) {
                case "legg-tilbake-oppgave":
                case "returner-oppgave-til-meg":
                case "avbryt-behandling": {
                  const handling = handlinger[valg];
                  return handling ? (
                    <OppgaveValgKnapp key={valg} handling={handling} disabled={isPending} />
                  ) : undefined;
                }

                case "rekjor-behandling":
                  return (
                    <OppgaveValgRekjørBehandling
                      behandlingId={oppgave.behandlingId}
                      personIdent={oppgave.person.ident}
                    />
                  );

                case "utsett-oppgave":
                  return <OppgaveValgSettPåVent oppgave={oppgave} />;

                case "flytt-behandling-til-ny-sak":
                  return <OppgaveValgFlyttBehandlingTilNySak oppgave={oppgave} />;

                // Dette er et valg for å sende oppgaver som egentlig ikke krever totrinnskontroll til kontroll f.eks ved opplæring. Hvis oppgaven krever totrinnskontroll skal vanlig flyt følges og denne knappen skal ikke brukes da den gir grunner for totrinnskontroll som ikke er gyldige.
                case "send-til-kontroll":
                  return behandling.kreverTotrinnskontroll ? undefined : (
                    <OppgaveValgSendTilKontroll oppgave={oppgave} />
                  );
              }
            })}
          </ActionMenu.Content>
        </ActionMenu>
      )}
      <OppgaveHandlingerModaler
        leggTilbake={leggTilbake}
        avbryt={avbryt}
        isPending={isPending}
        lovligeEndringer={oppgave.lovligeEndringer}
      />
    </>
  );
}
