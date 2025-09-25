import { Select } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useEffect } from "react";
import { Form } from "react-router";

import { HttpProblemAlert } from "~/components/http-problem-alert/HttpProblemAlert";
import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
import { IAlert } from "~/context/alert-context";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { useUtvidedeBeskrivelser } from "~/hooks/useUtvidedeBeskrivelser";
import { isAlert } from "~/utils/type-guards";
import { hentValideringForMeldingOmVedtakBrevVariantSkjema } from "~/utils/validering.util";

import { components } from "../../../openapi/melding-om-vedtak-typer";
import { MeldingOmVedtakKilde } from "../melding-om-vedtak-kilde/MeldingOmVedtakKilde";
import { UtvidedeBeskrivelser } from "../utvidede-beskrivelser/UtvidedeBeskrivelser";
import styles from "./MeldingOmVedtak.module.css";

interface IProps {
  meldingOmVedtak?: components["schemas"]["MeldingOmVedtakResponse"] | IAlert;
}

export function MeldingOmVedtak({ meldingOmVedtak }: IProps) {
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const { utvidedeBeskrivelser } = useUtvidedeBeskrivelser();

  const minOppgave = oppgave.saksbehandler?.ident === saksbehandler.onPremisesSamAccountName;
  const readOnly = oppgave.tilstand !== "UNDER_BEHANDLING" || !minOppgave;

  const endreBrevVariantForm = useForm({
    method: "post",
    schema: hentValideringForMeldingOmVedtakBrevVariantSkjema(),
    defaultValues: {
      behandlingId: oppgave.behandlingId,
      brevVariant: !isAlert(meldingOmVedtak) ? meldingOmVedtak?.brevVariant : "GENERERT",
    },
  });

  useEffect(
    () =>
      endreBrevVariantForm.subscribe.value(() => {
        endreBrevVariantForm.submit();
      }),
    [],
  );

  return (
    <div className={styles.meldingOmVedtakContainer}>
      <div className="flex flex-col gap-6">
        <MeldingOmVedtakKilde readOnly={readOnly} />
        {oppgave.meldingOmVedtakKilde === "DP_SAK" && (
          <>
            <hr className="border-(--a-border-subtle)" />

            <Form {...endreBrevVariantForm.getFormProps()}>
              <input name={"_action"} value={"lagre-brev-variant"} hidden={true} readOnly={true} />
              <input
                hidden={true}
                readOnly={true}
                {...endreBrevVariantForm.field("behandlingId").getInputProps()}
              />

              <Select
                {...endreBrevVariantForm.field("brevVariant").getInputProps()}
                label="Brevvariant"
                className={"mb-2"}
              >
                <option value="GENERERT">Generert</option>
                <option value="EGENDEFINERT">Egendefinert</option>
              </Select>
            </Form>

            {utvidedeBeskrivelser.length > 0 && <hr className="border-(--a-border-subtle)" />}

            {!isAlert(meldingOmVedtak) && (
              <UtvidedeBeskrivelser meldingOmVedtak={meldingOmVedtak} readOnly={readOnly} />
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
