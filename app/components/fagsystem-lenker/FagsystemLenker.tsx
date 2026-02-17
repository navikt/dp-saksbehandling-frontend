import { ExternalLinkIcon } from "@navikt/aksel-icons";
import { Link, List } from "@navikt/ds-react";

import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { useOppgave } from "~/hooks/useOppgave";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
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
    url: getEnv("DAGPENGER_NORGE_URL"),
    text: "Dagpenger Norge",
  },
  {
    url: getEnv("ARBEID_INNTEKT_URL"),
    text: "Inntekt og arbeidsforhold (fungerer i SKSS)",
  },
];

export function FagsystemLenker() {
  const { oppgaveId, behandlingId } = useTypeSafeParams();
  const { oppgave } = useOppgave();

  return (
    <List as="ul" size="small">
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

      <List.Item icon={<></>}>
        <LoadingLink
          to={`/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/barn/${oppgave.soknadId}`}
        >
          Rediger barn
        </LoadingLink>
      </List.Item>
    </List>
  );
}
