import { Alert, Button, Table } from "@navikt/ds-react";
import {
  type IRapporteringsperiode,
  hentRapporteringsperioder,
  lagKorrigeringsperiode,
  avgodkjennPeriode,
  hentRapporteringsperiode,
  lagRapporteringsperiode,
} from "~/models/rapporteringsperiode.server";
import invariant from "tiny-invariant";
import { type LoaderArgs, json, type ActionArgs, redirect } from "@remix-run/node";
import { Form, useLoaderData, useParams } from "@remix-run/react";
import { FormattedDate } from "~/components/FormattedDate";
import { hentAllAktivitetITimer } from "~/utils/aktivitet.utils";
import { PencilIcon } from "@navikt/aksel-icons";
import styles from "../route-styles/rapportering-og-utbetaling.module.css";
import { RapporteringsperiodeDetaljer } from "~/components/rapporteringsperiode-detaljer/RapporteringsperiodeDetaljer";
import { RapporteringsperiodeStatus } from "~/components/rapporteringsperiode-status/RapporteringsperiodeStatus";
import { RemixLink } from "~/components/RemixLink";
import { HistoriskRapporteringsperiode } from "~/components/historisk-rapporteringsperiode/HistoriskRapporteringsperiode";
import { NyRapporteringsperiode } from "~/components/ny-rapporteringsperiode/NyRapporteringsperiode";
import { hentOppgave } from "~/models/oppgave.server";

export async function loader({ params, request }: LoaderArgs) {
  invariant(params.oppgaveId, "Fant ikke oppgaveId");
  const oppgave = await hentOppgave(params.oppgaveId, request);

  if (!oppgave) {
    console.log("Skjer dette da? RIP");
    throw new Response(null, {
      status: 500,
      statusText: `Fant ikke oppgave med id: ${params.oppgaveId}`,
    });
  }

  const response = await hentRapporteringsperioder(oppgave.person, request);

  if (response.ok) {
    const rapporteringsperioder = await response.json();
    return json({ rapporteringsperioder });
  } else {
    throw new Response(null, {
      status: 500,
      statusText: "Feil i uthenting av rapporteringsperioder",
    });
  }
}

export async function action({ request, params }: ActionArgs) {
  const formData = await request.formData();
  const submitKnapp = formData.get("submit");
  const periodeId = formData.get("periodeId") as string;

  invariant(params.oppgaveId, "OppgaveId må være satt");

  switch (submitKnapp) {
    case "start-korrigering": {
      const response = await lagKorrigeringsperiode(periodeId, request);

      if (response.ok) {
        const korrigeringsperiode: IRapporteringsperiode = await response.json();
        return redirect(
          `/saksbehandling/person/${params.oppgaveId}/rediger-periode/${korrigeringsperiode.id}`,
        );
      } else {
        throw new Response(null, { status: 500, statusText: "Klarte ikke starte korrigering" });
      }
    }

    case "avgodkjenn": {
      const response = await avgodkjennPeriode(periodeId, request);

      if (response.ok) {
        return redirect(`/saksbehandling/person/${params.oppgaveId}/rediger-periode/${periodeId}`);
      } else {
        throw new Response(null, { status: 500, statusText: "Klarte ikke avgodkjenne periode" });
      }
    }

    case "hent-historikk": {
      const response = await hentRapporteringsperiode(periodeId, request);

      if (response.ok) {
        const historiskPeriode: IRapporteringsperiode = await response.json();
        return json({ historiskPeriode });
      } else {
        throw new Error("Klarte ikke hente opp historisk rapporteringsperiode");
      }
    }

    case "ny-periode": {
      const fraOgMed = formData.get("fraOgMed") as string;
      const formattertDato = fraOgMed.split(".").reverse().join("-");

      const response = await lagRapporteringsperiode(periodeId, formattertDato, request);

      if (response.ok) {
        const rapporteringsperiode: IRapporteringsperiode = await response.json();
        return json({ rapporteringsperiode });
      } else {
        console.dir(response);
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
  const { oppgaveId } = useParams();

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
                    data-testid="rapporteringsperiode"
                    content={
                      <>
                        <RapporteringsperiodeDetaljer periode={periode} />
                        {periode.status === "TilUtfylling" && (
                          <RemixLink
                            as="Button"
                            to={`/saksbehandling/person/${oppgaveId}/rediger-periode/${periode.id}`}
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

                        {periode.korrigerer && <HistoriskRapporteringsperiode periode={periode} />}
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
                    <Table.DataCell>
                      {periode.korrigerer && "Korrigerer tidligere periode"}
                    </Table.DataCell>
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
      <NyRapporteringsperiode />
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
