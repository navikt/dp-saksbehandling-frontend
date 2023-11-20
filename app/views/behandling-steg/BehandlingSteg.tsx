import { type IBehandlingSteg } from "~/models/oppgave.server";
import { BehandlingStegForslagTilVedtak } from "~/views/behandling-steg/behandling-steg-forslag-til-vedtak/BehandlingStegForslagTilVedtak";
import { BehandlingStegFattVedtak } from "~/views/behandling-steg/behandling-steg-fatt-vedtak/BehandlingStegFattVedtak";
import { BehandlingStegGenerell } from "./BehandlingStegGenerell";
import { BehandlingStegPeriode } from "./BehandlingStegPeriode";
import { BehandlingStegRettighetstype } from "./BehandlingStegRettighetstype";
import { BehandlingStegMinsteinntekt } from "~/views/behandling-steg/behandling-steg-minsteinntekt/BehandlingStegMinsteinntekt";

export interface IProps {
  steg: IBehandlingSteg;
  readonly: boolean;
}

export function BehandlingSteg(props: IProps) {
  const { steg } = props;

  switch (steg.id) {
    case "Periode":
      return <BehandlingStegPeriode {...props} />;

    case "Rettighetstype":
      return <BehandlingStegRettighetstype {...props} />;

    case "Forslag til vedtak":
      return <BehandlingStegForslagTilVedtak {...props} />;

    case "Fatt vedtak":
      return <BehandlingStegFattVedtak {...props} />;

    case "Oppfyller kravene til dagpenger":
      return <BehandlingStegMinsteinntekt {...props} />;

    default:
      return <BehandlingStegGenerell {...props} />;
  }
}
