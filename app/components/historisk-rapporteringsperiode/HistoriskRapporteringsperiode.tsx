import { Alert, Button, Heading } from "@navikt/ds-react";
import { Form } from "@remix-run/react";
import { type IRapporteringsperiode } from "~/models/rapporteringsperiode.server";
import { RapporteringsperiodeDetaljer } from "../rapporteringsperiode-detaljer/RapporteringsperiodeDetaljer";

interface IProps {
  periode: IRapporteringsperiode;
  historiskPeriode?: IRapporteringsperiode;
}

export function HistoriskRapporteringsperiode(props: IProps) {
  const { historiskPeriode, periode } = props;
  const historikkHentet = historiskPeriode?.id === periode.korrigerer;

  return (
    <>
      <Alert variant="info" className="my-3">
        Denne perioden korrigerer en annen.
      </Alert>

      {historikkHentet && (
        <div className="my-6">
          <Heading level="3" size="small" spacing>
            Historisk periode
          </Heading>
          {historiskPeriode && <RapporteringsperiodeDetaljer periode={historiskPeriode} />}
        </div>
      )}

      {!historikkHentet && (
        <Form method="post" className="my-3">
          <input type="hidden" name="periodeId" value={periode.korrigerer} />
          <Button type="submit" name="submit" value="hent-historikk">
            Hent historikk
          </Button>
        </Form>
      )}

      {historiskPeriode?.korrigerer && (
        <Alert variant="warning" className="my-3">
          Det finnes flere historiske perioder som ikke vises her.
        </Alert>
      )}
    </>
  );
}
