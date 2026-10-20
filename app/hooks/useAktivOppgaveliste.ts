import {
  hentOppgavelisteSti,
  useAktivtOppgaveSok,
  useAktivtOppgaveSokKilde,
} from "~/hooks/useAktivtOppgaveSok";
import { feilutbetalingDefaultParams } from "~/routes/feilutbetaling";
import { kontrollOppgaverDefaultParams } from "~/routes/kontroll-oppgaver";
import { convertToQueryParamString } from "~/utils/url.utils";

export function useAktivOppgavelisteSok() {
  const aktivtOppgaveSok = useAktivtOppgaveSok();
  const kilde = useAktivtOppgaveSokKilde();

  switch (kilde) {
    case "kontroll":
      return convertToQueryParamString(kontrollOppgaverDefaultParams);
    case "feilutbetaling":
      return convertToQueryParamString(feilutbetalingDefaultParams);
    default:
      return aktivtOppgaveSok;
  }
}

export function useAktivOppgavelisteUrl() {
  const kilde = useAktivtOppgaveSokKilde();
  const sok = useAktivOppgavelisteSok();
  return `${hentOppgavelisteSti(kilde)}?${sok}`;
}
