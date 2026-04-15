import { components } from "openapi/saksbehandling-typer";

export const mockGenerellOppgave: components["schemas"]["GenerellOppgave"] = {
  behandlingId: "0198c672-333d-7701-a986-76b0ca6b225d",
  tittel: "Manuell sjekk av inntektsopplysninger",
  beskrivelse:
    "Bruker har rapportert inntekt som avviker vesentlig fra registrerte opplysninger i A-ordningen. Det må gjøres en manuell vurdering av inntektsgrunnlaget for perioden januar til mars 2025.",
  frist: "2025-10-15",
  strukturertData: {
    "Rapportert inntekt": "45 000 kr",
    "Registrert inntekt (A-ordningen)": "32 000 kr",
    Avvik: "13 000 kr",
    Periode: "Januar - Mars 2025",
    Arbeidsgiver: "Eksempel AS (org.nr 999 888 777)",
  },
  lovligeSaker: [
    {
      sakId: "01979c85-adb5-7b7a-b67d-4265b3b88e81",
      opprettetDato: "2025-06-23T13:21:35.602787",
    },
  ],
};
