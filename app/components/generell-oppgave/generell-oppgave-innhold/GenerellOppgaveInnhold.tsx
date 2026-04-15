import { BodyLong, BodyShort, Heading } from "@navikt/ds-react";
import { components } from "openapi/saksbehandling-typer";

interface IProps {
  generellOppgave: components["schemas"]["GenerellOppgave"];
}

export function GenerellOppgaveInnhold({ generellOppgave }: IProps) {
  return (
    <div className="card flex flex-1 flex-col gap-6 p-6">
      <div className="flex flex-col gap-2">
        <Heading size="medium" level="2">
          {generellOppgave.tittel}
        </Heading>
      </div>

      {generellOppgave.beskrivelse && (
        <div className="flex flex-col gap-1">
          <BodyShort size="small" weight="semibold">
            Beskrivelse
          </BodyShort>
          <BodyLong>{generellOppgave.beskrivelse}</BodyLong>
        </div>
      )}

      {generellOppgave.strukturertData &&
        Object.keys(generellOppgave.strukturertData).length > 0 && (
          <div className="flex flex-col gap-2">
            <Heading size="small" level="3">
              Data
            </Heading>
            <div className="rounded-(--ax-radius-8) border border-(--ax-border-neutral-subtle) p-4">
              <dl className="flex flex-col gap-3">
                {Object.entries(generellOppgave.strukturertData).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex flex-col gap-0.5 border-b border-(--ax-border-neutral-subtle) pb-2 last:border-b-0 last:pb-0"
                  >
                    <dt>
                      <BodyShort size="small" weight="semibold">
                        {key}
                      </BodyShort>
                    </dt>
                    <dd>
                      <BodyShort size="small">{String(value)}</BodyShort>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        )}
    </div>
  );
}
