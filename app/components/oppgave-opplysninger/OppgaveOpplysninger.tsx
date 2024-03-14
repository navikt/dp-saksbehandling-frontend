import React from "react";
import type { IOpplysning } from "~/models/oppgave.server";
import { ValidatedForm } from "remix-validated-form";
import { hentValideringRegler } from "~/utils/validering.util";
import { Button } from "@navikt/ds-react";
import { useLocation, useNavigation } from "@remix-run/react";
import { OpplysningInput } from "~/components/opplysning-input/OpplysningInput";
import type { SkjemaMetadata } from "~/routes/saksbehandling.oppgave.$oppgaveId.steg.$stegUrn";
import { PersonBoks } from "~/components/person-boks/PersonBoks";

interface IProps {
  opplysninger: IOpplysning[];
  person: {
    ident: string;
    navn: string;
  };
}

export function OppgaveOpplysninger({ opplysninger, person }: IProps) {
  const location = useLocation();
  const navigation = useNavigation();
  const isSubmitting = Boolean(navigation.state === "submitting");

  const metadata: SkjemaMetadata = {
    opplysninger,
  };

  return (
    <>
      <PersonBoks person={person} />

      <ValidatedForm
        key={location.key} // Keyen gjør at React refresher alt. Uten den kan svaret noen ganger bli igjen når neste steg vises.
        validator={hentValideringRegler(opplysninger)}
        method="post"
      >
        <input name="metadata" type="hidden" value={JSON.stringify(metadata)} />

        {opplysninger.map((opplysning) => (
          <OpplysningInput
            className="mt-4"
            key={opplysning.opplysningNavn}
            name={opplysning.opplysningNavn}
            label={opplysning.opplysningNavn}
            svartype={opplysning.dataType}
            verdi={opplysning.svar?.verdi}
          />
        ))}

        <Button className="mt-4" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Lagrer..." : "Lagre"}
        </Button>
      </ValidatedForm>
    </>
  );
}
