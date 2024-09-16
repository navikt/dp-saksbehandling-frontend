import { BodyLong, Button, Heading, Modal } from "@navikt/ds-react";
import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { logger } from "~/utils/logger.utils";
import { Form, useNavigate, useNavigation } from "@remix-run/react";
import { ferdigstillOppgave, ferdigstillOppgaveMedArenaBrev } from "~/models/oppgave.server";
import invariant from "tiny-invariant";
import styles from "../route-styles/oppgave.module.css";

export async function action({ request, params }: ActionFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const formData = await request.formData();
  const brevIArena = (formData.get("brev-i-arena") as string) === "true";

  let response;

  if (brevIArena) {
    response = await ferdigstillOppgaveMedArenaBrev(request, params.oppgaveId);
  } else {
    response = await ferdigstillOppgave(request, params.oppgaveId, mockHTML);
  }

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);

    return redirect(`/oppgave/${params.oppgaveId}`);
  }

  return redirect(`../fullfort-oppgave`);
}

export default function FerdigstillOppgave() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

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
          <input hidden={true} readOnly={true} name="brev-i-arena" value={"true"} />

          <Button size="small" variant="primary" disabled={isSubmitting}>
            Ja, med brev fra Arena
          </Button>
        </Form>

        <Form method="post">
          <input hidden={true} readOnly={true} name="brev-i-arena" value={"false"} />

          <Button size="small" variant="primary" disabled={isSubmitting}>
            Ja, med brev fra nytt system
          </Button>
        </Form>
      </Modal.Footer>
    </>
  );
}

const mockHTML =
  "<h1>NAV har avslått søknaden din om dagpenger</h1><p>Vi har avslått søknaden din om dagpenger fra <span>5. desember 2024</span>.</p><h2><br/>Begrunnelse</h2><h3>Du har hatt for lav inntekt</h3><p>For å få dagpenger må du ha hatt inntekt på <span>176 000<!-- --> kr</span> siste 12 månedene, eller <span>528 000<!-- --> kr</span> de siste 36 månedene.</p><ul><li>Den registrerte inntekten din de siste 12 månedene til og med <span>5. desember 2024</span> er <span>0<!-- --> kr</span>.</li><li>Den registrerte inntekten din de siste 36 månedene til og med <span>5. desember 2024</span> er <span>58 000<!-- --> kr</span>.</li></ul><p>Vi har hentet inntektene dine fra Skatteetaten. Du kan sjekke inntekten din på skatteetaten.no/mineinntekter.</p><p>Hvis opplysningene ikke stemmer, må du:</p><ul><li>Kontakte arbeidsgiveren din, slik at de kan rette inntektsopplysningene dine.</li><li>Ta kontakt med NAV og dokumentere eventuelle endringer.</li></ul><p>Vedtaket er gjort etter folketrygdloven §4-4.<br/></p><h2>Du har rett til å klage</h2><p>Hvis du mener vedtaket er feil, kan du klage innen seks uker fra den datoen vedtaket har kommet fram til deg. Klagen må være skriftlig. Du finner skjema og informasjon på nav.no/klage.</p><p>NAV kan veilede deg på telefon om hvordan du sender en klage. NAV-kontoret ditt kan også hjelpe deg med å skrive en klage. Kontakt oss på telefon 55 55 33 33 hvis du trenger hjelp.</p><p>Hvis du får medhold i klagen, kan du få dekket vesentlige utgifter som har vært nødvendige for å få endret vedtaket, for eksempel hjelp fra advokat. Du kan ha krav på fri rettshjelp etter rettshjelploven. Du kan få mer informasjon om denne ordningen hos advokater, statsforvalteren, eller NAV.</p><p>Du kan lese om saksomkostninger i forvaltningsloven § 36.</p><p>Hvis du sender klage i posten, må du signere klagen.</p><p>Mer informasjon om klagerettigheter finner du på nav.no/klagerettigheter.</p><p>Dersom du får medhold i klagen din, har du kun rett til dagpenger for de periodene du har sendt inn fullstendig utfylte meldekort.</p><h2>Du har rett til innsyn</h2><p>Kontakt oss om du vil se dokumentene i saken din. Ta kontakt på nav.no/kontakt eller på telefon 55 55 33 33. Du kan lese mer om innsynsretten på nav.no/personvernerklaering.</p><p></p><h2>Har du spørsmål? </h2><p>Du finner mer informasjon på nav.no/dagpenger. På nav.no/kontakt kan du chatte eller skrive til oss. Hvis du ikke finner svar på nav.no kan du ringe oss på telefon 55 55 33 33, hverdager 09.00-15.00.</p>";
