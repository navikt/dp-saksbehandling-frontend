import { Button, Detail, Skeleton, Table, Tag } from "@navikt/ds-react";
import classnames from "classnames";
import { differenceInCalendarDays } from "date-fns";
import { Form, useLocation, useNavigation } from "react-router";

import { OppgaveListeValg } from "~/components/oppgave-liste-valg/OppgaveListeValg";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { useTableSort } from "~/hooks/useTableSort";
import { formaterNorskDato } from "~/utils/dato.utils";

import { components } from "../../../openapi/saksbehandling-typer";
import styles from "./OppgaveListe.module.css";

interface IProps {
  oppgaver: components["schemas"]["OppgaveOversikt"][];
  totaltAntallOppgaver?: number;
  lasterOppgaver?: boolean;
  visPersonIdent?: boolean;
  visAntallOppgaver?: boolean;
  visNesteOppgaveKnapp?: boolean;
}

export function OppgaveListe({
  oppgaver,
  totaltAntallOppgaver,
  visNesteOppgaveKnapp,
  visAntallOppgaver,
  lasterOppgaver,
  visPersonIdent,
}: IProps) {
  const { state } = useNavigation();
  const location = useLocation();
  const { aktivtOppgaveSok } = useSaksbehandler();
  const { sortedData, handleSort, sortState } = useTableSort<
    components["schemas"]["OppgaveOversikt"]
  >(oppgaver, {
    orderBy: "tidspunktOpprettet",
    direction: "ascending",
  });

  return (
    <>
      {(visNesteOppgaveKnapp || visAntallOppgaver) && (
        <div className={styles.oppgaveListeInfo}>
          {visNesteOppgaveKnapp && (
            <Form method="post" className={styles.nesteKnapp}>
              <input hidden={true} readOnly={true} name="_action" value="hent-neste-oppgave" />
              <input
                name="aktivtOppgaveSok"
                value={aktivtOppgaveSok}
                hidden={true}
                readOnly={true}
              />
              <Button
                variant="primary"
                size="small"
                loading={state !== "idle"}
                disabled={state !== "idle"}
              >
                Neste oppgave
              </Button>
            </Form>
          )}

          {visAntallOppgaver && (
            <Detail textColor="subtle" className={styles.antallOppgaver}>
              {!lasterOppgaver && `Antall oppgaver ${totaltAntallOppgaver || oppgaver.length}`}
              {lasterOppgaver && "Laster oppgaver..."}
            </Detail>
          )}
        </div>
      )}

      <Table
        sort={sortState}
        size="small"
        className={classnames("table--subtle-zebra", styles.oppgaveListe)}
        onSortChange={(sortKey) =>
          sortKey && handleSort(sortKey as keyof components["schemas"]["OppgaveOversikt"])
        }
      >
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader scope="col" sortKey="tidspunktOpprettet" sortable={true}>
              <Detail>Opprettet</Detail>
            </Table.ColumnHeader>

            <Table.ColumnHeader scope="col">
              <Detail>Oppgavetype</Detail>
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

            <Table.ColumnHeader scope="col" sortKey="saksbehandlerIdent" sortable={true}>
              <Detail>Saksbehandler</Detail>
            </Table.ColumnHeader>

            <Table.ColumnHeader scope="col" textSize="small">
              <Detail>Valg</Detail>
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {lasterOppgaver && (
            <>
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
            </>
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
                const erValgtOppgave = location.pathname.includes(oppgave.oppgaveId);
                const dagerIgjenTilUtsattDato = utsattTilDato
                  ? differenceInCalendarDays(utsattTilDato, new Date())
                  : undefined;

                return (
                  <Table.Row
                    key={oppgave.oppgaveId}
                    className={classnames({
                      [styles.valgtOppgaveBackground]: erValgtOppgave,
                    })}
                  >
                    <>
                      <Table.DataCell
                        className={classnames({
                          [styles.valgtOppgaveBorder]: erValgtOppgave,
                        })}
                      >
                        <Detail textColor="subtle">{formaterNorskDato(tidspunktOpprettet)}</Detail>
                      </Table.DataCell>

                      <Table.DataCell>
                        <Detail>Søknad</Detail>
                      </Table.DataCell>

                      <Table.DataCell>
                        <>
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
                        </>
                      </Table.DataCell>

                      {visPersonIdent && (
                        <Table.DataCell>{<Detail>{oppgave.personIdent}</Detail>}</Table.DataCell>
                      )}
                      <Table.DataCell>
                        {<Detail>{getTilstandText(tilstand)}</Detail>}
                      </Table.DataCell>
                      <Table.DataCell>{<Detail>{oppgave.behandlerIdent}</Detail>}</Table.DataCell>
                      <Table.DataCell>{<OppgaveListeValg oppgave={oppgave} />}</Table.DataCell>
                    </>
                  </Table.Row>
                );
              })}
            </>
          )}
        </Table.Body>
      </Table>
    </>
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
