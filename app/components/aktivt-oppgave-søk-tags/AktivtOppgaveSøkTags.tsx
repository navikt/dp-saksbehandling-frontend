import { Tag } from "@navikt/ds-react";

import { TILSTANDER } from "~/components/oppgave-filter/OppgaveFilterStatus";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { hentUtløstAvTekstForVisning } from "~/utils/tekst.utils";

import { components } from "../../../openapi/saksbehandling-typer";

interface IProps {
  aktivtOppgaveSok: string;
}

export function AktivOppgaveSøk({ aktivtOppgaveSok }: IProps) {
  const aktivtSøkParams = new URLSearchParams(aktivtOppgaveSok);
  const utløstAv = aktivtSøkParams.getAll("utlostAv") as components["schemas"]["UtlostAvType"][];
  const tilstander = aktivtSøkParams.getAll("tilstand");
  const tom = aktivtSøkParams.get("tom");
  const fom = aktivtSøkParams.get("fom");
  const gjenopptak = aktivtSøkParams.get("GJENOPPTAK");
  const avslagsgrunner = aktivtSøkParams.getAll("AVSLAGSGRUNN");
  const rettighetstype = aktivtSøkParams.getAll("RETTIGHET");
  const søknadresultat = aktivtSøkParams.getAll("SOKNADSRESULTAT");

  return (
    <div className={"mt-4 flex flex-wrap justify-center gap-2"}>
      {gjenopptak && (
        <Tag size={"xsmall"} variant={"outline"} data-color={"info"}>
          Gjenopptak
        </Tag>
      )}

      {avslagsgrunner.map((knagg) => (
        <Tag key={knagg} size={"xsmall"} variant={"outline"} data-color={"danger"}>
          {knagg}
        </Tag>
      ))}

      {rettighetstype.map((knagg) => (
        <Tag key={knagg} size={"xsmall"} variant={"outline"} data-color={"brand-beige"}>
          {knagg}
        </Tag>
      ))}

      {søknadresultat.map((knagg) => (
        <Tag key={knagg} size={"xsmall"} variant={"outline"} data-color={"brand-magenta"}>
          {knagg}
        </Tag>
      ))}

      {utløstAv.map((hendelse) => (
        <Tag key={hendelse} size={"xsmall"} variant={"outline"} data-color={"info"}>
          {hentUtløstAvTekstForVisning(hendelse)}
        </Tag>
      ))}

      {tilstander.map((tilstand) => (
        <Tag key={tilstand} size={"xsmall"} variant={"outline"} data-color={"brand-magenta"}>
          {TILSTANDER.find((t) => t.id === tilstand)?.tekst ?? tilstand}
        </Tag>
      ))}

      {(fom || tom) && (
        <Tag size={"xsmall"} variant={"outline"} data-color={"brand-beige"}>
          {`${fom ? formaterTilNorskDato(fom) : "--"} – ${tom ? formaterTilNorskDato(tom) : "--"}`}
        </Tag>
      )}
    </div>
  );
}
