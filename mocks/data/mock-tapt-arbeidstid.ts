import type { ITaptArberidstidData } from "~/views/oppgave-steg-tapt-arbeidstid/OppgaveStegTaptArbeidstid";
import type { IArbeidsforhold } from "~/components/arbeidsforhold/Arbeidsforhold";

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

export const mockArbeidsforholdAareg: IArbeidsforhold[] = [
  {
    navn: "Arbeidsgiver AS",
    stillingsprosent: 100,
    arbeidstimerUke: 37.5,
    land: "Sverige",
    startDato: "12.12.2022",
    sluttDato: "21.06.2023",
  },
  {
    navn: "Forrige jobben Min AS",
    stillingsprosent: 50,
    arbeidstimerUke: 18.75,
    land: "Norge",
    startDato: "01.2.2021",
    sluttDato: "12.12.2022",
  },
];

export const mockArbeidsforholdSoknad: IArbeidsforhold[] = [
  {
    navn: "Arbeidsgiver AS",
    stillingsprosent: 100,
    arbeidstimerUke: 37.5,
    land: "Sverige",
    startDato: "12.12.2022",
    sluttDato: "21.06.2023",
  },
  {
    navn: "Forrige jobben Min AS",
    stillingsprosent: 50,
    arbeidstimerUke: 18.75,
    land: "Norge",
    startDato: "01.2.2021",
    sluttDato: "12.12.2022",
  },
];
