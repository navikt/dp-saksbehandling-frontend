import { Detail, Skeleton, Tag } from "@navikt/ds-react";
import type { AkselColor } from "@navikt/ds-react/types/theme";

import { hentFargevariantForUdefinertEmneknagg } from "~/utils/tekst.utils";

import type { components } from "../../../openapi/saksbehandling-typer";

type Oppgave = components["schemas"]["OppgaveOversikt"];
type Emneknagg = Oppgave["emneknagger"][number];

function renderTags(
  tags: Oppgave["emneknagger"],
  getColor: (tag: Emneknagg) => AkselColor,
  isLoading = false,
) {
  return (
    <>
      {tags.map((tag) => (
        <Tag
          key={tag.visningsnavn}
          size="xsmall"
          variant={isLoading ? "moderate" : "outline"}
          data-color={getColor(tag)}
          className="whitespace-nowrap"
        >
          <Detail as={isLoading ? Skeleton : "p"}>{tag.visningsnavn}</Detail>
        </Tag>
      ))}
    </>
  );
}

function tagsInCategory(oppgave: Oppgave, kategori: string) {
  return oppgave.emneknagger.filter((tag) => tag.kategori === kategori);
}

export function renderOppgaveArsakTags(oppgave: Oppgave, isLoading = false) {
  const tags = (kategori: string) => tagsInCategory(oppgave, kategori);

  return (
    <>
      {renderTags(tags("AVSLAGSGRUNN"), () => "danger", isLoading)}
      {renderTags(tags("AVBRUTT_GRUNN"), () => "warning", isLoading)}
      {renderTags(tags("PAA_VENT"), () => "brand-magenta", isLoading)}
      {renderTags(tags("OPPFOLGING_ARSAK"), () => "meta-purple", isLoading)}
      {renderTags(tags("BEHANDLET_HENDELSE_TYPE"), () => "meta-lime", isLoading)}
      {renderTags(
        tags("UDEFINERT"),
        (tag) => hentFargevariantForUdefinertEmneknagg(tag.visningsnavn) ?? "neutral",
        isLoading,
      )}
      {renderTags(tags("ETTERSENDING"), () => "info", isLoading)}
    </>
  );
}
