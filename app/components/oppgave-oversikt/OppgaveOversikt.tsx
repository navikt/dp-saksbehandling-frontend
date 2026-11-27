import { BodyShort, CopyButton, Detail, Skeleton, Tag } from "@navikt/ds-react";
import { differenceInCalendarDays } from "date-fns";
import { useLocation } from "react-router";

import { components as behandlingComponents } from "@/openapi/behandling-typer";
import { components } from "@/openapi/saksbehandling-typer";
import { VerdiMedTittel } from "~/components/verdi-med-tittel/VerdiMedTittel";
import { useOppgave } from "~/hooks/useOppgave";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import {
  hentFargevariantForSøknadsresultat,
  hentOppgaveTilstandTekst,
  hentTekstForKlageinstansUtfall,
  hentUtløstAvTekstForVisning,
} from "~/utils/tekst.utils";

interface IProps {
  klageinstansUtfall?: components["schemas"]["KlageinstansUtfall"];
  opprettetAv?: behandlingComponents["schemas"]["Oppretter"];
  visKontroll?: boolean;
  visDokumenter?: boolean;
}

export function OppgaveOversikt(props: IProps) {
  const location = useLocation();
  const { oppgave } = useOppgave();

  const dagerIgjenTilUtsattDato = oppgave.utsattTilDato
    ? differenceInCalendarDays(oppgave.utsattTilDato, new Date())
    : undefined;

  const avslagsGrunner = oppgave.emneknagger.filter(
    (emneknagg) => emneknagg.kategori === "AVSLAGSGRUNN",
  );
  const avbruttGrunner = oppgave.emneknagger.filter(
    (emneknagg) => emneknagg.kategori === "AVBRUTT_GRUNN",
  );
  const påVentGrunner = oppgave.emneknagger.filter(
    (emneknagg) => emneknagg.kategori === "PAA_VENT",
  );

  const søknadResultatEmneknagger = oppgave.emneknagger.filter(
    (emneknagg) => emneknagg.kategori === "SOKNADSRESULTAT",
  );

  const rettighetEmneknagger = oppgave.emneknagger.filter(
    (emneknagg) => emneknagg.kategori === "RETTIGHET",
  );

  if (!oppgave) {
    return <Skeleton className="h-64 w-72" />;
  }

  const utviklerinformasjon = {
    oppgaveId: oppgave?.oppgaveId,
    behandlingId: oppgave?.behandlingId,
    saksbehandlerIdent: oppgave?.saksbehandler?.ident,
    urlPath: location.pathname,
  };

  return (
    <div className="flex flex-col gap-2">
      <VerdiMedTittel
        visBorder={true}
        label={"Opprettet"}
        verdi={formaterTilNorskDato(oppgave.tidspunktOpprettet)}
      />

      {props.opprettetAv && (
        <VerdiMedTittel
          visBorder={true}
          label={"Opprettet av"}
          verdi={`${props.opprettetAv.ident} (${props.opprettetAv.type})`}
        />
      )}

      <VerdiMedTittel
        visBorder={true}
        label={"Utløst av"}
        verdi={hentUtløstAvTekstForVisning(oppgave.utlostAv)}
      />

      {rettighetEmneknagger.length > 0 && (
        <VerdiMedTittel
          visBorder={true}
          label={"Rettighet"}
          verdi={rettighetEmneknagger.map((emneknagg) => emneknagg.visningsnavn).join(", ")}
        />
      )}

      <VerdiMedTittel
        visBorder={true}
        label={"Status"}
        verdi={
          <>
            <BodyShort size={"small"}>{hentOppgaveTilstandTekst(oppgave.tilstand)}</BodyShort>

            {oppgave.tilstand === "PAA_VENT" && oppgave.utsattTilDato && (
              <Tag
                size={"xsmall"}
                variant={"outline"}
                data-color={"brand-magenta"}
                className={"whitespace-nowrap"}
              >
                <Detail>{`${dagerIgjenTilUtsattDato} ${dagerIgjenTilUtsattDato === 1 ? "dag" : "dager"} igjen`}</Detail>
              </Tag>
            )}
          </>
        }
      />
      {props.klageinstansUtfall && (
        <VerdiMedTittel
          visBorder={true}
          label={"Utfall fra klageinstans"}
          verdi={hentTekstForKlageinstansUtfall(props.klageinstansUtfall.verdi)}
        />
      )}

      {søknadResultatEmneknagger.length > 0 && (
        <VerdiMedTittel
          visBorder={true}
          label={"Søknadsresultat"}
          verdi={
            <div>
              {søknadResultatEmneknagger.map((emneknagg) => (
                <Tag
                  key={emneknagg.visningsnavn}
                  size={"xsmall"}
                  variant={"outline"}
                  data-color={hentFargevariantForSøknadsresultat(emneknagg.visningsnavn)}
                  className={"whitespace-nowrap"}
                >
                  <Detail>{emneknagg.visningsnavn}</Detail>
                </Tag>
              ))}
            </div>
          }
        />
      )}

      {(avslagsGrunner.length > 0 || avbruttGrunner.length > 0 || påVentGrunner.length > 0) && (
        <VerdiMedTittel
          visBorder={true}
          label={"Årsak"}
          verdi={
            <div className={"flex flex-wrap gap-2"}>
              {avslagsGrunner.map((emneknagg) => (
                <Tag
                  key={emneknagg.visningsnavn}
                  size={"xsmall"}
                  variant={"outline"}
                  data-color={"danger"}
                  className={"whitespace-nowrap"}
                >
                  <Detail>{emneknagg.visningsnavn}</Detail>
                </Tag>
              ))}

              {avbruttGrunner.map((emneknagg) => (
                <Tag
                  key={emneknagg.visningsnavn}
                  size={"xsmall"}
                  variant={"outline"}
                  data-color={"warning"}
                  className={"whitespace-nowrap"}
                >
                  {emneknagg.visningsnavn}
                </Tag>
              ))}

              {påVentGrunner.map((emneknagg) => (
                <Tag
                  key={emneknagg.visningsnavn}
                  size={"xsmall"}
                  variant={"outline"}
                  data-color={"brand-magenta"}
                  className={"whitespace-nowrap"}
                >
                  {emneknagg.visningsnavn}
                </Tag>
              ))}
            </div>
          }
        />
      )}

      {oppgave.saksbehandler && (
        <VerdiMedTittel
          visBorder={true}
          label={"Saksbehandler"}
          verdi={`${oppgave.saksbehandler.fornavn} ${oppgave.saksbehandler.etternavn}`}
        />
      )}

      {oppgave.beslutter && (
        <VerdiMedTittel
          label={"Beslutter"}
          verdi={`${oppgave.beslutter.fornavn} ${oppgave.beslutter.etternavn}`}
        />
      )}
      <div>
        <CopyButton
          size="xsmall"
          copyText={JSON.stringify(utviklerinformasjon, null, 2)}
          text="Kopier utviklerinformasjon"
          activeText="Kopiert"
        />
      </div>
    </div>
  );
}
