import { Switch } from "@navikt/ds-react";

import { useToggleSearchParam } from "~/hooks/useToggleSearchParam";

const KATEGORI_PARAM = "PAA_VENT";
const TIDLIGERE_UTSATT_VERDI = "Tidligere utsatt";

/**
 * Snarvei-filter for oppgaver som er klare til behandling/kontroll, men som har vært på vent.
 * Gjenbruker samme emneknagg-mekanisme som EmneknaggFilter (kategori "PAA_VENT",
 * emneknaggverdi "Tidligere utsatt" settes automatisk av backend når en oppgave forlater På vent).
 */
export function OppgaveFilterTidligereUtsatt() {
  const { searchParams, toggleSearchParam } = useToggleSearchParam();
  const aktiv = searchParams.getAll(KATEGORI_PARAM).includes(TIDLIGERE_UTSATT_VERDI);

  return (
    <Switch
      size="small"
      checked={aktiv}
      onChange={() => toggleSearchParam(KATEGORI_PARAM, TIDLIGERE_UTSATT_VERDI)}
    >
      Tidligere utsatt
    </Switch>
  );
}
