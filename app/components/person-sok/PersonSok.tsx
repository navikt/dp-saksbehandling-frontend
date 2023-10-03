import { BodyShort, Search } from "@navikt/ds-react";
import { useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";
import { type IOppgave } from "~/models/oppgave.server";
import { RemixLink } from "../RemixLink";
import styles from "./PersokSok.module.css";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export function PersonSok() {
  const location = useLocation();
  const { oppgaver } = useTypedRouteLoaderData("root");
  const [sokResultat, setSokResultat] = useState<IOppgave[]>([]);
  const [visSokResultat, setVisSokResultat] = useState(false);
  const [sokInput, setSokInput] = useState("");

  useEffect(() => {
    nullstillSok();
  }, [location]);

  function sokEnPerson(fnr: string) {
    if (sokInput.length === 11) {
      setSokResultat(oppgaver.filter((oppgave) => oppgave.person === fnr));
      setVisSokResultat(true);
    }
  }

  function onChange(fnr: string) {
    if (fnr.length !== 11) {
      setSokResultat([]);
    }

    setSokInput(fnr);
  }

  function nullstillSok() {
    setSokInput("");
    setVisSokResultat(false);
    setSokResultat([]);
  }

  return (
    <div className={styles.sokeContainer}>
      <Search
        className={styles.sokefelt}
        hideLabel={false}
        value={sokInput}
        size="small"
        label=""
        variant="secondary"
        onChange={(fnr: string) => onChange(fnr)}
        onSearchClick={(fnr: string) => sokEnPerson(fnr)}
        onClear={() => nullstillSok()}
        clearButton
      />

      {visSokResultat && (
        <div className={styles.resultatContainer}>
          {sokResultat.length > 0 && (
            <ul className={styles.resultatListe}>
              {sokResultat.map(({ person, uuid }) => (
                <div className={styles.resultat} key={uuid}>
                  <BodyShort>{person}</BodyShort>
                  <RemixLink as="Button" to={`/saksbehandling/person/${uuid}/oversikt`}>
                    Gå til person
                  </RemixLink>
                </div>
              ))}
            </ul>
          )}
          {sokResultat.length === 0 && (
            <BodyShort className={styles.ingenTreff}>Søket ga ingen treff</BodyShort>
          )}
        </div>
      )}
    </div>
  );
}
