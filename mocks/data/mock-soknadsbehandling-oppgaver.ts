import type { IOppgave, IOppgaveSteg } from "~/models/oppgave.server";

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
      dataType: "LocalDate",
      status: "Faktum",
      svar: {
        verdi: "true",
      },
    },
    {
      opplysningNavn: "virkningsdato",
      dataType: "LocalDate",
      status: "Hypotese",
      svar: {
        verdi: "true",
      },
    },
    {
      opplysningNavn: "beregningsdato",
      dataType: "LocalDate",
      status: "Hypotese",
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
      dataType: "LocalDate",
      status: "Faktum",
      svar: {
        verdi: "1976-10-19",
      },
    },
    {
      opplysningNavn: "Siste mulige dag alderskravet er oppfylt",
      dataType: "LocalDate",
      status: "Faktum",
      svar: {
        verdi: "2043-10-31",
      },
    },
    {
      opplysningNavn: "Virkningsdato",
      dataType: "LocalDate",
      status: "Faktum",
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

//todo: hvor putter vi informasjon fra registre hvis det ikke skal være opplysninger vi bekrefter?
const reellArbeidssokerOppfyltEksempel: IOppgaveSteg = {
  stegNavn: "Reell arbeidsøker",
  tilstand: "Groenn",
  opplysninger: [],
};

export const soknadMedReellArbeidssokerAltJaMock = {
  ...generiskSoknadMock,
  oppgaveId: "msw-soknad-med-arbeidssoker-alt-ja",
  personIdent: "msw-reell-arbeidssoker-alle-ja",
  steg: [...byttUtSteg(generiskSoknadMock.steg, [reellArbeidssokerOppfyltEksempel])],
};

//todo: hvor putter vi informasjon fra registre hvis det ikke skal være opplysninger vi bekrefter?
const reellArbeidssokerFritakEksempel: IOppgaveSteg = {
  stegNavn: "Reell arbeidsøker",
  tilstand: "Groenn",
  opplysninger: [
    {
      opplysningNavn: "Fritak fra å ta jobb i hele Norge",
      dataType: "Boolean",
      status: "Hypotese",
      svar: {
        verdi: "True",
      },
    },
  ],
};
export const soknadMedReellArbeidssokerFritakMock = {
  ...generiskSoknadMock,
  oppgaveId: "msw-soknad-med-arbeidssoker-fritak",
  personIdent: "msw-reell-arbeidssoker-fritak",
  steg: [...byttUtSteg(generiskSoknadMock.steg, [reellArbeidssokerFritakEksempel])],
};
