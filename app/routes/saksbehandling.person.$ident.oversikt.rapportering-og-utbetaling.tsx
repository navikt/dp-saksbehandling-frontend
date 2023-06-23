import { Alert, Button, Table } from "@navikt/ds-react";
import {
  type IRapporteringsperiode,
  hentRapporteringsperioder,
  lagKorrigeringsperiode,
} from "~/models/rapporteringsperiode.server";
import invariant from "tiny-invariant";
import { type LoaderArgs, json, type ActionArgs, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { FormattedDate } from "~/components/FormattedDate";
import { hentAllAktivitetITimer } from "~/utils/aktivitet.utils";
import { PencilIcon } from "@navikt/aksel-icons";
import styles from "../route-styles/rapportering-og-utbetaling.module.css";

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

export async function action({ request, params }: ActionArgs) {
  const formData = await request.formData();
  const periodeId = formData.get("periodeId") as string;

  invariant(periodeId, "RapporteringsID er obligatorisk");

  const response = await lagKorrigeringsperiode(periodeId, request);

  if (response.ok) {
    const korrigeringsperiode: IRapporteringsperiode = await response.json();
    return redirect(
      `/saksbehandling/person/${params.ident}/rediger-periode/${periodeId}/${korrigeringsperiode.id}`
    );
  } else {
    throw new Error("Klarte ikke lage korrigeringsperiode");
  }
}

export default function PersonOversiktRapporteringOgUtbetalingSide() {
  const { rapporteringsperioder } = useLoaderData();

  return (
    <div className={styles.kontainer}>
      {rapporteringsperioder.length === 0 && (
        <Alert variant="info" inline>
          Ingen rapporteringsperioder funnet for bruker
        </Alert>
      )}

      {rapporteringsperioder.length > 0 && (
        <>
          <Form method="post" key={0}>
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
                      <Table.HeaderCell>
                        <FormattedDate date={periode.fraOgMed} /> -{" "}
                        <FormattedDate date={periode.tilOgMed} />
                      </Table.HeaderCell>
                      <Table.DataCell>{hentAllAktivitetITimer(periode, "Arbeid")}</Table.DataCell>
                      <Table.DataCell>{hentAllAktivitetITimer(periode, "Sykdom")}</Table.DataCell>
                      <Table.DataCell>{hentAllAktivitetITimer(periode, "Ferie")}</Table.DataCell>
                      <Table.DataCell>TODO</Table.DataCell>
                      <Table.DataCell>Ikke tilgjengelig ennå</Table.DataCell>
                      <Table.DataCell>
                        <input type="hidden" value={periode.id} name="periodeId" />
                        <Button
                          variant="secondary"
                          size="xsmall"
                          icon={<PencilIcon title="a11y-title" fontSize={20} />}
                          type="submit"
                        >
                          Rediger
                        </Button>
                      </Table.DataCell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </Form>
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
