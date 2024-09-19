import { BodyLong, Button, Heading, Modal } from "@navikt/ds-react";
import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { logger } from "~/utils/logger.utils";
import { Form, useNavigate, useNavigation } from "@remix-run/react";
import { ferdigstillOppgave, ferdigstillOppgaveMedArenaBrev } from "~/models/oppgave.server";
import invariant from "tiny-invariant";
import { renderToString } from "react-dom/server";
import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { useMeldingOmVedtakTekst } from "~/hooks/useMeldingOmVedtakTekst";
import styles from "../route-styles/oppgave.module.css";

export async function action({ request, params }: ActionFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const formData = await request.formData();
  const brevIArena = (formData.get("send-brev-i-arena") as string) === "true";
  const meldingOmVedtakHtml = formData.get("melding-om-vedtak-html") as string;

  let response;
  if (brevIArena) {
    response = await ferdigstillOppgaveMedArenaBrev(request, params.oppgaveId);
  } else {
    invariant(meldingOmVedtakHtml, "meldingOmVedtakHtml er påkrevd");
    response = await ferdigstillOppgave(request, params.oppgaveId, meldingOmVedtakHtml);
  }

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);
    return redirect(`/oppgave/${params.oppgaveId}`);
  }

  return redirect(`../fullfort-oppgave`);
}

export default function FerdigstillOppgave() {
  const { utvidetBeskrivelser } = useMeldingOmVedtakTekst();
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const { oppgave, behandling, sanityBrevBlokker, meldingOmVedtakOpplysninger } =
    useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

  const meldingOmVedtakHtml = renderToString(
    <MeldingOmVedtakPreview
      utvidetBeskrivelser={utvidetBeskrivelser}
      saksbehandler={saksbehandler}
      oppgave={oppgave}
      behandling={behandling}
      sanityBrevBlokker={sanityBrevBlokker}
      meldingOmVedtakOpplysninger={meldingOmVedtakOpplysninger}
    />,
  );

  return (
    <>
      <Modal.Header>
        <Heading size={"medium"}>Automatisk avslag</Heading>
      </Modal.Header>

      <Modal.Body>
        <BodyLong>Du er i ferd med å sende oppgaven til automatisk avslag</BodyLong>
      </Modal.Body>

      <Modal.Footer className={styles.modalFooter}>
        <Button size="small" type="button" variant="secondary" onClick={() => navigate(-1)}>
          Avbryt
        </Button>

        <Form method="post">
          <input hidden={true} readOnly={true} name="send-brev-i-arena" value={"true"} />

          <Button size="small" variant="primary" disabled={isSubmitting}>
            Ja, med brev fra Arena
          </Button>
        </Form>

        <Form method="post">
          <input hidden={true} readOnly={true} name="send-brev-i-arena" value={"false"} />
          <input
            hidden={true}
            readOnly={true}
            name="melding-om-vedtak-html"
            value={meldingOmVedtakHtml}
          />

          <Button size="small" variant="primary" disabled={isSubmitting}>
            Ja, med brev fra nytt system
          </Button>
        </Form>
      </Modal.Footer>
    </>
  );
}
