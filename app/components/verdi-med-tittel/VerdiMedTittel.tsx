import { BodyShort } from "@navikt/ds-react";
import classNames from "classnames";

export function VerdiMedTittel(props: { label: string; verdi: string; visBorder?: boolean }) {
  return (
    <div
      className={classNames(`flex flex-col gap-1`, {
        "border-b-1 border-(--ax-border-subtle) pb-2": props.visBorder,
      })}
    >
      <BodyShort size={"small"} weight={"semibold"}>
        {props.label}
      </BodyShort>
      <BodyShort size={"small"}>{props.verdi}</BodyShort>
    </div>
  );
}
