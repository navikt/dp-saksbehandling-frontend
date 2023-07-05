import { Alert, Button, Heading } from "@navikt/ds-react";
import { Form, useActionData } from "@remix-run/react";
import { type IRapporteringsperiode } from "~/models/rapporteringsperiode.server";
import { RapporteringsperiodeDetaljer } from "../rapporteringsperiode-detaljer/RapporteringsperiodeDetaljer";

interface IProps {
  periode: IRapporteringsperiode;
}

export function HistoriskRapporteringsperiode(props: IProps) {
  const { periode } = props;
  const actionData = useActionData();

  return (
    <>
      <Form method="post" className="my-3">
        <Alert variant="info" className="my-3">
          Denne perioden korrigerer en annen.
        </Alert>

        <input type="hidden" name="periodeId" value={periode.korrigerer} />
        <Button type="submit" name="submit" value="hent-historikk">
          Hent historikk
        </Button>
      </Form>

      {actionData?.historiskPeriode.id === periode.korrigerer && (
        <div className="my-6">
          <Heading level="3" size="small" spacing>
            Historisk periode
          </Heading>
          <RapporteringsperiodeDetaljer periode={actionData.historiskPeriode} />
        </div>
      )}

      {actionData?.historiskPeriode.korrigerer && (
        <Alert variant="warning" className="my-3">
          Det finnes flere historiske perioder som ikke vises her.
        </Alert>
      )}
    </>
  );
}
