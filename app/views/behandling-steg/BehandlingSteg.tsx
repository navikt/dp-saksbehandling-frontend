import { type IBehandlingSteg } from "~/models/oppgave.server";
import { BehandlingStegGenerell } from "./BehandlingStegGenerell";
import { BehandlingStegPeriode } from "./BehandlingStegPeriode";
import { BehandlingStegRettighetstype } from "./BehandlingStegRettighetstype";

export interface IProps {
  steg: IBehandlingSteg;
  readonly: boolean;
  isSubmitting: boolean;
}

export function BehandlingSteg(props: IProps) {
  const { steg } = props;
  switch (steg.id) {
    case "Periode":
      return <BehandlingStegPeriode {...props} />;
    case "Rettighetstype":
      return <BehandlingStegRettighetstype {...props} />;
    default:
      return <BehandlingStegGenerell {...props} />;
  }
}
