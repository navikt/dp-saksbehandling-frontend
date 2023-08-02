import { Link } from "@remix-run/react";
import { HeaderUtloggingMeny } from "~/components/header-meny/HeaderUtloggingMeny";
import type { ISaksbehandler } from "~/models/saksbehandler.server";
import { getEnv } from "~/utils/env.utils";
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
      <Link
        to={`${getEnv("BASE_PATH")}/pdl`}
        className={styles.linkItem}
        data-testid={"pdl-menu-button"}
      >
        Oppslag PDL TESTSIDE
      </Link>

      <HeaderUtloggingMeny saksbehandler={saksbehandler} />
    </div>
  );
}
