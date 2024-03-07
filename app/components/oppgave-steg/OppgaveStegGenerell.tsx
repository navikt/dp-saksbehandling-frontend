import { ValidatedForm } from "remix-validated-form";
import { type SkjemaMetadata } from "~/routes/saksbehandling.oppgave.$oppgaveId.steg.$stegNavn";
import { Alert, BodyLong, Button, Heading, Table } from "@navikt/ds-react";
import { type IOppgaveStegProps } from "./OppgaveSteg";
import { useLocation, useNavigation } from "@remix-run/react";
import { hentValideringRegler } from "~/utils/validering.util";
import { OppgaveStegInput } from "~/components/oppgave-steg-input/OppgaveStegInput";

export function OppgaveStegGenerell(props: IOppgaveStegProps) {
  const { steg, readonly } = props;

  const location = useLocation();
  const navigation = useNavigation();
  const isSubmitting = Boolean(navigation.state === "submitting");

  const metadata: SkjemaMetadata = {
    opplysninger: steg.opplysninger,
  };

  return (
    <>
      <Heading size="large">{steg.stegNavn}</Heading>

      <BodyLong>
        For å ha rett til dagpenger må medlemmet være reell arbeidssøker. Som reell arbeidssøker
        regnes den som er arbeidsfør og er villig til å ta ethvert arbeid, hvor som helst i Norge,
        uavhengig av om det er heltid eller deltid, og delta på arbeidsmarkedstiltak.
      </BodyLong>

      <Alert className="-mx-4" variant="warning" size="small" fullWidth={true}>
        Det er søkt om å være deltidssøker - Sjekk om det er grunnlag og bekreft om dette skal
        godkjennes
      </Alert>

      <ValidatedForm
        className="mt-8"
        key={location.key} // Keyen gjør at React refresher alt. Uten den kan svaret noen ganger bli igjen når neste steg vises.
        validator={hentValideringRegler(steg.opplysninger)}
        method="post"
      >
        <input name="metadata" type="hidden" value={JSON.stringify(metadata)} />

        <Table className="kompakt-tabell">
          <Table.Body>
            {steg.opplysninger.map((opplysning) => (
              <Table.Row key={opplysning.opplysningNavn}>
                <Table.DataCell scope="row">{opplysning.opplysningNavn}</Table.DataCell>
                <Table.DataCell>
                  <OppgaveStegInput
                    name={opplysning.opplysningNavn}
                    svartype={opplysning.dataType}
                    verdi={opplysning.svar?.verdi}
                  />
                </Table.DataCell>
                <Table.DataCell>
                  <Button variant="tertiary" type="button" size="xsmall">
                    Endre
                  </Button>
                </Table.DataCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

        {!readonly && (
          <Button className="mt-4" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Lagrer..." : "Lagre"}
          </Button>
        )}
      </ValidatedForm>
    </>
  );
}
