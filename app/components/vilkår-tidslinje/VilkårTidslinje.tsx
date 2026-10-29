import { BodyShort, Heading, Timeline } from "@navikt/ds-react";
import { ReactNode } from "react";
import { useSearchParams } from "react-router";

import { components } from "@/openapi/behandling-typer";
import { TidslinjeNavigering } from "~/components/tidslinje-navigering/TidslinjeNavigering";
import { useBehandling } from "~/hooks/useBehandling";
import { useOppgave } from "~/hooks/useOppgave";
import { useTidslinjeNavigeringState } from "~/hooks/useTidslinjeNavigeringState";
import { skalViseRegelsett } from "~/utils/behandling.utils";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { skalViseOpplysning } from "~/utils/opplysning.utils";
import { isDatoVerdi } from "~/utils/type-guards";

import { renderOpplysningRad, renderVilkårRad } from "./vilkår-tidslinje-rader";

export {
  hentFargeForOpplysningPeriode,
  hentIkonForOpplysningPeriode,
} from "./vilkår-tidslinje-rader";

type Regelsett = components["schemas"]["Regelsett"];

export function VilkårTidslinje({ children }: { children?: ReactNode }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { readonly } = useOppgave();
  const { behandling, prøvingsdatoOpplysning, visArvedeOpplysninger } = useBehandling();
  const tidslinjeState = useTidslinjeNavigeringState(behandling);
  const valgtOpplysningId = searchParams.get("opplysning");

  const synligeVilkår = behandling.vilkår.filter((vilkår) =>
    skalViseRegelsett(vilkår, behandling.opplysninger, visArvedeOpplysninger),
  );
  const aktivtRegelsett = synligeVilkår.find((vilkår) =>
    vilkår.opplysninger.includes(valgtOpplysningId ?? ""),
  );

  function synligeOpplysninger(regelsett: Regelsett) {
    return behandling.opplysninger
      .filter(
        (opplysning) =>
          regelsett.opplysninger.includes(opplysning.opplysningTypeId) &&
          skalViseOpplysning(opplysning, visArvedeOpplysninger),
      )
      .reverse();
  }

  function opplysningSearch(opplysningId?: string) {
    const params = new URLSearchParams(searchParams);
    if (opplysningId) {
      params.set("opplysning", opplysningId);
    } else {
      params.delete("opplysning");
    }
    return params;
  }

  function toggleRegelsett(regelsett: Regelsett) {
    const opplysningId =
      aktivtRegelsett?.id === regelsett.id
        ? undefined
        : synligeOpplysninger(regelsett)[0]?.opplysningTypeId;
    setSearchParams(opplysningSearch(opplysningId), { preventScrollReset: true });
  }

  function renderTidslinje(regelsett: Regelsett[]) {
    return (
      <Timeline
        startDate={tidslinjeState.tidslinjeStartSlutt.start}
        endDate={tidslinjeState.tidslinjeStartSlutt.end}
        className="aksel--compact"
      >
        {prøvingsdatoOpplysning?.perioder.map((periode) =>
          isDatoVerdi(periode.verdi) ? (
            <Timeline.Pin key={periode.id} date={new Date(periode.verdi.verdi)}>
              <BodyShort size="small" weight="semibold">
                Prøvingsdato
              </BodyShort>
              <BodyShort size="small">{formaterTilNorskDato(periode.verdi.verdi)}</BodyShort>
            </Timeline.Pin>
          ) : null,
        )}
        {regelsett.flatMap((vilkår) => {
          const hovedOpplysning = behandling.opplysninger.find(
            (opplysning) => opplysning.opplysningTypeId === vilkår.opplysningTypeId,
          );
          if (!hovedOpplysning) {
            return [];
          }

          const utvidet = vilkår.id === aktivtRegelsett?.id;
          const vilkårRad = renderVilkårRad({
            regelsett: vilkår,
            hovedOpplysning,
            utvidet,
            siste: vilkår === synligeVilkår.at(-1) && !utvidet,
            onToggle: () => toggleRegelsett(vilkår),
          });
          const opplysningRader = utvidet
            ? synligeOpplysninger(vilkår).map((opplysning) =>
                renderOpplysningRad({
                  opplysning,
                  valgt: opplysning.opplysningTypeId === valgtOpplysningId,
                  readonly,
                  search: `?${opplysningSearch(opplysning.opplysningTypeId)}`,
                }),
              )
            : [];
          return [vilkårRad, ...opplysningRader];
        })}
      </Timeline>
    );
  }

  if (synligeVilkår.length === 0) {
    return null;
  }

  const aktivIndex = aktivtRegelsett ? synligeVilkår.indexOf(aktivtRegelsett) : -1;
  const vilkårTilOgMedAktivt =
    aktivIndex === -1 ? synligeVilkår : synligeVilkår.slice(0, aktivIndex + 1);
  const vilkårEtterAktivt = aktivIndex === -1 ? [] : synligeVilkår.slice(aktivIndex + 1);

  return (
    <div className="card p-4">
      <div className="flex content-center justify-between">
        <Heading size="small">Vilkårsvurderinger</Heading>
        <TidslinjeNavigering {...tidslinjeState} />
      </div>
      {renderTidslinje(vilkårTilOgMedAktivt)}
      {aktivtRegelsett && children}
      {vilkårEtterAktivt.length > 0 && renderTidslinje(vilkårEtterAktivt)}
    </div>
  );
}
