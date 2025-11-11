import { Radio, RadioGroup } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { Form } from "react-router";

import { HttpProblemAlert } from "~/components/http-problem-alert/HttpProblemAlert";
import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
import { IAlert } from "~/context/alert-context";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { useUtvidedeBeskrivelser } from "~/hooks/useUtvidedeBeskrivelser";
import { ISanityBrevMal } from "~/sanity/sanity-types";
import { isAlert } from "~/utils/type-guards";
import { hentValideringForMeldingOmVedtakBrevVariantSkjema } from "~/utils/validering.util";

import { components } from "../../../openapi/melding-om-vedtak-typer";
import { components as saksbehandlingComponents } from "../../../openapi/saksbehandling-typer";
import { MeldingOmVedtakKilde } from "../melding-om-vedtak-kilde/MeldingOmVedtakKilde";
import { UtvidedeBeskrivelser } from "../utvidede-beskrivelser/UtvidedeBeskrivelser";
import styles from "./MeldingOmVedtak.module.css";

interface IProps {
  meldingOmVedtak?: components["schemas"]["MeldingOmVedtakResponse"] | IAlert;
  sanityBrevMaler: ISanityBrevMal[];
  oppgave: saksbehandlingComponents["schemas"]["Oppgave"];
}

export function MeldingOmVedtak({ meldingOmVedtak, sanityBrevMaler, oppgave }: IProps) {
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const { utvidedeBeskrivelser } = useUtvidedeBeskrivelser();

  const minOppgave = oppgave.saksbehandler?.ident === saksbehandler.onPremisesSamAccountName;
  const readOnly = oppgave.tilstand !== "UNDER_BEHANDLING" || !minOppgave;

  const endreBrevVariantForm = useForm({
    method: "post",
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
        <MeldingOmVedtakKilde readOnly={readOnly} oppgave={oppgave} />
        {oppgave.meldingOmVedtakKilde === "DP_SAK" && (
          <>
            <hr className="border-(--ax-border-neutral-subtle)" />

            <Form {...endreBrevVariantForm.getFormProps()}>
              <input name={"_action"} value={"lagre-brev-variant"} hidden={true} readOnly={true} />
              <input
                hidden={true}
                readOnly={true}
                {...endreBrevVariantForm.field("behandlingId").getInputProps()}
              />

              <RadioGroup
                {...endreBrevVariantForm.field("brevVariant").getInputProps()}
                size={"small"}
                legend="Variant"
                onChange={() => endreBrevVariantForm.submit()}
              >
                <Radio value="GENERERT">Standardisert tekst</Radio>
                <Radio value="EGENDEFINERT">Skriv tekst selv</Radio>
              </RadioGroup>
            </Form>

            {utvidedeBeskrivelser.length > 0 && (
              <hr className="border-(--ax-border-neutral-subtle)" />
            )}

            {!isAlert(meldingOmVedtak) && (
              <UtvidedeBeskrivelser
                meldingOmVedtak={meldingOmVedtak}
                readOnly={readOnly}
                sanityBrevMaler={sanityBrevMaler}
              />
            )}
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
