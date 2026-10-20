import { Detail, Heading } from "@navikt/ds-react";
import omit from "lodash/omit";
import { useState } from "react";

import { GenericTable, type TableColumn } from "~/components/generic-table/GenericTable";
import { NoteModal } from "~/components/note-button/NoteButton";
import { OppgaveTablePaginering } from "~/components/oppgave-table/OppgaveTablePaginering";
import { renderOppgaveKolonne } from "~/components/oppgave-table/render-oppgave-kolonne";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";

import type { components } from "../../../openapi/saksbehandling-typer";
import styles from "./OppgaveTable.module.css";

type Oppgave = components["schemas"]["OppgaveOversikt"];

const columns = {
  tidspunktOpprettet: { header: "Opprettet", sortKey: "opprettet" },
  utlostAv: { header: "Utløst av", sortKey: "utlostAv" },
  rettighet: { header: "Rettighet" },
  personIdent: {
    header: "Fødselsnummer",
  },
  tilstand: { header: "Status", sortKey: "status" },
  utsattTilDato: { header: "Dager på vent", sortKey: "utsattTil" },
  utfall: { header: "Utfall" },
  arsak: { header: "Årsak" },
  saksbehandler: { header: "Saksbehandler", sortKey: "saksbehandler" },
  beslutter: { header: "Beslutter", sortKey: "beslutter" },
  notat: {},
  valg: { header: "Valg" },
} as const satisfies Record<string, TableColumn>;

type TableColumnKey = keyof typeof columns;

interface OppgaveTableProps {
  oppgaver: readonly Oppgave[];
  totaltAntallOppgaver: number;
  excludedColumns?: TableColumnKey[];
  tittel?: string;
  icon?: React.ReactNode;
  henterOppgaver?: boolean;
}

export function OppgaveTable({
  oppgaver,
  totaltAntallOppgaver,
  excludedColumns = [],
  tittel,
  icon,
  henterOppgaver = false,
}: OppgaveTableProps) {
  const [selectedNoteKey, setSelectedNoteKey] = useState<string>();
  const { skjulSensitiveOpplysninger } = useSaksbehandler();
  const visibleColumns = omit(columns, excludedColumns) as Record<TableColumnKey, TableColumn>;

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
            {!henterOppgaver && `Antall oppgaver ${totaltAntallOppgaver || oppgaver.length}`}
            {henterOppgaver && "Laster oppgaver..."}
          </Detail>
        )}
      </div>

      <GenericTable
        columns={visibleColumns}
        data={oppgaver}
        getRowKey={(oppgave) => oppgave.oppgaveId}
        defaultColumn="tidspunktOpprettet"
        emptyMessage="Fant ingen oppgaver"
      >
        {(columnKey, value) =>
          renderOppgaveKolonne(
            columnKey,
            value,
            henterOppgaver,
            setSelectedNoteKey,
            skjulSensitiveOpplysninger,
          )
        }
      </GenericTable>
      <OppgaveTablePaginering totaltAntallOppgaver={totaltAntallOppgaver} />
      {selectedNoteKey && (
        <NoteModal onClose={() => setSelectedNoteKey(undefined)} noteKey={selectedNoteKey} />
      )}
    </div>
  );
}
