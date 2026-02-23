import {
  MenuElipsisHorizontalCircleIcon,
  PersonGavelIcon,
  PersonPencilIcon,
} from "@navikt/aksel-icons";
import { ActionMenu, Button } from "@navikt/ds-react";

import { OppgaveValgBehandle } from "~/components/oppgave-valg/OppgaveValgBehandle";
import { OppgaveValgLeggTilbake } from "~/components/oppgave-valg/OppgaveValgLeggTilbake";
import { OppgaveValgRekjørBehandling } from "~/components/oppgave-valg/OppgaveValgRekjørBehandling";
import { hentGyldigeOppgaveValg } from "~/context/oppgave-context";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import { components } from "../../../openapi/saksbehandling-typer";
import { OppgaveValgAvbryt } from "../oppgave-valg/OppgaveValgAvbryt";
import { OppgaveValgSe } from "../oppgave-valg/OppgaveValgSe";

interface IProps {
  listeOppgave: components["schemas"]["OppgaveOversikt"];
}

export function ListeOppgaveMeny({ listeOppgave }: IProps) {
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const minOppgave = listeOppgave.behandlerIdent === saksbehandler.onPremisesSamAccountName;
  const gyldigeOppgaveValg = hentGyldigeOppgaveValg(listeOppgave, minOppgave);

  return (
    <>
      {gyldigeOppgaveValg.length > 0 && (
        <ActionMenu>
          <ActionMenu.Trigger>
            <Button
              variant="tertiary-neutral"
              size={"xsmall"}
              icon={<MenuElipsisHorizontalCircleIcon />}
              title={"Valg"}
            />
          </ActionMenu.Trigger>

          <ActionMenu.Content>
            {gyldigeOppgaveValg.map((valg) => {
              switch (valg) {
                case "legg-tilbake-oppgave":
                  return <OppgaveValgLeggTilbake key={valg} oppgaveId={listeOppgave.oppgaveId} />;

                case "rekjor-behandling":
                  return (
                    <OppgaveValgRekjørBehandling
                      key={valg}
                      behandlingId={listeOppgave.behandlingId}
                      personIdent={listeOppgave.personIdent}
                    />
                  );

                case "behandle-oppgave":
                  return (
                    <OppgaveValgBehandle
                      key={valg}
                      listeOppgave={listeOppgave}
                      label={"Behandle oppgave"}
                      icon={<PersonPencilIcon aria-hidden={true} />}
                    />
                  );

                case "kontroller-oppgave":
                  return (
                    <OppgaveValgBehandle
                      key={valg}
                      listeOppgave={listeOppgave}
                      label={"Kontroller oppgave"}
                      icon={<PersonGavelIcon aria-hidden={true} />}
                    />
                  );

                case "se-oppgave":
                  return (
                    <OppgaveValgSe
                      key={valg}
                      oppgaveId={listeOppgave.oppgaveId}
                      behandlingId={listeOppgave.behandlingId}
                      behandlingType={listeOppgave.behandlingType}
                    />
                  );

                case "avbryt-behandling":
                  return (
                    <OppgaveValgAvbryt
                      key={valg}
                      oppgaveId={listeOppgave.oppgaveId}
                      lovligeEndringer={
                        listeOppgave.lovligeEndringer || {
                          avbrytAarsaker: [],
                          paaVentAarsaker: [],
                          leggTilbakeAarsaker: [],
                        }
                      }
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
