import React from "react";
import type { IOpplysning } from "~/models/oppgave.server";
import { ValidatedForm } from "remix-validated-form";
import { hentValideringRegler } from "~/utils/validering.util";
import { useLocation } from "@remix-run/react";
import { Opplysning } from "~/components/opplysning/Opplysning";
import type { SkjemaMetadata } from "~/routes/saksbehandling.oppgave.$oppgaveId.steg.$beskrivendeId";
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
          <Opplysning
            key={opplysning.opplysningNavn}
            className="mt-4"
            label={opplysning.opplysningNavn}
            opplysning={opplysning}
            readonly={false}
          />
        ))}
      </ValidatedForm>
    </>
  );
}
