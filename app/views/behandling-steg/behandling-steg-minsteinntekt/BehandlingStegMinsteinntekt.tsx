import { type IProps } from "~/views/behandling-steg/BehandlingSteg";

export function BehandlingStegMinsteinntekt(props: IProps) {
  const { steg } = props;

  return <div>Spesialbehandling for {steg.id}</div>;
}
