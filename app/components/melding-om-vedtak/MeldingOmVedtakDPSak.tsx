import { Radio, RadioGroup } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useLocation } from "react-router";

import { UtvidedeBeskrivelser } from "~/components/melding-om-vedtak/utvidede-beskrivelser/UtvidedeBeskrivelser";
import { useMeldingOmVedtak } from "~/hooks/useMeldingOmVedtak";
import { useOppgave } from "~/hooks/useOppgave";
import { isAlert } from "~/utils/type-guards";
import { hentValideringForMeldingOmVedtakBrevVariantSkjema } from "~/utils/validering.util";

export function MeldingOmVedtakDPSak() {
  const { pathname } = useLocation();
  const { oppgave, readonly } = useOppgave();
  const { utvidedeBeskrivelser, meldingOmVedtak } = useMeldingOmVedtak();

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

      {!isAlert(meldingOmVedtak) && <UtvidedeBeskrivelser readOnly={readonly} />}
    </>
  );
}
