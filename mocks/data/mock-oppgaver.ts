import { components } from "../../openapi/saksbehandling-typer";
import { mockHistorikk } from "./mock-historikk";
import { mockGradertPerson, mockPerson } from "./mock-person";

export const mockOppgaveSaksbehandler: components["schemas"]["Behandler"] = {
  fornavn: "Saksbehandler",
  etternavn: "Behandlersen",
  ident: "Z993298",
  enhet: {
    enhetNr: "2970",
    navn: "IT-avdelingen",
    postadresse: "",
  },
};

export const mockOppgaveBeslutter: components["schemas"]["Behandler"] = {
  fornavn: "Saksbehandler",
  etternavn: "Besluttersen",
  ident: "Z993298",
  enhet: {
    enhetNr: "2970",
    navn: "IT-avdelingen",
    postadresse: "",
  },
};

const mockLovligeEndringer: components["schemas"]["LovligeEndringer"] = {
  paaVentAarsaker: [
    "AVVENT_DOKUMENTASJON",
    "AVVENT_SVAR",
    "AVVENT_SVAR_PÅ_FORESPØRSEL",
    "AVVENT_MELDEKORT",
    "AVVENT_RAPPORTERINGSFRIST",
    "ANNET",
  ],
};

export const underBehandlingAnnenSaksbehandlerOppgave: components["schemas"]["Oppgave"] = {
  oppgaveId: "518e3737-9df8-7ee4-91a6-317fada10987",
  behandlingType: "RETT_TIL_DAGPENGER",
  behandlingId: "019353b5-3ee6-7693-8fdd-649153c18f74",
  person: mockPerson,
  lovligeEndringer: mockLovligeEndringer,
  saksbehandler: { ...mockOppgaveSaksbehandler, ident: "ident456" },
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Innvilgelse", "Arbeidstid"],
  tilstand: "UNDER_BEHANDLING",
  journalpostIder: ["598116231", "639664664"],
  historikk: mockHistorikk,
  soknadId: "931f3f80-a41b-4aa4-8d39-7b517dcef44c",
  meldingOmVedtakKilde: "DP_SAK",
  kontrollertBrev: "IKKE_RELEVANT",
};

export const underKontrollMinOppgave: components["schemas"]["Oppgave"] = {
  oppgaveId: "015e3737-9df8-7ee4-94a6-317fgsa10147",
  behandlingType: "RETT_TIL_DAGPENGER",
  behandlingId: "019353b5-3ee6-7693-8fdd-649153c18f74",
  person: mockGradertPerson,
  lovligeEndringer: mockLovligeEndringer,
  saksbehandler: mockOppgaveSaksbehandler,
  beslutter: { ...mockOppgaveBeslutter, ident: "ident456" },
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Innvilgelse"],
  tilstand: "UNDER_KONTROLL",
  journalpostIder: ["639664664", "598116231"],
  historikk: mockHistorikk,
  soknadId: "931f3f80-a41b-4aa4-8d39-7b517dcef44d",
  meldingOmVedtakKilde: "GOSYS",
  kontrollertBrev: "NEI",
};

export const underKontrollAnnenSaksbehandler: components["schemas"]["Oppgave"] = {
  oppgaveId: "015e3737-9df8-7ee4-94a6-117fgsa10147",
  behandlingType: "RETT_TIL_DAGPENGER",
  behandlingId: "019353b5-3ee6-7693-8fdd-649153c18f74",
  person: mockGradertPerson,
  lovligeEndringer: mockLovligeEndringer,
  saksbehandler: { ...mockOppgaveSaksbehandler, ident: "ident456" },
  beslutter: mockOppgaveBeslutter,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Innvilgelse"],
  tilstand: "UNDER_KONTROLL",
  journalpostIder: ["639664664", "598116231"],
  historikk: mockHistorikk,
  soknadId: "931f3f80-a41b-4aa4-8d39-7b517dcef44d",
  meldingOmVedtakKilde: "GOSYS",
  kontrollertBrev: "JA",
};

export const underBehandlingInnvilgelseMinOppgave: components["schemas"]["Oppgave"] = {
  oppgaveId: "018f05a0-667a-7597-a835-fab53189d051",
  behandlingType: "RETT_TIL_DAGPENGER",
  behandlingId: "019353b5-3ee6-7693-8fdd-649153c18f74",
  person: mockGradertPerson,
  lovligeEndringer: mockLovligeEndringer,
  saksbehandler: mockOppgaveSaksbehandler,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Innvilgelse"],
  tilstand: "UNDER_BEHANDLING",
  journalpostIder: [
    "598116231",
    "639664664",
    "639664665",
    "598116232",
    "639664665",
    "598116238",
    "598116239",
  ],
  historikk: mockHistorikk,
  soknadId: "931f3f80-a41b-4aa4-8d39-7b517dcef44e",
  utsattTilDato: "2025-07-20",
  meldingOmVedtakKilde: "DP_SAK",
  kontrollertBrev: "IKKE_RELEVANT",
};

export const underBehandlingAvslagOppgaveMineOppgave: components["schemas"]["Oppgave"] = {
  oppgaveId: "018e2229-9df8-7aa4-94a6-318fada10999",
  behandlingType: "RETT_TIL_DAGPENGER",
  behandlingId: "019391c0-d9f5-78d9-8704-02f749bfb17b",
  person: mockPerson,
  lovligeEndringer: mockLovligeEndringer,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Avslag"],
  tilstand: "UNDER_BEHANDLING",
  journalpostIder: ["598116231", "639664664"],
  historikk: mockHistorikk,
  saksbehandler: mockOppgaveSaksbehandler,
  soknadId: "931f3f80-a41b-4aa4-8d39-7b517dcef44f",
  meldingOmVedtakKilde: "DP_SAK",
  kontrollertBrev: "IKKE_RELEVANT",
};

export const underBehandlingMeldekortOppgaveMineOppgave: components["schemas"]["Oppgave"] = {
  oppgaveId: "018e2229-6969-7aa4-94a6-318fada10999",
  behandlingType: "RETT_TIL_DAGPENGER",
  behandlingId: "0196f70d-baf3-708a-8741-6e9c5e03448a",
  person: mockGradertPerson,
  lovligeEndringer: mockLovligeEndringer,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Meldekort"],
  tilstand: "UNDER_BEHANDLING",
  journalpostIder: ["598116231", "639664664"],
  historikk: mockHistorikk,
  saksbehandler: mockOppgaveSaksbehandler,
  soknadId: "931f3f80-a41b-4aa4-8d39-7b517dcef44f",
  meldingOmVedtakKilde: "GOSYS",
  kontrollertBrev: "NEI",
};

export const ferdigBehandletOppgave: components["schemas"]["Oppgave"] = {
  oppgaveId: "018e3755-9df8-7aa4-94a6-317fada10999",
  behandlingType: "RETT_TIL_DAGPENGER",
  behandlingId: "019353b5-3ee6-7693-8fdd-649153c18f74",
  person: mockPerson,
  lovligeEndringer: mockLovligeEndringer,
  saksbehandler: mockOppgaveSaksbehandler,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Innvilgelse"],
  tilstand: "FERDIG_BEHANDLET",
  journalpostIder: ["598116231", "639664664"],
  historikk: mockHistorikk,
  soknadId: "931f3f80-a41b-4aa4-8d39-7b517dcef44f",
  meldingOmVedtakKilde: "GOSYS",
  kontrollertBrev: "JA",
};

export const ferdigBehandletAutomatiskOppgave: components["schemas"]["Oppgave"] = {
  oppgaveId: "018e3755-9df8-7aa4-94a6-318fada10999",
  behandlingType: "RETT_TIL_DAGPENGER",
  behandlingId: "019353b5-3ee6-7693-8fdd-649153c18f74",
  person: mockGradertPerson,
  lovligeEndringer: mockLovligeEndringer,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Automatisk behandlet"],
  tilstand: "FERDIG_BEHANDLET",
  journalpostIder: ["598116231", "639664664"],
  historikk: mockHistorikk,
  soknadId: "931f3f80-a41b-4aa4-8d39-7b517dcef44f",
  meldingOmVedtakKilde: "DP_SAK",
  kontrollertBrev: "IKKE_RELEVANT",
};

export const klageOppgave: components["schemas"]["Oppgave"] = {
  oppgaveId: "018e9999-9df8-7aa4-94a6-318fada10999",
  behandlingType: "KLAGE",
  behandlingId: "018e2222-9df8-7aa4-94a6-318fada10999",
  person: mockPerson,
  lovligeEndringer: mockLovligeEndringer,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Klage"],
  tilstand: "UNDER_BEHANDLING",
  journalpostIder: ["598116231", "639664664"],
  historikk: mockHistorikk,
  saksbehandler: mockOppgaveSaksbehandler,
  soknadId: "931f3f80-a41b-4aa4-8d39-7b517dcef44f",
  meldingOmVedtakKilde: "DP_SAK",
  kontrollertBrev: "IKKE_RELEVANT",
};

export const ferdigBehandlerKlageOppgave: components["schemas"]["Oppgave"] = {
  oppgaveId: "018e1119-9df8-7aa4-94a6-318fada10999",
  behandlingType: "KLAGE",
  behandlingId: "018e2222-9df8-7aa4-94a6-318fada10999",
  person: mockPerson,
  lovligeEndringer: mockLovligeEndringer,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Klage"],
  tilstand: "FERDIG_BEHANDLET",
  journalpostIder: ["598116231", "639664664"],
  historikk: mockHistorikk,
  saksbehandler: mockOppgaveSaksbehandler,
  soknadId: "931f3f80-a41b-4aa4-8d39-7b517dcef44f",
  meldingOmVedtakKilde: "DP_SAK",
  kontrollertBrev: "IKKE_RELEVANT",
};

export const mockOppgaver: components["schemas"]["Oppgave"][] = [
  underBehandlingInnvilgelseMinOppgave,
  underBehandlingAvslagOppgaveMineOppgave,
  underBehandlingMeldekortOppgaveMineOppgave,
  underKontrollMinOppgave,
  underKontrollAnnenSaksbehandler,
  underBehandlingAnnenSaksbehandlerOppgave,
  ferdigBehandletOppgave,
  ferdigBehandletAutomatiskOppgave,
  klageOppgave,
  ferdigBehandlerKlageOppgave,
];
