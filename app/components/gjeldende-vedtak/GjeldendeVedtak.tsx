import { Heading, Tag } from "@navikt/ds-react";

import { VerdiMedTittel } from "~/components/verdi-med-tittel/VerdiMedTittel";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterOpplysningVerdi } from "~/utils/opplysning.utils";

import { components as behandlingComponents } from "../../../openapi/behandling-typer";

interface IProps {
  status: behandlingComponents["schemas"]["SakStatus"];
}

export function GjeldendeVedtak({ status }: IProps) {
  // Opplysning "Meldeperiode"
  const sisteMeldeperiode = status.sisteMeldeperiode;

  // Opplysning "Antall dager som gjenstår"
  const antallDagerSomGjenstår = status.gjenståendeDager;

  return (
    <div className={"card card-raised my-4 p-4"}>
      <Heading className={"border-b border-ax-border-neutral-subtle pb-2"} size={"small"}>
        Gjeldende vedtak
      </Heading>

      <div className={"flex gap-12 pt-2"}>
        <>
          <VerdiMedTittel
            visBorder={false}
            label={"Har rett på dagpenger"}
            verdi={
              status.harLøpendeRett ? (
                <div>
                  <Tag variant={"outline"} data-color={"success"} size={"small"}>
                    Ja
                  </Tag>
                </div>
              ) : (
                <div>
                  <Tag variant={"outline"} data-color={"danger"} size={"small"}>
                    Nei
                  </Tag>
                </div>
              )
            }
          />
          <VerdiMedTittel
            visBorder={false}
            label={"Fra og med"}
            verdi={status.fraOgMed ? formaterTilNorskDato(status.fraOgMed) : "--"}
          />
          <VerdiMedTittel
            visBorder={false}
            label={"Til og med"}
            verdi={status.tilOgMed ? formaterTilNorskDato(status.tilOgMed) : "--"}
          />
        </>

        <VerdiMedTittel
          visBorder={false}
          label={"Sist beregnet meldeperiode"}
          verdi={
            sisteMeldeperiode
              ? formaterOpplysningVerdi({
                  fom: sisteMeldeperiode.fraOgMed,
                  tom: sisteMeldeperiode.tilOgMed
                    ? sisteMeldeperiode.tilOgMed
                    : sisteMeldeperiode.fraOgMed,
                  datatype: "periode",
                })
              : "--"
          }
        />

        <VerdiMedTittel
          visBorder={false}
          label={"Gjenstående"}
          verdi={
            antallDagerSomGjenstår !== undefined
              ? formaterOpplysningVerdi({
                  verdi: antallDagerSomGjenstår,
                  enhet: "dager",
                  datatype: "heltall",
                })
              : "--"
          }
        />
        {status.sistEndret && (
          <VerdiMedTittel
            visBorder={false}
            label={"Sist endret"}
            verdi={formaterTilNorskDato(status.sistEndret)}
          />
        )}
      </div>
    </div>
  );
}
