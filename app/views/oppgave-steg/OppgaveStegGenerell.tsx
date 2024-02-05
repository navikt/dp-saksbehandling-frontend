import { ValidatedForm } from "remix-validated-form";
import { type Metadata } from "~/routes/saksbehandling.oppgave.$oppgaveId.steg.$stegUuid";
import { hentValideringRegler } from "~/utils/validering.util";
import { Button } from "@navikt/ds-react";
import { type IOppgaveStegProps } from "./OppgaveSteg";
import { useLocation, useNavigation } from "@remix-run/react";
import { OpplysningInput } from "~/components/oppgave-steg-input/OpplysningInput";

export function OppgaveStegGenerell(props: IOppgaveStegProps) {
  const { steg } = props;

  const location = useLocation();
  const navigation = useNavigation();
  const isSubmitting = Boolean(navigation.state === "submitting");

  const metadata: Metadata = {
    id: steg.stegNavn,
  };

  return (
    <ValidatedForm
      key={location.key} // Keyen gjør at React refresher alt. Uten den kan svaret noen ganger bli igjen når neste steg vises.
      validator={hentValideringRegler("Boolean", steg.stegNavn, steg.uuid)} //Dette må endres etter ny modell
      method="post"
    >
      <input name="metadata" type="hidden" value={JSON.stringify(metadata)} />

      {steg.opplysninger.map((opplysning) => (
        <OpplysningInput {...opplysning} key={opplysning.opplysningNavn} />
      ))}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Lagrer..." : "Lagre"}
      </Button>
    </ValidatedForm>
  );
}
