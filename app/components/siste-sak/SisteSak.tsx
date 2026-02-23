import { FolderFileIcon } from "@navikt/aksel-icons";
import { BodyShort, CopyButton, Heading } from "@navikt/ds-react";

import { GjeldendeVedtak } from "~/components/gjeldende-vedtak/GjeldendeVedtak";

import { components as behandlingComponents } from "../../../openapi/behandling-typer";
import { components } from "../../../openapi/saksbehandling-typer";
import { OppgaveListe } from "../oppgave-liste/OppgaveListe";

interface IProps {
  sak: components["schemas"]["Sak"];
  dagpengerRettBehandling?: behandlingComponents["schemas"]["Behandling"];
}

export function SisteSak({ sak, dagpengerRettBehandling }: IProps) {
  const idGrupper = sak.id.split("-");
  const sisteIdGruppe = idGrupper.pop();
  const forsteIdGruppe = idGrupper.join("-");

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

      {dagpengerRettBehandling && (
        <GjeldendeVedtak dagpengerRettBehandling={dagpengerRettBehandling} />
      )}

      <OppgaveListe oppgaver={sak.oppgaver} totaltAntallOppgaver={sak.oppgaver.length} />
    </div>
  );
}
