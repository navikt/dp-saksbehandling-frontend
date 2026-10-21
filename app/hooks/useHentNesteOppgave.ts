import { useEffect, useRef, useState } from "react";
import { useNavigation, useSubmit } from "react-router";

import type { OppgavelisteKilde } from "~/hooks/useAktivtOppgaveSok";

export function useHentNesteOppgave(aktivtOppgaveSok: string, kilde?: OppgavelisteKilde) {
  const submit = useSubmit();
  const navigation = useNavigation();
  const navigasjonPagar = navigation.formData?.get("_action") === "hent-neste-oppgave";
  const [sendt, setSendt] = useState(false);
  const sendtRef = useRef(false);
  const harStartetNavigasjon = useRef(false);

  useEffect(() => {
    if (navigasjonPagar) {
      harStartetNavigasjon.current = true;
    } else if (harStartetNavigasjon.current) {
      harStartetNavigasjon.current = false;
      sendtRef.current = false;
      setSendt(false);
    }
  }, [navigasjonPagar]);

  function hentNesteOppgave() {
    if (sendtRef.current) return;
    sendtRef.current = true;
    setSendt(true);
    submit(
      { _action: "hent-neste-oppgave", aktivtOppgaveSok, ...(kilde && { kilde }) },
      { method: "post" },
    );
  }

  return { hentNesteOppgave, henterNesteOppgave: sendt || navigasjonPagar };
}
