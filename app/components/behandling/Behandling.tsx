import { useEffect, useState } from "react";

import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import { Regelsett } from "~/components/regelsett/Regelsett";
import { RegelsettMeny } from "~/components/regelsett-meny/RegelsettMeny";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { IRegelsett } from "~/models/behandling.server";

import styles from "./Behandling.module.css";

interface IProps {
  readonly?: boolean;
}

export function Behandling(props: IProps) {
  const { behandling } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const [aktivtRegelsett, setAktivtRegelsett] = useState<IRegelsett>(behandling.vilkår[0]);

  useEffect(() => {
    if (behandling) {
      const alleRegelsett = [...behandling.vilkår, ...behandling.fastsettelser];
      const nåværendeRegelsett = alleRegelsett.find(
        (regelsett) => regelsett.navn === aktivtRegelsett.navn,
      );

      if (nåværendeRegelsett) {
        setAktivtRegelsett(nåværendeRegelsett);
      } else {
        setAktivtRegelsett(behandling.vilkår[0]);
      }
    }
  }, [behandling]);

  return (
    <>
      <Avklaringer avklaringer={behandling.avklaringer} />
      <div className={styles.container}>
        <RegelsettMeny aktivtRegelsett={aktivtRegelsett} setAktivtRegelsett={setAktivtRegelsett} />
        <Regelsett aktivtRegelsett={aktivtRegelsett} readonly={props.readonly} />
      </div>
    </>
  );
}
