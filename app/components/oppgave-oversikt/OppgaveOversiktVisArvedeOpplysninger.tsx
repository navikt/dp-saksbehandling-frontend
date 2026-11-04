import { Switch } from "@navikt/ds-react";

import { useBehandling } from "~/hooks/useBehandling";

export function OppgaveOversiktVisArvedeOpplysninger() {
  const { visArvedeOpplysninger, setVisArvedeOpplysninger } = useBehandling();
  return (
    <div className={"card px-4 py-2"}>
      <Switch
        size={"small"}
        className="arvede-opplysninger-switch"
        checked={visArvedeOpplysninger}
        onChange={() => {
          setVisArvedeOpplysninger(!visArvedeOpplysninger);
          window.umami.track(
            !visArvedeOpplysninger ? "Vis arvede opplysninger" : "Skjul arvede opplysninger",
          );
        }}
      >
        Vis arvede opplysninger og vurderinger
      </Switch>
    </div>
  );
}
