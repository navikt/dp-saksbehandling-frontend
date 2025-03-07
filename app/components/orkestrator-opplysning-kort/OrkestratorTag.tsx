import { Tag } from "@navikt/ds-react";

interface IProps {
  fraRegister?: boolean;
}

export function OrkestratorTag({ fraRegister }: IProps) {
  if (fraRegister === undefined) {
    return null;
  }

  return (
    <Tag variant={fraRegister ? "alt1" : "warning"} size="small">
      {fraRegister ? "Register" : "Søknad"}
    </Tag>
  );
}
