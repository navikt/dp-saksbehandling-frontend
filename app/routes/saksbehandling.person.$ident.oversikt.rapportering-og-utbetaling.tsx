import { PencilIcon } from "@navikt/aksel-icons";
import { Alert, Button, Table, TextField } from "@navikt/ds-react";
import classNames from "classnames";
import { Fragment, useState } from "react";
import nbLocale from "date-fns/locale/nb";

import styles from "../route-styles/rapportering-og-utbetaling.module.css";
import { format } from "date-fns";
import { hentRapporteringsperioder } from "~/models/rapporteringsperiode.server";
import invariant from "tiny-invariant";
import { type LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params, request }: LoaderArgs) {
  invariant(params.ident, `Fant ikke bruker`);
  const response = await hentRapporteringsperioder(params.ident, request);

  if (response.ok) {
    const rapporteringsperioder = await response.json();
    return json({ rapporteringsperioder });
  } else {
    throw new Error("Feil i uthenting av rapporteringsperioder");
  }
}

export default function PersonOversiktRapporteringOgUtbetalingSide() {
  const { rapporteringsperioder } = useLoaderData();

  console.log(rapporteringsperioder);
  const [redigeringsPeriodeId, setRedigeringsPeriodeId] = useState<string | undefined>(undefined);

  return (
    <div className={styles.kontainer}>
      {rapporteringsperioder.length === 0 && (
        <Alert variant="info" inline>
          Ingen rapporteringsperioder funnet for bruker
        </Alert>
      )}

      {rapporteringsperioder.length > 0 && (
        <Table size="small">
          <Table.Header>
            <Table.Row>
              {tabellHeader.map((header) => {
                return (
                  <Table.HeaderCell key={header} scope="col">
                    {header}
                  </Table.HeaderCell>
                );
              })}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {rapporteringsperioder.map((periode: IRapporteringsperiode) => (
              <Fragment key={periode.id}>
                <Table.Row>
                  <Table.HeaderCell scope="row">
                    {format(new Date(periode.fraOmMed), "dd.MM.yyyy")} {" - "}
                    {format(new Date(periode.tilOmMed), "dd.MM.yyyy")}
                  </Table.HeaderCell>
                  <Table.DataCell>{periode.arbeid || "-"}</Table.DataCell>
                  <Table.DataCell>{periode.syk || "-"}</Table.DataCell>
                  <Table.DataCell>{periode.ferie || "-"}</Table.DataCell>
                  <Table.DataCell>{periode.dagerBruktAvDP}</Table.DataCell>
                  <Table.DataCell>{periode.merknader}</Table.DataCell>
                  <Table.DataCell>
                    <Button
                      variant="secondary"
                      size="xsmall"
                      icon={<PencilIcon title="a11y-title" fontSize={20} />}
                      onClick={() =>
                        setRedigeringsPeriodeId(
                          redigeringsPeriodeId === periode.id ? undefined : data.id
                        )
                      }
                    >
                      Rediger
                    </Button>
                  </Table.DataCell>
                </Table.Row>
                {redigeringsPeriodeId === data.id &&
                  data.dager.map((dag) => {
                    return (
                      <Table.Row key={dag.id} className={classNames(styles.rediger)}>
                        <Table.HeaderCell scope="row">
                          <div className={styles.periodeDagDato}>
                            <div>
                              {format(new Date(dag.dato), "EEE", {
                                locale: nbLocale,
                              })}
                            </div>
                            <div>
                              {format(new Date(dag.dato), "dd.MM.yyyy", {
                                locale: nbLocale,
                              })}
                            </div>
                          </div>
                        </Table.HeaderCell>
                        <Table.DataCell>
                          <TextField
                            className={styles.inputFelt}
                            label="Arbeid"
                            hideLabel
                            defaultValue={dag.arbeid || "-"}
                            size="small"
                            htmlSize={14}
                          />
                        </Table.DataCell>
                        <Table.DataCell>
                          <TextField
                            className={styles.inputFelt}
                            label="Syk"
                            hideLabel
                            defaultValue={dag.syk || "-"}
                            size="small"
                            htmlSize={14}
                          />
                        </Table.DataCell>
                        <Table.DataCell>
                          <TextField
                            className={styles.inputFelt}
                            label="Ferie"
                            hideLabel
                            defaultValue={dag.ferie || "-"}
                            size="small"
                            htmlSize={14}
                          />
                        </Table.DataCell>
                        <Table.DataCell />
                        <Table.DataCell />
                        <Table.DataCell />
                      </Table.Row>
                    );
                  })}
              </Fragment>
            ))}
          </Table.Body>
        </Table>
      )}
    </div>
  );
}

export function ErrorBoundary() {
  return (
    <div className={styles.kontainer}>
      <Alert variant="error" inline>
        Noe skjedde feil
      </Alert>
    </div>
  );
}

const tabellHeader = [
  "ARBEIDSØKER",
  "JOBBET",
  "SYK",
  "FRAVÆR",
  "DAGERBRUKT AV DP",
  "MERKNADER",
  "",
];
