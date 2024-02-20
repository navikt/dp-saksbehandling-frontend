export interface IOppgaveFilter {
  id: string;
  emneknagger: string[];
}

export const mockOppgaveFilter: IOppgaveFilter[] = [
  { id: "soknad", emneknagger: ["eos", "avslag-minsteinntekt", "permitert"] },
  { id: "klage-og-anke", emneknagger: ["eos", "avslag-minsteinntekt", "permitert"] },
  { id: "korrigerte-meldekort", emneknagger: ["eos", "permitert"] },
];
