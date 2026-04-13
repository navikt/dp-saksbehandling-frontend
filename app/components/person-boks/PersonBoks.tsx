import { ExternalLinkIcon, FigureOutwardFillIcon, SilhouetteFillIcon } from "@navikt/aksel-icons";
import {
  Alert,
  BodyShort,
  CopyButton,
  Detail,
  InlineMessage,
  Link,
  Loader,
} from "@navikt/ds-react";
import classnames from "classnames";
import { Suspense } from "react";
import { Await, useLocation } from "react-router";

import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { hentRapporteringPersonId } from "~/models/rapportering.server";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { getEnv } from "~/utils/env.utils";
import { maskerVerdi } from "~/utils/skjul-sensitiv-opplysning";

import { components } from "../../../openapi/saksbehandling-typer";
import styles from "./PersonBoks.module.css";

interface IProps {
  person: components["schemas"]["Person"];
  rapporteringPersonIdPromise?: Promise<Awaited<ReturnType<typeof hentRapporteringPersonId>>>;
  oppgave?: components["schemas"]["Oppgave"];
}

export function PersonBoks({ person, oppgave, rapporteringPersonIdPromise }: IProps) {
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

        <Suspense
          fallback={
            <div className={styles.infoElement}>
              <Loader size="small" />
              <BodyShort size={"small"} textColor={"subtle"}>
                Henter meldekort-url
              </BodyShort>
            </div>
          }
        >
          <Await resolve={rapporteringPersonIdPromise}>
            {(rapporteringPersonId) =>
              rapporteringPersonId ? (
                <BodyShort size={"small"} textColor={"subtle"} className={styles.infoElement}>
                  <Link
                    href={`${getEnv("DP_RAPPORTERING_SAKSBEHANDLING_FRONTEND_URL")}/person/${rapporteringPersonId?.personId}`}
                    target="_blank"
                  >
                    Meldekort <ExternalLinkIcon aria-hidden />
                  </Link>
                </BodyShort>
              ) : (
                <InlineMessage status="warning" size={"small"} className={styles.infoElement}>
                  Klarte ikke hente meldekort-url
                </InlineMessage>
              )
            }
          </Await>
        </Suspense>

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
