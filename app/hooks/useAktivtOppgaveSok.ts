import { useSyncExternalStore } from "react";

const NØKKEL = "aktivt-oppgave-sok";
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

export function setAktivtOppgaveSok(sok: string) {
  sessionStorage.setItem(NØKKEL, sok);
  lyttere.forEach((lytter) => lytter());
}

/** Det forrige søket som ble brukt i oppgaver til behandling */
export function useAktivtOppgaveSok() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
