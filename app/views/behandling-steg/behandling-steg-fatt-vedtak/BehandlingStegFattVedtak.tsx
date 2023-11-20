import { Button, Heading } from "@navikt/ds-react";
import { Form, useNavigation } from "@remix-run/react";
import { BehandlingStegLagretAv } from "~/components/behandling-steg-lagret-av/BehandlingStegLagretAv";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import type { Metadata } from "~/routes/saksbehandling.oppgave.$oppgaveId.steg.$stegId";
import type { IProps } from "~/views/behandling-steg/BehandlingSteg";
import styles from "./BehandlingStegFattVedtak.module.css";

export function BehandlingStegFattVedtak(props: IProps) {
  const { steg, readonly } = props;
  const navigation = useNavigation();
  const isSubmitting = Boolean(navigation.state === "submitting");
  const { oppgave } = useTypedRouteLoaderData("routes/saksbehandling.oppgave.$oppgaveId");

  const forslagTilVedtakSteg = oppgave?.steg.find((steg) => steg.id === "Forslag til vedtak");
  const fattVedtakMetadata: Metadata = {
    svartype: steg.svartype,
    id: steg.id,
  };

  if (!forslagTilVedtakSteg) {
    return <div>Klarte ikke å hente "Forslag til vedtak" steg</div>;
  }

  const forslagTilVedtakStegMetadata: Metadata = {
    svartype: forslagTilVedtakSteg.svartype,
    id: forslagTilVedtakSteg.id,
    stegId: forslagTilVedtakSteg.uuid,
  };

  return (
    <>
      <Heading size="medium">Vurder saksbehandling</Heading>
      <div className={styles.buttonContainer}>
        <Form method="post">
          <input name="metadata" type="hidden" value={JSON.stringify(fattVedtakMetadata)} />
          <input name={steg.uuid} type="hidden" value={"true"} />
          <input name={"begrunnelse"} type="hidden" value={""} />

          <Button type="submit" disabled={readonly}>
            {isSubmitting ? "Lagrer..." : "Godkjenn vedtak"}
          </Button>
        </Form>

        <Form method="post">
          <input
            name="metadata"
            type="hidden"
            value={JSON.stringify(forslagTilVedtakStegMetadata)}
          />
          <input name={forslagTilVedtakSteg?.uuid} type="hidden" value={"false"} />
          <input name={"begrunnelse"} type="hidden" value={""} />

          <Button type="submit" variant="secondary" disabled={readonly}>
            {isSubmitting ? "Lagrer..." : "Send tilbake til kontroll"}
          </Button>
        </Form>
      </div>

      <BehandlingStegLagretAv steg={steg} />
    </>
  );
}
