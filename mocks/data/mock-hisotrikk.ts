import type { IOppgaveHistorikk } from "~/models/oppgave.server";

export const mockHistorikk: IOppgaveHistorikk[] = [
  {
    type: "melding",
    tittel: "Melding om vedtak sendt",
    tidspunkt: "2024-09-18T16:43:00",
    behandler: { navn: "dp-saksbehandling", rolle: "system" },
  },
  {
    type: "melding",
    tittel: "Vedtak lagret i Arena",
    tidspunkt: "2024-09-18T15:43:00",
    behandler: { navn: "dp-behandling", rolle: "system" },
  },
  {
    type: "statusendring",
    tittel: "Ny status:",
    body: " Ferdig behandlet",
    tidspunkt: "2024-09-18T14:43:00",
    behandler: { navn: "Bodill Åpersille", rolle: "beslutter" },
  },
  {
    type: "statusendring",
    tittel: "Ny status:",
    body: " Under kontroll",
    tidspunkt: "2024-09-18T13:43:00",
    behandler: { navn: "Bodill Åpersille", rolle: "beslutter" },
  },
  {
    type: "statusendring",
    tittel: "Ny status:",
    body: " Sendt til kontroll",
    tidspunkt: "2024-09-18T12:43:00",
    behandler: { navn: "Truls Trubadur", rolle: "saksbehandler" },
  },
  {
    type: "statusendring",
    tittel: "Ny status:",
    body: " Under behandling",
    tidspunkt: "2024-09-18T11:43:00",
    behandler: { navn: "Truls Trubadur", rolle: "saksbehandler" },
  },
  {
    type: "statusendring",
    tittel: "Ny status:",
    body: " Klar til behandling",
    tidspunkt: "2024-09-18T10:43:00",
    behandler: { navn: "Bodill Åpersille" },
  },
  {
    type: "notat",
    tittel: "Notat",
    body: "Denne ble returnert fordi det var for mange skrivefeil i notatet som ble levert når man sendte denne i retur. Dette ble begrunnet med at det var for mange skrivefeil i notatet som ble levert når man sendte denne i retur.",
    tidspunkt: "2024-09-18T09:43:00",
    behandler: { navn: "Bodill Åpersille", rolle: "beslutter" },
  },
  {
    type: "statusendring",
    tittel: "Ny status:",
    body: " Under kontroll",
    tidspunkt: "2024-09-18T08:43:00",
    behandler: { navn: "Bodill Åpersille", rolle: "beslutter" },
  },
  {
    type: "statusendring",
    tittel: "Ny status:",
    body: " Sendt til kontroll",
    tidspunkt: "2024-09-18T07:43:00",
    behandler: { navn: "Truls Trubadur", rolle: "saksbehandler" },
  },
  {
    type: "endre-opplysning",
    tittel: "Endret opplysning",
    body: "Arbeidsinntekt siste 12 mnd: 185 300 kr → 189 800 kr",
    tidspunkt: "2024-09-18T06:43:00",
    behandler: { navn: "Truls Trubadur", rolle: "saksbehandler" },
  },
  {
    type: "statusendring",
    tittel: "Ny status:",
    body: "Under behandling",
    tidspunkt: "2024-09-18T05:43:00",
    behandler: { navn: "Truls Trubadur", rolle: "saksbehandler" },
  },
  {
    type: "statusendring",
    tittel: "Ny status:",
    body: "Satt på vent frem til 26.09.24",
    tidspunkt: "2024-09-18T04:43:00",
    behandler: { navn: "Truls Trubadur", rolle: "saksbehandler" },
  },
  {
    type: "endre-opplysning",
    tittel: "Endret opplysning",
    body: "Beregningregel: Arbeidstid siste 6 måneder: Ja → Nei",
    tidspunkt: "2024-09-18T03:43:00",
    behandler: { navn: "dp-behandling", rolle: "system" },
  },
  {
    type: "endre-opplysning",
    tittel: "Endret opplysning",
    body: "Beregnet vanlig arbeidstid per uke før tap: 37,5 t → 22,5 t",
    tidspunkt: "2024-09-18T02:43:00",
    behandler: { navn: "Truls Trubadur", rolle: "saksbehandler" },
  },
  {
    type: "statusendring",
    tittel: "Ny status:",
    body: "Under behandling",
    tidspunkt: "2024-09-18T08:43:00",
    behandler: { navn: "Truls Trubadur", rolle: "saksbehandler" },
  },
  {
    type: "melding",
    tittel: "Oppgave opprettet",
    tidspunkt: "2024-09-18T01:43:00",
    behandler: { navn: "dp-saksbehandling", rolle: "system" },
  },
];
