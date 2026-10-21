import { LayersIcon } from "@navikt/aksel-icons";
import { Button, Detail, Heading } from "@navikt/ds-react";
import { useEffect, useState } from "react";
import {
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
  redirect,
  useSearchParams,
} from "react-router";

import { useOppgaverQuery } from "~/api/oppgave-hooks";
import { GenericTable, type TableColumn } from "~/components/generic-table/GenericTable";
import { NoteModal } from "~/components/note-button/NoteButton";
import EmneknaggFilter from "~/components/oppgave-filter/EmneknaggFilter";
import { OppgaveFilterDato } from "~/components/oppgave-filter/OppgaveFilterDato";
import { OppgaveFilterUtløstAv } from "~/components/oppgave-filter/OppgaveFilterUtløstAv";
import tableStyles from "~/components/oppgave-table/OppgaveTable.module.css";
import { OppgaveTablePaginering } from "~/components/oppgave-table/OppgaveTablePaginering";
import { renderOppgaveKolonne } from "~/components/oppgave-table/render-oppgave-kolonne";
import { setOppgavelisteKilde } from "~/hooks/useAktivtOppgaveSok";
import { useHentNesteOppgave } from "~/hooks/useHentNesteOppgave";
import styles from "~/route-styles/index.module.css";
import { handleActions } from "~/server-side-actions/handle-actions";
import { appendSearchParamIfNotExists } from "~/utils/url.utils";

export const kontrollOppgaverDefaultParams = [
  { key: "tilstand", value: "KLAR_TIL_KONTROLL" },
  { key: "sortering", value: "ASC" },
  { key: "side", value: "1" },
  { key: "antallOppgaver", value: "50" },
  { key: "sorteringsfelt", value: "sendttilkontroll" },
];

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

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
  const { hentNesteOppgave, henterNesteOppgave } = useHentNesteOppgave(
    searchParams.toString(),
    "kontroll",
  );

  useEffect(() => {
    setOppgavelisteKilde("kontroll");
  }, []);

  return (
    <div className={styles.container}>
      <nav className={styles.venstreMeny}>
        <OppgaveFilterDato />
        <OppgaveFilterUtløstAv />
        <EmneknaggFilter />
      </nav>

      <main>
        <div className="mb-2">
          <Button
            variant="primary"
            size="small"
            onClick={hentNesteOppgave}
            loading={isFetching || henterNesteOppgave}
            disabled={isFetching || henterNesteOppgave}
          >
            Neste oppgave
          </Button>
        </div>
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
              {(columnKey, value) =>
                renderOppgaveKolonne(columnKey, value, isFetching, setSelectedNoteKey)
              }
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
