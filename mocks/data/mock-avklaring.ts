import type { IAvklaring } from "~/models/behandling.server";

export const andreYtelser: IAvklaring = {
  id: "test-id-1",
  kode: "AndreYtelser",
  tittel: "Andre ytelser",
  beskrivelse: "Personen har oppgitt andre ytelser",
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
  avklartAv: null,
  begrunnelse: null,
  kanKvitteres: true,
};

export const soknadstidspunktForLangtFramITid: IAvklaring = {
  id: "test-id-2",
  kode: "SøknadstidspunktForLangtFramITid",
  tittel: "Søknadstidspunktet ligger for lang fram i tid",
  beskrivelse: "Søknadstidspunktet ligger mer enn 14 dager fram i tid",
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
  avklartAv: null,
  begrunnelse: null,
  kanKvitteres: false,
};

export const virkningstidspunktForLangtFramITid: IAvklaring = {
  id: "test-id-3",
  kode: "VirkningstidspunktForLangtFramItid",
  tittel: "Virkningstidspunkt ligger for lang fram i tid",
  beskrivelse: "Virkningstidspunkt ligger mer enn 14 dager fram i tid",
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
  avklartAv: null,
  begrunnelse: null,
  kanKvitteres: false,
};

export const verneplikt: IAvklaring = {
  id: "test-id-4",
  kode: "Verneplikt",
  tittel: "Verneplikt",
  beskrivelse: "Krever avklaring om verneplikt",
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
  avklartAv: null,
  begrunnelse: null,
  kanKvitteres: false,
};

export const tapAvArbeidstidBeregningsregel: IAvklaring = {
  id: "test-id-5",
  kode: "TapAvArbeidsinntektOgArbeidstid",
  tittel: "Beregningsregel for tap av arbeidsinntekt og arbeidstid",
  kanKvitteres: false,
  beskrivelse:
    "Kun én beregningsregel kan være gyldig til en hver tid.  Velg en av Arbeidstid siste 6 måneder, Arbeidstid siste 12 måneder eller Arbeidstid siste 36 måneder.",
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
  avklartAv: null,
  begrunnelse: null,
};

export const EOSArbeid: IAvklaring = {
  id: "test-id-6",
  kode: "EØSArbeid",
  tittel: "Arbeid i EØS",
  beskrivelse: "Personen har oppgitt arbeid fra EØS",
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
  avklartAv: null,
  begrunnelse: null,
  kanKvitteres: false,
};

export const hattLukkedeSakerSiste8Uker: IAvklaring = {
  id: "test-id-7",
  kode: "HattLukkedeSakerSiste8Uker",
  tittel: "Hatt lukkede saker siste 8 uker",
  beskrivelse: "Personen har lukkede saker i Arena siste 8 uker",
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
  avklartAv: null,
  begrunnelse: null,
  kanKvitteres: false,
};

export const samordnes: IAvklaring = {
  id: "test-id-8",
  kode: "Samordning",
  tittel: "Om reduserte ytelser fra folketrygden som skal samordnes",
  beskrivelse: "Finne ut om det er noen reduserte ytelser fra folketrygden som skal samordnes",
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
  avklartAv: null,
  begrunnelse: null,
  kanKvitteres: false,
};

export const inntektNesteKalendermaaned: IAvklaring = {
  id: "test-id-9",
  kode: "InntektNesteKalendermåned",
  tittel: "Har innrapport inntekt for neste måned",
  beskrivelse: "Personen har inntekter som tilhører neste inntektsperiode",
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
  avklartAv: null,
  begrunnelse: null,
  kanKvitteres: false,
};

export const jobbetUtenforNorge: IAvklaring = {
  id: "test-id-10",
  kode: "JobbetUtenforNorge",
  tittel: "Arbeid utenfor Norge",
  beskrivelse: "Personen har oppgitt arbeid utenfor Norge",
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
  avklartAv: null,
  begrunnelse: null,
  kanKvitteres: false,
};

export const muligGjenopptak: IAvklaring = {
  id: "test-id-11",
  kode: "MuligGjenopptak",
  tittel: "Mulig gjenopptak",
  beskrivelse: "Personen har åpne saker i Arena som kan være gjenopptak",
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
  avklartAv: null,
  begrunnelse: null,
  kanKvitteres: false,
};

export const svangerskapsrelaterteSykepenger: IAvklaring = {
  id: "test-id-12",
  kode: "SvangerskapsrelaterteSykepenger",
  tittel: "Har hatt sykepenger som kan være svangerskapsrelatert",
  beskrivelse: "Personen har sykepenger som kan være svangerskapsrelaterte",
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
  avklartAv: null,
  begrunnelse: null,
  kanKvitteres: false,
};

export const onskerEtterRapporteringsfrist: IAvklaring = {
  id: "test-id-13",
  kode: "ØnskerEtterRapporteringsfrist",
  tittel: "Ønsker dagpenger etter rapporteringsfrist",
  beskrivelse: "Personen ønsker dagpenger etter rapporteringsfrist",
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
  avklartAv: null,
  begrunnelse: null,
  kanKvitteres: false,
};

export const totrinnskontroll: IAvklaring = {
  id: "test-id-14",
  kode: "Totrinnskontroll",
  tittel: "Totrinnskontroll",
  beskrivelse: "Totrinnskontroll",
  kanKvitteres: true,
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
  avklartAv: null,
  begrunnelse: null,
};

export const BrukerUnder18: IAvklaring = {
  id: "test-id-15",
  kode: "BrukerUnder18",
  tittel: "Bruker er under 18",
  beskrivelse: "Bruker er under 18 og skal ikke ha automatisk behandling",
  kanKvitteres: true,
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
  avklartAv: null,
  begrunnelse: null,
};

export const BarnMaaGodkjennes: IAvklaring = {
  id: "test-id-16",
  kode: "BarnMåGodkjennes",
  tittel: "Barn må godkjennes for å gi barnetillegg",
  beskrivelse: "Barn må godkjennes om de skal gi barnetillegg",
  kanKvitteres: true,
  status: "Åpen",
  maskinelt: false,
  sistEndret: "2021-01-02T14:27:33",
  avklartAv: null,
  begrunnelse: null,
};
