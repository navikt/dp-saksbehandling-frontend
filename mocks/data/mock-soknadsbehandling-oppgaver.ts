import type { IOppgave, ISteg } from "~/models/oppgave.server";
import { mockPerson } from "./mock-oppgaver";

export const generiskSoknadMock: IOppgave = {
  oppgaveId: "msw-generisk-soknad",
  behandlingId: "msw-generisk-behandling-id",
  personIdent: "msw-personmock",
  person: mockPerson,
  tidspunktOpprettet: "2024-01-01",
  tilstand: "KLAR_TIL_BEHANDLING",
  emneknagger: ["Søknadsbehandling"],
  journalpostIder: ["123456789"],
  steg: [
    {
      beskrivendeId: "Alder",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
    {
      beskrivendeId: "Mangler dokumentasjon",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
    {
      beskrivendeId: "Utdanning",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
    {
      beskrivendeId: "Reell arbeidsøker",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
    {
      beskrivendeId: "Ikke utestengt",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
    {
      beskrivendeId: "Lovvalg",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
    {
      beskrivendeId: "Medlem",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
    {
      beskrivendeId: "Opphold i Norge",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
    {
      beskrivendeId: "Registrert som arbeidsøker",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
    {
      beskrivendeId: "Minste arbeidsinntekt",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
    {
      beskrivendeId: "Tapt arbeidsinntekt",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
    {
      beskrivendeId: "Tapt arbeidstid",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
    {
      beskrivendeId: "Ikke fulle folketrygdytelser",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
  ],
  opplysninger: [
    {
      opplysningNavn: "soknaddato",
      dataType: "LOCALDATE",
      status: "FAKTUM",
      redigerbar: false,
      kilde: null,
      svar: {
        verdi: "true",
      },
    },
    {
      opplysningNavn: "virkningsdato",
      dataType: "LOCALDATE",
      status: "HYPOTESE",
      redigerbar: true,
      kilde: null,
      svar: {
        verdi: "true",
      },
    },
    {
      opplysningNavn: "beregningsdato",
      dataType: "LOCALDATE",
      status: "HYPOTESE",
      redigerbar: true,
      kilde: null,
      svar: {
        verdi: "true",
      },
    },
  ],
};

const aldersKravOppfyltEksempel: ISteg = {
  beskrivendeId: "Alder",
  tilstand: "MANUELL_BEHANDLING",
  opplysninger: [
    {
      opplysningNavn: "Foedselsdato",
      dataType: "LOCALDATE",
      status: "FAKTUM",
      redigerbar: false,
      kilde: null,
      svar: {
        verdi: "1976-10-19",
      },
    },
    {
      opplysningNavn: "Siste mulige dag alderskravet er oppfylt",
      dataType: "LOCALDATE",
      status: "FAKTUM",
      redigerbar: false,
      kilde: null,
      svar: {
        verdi: "2043-10-31",
      },
    },
    {
      opplysningNavn: "Virkningsdato",
      dataType: "LOCALDATE",
      status: "FAKTUM",
      redigerbar: false,
      kilde: null,
      svar: {
        verdi: "2023-05-12",
      },
    },
  ],
};

function byttUtSteg(steg: ISteg[], listeAvStegSomSkalByttesUt: ISteg[]): ISteg[] {
  return steg.map(
    (steg) =>
      listeAvStegSomSkalByttesUt.find(
        (stegSomSkalByttes) => stegSomSkalByttes.beskrivendeId === steg.beskrivendeId,
      ) || steg,
  );
}

export const soknadMedAlderskravMock = {
  ...generiskSoknadMock,
  oppgaveId: "msw-soknad-med-alder-oppfylt",
  steg: [...byttUtSteg(generiskSoknadMock.steg, [aldersKravOppfyltEksempel])],
};

//todo: hvor putter vi informasjon fra registre hvis det ikke skal være opplysninger vi bekrefter?
const reellArbeidssokerOppfyltEksempel: ISteg = {
  beskrivendeId: "Reell arbeidsøker",
  tilstand: "MANUELL_BEHANDLING",
  opplysninger: [],
};

export const soknadMedReellArbeidssokerAltJaMock = {
  ...generiskSoknadMock,
  oppgaveId: "msw-soknad-med-arbeidssoker-alt-ja",
  personIdent: "msw-reell-arbeidssoker-alle-ja",
  steg: [...byttUtSteg(generiskSoknadMock.steg, [reellArbeidssokerOppfyltEksempel])],
};

//todo: hvor putter vi informasjon fra registre hvis det ikke skal være opplysninger vi bekrefter?
const reellArbeidssokerFritakEksempel: ISteg = {
  beskrivendeId: "Reell arbeidsøker",
  tilstand: "MANUELL_BEHANDLING",
  opplysninger: [
    {
      opplysningNavn: "Fritak fra å ta jobb i hele Norge",
      dataType: "BOOLEAN",
      status: "HYPOTESE",
      redigerbar: true,
      kilde: null,
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
