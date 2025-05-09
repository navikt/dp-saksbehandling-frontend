import { components } from "../../../openapi/behandling-typer";
import { Avklaring } from "./Avklaring";

interface IProps {
  avklaringer: components["schemas"]["Avklaring"][];
  behandlingId: string;
  readOnly?: boolean;
}

export function Avklaringer(props: IProps) {
  const synligeAvklaringer = props.avklaringer.filter(
    (avklaring) => !(avklaring.status === "Avklart" && avklaring.maskinelt),
  );

  return (
    <>
      {synligeAvklaringer.map((avklaring) => (
        <Avklaring
          key={avklaring.id}
          avklaring={avklaring}
          behandlingId={props.behandlingId}
          readonly={props.readOnly}
        />
      ))}
    </>
  );
}
