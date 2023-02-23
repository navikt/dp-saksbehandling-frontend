import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "@remix-run/react";
import styles from "./BrukerMeny.module.css";

export function BrukerMeny() {
  const location = useLocation();

  const vilkaarPath = "vilkaar";
  const vedtakPath = "vedtak";
  const meldekortPath = "meldekort";
  const sanksjonPath = "sanksjon";
  return (
    <div className={styles.container}>
      <Link
        to={vilkaarPath}
        className={classNames(styles.linkItem, {
          [styles.linkItemActive]: location.pathname.includes(vilkaarPath),
        })}
      >
        Vilkår
      </Link>

      <Link
        to={vedtakPath}
        className={classNames(styles.linkItem, {
          [styles.linkItemActive]: location.pathname.includes(vedtakPath),
        })}
      >
        Vedtak
      </Link>

      <Link
        to={meldekortPath}
        className={classNames(styles.linkItem, {
          [styles.linkItemActive]: location.pathname.includes(meldekortPath),
        })}
      >
        Meldekort
      </Link>

      <Link
        to={sanksjonPath}
        className={classNames(styles.linkItem, {
          [styles.linkItemActive]: location.pathname.includes(sanksjonPath),
        })}
      >
        Sanksjon
      </Link>
    </div>
  );
}
