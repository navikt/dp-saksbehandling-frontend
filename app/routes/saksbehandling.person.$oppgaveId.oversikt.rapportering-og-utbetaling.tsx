import { Alert, Button, Table } from "@navikt/ds-react";
import {
  avgodkjennPeriode,
  hentRapporteringsperiode,
  hentRapporteringsperioder,
  type IRapporteringsperiode,
  lagKorrigeringsperiode,
} from "~/models/rapporteringsperiode.server";
import invariant from "tiny-invariant";
import { type ActionArgs, json, type LoaderArgs, redirect } from "@remix-run/node";
import { Form, useLoaderData, useParams } from "@remix-run/react";
import { FormattedDate } from "~/components/FormattedDate";
import { hentAllAktivitetIDager, hentAllAktivitetITimer } from "~/utils/aktivitet.utils";
import { PencilIcon } from "@navikt/aksel-icons";
import styles from "../route-styles/rapportering-og-utbetaling.module.css";
import { RapporteringsperiodeDetaljer } from "~/components/rapporteringsperiode-detaljer/RapporteringsperiodeDetaljer";
import { RapporteringsperiodeStatus } from "~/components/rapporteringsperiode-status/RapporteringsperiodeStatus";
import { RemixLink } from "~/components/RemixLink";
import { HistoriskRapporteringsperiode } from "~/components/historisk-rapporteringsperiode/HistoriskRapporteringsperiode";
import { hentOppgave } from "~/models/oppgave.server";
import { getSession } from "~/models/auth.server";

export async function loader({ params, request }: LoaderArgs) {
  invariant(params.oppgaveId, "Fant ikke oppgaveId");
  const session = await getSession(request);

  const oppgave = await hentOppgave(params.oppgaveId, session);
  const rapporteringsperioder = await hentRapporteringsperioder(oppgave.person, session);

  return json({ rapporteringsperioder });
}

export async function action({ request, params }: ActionArgs) {
  invariant(params.oppgaveId, "OppgaveId må være satt");
  const session = await getSession(request);

  const formData = await request.formData();
  const submitKnapp = formData.get("submit");
  const periodeId = formData.get("periodeId") as string;

  switch (submitKnapp) {
    case "start-korrigering": {
      const korrigeringsperiode = await lagKorrigeringsperiode(periodeId, session);
      return redirect(
        `/saksbehandling/person/${params.oppgaveId}/rediger-periode/${korrigeringsperiode.id}`,
      );
    }

    case "avgodkjenn": {
      await avgodkjennPeriode(periodeId, session);
      return redirect(`/saksbehandling/person/${params.oppgaveId}/rediger-periode/${periodeId}`);
    }

    case "hent-historikk": {
      const historiskPeriode = await hentRapporteringsperiode(periodeId, session);
      return json({ historiskPeriode });
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
    <div className={styles.container}>
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
                <Table.HeaderCell>Merknader</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {rapporteringsperioder.map((periode: IRapporteringsperiode) => (
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
                  <Table.DataCell>{hentAllAktivitetIDager(periode, "Syk")}</Table.DataCell>
                  <Table.DataCell>{hentAllAktivitetIDager(periode, "Ferie")}</Table.DataCell>
                  <Table.DataCell>
                    {periode.korrigerer && "Korrigerer tidligere periode"}
                  </Table.DataCell>
                  <Table.DataCell>
                    <RapporteringsperiodeStatus periode={periode} />
                  </Table.DataCell>
                </Table.ExpandableRow>
              ))}
            </Table.Body>
          </Table>
        </>
      )}
    </div>
  );
}

export function ErrorBoundary() {
  return (
    <div className={styles.container}>
      <Alert variant="error" inline>
        Noe gikk galt
      </Alert>
    </div>
  );
}
