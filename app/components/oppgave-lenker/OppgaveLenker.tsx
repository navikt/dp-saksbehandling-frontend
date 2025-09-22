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
    url: getEnv("DAGPENGER_NORGE_URL"),
    text: "Dagpenger Norge",
  },
  {
    url: getEnv("ARBEID_INNTEKT_URL"),
    text: "Inntekt og arbeidsforhold (fungerer i SKSS)",
  },
];

interface IProps {
  inntektRedigeringUrl?: string;
}

export function OppgaveLenker({ inntektRedigeringUrl }: IProps) {
  return (
    <div className={styles.container}>
      {lenker.map(
        (lenke) =>
          lenke.url && (
            <Link key={lenke.url} href={lenke.url} target="_blank" className={styles.lenke}>
              <Detail>{lenke.text}</Detail>
              <ExternalLinkIcon />
            </Link>
          ),
      )}

      {inntektRedigeringUrl && (
        <Link href={inntektRedigeringUrl} target="_blank" className={styles.lenke}>
          <Detail>Inntektredigering</Detail>
          <ExternalLinkIcon />
        </Link>
      )}
    </div>
  );
}
