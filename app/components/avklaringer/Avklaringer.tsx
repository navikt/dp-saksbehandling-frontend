import { IAvklaring } from "~/models/behandling.server";

import { Avklaring } from "./Avklaring";

interface IProps {
  avklaringer: IAvklaring[];
}

export function Avklaringer(props: IProps) {
  return (
    <>
      {props.avklaringer.map((avklaring) => (
        <Avklaring key={avklaring.id} avklaring={avklaring} />
      ))}
    </>
  );
}
