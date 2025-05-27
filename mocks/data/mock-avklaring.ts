import { components } from "../../openapi/behandling-typer";

export const andreYtelser: components["schemas"]["Avklaring"] = {
  id: "test-id-1",
  kode: "AndreYtelser",
  tittel: "Andre ytelser",
  beskrivelse: "Personen har oppgitt andre ytelser",
  kanKvitteres: true,
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
};

export const soknadstidspunktForLangtFramITid: components["schemas"]["Avklaring"] = {
  id: "test-id-2",
  kode: "SøknadstidspunktForLangtFramITid",
  tittel: "Søknadstidspunktet ligger for lang fram i tid",
  beskrivelse: "Søknadstidspunktet ligger mer enn 14 dager fram i tid",
  kanKvitteres: true,
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
};

export const virkningstidspunktForLangtFramITid: components["schemas"]["Avklaring"] = {
  id: "test-id-3",
  kode: "VirkningstidspunktForLangtFramItid",
  tittel: "Virkningstidspunkt ligger for lang fram i tid",
  beskrivelse: "Virkningstidspunkt ligger mer enn 14 dager fram i tid",
  kanKvitteres: true,
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
};

export const verneplikt: components["schemas"]["Avklaring"] = {
  id: "test-id-4",
  kode: "Verneplikt",
  tittel: "Verneplikt",
  beskrivelse: "Krever avklaring om verneplikt",
  kanKvitteres: true,
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
};

export const tapAvArbeidstidBeregningsregel: components["schemas"]["Avklaring"] = {
  id: "test-id-5",
  kode: "TapAvArbeidsinntektOgArbeidstid",
  tittel: "Beregningsregel for tap av arbeidsinntekt og arbeidstid",
  kanKvitteres: false,
  beskrivelse:
    "Kun én beregningsregel kan være gyldig til en hver tid.  Velg en av Arbeidstid siste 6 måneder, Arbeidstid siste 12 måneder eller Arbeidstid siste 36 måneder.",
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
};

export const EOSArbeid: components["schemas"]["Avklaring"] = {
  id: "test-id-6",
  kode: "EØSArbeid",
  tittel: "Arbeid i EØS",
  beskrivelse: "Personen har oppgitt arbeid fra EØS",
  kanKvitteres: true,
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
};

export const hattLukkedeSakerSiste8Uker: components["schemas"]["Avklaring"] = {
  id: "test-id-7",
  kode: "HattLukkedeSakerSiste8Uker",
  tittel: "Hatt lukkede saker siste 8 uker",
  beskrivelse: "Personen har lukkede saker i Arena siste 8 uker",
  kanKvitteres: true,
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
};

export const samordnes: components["schemas"]["Avklaring"] = {
  id: "test-id-8",
  kode: "Samordning",
  tittel: "Om reduserte ytelser fra folketrygden som skal samordnes",
  beskrivelse: "Finne ut om det er noen reduserte ytelser fra folketrygden som skal samordnes",
  kanKvitteres: true,
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
};

export const inntektNesteKalendermaaned: components["schemas"]["Avklaring"] = {
  id: "test-id-9",
  kode: "InntektNesteKalendermåned",
  tittel: "Har innrapport inntekt for neste måned",
  beskrivelse: "Personen har inntekter som tilhører neste inntektsperiode",
  kanKvitteres: true,
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
};

export const jobbetUtenforNorge: components["schemas"]["Avklaring"] = {
  id: "test-id-10",
  kode: "JobbetUtenforNorge",
  tittel: "Arbeid utenfor Norge",
  beskrivelse: "Personen har oppgitt arbeid utenfor Norge",
  kanKvitteres: true,
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
};

export const muligGjenopptak: components["schemas"]["Avklaring"] = {
  id: "test-id-11",
  kode: "MuligGjenopptak",
  tittel: "Mulig gjenopptak",
  beskrivelse: "Personen har åpne saker i Arena som kan være gjenopptak",
  kanKvitteres: true,
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
};

export const svangerskapsrelaterteSykepenger: components["schemas"]["Avklaring"] = {
  id: "test-id-12",
  kode: "SvangerskapsrelaterteSykepenger",
  tittel: "Har hatt sykepenger som kan være svangerskapsrelatert",
  beskrivelse: "Personen har sykepenger som kan være svangerskapsrelaterte",
  kanKvitteres: true,
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
};

export const onskerEtterRapporteringsfrist: components["schemas"]["Avklaring"] = {
  id: "test-id-13",
  kode: "ØnskerEtterRapporteringsfrist",
  tittel: "Ønsker dagpenger etter rapporteringsfrist",
  beskrivelse: "Personen ønsker dagpenger etter rapporteringsfrist",
  kanKvitteres: true,
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
};

export const totrinnskontroll: components["schemas"]["Avklaring"] = {
  id: "test-id-14",
  kode: "Totrinnskontroll",
  tittel: "Totrinnskontroll",
  beskrivelse: "Totrinnskontroll",
  kanKvitteres: true,
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
};

export const BrukerUnder18: components["schemas"]["Avklaring"] = {
  id: "test-id-15",
  kode: "BrukerUnder18",
  tittel: "Bruker er under 18",
  beskrivelse: "Bruker er under 18 og skal ikke ha automatisk behandling",
  kanKvitteres: true,
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
};

export const BarnMaaGodkjennes: components["schemas"]["Avklaring"] = {
  id: "test-id-16",
  kode: "BarnMåGodkjennes",
  tittel: "Barn må godkjennes for å gi barnetillegg",
  beskrivelse: "Barn må godkjennes om de skal gi barnetillegg",
  kanKvitteres: true,
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
};
