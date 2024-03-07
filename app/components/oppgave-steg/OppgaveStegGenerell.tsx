import { ValidatedForm } from "remix-validated-form";
import { type SkjemaMetadata } from "~/routes/saksbehandling.oppgave.$oppgaveId.steg.$stegNavn";
import { Alert, BodyLong, Button, Heading } from "@navikt/ds-react";
import { type IOppgaveStegProps } from "./OppgaveSteg";
import { useLocation, useNavigation } from "@remix-run/react";
import { hentValideringRegler } from "~/utils/validering.util";
import { OpplysningTabell } from "~/components/opplysning-tabell/OpplysningTabell";

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

        <OpplysningTabell opplysninger={steg.opplysninger} />

        {!readonly && (
          <Button className="mt-4" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Lagrer..." : "Lagre"}
          </Button>
        )}
      </ValidatedForm>
    </>
  );
}
