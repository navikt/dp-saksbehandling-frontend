import { FolderFileIcon } from "@navikt/aksel-icons";
import { BodyShort, CopyButton, Heading } from "@navikt/ds-react";

import { GjeldendeVedtak } from "~/components/gjeldende-vedtak/GjeldendeVedtak";

import { components as behandlingComponents } from "../../../openapi/behandling-typer";
import { components } from "../../../openapi/saksbehandling-typer";
import { OppgaveListe } from "../oppgave-liste/OppgaveListe";
import { BehandlingOppgavePair, SakOppgaveListe } from "../sak-oppgave-liste/SakOppgaveListe";

interface IProps {
  sak: components["schemas"]["Sak"];
  sakIDpBehandling?: behandlingComponents["schemas"]["Sak"];
}

export function SisteSak({ sak, sakIDpBehandling }: IProps) {
  const idGrupper = sak.id.split("-");
  const sisteIdGruppe = idGrupper.pop();
  const forsteIdGruppe = idGrupper.join("-");

  const oppgaverSomIkkeErIDpBehandling = sak.oppgaver.filter(
    (oppgave) =>
      !sakIDpBehandling?.behandlinger.find(
        (behandling) => behandling.behandlingId === oppgave.behandlingId,
      ),
  );

  const sorterteGreier = sakIDpBehandling
    ? sakIDpBehandling.behandlinger
        .map((behandling) => {
          return {
            behandling,
            oppgave: sak.oppgaver.find(
              (oppgave) => oppgave.behandlingId === behandling.behandlingId,
            ),
          };
        })
        .filter((greie): greie is BehandlingOppgavePair => greie.oppgave !== undefined)
    : [];

  return (
    <div className={"card my-4 p-4"}>
      <div className={"flex items-center gap-2 pb-4"}>
        <Heading
          level="2"
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

      {sakIDpBehandling && <GjeldendeVedtak status={sakIDpBehandling.status} />}

      {sorterteGreier.length > 0 && (
        <>
          <Heading level="3" size={"small"} className={"mt-6 -mb-4"}>
            Oppgaver knyttet til behandlingsløp
          </Heading>
          <SakOppgaveListe greier={sorterteGreier} totaltAntallOppgaver={sorterteGreier.length} />
        </>
      )}
      {oppgaverSomIkkeErIDpBehandling.length > 0 && (
        <>
          <Heading level="3" size={"small"} className={"mt-6 -mb-4"}>
            Frie oppgaver
          </Heading>
          <OppgaveListe
            oppgaver={oppgaverSomIkkeErIDpBehandling}
            totaltAntallOppgaver={oppgaverSomIkkeErIDpBehandling.length}
          />
        </>
      )}
    </div>
  );
}
