import { Form, useLoaderData } from "@remix-run/react";
import styles from "../route-styles/rediger-periode.module.css";
import { Alert, Button, Heading, Table, Textarea } from "@navikt/ds-react";
import { FormattedDate } from "~/components/FormattedDate";
import { hentAktivitetITimer, hentAllAktivitetITimer } from "~/utils/aktivitet.utils";
import invariant from "tiny-invariant";
import { type ActionArgs, json, redirect, type LoaderArgs } from "@remix-run/node";
import {
  type IRapporteringsperiode,
  hentRapporteringsperiode,
  type IRapporteringsperiodeDag,
} from "~/models/rapporteringsperiode.server";
import { PencilIcon } from "@navikt/aksel-icons";
import { useState } from "react";
import { AktivitetModal } from "~/components/aktivitet-modal/AktivitetModal";
import { type TAktivitetstype, lagreAktivitet, slettAktivitet } from "~/models/aktivitet.server";

export async function loader({ params, request }: LoaderArgs) {
  invariant(params.periodeId, `Fant ikke rapporteringsperiode`);
  invariant(params.korrigeringId, `Fant ikke korrigeringsperiode`);
  let rapporteringsperiode, korrigeringsperiode: IRapporteringsperiode;

  const periodeResponse = await hentRapporteringsperiode(params.periodeId, request);
  const korrigeringResponse = await hentRapporteringsperiode(params.korrigeringId, request);

  if (periodeResponse.ok) {
    rapporteringsperiode = await periodeResponse.json();
  } else {
    throw new Error("Feil i uthenting av rapporteringsperioder");
  }

  if (korrigeringResponse.ok) {
    korrigeringsperiode = await korrigeringResponse.json();
  } else {
    throw new Error("Feil i uthenting av rapporteringsperioder");
  }

  console.log(korrigeringsperiode.korrigertAv);

  if (korrigeringsperiode.korrigertAv !== "") {
    throw new Error("Periode er allerede korrigert");
  }

  return json({ rapporteringsperiode, korrigeringsperiode });
}

export async function action({ request, params }: ActionArgs) {
  const formData = await request.formData();
  const periodeId = formData.get("periodeId") as string;

  invariant(periodeId, "RapporteringsID er obligatorisk");

  const korrigeringId = formData.get("korrigeringId") as string;
  const aktivitetId = formData.get("aktivitetId") as string;
  const aktivitetstype = formData.get("aktivitetstype") as TAktivitetstype;
  const timer = formData.get("timer") as string;
  const dato = formData.get("dato") as string;

  if (korrigeringId) {
    console.log("hei");
  }

  if (aktivitetId) {
    const response = await slettAktivitet(periodeId, aktivitetId, request);

    if (response.ok) {
      return redirect(`/saksbehandling/person/${params.ident}/oversikt/rapportering-og-utbetaling`);
    } else {
      return json({});
    }
  } else {
    const response = await lagreAktivitet(periodeId, aktivitetstype, timer, dato, request);

    if (response.ok) {
      return redirect(`/saksbehandling/person/${params.ident}/oversikt/rapportering-og-utbetaling`);
    } else {
      throw new Error("Klarte ikke lagre aktivitet");
    }
  }
}

export default function RedigerPeriode() {
  const { rapporteringsperiode, korrigeringsperiode } = useLoaderData();
  const [valgtDag, setValgtDag] = useState<IRapporteringsperiodeDag | undefined>();
  const [modalAapen, setModalAapen] = useState(false);

  function aapneModal(dag: IRapporteringsperiodeDag) {
    setModalAapen(true);
    setValgtDag(dag);
  }

  function lukkModal() {
    setModalAapen(false);
    setValgtDag(undefined);
  }

  return (
    <div className={styles.kontainer} id="dp-saksbehandling-frontend">
      <Heading level="1" size="large" spacing>
        Endre rapportert periode
      </Heading>
      {!rapporteringsperiode ||
        (!korrigeringsperiode && (
          <Alert variant="info" inline>
            Ingen rapporteringsperiode funnet
          </Alert>
        ))}
      {rapporteringsperiode && korrigeringsperiode && (
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
                    {hentAllAktivitetITimer(rapporteringsperiode, "Sykdom")}
                  </Table.DataCell>
                  <Table.DataCell>
                    {hentAllAktivitetITimer(rapporteringsperiode, "Ferie")}
                  </Table.DataCell>
                  <Table.DataCell>TODO</Table.DataCell>
                  <Table.DataCell>Ikke tilgjengelig ennå</Table.DataCell>
                  <Table.DataCell></Table.DataCell>
                </Table.Row>
                {korrigeringsperiode.dager.map((dag: IRapporteringsperiodeDag) => (
                  <Table.Row key={dag.dato} className={styles.periodeDetaljer}>
                    <Table.HeaderCell>
                      <FormattedDate date={dag.dato} />
                    </Table.HeaderCell>
                    <Table.DataCell>{hentAktivitetITimer(dag, "Arbeid") || "-"}</Table.DataCell>
                    <Table.DataCell>{hentAktivitetITimer(dag, "Sykdom") || "-"}</Table.DataCell>
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
          <input type="hidden" value={korrigeringsperiode.id} name="korringeringId" />
          <Textarea label="Begrunnelse" name="begrunnelse"></Textarea>
          <Button type="submit">Send inn endring</Button>
        </Form>
      )}

      <AktivitetModal
        periodeId={korrigeringsperiode.id}
        dag={valgtDag}
        modalAapen={modalAapen}
        lukkModal={lukkModal}
      />
    </div>
  );
}
