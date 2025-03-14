import { FigureOutwardFillIcon, SilhouetteFillIcon } from "@navikt/aksel-icons";
import { BodyShort, CopyButton } from "@navikt/ds-react";
import { useLocation } from "react-router";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import { components } from "../../../openapi/saksbehandling-typer";
import styles from "./PersonBoks.module.css";

interface IProps {
  person: components["schemas"]["Person"];
}

export function PersonBoks({ person }: IProps) {
  const location = useLocation();
  const { oppgave, behandling } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const utviklerinformasjon = {
    oppgaveId: oppgave.oppgaveId,
    behandlingId: behandling.behandlingId,
    saksbehandlerIdent: oppgave.saksbehandler?.ident,
    urlPath: location.pathname,
  };

  return (
    <div className={styles.container}>
      <div className={styles.navnContainer}>
        <span className={styles.iconContainer}>
          {person.kjonn === "MANN" && (
            <SilhouetteFillIcon title="" fontSize="1.5rem" color="white" />
          )}
          {person.kjonn === "KVINNE" && (
            <FigureOutwardFillIcon title="" fontSize="1.5rem" color="white" />
          )}
        </span>

        <BodyShort size="small" weight="semibold">
          {`${person.fornavn} ${person.mellomnavn || ""} ${person.etternavn}`}
        </BodyShort>
      </div>

      <BodyShort size="small" textColor="subtle" className={styles.personnummerContainer}>
        Personnummer: <b>{person.ident}</b> <CopyButton copyText={person.ident} size="xsmall" />
      </BodyShort>

      <BodyShort size="small" textColor="subtle" className={styles.personnummerContainer}>
        Alder: <b>{person.alder}</b>
      </BodyShort>

      <BodyShort size="small" textColor="subtle" className={styles.personnummerContainer}>
        Kjønn: <b>{person.kjonn}</b>
      </BodyShort>

      <BodyShort size="small" textColor="subtle" className={styles.personnummerContainer}>
        Statsborgerskap: <b>{person.statsborgerskap}</b>
      </BodyShort>

      <CopyButton
        className={styles.utviklerinfo}
        size="xsmall"
        copyText={JSON.stringify(utviklerinformasjon, null, 2)}
        text="Kopier utviklerinformasjon"
        activeText="Kopiert"
      />
    </div>
  );
}
