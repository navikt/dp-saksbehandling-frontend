import { ValidatedForm } from "remix-validated-form";
import { type SkjemaMetadata } from "~/routes/saksbehandling.oppgave.$oppgaveId.steg.$stegUrn";
import { BodyLong, Button, Heading } from "@navikt/ds-react";
import { type IOppgaveStegProps } from "./OppgaveSteg";
import { useLocation, useNavigation } from "@remix-run/react";
import { hentValideringRegler } from "~/utils/validering.util";
import { OpplysningTabell } from "~/components/opplysning-tabell/OpplysningTabell";
import { useStegTekst } from "~/hooks/useStegTekst";

export function OppgaveStegGenerell(props: IOppgaveStegProps) {
  const { steg, readonly } = props;
  const stegTekst = useStegTekst(steg.urn);

  const location = useLocation();
  const navigation = useNavigation();
  const isSubmitting = Boolean(navigation.state === "submitting");

  const metadata: SkjemaMetadata = {
    opplysninger: steg.opplysninger,
  };

  return (
    <>
      <Heading size="large">{stegTekst?.tittel}</Heading>
      <BodyLong>{stegTekst?.beskrivelse}</BodyLong>

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
