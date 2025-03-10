import { Radio, RadioGroup, Stack } from "@navikt/ds-react";
import { IOrkestratorBarnOpplysning } from "~/models/orkestrator-opplysning.server";
import { hentOrkestratorOpplysningVisningTekst } from "~/utils/orkestrator-opplysninger.utils";

interface IProps {
  opplysning: IOrkestratorBarnOpplysning;
}

export function OrkestratorOpplysningBoolsk({ opplysning }: IProps) {
  return (
    <RadioGroup
      legend={hentOrkestratorOpplysningVisningTekst(opplysning.id)}
      onChange={() => {}}
      value={Boolean(opplysning.verdi)}
      size="small"
      readOnly={opplysning.kilde === "register"}
    >
      <Stack gap="0 6" direction={{ xs: "column", sm: "row" }} wrap={false}>
        <Radio value={true}>Ja</Radio>
        <Radio value={false}>Nei</Radio>
      </Stack>
    </RadioGroup>
  );
}
