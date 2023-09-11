import { FaceFrownIcon } from "@navikt/aksel-icons";
import { BodyShort, Search } from "@navikt/ds-react";
import { useLocation, useRouteLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { type IOppgave } from "~/models/oppgave.server";
import { type IRootLoader } from "~/root";
import { RemixLink } from "../RemixLink";
import styles from "./PersokSok.module.css";

export function PersonSok() {
  const location = useLocation();
  const { oppgaver } = useRouteLoaderData("root") as IRootLoader;
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

  function nullstillSok() {
    setSokInput("");
    setVisSokResultat(false);
    setSokResultat([]);
  }

  function onChange(fnr: string) {
    if (fnr.length < 11) {
      setVisSokResultat(false);
    }

    setSokInput(fnr);
  }

  return (
    <div className={styles.sokeKontainer}>
      <Search
        className={styles.sokefelt}
        hideLabel={false}
        size="small"
        label=""
        variant="secondary"
        onChange={(fnr: string) => onChange(fnr)}
        onSearchClick={(fnr: string) => sokEnPerson(fnr)}
        onClear={() => nullstillSok()}
        value={sokInput}
        clearButton
      />

      {visSokResultat && (
        <div className={styles.resultatKontainer}>
          {sokResultat.length > 0 && (
            <ul className={styles.resultatListe}>
              {sokResultat.map(({ person, tilstand, uuid }) => {
                return (
                  <div className={styles.resultat} key={uuid}>
                    <p>
                      {person}
                      {" - "}
                      <span>
                        {tilstand === "FerdigBehandlet"
                          ? "Ferdig behandlet"
                          : "Klar til behandling"}
                      </span>
                    </p>
                    <RemixLink asButton to={`/saksbehandling/person/${uuid}/oversikt`}>
                      Se oppgaven
                    </RemixLink>
                  </div>
                );
              })}
            </ul>
          )}
          {sokResultat.length === 0 && (
            <BodyShort className={styles.ingenTreff}>
              Søket ga ingen treff <FaceFrownIcon title="a11y-title" fontSize="1.5rem" />
            </BodyShort>
          )}
        </div>
      )}
    </div>
  );
}
