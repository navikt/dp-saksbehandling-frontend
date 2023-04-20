import { TextField } from "@navikt/ds-react";
import type { Dispatch, SetStateAction } from "react";
import type { IBehandlingSteg } from "~/models/behandling.server";
import { BehandlingStegInputBoolean } from "./BehandlingStegInputBoolean";
import { BehandlingStegInputDato } from "./BehandlingStegInputDato";
import { BehandlingStegInputInt } from "./BehandlingStegInputInt";

interface IProps {
  steg: IBehandlingSteg;
  svarVerdi: string;
  setSvarVerdi: Dispatch<SetStateAction<string>>;
}

export function BehandlingStegInput(props: IProps) {
  const { steg, svarVerdi, setSvarVerdi } = props;

  switch (steg.svartype) {
    case "Int":
      return (
        <BehandlingStegInputInt
          uuid={steg.uuid}
          legend="Fyll ut"
          setSvarVerdi={setSvarVerdi}
          verdi={svarVerdi}
        />
      );

    case "Boolean":
      return (
        <BehandlingStegInputBoolean
          uuid={steg.uuid}
          legend={"Oppfylt"}
          setSvarVerdi={setSvarVerdi}
          verdi={svarVerdi}
        />
      );

    case "LocalDate":
      return <BehandlingStegInputDato steg={steg} onChange={setSvarVerdi} />;

    case "String":
      return (
        <TextField
          name={steg.uuid}
          label="Tekst:"
          defaultValue={svarVerdi}
          onChange={(event) => setSvarVerdi(event.currentTarget.value)}
        />
      );
    default:
      throw new Error(`Ukjent svartype ${steg.svartype}`);
  }
}
