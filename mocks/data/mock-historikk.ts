import { components } from "../../openapi/saksbehandling-typer";

export const mockHistorikk: components["schemas"]["OppgaveHistorikk"][] = [
  {
    type: "statusendring",
    tittel: "Ferdig behandlet",
    tidspunkt: "2024-09-18T14:43:00",
    behandler: { navn: "Bodill Åpersille", rolle: "beslutter" },
  },
  {
    type: "statusendring",
    tittel: "Under kontroll",
    tidspunkt: "2024-09-18T13:43:00",
    behandler: { navn: "Bodill Åpersille", rolle: "beslutter" },
  },
  {
    type: "statusendring",
    tittel: "Sendt til kontroll",
    tidspunkt: "2024-09-18T12:43:00",
    behandler: { navn: "Truls Trubadur", rolle: "saksbehandler" },
  },
  {
    type: "statusendring",
    tittel: "Under behandling",
    tidspunkt: "2024-09-18T11:43:00",
    behandler: { navn: "Truls Trubadur", rolle: "saksbehandler" },
  },
  {
    type: "statusendring",
    tittel: "Klar til behandling",
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
    tittel: "Under kontroll",
    tidspunkt: "2024-09-18T08:43:00",
    behandler: { navn: "Bodill Åpersille", rolle: "beslutter" },
  },
  {
    type: "statusendring",
    tittel: "Sendt til kontroll",
    tidspunkt: "2024-09-18T07:43:00",
    behandler: { navn: "Truls Trubadur", rolle: "saksbehandler" },
  },
  {
    type: "statusendring",
    tittel: "nder behandling",
    tidspunkt: "2024-09-18T05:43:00",
    behandler: { navn: "Truls Trubadur", rolle: "saksbehandler" },
  },
  {
    type: "statusendring",
    tittel: "att på vent frem til 26.09.24",
    tidspunkt: "2024-09-18T04:43:00",
    behandler: { navn: "Truls Trubadur", rolle: "saksbehandler" },
  },
  {
    type: "statusendring",
    tittel: "nder behandling",
    tidspunkt: "2024-09-18T08:43:00",
    behandler: { navn: "Truls Trubadur", rolle: "saksbehandler" },
  },
];
