import { FigureOutwardFillIcon, SilhouetteFillIcon } from "@navikt/aksel-icons";
import { BodyShort, CopyButton } from "@navikt/ds-react";
import classnames from "classnames";
import { useLocation } from "react-router";

import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { maskerVerdi } from "~/utils/skjul-sensitiv-opplysning";

import { components } from "../../../openapi/saksbehandling-typer";
import styles from "./PersonBoks.module.css";

interface IProps {
  person: components["schemas"]["Person"];
}

export function PersonBoks({ person }: IProps) {
  const location = useLocation();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const { skjulSensitiveOpplysninger } = useSaksbehandler();
  const utviklerinformasjon = {
    oppgaveId: oppgave.oppgaveId,
    behandlingId: oppgave.behandlingId,
    saksbehandlerIdent: oppgave.saksbehandler?.ident,
    urlPath: location.pathname,
  };

  const navn = `${person.fornavn} ${person.mellomnavn || ""} ${person.etternavn}`;
  const personNummerMedMellomrom = `${person.ident.slice(0, 6)} ${person.ident.slice(6)}`;

  return (
    <div className={styles.container}>
      <div className={styles.navnContainer}>
        <span
          className={classnames(styles.iconContainer, {
            [styles.iconContainerMann]: person.kjonn === "MANN",
            [styles.iconContainerKvinne]: person.kjonn === "KVINNE",
          })}
        >
          {person.kjonn === "MANN" && (
            <SilhouetteFillIcon title="" fontSize="1.5rem" color="white" />
          )}
          {person.kjonn === "KVINNE" && (
            <FigureOutwardFillIcon title="" fontSize="1.5rem" color="white" />
          )}
        </span>

        <BodyShort size="small" weight="semibold">
          {skjulSensitiveOpplysninger ? maskerVerdi(navn) : navn}
        </BodyShort>
      </div>

      <BodyShort size="small" textColor="subtle" className={styles.personnummerContainer}>
        Personnummer:{" "}
        <b>
          {skjulSensitiveOpplysninger
            ? maskerVerdi(personNummerMedMellomrom)
            : personNummerMedMellomrom}
        </b>
        <CopyButton copyText={person.ident} size="xsmall" />
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
