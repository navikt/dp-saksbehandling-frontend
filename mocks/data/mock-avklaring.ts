import type { IAvklaring } from "~/models/behandling.server";

export const andreYtelser: IAvklaring = {
  id: "21235-test-id",
  kode: "AndreYtelser",
  tittel: "Andre ytelser",
  beskrivelse: "Personen har oppgitt andre ytelser",
};

export const soknadstidspunktForLangtFramITid: IAvklaring = {
  id: "21235-test-id",
  kode: "SøknadstidspunktForLangtFramITid",
  tittel: "Søknadstidspunktet ligger for lang fram i tid",
  beskrivelse: "Søknadstidspunktet ligger mer enn 14 dager fram i tid",
};

export const virkningstidspunktForLangtFramITid: IAvklaring = {
  id: "21235-test-id",
  kode: "VirkningstidspunktForLangtFramItid",
  tittel: "Virkningstidspunkt ligger for lang fram i tid",
  beskrivelse: "Virkningstidspunkt ligger mer enn 14 dager fram i tid",
};

export const verneplikt: IAvklaring = {
  id: "21235-test-id",
  kode: "Verneplikt",
  tittel: "Verneplikt",
  beskrivelse: "Krever avklaring om verneplikt",
};

export const tapAvArbeidstidBeregningsregel: IAvklaring = {
  id: "21235-test-id",
  kode: "TapAvArbeidsinntektOgArbeidstid",
  tittel: "Beregningsregel for tap av arbeidsinntekt og arbeidstid",
  kanKvitteres: false,
  beskrivelse:
    "Kun én beregningsregel kan være gyldig til en hver tid.  Velg en av Arbeidstid siste 6 måneder, Arbeidstid siste 12 måneder eller Arbeidstid siste 36 måneder.",
};

export const EOSArbeid: IAvklaring = {
  id: "21235-test-id",
  kode: "EØSArbeid",
  tittel: "Arbeid i EØS",
  beskrivelse: "Personen har oppgitt arbeid fra EØS",
};

export const hattLukkedeSakerSiste8Uker: IAvklaring = {
  id: "21235-test-id",
  kode: "HattLukkedeSakerSiste8Uker",
  tittel: "Hatt lukkede saker siste 8 uker",
  beskrivelse: "Personen har lukkede saker i Arena siste 8 uker",
};

export const samordnes: IAvklaring = {
  id: "21235-test-id",
  kode: "Samordning",
  tittel: "Om reduserte ytelser fra folketrygden som skal samordnes",
  beskrivelse: "Finne ut om det er noen reduserte ytelser fra folketrygden som skal samordnes",
};

export const inntektNesteKalendermaaned: IAvklaring = {
  id: "21235-test-id",
  kode: "InntektNesteKalendermåned",
  tittel: "Har innrapport inntekt for neste måned",
  beskrivelse: "Personen har inntekter som tilhører neste inntektsperiode",
};

export const jobbetUtenforNorge: IAvklaring = {
  id: "21235-test-id",
  kode: "JobbetUtenforNorge",
  tittel: "Arbeid utenfor Norge",
  beskrivelse: "Personen har oppgitt arbeid utenfor Norge",
};

export const muligGjenopptak: IAvklaring = {
  id: "21235-test-id",
  kode: "MuligGjenopptak",
  tittel: "Mulig gjenopptak",
  beskrivelse: "Personen har åpne saker i Arena som kan være gjenopptak",
};

export const svangerskapsrelaterteSykepenger: IAvklaring = {
  id: "21235-test-id",
  kode: "SvangerskapsrelaterteSykepenger",
  tittel: "Har hatt sykepenger som kan være svangerskapsrelatert",
  beskrivelse: "Personen har sykepenger som kan være svangerskapsrelaterte",
};

export const onskerEtterRapporteringsfrist: IAvklaring = {
  id: "21235-test-id",
  kode: "ØnskerEtterRapporteringsfrist",
  tittel: "Ønsker dagpenger etter rapporteringsfrist",
  beskrivelse: "Personen ønsker dagpenger etter rapporteringsfrist",
};

export const totrinnskontroll: IAvklaring = {
  id: "21235-test-id",
  kode: "Totrinnskontroll",
  tittel: "Totrinnskontroll",
  beskrivelse: "Totrinnskontroll",
  kanKvitteres: true,
};

export const BrukerUnder18: IAvklaring = {
  id: "21235-test-id",
  kode: "BrukerUnder18",
  tittel: "Bruker er under 18",
  beskrivelse: "Bruker er under 18 og skal ikke ha automatisk behandling",
  kanKvitteres: true,
};

export const BarnMaaGodkjennes: IAvklaring = {
  id: "21235-test-id",
  kode: "BarnMåGodkjennes",
  tittel: "Barn må godkjennes for å gi barnetillegg",
  beskrivelse: "Barn må godkjennes om de skal gi barnetillegg",
  kanKvitteres: true,
};
