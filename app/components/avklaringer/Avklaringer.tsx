import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { IAvklaring } from "~/models/behandling.server";

import { Avklaring } from "./Avklaring";

interface IProps {
  avklaringer: IAvklaring[];
  readonly?: boolean;
  defaultOpen?: boolean;
}

export function Avklaringer(props: IProps) {
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const synligeAvklaringer = props.avklaringer.filter(
    (avklaring) => !(avklaring.status === "Avklart" && avklaring.maskinelt),
  );

  return (
    <>
      {synligeAvklaringer.map((avklaring) => (
        <Avklaring
          key={avklaring.id}
          avklaring={avklaring}
          defaultOpen={props.defaultOpen}
          readonly={oppgave.tilstand !== "UNDER_BEHANDLING" || props.readonly}
        />
      ))}
    </>
  );
}
