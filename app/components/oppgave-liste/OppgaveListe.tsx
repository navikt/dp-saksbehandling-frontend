import { LayersIcon } from "@navikt/aksel-icons";
import { Detail, Heading, Skeleton, Table, Tag } from "@navikt/ds-react";
import classnames from "classnames";
import { differenceInCalendarDays } from "date-fns";

import { hentBehandlingTypeTekstForVisning } from "~/components/oppgave-filter-behandling-type/OppgaveFilterBehandlingType";
import { OppgaveListePaginering } from "~/components/oppgave-liste-paginering/OppgaveListePaginering";
import { OppgaveListeValg } from "~/components/oppgave-liste-valg/OppgaveListeValg";
import { useTableSort } from "~/hooks/useTableSort";
import { formaterNorskDato } from "~/utils/dato.utils";

import { components } from "../../../openapi/saksbehandling-typer";
import styles from "./OppgaveListe.module.css";

interface IProps {
  oppgaver: components["schemas"]["OppgaveOversikt"][];
  tittel?: string;
  totaltAntallOppgaver?: number;
  sorterbar?: boolean;
  lasterOppgaver?: boolean;
  visPersonIdent?: boolean;
}

export function OppgaveListe({
  oppgaver,
  tittel,
  totaltAntallOppgaver,
  sorterbar,
  lasterOppgaver,
  visPersonIdent,
}: IProps) {
  const { sortedData, handleSort, sortState } = useTableSort<
    components["schemas"]["OppgaveOversikt"]
  >(oppgaver, {
    orderBy: "tidspunktOpprettet",
    direction: "ascending",
  });

  return (
    <div className="p-4 flex flex-col">
      <div className={styles.oppgavelisteHeader}>
        {tittel && (
          <Heading size={"xsmall"} spacing className={styles.heading}>
            <LayersIcon fontSize="1.5rem" />
            {tittel}
          </Heading>
        )}

        {totaltAntallOppgaver && (
          <Detail textColor="subtle" className={styles.antallOppgaver}>
            {!lasterOppgaver && `Antall oppgaver ${totaltAntallOppgaver || oppgaver.length}`}
            {lasterOppgaver && "Laster oppgaver..."}
          </Detail>
        )}
      </div>

      <Table
        sort={sorterbar ? sortState : undefined}
        size="small"
        className={classnames("table--subtle-zebra", styles.oppgaveListe)}
        onSortChange={(sortKey) =>
          sortKey && handleSort(sortKey as keyof components["schemas"]["OppgaveOversikt"])
        }
      >
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader scope="col" sortKey="tidspunktOpprettet" sortable={sorterbar}>
              <Detail>Opprettet</Detail>
            </Table.ColumnHeader>

            <Table.ColumnHeader scope="col">
              <Detail>Behandlingstype</Detail>
            </Table.ColumnHeader>

            <Table.ColumnHeader scope="col">
              <Detail>Emne</Detail>
            </Table.ColumnHeader>

            {visPersonIdent && (
              <Table.ColumnHeader scope="col">
                <Detail>Personnummer</Detail>
              </Table.ColumnHeader>
            )}

            <Table.ColumnHeader scope="col">
              <Detail>Status</Detail>
            </Table.ColumnHeader>

            <Table.ColumnHeader scope="col" sortKey="saksbehandlerIdent">
              <Detail>Saksbehandler</Detail>
            </Table.ColumnHeader>

            <Table.ColumnHeader scope="col" textSize="small">
              <Detail>Valg</Detail>
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {lasterOppgaver && (
            <Table.Row>
              <Table.DataCell>
                <Skeleton variant="text" width={90} height={33} />
              </Table.DataCell>
              <Table.DataCell>
                <Skeleton variant="text" width={60} height={33} />
              </Table.DataCell>
              <Table.DataCell>
                <Skeleton variant="text" width={250} height={33} />
              </Table.DataCell>
              <Table.DataCell>
                <Skeleton variant="text" width={150} height={33} />
              </Table.DataCell>
              <Table.DataCell>
                <Skeleton variant="text" width={100} height={33} />
              </Table.DataCell>
              {visPersonIdent && (
                <Table.DataCell>
                  <Skeleton variant="text" width={80} height={33} />
                </Table.DataCell>
              )}

              <Table.DataCell>
                <Skeleton variant="text" width={20} height={33} />
              </Table.DataCell>
            </Table.Row>
          )}

          {!lasterOppgaver && (
            <>
              {sortedData.length === 0 && (
                <Table.Row>
                  <Table.DataCell colSpan={visPersonIdent ? 7 : 6}>
                    Fant ingen oppgaver
                  </Table.DataCell>
                </Table.Row>
              )}

              {sortedData?.map((oppgave) => {
                const { tidspunktOpprettet, tilstand, emneknagger, utsattTilDato } = oppgave;
                const dagerIgjenTilUtsattDato = utsattTilDato
                  ? differenceInCalendarDays(utsattTilDato, new Date())
                  : undefined;

                return (
                  <Table.Row key={oppgave.oppgaveId}>
                    <Table.DataCell>
                      <Detail textColor="subtle">{formaterNorskDato(tidspunktOpprettet)}</Detail>
                    </Table.DataCell>

                    <Table.DataCell>
                      <Detail>{hentBehandlingTypeTekstForVisning(oppgave.behandlingType)}</Detail>
                    </Table.DataCell>

                    <Table.DataCell>
                      {emneknagger.map((emneknagg) => (
                        <Tag key={emneknagg} className="mr-2" size={"xsmall"} variant="info">
                          <Detail>{emneknagg}</Detail>
                        </Tag>
                      ))}

                      {utsattTilDato && (
                        <Tag className="mr-2" size={"xsmall"} variant="warning">
                          <Detail>{`${dagerIgjenTilUtsattDato} ${dagerIgjenTilUtsattDato === 1 ? "dag" : "dager"} igjen`}</Detail>
                        </Tag>
                      )}

                      {oppgave.skjermesSomEgneAnsatte && (
                        <Tag className="mr-2" size={"xsmall"} variant="error">
                          <Detail>Egne ansatte</Detail>
                        </Tag>
                      )}
                      {oppgave.adressebeskyttelseGradering === "FORTROLIG" && (
                        <Tag className="mr-2" size={"xsmall"} variant="error">
                          <Detail>Fortrolig</Detail>
                        </Tag>
                      )}

                      {oppgave.adressebeskyttelseGradering === "STRENGT_FORTROLIG" && (
                        <Tag className="mr-2" size={"xsmall"} variant="error">
                          <Detail>Strengt fortrolig</Detail>
                        </Tag>
                      )}

                      {oppgave.adressebeskyttelseGradering === "STRENGT_FORTROLIG_UTLAND" && (
                        <Tag className="mr-2" size={"xsmall"} variant="error">
                          <Detail>Strengt fortrolig utland</Detail>
                        </Tag>
                      )}
                    </Table.DataCell>

                    {visPersonIdent && (
                      <Table.DataCell>{<Detail>{oppgave.personIdent}</Detail>}</Table.DataCell>
                    )}

                    <Table.DataCell>{<Detail>{getTilstandText(tilstand)}</Detail>}</Table.DataCell>

                    <Table.DataCell>{<Detail>{oppgave.behandlerIdent}</Detail>}</Table.DataCell>

                    <Table.DataCell>{<OppgaveListeValg oppgave={oppgave} />}</Table.DataCell>
                  </Table.Row>
                );
              })}
            </>
          )}
        </Table.Body>
      </Table>

      {totaltAntallOppgaver && (
        <OppgaveListePaginering totaltAntallOppgaver={totaltAntallOppgaver} />
      )}
    </div>
  );
}

export function getTilstandText(tilstand: components["schemas"]["OppgaveTilstand"]) {
  switch (tilstand) {
    case "PAA_VENT":
      return "På vent";
    case "UNDER_BEHANDLING":
      return "Under behandling";
    case "FERDIG_BEHANDLET":
      return "Ferdig behandlet";
    case "KLAR_TIL_BEHANDLING":
      return "Klar til behandling";
    case "KLAR_TIL_KONTROLL":
      return "Klar til kontroll";
    case "UNDER_KONTROLL":
      return "Under kontroll";
    case "BEHANDLES_I_ARENA":
      return "Sendt til Arena";
  }
}
