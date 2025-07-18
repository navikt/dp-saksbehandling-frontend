import { Detail, Heading, Skeleton, Table, Tag } from "@navikt/ds-react";
import { differenceInCalendarDays } from "date-fns";

import { hentBehandlingTypeTekstForVisning } from "~/components/oppgave-filter-behandling-type/OppgaveFilterBehandlingType";
import { OppgaveListePaginering } from "~/components/oppgave-liste-paginering/OppgaveListePaginering";
import { OppgaveListeValg } from "~/components/oppgave-liste-valg/OppgaveListeValg";
import { useTableSort } from "~/hooks/useTableSort";
import { formaterTilNorskDato } from "~/utils/dato.utils";

import { components } from "../../../openapi/saksbehandling-typer";
import styles from "./OppgaveListe.module.css";

interface IProps {
  oppgaver: components["schemas"]["OppgaveOversikt"][];
  totaltAntallOppgaver: number;
  tittel?: string;
  icon?: React.ReactNode;
  sorterbar?: boolean;
  lasterOppgaver?: boolean;
  visPersonIdent?: boolean;
}

export function OppgaveListe({
  oppgaver,
  tittel,
  icon,
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
    <div className="flex flex-col p-4">
      <div className={styles.oppgavelisteHeader}>
        {tittel && (
          <Heading size={"xsmall"} spacing className={styles.heading}>
            {icon}
            {tittel}
          </Heading>
        )}

        {totaltAntallOppgaver > 0 && (
          <Detail textColor="subtle" className={styles.antallOppgaver}>
            {!lasterOppgaver && `Antall oppgaver ${totaltAntallOppgaver || oppgaver.length}`}
            {lasterOppgaver && "Laster oppgaver..."}
          </Detail>
        )}
      </div>

      <Table
        sort={sorterbar ? sortState : undefined}
        size="small"
        className={"tabell--subtil"}
        zebraStripes={true}
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
          {sortedData.length === 0 && (
            <Table.Row shadeOnHover={false}>
              <Table.DataCell colSpan={visPersonIdent ? 7 : 6}>Fant ingen oppgaver</Table.DataCell>
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
                  <Detail textColor="subtle" as={lasterOppgaver ? Skeleton : "p"}>
                    {formaterTilNorskDato(tidspunktOpprettet)}
                  </Detail>
                </Table.DataCell>

                <Table.DataCell>
                  <Detail as={lasterOppgaver ? Skeleton : "p"}>
                    {hentBehandlingTypeTekstForVisning(oppgave.behandlingType)}
                  </Detail>
                </Table.DataCell>

                <Table.DataCell>
                  {emneknagger.map((emneknagg) => (
                    <Tag
                      key={emneknagg}
                      className="mr-2"
                      size={"xsmall"}
                      variant={lasterOppgaver ? "info-moderate" : "info"}
                    >
                      <Detail as={lasterOppgaver ? Skeleton : "p"}>{emneknagg}</Detail>
                    </Tag>
                  ))}

                  {utsattTilDato && (
                    <Tag
                      className="mr-2"
                      size={"xsmall"}
                      variant={lasterOppgaver ? "warning-moderate" : "warning"}
                    >
                      <Detail
                        as={lasterOppgaver ? Skeleton : "p"}
                      >{`${dagerIgjenTilUtsattDato} ${dagerIgjenTilUtsattDato === 1 ? "dag" : "dager"} igjen`}</Detail>
                    </Tag>
                  )}

                  {oppgave.skjermesSomEgneAnsatte && (
                    <Tag
                      className="mr-2"
                      size={"xsmall"}
                      variant={lasterOppgaver ? "error-moderate" : "error"}
                    >
                      <Detail as={lasterOppgaver ? Skeleton : "p"}>Egne ansatte</Detail>
                    </Tag>
                  )}

                  {oppgave.adressebeskyttelseGradering === "FORTROLIG" && (
                    <Tag
                      className="mr-2"
                      size={"xsmall"}
                      variant={lasterOppgaver ? "error-moderate" : "error"}
                    >
                      <Detail as={lasterOppgaver ? Skeleton : "p"}>Fortrolig</Detail>
                    </Tag>
                  )}

                  {oppgave.adressebeskyttelseGradering === "STRENGT_FORTROLIG" && (
                    <Tag
                      className="mr-2"
                      size={"xsmall"}
                      variant={lasterOppgaver ? "error-moderate" : "error"}
                    >
                      <Detail as={lasterOppgaver ? Skeleton : "p"}>Strengt fortrolig</Detail>
                    </Tag>
                  )}

                  {oppgave.adressebeskyttelseGradering === "STRENGT_FORTROLIG_UTLAND" && (
                    <Tag
                      className="mr-2"
                      size={"xsmall"}
                      variant={lasterOppgaver ? "error-moderate" : "error"}
                    >
                      <Detail as={lasterOppgaver ? Skeleton : "p"}>Strengt fortrolig utland</Detail>
                    </Tag>
                  )}
                </Table.DataCell>

                {visPersonIdent && (
                  <Table.DataCell>
                    {<Detail as={lasterOppgaver ? Skeleton : "p"}>{oppgave.personIdent}</Detail>}
                  </Table.DataCell>
                )}

                <Table.DataCell>
                  <Detail as={lasterOppgaver ? Skeleton : "p"}>{getTilstandText(tilstand)}</Detail>
                </Table.DataCell>

                <Table.DataCell>
                  {<Detail as={lasterOppgaver ? Skeleton : "p"}>{oppgave.behandlerIdent}</Detail>}
                </Table.DataCell>

                <Table.DataCell>{<OppgaveListeValg oppgave={oppgave} />}</Table.DataCell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

      {totaltAntallOppgaver > 0 && (
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
