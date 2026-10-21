import { useSyncExternalStore } from "react";

export type OppgavelisteKilde = "kontroll" | "feilutbetaling";

const NØKKEL = "aktivt-oppgave-sok";
const KILDE_NØKKEL = "aktivt-oppgave-sok-kilde";
const lyttere = new Set<() => void>();

function subscribe(lytter: () => void) {
  lyttere.add(lytter);
  return () => {
    lyttere.delete(lytter);
  };
}

function getSnapshot() {
  return sessionStorage.getItem(NØKKEL) ?? "";
}

function getServerSnapshot() {
  return "";
}

function getKildeSnapshot() {
  return (sessionStorage.getItem(KILDE_NØKKEL) as OppgavelisteKilde | null) ?? undefined;
}

function getKildeServerSnapshot() {
  return undefined;
}

export function setAktivtOppgaveSok(sok: string) {
  sessionStorage.setItem(NØKKEL, sok);
  sessionStorage.removeItem(KILDE_NØKKEL);
  lyttere.forEach((lytter) => lytter());
}

export function setOppgavelisteKilde(kilde: OppgavelisteKilde) {
  sessionStorage.setItem(KILDE_NØKKEL, kilde);
  lyttere.forEach((lytter) => lytter());
}

/** Det forrige søket som ble brukt i en oppgaveliste */
export function useAktivtOppgaveSok() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** Hvilken oppgaveliste det forrige søket kom fra. `undefined` betyr oppgaver til behandling */
export function useAktivtOppgaveSokKilde() {
  return useSyncExternalStore(subscribe, getKildeSnapshot, getKildeServerSnapshot);
}

export function hentOppgavelisteSti(kilde?: OppgavelisteKilde) {
  switch (kilde) {
    case "kontroll":
      return "/kontroll-oppgaver";
    case "feilutbetaling":
      return "/feilutbetaling";
    default:
      return "/";
  }
}
