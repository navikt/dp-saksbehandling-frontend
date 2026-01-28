import { Detail, Heading, Skeleton, Table, Tag } from "@navikt/ds-react";
import { differenceInCalendarDays } from "date-fns";
import { Fragment } from "react";

import { ListeOppgaveMeny } from "~/components/liste-oppgave-meny/ListeOppgaveMeny";
import { OppgaveÅrsakEmneknagger } from "~/components/oppgave-årsak-emneknagger/OppgaveÅrsakEmneknagger";
import { OppgaveListeHeader } from "~/components/oppgave-liste/OppgaveListeHeader";
import { OppgaveListePaginering } from "~/components/oppgave-liste/OppgaveListePaginering";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { ISortState, useTableSort } from "~/hooks/useTableSort";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { maskerVerdi } from "~/utils/skjul-sensitiv-opplysning";
import {
  hentFargevariantForSøknadsresultat,
  hentOppgaveTilstandTekst,
  hentUtløstAvTekstForVisning,
} from "~/utils/tekst.utils";

import { components } from "../../../openapi/saksbehandling-typer";
import styles from "./OppgaveListe.module.css";

interface IProps {
  oppgaver: components["schemas"]["OppgaveOversikt"][];
  totaltAntallOppgaver: number;
  tittel?: string;
  icon?: React.ReactNode;
  sortState?: ISortState<components["schemas"]["OppgaveOversikt"]>;
  lasterOppgaver?: boolean;
  visPersonIdent?: boolean;
}

export function OppgaveListe(props: IProps) {
  const { oppgaver, tittel, icon, totaltAntallOppgaver, lasterOppgaver, visPersonIdent } = props;
  const { skjulSensitiveOpplysninger } = useSaksbehandler();
  const { sortedData, handleSort, sortState } = useTableSort<
    components["schemas"]["OppgaveOversikt"]
  >(oppgaver, props.sortState);

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
        sort={props.sortState ? sortState : undefined}
        size="small"
        className={"tabell--subtil"}
        zebraStripes={true}
        onSortChange={(sortKey) =>
          sortKey && handleSort(sortKey as keyof components["schemas"]["OppgaveOversikt"])
        }
      >
        <OppgaveListeHeader visPersonIdent={visPersonIdent} sortState={sortState} />

        <Table.Body>
          {sortedData.length === 0 && (
            <Table.Row shadeOnHover={false}>
              <Table.DataCell colSpan={visPersonIdent ? 9 : 8}>Fant ingen oppgaver</Table.DataCell>
            </Table.Row>
          )}

          {sortedData?.map((oppgave) => {
            const { tidspunktOpprettet, tilstand, utsattTilDato } = oppgave;
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
                  <Detail as={lasterOppgaver ? Skeleton : "p"} className={"flex gap-2"}>
                    {hentUtløstAvTekstForVisning(oppgave.utlostAv, true)}
                    {oppgave.emneknagger
                      .filter((emneknagg) => emneknagg.kategori === "GJENOPPTAK")
                      .map((emneknagg) => (
                        <Tag key={emneknagg.visningsnavn} size={"xsmall"} variant={"neutral"}>
                          <Detail as={lasterOppgaver ? Skeleton : "p"}>
                            {emneknagg.visningsnavn}
                          </Detail>
                        </Tag>
                      ))}
                  </Detail>
                </Table.DataCell>

                <Table.DataCell>
                  <Detail as={lasterOppgaver ? Skeleton : "p"}>
                    {oppgave.emneknagger
                      .filter((emneknagg) => emneknagg.kategori === "RETTIGHET")
                      .map((emneknagg) => (
                        <Fragment key={emneknagg.visningsnavn}>{emneknagg.visningsnavn}</Fragment>
                      ))}
                  </Detail>
                </Table.DataCell>

                {visPersonIdent && (
                  <Table.DataCell>
                    {
                      <Detail as={lasterOppgaver ? Skeleton : "p"}>
                        {skjulSensitiveOpplysninger
                          ? maskerVerdi(oppgave.personIdent)
                          : oppgave.personIdent}
                      </Detail>
                    }
                  </Table.DataCell>
                )}

                <Table.DataCell>
                  <Detail as={lasterOppgaver ? Skeleton : "p"}>
                    {hentOppgaveTilstandTekst(tilstand)}
                  </Detail>

                  {tilstand === "PAA_VENT" && oppgave.utsattTilDato && (
                    <Tag size={"xsmall"} variant={"alt1"}>
                      <Detail
                        as={lasterOppgaver ? Skeleton : "p"}
                      >{`${dagerIgjenTilUtsattDato} ${dagerIgjenTilUtsattDato === 1 ? "dag" : "dager"} igjen`}</Detail>
                    </Tag>
                  )}
                </Table.DataCell>

                <Table.DataCell>
                  {oppgave.emneknagger
                    .filter((emneknagg) => emneknagg.kategori === "SØKNADSRESULTAT")
                    .map((emneknagg) => (
                      <Tag
                        key={emneknagg.visningsnavn}
                        size={"xsmall"}
                        variant={hentFargevariantForSøknadsresultat(emneknagg.visningsnavn)}
                      >
                        <Detail as={lasterOppgaver ? Skeleton : "p"}>
                          {emneknagg.visningsnavn}
                        </Detail>
                      </Tag>
                    ))}
                </Table.DataCell>

                <Table.DataCell>
                  <OppgaveÅrsakEmneknagger oppgave={oppgave} lasterOppgaver={lasterOppgaver} />
                </Table.DataCell>

                <Table.DataCell>
                  {<Detail as={lasterOppgaver ? Skeleton : "p"}>{oppgave.behandlerIdent}</Detail>}
                </Table.DataCell>

                <Table.DataCell>
                  <ListeOppgaveMeny listeOppgave={oppgave} />
                </Table.DataCell>
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
