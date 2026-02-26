import { Button } from "@navikt/ds-react";
import { useState } from "react";

import SaksbehandlingsregelRedigering from "~/components/saksbehandlingsregler/SaksbehandlingsregelRedigering";
import { useBehandling } from "~/hooks/useBehandling";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";

export default function Saksbehandlingsregler() {
  const { regelsettId } = useTypeSafeParams();
  const [svart, setSvart] = useState(false);

  const { behandling } = useBehandling();

  const regelsett = behandling.fastsettelser.find((sett) => sett.id === regelsettId);

  if (!regelsett) {
    return <></>;
  }

  const opplysninger = behandling.opplysninger.filter(
    (opplysning) =>
      regelsett.opplysninger.includes(opplysning.opplysningTypeId) && opplysning.synlig,
  );

  return (
    <div className="card flex flex-col gap-8 p-8">
      {opplysninger
        .filter((opplysning) => opplysning.redigerbar && opplysning.synlig)
        .map((opplysning) => (
          <SaksbehandlingsregelRedigering
            key={opplysning.opplysningTypeId}
            opplysning={opplysning}
            setSvart={setSvart}
          />
        ))}
      <div>
        <Button variant="primary" size="small" disabled={!svart}>
          Gå videre
        </Button>
      </div>
    </div>
  );
}
