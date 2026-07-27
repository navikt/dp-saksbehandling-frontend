import { Detail, Switch, TextField } from "@navikt/ds-react";
import { useEffect, useState } from "react";

import { useToggleSearchParam } from "~/hooks/useToggleSearchParam";

const UTEN_SAKSBEHANDLER_PARAM = "utenSaksbehandler";
const SAKSBEHANDLER_IDENT_PARAM = "saksbehandlerIdent";
const MINE_OPPGAVER_PARAM = "mineOppgaver";
const DEBOUNCE_MS = 300;

export function OppgaveFilterSaksbehandler() {
  const { searchParams, setSearchParams } = useToggleSearchParam();
  const identFraUrl = searchParams.get(SAKSBEHANDLER_IDENT_PARAM) ?? "";
  const utenSaksbehandler = searchParams.get(UTEN_SAKSBEHANDLER_PARAM) === "true";

  const [ident, setIdent] = useState(identFraUrl);

  // Hold lokal state i synk dersom parameteren endres utenfra (f.eks. "nullstill filter")
  useEffect(() => {
    setIdent(identFraUrl);
  }, [identFraUrl]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (ident === identFraUrl) {
        return;
      }

      if (ident.trim()) {
        searchParams.set(SAKSBEHANDLER_IDENT_PARAM, ident.trim());
        searchParams.delete(UTEN_SAKSBEHANDLER_PARAM);
        // Eksplisitt ident-søk skal overstyre "Vis kun mine oppgaver" — de er gjensidig utelukkende
        searchParams.delete(MINE_OPPGAVER_PARAM);
      } else {
        searchParams.delete(SAKSBEHANDLER_IDENT_PARAM);
      }
      setSearchParams(searchParams, { replace: true });
    }, DEBOUNCE_MS);

    return () => clearTimeout(timeout);
  }, [ident]);

  function handleUtenSaksbehandlerChange(checked: boolean) {
    if (checked) {
      searchParams.set(UTEN_SAKSBEHANDLER_PARAM, "true");
      searchParams.delete(SAKSBEHANDLER_IDENT_PARAM);
      searchParams.delete(MINE_OPPGAVER_PARAM);
      setIdent("");
    } else {
      searchParams.delete(UTEN_SAKSBEHANDLER_PARAM);
    }
    setSearchParams(searchParams);
  }

  return (
    <div>
      <Detail textColor="subtle">Saksbehandler</Detail>
      <TextField
        label="Saksbehandler"
        hideLabel
        className="mt-2"
        size="small"
        placeholder="Søk på ident"
        value={ident}
        disabled={utenSaksbehandler}
        onChange={(event) => setIdent(event.target.value)}
      />
      <Switch
        size="small"
        checked={utenSaksbehandler}
        onChange={(event) => handleUtenSaksbehandlerChange(event.target.checked)}
      >
        Uten saksbehandler
      </Switch>
    </div>
  );
}
