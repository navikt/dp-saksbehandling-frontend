import { ValidatedForm } from "remix-validated-form";
import { type SkjemaMetadata } from "~/routes/saksbehandling.oppgave.$oppgaveId.steg.$stegUuid";
import { Button } from "@navikt/ds-react";
import { type IOppgaveStegProps } from "./OppgaveSteg";
import { useLocation, useNavigation } from "@remix-run/react";
import { OpplysningInput } from "~/components/oppgave-steg-input/OpplysningInput";
import { hentValideringRegler } from "~/utils/validering.util";

export function OppgaveStegGenerell(props: IOppgaveStegProps) {
  const { steg } = props;

  const location = useLocation();
  const navigation = useNavigation();
  const isSubmitting = Boolean(navigation.state === "submitting");

  const metadata: SkjemaMetadata = {
    opplysninger: steg.opplysninger,
  };

  return (
    <ValidatedForm
      key={location.key} // Keyen gjør at React refresher alt. Uten den kan svaret noen ganger bli igjen når neste steg vises.
      validator={hentValideringRegler(steg.opplysninger)}
      method="post"
    >
      <input name="metadata" type="hidden" value={JSON.stringify(metadata)} />

      {steg.opplysninger.map((opplysning) => (
        <div className="mb-6" key={opplysning.opplysningNavn}>
          <OpplysningInput {...opplysning} />
        </div>
      ))}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Lagrer..." : "Lagre"}
      </Button>
    </ValidatedForm>
  );
}
