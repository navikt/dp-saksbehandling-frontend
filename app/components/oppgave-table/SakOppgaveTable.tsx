import { Detail, Heading, Tag } from "@navikt/ds-react";
import type { AkselColor } from "@navikt/ds-react/types/theme";
import { differenceInCalendarDays } from "date-fns";
import { useState } from "react";

import { GenericTable, type TableColumn } from "~/components/generic-table/GenericTable";
import { ListeOppgaveMeny } from "~/components/liste-oppgave-meny/ListeOppgaveMeny";
import { NoteButton, NoteModal } from "~/components/note-button/NoteButton";
import { renderOppgaveArsakTags } from "~/components/oppgave-table/oppgave-table.utils";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import {
  hentFargevariantForSøknadsresultat,
  hentOppgaveTilstandTekst,
  hentUtløstAvTekstForVisning,
} from "~/utils/tekst.utils";

import type { components as behandlingComponents } from "../../../openapi/behandling-typer";
import type { components } from "../../../openapi/saksbehandling-typer";
import styles from "./OppgaveTable.module.css";

export interface SakOppgaveTableRow {
  behandling: behandlingComponents["schemas"]["BehandlingSammendrag"];
  oppgave: components["schemas"]["OppgaveOversikt"];
}

type Oppgave = components["schemas"]["OppgaveOversikt"];

const renderTags = (
  tags: Oppgave["emneknagger"],
  getColor: (tag: Oppgave["emneknagger"][number]) => AkselColor,
) => (
  <>
    {tags.map((tag) => (
      <Tag
        key={tag.visningsnavn}
        size="xsmall"
        variant="outline"
        data-color={getColor(tag)}
        className="whitespace-nowrap"
      >
        <Detail as="span">{tag.visningsnavn}</Detail>
      </Tag>
    ))}
  </>
);

function tagsInCategory(oppgave: Oppgave, kategori: string) {
  return oppgave.emneknagger.filter((tag) => tag.kategori === kategori);
}

const columns = {
  opprettet: { header: "Opprettet" },
  behandlet: { header: "Behandlet" },
  utlostAv: { header: "Utløst av" },
  rettighet: { header: "Rettighet" },
  tilstand: { header: "Status" },
  utsattTilDato: { header: "Dager på vent" },
  utfall: { header: "Utfall" },
  arsak: { header: "Årsak" },
  saksbehandler: { header: "Saksbehandler" },
  beslutter: { header: "Beslutter" },
  notat: {},
  valg: { header: "Valg" },
} as const satisfies Record<string, TableColumn>;

interface SakOppgaveTableProps {
  oppgaverOgBehandlinger: readonly SakOppgaveTableRow[];
  totaltAntallOppgaver: number;
  tittel?: string;
  icon?: React.ReactNode;
}

export function SakOppgaveTable({
  oppgaverOgBehandlinger,
  totaltAntallOppgaver,
  tittel,
  icon,
}: SakOppgaveTableProps) {
  const [selectedNoteKey, setSelectedNoteKey] = useState<string>();

  return (
    <div className="flex flex-col p-4">
      <div className={styles.oppgavelisteHeader}>
        {tittel && (
          <Heading size="xsmall" spacing className={styles.heading}>
            {icon}
            {tittel}
          </Heading>
        )}
        {totaltAntallOppgaver > 0 && (
          <Detail textColor="subtle" className={styles.antallOppgaver}>
            {`Antall oppgaver ${totaltAntallOppgaver || oppgaverOgBehandlinger.length}`}
          </Detail>
        )}
      </div>

      <GenericTable
        columns={columns}
        data={oppgaverOgBehandlinger}
        getRowKey={(row) => row.oppgave.oppgaveId}
        defaultColumn="opprettet"
        emptyMessage="Fant ingen oppgaver"
      >
        {(columnKey, row) => {
          const { oppgave, behandling } = row;

          switch (columnKey) {
            case "opprettet":
              return (
                <Detail textColor="subtle">
                  {formaterTilNorskDato(oppgave.tidspunktOpprettet)}
                </Detail>
              );
            case "behandlet":
              return (
                <Detail textColor="subtle">
                  {behandling.ferdigstilt ? formaterTilNorskDato(behandling.ferdigstilt) : "-"}
                </Detail>
              );
            case "utlostAv":
              return (
                <Detail className="flex items-center gap-2">
                  {hentUtløstAvTekstForVisning(oppgave.utlostAv, true)}
                  {renderTags(tagsInCategory(oppgave, "GJENOPPTAK"), () => "neutral")}
                </Detail>
              );
            case "rettighet":
              return (
                <Detail>
                  {tagsInCategory(oppgave, "RETTIGHET")
                    .map((tag) => tag.visningsnavn)
                    .join(", ")}
                </Detail>
              );
            case "tilstand":
              return (
                <Detail className="flex gap-2 whitespace-nowrap">
                  {hentOppgaveTilstandTekst(oppgave.tilstand)}
                </Detail>
              );
            case "utsattTilDato": {
              if (oppgave.tilstand !== "PAA_VENT" || !oppgave.utsattTilDato) return null;
              const dager = differenceInCalendarDays(oppgave.utsattTilDato, new Date());
              return (
                <Tag size="xsmall" variant="outline" data-color="brand-magenta">
                  <Detail>{`${dager} ${dager === 1 ? "dag" : "dager"} igjen`}</Detail>
                </Tag>
              );
            }
            case "utfall":
              return behandling.førteTil ? (
                <Tag
                  size="xsmall"
                  variant="outline"
                  data-color={hentFargevariantForSøknadsresultat(behandling.førteTil)}
                  className="whitespace-nowrap"
                >
                  <Detail>{behandling.førteTil}</Detail>
                </Tag>
              ) : null;
            case "arsak":
              return <div className="flex flex-wrap gap-2">{renderOppgaveArsakTags(oppgave)}</div>;
            case "saksbehandler":
              return <Detail>{oppgave.saksbehandlerIdent}</Detail>;
            case "beslutter":
              return <Detail>{oppgave.beslutterIdent ?? "Ikke tildelt"}</Detail>;
            case "notat":
              return (
                <NoteButton
                  oppgaveTilstand={oppgave.tilstand}
                  noteKey={oppgave.oppgaveId}
                  onClick={() => setSelectedNoteKey(oppgave.oppgaveId)}
                />
              );
            case "valg":
              return <ListeOppgaveMeny listeOppgave={oppgave} />;
          }
        }}
      </GenericTable>
      {selectedNoteKey && (
        <NoteModal onClose={() => setSelectedNoteKey(undefined)} noteKey={selectedNoteKey} />
      )}
    </div>
  );
}
