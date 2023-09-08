import { BodyShort, Search } from "@navikt/ds-react";
import { Link, useRouteLoaderData } from "@remix-run/react";
import { useState } from "react";
import { type IOppgave } from "~/models/oppgave.server";
import { type IRootLoader } from "~/root";
import styles from "./PersokSok.module.css";

export function PersonSok() {
  const { oppgaver } = useRouteLoaderData("root") as IRootLoader;
  const [sokResultat, setSokResultat] = useState<IOppgave[]>([]);
  const [visSokResultat, setVisSokResultat] = useState(false);
  const [sokInput, setSokInput] = useState("");

  function sok(fnr: string) {
    setSokInput(fnr);

    if (fnr.length === 11) {
      setSokResultat(oppgaver.filter((oppgave) => oppgave.person === fnr));
      setVisSokResultat(true);
    } else {
      setSokResultat([]);
      setVisSokResultat(false);
    }
  }

  return (
    <div className={styles.sokeKontainer}>
      <Search
        className={styles.sokefelt}
        hideLabel={false}
        size="small"
        label=""
        variant="secondary"
        onChange={(fnr: string) => sok(fnr)}
        value={sokInput}
        clearButton
      />

      {visSokResultat && (
        <div className={styles.resultatKontainer}>
          {sokResultat.length > 0 && (
            <ul className={styles.resultatListe}>
              {sokResultat.map((oppgave) => {
                return (
                  <Link to="" className={styles.resultat} key={oppgave.uuid}>
                    {oppgave.person} | {oppgave.tilstand} | {oppgave.opprettet}
                  </Link>
                );
              })}
            </ul>
          )}
          {sokResultat.length === 0 && <BodyShort>Søket ga ingen treff</BodyShort>}
        </div>
      )}
    </div>
  );
}
