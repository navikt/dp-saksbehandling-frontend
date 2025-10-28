import { ChevronDownIcon } from "@navikt/aksel-icons";
import { ActionMenu, Button } from "@navikt/ds-react";

import { components as saksbehandlingComponent } from "~/../openapi/saksbehandling-typer";
import { OppgaveMenyAvbryt } from "~/components/v2/oppgave-meny/OppgaveMenyAvbryt";
import { OppgaveMenyLeggTilbake } from "~/components/v2/oppgave-meny/OppgaveMenyLeggTilbake";
import { OppgaveMenyRekjørBehandling } from "~/components/v2/oppgave-meny/OppgaveMenyRekjørBehandling";
import { OppgaveMenySettPåVent } from "~/components/v2/oppgave-meny/OppgaveMenySettPåVent";
import { OppgaveTildel } from "~/components/v2/oppgave-tildel/OppgaveTildel";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export type IGyldigeOppgaveHandlinger = "legg-tilbake" | "utsett" | "avbryt" | "rekjor-behandling";

function hentGyldigeOppgaveValg(
  minOppgave: boolean,
  oppgave: saksbehandlingComponent["schemas"]["Oppgave"],
): IGyldigeOppgaveHandlinger[] {
  const handlinger: IGyldigeOppgaveHandlinger[] = [];

  if (oppgave.tilstand === "AVBRUTT") {
    return handlinger;
  }

  if (!minOppgave) {
    handlinger.push("legg-tilbake");
    return handlinger;
  }

  switch (oppgave.tilstand) {
    case "UNDER_BEHANDLING":
      handlinger.push("rekjor-behandling", "legg-tilbake", "utsett", "avbryt");

      return handlinger;
    case "UNDER_KONTROLL":
      handlinger.push("legg-tilbake");

      return handlinger;
    default:
      return [];
  }
}

interface IProps {
  oppgave: saksbehandlingComponent["schemas"]["Oppgave"];
}

export function OppgaveMeny({ oppgave }: IProps) {
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const minOppgave =
    (oppgave.saksbehandler?.ident === saksbehandler.onPremisesSamAccountName &&
      oppgave.tilstand === "UNDER_BEHANDLING") ||
    (oppgave.beslutter?.ident === saksbehandler.onPremisesSamAccountName &&
      oppgave.tilstand === "UNDER_KONTROLL");
  const gyldigeOppgaveValg = hentGyldigeOppgaveValg(minOppgave, oppgave);

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
                {oppgave.tilstand === "KLAR_TIL_BEHANDLING" && <OppgaveTildel />}
              </div>
            ))}
          </ActionMenu.Content>
        </ActionMenu>
      )}
    </>
  );
}
