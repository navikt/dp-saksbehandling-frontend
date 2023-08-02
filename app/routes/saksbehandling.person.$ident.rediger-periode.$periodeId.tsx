import { PencilIcon } from "@navikt/aksel-icons";
import { Alert, Button, Heading, Table } from "@navikt/ds-react";
import { json, redirect, type ActionArgs, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { withZod } from "@remix-validated-form/with-zod";
import { useState } from "react";
import { ValidatedForm, validationError } from "remix-validated-form";
import invariant from "tiny-invariant";
import { z } from "zod";
import { FormattedDate } from "~/components/FormattedDate";
import { AktivitetModal } from "~/components/aktivitet-modal/AktivitetModal";
import { Input } from "~/components/behandling-steg-input/BehandlingStegInput";
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

export const validator = withZod(
  z.object({
    begrunnelse: z.string().min(1, { message: "Begrunnelse er påkrevd" }),
  }),
);

export async function action({ request, params }: ActionArgs) {
  const formData = await request.formData();

  const submitKnapp = formData.get("submit");
  const periodeId = formData.get("periodeId") as string;

  invariant(params.ident, "Brukerens ident må være satt");
  invariant(periodeId, "RapporteringsID er obligatorisk");

  switch (submitKnapp) {
    case "lagre-aktivitet": {
      const dato = formData.get("dato") as string;
      const aktivitetstype = formData.get("aktivitetstype") as TAktivitetstype;
      const timer = formData.get("timer") as string;
      const tidsperiode = timer && timerTilDuration(timer);

      const response = await lagreAktivitet(periodeId, aktivitetstype, tidsperiode, dato, request);

      if (!response.ok) {
        return json({ aktivitetError: true });
      }

      return json({ aktivitetSuccess: true });
    }

    case "slette-aktivitet": {
      const aktivitetId = formData.get("aktivitetId") as string;
      const response = await slettAktivitet(periodeId, aktivitetId, request);

      if (!response.ok) {
        return json({ aktivitetError: true });
      }

      return json({ aktivitetSuccess: true });
    }

    case "godkjenne-periode": {
      const validering = await validator.validate(formData);

      if (validering.error) return validationError(validering.error);

      const response = await godkjennPeriode(periodeId, validering.data.begrunnelse, request);

      if (!response.ok) {
        throw new Error("Klarte ikke godkjenne korrigeringsperiode");
      }

      return redirect(`/saksbehandling/person/${params.ident}/oversikt/rapportering-og-utbetaling`);
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
        <ValidatedForm key={rapporteringsperiode.id} validator={validator} method="post">
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
          <Input
            className={styles.redigerPeriodeBegrunnelse}
            name="begrunnelse"
            label="Begrunnelse"
            svartype="String"
          />
          <input type="hidden" value={rapporteringsperiode.id} name="periodeId" />
          <Button type="submit" name="submit" value="godkjenne-periode" className="my-6">
            Send inn
          </Button>
        </ValidatedForm>
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
