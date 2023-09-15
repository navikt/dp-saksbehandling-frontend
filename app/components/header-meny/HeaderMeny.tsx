import { Link } from "@remix-run/react";
import { HeaderUtloggingMeny } from "~/components/header-meny/HeaderUtloggingMeny";
import type { ISaksbehandler } from "~/models/saksbehandler.server";
import { getEnv } from "~/utils/env.utils";
import { PersonSok } from "../person-sok/PersonSok";
import styles from "./HeaderMeny.module.css";

interface IProps {
  saksbehandler: ISaksbehandler;
}

export function HeaderMeny({ saksbehandler }: IProps) {
  return (
    <div className={styles.container}>
      <Link to={getEnv("BASE_PATH")} className={styles.linkItem} data-testid={"benken-menu-button"}>
        Benken
      </Link>
      <div className={styles.searchAndSaksbehandlerContainer}>
        <PersonSok />
        <HeaderUtloggingMeny saksbehandler={saksbehandler} />
      </div>
    </div>
  );
}
