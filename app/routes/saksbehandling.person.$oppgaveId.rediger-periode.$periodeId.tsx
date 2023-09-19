import { PencilIcon } from "@navikt/aksel-icons";
import { Alert, Button, Heading, Table } from "@navikt/ds-react";
import { type ActionArgs, json, type LoaderArgs, redirect } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { withZod } from "@remix-validated-form/with-zod";
import { useEffect, useState } from "react";
import { ValidatedForm, validationError } from "remix-validated-form";
import invariant from "tiny-invariant";
import { z } from "zod";
import { FormattedDate } from "~/components/FormattedDate";
import { AktivitetModal } from "~/components/aktivitet-modal/AktivitetModal";
import { Input } from "~/components/behandling-steg-input/BehandlingStegInput";
import { lagreAktivitet, slettAktivitet, type TAktivitetType } from "~/models/aktivitet.server";
import {
  godkjennPeriode,
  hentRapporteringsperiode,
  type IRapporteringsperiodeDag,
} from "~/models/rapporteringsperiode.server";
import {
  hentAktivitetITimer,
  hentAllAktivitetITimer,
  timerTilDuration,
} from "~/utils/aktivitet.utils";
import styles from "../route-styles/rediger-periode.module.css";
import { getSession } from "~/models/auth.server";

export async function loader({ params, request }: LoaderArgs) {
  invariant(params.periodeId, `Fant ikke rapporteringsperiode`);
  const session = await getSession(request);
  const rapporteringsperiode = await hentRapporteringsperiode(params.periodeId, session);

  return json({ rapporteringsperiode });
}

export const validator = withZod(
  z.object({
    begrunnelse: z.string().min(1, { message: "Begrunnelse er påkrevd" }),
  }),
);

export interface IRedigerPeriodeAction {
  aktivitetLagret?: boolean;
  aktivitetError?: boolean;
}

export async function action({ request, params }: ActionArgs) {
  const periodeId = params.periodeId;
  const oppgaveId = params.oppgaveId;
  invariant(periodeId, "RapporteringsID er obligatorisk");
  invariant(oppgaveId, "OppgaveId er obligatorisk");

  const session = await getSession(request);
  const formData = await request.formData();
  const submitKnapp = formData.get("submit");

  switch (submitKnapp) {
    case "lagre-aktivitet": {
      const dato = formData.get("dato") as string;
      const aktivitetstype = formData.get("aktivitetstype") as TAktivitetType;
      const timer = formData.get("timer") as string;
      const tidsperiode = timer && timerTilDuration(timer);

      const response = await lagreAktivitet(periodeId, aktivitetstype, tidsperiode, dato, session);

      if (response.ok) {
        return json({ aktivitetLagret: true });
      } else {
        return json({ aktivitetError: true });
      }
    }

    case "slette-aktivitet": {
      const aktivitetId = formData.get("aktivitetId") as string;
      const response = await slettAktivitet(periodeId, aktivitetId, session);

      if (response.ok) {
        return json({ aktivitetLagret: true });
      } else {
        return json({ aktivitetError: true });
      }
    }

    case "godkjenne-periode": {
      const validering = await validator.validate(formData);

      if (validering.error) return validationError(validering.error);

      await godkjennPeriode(periodeId, validering.data.begrunnelse, session);
      return redirect(`/saksbehandling/person/${oppgaveId}/oversikt/rapportering-og-utbetaling`);
    }
  }
}

export default function RedigerPeriode() {
  const { rapporteringsperiode } = useLoaderData();
  const [valgtAktivitet, setValgtAktivitet] = useState<TAktivitetType | string>("");
  const [valgtDato, setValgtDato] = useState<string | undefined>();
  const [modalAapen, setModalAapen] = useState(false);
  const actionData = useActionData() as IRedigerPeriodeAction;

  useEffect(() => {
    if (actionData?.aktivitetLagret) {
      lukkModal();
    }
  }, [actionData]);

  function aapneModal(dag: IRapporteringsperiodeDag) {
    setModalAapen(true);
    setValgtDato(dag.dato);
  }

  function lukkModal() {
    setModalAapen(false);
    setValgtDato(undefined);
    setValgtAktivitet("");
  }

  return (
    <div className={styles.container} id="dp-saksbehandling-frontend">
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
                        TRYK HER Rediger
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
        valgtAktivitet={valgtAktivitet}
        setValgtAktivitet={setValgtAktivitet}
        modalAapen={modalAapen}
        lukkModal={lukkModal}
      />
    </div>
  );
}

export function ErrorBoundary() {
  return (
    <div className={styles.container}>
      <Alert variant="error" inline>
        Noe skjedde feil
      </Alert>
    </div>
  );
}
