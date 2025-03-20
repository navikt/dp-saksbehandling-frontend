import { components } from "../../openapi/melding-om-vedtak-typer";

export const mockMeldingOmVedtakAvslagMinsteinntekt: components["schemas"]["MeldingOmVedtakResponse"] =
  {
    html: "<p>HTML persistert i backend</p>",
    utvidedeBeskrivelser: [],
  };

export const mockMeldingOmVedtakInnvilgelse: components["schemas"]["MeldingOmVedtakResponse"] = {
  html: '<html lang="no">\n  <head>\n    <meta charset="UTF-8"/>\n    <title>Vedtak fra NAV</title>\n    <style> .melding-om-vedtak {\n     font-family: \'Source Sans 3\', sans-serif;\n     font-size: 11pt;\n     line-height: 16pt;\n     font-weight: 400;\n }\n\n .melding-om-vedtak-header,\n .melding-om-vedtak-logo {\n     margin-bottom: 48px;\n }\n\n .melding-om-vedtak-header p {\n     font-size: 11pt;\n     line-height: 16pt;\n     font-weight: 400;\n     margin: 0;\n }\n \n .melding-om-vedtak-opplysning-verdi {\n   white-space: nowrap;\n }\n \n .melding-om-vedtak-saksnummer-dato {\n     overflow: hidden; /* Clear the floats */\n }\n \n .melding-om-vedtak-saksnummer-dato-left {\n     float: left;\n }\n .melding-om-vedtak-saksnummer-dato-right {\n     float: right;\n }\n\n\n.melding-om-vedtak-tekst-blokk {\n  margin-bottom: 26px;\n}\n\n.melding-om-vedtak-tekst-blokk-first {\n  margin-bottom: 0;\n}\n\n.melding-om-vedtak-tekst-blokk h1 {\n  font-size: 16pt;\n  line-height: 20pt;\n  font-weight: 700;\n  margin: 0 0 26px 0;\n  letter-spacing: 0.3px;\n}\n\n .melding-om-vedtak-tekst-blokk h2,\n .melding-om-vedtak-tekst-blokk h3,\n .melding-om-vedtak-tekst-blokk h4 {\n     line-height: 16pt;\n     font-weight: 700;\n     margin: 0 0 6px 0;\n }\n \n.melding-om-vedtak-tekst-blokk h2 {\n     font-size: 13pt;\n     letter-spacing: 0.25px;\n }\n\n .melding-om-vedtak-tekst-blokk h3 {\n     font-size: 12pt;\n     letter-spacing: 0.2px;\n }\n\n .melding-om-vedtak-tekst-blokk h4 {\n     font-size: 11pt;\n     letter-spacing: 0.1px;\n }\n\n .melding-om-vedtak-tekst-blokk p {\n     font-size: 11pt;\n     line-height: 16pt;\n     font-weight: 400;\n }\n\n .melding-om-vedtak-signatur-container {\n   margin-top: 32px;\n }\n \n .melding-om-vedtak-signatur {\n   float: left;\n   width: 50%;\n }\n \n ul, ol, li {\n     list-style-type: disc;\n }\n\n @page {\n     padding-bottom: 26px;\n     \n     @bottom-right {\n         content: \'side \' counter(page) \' av \' counter(pages);\n         font-family: \'Source Sans 3\', serif;\n         font-size: 9pt;\n         padding-bottom: 26px;\n         padding-right: 8px;\n     }\n\n     @bottom-left {\n         content: \'Saksid: 15246013\';\n         font-family: \'Source Sans 3\', serif;\n         font-size: 9pt;\n         padding-bottom: 26px;\n         padding-left: 8px;\n     }\n }\n\n @media print {\n     .melding-om-vedtak-tekst-blokk h1,\n     .melding-om-vedtak-tekst-blokk h2,\n     .melding-om-vedtak-tekst-blokk h3,\n     .melding-om-vedtak-tekst-blokk h4 {\n         page-break-after: avoid;\n     }\n }\n \n input {\n     /* Resolves getControlFont IndexOutOfBoundsException */\n     font-family: \'Source Sans 3\', serif;\n     font-size: 9pt;\n }\n         \n svg {\n   display: inline-block;\n }</style>\n  </head>\n  <body>\n    <div class="melding-om-vedtak">\n      <div class="melding-om-vedtak-header">\n        <svg xmlns="http://www.w3.org/2000/svg" class="melding-om-vedtak-logo" height="16" viewBox="0 0 193 58" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M190.8 0.799988H170.9C170.9 0.799988 169.5 0.8 169 2L158 35.8L147 2C146.5 0.8 145.1 0.799988 145.1 0.799988H106.8C106 0.799988 105.3 1.49999 105.3 2.29999V13.8C105.3 4.69999 95.6 0.799988 90 0.799988C77.3 0.799988 68.8 9.19999 66.2 21.9C66.1 13.5 65.4 10.4 63.1 7.39999C62.1 5.89999 60.6 4.60001 58.9 3.60001C55.5 1.60001 52.5 0.899994 46 0.899994H38.3C38.3 0.899994 36.9 0.900006 36.4 2.10001L29.4 19.4V2.39999C29.4 1.59999 28.7 0.899994 27.9 0.899994H10.2C10.2 0.899994 8.8 0.900006 8.3 2.10001L1.10002 20.1C1.10002 20.1 0.400012 21.9 2.00001 21.9H8.8V56.1C8.8 57 9.5 57.6 10.3 57.6H27.9C28.7 57.6 29.4 56.9 29.4 56.1V21.9H36.3C40.2 21.9 41.1 22 42.6 22.7C43.5 23.1 44.4 23.7 44.8 24.6C45.7 26.3 46 28.4 46 34.6V56.1C46 57 46.7 57.6 47.5 57.6H64.3C64.3 57.6 66.2 57.6 66.9 55.7L70.6 46.5C75.6 53.5 83.7 57.6 93.9 57.6H96.1C96.1 57.6 98 57.6 98.8 55.7L105.3 39.6V56.1C105.3 57 106 57.6 106.8 57.6H124C124 57.6 125.9 57.6 126.7 55.7C126.7 55.7 133.6 38.6 133.6 38.5C133.9 37.1 132.1 37.1 132.1 37.1H126V7.79999L145.3 55.7C146.1 57.6 147.9 57.6 147.9 57.6H168.2C168.2 57.6 170.1 57.6 170.9 55.7L192.3 2.70001C193 0.900012 190.9 0.899994 190.9 0.899994L190.8 0.799988ZM105.2 37H93.7C89.1 37 85.4 33.3 85.4 28.7C85.4 24.1 89.1 20.4 93.7 20.4H96.9C101.5 20.4 105.2 24.1 105.2 28.7V37Z" fill="#C30000"></path></svg>\n        <p>Navn: VARSOM SAK</p>\n        <p>Fødseslnummer: 1967-08-11</p>\n        <div class="melding-om-vedtak-saksnummer-dato">\n          <p class="melding-om-vedtak-saksnummer-dato-left">Saksid: 15246013</p>\n          <p class="melding-om-vedtak-saksnummer-dato-right">17. oktober 2024</p>\n        </div>\n      </div>\n      <div class="melding-om-vedtak-tekst-blokk-first" data-brevblokk-id="brev.blokk.vedtak-innvilgelse">\n        <h1>Nav har innvilget søknaden din om dagpenger</h1>\n        <p>Du får dagpenger fra og med <span class="melding-om-vedtak-opplysning-verdi">15. januar 2025</span>. Du kan få dagpenger i en periode på inntil <span class="melding-om-vedtak-opplysning-verdi">52</span> uker.\n\nDu får <span class="melding-om-vedtak-opplysning-verdi">497 kroner</span>  dagen for fem dager i uken.\n\nNav trekker først en egenandel av dagpengene dine. Egenandelen din er <span class="melding-om-vedtak-opplysning-verdi">1491 kroner</span>, som er tre ganger dagsatsen din.\n\nDu kan lese mer om beregning, utbetaling og egenandel lenger ned i brevet.</p>\n        <div data-utvidet-beskrivelse-id="brev.blokk.vedtak-innvilgelse"></div>\n      </div>\n      <div class="melding-om-vedtak-tekst-blokk" data-brevblokk-id="brev.blokk.hvor-lenge-kan-du-faa-dagpenger">\n        <h2>Hvor lenge kan du få dagpenger?</h2>\n        <p>Du kan få dagpenger i en periode på inntil <span class="melding-om-vedtak-opplysning-verdi">52</span> uker. Lengden på perioden avhenger av hvor mye du har hatt i inntekt.\n\nDagpengene dine kan stanse før perioden er over. Hvis dagpengene dine stanser, kan du søke på nytt. Du kan lese mer om stans lenger ned i brevet.</p>\n        <div data-utvidet-beskrivelse-id="brev.blokk.hvor-lenge-kan-du-faa-dagpenger"></div>\n      </div>\n      <div class="melding-om-vedtak-tekst-blokk" data-brevblokk-id="brev.blokk.slik-har-vi-beregnet-dagpengene-dine">\n        <h2>Slik har vi beregnet dagpengene dine</h2>\n        <p>Du får <span class="melding-om-vedtak-opplysning-verdi">497 kroner</span> per dag for fem dager i uken.</p>\n      </div>\n      <div class="melding-om-vedtak-tekst-blokk" data-brevblokk-id="brev.blokk.grunnlag">\n        <p>Vi beregner hvor mye du kan få i dagpenger basert på hva du har hatt i inntekt de siste 12 månedene, eller i gjennomsnitt de siste 36 månedene. Vi velger det alternativet som er best for deg. I ditt tilfelle er det <span class="melding-om-vedtak-opplysning-verdi">Gjennomsnittlig arbeidsinntekt siste 36 måneder</span>.</p>\n        <p>Din registrerte inntekt for hver tolvmånedersperiode siste tre år:</p>\n        <ul>\n          <li><span class="melding-om-vedtak-opplysning-verdi">januar 2024</span> - <span class="melding-om-vedtak-opplysning-verdi">desember 2024</span>      Inntekt: <span class="melding-om-vedtak-opplysning-verdi">0 kroner</span></li>\n          <li><span class="melding-om-vedtak-opplysning-verdi">januar 2023</span> - <span class="melding-om-vedtak-opplysning-verdi">desember 2023</span>      Inntekt: <span class="melding-om-vedtak-opplysning-verdi">55550 kroner</span></li>\n          <li><span class="melding-om-vedtak-opplysning-verdi">januar 2022</span> - <span class="melding-om-vedtak-opplysning-verdi">desember 2022</span>      Inntekt: <span class="melding-om-vedtak-opplysning-verdi">499950 kroner</span></li>\n        </ul>\n        <p>Når vi beregner dagpengene dine, setter vi opp inntekten din tilsvarende årlig justering av grunnbeløpet (G). Inntekt over <span class="melding-om-vedtak-opplysning-verdi">744168 kroner</span> (6 G) per tolvmånedersperiode vil ikke bli regnet med. Din beregnede inntekt er <span class="melding-om-vedtak-opplysning-verdi">206997 kroner</span>.\n\nDu kan se hva som gir rett til dagpenger på <a href="https://www.nav.no/dagpenger#hvem-kan">nav.no/dagpenger</a>. Vi har hentet inntektene dine fra Skatteetaten. Du kan sjekke inntekten din på <a href="https://www.skatteetaten.no/skjema/mine-inntekter-og-arbeidsforhold/">skatteetaten.no/mineinntekter</a>.\n\nHvis opplysningene ikke stemmer, må du:</p>\n        <ul>\n          <li>Kontakte arbeidsgiveren din, slik at de kan rette inntektsopplysningene dine.</li>\n          <li>Ta kontakt med Nav og dokumentere endringene.\n</li>\n        </ul>\n        <p>Beregningen er gjort etter <a href="https://lovdata.no/lov/1997-02-28-19/%C2%A74-11">folketrygdloven § 4-11 andre ledd</a>.</p>\n      </div>\n      <div class="melding-om-vedtak-tekst-blokk" data-brevblokk-id="brev.blokk.arbeidstiden-din">\n        <h2>Arbeidstiden din</h2>\n        <p>Nav har regnet ut den vanlige arbeidstiden din til å være <span class="melding-om-vedtak-opplysning-verdi">37.5</span> timer per uke.</p>\n        <div data-utvidet-beskrivelse-id="brev.blokk.arbeidstiden-din"></div>\n      </div>\n      <div class="melding-om-vedtak-tekst-blokk" data-brevblokk-id="brev.blokk.egenandel">\n        <h2>Egenandel</h2>\n        <p>Når du får dagpenger, trekker Nav en egenandel fra den første utbetalingen din. Den tilsvarer tre ganger dagsatsen med eventuelt barnetillegg.</p>\n        <p>Egenandelen din er <span class="melding-om-vedtak-opplysning-verdi">1491 kroner</span>.</p>\n        <p></p>\n        <p>Vi trekker egenandelen fra den første utbetalingen din. Får vi ikke trukket hele egenandelen fra den første utbetalingen, trekker vi resten fra den neste utbetalingen din.</p>\n        <p>Egenandelen trekkes automatisk. I utbetalingsoversikten vil dagsatsen din se lavere ut i perioder hvor egenandel er trukket.</p>\n        <p>\nLes mer om egenandel i <a href="https://lovdata.no/lov/1997-02-28-19/%C2%A74-9">folketrygdloven § 4-9</a>.</p>\n      </div>\n      <div class="melding-om-vedtak-tekst-blokk" data-brevblokk-id="brev.blokk.du-maa-sende-meldekort">\n        <h2>Du må sende meldekort</h2>\n        <p>For å ha rett på dagpenger må du sende meldekort hver 14. dag. Du fyller ut meldekortet digitalt på <a href="https://www.nav.no/meldekort/send-meldekort">nav.no/meldekort</a>. Logg inn på <a href="https://www.nav.no/">nav.no</a> for å se når du skal sende neste meldekort.</p>\n        <p>Hvis du sender meldekortet etter fristen, får du trekk i utbetalingen for neste meldekort. Hvor mye du blir trukket avhenger av hvor mange dager for sent meldekortet ble sendt. Du kan klage på trekk i utbetalingen. Klagefristen er seks uker.</p>\n        <p>Har det gått mer enn 20 dager siden siste gang du sendte et meldekort, blir du tatt ut av arbeidssøkerregisteret hos Nav, og dagpengene dine stanser. Da må du registrere deg som arbeidssøker på nytt og sende inn ny søknad om dagpenger.</p>\n        <p></p>\n        <p>Les mer om meldekort og hva som skal føres på <a href="https://www.nav.no/send-meldekort-dagpenger">nav.no/send-meldekort-dagpenger</a>.</p>\n      </div>\n      <div class="melding-om-vedtak-tekst-blokk" data-brevblokk-id="brev.blokk.utbetaling">\n        <h2>Utbetaling</h2>\n        <p>Har du registrert en bankkonto hos Nav eller Skatteetaten, vil du få utbetalingen på den kontoen. Pengene utbetales vanligvis innen to til tre dager etter at meldekortet ditt er registrert hos Nav. Du kan se alle utbetalingene du har fått ved å logge inn på <a href="https://www.nav.no/">nav.no</a>.</p>\n      </div>\n      <div class="melding-om-vedtak-tekst-blokk" data-brevblokk-id="brev.blokk.husk-aa-sjekke-skattekortet-ditt">\n        <h2>Husk å sjekke skattekortet ditt</h2>\n        <p>Du må betale skatt av dagpengene du får fra Nav. Det er lurt å endre skattekortet ditt når du får mindre utbetalt i måneden. Hvis du både jobber og mottar dagpenger, og trekkes etter tabellkort på dagpengene, kan det føre til at vi trekker for lite skatt. Du bør derfor informere Nav om at du ønsker prosenttrekk av dagpengene. Du kan endre skattekortet ditt på <a href="https://www.skatteetaten.no/person/">skatteetaten.no</a>.\n\nLes mer om skattetrekk på <a href="https://www.nav.no/skattetrekk">nav.no/skattetrekk</a>.</p>\n      </div>\n      <div class="melding-om-vedtak-tekst-blokk" data-brevblokk-id="brev.blokk.vi-stanser-dagpengene-dine-automatisk-naar-du">\n        <h2>Vi stanser dagpengene dine automatisk når du:</h2>\n        <ul>\n          <li>ikke sender meldekort etter at du registrerte deg som arbeidsledig</li>\n          <li>har jobbet mer enn 50 prosent av den vanlige arbeidstiden din på tre meldekort (60 prosent om du er permittert fra fiskeindustrien)</li>\n          <li>slutter å sende meldekort og det er mer enn 20 dager siden du sist sendte meldekort</li>\n          <li>svarer nei på spørsmålet på meldekortet om du fortsatt ønsker å være registrert som arbeidssøker</li>\n          <li>er ferdig med perioden du får dagpenger</li>\n          <li>er ferdig med perioden du får dagpenger som permittert</li>\n          <li>fyller 67 år</li>\n        </ul>\n      </div>\n      <div class="melding-om-vedtak-tekst-blokk" data-brevblokk-id="brev.blokk.du-maa-melde-fra-om-endringer">\n        <h2>Du må melde fra om endringer</h2>\n        <p>Hvis det skjer en endring i situasjonen din, kan det påvirke dagpengene dine. Derfor er det din plikt å gi beskjed til Nav om endringen, slik at du ikke får for mye eller for lite i dagpenger. Ta kontakt med Nav på <a href="https://www.nav.no/send-beskjed">nav.no/send-beskjed</a>, eller på telefon 55 55 33 33.\n\nDu må gi beskjed til oss hvis du:</p>\n        <ul>\n          <li>begynner eller slutter i arbeid, helt eller delvis</li>\n          <li>er permittert og har arbeidet for permitterende arbeidsgiver i mer enn seks uker</li>\n          <li>blir oppsagt mens du er permittert</li>\n          <li>blir sykmeldt, får endret sykmelding eller blir friskmeldt</li>\n          <li>begynner eller slutter på tiltak</li>\n          <li>begynner eller slutter på kurs eller annen utdanning</li>\n          <li>skal avvikle ferie eller permisjon</li>\n          <li>sitter i varetekt, soner straff, har omvendt voldsalarm eller er under forvaring</li>\n          <li>endrer adresse - dette gjør du på skatteetaten.no/folkeregisteret</li>\n          <li>blir innlagt på sykehus eller institusjon</li>\n          <li>skal reise eller flytte til utlandet</li>\n          <li>mottar pensjon eller annen stønad</li>\n          <li>mottar barnetillegg og barnet skal oppholde seg utenfor EØS, Sveits eller Storbritannia</li>\n          <li>mottar barnetillegg og du får ansvar for flere/færre barn</li>\n          <li>ikke ønsker arbeidstilbud i en periode</li>\n          <li>har andre opplysninger som kan bety noe for retten til ytelser\n\nDu kan lese mer om opplysningsplikten i <a href="https://lovdata.no/lov/1997-02-28-19/%C2%A721-3">folketrygdloven § 21-3</a>.</li>\n        </ul>\n      </div>\n      <div class="melding-om-vedtak-tekst-blokk" data-brevblokk-id="brev.blokk.konsekvenser-av-aa-gi-uriktige-eller-mangelfulle-opplysninger">\n        <h2>Du må gi oss riktige opplysninger</h2>\n        <p>Hvis du gir oss opplysninger som ikke er riktige eller mangelfulle, kan du få et krav om å betale tilbake dagpengene dine. Du kan også miste retten til dagpenger i inntil 26 uker.</p>\n      </div>\n      <div class="melding-om-vedtak-tekst-blokk" data-brevblokk-id="brev.blokk.sporsmaal">\n        <h2>Har du spørsmål? </h2>\n        <p>Du finner mer informasjon på <a href="https://www.nav.no/dagpenger">nav.no/dagpenger</a>. På <a href="https://www.nav.no/kontaktoss">nav.no/kontakt</a> kan du chatte eller skrive til oss. Hvis du ikke finner svar på <a href="www.nav.no">nav.no</a> kan du ringe oss på telefon 55 55 33 33, hverdager 09.00-15.00.</p>\n      </div>\n      <div class="melding-om-vedtak-tekst-blokk" data-brevblokk-id="brev.blokk.rett-til-innsyn">\n        <h2>Du har rett til innsyn</h2>\n        <p>Kontakt oss om du vil se dokumentene i saken din. Ta kontakt på nav.no/kontakt eller på telefon 55 55 33 33. Du kan lese mer om innsynsretten på <a href="https://www.nav.no/personvernerklaering">nav.no/personvernerklaering</a>.</p>\n        <p></p>\n      </div>\n      <div class="melding-om-vedtak-tekst-blokk" data-brevblokk-id="brev.blokk.rett-til-aa-klage">\n        <h2>Du har rett til å klage</h2>\n        <p>Hvis du mener vedtaket er feil, kan du klage innen seks uker fra den datoen vedtaket har kommet fram til deg. Klagen må være skriftlig. Du finner skjema og informasjon på <a href="https://www.nav.no/klage">nav.no/klage</a>.</p>\n        <p>Nav kan veilede deg på telefon om hvordan du sender en klage. Nav-kontoret ditt kan også hjelpe deg med å skrive en klage. Kontakt oss på telefon 55 55 33 33 hvis du trenger hjelp.</p>\n        <p>Hvis du får medhold i klagen, kan du få dekket vesentlige utgifter som har vært nødvendige for å få endret vedtaket, for eksempel hjelp fra advokat. Du kan ha krav på fri rettshjelp etter rettshjelploven. Du kan få mer informasjon om denne ordningen hos advokater, statsforvalteren, eller Nav.</p>\n        <p>Du kan lese om saksomkostninger i <a href="https://lovdata.no/lov/1967-02-10/%C2%A736">forvaltningsloven § 36</a>.</p>\n        <p>Hvis du sender klage i posten, må du signere klagen.</p>\n        <p>Mer informasjon om klagerettigheter finner du på <a href="https://www.nav.no/klagerettigheter">nav.no/klagerettigheter</a>.\n</p>\n        <p>Hvis du får medhold i klagen din, har du kun rett til dagpenger for de periodene du har sendt inn fullstendige utfylte meldekort til rett tid, og har vært registrert som arbeidssøker.</p>\n      </div>\n      <div>\n        <p>Med vennlig hilsen</p>\n        <p class="melding-om-vedtak-signatur">F_Z994030 E_Z994030<br/>Saksbehandler<br/>IT-avdelingen<br/></p>\n      </div>\n    </div>\n  </body>\n</html>\n',
  utvidedeBeskrivelser: [
    {
      brevblokkId: "brev.blokk.vedtak-innvilgelse",
      tekst: "Fisk",
      tittel: "Nav har innvilget søknaden din om dagpenger",
      sistEndretTidspunkt: "2025-01-21T11:12:22.825566779",
    },
    {
      brevblokkId: "brev.blokk.hvor-lenge-kan-du-faa-dagpenger",
      tekst: "",
      tittel: "Hvor lenge kan du få dagpenger?",
      sistEndretTidspunkt: "2025-01-21T11:12:22.825607189",
    },
    {
      brevblokkId: "brev.blokk.arbeidstiden-din",
      tekst: "",
      tittel: "Arbeidstiden din",
      sistEndretTidspunkt: "2025-01-21T11:12:22.825621949",
    },
  ],
};

export const mockMeldingerOmVedtak = [
  {
    behandlingId: "018f05a0-667a-7597-a835-fab53189d051",
    melding: mockMeldingOmVedtakInnvilgelse,
  },
  {
    behandlingId: "019353b5-3ee6-7693-8fdd-649153c18f74",
    melding: mockMeldingOmVedtakInnvilgelse,
  },
  {
    behandlingId: "0192c2aa-9fd5-776d-8c8f-819853b43c7e",
    melding: mockMeldingOmVedtakAvslagMinsteinntekt,
  },
];
