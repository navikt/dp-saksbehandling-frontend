import { NavLink } from "@remix-run/react";
import classnames from "classnames";

import { Ghosts } from "~/components/halloween/Ghosts";
import { HeaderUtloggingMeny } from "~/components/header-meny/HeaderUtloggingMeny";
import { Adventslys } from "~/components/jul/Adventslys";
import { Valentines } from "~/components/valentines/Valentines";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import type { ISaksbehandler } from "~/models/microsoft.server";
import { oppgaverTilBehandlingDefaultParams } from "~/routes/_index";
import { alleOppgaverDefaultParams } from "~/routes/alle-oppgaver";
import { mineOppgaverDefaultParams } from "~/routes/mine-oppgaver";
import { convertToQueryParamString } from "~/utils/url.utils";

import { PersonSok } from "../person-sok/PersonSok";
import styles from "./HeaderMeny.module.css";

interface IProps {
  saksbehandler: ISaksbehandler;
  antallOppgaverJegHarTilBehandling: number;
}

export function HeaderMeny({ saksbehandler, antallOppgaverJegHarTilBehandling }: IProps) {
  const { featureFlags } = useTypedRouteLoaderData("root");
  return (
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        <NavLink
          to={`/?${convertToQueryParamString(oppgaverTilBehandlingDefaultParams)}`}
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

      <div className={styles.searchAndSaksbehandlerContainer}>
        <PersonSok />
        <HeaderUtloggingMeny saksbehandler={saksbehandler} />
      </div>
    </div>
  );
}
