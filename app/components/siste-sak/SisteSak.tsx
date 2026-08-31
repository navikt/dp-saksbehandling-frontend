import { FolderFileIcon } from "@navikt/aksel-icons";
import { BodyShort, CopyButton, Heading } from "@navikt/ds-react";

import { GjeldendeVedtak } from "~/components/gjeldende-vedtak/GjeldendeVedtak";

import { components as behandlingComponents } from "../../../openapi/behandling-typer";
import { components } from "../../../openapi/saksbehandling-typer";
import { GjeldendeVedtakMedBehandling } from "../gjeldende-vedtak/GjeldendeVedtakMedBehandling";
import { OppgaveListe } from "../oppgave-liste/OppgaveListe";
import { OppgaveOgBehandling, SakOppgaveListe } from "../sak-oppgave-liste/SakOppgaveListe";

interface IProps {
  sak: components["schemas"]["Sak"];
  sakIDpBehandling?: behandlingComponents["schemas"]["Sak"];
  gjetterSisteBehandling?: behandlingComponents["schemas"]["Behandling"];
}

export function SisteSak({ sak, sakIDpBehandling, gjetterSisteBehandling }: IProps) {
  const idGrupper = sak.id.split("-");
  const sisteIdGruppe = idGrupper.pop();
  const forsteIdGruppe = idGrupper.join("-");

  const oppgaverSomIkkeErIDpBehandling = sakIDpBehandling
    ? sak.oppgaver.filter(
        (oppgave) =>
          !sakIDpBehandling?.behandlinger.find(
            (behandling) => behandling.behandlingId === oppgave.behandlingId,
          ),
      )
    : sak.oppgaver;

  const oppgaverOgBehandlinger = sakIDpBehandling
    ? sakIDpBehandling.behandlinger
        .map((behandling) => {
          return {
            behandling,
            oppgave: sak.oppgaver.find(
              (oppgave) => oppgave.behandlingId === behandling.behandlingId,
            ),
          };
        })
        .filter(
          (oppgaveOgBehandling): oppgaveOgBehandling is OppgaveOgBehandling =>
            oppgaveOgBehandling.oppgave !== undefined,
        )
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
      {!sakIDpBehandling && gjetterSisteBehandling && (
        <GjeldendeVedtakMedBehandling dagpengerRettBehandling={gjetterSisteBehandling} />
      )}

      {oppgaverOgBehandlinger.length > 0 && (
        <>
          <Heading level="3" size={"small"} className={"mt-6 -mb-4"}>
            Oppgaver knyttet til behandlingsløp
          </Heading>
          <SakOppgaveListe
            oppgaverOgBehandlinger={oppgaverOgBehandlinger}
            totaltAntallOppgaver={oppgaverOgBehandlinger.length}
          />
        </>
      )}
      {oppgaverSomIkkeErIDpBehandling.length > 0 && (
        <>
          {oppgaverOgBehandlinger.length !== 0 && (
            <Heading level="3" size={"small"} className={"mt-6 -mb-4"}>
              Frie oppgaver
            </Heading>
          )}
          <OppgaveListe
            oppgaver={oppgaverSomIkkeErIDpBehandling}
            totaltAntallOppgaver={oppgaverSomIkkeErIDpBehandling.length}
          />
        </>
      )}
    </div>
  );
}
