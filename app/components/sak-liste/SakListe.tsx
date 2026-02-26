import { BodyShort, CopyButton, ExpansionCard } from "@navikt/ds-react";

import { formaterTilNorskDato } from "~/utils/dato.utils";

import { components } from "../../../openapi/saksbehandling-typer";
import { OppgaveListe } from "../oppgave-liste/OppgaveListe";

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
        const førsteOppgave = sak.oppgaver.at(0);
        const sisteOppgave = sak.oppgaver.at(-1);

        return (
          <ExpansionCard
            key={sak.id}
            className={"expansion--subtil my-4"}
            aria-label={""}
            size={"small"}
          >
            <ExpansionCard.Header>
              <ExpansionCard.Title size={"small"} className={"flex items-center gap-1"}>
                {førsteOppgave && (
                  <BodyShort className={"flex items-center gap-2"} weight={"semibold"}>
                    Sak opprettet: {formaterTilNorskDato(førsteOppgave.tidspunktOpprettet)}
                  </BodyShort>
                )}
                {!førsteOppgave && (
                  <BodyShort className={"flex items-center gap-2"} weight={"semibold"}>
                    SakID ...{sisteIdGruppe}
                  </BodyShort>
                )}
              </ExpansionCard.Title>
              {sisteOppgave && (
                <ExpansionCard.Description>
                  Siste oppgave opprettet: {formaterTilNorskDato(sisteOppgave.tidspunktOpprettet)}
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

              <OppgaveListe oppgaver={sak.oppgaver} totaltAntallOppgaver={sak.oppgaver.length} />
            </ExpansionCard.Content>
          </ExpansionCard>
        );
      })}
    </>
  );
}
