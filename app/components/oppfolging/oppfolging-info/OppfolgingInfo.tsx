import { ExternalLinkIcon } from "@navikt/aksel-icons";
import { BodyShort, Button, CopyButton, Heading, Link } from "@navikt/ds-react";
import { useState } from "react";
import { useLocation } from "react-router";

import { components } from "@/openapi/saksbehandling-typer";
import { FerdigstillOppgaveSkjema } from "~/components/ferdigstill-oppgave-skjema/FerdigstillOppgaveSkjema";
import { NoteButton, NoteModal } from "~/components/note-button/NoteButton";
import { OppgaveEmneknagger } from "~/components/oppgave-emneknagger/OppgaveEmneknagger";
import { OppgaveHistorikk } from "~/components/oppgave-historikk/OppgaveHistorikk";
import { OppgaveValgLeggTilbake } from "~/components/oppgave-valg/OppgaveValgLeggTilbake";
import { VerdiMedTittel } from "~/components/verdi-med-tittel/VerdiMedTittel";
import { useOppgave } from "~/hooks/useOppgave";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { getEnv } from "~/utils/env.utils";
import { hentOppgaveTilstandTekst } from "~/utils/tekst.utils";

interface IProps {
  oppfolging: components["schemas"]["Oppfolging"];
}

export function OppfolgingInfo({ oppfolging }: IProps) {
  const { oppgave, readonly } = useOppgave();
  const location = useLocation();
  const [visSkjema, setVisSkjema] = useState(false);
  const [medBehandling, setMedBehandling] = useState<boolean | undefined>(undefined);
  const [visHuskelapp, setVisHuskelapp] = useState(false);

  const utviklerinformasjon = {
    oppgaveId: oppgave?.oppgaveId,
    behandlingId: oppgave?.behandlingId,
    saksbehandlerIdent: oppgave?.saksbehandler?.ident,
    urlPath: location.pathname,
  };

  return (
    <section className="flex flex-col gap-4">
      {visHuskelapp && (
        <NoteModal noteKey={oppgave.oppgaveId} onClose={() => setVisHuskelapp(false)} />
      )}
      <div className="card flex flex-col gap-4 p-4">
        <div className="flex items-center gap-2">
          <Heading size={"small"}>Oppgaveinformasjon</Heading>
          <NoteButton
            noteKey={oppgave.oppgaveId}
            onClick={() => setVisHuskelapp(true)}
            oppgaveTilstand={oppgave.tilstand}
          />
        </div>
        <VerdiMedTittel
          visBorder={true}
          label="Opprettet"
          verdi={formaterTilNorskDato(oppgave.tidspunktOpprettet)}
        />

        <div className="flex flex-col gap-1 border-b border-(--ax-border-neutral-subtle) pb-2">
          <BodyShort size={"small"} weight={"semibold"}>
            Emne
          </BodyShort>

          <div>
            <OppgaveEmneknagger oppgave={oppgave} />
          </div>
        </div>

        <VerdiMedTittel
          visBorder={true}
          label="Status"
          verdi={hentOppgaveTilstandTekst(oppgave.tilstand)}
        />

        <VerdiMedTittel
          visBorder={true}
          label="Frist"
          verdi={oppfolging.frist ? formaterTilNorskDato(oppfolging.frist) : "Ingen frist"}
        />

        {oppgave.saksbehandler && (
          <VerdiMedTittel
            visBorder={true}
            label={"Saksbehandler"}
            verdi={`${oppgave.saksbehandler.fornavn} ${oppgave.saksbehandler.etternavn}`}
          />
        )}

        {oppgave.beslutter && (
          <VerdiMedTittel
            visBorder={true}
            label={"Beslutter"}
            verdi={`${oppgave.beslutter.fornavn} ${oppgave.beslutter.etternavn}`}
          />
        )}

        {oppfolging.vurdering && readonly && (
          <VerdiMedTittel visBorder={true} label={"Vurdering"} verdi={oppfolging.vurdering} />
        )}

        {oppfolging.nyBehandling && readonly && (
          <VerdiMedTittel
            visBorder={true}
            label={"Ny behandling"}
            verdi={`${oppfolging.nyBehandling.behandlingType} – ${oppfolging.nyBehandling.behandlingId}`}
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
      {!readonly && (
        <div className="card flex flex-col gap-2 p-4">
          <Heading size={"small"}>Handlinger</Heading>
          {!visSkjema && (
            <>
              <div>
                <Button
                  variant="primary"
                  size="small"
                  onClick={() => {
                    setMedBehandling(true);
                    setVisSkjema(true);
                  }}
                >
                  Opprett ny behandling
                </Button>
              </div>

              <div>
                <Button
                  variant="secondary"
                  size="small"
                  onClick={() => {
                    setMedBehandling(false);
                    setVisSkjema(true);
                  }}
                >
                  Ferdigstill uten behandling
                </Button>
              </div>

              <div>
                <OppgaveValgLeggTilbake oppgave={oppgave} buttonSize={"small"} />
              </div>
            </>
          )}

          {visSkjema && (
            <FerdigstillOppgaveSkjema
              medBehandling={medBehandling ?? false}
              setVisSkjema={(visSkjema: boolean) => {
                setVisSkjema(visSkjema);
                setMedBehandling(undefined);
              }}
              lovligeSaker={oppfolging.lovligeSaker}
              variant="ferdigstill-oppfolging"
            />
          )}
        </div>
      )}
      <div className="card flex flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <Heading className={"pb-2"} size={"small"}>
            Historikk
          </Heading>
          <Link
            href={`${getEnv("DP_AKTIVITETSLOGG_FRONTEND_URL")}/aktivitetslogg?behandlingId=${oppgave.behandlingId}`}
            target="_blank"
          >
            Se i aktivitetslogg <ExternalLinkIcon className="inline-block" />
          </Link>
        </div>

        <OppgaveHistorikk />
      </div>
    </section>
  );
}
