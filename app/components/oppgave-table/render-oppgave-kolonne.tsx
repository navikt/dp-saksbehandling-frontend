import { Detail, Skeleton } from "@navikt/ds-react";
import { differenceInCalendarDays } from "date-fns";
import type { ReactNode } from "react";

import { ListeOppgaveMeny } from "~/components/liste-oppgave-meny/ListeOppgaveMeny";
import { NoteButton } from "~/components/note-button/NoteButton";
import {
  renderOppgaveArsakTags,
  renderTags,
  tagsInCategory,
} from "~/components/oppgave-table/oppgave-table.utils";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterTallMedTusenSeperator } from "~/utils/number.utils";
import { maskerVerdi } from "~/utils/skjul-sensitiv-opplysning";
import {
  hentFargevariantForSøknadsresultat,
  hentOppgaveTilstandTekst,
  hentUtløstAvTekstForVisning,
} from "~/utils/tekst.utils";

import type { components } from "../../../openapi/saksbehandling-typer";

type Oppgave = components["schemas"]["OppgaveOversikt"];

export function renderOppgaveKolonne(
  columnKey: string,
  oppgave: Oppgave,
  isLoading: boolean,
  onSelectNote: (oppgaveId: string) => void,
  skjulSensitiveOpplysninger = false,
): ReactNode | undefined {
  const detailAs = isLoading ? Skeleton : "p";

  switch (columnKey) {
    case "tidspunktOpprettet":
      return (
        <Detail textColor="subtle" as={detailAs}>
          {formaterTilNorskDato(oppgave.tidspunktOpprettet)}
        </Detail>
      );
    case "sendtTilKontroll":
      return (
        <Detail as={detailAs}>
          {oppgave.sendtTilKontroll ? formaterTilNorskDato(oppgave.sendtTilKontroll) : "N/A"}
        </Detail>
      );
    case "totaltFeilutbetaltBelop":
      return (
        <Detail as={detailAs}>
          {oppgave.totaltFeilutbetaltBelop !== undefined
            ? `${formaterTallMedTusenSeperator(oppgave.totaltFeilutbetaltBelop)} kr`
            : "N/A"}
        </Detail>
      );
    case "utlostAv":
      return (
        <Detail as={detailAs} className="flex items-center gap-2">
          {hentUtløstAvTekstForVisning(oppgave.utlostAv, true)}
          {renderTags(tagsInCategory(oppgave, "GJENOPPTAK"), () => "neutral", isLoading)}
        </Detail>
      );
    case "rettighet":
      return (
        <Detail as={detailAs}>
          {tagsInCategory(oppgave, "RETTIGHET")
            .map((tag) => tag.visningsnavn)
            .join(", ")}
        </Detail>
      );
    case "personIdent":
      return (
        <Detail as={detailAs}>
          {skjulSensitiveOpplysninger ? maskerVerdi(oppgave.personIdent) : oppgave.personIdent}
        </Detail>
      );
    case "tilstand":
      return (
        <Detail as={detailAs} className="flex gap-2 whitespace-nowrap">
          {hentOppgaveTilstandTekst(oppgave.tilstand)}
        </Detail>
      );
    case "utsattTilDato":
      if (oppgave.tilstand !== "PAA_VENT" || !oppgave.utsattTilDato) return null;
      {
        const dager = differenceInCalendarDays(oppgave.utsattTilDato, new Date());
        return <Detail as={detailAs}>{`${dager} ${dager === 1 ? "dag" : "dager"} igjen`}</Detail>;
      }
    case "utfall":
      return renderTags(
        tagsInCategory(oppgave, "SOKNADSRESULTAT"),
        (tag) => hentFargevariantForSøknadsresultat(tag.visningsnavn),
        isLoading,
      );
    case "arsak":
      return (
        <div className="flex flex-wrap gap-2">{renderOppgaveArsakTags(oppgave, isLoading)}</div>
      );
    case "saksbehandler":
      return <Detail as={detailAs}>{oppgave.saksbehandlerIdent ?? "Ikke tildelt"}</Detail>;
    case "beslutter":
      return <Detail as={detailAs}>{oppgave.beslutterIdent ?? "Ikke tildelt"}</Detail>;
    case "notat":
      return (
        <NoteButton
          oppgaveTilstand={oppgave.tilstand}
          noteKey={oppgave.oppgaveId}
          onClick={() => onSelectNote(oppgave.oppgaveId)}
        />
      );
    case "valg":
      return <ListeOppgaveMeny listeOppgave={oppgave} />;
    default:
      return undefined;
  }
}
