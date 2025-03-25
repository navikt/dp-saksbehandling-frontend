import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import { components } from "../../../openapi/behandling-typer";
import { Avklaring } from "./Avklaring";

interface IProps {
  avklaringer: components["schemas"]["Avklaring"][];
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
          readonly={oppgave.tilstand !== "UNDER_BEHANDLING"}
        />
      ))}
    </>
  );
}
