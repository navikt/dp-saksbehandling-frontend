import { BodyShort } from "@navikt/ds-react";
import classNames from "classnames";
import { ReactElement } from "react";

interface IProps {
  label: string;
  verdi: string | ReactElement;
  visBorder?: boolean;
}

export function VerdiMedTittel(props: IProps) {
  return (
    <div
      className={classNames(`flex flex-col gap-1`, {
        "border-b border-(--ax-border-neutral-subtle) pb-2": props.visBorder,
      })}
    >
      <BodyShort size={"small"} weight={"semibold"}>
        {props.label}
      </BodyShort>
      {typeof props.verdi === "string" && <BodyShort size={"small"}>{props.verdi}</BodyShort>}
      {typeof props.verdi !== "string" && props.verdi}
    </div>
  );
}
