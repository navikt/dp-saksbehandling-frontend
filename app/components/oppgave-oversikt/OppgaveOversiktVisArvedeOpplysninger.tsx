import { Switch } from "@navikt/ds-react";

import { useBehandling } from "~/hooks/useBehandling";

export function OppgaveOversiktVisArvedeOpplysninger() {
  const { visArvedeOpplysninger, setVisArvedeOpplysninger } = useBehandling();
  return (
    <div className={"card p-4"}>
      <Switch
        size={"small"}
        checked={visArvedeOpplysninger}
        onChange={() => setVisArvedeOpplysninger(!visArvedeOpplysninger)}
      >
        Vis arvede opplysninger og vurderinger
      </Switch>
    </div>
  );
}
