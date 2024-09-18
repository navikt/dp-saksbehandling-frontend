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
  '<div class="melding-om-vedtak"><div class="melding-om-vedtak__header"><svg class="melding-om-vedtak__logo" height="16" viewBox="0 0 193 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M190.8 0.799988H170.9C170.9 0.799988 169.5 0.8 169 2L158 35.8L147 2C146.5 0.8 145.1 0.799988 145.1 0.799988H106.8C106 0.799988 105.3 1.49999 105.3 2.29999V13.8C105.3 4.69999 95.6 0.799988 90 0.799988C77.3 0.799988 68.8 9.19999 66.2 21.9C66.1 13.5 65.4 10.4 63.1 7.39999C62.1 5.89999 60.6 4.60001 58.9 3.60001C55.5 1.60001 52.5 0.899994 46 0.899994H38.3C38.3 0.899994 36.9 0.900006 36.4 2.10001L29.4 19.4V2.39999C29.4 1.59999 28.7 0.899994 27.9 0.899994H10.2C10.2 0.899994 8.8 0.900006 8.3 2.10001L1.10002 20.1C1.10002 20.1 0.400012 21.9 2.00001 21.9H8.8V56.1C8.8 57 9.5 57.6 10.3 57.6H27.9C28.7 57.6 29.4 56.9 29.4 56.1V21.9H36.3C40.2 21.9 41.1 22 42.6 22.7C43.5 23.1 44.4 23.7 44.8 24.6C45.7 26.3 46 28.4 46 34.6V56.1C46 57 46.7 57.6 47.5 57.6H64.3C64.3 57.6 66.2 57.6 66.9 55.7L70.6 46.5C75.6 53.5 83.7 57.6 93.9 57.6H96.1C96.1 57.6 98 57.6 98.8 55.7L105.3 39.6V56.1C105.3 57 106 57.6 106.8 57.6H124C124 57.6 125.9 57.6 126.7 55.7C126.7 55.7 133.6 38.6 133.6 38.5C133.9 37.1 132.1 37.1 132.1 37.1H126V7.79999L145.3 55.7C146.1 57.6 147.9 57.6 147.9 57.6H168.2C168.2 57.6 170.1 57.6 170.9 55.7L192.3 2.70001C193 0.900012 190.9 0.899994 190.9 0.899994L190.8 0.799988ZM105.2 37H93.7C89.1 37 85.4 33.3 85.4 28.7C85.4 24.1 89.1 20.4 93.7 20.4H96.9C101.5 20.4 105.2 24.1 105.2 28.7V37Z" fill="#C30000"></path></svg><p>Navn: LEI  NAUT</p><p>Fødselsnummer: 038768 99336</p><div class="melding-om-vedtak__saksnummer-dato"><p class="melding-om-vedtak__saksnummer-dato--left">Saksnummer: 15016012</p><p class="melding-om-vedtak__saksnummer-dato--right">18. september 2024</p></div></div><div><div class="meldingOmVedtak__tekst-blokk meldingOmVedtak__tekst-blokk--first"><h1>NAV har avslått søknaden din om dagpenger</h1><p>Vi har avslått søknaden din om dagpenger fra <span class="melding-om-vedtak__opplysning-verdi">18. september 2024</span>.</p><h2><br>Begrunnelse</h2></div><div class="meldingOmVedtak__tekst-blokk"><h3>Du har hatt for lav inntekt</h3><p>For å få dagpenger må du ha hatt inntekt på <span class="melding-om-vedtak__opplysning-verdi">186&nbsp;042<!-- --> kr</span> siste 12 månedene, eller <span class="melding-om-vedtak__opplysning-verdi">372&nbsp;084<!-- --> kr</span> de siste 36 månedene.</p><ul><li>Den registrerte inntekten din de siste 12 månedene til og med <span class="melding-om-vedtak__opplysning-verdi">31. august 2024</span> er <span class="melding-om-vedtak__opplysning-verdi">0<!-- --> kr</span>.</li><li>Den registrerte inntekten din de siste 36 månedene til og med <span class="melding-om-vedtak__opplysning-verdi">31. august 2024</span> er <span class="melding-om-vedtak__opplysning-verdi">55&nbsp;550<!-- --> kr</span>.</li></ul><p>Vi har hentet inntektene dine fra Skatteetaten. Du kan sjekke inntekten din på skatteetaten.no/mineinntekter.</p><p>Hvis opplysningene ikke stemmer, må du:</p><ul><li>kontakte arbeidsgiveren din, slik at de kan rette inntektsopplysningene dine.</li><li>ta kontakt med NAV og dokumentere endringene.</li></ul><p>Vedtaket er gjort etter folketrygdloven §4-4.</p><p></p></div><div class="meldingOmVedtak__tekst-blokk"><h2>Har du spørsmål? </h2><p>Du finner mer informasjon på nav.no/dagpenger. På nav.no/kontakt kan du chatte eller skrive til oss. Hvis du ikke finner svar på nav.no kan du ringe oss på telefon 55 55 33 33, hverdager 09.00-15.00.</p></div><div class="meldingOmVedtak__tekst-blokk"><h2>Du har rett til å klage</h2><p>Hvis du mener vedtaket er feil, kan du klage innen seks uker fra den datoen vedtaket har kommet fram til deg. Klagen må være skriftlig. Du finner skjema og informasjon på nav.no/klage.</p><p>NAV kan veilede deg på telefon om hvordan du sender en klage. NAV-kontoret ditt kan også hjelpe deg med å skrive en klage. Kontakt oss på telefon 55 55 33 33 hvis du trenger hjelp.</p><p>Hvis du får medhold i klagen, kan du få dekket vesentlige utgifter som har vært nødvendige for å få endret vedtaket, for eksempel hjelp fra advokat. Du kan ha krav på fri rettshjelp etter rettshjelploven. Du kan få mer informasjon om denne ordningen hos advokater, statsforvalteren, eller NAV.</p><p>Du kan lese om saksomkostninger i forvaltningsloven § 36.</p><p>Hvis du sender klage i posten, må du signere klagen.</p><p>Mer informasjon om klagerettigheter finner du på nav.no/klagerettigheter.</p><p>Dersom du får medhold i klagen din, har du kun rett til dagpenger for de periodene du har sendt inn fullstendig utfylte meldekort.</p></div><div class="meldingOmVedtak__tekst-blokk"><h2>Du har rett til innsyn</h2><p>Kontakt oss om du vil se dokumentene i saken din. Ta kontakt på nav.no/kontakt eller på telefon 55 55 33 33. Du kan lese mer om innsynsretten på nav.no/personvernerklaering.</p><p></p></div></div><div class="meldingOmVedtak__signatur"><p>Med vennlig hilsen<br>F_Z993298<br>NAV Arbeid og ytelser Skien<br>Postboks 2543, Kjørbekk, 3702 SKIEN</p></div></div>';
