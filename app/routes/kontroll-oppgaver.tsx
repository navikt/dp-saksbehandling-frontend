import { LayersIcon } from "@navikt/aksel-icons";
import { Detail, Heading, Skeleton } from "@navikt/ds-react";
import { useState } from "react";
import { type LoaderFunctionArgs, redirect, useSearchParams } from "react-router";

import { useOppgaverQuery } from "~/api/oppgave-hooks";
import { GenericTable, type TableColumn } from "~/components/generic-table/GenericTable";
import { ListeOppgaveMeny } from "~/components/liste-oppgave-meny/ListeOppgaveMeny";
import { NoteButton, NoteModal } from "~/components/note-button/NoteButton";
import EmneknaggFilter from "~/components/oppgave-filter/EmneknaggFilter";
import { OppgaveFilterDato } from "~/components/oppgave-filter/OppgaveFilterDato";
import { OppgaveFilterUtløstAv } from "~/components/oppgave-filter/OppgaveFilterUtløstAv";
import {
  renderOppgaveArsakTags,
  renderTags,
  tagsInCategory,
} from "~/components/oppgave-table/oppgave-table.utils";
import tableStyles from "~/components/oppgave-table/OppgaveTable.module.css";
import { OppgaveTablePaginering } from "~/components/oppgave-table/OppgaveTablePaginering";
import styles from "~/route-styles/index.module.css";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import {
  hentFargevariantForSøknadsresultat,
  hentOppgaveTilstandTekst,
  hentUtløstAvTekstForVisning,
} from "~/utils/tekst.utils";
import { appendSearchParamIfNotExists } from "~/utils/url.utils";

export const kontrollOppgaverDefaultParams = [
  { key: "tilstand", value: "KLAR_TIL_KONTROLL" },
  { key: "side", value: "1" },
  { key: "antallOppgaver", value: "50" },
  { key: "sorteringsfelt", value: "sendttilkontroll" },
  { key: "sortering", value: "DESC" },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);

  let appended = false;
  for (const { key, value } of kontrollOppgaverDefaultParams) {
    if (key === "tilstand" || !url.searchParams.has(key)) {
      appended = appendSearchParamIfNotExists(url.searchParams, key, value) || appended;
    }
  }

  if (appended) {
    return redirect(`/kontroll-oppgaver?${url.searchParams.toString()}`);
  }

  return null;
}

const columns = {
  tidspunktOpprettet: { header: "Opprettet" },
  sendtTilKontroll: { header: "Sendt til kontroll", sortKey: "sendttilkontroll" },
  utlostAv: { header: "Utløst av" },
  rettighet: { header: "Rettighet" },
  tilstand: { header: "Status" },
  utfall: { header: "Utfall" },
  arsak: { header: "Årsak" },
  saksbehandler: { header: "Saksbehandler" },
  beslutter: { header: "Beslutter" },
  notat: {},
  valg: { header: "Valg" },
} as const satisfies Record<string, TableColumn>;

export default function KontrollOppgaver() {
  const [searchParams] = useSearchParams();
  const { oppgaver, totaltAntallOppgaver, isFetching } = useOppgaverQuery(searchParams);
  const [selectedNoteKey, setSelectedNoteKey] = useState<string>();
  const detailAs = isFetching ? Skeleton : "p";
  return (
    <div className={styles.container}>
      <nav className={styles.venstreMeny}>
        <OppgaveFilterDato />
        <OppgaveFilterUtløstAv />
        <EmneknaggFilter />
      </nav>

      <main>
        <div className={"card"}>
          <div className="flex flex-col p-4">
            <div className={tableStyles.oppgavelisteHeader}>
              <Heading size="xsmall" spacing className={tableStyles.heading}>
                <LayersIcon fontSize="1.5rem" aria-hidden />
                Kontrolloppgaver
              </Heading>
              {totaltAntallOppgaver > 0 && (
                <Detail textColor="subtle" className={tableStyles.antallOppgaver}>
                  {isFetching ? "Laster oppgaver..." : `Antall oppgaver ${totaltAntallOppgaver}`}
                </Detail>
              )}
            </div>
            <GenericTable
              columns={columns}
              data={oppgaver}
              getRowKey={(oppgave) => oppgave.oppgaveId}
              defaultColumn="sendtTilKontroll"
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
                  case "sendtTilKontroll":
                    return (
                      <Detail as={detailAs}>
                        {value.sendtTilKontroll
                          ? formaterTilNorskDato(value.sendtTilKontroll)
                          : "N/A"}
                      </Detail>
                    );
                  case "utlostAv":
                    return (
                      <Detail as={detailAs} className="flex items-center gap-2">
                        {hentUtløstAvTekstForVisning(value.utlostAv, true)}
                        {renderTags(
                          tagsInCategory(value, "GJENOPPTAK"),
                          () => "neutral",
                          isFetching,
                        )}
                      </Detail>
                    );
                  case "rettighet":
                    return (
                      <Detail as={detailAs}>
                        {tagsInCategory(value, "RETTIGHET")
                          .map((tag) => tag.visningsnavn)
                          .join(", ")}
                      </Detail>
                    );
                  case "tilstand":
                    return (
                      <Detail as={detailAs}>{hentOppgaveTilstandTekst(value.tilstand)}</Detail>
                    );
                  case "utfall":
                    return renderTags(
                      tagsInCategory(value, "SOKNADSRESULTAT"),
                      (tag) => hentFargevariantForSøknadsresultat(tag.visningsnavn),
                      isFetching,
                    );
                  case "arsak":
                    return (
                      <div className="flex flex-wrap gap-2">
                        {renderOppgaveArsakTags(value, isFetching)}
                      </div>
                    );
                  case "saksbehandler":
                    return (
                      <Detail as={detailAs}>{value.saksbehandlerIdent ?? "Ikke tildelt"}</Detail>
                    );
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
            <OppgaveTablePaginering totaltAntallOppgaver={totaltAntallOppgaver} />
            {selectedNoteKey && (
              <NoteModal onClose={() => setSelectedNoteKey(undefined)} noteKey={selectedNoteKey} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
