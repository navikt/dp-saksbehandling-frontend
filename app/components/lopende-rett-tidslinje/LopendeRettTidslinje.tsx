import { BodyShort, Box, Detail, HStack, InlineMessage, Timeline } from "@navikt/ds-react";
import { addDays, addWeeks, subDays } from "date-fns";

import {
  hentFargeForOpplysningPeriode,
  hentIkonForOpplysningPeriode,
} from "~/components/vilkår-tidslinje/vilkår-tidslinje-rader";
import { useBehandling } from "~/hooks/useBehandling";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterOpplysningVerdi } from "~/utils/opplysning.utils";

import { LoadingLink } from "../loading-link/LoadingLink";

export function LopendeRettTidslinje() {
  const { behandling } = useBehandling();
  const { oppgaveId } = useTypeSafeParams();
  const opplysning = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "01990a09-0eab-7957-b88f-14484a50e194",
  );

  const førstePeriode = opplysning?.perioder[0];
  const sistePeriode = opplysning?.perioder.at(-1);
  const sluttdato = sistePeriode?.gyldigTilOgMed ?? sistePeriode?.gyldigFraOgMed;

  return (
    <Box padding="space-16">
      {!opplysning?.perioder.length ? (
        <InlineMessage status="info">
          Ingen perioder for løpende rett på dagpenger i denne behandlingen.
        </InlineMessage>
      ) : (
        <Timeline
          aria-label="Løpende rett på dagpenger"
          className="aksel--compact"
          startDate={
            førstePeriode?.gyldigFraOgMed
              ? subDays(new Date(førstePeriode.gyldigFraOgMed), 1)
              : undefined
          }
          endDate={sluttdato ? addDays(new Date(sluttdato), 1) : undefined}
        >
          <Timeline.Row
            label={
              <LoadingLink
                tittelPåHover={opplysning.navn}
                to={`/oppgave/${oppgaveId}/dagpenger-rett/${behandling.behandlingId}/regelsett/MjA5OTE0NTUwMg==/opplysning/${opplysning.opplysningTypeId}`}
              >
                {opplysning.navn}
              </LoadingLink>
            }
          >
            {opplysning.perioder.map((periode) => (
              <Timeline.Period
                key={periode.id}
                start={new Date(periode.gyldigFraOgMed!)}
                end={
                  periode.gyldigTilOgMed
                    ? new Date(periode.gyldigTilOgMed)
                    : addWeeks(new Date(periode.gyldigFraOgMed!), 1)
                }
                status={hentFargeForOpplysningPeriode(periode.verdi)}
                icon={hentIkonForOpplysningPeriode(periode.verdi)}
              >
                <HStack gap="space-16">
                  <div>
                    <Detail textColor="subtle">Fra og med</Detail>
                    <BodyShort size="small">
                      {periode.gyldigFraOgMed
                        ? formaterTilNorskDato(periode.gyldigFraOgMed)
                        : "Uten startdato"}
                    </BodyShort>
                  </div>
                  <div>
                    <Detail textColor="subtle">Til og med</Detail>
                    <BodyShort size="small">
                      {periode.gyldigTilOgMed
                        ? formaterTilNorskDato(periode.gyldigTilOgMed)
                        : "Ingen sluttdato"}
                    </BodyShort>
                  </div>
                  <div>
                    <Detail textColor="subtle">Verdi</Detail>
                    <BodyShort size="small">{formaterOpplysningVerdi(periode.verdi)}</BodyShort>
                  </div>
                </HStack>
              </Timeline.Period>
            ))}
          </Timeline.Row>
        </Timeline>
      )}
    </Box>
  );
}
