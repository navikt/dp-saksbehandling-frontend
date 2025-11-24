import { Radio, RadioGroup } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useLocation } from "react-router";

import { components } from "~/../openapi/melding-om-vedtak-typer";
import { HttpProblemAlert } from "~/components/http-problem-alert/HttpProblemAlert";
import { MeldingOmVedtakKilde } from "~/components/melding-om-vedtak-kilde/MeldingOmVedtakKilde";
import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
import { UtvidedeBeskrivelser } from "~/components/utvidede-beskrivelser/UtvidedeBeskrivelser";
import { OppgaveFattVedtak } from "~/components/v2/oppgave-fatt-vedtak/OppgaveFattVedtak";
import { OppgaveReturnerTilSaksbehandler } from "~/components/v2/oppgave-returner-til-saksbehandler/OppgaveReturnerTilSaksbehandler";
import { OppgaveSendTilKontroll } from "~/components/v2/oppgave-send-til-kontroll/OppgaveSendTilKontroll";
import { IAlert } from "~/context/alert-context";
import { useBehandling } from "~/hooks/useBehandling";
import { useOppgave } from "~/hooks/useOppgave";
import { useUtvidedeBeskrivelser } from "~/hooks/useUtvidedeBeskrivelser";
import { ISanityBrevMal } from "~/sanity/sanity-types";
import { isAlert } from "~/utils/type-guards";
import { hentValideringForMeldingOmVedtakBrevVariantSkjema } from "~/utils/validering.util";

import styles from "./MeldingOmVedtak.module.css";

interface IProps {
  meldingOmVedtak?: components["schemas"]["MeldingOmVedtakResponse"] | IAlert;
  sanityBrevMaler: ISanityBrevMal[];
}

export function MeldingOmVedtak({ meldingOmVedtak, sanityBrevMaler }: IProps) {
  const { pathname } = useLocation();
  const { oppgave, readonly } = useOppgave();
  const { behandling } = useBehandling();
  const { utvidedeBeskrivelser } = useUtvidedeBeskrivelser();

  const kanSendeTilKontroll =
    oppgave.tilstand === "UNDER_BEHANDLING" && behandling.kreverTotrinnskontroll;

  const kanFatteVedtak =
    (oppgave.tilstand === "UNDER_BEHANDLING" && !behandling.kreverTotrinnskontroll) ||
    oppgave.tilstand === "UNDER_KONTROLL";

  const kanReturnereTilSaksbehandler = oppgave.tilstand === "UNDER_KONTROLL";

  const endreBrevVariantForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForMeldingOmVedtakBrevVariantSkjema(),
    defaultValues: {
      _action: "lagre-brev-variant",
      behandlingId: oppgave.behandlingId,
      brevVariant: !isAlert(meldingOmVedtak) ? meldingOmVedtak?.brevVariant : "GENERERT",
    },
  });

  return (
    <div className={styles.meldingOmVedtakContainer}>
      <div className="flex flex-col gap-6">
        <MeldingOmVedtakKilde readOnly={readonly} oppgave={oppgave} />
        {oppgave.meldingOmVedtakKilde === "DP_SAK" && (
          <>
            <hr className="border-(--ax-border-neutral-subtle)" />

            <RadioGroup
              {...endreBrevVariantForm.field("brevVariant").getInputProps()}
              size={"small"}
              legend="Variant"
              readOnly={readonly}
              onChange={(value) => {
                endreBrevVariantForm.field("brevVariant").setValue(value);
                endreBrevVariantForm.submit();
              }}
            >
              <Radio value="GENERERT">Standardisert tekst</Radio>
              <Radio value="EGENDEFINERT">Skriv tekst selv</Radio>
            </RadioGroup>

            {utvidedeBeskrivelser.length > 0 && (
              <hr className="border-(--ax-border-neutral-subtle)" />
            )}

            {!isAlert(meldingOmVedtak) && (
              <UtvidedeBeskrivelser
                meldingOmVedtak={meldingOmVedtak}
                readOnly={readonly}
                sanityBrevMaler={sanityBrevMaler}
              />
            )}

            <div className={"flex gap-2 border-t-1 border-(--ax-border-neutral-subtle) pt-4"}>
              {kanReturnereTilSaksbehandler && <OppgaveReturnerTilSaksbehandler />}
              {kanSendeTilKontroll && <OppgaveSendTilKontroll />}
              {kanFatteVedtak && <OppgaveFattVedtak />}
            </div>
          </>
        )}
      </div>

      <div className={styles.previewContainer}>
        {oppgave.meldingOmVedtakKilde === "DP_SAK" &&
          (isAlert(meldingOmVedtak) ? (
            <HttpProblemAlert error={meldingOmVedtak} />
          ) : (
            <MeldingOmVedtakPreview
              utvidedeBeskrivelser={utvidedeBeskrivelser}
              html={meldingOmVedtak?.html || ""}
            />
          ))}
      </div>
    </div>
  );
}
