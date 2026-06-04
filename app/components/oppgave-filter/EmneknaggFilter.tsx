import { Checkbox, CheckboxGroup, ReadMore } from "@navikt/ds-react";
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
            <ReadMore header={kategoriNavn} size="small">
              <CheckboxGroup legend="" size="small" className={"checkbox--compact"}>
                {knagger?.map(({ visningsnavn }) => (
                  <Checkbox
                    key={visningsnavn}
                    name={kategori}
                    value={visningsnavn}
                    defaultChecked={emneknaggerParams.includes(visningsnavn)}
                    onChange={(event) => toggleSearchParam(kategori, event.currentTarget.value)}
                  >
                    {visningsnavn}
                  </Checkbox>
                ))}
              </CheckboxGroup>
            </ReadMore>
          </div>
        );
      })}
    </>
  );
};

export default EmneknaggFilter;
