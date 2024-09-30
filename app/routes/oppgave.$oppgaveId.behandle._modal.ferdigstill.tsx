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
import { getAlertMessage } from "~/utils/alert-message.utils";
import { commitSession, getSession } from "~/sessions";
import styles from "../route-styles/oppgave.module.css";
import { getEnv } from "~/utils/env.utils";

export async function action({ request, params }: ActionFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const formData = await request.formData();
  const brevIArena = (formData.get("send-brev-i-arena") as string) === "true";
  const meldingOmVedtakHtml = formData.get("melding-om-vedtak-html") as string;
  const session = await getSession(request.headers.get("Cookie"));

  let response;
  if (brevIArena) {
    response = await ferdigstillOppgaveMedArenaBrev(request, params.oppgaveId);
    session.flash(
      "alert",
      getAlertMessage({ name: "ferdigstill-oppgave-brev-i-arena", httpCode: response.status }),
    );
  } else {
    invariant(meldingOmVedtakHtml, "meldingOmVedtakHtml er påkrevd");
    response = await ferdigstillOppgave(request, params.oppgaveId, meldingOmVedtakHtml);
    session.flash(
      "alert",
      getAlertMessage({ name: "ferdigstill-oppgave", httpCode: response.status }),
    );
  }

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);
    return redirect(`/oppgave/${params.oppgaveId}/behandle`, {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  return redirect(`../fullfort-oppgave`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export default function FerdigstillOppgave() {
  const { utvidetBeskrivelser } = useMeldingOmVedtakTekst();
  const { oppgave, behandling, sanityBrevBlokker, meldingOmVedtakOpplysninger } =
    useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

  const meldingOmVedtakHtml = renderToString(
    <MeldingOmVedtakPreview
      utvidetBeskrivelser={utvidetBeskrivelser}
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

        {(getEnv("GCP_ENV") !== "prod" || oppgave.saksbehandlerIdent === "G151133") && (
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
        )}
      </Modal.Footer>
    </>
  );
}
