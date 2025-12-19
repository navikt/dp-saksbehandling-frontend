import { BodyShort, CopyButton, ExpansionCard } from "@navikt/ds-react";

import { BehandlingListe } from "~/components/behandling-liste/BehandlingListe";
import { formaterTilNorskDato } from "~/utils/dato.utils";

import { components } from "../../../openapi/saksbehandling-typer";

interface IProps {
  saker: components["schemas"]["Sak"][];
}

export function SakListe({ saker }: IProps) {
  return (
    <>
      {saker.length === 0 && (
        <div className={"card my-4 p-4"}>
          <BodyShort>Personen har ingen saker</BodyShort>
        </div>
      )}

      {saker.map((sak) => {
        const idGrupper = sak.id.split("-");
        const sisteIdGruppe = idGrupper.pop();
        const forsteIdGruppe = idGrupper.join("-");
        const førsteBehandling = sak.behandlinger.at(-1);
        const sisteBehandling = sak.behandlinger.at(0);

        return (
          <ExpansionCard
            key={sak.id}
            className={"expansion--subtil my-4"}
            aria-label={""}
            size={"small"}
          >
            <ExpansionCard.Header>
              <ExpansionCard.Title size={"small"} className={"flex items-center gap-1"}>
                {førsteBehandling && (
                  <BodyShort className={"flex items-center gap-2"} weight={"semibold"}>
                    Sak opprettet: {formaterTilNorskDato(førsteBehandling.opprettet)}
                  </BodyShort>
                )}
                {!førsteBehandling && (
                  <BodyShort className={"flex items-center gap-2"} weight={"semibold"}>
                    SakID ...{sisteIdGruppe}
                  </BodyShort>
                )}
              </ExpansionCard.Title>
              {sisteBehandling && (
                <ExpansionCard.Description>
                  Siste behandling opprettet: {formaterTilNorskDato(sisteBehandling.opprettet)}
                </ExpansionCard.Description>
              )}
            </ExpansionCard.Header>

            <ExpansionCard.Content className={"border-t border-(--ax-border-neutral-subtle)"}>
              <div className={"mb-4 flex items-center gap-1"}>
                <BodyShort>
                  {forsteIdGruppe}-<b>{sisteIdGruppe}</b>
                </BodyShort>
                <CopyButton copyText={sak.id} size={"small"} title={"kopier sakid"} />
              </div>

              <BehandlingListe behandlinger={sak.behandlinger} />
            </ExpansionCard.Content>
          </ExpansionCard>
        );
      })}
    </>
  );
}
