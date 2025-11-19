import { BodyShort } from "@navikt/ds-react";
import classNames from "classnames";
import { ReactNode } from "react";

export function VerdiMedTittel(props: {
  label: string;
  verdi: string | ReactNode;
  visBorder?: boolean;
}) {
  return (
    <div
      className={classNames(`flex flex-col gap-1`, {
        "border-b border-(--ax-border-neutral-subtle) pb-2": props.visBorder,
      })}
    >
      <BodyShort size={"small"} weight={"semibold"}>
        {props.label}
      </BodyShort>
      <BodyShort size={"small"}>{props.verdi}</BodyShort>
    </div>
  );
}
