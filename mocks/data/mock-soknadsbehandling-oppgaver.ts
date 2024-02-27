import type { IOppgaveSteg, IOppgave } from "~/models/oppgave.server";

export const generiskSoknadMock: IOppgave = {
  oppgaveId: "msw-generisk-soknad",
  personIdent: "msw-personmock",
  tidspunktOpprettet: "2024-01-01",
  tilstand: "TilBehandling",
  emneknagger: ["Søknadsbehandling"],
  journalpostIder: [],
  steg: [
    {
      stegNavn: "Alder",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      stegNavn: "Mangler dokumentasjon",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      stegNavn: "Utdanning",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      stegNavn: "Reell arbeidsøker",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      stegNavn: "Ikke utestengt",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      stegNavn: "Lovvalg",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      stegNavn: "Medlem",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      stegNavn: "Opphold i Norge",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      stegNavn: "Registrert som arbeidsøker",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      stegNavn: "Minste arbeidsinntekt",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      stegNavn: "Tapt arbeidsinntekt",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      stegNavn: "Tapt arbeidstid",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      stegNavn: "Ikke fulle folketrygdytelser",
      tilstand: "Groenn",
      opplysninger: [],
    },
  ],
  opplysninger: [
    {
      opplysningNavn: "soknaddato",
      opplysningType: "LocalDate",
      svar: {
        verdi: "true",
      },
    },
    {
      opplysningNavn: "virkningsdato",
      opplysningType: "LocalDate",
      svar: {
        verdi: "true",
      },
    },
    {
      opplysningNavn: "beregningsdato",
      opplysningType: "LocalDate",
      svar: {
        verdi: "true",
      },
    },
  ],
};

const aldersKravOppfyltEksempel: IOppgaveSteg = {
  stegNavn: "Alder",
  tilstand: "Groenn",
  opplysninger: [
    {
      opplysningNavn: "Foedselsdato",
      opplysningType: "LocalDate",
      svar: {
        verdi: "1976-10-19",
      },
    },
    {
      opplysningNavn: "Siste mulige dag alderskravet er oppfylt",
      opplysningType: "LocalDate",
      svar: {
        verdi: "2043-10-31",
      },
    },
    {
      opplysningNavn: "Virkningsdato",
      opplysningType: "LocalDate",
      svar: {
        verdi: "2023-05-12",
      },
    },
  ],
};

function byttUtSteg(
  steg: IOppgaveSteg[],
  listeAvStegSomSkalByttesUt: IOppgaveSteg[],
): IOppgaveSteg[] {
  return steg.map(
    (steg) =>
      listeAvStegSomSkalByttesUt.find(
        (stegSomSkalByttes) => stegSomSkalByttes.stegNavn === steg.stegNavn,
      ) || steg,
  );
}

export const soknadMedAlderskravMock = {
  ...generiskSoknadMock,
  oppgaveId: "msw-soknad-med-alder-oppfylt",
  steg: [...byttUtSteg(generiskSoknadMock.steg, [aldersKravOppfyltEksempel])],
};
