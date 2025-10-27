import { Heading } from "@navikt/ds-react";

import { components } from "../../../../openapi/behandling-typer";
import { Avklaring } from "./Avklaring";

interface IProps {
  avklaringer: components["schemas"]["Avklaring"][];
  behandlingId: string;
}

export function Avklaringer(props: IProps) {
  return (
    <div className={"card p-4"}>
      <Heading size={"small"}> Hva som må sjekkes</Heading>

      <div className={"mt-2 flex flex-col gap-2"}>
        {props.avklaringer.map((avklaring) => (
          <Avklaring avklaring={avklaring} behandlingId={props.behandlingId} key={avklaring.id} />
        ))}
      </div>
    </div>
  );
}
