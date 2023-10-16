import { Button, Heading } from "@navikt/ds-react";
import { Form, useNavigation } from "@remix-run/react";
import type { Metadata } from "~/routes/saksbehandling.oppgave.$oppgaveId.steg.$stegId";
import { hentFormattertDato } from "~/utils/dato.utils";
import type { IProps } from "~/views/behandling-steg/BehandlingSteg";

export function BehandlingStegForslagTilVedtak(props: IProps) {
  const { steg, readonly } = props;
  const navigation = useNavigation();
  const isSubmitting = Boolean(navigation.state === "submitting");

  const metadata: Metadata = {
    svartype: steg.svartype,
    id: steg.id,
  };

  return (
    <Form method="post">
      <input name="metadata" type="hidden" value={JSON.stringify(metadata)} />
      <input name={steg.uuid} type="hidden" value={"true"} />
      <input name={"begrunnelse"} type="hidden" value={""} />
      <Heading size="medium">Forslag til vedtak</Heading>

      {!readonly && (
        <Button type="submit">{isSubmitting ? "Lagrer..." : "Send til kontroll"}</Button>
      )}

      {steg.svar?.begrunnelse?.utført && (
        <div>
          {`Sendt til kontroll: ${hentFormattertDato(steg.svar.begrunnelse.utført, true)} av: ${steg
            .svar.begrunnelse.utførtAv?.ident}`}
        </div>
      )}
    </Form>
  );
}
