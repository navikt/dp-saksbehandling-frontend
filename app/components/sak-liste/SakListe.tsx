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

        return (
          <ExpansionCard
            key={sak.id}
            className={"expansion--subtil card my-4"}
            aria-label={""}
            size={"small"}
          >
            <ExpansionCard.Header>
              <ExpansionCard.Title size={"small"} className={"flex items-center gap-1"}>
                <BodyShort className={"flex items-center gap-2"} weight={"semibold"}>
                  SakID ...{sisteIdGruppe}
                </BodyShort>
              </ExpansionCard.Title>
              <ExpansionCard.Description>
                Siste endret: {formaterTilNorskDato(new Date())}
              </ExpansionCard.Description>
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
