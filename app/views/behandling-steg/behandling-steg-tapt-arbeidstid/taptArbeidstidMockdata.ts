import type { ITaptArberidstidData } from "~/views/behandling-steg/behandling-steg-tapt-arbeidstid/BehandlingStegTaptArbeidstid";

export const mockTaptArberidstid: ITaptArberidstidData = {
  regel: {
    valgt: "siste-6",
    valg: ["siste-6", "siste-12", "siste-36"],
  },
  soknadFakta: [
    { id: "vanlig-arbeidstid", svar: "Har hatt fastsatt vanlig arbeidstid i minst 6 måneder" },
    { id: "siste-arbeidsdato", svar: "12.05.24" },
  ],
  sisteArbeidsdatoAareg: "12.05.24",
  taptArbeidstidProsent: 100,
  oppfylt: true,
};
