import { Detail, Heading, Skeleton, Tag } from "@navikt/ds-react";
import type { AkselColor } from "@navikt/ds-react/types/theme";
import { differenceInCalendarDays } from "date-fns";
import omit from "lodash/omit";
import { useState } from "react";

import { GenericTable, type TableColumn } from "~/components/generic-table/GenericTable";
import { ListeOppgaveMeny } from "~/components/liste-oppgave-meny/ListeOppgaveMeny";
import { NoteButton, NoteModal } from "~/components/note-button/NoteButton";
import { OppgaveListePaginering } from "~/components/oppgave-liste/OppgaveListePaginering";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { maskerVerdi } from "~/utils/skjul-sensitiv-opplysning";
import {
  hentFargevariantForSøknadsresultat,
  hentFargevariantForUdefinertEmneknagg,
  hentOppgaveTilstandTekst,
  hentUtløstAvTekstForVisning,
} from "~/utils/tekst.utils";

import type { components } from "../../../openapi/saksbehandling-typer";
import styles from "./OppgaveListe.module.css";

type Oppgave = components["schemas"]["OppgaveOversikt"];
const renderTags = (
  tags: Oppgave["emneknagger"],
  getColor: (tag: Oppgave["emneknagger"][number]) => AkselColor,
  isLoading: boolean,
) => (
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

function tagsInCategory(oppgave: Oppgave, kategori: string) {
  return oppgave.emneknagger.filter((tag) => tag.kategori === kategori);
}

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
  henterOppgaver,
}: OppgaveTableProps) {
  const [selectedNoteKey, setSelectedNoteKey] = useState<string>();
  const { skjulSensitiveOpplysninger } = useSaksbehandler();
  const detailAs = henterOppgaver ? Skeleton : "p";
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
        {(columnKey, value) => {
          switch (columnKey) {
            case "tidspunktOpprettet":
              return (
                <Detail textColor="subtle" as={detailAs}>
                  {formaterTilNorskDato(value.tidspunktOpprettet)}
                </Detail>
              );
            case "utlostAv":
              return (
                <Detail as={detailAs} className="flex items-center gap-2">
                  {hentUtløstAvTekstForVisning(value.utlostAv, true)}
                  {renderTags(
                    tagsInCategory(value, "GJENOPPTAK"),
                    () => "neutral",
                    !!henterOppgaver,
                  )}
                </Detail>
              );
            case "rettighet":
              return (
                <Detail>
                  <div className="flex flex-wrap gap-2">
                    {renderTags(
                      tagsInCategory(value, "RETTIGHET"),
                      () => "neutral",
                      !!henterOppgaver,
                    )}
                  </div>
                </Detail>
              );
            case "personIdent":
              return (
                <Detail as={detailAs}>
                  {skjulSensitiveOpplysninger ? maskerVerdi(value.personIdent) : value.personIdent}
                </Detail>
              );
            case "tilstand":
              return (
                <Detail as={detailAs} className="flex gap-2 whitespace-nowrap">
                  {hentOppgaveTilstandTekst(value.tilstand)}
                </Detail>
              );
            case "utsattTilDato": {
              if (value.tilstand !== "PAA_VENT" || !value.utsattTilDato) return null;
              const dager = differenceInCalendarDays(value.utsattTilDato, new Date());
              return (
                <Tag
                  size="xsmall"
                  variant={henterOppgaver ? "moderate" : "outline"}
                  data-color="brand-magenta"
                >
                  <Detail as={detailAs}>{`${dager} ${dager === 1 ? "dag" : "dager"} igjen`}</Detail>
                </Tag>
              );
            }
            case "utfall":
              return renderTags(
                tagsInCategory(value, "SOKNADSRESULTAT"),
                (tag) => hentFargevariantForSøknadsresultat(tag.visningsnavn),
                !!henterOppgaver,
              );
            case "arsak":
              return (
                <div className="flex flex-wrap gap-2">
                  {renderTags(
                    tagsInCategory(value, "AVSLAGSGRUNN"),
                    () => "danger",
                    !!henterOppgaver,
                  )}
                  {renderTags(
                    tagsInCategory(value, "AVBRUTT_GRUNN"),
                    () => "warning",
                    !!henterOppgaver,
                  )}
                  {renderTags(
                    tagsInCategory(value, "PAA_VENT"),
                    () => "brand-magenta",
                    !!henterOppgaver,
                  )}
                  {renderTags(
                    tagsInCategory(value, "OPPFOLGING_ARSAK"),
                    () => "meta-purple",
                    !!henterOppgaver,
                  )}
                  {renderTags(
                    tagsInCategory(value, "BEHANDLET_HENDELSE_TYPE"),
                    () => "meta-lime",
                    !!henterOppgaver,
                  )}
                  {renderTags(
                    tagsInCategory(value, "UDEFINERT"),
                    (tag) => hentFargevariantForUdefinertEmneknagg(tag.visningsnavn) ?? "neutral",
                    !!henterOppgaver,
                  )}
                  {renderTags(
                    tagsInCategory(value, "ETTERSENDING"),
                    () => "info",
                    !!henterOppgaver,
                  )}
                </div>
              );
            case "saksbehandler":
              return <Detail as={detailAs}>{value.saksbehandlerIdent ?? "Ikke tildelt"}</Detail>;
            case "beslutter":
              return <Detail as={detailAs}>{value.beslutterIdent ?? "Ikke tildelt"}</Detail>;
            case "notat":
              return (
                <NoteButton
                  oppgaveTilstand={value.tilstand}
                  noteKey={value.oppgaveId}
                  onClick={() => setSelectedNoteKey(value.oppgaveId)}
                />
              );
            case "valg":
              return <ListeOppgaveMeny listeOppgave={value} />;
          }
        }}
      </GenericTable>
      <OppgaveListePaginering totaltAntallOppgaver={totaltAntallOppgaver} />
      {selectedNoteKey && (
        <NoteModal onClose={() => setSelectedNoteKey(undefined)} noteKey={selectedNoteKey} />
      )}
    </div>
  );
}
