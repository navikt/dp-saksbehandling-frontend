import { components } from "../../openapi/saksbehandling-typer";
import { mockHistorikk } from "./mock-historikk";

export const mockSikkerhetstiltak: components["schemas"]["Sikkerhetstiltak"][] = [
  { beskrivelse: "To i samtale", gyldigTom: "2025-12-01" },
  { beskrivelse: "Ikke fysisk", gyldigTom: "2025-12-01" },
];

export const mockPerson: components["schemas"]["Person"] = {
  alder: 74,
  fodselsdato: "12.01.1954",
  kjonn: "MANN",
  statsborgerskap: "Norsk",
  fornavn: "Donald",
  mellomnavn: "Dægg",
  etternavn: "Duck",
  ident: "12345678910",
  sikkerhetstiltak: mockSikkerhetstiltak,
  skjermesSomEgneAnsatte: false,
  adressebeskyttelseGradering: "UGRADERT",
};

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
  behandlingId: "019353b5-3ee6-7693-8fdd-649153c18f74",
  person: mockPerson,
  lovligeEndringer: mockLovligeEndringer,
  saksbehandler: { ...mockOppgaveSaksbehandler, ident: "ident456" },
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Innvilgelse"],
  tilstand: "UNDER_BEHANDLING",
  journalpostIder: ["598116231", "639664664"],
  historikk: mockHistorikk,
  adressebeskyttelseGradering: "FORTROLIG",
  soknadId: "931f3f80-a41b-4aa4-8d39-7b517dcef44c",
};

export const underBehandlingMinOppgaveKreverKontroll: components["schemas"]["Oppgave"] = {
  oppgaveId: "015e3737-9df8-7ee4-94a6-317fgsa10147",
  behandlingId: "019353b5-3ee6-7693-8fdd-649153c18f74",
  person: mockPerson,
  lovligeEndringer: mockLovligeEndringer,
  saksbehandler: mockOppgaveSaksbehandler,
  beslutter: mockOppgaveBeslutter,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Innvilgelse"],
  tilstand: "UNDER_KONTROLL",
  journalpostIder: ["598116231", "639664664"],
  historikk: mockHistorikk,
  adressebeskyttelseGradering: "STRENGT_FORTROLIG",
  soknadId: "931f3f80-a41b-4aa4-8d39-7b517dcef44d",
};

export const underBehandlingInnvilgelseMinOppgave: components["schemas"]["Oppgave"] = {
  oppgaveId: "018f05a0-667a-7597-a835-fab53189d051",
  behandlingId: "019353b5-3ee6-7693-8fdd-649153c18f74",
  person: mockPerson,
  lovligeEndringer: mockLovligeEndringer,
  saksbehandler: mockOppgaveSaksbehandler,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Innvilgelse"],
  tilstand: "UNDER_BEHANDLING",
  journalpostIder: ["598116231", "639664664"],
  historikk: mockHistorikk,
  adressebeskyttelseGradering: "UGRADERT",
  soknadId: "931f3f80-a41b-4aa4-8d39-7b517dcef44e",
};

export const ferdigBehandletOppgave: components["schemas"]["Oppgave"] = {
  oppgaveId: "018e3755-9df8-7aa4-94a6-317fada10999",
  behandlingId: "019353b5-3ee6-7693-8fdd-649153c18f74",
  person: mockPerson,
  lovligeEndringer: mockLovligeEndringer,
  saksbehandler: mockOppgaveSaksbehandler,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: [],
  tilstand: "FERDIG_BEHANDLET",
  journalpostIder: ["598116231", "639664664"],
  historikk: mockHistorikk,
  adressebeskyttelseGradering: "UGRADERT",
  soknadId: "931f3f80-a41b-4aa4-8d39-7b517dcef44f",
};

export const mockOppgaver: components["schemas"]["Oppgave"][] = [
  underBehandlingInnvilgelseMinOppgave,
  underBehandlingMinOppgaveKreverKontroll,
  underBehandlingAnnenSaksbehandlerOppgave,
  ferdigBehandletOppgave,
];

export const mockListeOppgaver: components["schemas"]["OppgaveOversikt"][] = [
  konverterOppgaveTilListeOppgave(underBehandlingInnvilgelseMinOppgave),
  konverterOppgaveTilListeOppgave(underBehandlingMinOppgaveKreverKontroll),
  konverterOppgaveTilListeOppgave(underBehandlingAnnenSaksbehandlerOppgave),
  konverterOppgaveTilListeOppgave(ferdigBehandletOppgave),
];

export function konverterOppgaveTilListeOppgave(
  oppgave: components["schemas"]["Oppgave"],
): components["schemas"]["OppgaveOversikt"] {
  return {
    adressebeskyttelseGradering: "UGRADERT",
    behandlingId: oppgave.behandlingId,
    emneknagger: oppgave.emneknagger,
    oppgaveId: oppgave.oppgaveId,
    personIdent: oppgave.person.ident,
    behandlerIdent: oppgave.saksbehandler?.ident,
    skjermesSomEgneAnsatte: false,
    tidspunktOpprettet: oppgave.tidspunktOpprettet,
    tilstand: oppgave.tilstand,
  };
}
