import { PencilIcon } from "@navikt/aksel-icons";
import { Button, Table, TextField } from "@navikt/ds-react";
import classNames from "classnames";
import { useState } from "react";
import nbLocale from "date-fns/locale/nb";

import styles from "../route-styles/rapportering-og-utbetaling.module.css";
import { format } from "date-fns";

export default function PersonOversiktRapporteringOgUtbetalingSide() {
  const [redigeringsPeriodeId, setRedigeringsPeriodeId] = useState<string | undefined>(undefined);

  return (
    <div className={styles.kontainer}>
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
          {dataListe.map((data, index) => (
            <>
              <Table.Row>
                <Table.HeaderCell scope="row">
                  {format(new Date(data.fraOmMed), "dd.MM.yyyy")} {" - "}
                  {format(new Date(data.tilOmMed), "dd.MM.yyyy")}
                </Table.HeaderCell>
                <Table.DataCell>{data.arbeidsoker}</Table.DataCell>
                <Table.DataCell>{data.arbeid || "-"}</Table.DataCell>
                <Table.DataCell>{data.syk || "-"}</Table.DataCell>
                <Table.DataCell>{data.ferie || "-"}</Table.DataCell>
                <Table.DataCell>{data.utdanning || "-"}</Table.DataCell>
                <Table.DataCell>{data.dagsats || "-"}</Table.DataCell>
                <Table.DataCell>{data.utbetaling || "-"}</Table.DataCell>
                <Table.DataCell>{data.dagerBruktAvDP}</Table.DataCell>
                <Table.DataCell>{data.merknader}</Table.DataCell>
                <Table.DataCell>
                  <Button
                    variant="secondary"
                    size="xsmall"
                    icon={<PencilIcon title="a11y-title" fontSize={20} />}
                    onClick={() =>
                      setRedigeringsPeriodeId(
                        redigeringsPeriodeId === data.id ? undefined : data.id
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
                    <Table.Row key={index} className={classNames(styles.rediger)}>
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
                          label="Arbeidsøker"
                          hideLabel
                          defaultValue={dag.arbeidsoker || "-"}
                          size="small"
                          htmlSize={14}
                        />
                      </Table.DataCell>
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
                      <Table.DataCell>
                        <TextField
                          className={styles.inputFelt}
                          label="Utdanning"
                          hideLabel
                          defaultValue={dag.utdanning || "-"}
                          size="small"
                          htmlSize={14}
                        />
                      </Table.DataCell>
                      <Table.DataCell>{dag.dagsats}</Table.DataCell>
                      <Table.DataCell>{dag.utbetaling}</Table.DataCell>
                      <Table.DataCell />
                      <Table.DataCell />
                      <Table.DataCell />
                    </Table.Row>
                  );
                })}
            </>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

interface IRapporteringsperiode {
  id: string;
  fraOmMed: string;
  tilOmMed: string;
  arbeidsoker: number;
  arbeid: number;
  syk: number;
  ferie: number;
  utdanning: number;
  dagsats: number;
  utbetaling: number;
  dagerBruktAvDP: number;
  merknader: string;
  dager: IRapporteringDag[];
}

interface IRapporteringDag {
  id: string;
  dato: string;
  arbeidsoker: number;
  arbeid: number;
  syk: number;
  ferie: number;
  utdanning: number;
  dagsats: number;
  utbetaling: number;
}

const tabellHeader = [
  "14. DAGERSPERIODE",
  "ARBEIDSØKER",
  "JOBBET",
  "SYK",
  "FRAVÆR",
  "UTDANNING",
  "DAGSATS",
  "UTBETALING",
  "DAGERBRUKT AV DP",
  "MERKNADER",
  "",
];

const dataListe: IRapporteringsperiode[] = [
  {
    id: "b1210af9-6b1b-446a-a18c-8dbfdd63da6a",
    fraOmMed: "2023-01-01",
    tilOmMed: "2023-01-14",
    arbeidsoker: 14,
    arbeid: 9,
    syk: 1,
    ferie: 1,
    utdanning: 0,
    dagsats: 1000,
    utbetaling: 14000,
    dagerBruktAvDP: 14,
    merknader: "Deler av periode",
    dager: [
      {
        id: "be0896ab-11ed-4442-ac10-b8392ed9b708",
        dato: "2023-01-01",
        arbeidsoker: 1,
        arbeid: 4.5,
        syk: 0,
        ferie: 0,
        utdanning: 0,
        dagsats: 1000,
        utbetaling: 1000,
      },
      {
        id: "be0896ab-11ed-4442-ac10-b8392ed9b708",
        dato: "2023-01-02",
        arbeidsoker: 1,
        arbeid: 0,
        syk: 1,
        ferie: 0,
        utdanning: 0,
        dagsats: 1000,
        utbetaling: 1000,
      },
      {
        id: "be0896ab-11ed-4442-ac10-b8392ed9b708",
        dato: "2023-01-03",
        arbeidsoker: 1,
        arbeid: 4.5,
        syk: 0,
        ferie: 0,
        utdanning: 0,
        dagsats: 1000,
        utbetaling: 1000,
      },
      {
        id: "be0896ab-11ed-4442-ac10-b8392ed9b708",
        dato: "2023-01-04",
        arbeidsoker: 1,
        arbeid: 0,
        syk: 0,
        ferie: 1,
        utdanning: 0,
        dagsats: 1000,
        utbetaling: 1000,
      },
      {
        id: "be0896ab-11ed-4442-ac10-b8392ed9b708",
        dato: "2023-01-05",
        arbeidsoker: 1,
        arbeid: 0,
        syk: 0,
        ferie: 0,
        utdanning: 0,
        dagsats: 1000,
        utbetaling: 1000,
      },
      {
        id: "be0896ab-11ed-4442-ac10-b8392ed9b708",
        dato: "2023-01-06",
        arbeidsoker: 1,
        arbeid: 0,
        syk: 0,
        ferie: 0,
        utdanning: 0,
        dagsats: 1000,
        utbetaling: 1000,
      },
      {
        id: "be0896ab-11ed-4442-ac10-b8392ed9b708",
        dato: "2023-01-07",
        arbeidsoker: 1,
        arbeid: 0,
        syk: 0,
        ferie: 0,
        utdanning: 0,
        dagsats: 1000,
        utbetaling: 1000,
      },
      {
        id: "be0896ab-11ed-4442-ac10-b8392ed9b708",
        dato: "2023-01-08",
        arbeidsoker: 1,
        arbeid: 0,
        syk: 0,
        ferie: 0,
        utdanning: 0,
        dagsats: 1000,
        utbetaling: 1000,
      },
      {
        id: "be0896ab-11ed-4442-ac10-b8392ed9b708",
        dato: "2023-01-09",
        arbeidsoker: 1,
        arbeid: 0,
        syk: 0,
        ferie: 0,
        utdanning: 0,
        dagsats: 1000,
        utbetaling: 1000,
      },
      {
        id: "be0896ab-11ed-4442-ac10-b8392ed9b708",
        dato: "2023-01-10",
        arbeidsoker: 1,
        arbeid: 0,
        syk: 0,
        ferie: 0,
        utdanning: 0,
        dagsats: 1000,
        utbetaling: 1000,
      },
      {
        id: "be0896ab-11ed-4442-ac10-b8392ed9b708",
        dato: "2023-01-11",
        arbeidsoker: 1,
        arbeid: 0,
        syk: 0,
        ferie: 0,
        utdanning: 0,
        dagsats: 1000,
        utbetaling: 1000,
      },
      {
        id: "be0896ab-11ed-4442-ac10-b8392ed9b708",
        dato: "2023-01-12",
        arbeidsoker: 1,
        arbeid: 0,
        syk: 0,
        ferie: 0,
        utdanning: 0,
        dagsats: 1000,
        utbetaling: 1000,
      },
      {
        id: "be0896ab-11ed-4442-ac10-b8392ed9b708",
        dato: "2023-01-13",
        arbeidsoker: 1,
        arbeid: 0,
        syk: 0,
        ferie: 0,
        utdanning: 0,
        dagsats: 1000,
        utbetaling: 1000,
      },
      {
        id: "be0896ab-11ed-4442-ac10-b8392ed9b708",
        dato: "2023-01-14",
        arbeidsoker: 1,
        arbeid: 0,
        syk: 0,
        ferie: 0,
        utdanning: 0,
        dagsats: 1000,
        utbetaling: 1000,
      },
    ],
  },
  {
    id: "b1210af9-6b1b-446a-a18c-8dbfdd63da6c",
    fraOmMed: "2023-01-15",
    tilOmMed: "2023-01-29",
    arbeidsoker: 4,
    arbeid: 7.5,
    syk: 1,
    ferie: 0,
    utdanning: 0,
    dagsats: 1100,
    utbetaling: 15400,
    dagerBruktAvDP: 14,
    merknader: "Deler av periode",
    dager: [
      {
        id: "b1210af9-6b1b-446a-a18c-8dbfdd63da6c",
        dato: "01.01.2023",
        arbeidsoker: 1,
        arbeid: 4.5,
        syk: 1,
        ferie: 0,
        utdanning: 0,
        dagsats: 1000,
        utbetaling: 1000,
      },
    ],
  },
];
