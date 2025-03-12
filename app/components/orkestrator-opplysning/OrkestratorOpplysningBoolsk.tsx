import { Radio, RadioGroup, Stack } from "@navikt/ds-react";
import { FormScope, useField } from "@rvf/remix";
import { IOrkestratorBarnOpplysning } from "~/models/orkestrator-opplysning.server";
import { hentOrkestratorBarnOpplysningLabel } from "~/utils/orkestrator-opplysninger.utils";

interface IProps {
  opplysning: IOrkestratorBarnOpplysning;
  formScope: FormScope<string>;
}

export function OrkestratorOpplysningBoolsk({ opplysning, formScope }: IProps) {
  const field = useField(formScope);

  return (
    <RadioGroup
      {...field.getInputProps()}
      name={opplysning.id}
      legend={hentOrkestratorBarnOpplysningLabel(opplysning.id)}
      size="small"
      value={field.value() === "Ja" ? "true" : "false"}
      error={field.error()}
      readOnly={opplysning.kilde === "register"}
    >
      <Stack gap="0 6" direction={{ xs: "column", sm: "row" }} wrap={false}>
        <Radio value="true">Ja</Radio>
        <Radio value="false">Nei</Radio>
      </Stack>
    </RadioGroup>
  );
}
