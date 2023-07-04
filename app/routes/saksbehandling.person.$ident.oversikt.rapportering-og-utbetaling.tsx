import { Alert, Button, Table } from "@navikt/ds-react";
import {
  type IRapporteringsperiode,
  hentRapporteringsperioder,
  lagKorrigeringsperiode,
  lagRapporteringsperiode,
  avgodkjennPeriode,
} from "~/models/rapporteringsperiode.server";
import invariant from "tiny-invariant";
import { type LoaderArgs, json, type ActionArgs, redirect } from "@remix-run/node";
import { Form, useLoaderData, useParams } from "@remix-run/react";
import { FormattedDate } from "~/components/FormattedDate";
import { hentAllAktivitetITimer } from "~/utils/aktivitet.utils";
import { PencilIcon, PlusIcon } from "@navikt/aksel-icons";
import styles from "../route-styles/rapportering-og-utbetaling.module.css";
import { RapporteringsperiodeDetaljer } from "~/components/rapporteringsperiode-detaljer/RapporteringsperiodeDetaljer";
import { RapporteringsperiodeStatus } from "~/components/rapporteringsperiode-status/RapporteringsperiodeStatus";
import { RemixLink } from "~/components/RemixLink";

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
  const submitKnapp = formData.get("submit");
  const periodeId = formData.get("periodeId") as string;

  invariant(params.ident, "Brukerens ident må være satt");

  switch (submitKnapp) {
    case "start-korrigering": {
      const response = await lagKorrigeringsperiode(periodeId, request);

      if (response.ok) {
        const korrigeringsperiode: IRapporteringsperiode = await response.json();
        return redirect(
          `/saksbehandling/person/${params.ident}/rediger-periode/${korrigeringsperiode.id}`
        );
      } else {
        throw new Error("Klarte ikke starte korrigering");
      }
    }

    case "avgodkjenn": {
      const response = await avgodkjennPeriode(periodeId, request);

      if (response.ok) {
        return redirect(`/saksbehandling/person/${params.ident}/rediger-periode/${periodeId}`);
      } else {
        throw new Error("Klarte ikke avgodkjenne periode");
      }
    }

    case "ny-periode": {
      const response = await lagRapporteringsperiode(params.ident, request);

      if (response.ok) {
        const rapporteringsperiode: IRapporteringsperiode = await response.json();
        return json({ rapporteringsperiode });
      } else {
        throw new Error("Klarte ikke lage en ny rapporteringsperiode");
      }
    }

    default: {
      throw new Error("Det skjedde en feil");
    }
  }
}

export default function PersonOversiktRapporteringOgUtbetalingSide() {
  const { rapporteringsperioder } = useLoaderData();
  const { ident } = useParams();

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
                <Table.HeaderCell />
                <Table.HeaderCell>14. dagers periode</Table.HeaderCell>
                <Table.HeaderCell>Jobbet</Table.HeaderCell>
                <Table.HeaderCell>Syk</Table.HeaderCell>
                <Table.HeaderCell>Ferie</Table.HeaderCell>
                <Table.HeaderCell>Dager brukt av dp</Table.HeaderCell>
                <Table.HeaderCell>Merknader</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {rapporteringsperioder.map((periode: IRapporteringsperiode) => {
                return (
                  <Table.ExpandableRow
                    key={periode.id}
                    content={
                      <>
                        <RapporteringsperiodeDetaljer periode={periode} />
                        {periode.status === "TilUtfylling" && (
                          <RemixLink
                            as="Button"
                            to={`/saksbehandling/person/${ident}/rediger-periode/${periode.id}`}
                            className="my-6"
                          >
                            Rediger
                          </RemixLink>
                        )}

                        {periode.status === "Godkjent" && (
                          <Form method="post" key={0} className="my-6">
                            <input type="hidden" value={periode.id} name="periodeId" />
                            <Button
                              type="submit"
                              variant="secondary"
                              size="small"
                              icon={<PencilIcon title="a11y-title" fontSize={20} />}
                              name="submit"
                              value="avgodkjenn"
                            >
                              Lås opp og rediger
                            </Button>
                          </Form>
                        )}

                        {periode.status === "Innsendt" && (
                          <Form method="post" key={0} className="my-6">
                            <input type="hidden" value={periode.id} name="periodeId" />
                            <Button
                              type="submit"
                              variant="secondary"
                              size="small"
                              icon={<PencilIcon title="a11y-title" fontSize={20} />}
                              name="submit"
                              value="start-korrigering"
                            >
                              Korriger
                            </Button>
                          </Form>
                        )}
                      </>
                    }
                  >
                    <Table.DataCell>
                      <FormattedDate date={periode.fraOgMed} /> -{" "}
                      <FormattedDate date={periode.tilOgMed} />
                    </Table.DataCell>
                    <Table.DataCell>{hentAllAktivitetITimer(periode, "Arbeid")}</Table.DataCell>
                    <Table.DataCell>{hentAllAktivitetITimer(periode, "Syk")}</Table.DataCell>
                    <Table.DataCell>{hentAllAktivitetITimer(periode, "Ferie")}</Table.DataCell>
                    <Table.DataCell>TODO</Table.DataCell>
                    <Table.DataCell>Ikke tilgjengelig ennå</Table.DataCell>
                    <Table.DataCell>
                      <RapporteringsperiodeStatus periode={periode} />
                    </Table.DataCell>
                  </Table.ExpandableRow>
                );
              })}
            </Table.Body>
          </Table>
        </>
      )}
      <Form method="post" className="my-6">
        <input type="hidden" name="ny-periode" value="true" />
        <Button type="submit" icon={<PlusIcon />}>
          Lag ny rapporteringsperiode
        </Button>
      </Form>
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
