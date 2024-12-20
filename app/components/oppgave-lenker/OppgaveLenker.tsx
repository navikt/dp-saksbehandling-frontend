import { ExternalLinkIcon } from "@navikt/aksel-icons";
import { Detail, Link } from "@navikt/ds-react";

import { getEnv } from "~/utils/env.utils";

import styles from "./OppgaveLenker.module.css";

const lenker = [
  {
    url: getEnv("GOSYS_URL"),
    text: "GOSYS (fungerer i SKSS)",
  },
  {
    url: getEnv("MODIA_URL"),
    text: "MODIA",
  },
  {
    url: getEnv("GRISEN_URL"),
    text: "GRISEN",
  },
  {
    url: getEnv("MELDEKORT_URL"),
    text: "Rapporteringer",
  },
  {
    url: getEnv("DAGPENGER_NORGE_URL"),
    text: "Dagpenger Norge",
  },
  {
    url: getEnv("ARBEID_INNTEKT_URL"),
    text: "Inntekt og arbeidsforhold (fungerer i SKSS)",
  },
  {
    url: getEnv("INNTEKTREDIGERING_URL"),
    text: "Rediger inntektsinformasjon ",
  },
];

export function OppgaveLenker() {
  return (
    <div className={styles.container}>
      {lenker.map(
        (lenke) =>
          lenke.url && (
            <div key={lenke.url} className={styles.lenke}>
              <Link href={lenke.url} target="_blank">
                <Detail>{lenke.text}</Detail>
                <ExternalLinkIcon />
              </Link>
            </div>
          ),
      )}
    </div>
  );
}
