import { MinusIcon, PlusIcon } from "@navikt/aksel-icons";
import { BodyShort, Button, ReadMore } from "@navikt/ds-react";
import groupBy from "lodash/groupBy";

import { components } from "@/openapi/saksbehandling-typer";
import { useEmneknaggerQuery } from "~/api/emneknagger";
import { useToggleSearchParam } from "~/hooks/useToggleSearchParam";

type Kategori = components["schemas"]["EmneknaggKategori"];

const emneknaggNavn: Record<Kategori, string> = {
  RETTIGHET: "Rettighet",
  GJENOPPTAK: "Gjenopptak",
  SOKNADSRESULTAT: "Søknadresultat",
  AVSLAGSGRUNN: "Avslagsgrunner",
  AVBRUTT_GRUNN: "Avbruttgrunner",
  PAA_VENT: "På vent-grunner",
  ETTERSENDING: "Ettersending",
  OPPFOLGING_ARSAK: "Oppfølging",
  BEHANDLET_HENDELSE_TYPE: "Behandlet hendelse",
  UDEFINERT: "Annet",
};

const EmneknaggFilter = () => {
  const { searchParams, toggleSearchParam } = useToggleSearchParam();
  const { emneknagger } = useEmneknaggerQuery();
  const groupedEmneknagger = groupBy(emneknagger, (k) => k.kategori);

  const ekskluderEmneknagger = searchParams.getAll("ekskluderEmneknagg");

  return (
    <>
      {Object.keys(emneknaggNavn).map((kategori) => {
        const knagger = groupedEmneknagger[kategori];

        if (!knagger) {
          return null;
        }
        const emneknaggerParams = searchParams.getAll(kategori);
        const kategoriNavn = emneknaggNavn[kategori as Kategori] ?? kategori;

        return (
          <div key={kategori}>
            <ReadMore size="small" header={kategoriNavn + " (" + emneknaggerParams.length + ")"}>
              {knagger?.map(({ visningsnavn }) => (
                <div className="mt-2 flex gap-3">
                  <BodyShort size="small">{visningsnavn}</BodyShort>
                  <Button
                    size="xsmall"
                    className="ml-auto"
                    aria-label={`Inkluder oppgaver med emneknagg ${visningsnavn}`}
                    variant={emneknaggerParams.includes(visningsnavn) ? "primary" : "secondary"}
                    onClick={() => {
                      if (ekskluderEmneknagger.includes(visningsnavn)) {
                        toggleSearchParam("ekskluderEmneknagg", visningsnavn);
                      }
                      toggleSearchParam(kategori, visningsnavn);
                    }}
                    icon={<PlusIcon aria-hidden />}
                  ></Button>
                  <Button
                    size="xsmall"
                    aria-label={`Ekskluder oppgaver med emneknagg ${visningsnavn}`}
                    data-color="danger"
                    variant={ekskluderEmneknagger.includes(visningsnavn) ? "primary" : "secondary"}
                    onClick={() => {
                      if (emneknaggerParams.includes(visningsnavn)) {
                        toggleSearchParam(kategori, visningsnavn);
                      }
                      toggleSearchParam("ekskluderEmneknagg", visningsnavn);
                    }}
                    icon={<MinusIcon aria-hidden />}
                  ></Button>
                </div>
              ))}
            </ReadMore>
          </div>
        );
      })}
    </>
  );
};

export default EmneknaggFilter;
