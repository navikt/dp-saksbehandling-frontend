import { Detail, Skeleton, Tag } from "@navikt/ds-react";

import {
  components,
  components as saksbehandlingComponent,
} from "../../../openapi/saksbehandling-typer";

interface IProps {
  oppgave: saksbehandlingComponent["schemas"]["Oppgave"] | components["schemas"]["OppgaveOversikt"];
  lasterOppgaver?: boolean;
}

export function OppgaveÅrsakEmneknagger({ oppgave, lasterOppgaver }: IProps) {
  return (
    <div className={"flex gap-2"}>
      {oppgave.emneknagger
        .filter((emneknagg) => emneknagg.kategori === "AVSLAGSGRUNN")
        .map((emneknagg) => (
          <Tag key={emneknagg.visningsnavn} size={"xsmall"} variant={"error"}>
            <Detail as={lasterOppgaver ? Skeleton : "p"}>{emneknagg.visningsnavn}</Detail>
          </Tag>
        ))}

      {oppgave.emneknagger
        .filter((emneknagg) => emneknagg.kategori === "AVBRUTT_GRUNN")
        .map((emneknagg) => (
          <Tag key={emneknagg.visningsnavn} size={"xsmall"} variant={"warning"}>
            {emneknagg.visningsnavn}
          </Tag>
        ))}

      {oppgave.emneknagger
        .filter((emneknagg) => emneknagg.kategori === "PÅ_VENT")
        .map((emneknagg) => (
          <Tag key={emneknagg.visningsnavn} size={"xsmall"} variant={"alt1"}>
            {emneknagg.visningsnavn}
          </Tag>
        ))}
    </div>
  );
}
