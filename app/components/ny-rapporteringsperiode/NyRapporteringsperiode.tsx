import { PlusIcon } from "@navikt/aksel-icons";
import { Button } from "@navikt/ds-react";
import { NyRapporteringsperiodeDato } from "./NyRapporteringsperiodeDato";
import { ValidatedForm } from "remix-validated-form";
import { nyRapporteringsperiodeValidator } from "~/utils/validering.util";

export function NyRapporteringsperiode() {
  return (
    <ValidatedForm
      validator={nyRapporteringsperiodeValidator}
      method="post"
      className="my-6"
      name="ny-periode"
    >
      <input type="hidden" name="ny-periode" value="true" />
      <NyRapporteringsperiodeDato formName="ny-periode" name="fraOgMed" label="Fra dato" />
      <Button type="submit" name="submit" value="ny-periode" icon={<PlusIcon />}>
        Lag ny rapporteringsperiode
      </Button>
    </ValidatedForm>
  );
}
