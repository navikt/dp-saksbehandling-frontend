import { ExternalLinkIcon } from "@navikt/aksel-icons";
import { Link, List } from "@navikt/ds-react";

import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { getEnv } from "~/utils/env.utils";

const eksterneLenker = [
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

export function FagsystemLenker({ inntektRedigeringUrl }: IProps) {
  return (
    <List as="ul" size="small" className={"p-4"}>
      {eksterneLenker.map(
        (lenke) =>
          lenke.url && (
            <List.Item key={lenke.url} icon={<ExternalLinkIcon aria-hidden />}>
              <Link href={lenke.url} target="_blank">
                {lenke.text}
              </Link>
            </List.Item>
          ),
      )}

      {inntektRedigeringUrl && (
        <List.Item icon={<ExternalLinkIcon aria-hidden />}>
          <Link href={inntektRedigeringUrl} target="_blank">
            Inntektredigering
          </Link>
        </List.Item>
      )}

      <List.Item icon={<></>}>
        <LoadingLink to={"#"}>TODO: Lenke til orkestrator barn?</LoadingLink>
      </List.Item>
    </List>
  );
}
