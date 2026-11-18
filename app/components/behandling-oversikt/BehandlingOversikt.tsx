import { SackKronerIcon, SealCheckmarkIcon } from "@navikt/aksel-icons";
import { Box, Tabs } from "@navikt/ds-react";

import { useBehandling } from "~/hooks/useBehandling";

import { LopendeRettTidslinje } from "../lopende-rett-tidslinje/LopendeRettTidslinje";
import {
  hentBetalingsopplysning,
  RevurderingResultat,
} from "../revurdering-resultat/RevurderingResultat";

export function BehandlingOversikt() {
  const { behandling } = useBehandling();
  return (
    <Box as="section" aria-label="Behandlingsoversikt" className="card px-4 py-2">
      {hentBetalingsopplysning(behandling) ? (
        <Tabs defaultValue="lopende-rett" size="small">
          <Tabs.List>
            <Tabs.Tab icon={<SealCheckmarkIcon />} value="lopende-rett" label="Løpende rett" />
            <Tabs.Tab
              icon={<SackKronerIcon />}
              value="utbetalingsoversikt"
              label="Utbetalingsoversikt"
            />
          </Tabs.List>
          <Tabs.Panel value="lopende-rett">
            <LopendeRettTidslinje />
          </Tabs.Panel>
          <Tabs.Panel value="utbetalingsoversikt">
            <RevurderingResultat />
          </Tabs.Panel>
        </Tabs>
      ) : (
        <LopendeRettTidslinje />
      )}
    </Box>
  );
}
