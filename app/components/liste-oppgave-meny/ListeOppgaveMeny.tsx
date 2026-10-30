import { MenuElipsisHorizontalCircleIcon } from "@navikt/aksel-icons";
import { ActionMenu, Button, HStack } from "@navikt/ds-react";

import { OppgaveHandlingerModaler } from "~/components/oppgave-valg/OppgaveHandlingerModaler";
import { OppgaveValgKnapp } from "~/components/oppgave-valg/OppgaveValgKnapp";
import { hentGyldigeOppgaveValg, IGyldigeOppgaveHandlinger } from "~/context/oppgave-context";
import { useOppgaveHandlinger } from "~/hooks/useOppgaveHandlinger";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import { components } from "../../../openapi/saksbehandling-typer";

interface IProps {
  listeOppgave: components["schemas"]["OppgaveOversikt"];
}

export function ListeOppgaveMeny({ listeOppgave }: IProps) {
  const { handlinger, isPending, leggTilbake, avbryt } = useOppgaveHandlinger(listeOppgave);
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const erSaksbehandler =
    listeOppgave.saksbehandlerIdent === saksbehandler.onPremisesSamAccountName;
  const erBeslutter = listeOppgave.beslutterIdent === saksbehandler.onPremisesSamAccountName;
  const gyldigeOppgaveValg = hentGyldigeOppgaveValg(listeOppgave, erSaksbehandler, erBeslutter);
  const oppgaveValg = (Object.keys(handlinger) as IGyldigeOppgaveHandlinger[]).filter((valg) =>
    gyldigeOppgaveValg.includes(valg),
  );
  const direkteValg = oppgaveValg[0];
  const menyValg = oppgaveValg.slice(1);

  function renderValg(valg: IGyldigeOppgaveHandlinger, iconOnly = false) {
    const handling = handlinger[valg];
    if (handling) {
      return (
        <OppgaveValgKnapp key={valg} handling={handling} iconOnly={iconOnly} disabled={isPending} />
      );
    }
  }

  return (
    <>
      <HStack gap="space-2" wrap={false} align="center">
        {direkteValg && renderValg(direkteValg, true)}
        {menyValg.length === 1 && renderValg(menyValg[0], true)}
        {menyValg.length > 1 && (
          <ActionMenu>
            <ActionMenu.Trigger>
              <Button
                variant="tertiary-neutral"
                size={"xsmall"}
                icon={<MenuElipsisHorizontalCircleIcon />}
                title={"Valg"}
                disabled={isPending}
              />
            </ActionMenu.Trigger>

            <ActionMenu.Content>{menyValg.map((valg) => renderValg(valg))}</ActionMenu.Content>
          </ActionMenu>
        )}
      </HStack>
      <OppgaveHandlingerModaler
        leggTilbake={leggTilbake}
        avbryt={avbryt}
        isPending={isPending}
        lovligeEndringer={listeOppgave.lovligeEndringer}
      />
    </>
  );
}
