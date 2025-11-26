import { Radio, RadioGroup } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useLocation } from "react-router";

import { UtvidedeBeskrivelser } from "~/components/melding-om-vedtak/utvidede-beskrivelser/UtvidedeBeskrivelser";
import { IAlert } from "~/context/alert-context";
import { useOppgave } from "~/hooks/useOppgave";
import { useUtvidedeBeskrivelser } from "~/hooks/useUtvidedeBeskrivelser";
import { ISanityBrevMal } from "~/sanity/sanity-types";
import { isAlert } from "~/utils/type-guards";
import { hentValideringForMeldingOmVedtakBrevVariantSkjema } from "~/utils/validering.util";

import { components } from "../../../openapi/melding-om-vedtak-typer";

interface IProps {
  meldingOmVedtak?: components["schemas"]["MeldingOmVedtakResponse"] | IAlert;
  sanityBrevMaler: ISanityBrevMal[];
}

export function MeldingOmVedtakDPSak({ meldingOmVedtak, sanityBrevMaler }: IProps) {
  const { pathname } = useLocation();
  const { oppgave, readonly } = useOppgave();
  const { utvidedeBeskrivelser } = useUtvidedeBeskrivelser();

  const endreBrevVariantForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForMeldingOmVedtakBrevVariantSkjema(),
    defaultValues: {
      _action: "lagre-brev-variant",
      behandlingId: oppgave.behandlingId,
      brevVariant: !isAlert(meldingOmVedtak) ? meldingOmVedtak?.brevVariant : "GENERERT",
    },
  });

  return (
    <>
      <hr className="border-(--ax-border-neutral-subtle)" />

      <RadioGroup
        {...endreBrevVariantForm.field("brevVariant").getInputProps()}
        size={"small"}
        legend="Variant"
        readOnly={readonly}
        onChange={(value) => {
          endreBrevVariantForm.field("brevVariant").setValue(value);
          endreBrevVariantForm.submit();
        }}
      >
        <Radio value="GENERERT">Standardisert tekst</Radio>
        <Radio value="EGENDEFINERT">Skriv tekst selv</Radio>
      </RadioGroup>

      {utvidedeBeskrivelser.length > 0 && <hr className="border-(--ax-border-neutral-subtle)" />}

      {!isAlert(meldingOmVedtak) && (
        <UtvidedeBeskrivelser
          meldingOmVedtak={meldingOmVedtak}
          readOnly={readonly}
          sanityBrevMaler={sanityBrevMaler}
        />
      )}
    </>
  );
}
