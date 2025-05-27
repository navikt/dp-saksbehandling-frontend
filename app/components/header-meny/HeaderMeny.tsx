import classnames from "classnames";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

import { HippHippHurra } from "~/components/17-mai/HippHippHurra";
import { Ghosts } from "~/components/halloween/Ghosts";
import { HeaderSaksbehandlerMeny } from "~/components/header-meny/HeaderSaksbehandlerMeny";
import { Adventslys } from "~/components/jul/Adventslys";
import { Valentines } from "~/components/valentines/Valentines";
import { useAwaitPromise } from "~/hooks/useResolvedPromise";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import type { ISaksbehandler } from "~/models/microsoft.server";
import { alleOppgaverDefaultParams } from "~/routes/alle-oppgaver";
import { mineOppgaverDefaultParams } from "~/routes/mine-oppgaver";
import { convertToQueryParamString } from "~/utils/url.utils";

import { PersonSok } from "../person-sok/PersonSok";
import styles from "./HeaderMeny.module.css";

interface IProps {
  saksbehandler: ISaksbehandler;
}

export function HeaderMeny({ saksbehandler }: IProps) {
  const { featureFlags, oppgaverJegHarTilBehandlingPromise } = useTypedRouteLoaderData("root");
  const { response } = useAwaitPromise(oppgaverJegHarTilBehandlingPromise);
  const { aktivtOppgaveSok } = useSaksbehandler();
  const [antallOppgaverJegHarTilBehandling, setAntallOppgaverJegHarTilBehandling] =
    useState<number>(0);

  useEffect(() => {
    if (response) {
      setAntallOppgaverJegHarTilBehandling(response.totaltAntallOppgaver);
    }
  }, [response]);

  return (
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        <NavLink
          to={`/?${aktivtOppgaveSok}`}
          className={({ isActive }) =>
            classnames(styles.linkItem, { [styles.linkItemActive]: isActive })
          }
        >
          Oppgaver til behandling
        </NavLink>

        <NavLink
          to={`/mine-oppgaver?${convertToQueryParamString(mineOppgaverDefaultParams)}`}
          className={({ isActive }) =>
            classnames(styles.linkItem, { [styles.linkItemActive]: isActive })
          }
        >
          Mine oppgaver
          {antallOppgaverJegHarTilBehandling > 0 && (
            <span className={styles.antallOppgaverTilBehandling}>
              {antallOppgaverJegHarTilBehandling}
            </span>
          )}
        </NavLink>

        <NavLink
          to={`/alle-oppgaver?${convertToQueryParamString(alleOppgaverDefaultParams)}`}
          className={({ isActive }) =>
            classnames(styles.linkItem, { [styles.linkItemActive]: isActive })
          }
        >
          Alle oppgaver
        </NavLink>
      </div>

      {featureFlags.halloween && <Ghosts />}
      {featureFlags.jul && <Adventslys />}
      {featureFlags.valentines && <Valentines />}
      {featureFlags.hippHippHurra && <HippHippHurra />}

      <div className={styles.searchAndSaksbehandlerContainer}>
        <PersonSok />
        <HeaderSaksbehandlerMeny saksbehandler={saksbehandler} />
      </div>
    </div>
  );
}
