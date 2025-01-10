import { BodyLong, Button, Modal } from "@navikt/ds-react";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { renderToString } from "react-dom/server";

import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
import { useMeldingOmVedtakTekst } from "~/hooks/useMeldingOmVedtakTekst";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { action } from "~/routes/oppgave.$oppgaveId.se.fullfort-oppgave";
import { isAlert } from "~/utils/type-guards";

export function OppgaveHandlingFattVedtak() {
  const fattVedtakModalRef = useRef<HTMLDialogElement>(null);
  const { state } = useNavigation();
  const actionData = useActionData<typeof action>();

  const { utvidedeBeskrivelser } = useMeldingOmVedtakTekst();
  const { oppgave, behandling, sanityBrevBlokker, meldingOmVedtak } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId",
  );

  useEffect(() => {
    if (isAlert(actionData) && actionData.variant === "error") {
      fattVedtakModalRef.current?.close();
    }
  }, [actionData]);

  const meldingOmVedtakHtml = renderToString(
    <MeldingOmVedtakPreview
      utvidedeBeskrivelser={utvidedeBeskrivelser}
      oppgave={oppgave}
      behandling={behandling}
      sanityBrevBlokker={sanityBrevBlokker}
      meldingOmVedtakOpplysninger={meldingOmVedtak?.opplysninger || []}
    />,
  );

  const kravPaaDagpenger = behandling.opplysning.find((o) => o.navn === "Krav på dagpenger")?.verdi;

  return (
    <>
      <Button
        size="small"
        onClick={() => fattVedtakModalRef.current?.showModal()}
        loading={state !== "idle"}
      >
        Fatt vedtak
      </Button>

      <Modal ref={fattVedtakModalRef} header={{ heading: "Fatt vedtak" }}>
        <Modal.Body>
          <BodyLong>
            Ønsker du å fatte vedtak med utfall{" "}
            <strong>{kravPaaDagpenger === "true" ? "innvilget" : "avslag"}?</strong>
          </BodyLong>
        </Modal.Body>

        <Modal.Footer>
          <Button
            size="small"
            type="button"
            variant="secondary"
            onClick={() => fattVedtakModalRef.current?.close()}
          >
            Avbryt
          </Button>

          <Form method="post">
            <>
              <input name="_action" value="fatt-vedtak" hidden={true} readOnly={true} />
              <input
                name="melding-om-vedtak-html"
                value={meldingOmVedtakHtml}
                hidden={true}
                readOnly={true}
              />

              <Button size="small" variant="primary" disabled={state !== "idle"}>
                Ja, med nytt brev
              </Button>
            </>
          </Form>

          <Form method="post">
            <>
              <input name="_action" value="fatt-vedtak" hidden={true} readOnly={true} />
              <input name="send-brev-i-arena" value="true" hidden={true} readOnly={true} />

              <Button size="small" variant="primary" disabled={state !== "idle"}>
                Ja, med brev fra Arena
              </Button>
            </>
          </Form>
        </Modal.Footer>
      </Modal>
    </>
  );
}
