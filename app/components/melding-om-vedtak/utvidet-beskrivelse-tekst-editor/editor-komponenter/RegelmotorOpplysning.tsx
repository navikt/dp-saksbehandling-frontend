import { QuestionmarkDiamondIcon } from "@navikt/aksel-icons";
import { Tooltip } from "@navikt/ds-react";

import { useBehandling } from "~/hooks/useBehandling";

import { BrevPeriodeVerdiSelect } from "./PeriodeVerdiSelect";

export function RegelmotorOpplysning({
  opplysningTypeId,
  navn,
  uuid,
}: {
  opplysningTypeId?: string;
  navn: string;
  uuid: string;
}) {
  const { behandling } = useBehandling();
  const opplysning = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === opplysningTypeId,
  );

  if (!opplysning) {
    return (
      <Tooltip content={`Finner ikke opplysning: ${navn} i denne behandlingen`}>
        <QuestionmarkDiamondIcon title={`Finner ikke opplysning: ${navn} i denne behandlingen`} />
      </Tooltip>
    );
  }
  return <BrevPeriodeVerdiSelect opplysning={opplysning} uuid={uuid} />;
}
