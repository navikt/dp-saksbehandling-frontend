import { MoonIcon, SunIcon } from "@navikt/aksel-icons";
import { Button, Loader } from "@navikt/ds-react";
import classnames from "classnames";
import { NavLink } from "react-router";

import { useOppgaverQuery } from "~/api/oppgave-hooks";
import { HeaderSaksbehandlerMeny } from "~/components/header-meny/HeaderSaksbehandlerMeny";
import { HippHippHurra } from "~/components/høytid-og-morro/17-mai/HippHippHurra";
import { Ghosts } from "~/components/høytid-og-morro/halloween/Ghosts";
import { Adventslys } from "~/components/høytid-og-morro/jul/Adventslys";
import { Paaske } from "~/components/høytid-og-morro/paaske/Paaske";
import { Valentines } from "~/components/høytid-og-morro/valentines/Valentines";
import { useFeatureFlags } from "~/hooks/useFeatureFlags";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
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
  const { aktivtOppgaveSok, tema, setTema } = useSaksbehandler();
  const { featureFlags } = useFeatureFlags();

  const defaultMineOppgaverSearchParams = new URLSearchParams();
  mineOppgaverDefaultParams.forEach(({ key, value }) => {
    defaultMineOppgaverSearchParams.append(key, value);
  });

  const { totaltAntallOppgaver, isFetching } = useOppgaverQuery(defaultMineOppgaverSearchParams);

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
          {isFetching && (
            <Loader size="small" className={styles.loader} title="Henter oppgaver..." />
          )}
          {totaltAntallOppgaver > 0 && (
            <span className={styles.antallOppgaverTilBehandling}>{totaltAntallOppgaver}</span>
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

        <NavLink
          to={`/produksjonsstyring`}
          className={({ isActive }) =>
            classnames(styles.linkItem, { [styles.linkItemActive]: isActive })
          }
        >
          Produksjonsstyring
        </NavLink>
      </div>

      {featureFlags.halloween && <Ghosts />}
      {featureFlags.jul && <Adventslys />}
      {featureFlags.valentines && <Valentines />}
      {featureFlags.hippHippHurra && <HippHippHurra />}
      {featureFlags.paaske && <Paaske />}

      <div className={styles.searchAndSaksbehandlerContainer}>
        <PersonSok />
        <HeaderSaksbehandlerMeny saksbehandler={saksbehandler} />
        <Button
          variant={"tertiary-neutral"}
          icon={
            tema === "light" ? (
              <SunIcon title={"Endre til mørkt tema"} color={"white"} />
            ) : (
              <MoonIcon title={"Endre til lyst tema"} color={"white"} />
            )
          }
          onClick={() => setTema(tema === "light" ? "dark" : "light")}
        />
      </div>
    </div>
  );
}
