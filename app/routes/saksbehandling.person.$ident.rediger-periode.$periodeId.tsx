import { PencilIcon } from "@navikt/aksel-icons";
import { Alert, Button, Heading, Table, Textarea } from "@navikt/ds-react";
import { json, redirect, type ActionArgs, type LoaderArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import invariant from "tiny-invariant";
import { FormattedDate } from "~/components/FormattedDate";
import { AktivitetModal } from "~/components/aktivitet-modal/AktivitetModal";
import { lagreAktivitet, slettAktivitet, type TAktivitetstype } from "~/models/aktivitet.server";
import {
  godkjennPeriode,
  hentRapporteringsperiode,
  type IRapporteringsperiode,
  type IRapporteringsperiodeDag,
} from "~/models/rapporteringsperiode.server";
import {
  hentAktivitetITimer,
  hentAllAktivitetITimer,
  timerTilDuration,
} from "~/utils/aktivitet.utils";
import styles from "../route-styles/rediger-periode.module.css";

export async function loader({ params, request }: LoaderArgs) {
  invariant(params.periodeId, `Fant ikke rapporteringsperiode`);
  let rapporteringsperiode: IRapporteringsperiode;

  const periodeResponse = await hentRapporteringsperiode(params.periodeId, request);

  if (periodeResponse.ok) {
    rapporteringsperiode = await periodeResponse.json();
  } else {
    throw new Error("Feil i uthenting av rapporteringsperioder");
  }

  return json({ rapporteringsperiode });
}

export async function action({ request, params }: ActionArgs) {
  const formData = await request.formData();

  const submitKnapp = formData.get("submit");
  const periodeId = formData.get("periodeId") as string;
  const begrunnelse = formData.get("begrunnelse") as string;

  invariant(params.ident, "Brukerens ident må være satt");
  invariant(periodeId, "RapporteringsID er obligatorisk");

  switch (submitKnapp) {
    case "lagre-aktivitet": {
      const dato = formData.get("dato") as string;
      const aktivitetstype = formData.get("aktivitetstype") as TAktivitetstype;
      const timer = formData.get("timer") as string;
      const tidsperiode = timer && timerTilDuration(timer);

      const response = await lagreAktivitet(periodeId, aktivitetstype, tidsperiode, dato, request);

      if (response.ok) {
        return json({ aktivitetSuccess: true });
      } else {
        return json({ aktivitetError: true });
      }
    }

    case "slette-aktivitet": {
      const aktivitetId = formData.get("aktivitetId") as string;
      const response = await slettAktivitet(periodeId, aktivitetId, request);

      if (response.ok) {
        return json({ aktivitetSuccess: true });
      } else {
        console.log(response);
        return json({ aktivitetError: true });
      }
    }

    case "godkjenne-periode": {
      invariant(begrunnelse, "Begrunnelse er obligatorisk");

      const response = await godkjennPeriode(periodeId, begrunnelse, request);

      if (response.ok) {
        return redirect(
          `/saksbehandling/person/${params.ident}/oversikt/rapportering-og-utbetaling`
        );
      } else {
        throw new Error("Klarte ikke godkjenne korrigeringsperiode");
      }
    }
  }
}

export default function RedigerPeriode() {
  const { rapporteringsperiode } = useLoaderData();
  const [valgtDato, setValgtDato] = useState<string | undefined>();
  const [modalAapen, setModalAapen] = useState(false);

  function aapneModal(dag: IRapporteringsperiodeDag) {
    setModalAapen(true);
    setValgtDato(dag.dato);
  }

  function lukkModal() {
    setModalAapen(false);
    setValgtDato(undefined);
  }

  return (
    <div className={styles.kontainer} id="dp-saksbehandling-frontend">
      <Heading level="1" size="large" spacing>
        Endre periode
      </Heading>
      {!rapporteringsperiode ||
        (!rapporteringsperiode && (
          <Alert variant="info" inline>
            Ingen rapporteringsperiode funnet
          </Alert>
        ))}
      {rapporteringsperiode && (
        <Form method="post" key={rapporteringsperiode.id}>
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
              <>
                <Table.Row>
                  <Table.HeaderCell>
                    <FormattedDate date={rapporteringsperiode.fraOgMed} /> -{" "}
                    <FormattedDate date={rapporteringsperiode.tilOgMed} />
                  </Table.HeaderCell>
                  <Table.DataCell>
                    {hentAllAktivitetITimer(rapporteringsperiode, "Arbeid")}
                  </Table.DataCell>
                  <Table.DataCell>
                    {hentAllAktivitetITimer(rapporteringsperiode, "Syk")}
                  </Table.DataCell>
                  <Table.DataCell>
                    {hentAllAktivitetITimer(rapporteringsperiode, "Ferie")}
                  </Table.DataCell>
                  <Table.DataCell>TODO</Table.DataCell>
                  <Table.DataCell>Ikke tilgjengelig ennå</Table.DataCell>
                  <Table.DataCell></Table.DataCell>
                </Table.Row>
                {rapporteringsperiode.dager.map((dag: IRapporteringsperiodeDag) => (
                  <Table.Row key={dag.dato} className={styles.periodeDetaljer}>
                    <Table.HeaderCell>
                      <FormattedDate date={dag.dato} ukedag />
                    </Table.HeaderCell>
                    <Table.DataCell>{hentAktivitetITimer(dag, "Arbeid") || "-"}</Table.DataCell>
                    <Table.DataCell>{hentAktivitetITimer(dag, "Syk") || "-"}</Table.DataCell>
                    <Table.DataCell>{hentAktivitetITimer(dag, "Ferie") || "-"}</Table.DataCell>
                    <Table.DataCell></Table.DataCell>
                    <Table.DataCell></Table.DataCell>
                    <Table.DataCell>
                      <Button
                        variant="secondary"
                        size="xsmall"
                        icon={<PencilIcon title="a11y-title" fontSize={20} />}
                        type="button"
                        onClick={() => aapneModal(dag)}
                      >
                        Rediger
                      </Button>
                    </Table.DataCell>
                  </Table.Row>
                ))}
              </>
            </Table.Body>
          </Table>

          <Textarea
            defaultValue={"lkjsdklfjskd"}
            error={""}
            resize={true}
            label="begrunnelse"
            name="begrunnelse"
          />

          <input type="hidden" value={rapporteringsperiode.id} name="periodeId" />
          <Button type="submit" name="submit" value="godkjenne-periode" className="my-6">
            Send inn
          </Button>
        </Form>
      )}

      <AktivitetModal
        rapporteringsperiode={rapporteringsperiode}
        dato={valgtDato}
        modalAapen={modalAapen}
        lukkModal={lukkModal}
      />
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
