import { ExternalLinkIcon, FigureOutwardFillIcon, SilhouetteFillIcon } from "@navikt/aksel-icons";
import { Alert, BodyShort, CopyButton, Detail, Link } from "@navikt/ds-react";
import classnames from "classnames";
import { useLocation } from "react-router";

import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { maskerVerdi } from "~/utils/skjul-sensitiv-opplysning";

import { components } from "../../../openapi/saksbehandling-typer";
import styles from "./PersonBoks.module.css";

interface IProps {
  person: components["schemas"]["Person"];
  meldekortUrl?: string;
  oppgave?: components["schemas"]["Oppgave"];
}

export function PersonBoks({ person, oppgave, meldekortUrl }: IProps) {
  const location = useLocation();
  const { skjulSensitiveOpplysninger } = useSaksbehandler();
  const utviklerinformasjon = {
    oppgaveId: oppgave?.oppgaveId,
    behandlingId: oppgave?.behandlingId,
    saksbehandlerIdent: oppgave?.saksbehandler?.ident,
    urlPath: location.pathname,
  };

  const navn = `${person.fornavn} ${person.mellomnavn || ""} ${person.etternavn}`;
  const fødselsnummerMedMellomrom = `${person.ident.slice(0, 6)} ${person.ident.slice(6)}`;

  return (
    <>
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

        <BodyShort size="small" textColor="subtle" className={styles.infoElement}>
          Fødselsnummer:{" "}
          <LoadingLink to={`/person/${person.id}/oversikt`}>
            {skjulSensitiveOpplysninger
              ? maskerVerdi(fødselsnummerMedMellomrom)
              : fødselsnummerMedMellomrom}
          </LoadingLink>
          <CopyButton copyText={person.ident} size="xsmall" />
        </BodyShort>

        <BodyShort size="small" textColor="subtle" className={styles.infoElement}>
          Alder: <b>{person.alder}</b>
        </BodyShort>

        <BodyShort size="small" textColor="subtle" className={styles.infoElement}>
          Kjønn: <b>{person.kjonn}</b>
        </BodyShort>

        <BodyShort size="small" textColor="subtle" className={styles.infoElement}>
          Statsborgerskap: <b>{person.statsborgerskap}</b>
        </BodyShort>

        {meldekortUrl && (
          <BodyShort size={"small"} textColor={"subtle"} className={styles.infoElement}>
            <Link href={meldekortUrl} target="_blank">
              Meldekort <ExternalLinkIcon aria-hidden />
            </Link>
          </BodyShort>
        )}

        <CopyButton
          className={styles.utviklerinfo}
          size="xsmall"
          copyText={JSON.stringify(utviklerinformasjon, null, 2)}
          text="Kopier utviklerinformasjon"
          activeText="Kopiert"
        />
      </div>

      {person.sikkerhetstiltak?.map((tiltak) => (
        <Alert
          key={tiltak.beskrivelse}
          className={"alert--compact"}
          variant="warning"
          fullWidth={true}
        >
          {tiltak.beskrivelse}
          <Detail>Gjelder til og med {formaterTilNorskDato(tiltak.gyldigTom)}</Detail>
        </Alert>
      ))}

      {person.adressebeskyttelseGradering !== "UGRADERT" && (
        <Alert className={"alert--compact"} variant="warning" fullWidth={true}>
          Personen har adressebeskyttelse:{" "}
          {hentTekstForAdressebeskyttelse(person.adressebeskyttelseGradering)}
        </Alert>
      )}
    </>
  );
}
function hentTekstForAdressebeskyttelse(
  grading: components["schemas"]["AdressebeskyttelseGradering"],
) {
  switch (grading) {
    case "UGRADERT":
      return "Ugradert";
    case "FORTROLIG":
      return "Fortrolig";
    case "STRENGT_FORTROLIG":
      return "Strengt fortrolig";
    case "STRENGT_FORTROLIG_UTLAND":
      return "Strengt fortrolig utland";
  }
}
