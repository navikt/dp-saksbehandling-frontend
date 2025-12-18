import { FolderFileIcon } from "@navikt/aksel-icons";
import { BodyShort, CopyButton, Heading, ReadMore, Tag } from "@navikt/ds-react";
import { useState } from "react";

import { BehandlingListe } from "~/components/behandling-liste/BehandlingListe";
import { tilKnaddBehandling } from "~/utils/behandling.utils";
import { formaterTilNorskDato } from "~/utils/dato.utils";

import { components as behandlingComponents } from "../../../openapi/behandling-typer";
import { components } from "../../../openapi/saksbehandling-typer";
import { VerdiMedTittel } from "../verdi-med-tittel/VerdiMedTittel";

interface IProps {
  sak: components["schemas"]["Sak"];
  rettighetsperiode?: behandlingComponents["schemas"]["Rettighetsperiode"];
  behandling: behandlingComponents["schemas"]["Behandling"];
}

export function SisteSak({ sak, rettighetsperiode, behandling }: IProps) {
  const idGrupper = sak.id.split("-");
  const sisteIdGruppe = idGrupper.pop();
  const forsteIdGruppe = idGrupper.join("-");

  const knaddBehandling = tilKnaddBehandling(behandling);

  // Synd at vi må gjøre det kontrollert.. :(
  const [viserAlleBehandlinger, setViserAlleBehandlinger] = useState(false);

  function onOpenChange(open: boolean) {
    setViserAlleBehandlinger(open);
  }

  return (
    <div className={"card my-4 p-4"}>
      <div className={"flex items-center gap-2 pb-4"}>
        <Heading
          size={"small"}
          className={"flex items-center gap-1 border-r border-(--ax-border-neutral-subtle) pr-4"}
        >
          <FolderFileIcon aria-hidden /> Siste sak
        </Heading>

        <BodyShort className={"flex items-center gap-2"} weight={"semibold"}>
          SakID:
        </BodyShort>
        <BodyShort>
          {forsteIdGruppe}-<b>{sisteIdGruppe}</b>
        </BodyShort>
        <CopyButton copyText={sak.id} size={"small"} title={"kopier sakid"} />
      </div>
      <div className="card-raised my-4 rounded-md border border-(--ax-border-neutral-subtle) p-4">
        <div className="flex items-center gap-2 pb-4">
          <Heading size="xsmall" level="2">
            Status på sak
          </Heading>
          {rettighetsperiode?.harRett && (
            <Tag size="small" variant="info">
              Innvilgelse
            </Tag>
          )}
        </div>
        <hr className="border-(--ax-border-neutral-subtle)" />
        <div className="mt-4 flex flex-wrap gap-4">
          {rettighetsperiode && (
            <VerdiMedTittel
              label="Fra og med"
              verdi={formaterTilNorskDato(new Date(rettighetsperiode.fraOgMed))}
            />
          )}
          <VerdiMedTittel
            label="Til og med"
            verdi={
              rettighetsperiode?.tilOgMed
                ? formaterTilNorskDato(new Date(rettighetsperiode.tilOgMed))
                : "--"
            }
          />
          {knaddBehandling.harLøpendeRett && (
            <VerdiMedTittel
              label="Har løpende rett"
              verdi={knaddBehandling.harLøpendeRett ? "Ja" : "Nei"}
            />
          )}
          {knaddBehandling.harLøpendeRett === undefined && (
            <VerdiMedTittel label="Har løpende rett" verdi="Nei" />
          )}
          <VerdiMedTittel
            label="Sist endret"
            verdi={formaterTilNorskDato(new Date(behandling.sistEndret))}
          />
          {knaddBehandling.dagerSomGjenstår && (
            <VerdiMedTittel label="Gjenstår" verdi={knaddBehandling.dagerSomGjenstår.toString()} />
          )}
          {knaddBehandling.sistUtbetalt && (
            <VerdiMedTittel
              label="Sist utbetalt"
              verdi={formaterTilNorskDato(new Date(knaddBehandling.sistUtbetalt))}
            />
          )}
        </div>
      </div>
      <ReadMore
        header={viserAlleBehandlinger ? "Skjul alle behandlinger" : "Vis alle behandlinger"}
        open={viserAlleBehandlinger}
        onOpenChange={onOpenChange}
      >
        <BehandlingListe behandlinger={sak.behandlinger} />
      </ReadMore>
    </div>
  );
}
