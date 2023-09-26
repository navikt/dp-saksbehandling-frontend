import { type IBehandlingSteg } from "~/models/oppgave.server";
import { BehandlingStegGenerell } from "./BehandlingStegGenerell";
import { BehandlingStegPeriode } from "./BehandlingStegPeriode";
import { BehandlingStegRettighetstype } from "./BehandlingStegRettighetstype";
import { BehandlingStegForslagTilVedtak } from "~/views/behandling-steg/behandling-steg-forslag-til-vedtak/BehandlingStegForslagTilVedtak";
import { BehandlingsStegFattVedtak } from "~/views/behandling-steg/behandlings-steg-fatt-vedtak/BehandlingsStegFattVedtak";

export interface IProps {
  steg: IBehandlingSteg;
  readonly: boolean;
}

export function BehandlingSteg(props: IProps) {
  switch (props.steg.id) {
    case "Periode":
      return <BehandlingStegPeriode {...props} />;

    case "Rettighetstype":
      return <BehandlingStegRettighetstype {...props} />;

    case "Forslag til vedtak":
      return <BehandlingStegForslagTilVedtak {...props} />;

    case "Fatt vedtak":
      return <BehandlingsStegFattVedtak {...props} />;

    default:
      return <BehandlingStegGenerell {...props} />;
  }
}
