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

export default function FattVedtak() {
  const { featureFlags } = useTypedRouteLoaderData("root");
  const { utvidedeBeskrivelser } = useMeldingOmVedtakTekst();
  const { oppgave, behandling, sanityBrevBlokker, meldingOmVedtak } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId",
  );

  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

  const meldingOmVedtakHtml = renderToString(
    <MeldingOmVedtakPreview
      utvidedeBeskrivelser={utvidedeBeskrivelser}
      oppgave={oppgave}
      behandling={behandling}
      sanityBrevBlokker={sanityBrevBlokker}
      meldingOmVedtakOpplysninger={meldingOmVedtak.opplysninger}
    />,
  );

  const kravPaaDagpenger = behandling.opplysning.find((o) => o.navn === "Krav på dagpenger")?.verdi;

  return (
    <>
      <Modal.Header>
        <Heading size={"medium"}>Fatt vedtak</Heading>
      </Modal.Header>

      <Modal.Body>
        <BodyLong>
          Ønsker du å fatte vedtak med utfall{" "}
          <strong>{kravPaaDagpenger === "true" ? "innvilget" : "avslag"}?</strong>
        </BodyLong>
      </Modal.Body>

      <Modal.Footer className={styles.modalFooter}>
        <Button size="small" type="button" variant="secondary" onClick={() => navigate(-1)}>
          Avbryt
        </Button>

        <Form method="post">
          {(!kravPaaDagpenger || kravPaaDagpenger === "false" || featureFlags.totrinnsKontroll) && (
            <>
              <input hidden={true} readOnly={true} name="send-brev-i-arena" value={"false"} />
              <input
                hidden={true}
                readOnly={true}
                name="melding-om-vedtak-html"
                value={meldingOmVedtakHtml}
              />

              <Button size="small" variant="primary" disabled={isSubmitting}>
                Ja
              </Button>
            </>
          )}

          {kravPaaDagpenger === "true" && !featureFlags.totrinnsKontroll && (
            <>
              <input hidden={true} readOnly={true} name="send-brev-i-arena" value={"true"} />

              <Button size="small" variant="primary" disabled={isSubmitting}>
                Ja, med brev fra Arena
              </Button>
            </>
          )}
        </Form>
      </Modal.Footer>
    </>
  );
}
