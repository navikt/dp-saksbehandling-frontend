import { Heading, Tag } from "@navikt/ds-react";

import { VerdiMedTittel } from "~/components/verdi-med-tittel/VerdiMedTittel";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterOpplysningVerdi } from "~/utils/opplysning.utils";

import { components as behandlingComponents } from "../../../openapi/behandling-typer";

interface IProps {
  dagpengerRettBehandling: behandlingComponents["schemas"]["Behandling"];
}
export function GjeldendeVedtak({ dagpengerRettBehandling }: IProps) {
  const sisteRettighetsPeriode = dagpengerRettBehandling?.rettighetsperioder.at(-1);

  // Opplysning "Meldeperiode"
  const sisteMeldeperiode = dagpengerRettBehandling?.opplysninger
    ?.find((opplysning) => opplysning.opplysningTypeId === "01956abd-2871-7517-a332-b462c0c31292")
    ?.perioder?.at(-1);

  // Opplysning "Antall dager som gjenstår"
  const antallDagperSomGjentår = dagpengerRettBehandling?.opplysninger
    ?.find((opplysning) => opplysning.opplysningTypeId === "019bfed4-7bba-7665-9ec2-17dfa2201be7")
    ?.perioder?.at(-1)?.verdi;
  return (
    <div className={"card card-raised my-4 p-4"}>
      <Heading className={"border-b-1 border-ax-border-neutral-subtle pb-2"} size={"small"}>
        Gjeldende vedtak
      </Heading>

      <div className={"flex gap-12 pt-2"}>
        {sisteRettighetsPeriode && (
          <>
            <VerdiMedTittel
              visBorder={false}
              label={"Har rett på dagepnger"}
              verdi={
                sisteRettighetsPeriode.harRett ? (
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
              verdi={formaterTilNorskDato(sisteRettighetsPeriode.fraOgMed)}
            />
            <VerdiMedTittel
              visBorder={false}
              label={"Til og med"}
              verdi={
                sisteRettighetsPeriode.tilOgMed
                  ? formaterTilNorskDato(sisteRettighetsPeriode.fraOgMed)
                  : "--"
              }
            />
          </>
        )}

        <VerdiMedTittel
          visBorder={false}
          label={"Sist beregnet meldeperiode"}
          verdi={sisteMeldeperiode ? formaterOpplysningVerdi(sisteMeldeperiode.verdi) : "--"}
        />

        <VerdiMedTittel
          visBorder={false}
          label={"Gjenstående"}
          verdi={antallDagperSomGjentår ? formaterOpplysningVerdi(antallDagperSomGjentår) : "--"}
        />

        <VerdiMedTittel
          visBorder={false}
          label={"Sist endret"}
          verdi={formaterTilNorskDato(dagpengerRettBehandling.opprettet)}
        />
      </div>
    </div>
  );
}
