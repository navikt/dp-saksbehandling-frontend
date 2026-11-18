import { ChevronDownIcon, ChevronUpIcon } from "@navikt/aksel-icons";
import { BodyShort, Box, Button, Detail, HStack, InlineMessage, Timeline } from "@navikt/ds-react";
import { addDays, addWeeks, subDays } from "date-fns";
import { useId, useState } from "react";

import {
  hentBetalingsopplysning,
  RevurderingResultat,
} from "~/components/revurdering-resultat/RevurderingResultat";
import {
  hentFargeForOpplysningPeriode,
  hentIkonForOpplysningPeriode,
} from "~/components/vilkår-tidslinje/vilkår-tidslinje-rader";
import { useBehandling } from "~/hooks/useBehandling";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterOpplysningVerdi } from "~/utils/opplysning.utils";

export function LopendeRettTidslinje() {
  const [utvidet, setUtvidet] = useState(false);
  const betalingsoversiktId = useId();
  const { behandling } = useBehandling();
  const opplysning = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "01990a09-0eab-7957-b88f-14484a50e194",
  );
  const førstePeriode = opplysning?.perioder[0];
  const sistePeriode = opplysning?.perioder.at(-1);
  const sluttdato = sistePeriode?.gyldigTilOgMed ?? sistePeriode?.gyldigFraOgMed;

  return (
    <Box as="section" aria-label="Har løpende rett på dagpenger" className="card">
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
                <BodyShort
                  as="h2"
                  weight="semibold"
                  style={{ transform: "translateY(calc(-1 * var(--ax-space-4)))" }}
                >
                  Har løpende rett til dagpenger
                </BodyShort>
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
      {hentBetalingsopplysning(behandling) && (
        <>
          <Box id={betalingsoversiktId} hidden={!utvidet} padding="space-16">
            <RevurderingResultat utenKort />
          </Box>
          <Button
            type="button"
            variant="tertiary-neutral"
            size="small"
            className="w-full"
            aria-expanded={utvidet}
            aria-controls={betalingsoversiktId}
            aria-label={utvidet ? "Skjul betalingsoversikt" : "Vis betalingsoversikt"}
            icon={utvidet ? <ChevronUpIcon aria-hidden /> : <ChevronDownIcon aria-hidden />}
            onClick={() => setUtvidet((forrige) => !forrige)}
          >
            Betalingsoversikt
          </Button>
        </>
      )}
    </Box>
  );
}
