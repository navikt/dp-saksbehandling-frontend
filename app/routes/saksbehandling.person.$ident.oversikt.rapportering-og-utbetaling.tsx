import { Alert, Button, Table } from "@navikt/ds-react";
import styles from "../route-styles/rapportering-og-utbetaling.module.css";
import {
  type IRapporteringsperiode,
  hentRapporteringsperioder,
} from "~/models/rapporteringsperiode.server";
import invariant from "tiny-invariant";
import { type LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { FormattedDate } from "~/components/FormattedDate";
import { hentAktiviteterITimer } from "~/utils/aktivitet.utils";
import { PencilIcon } from "@navikt/aksel-icons";
import { useState } from "react";

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
  const [loadingKorringering, setLoadingKorrigering] = useState(false);
  const [korrigerPeriode, setKorrigerPeriode] = useState("");

  function startKorrigering(id: string) {
    setLoadingKorrigering(true);
    setKorrigerPeriode(id);
    console.log("Nå starter vi korrigeringen");
  }

  return (
    <div className={styles.kontainer}>
      {rapporteringsperioder.length === 0 && (
        <Alert variant="info" inline>
          Ingen rapporteringsperioder funnet for bruker
        </Alert>
      )}

      {rapporteringsperioder.length > 0 && (
        <>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>14. dagers periode</Table.HeaderCell>
                <Table.HeaderCell>Jobbet</Table.HeaderCell>
                <Table.HeaderCell>Syk</Table.HeaderCell>
                <Table.HeaderCell>Ferie</Table.HeaderCell>
                <Table.HeaderCell>Dager brukt av dp</Table.HeaderCell>
                <Table.HeaderCell>Merknader</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {rapporteringsperioder.map((periode: IRapporteringsperiode) => {
                return (
                  <Table.Row key={periode.id}>
                    <Table.DataCell>
                      <FormattedDate date={periode.fraOgMed} /> -{" "}
                      <FormattedDate date={periode.tilOgMed} />
                    </Table.DataCell>
                    <Table.DataCell>{hentAktiviteterITimer(periode, "Arbeid")}</Table.DataCell>
                    <Table.DataCell>{hentAktiviteterITimer(periode, "Sykdom")}</Table.DataCell>
                    <Table.DataCell>{hentAktiviteterITimer(periode, "Ferie")}</Table.DataCell>
                    <Table.DataCell>TODO</Table.DataCell>
                    <Table.DataCell>Ikke tilgjengelig ennå</Table.DataCell>
                    <Table.DataCell>
                      <Button
                        variant="secondary"
                        size="xsmall"
                        loading={korrigerPeriode === periode.id && loadingKorringering}
                        icon={<PencilIcon title="a11y-title" fontSize={20} />}
                        onClick={() => startKorrigering(periode.id)}
                      >
                        Rediger
                      </Button>
                    </Table.DataCell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </>
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
