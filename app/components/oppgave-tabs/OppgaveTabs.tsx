import { DocPencilIcon } from "@navikt/aksel-icons";
import classnames from "classnames";
import { Link, useLocation, useParams } from "react-router";

import styles from "./OppgaveTabs.module.css";

const TABS = [
  { path: "/behandle", label: "1. Behandlingsoversikt" },
  { path: "/begrunnelse", label: "2. Saksbehandlers begrunnelse" },
  { path: "/melding-om-vedtak", label: "3. Melding om vedtak" },
];

export function OppgaveTabs() {
  const location = useLocation();
  const params = useParams();

  const basePath1 = `/oppgave/${params.oppgaveId}/dagpenger-rett/${params.behandlingId}`;
  const basePath2 = `/behandling/${params.behandlingId}`;

  const currentBasePath = location.pathname.startsWith("/oppgave") ? basePath1 : basePath2;

  return (
    <nav>
      <ol className={styles.container}>
        {TABS.map(({ path, label }) => (
          <li key={path}>
            <Link
              to={`${currentBasePath}${path}`}
              className={classnames(styles.lenke, {
                [styles.lenkeAktiv]: location.pathname.includes(path),
              })}
            >
              <DocPencilIcon aria-hidden />
              {label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
