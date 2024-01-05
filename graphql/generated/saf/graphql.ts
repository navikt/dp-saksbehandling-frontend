/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
  DateTime: { input: any; output: any };
};

export enum Arkivsaksystem {
  Gsak = "GSAK",
  Psak = "PSAK",
}

export type AvsenderMottaker = {
  __typename?: "AvsenderMottaker";
  erLikBruker: Scalars["Boolean"]["output"];
  id?: Maybe<Scalars["String"]["output"]>;
  land?: Maybe<Scalars["String"]["output"]>;
  navn?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<AvsenderMottakerIdType>;
};

export enum AvsenderMottakerIdType {
  Fnr = "FNR",
  Hprnr = "HPRNR",
  Null = "NULL",
  Orgnr = "ORGNR",
  Ukjent = "UKJENT",
  UtlOrg = "UTL_ORG",
}

export type Bruker = {
  __typename?: "Bruker";
  id?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<BrukerIdType>;
};

export type BrukerIdInput = {
  id: Scalars["String"]["input"];
  type: BrukerIdType;
};

export enum BrukerIdType {
  Aktoerid = "AKTOERID",
  Fnr = "FNR",
  Orgnr = "ORGNR",
}

export enum Datotype {
  DatoAvsRetur = "DATO_AVS_RETUR",
  DatoDokument = "DATO_DOKUMENT",
  DatoEkspedert = "DATO_EKSPEDERT",
  DatoJournalfoert = "DATO_JOURNALFOERT",
  DatoLest = "DATO_LEST",
  DatoOpprettet = "DATO_OPPRETTET",
  DatoRegistrert = "DATO_REGISTRERT",
  DatoSendtPrint = "DATO_SENDT_PRINT",
}

export type DigitalpostSendt = {
  __typename?: "DigitalpostSendt";
  adresse: Scalars["String"]["output"];
};

export type DokumentInfo = {
  __typename?: "DokumentInfo";
  brevkode?: Maybe<Scalars["String"]["output"]>;
  datoFerdigstilt?: Maybe<Scalars["DateTime"]["output"]>;
  dokumentInfoId: Scalars["String"]["output"];
  dokumentstatus?: Maybe<Dokumentstatus>;
  dokumentvarianter: Array<Maybe<Dokumentvariant>>;
  logiskeVedlegg: Array<Maybe<LogiskVedlegg>>;
  originalJournalpostId?: Maybe<Scalars["String"]["output"]>;
  skjerming?: Maybe<Scalars["String"]["output"]>;
  tittel?: Maybe<Scalars["String"]["output"]>;
};

export type Dokumentoversikt = {
  __typename?: "Dokumentoversikt";
  journalposter: Array<Maybe<Journalpost>>;
  sideInfo: SideInfo;
};

export enum Dokumentstatus {
  Avbrutt = "AVBRUTT",
  Ferdigstilt = "FERDIGSTILT",
  Kassert = "KASSERT",
  UnderRedigering = "UNDER_REDIGERING",
}

export type Dokumentvariant = {
  __typename?: "Dokumentvariant";
  filnavn?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Feltet er deprekert og er kun til internt bruk. Feltet skal kun brukes etter avtale med Team Dokument. */
  filtype?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Feltet er deprekert og vil bli fjernet i fremtiden. Feltet skal kun brukes etter avtale med Team Dokument. */
  filuuid?: Maybe<Scalars["String"]["output"]>;
  saksbehandlerHarTilgang: Scalars["Boolean"]["output"];
  skjerming?: Maybe<SkjermingType>;
  variantformat: Variantformat;
};

export type EpostVarselSendt = {
  __typename?: "EpostVarselSendt";
  adresse: Scalars["String"]["output"];
  tittel: Scalars["String"]["output"];
  varslingstekst: Scalars["String"]["output"];
};

export type FagsakInput = {
  fagsakId: Scalars["String"]["input"];
  fagsaksystem: Scalars["String"]["input"];
};

export type FysiskpostSendt = {
  __typename?: "FysiskpostSendt";
  adressetekstKonvolutt: Scalars["String"]["output"];
};

export type Journalpost = {
  __typename?: "Journalpost";
  antallRetur?: Maybe<Scalars["String"]["output"]>;
  avsenderMottaker?: Maybe<AvsenderMottaker>;
  /** @deprecated Feltet er deprekert og vil bli fjernet i fremtiden. Bruk avsenderMottaker.id i stedet. */
  avsenderMottakerId?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Feltet er deprekert og vil bli fjernet i fremtiden. Bruk avsenderMottaker.land i stedet. */
  avsenderMottakerLand?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Feltet er deprekert og vil bli fjernet i fremtiden. Bruk avsenderMottaker.navn i stedet. */
  avsenderMottakerNavn?: Maybe<Scalars["String"]["output"]>;
  behandlingstema?: Maybe<Scalars["String"]["output"]>;
  behandlingstemanavn?: Maybe<Scalars["String"]["output"]>;
  bruker?: Maybe<Bruker>;
  datoOpprettet: Scalars["DateTime"]["output"];
  dokumenter?: Maybe<Array<Maybe<DokumentInfo>>>;
  eksternReferanseId?: Maybe<Scalars["String"]["output"]>;
  journalfoerendeEnhet?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Feltet er deprekert og vil bli fjernet i fremtiden. Bruk journalfoerendeEnhet i stedet. */
  journalforendeEnhet?: Maybe<Scalars["String"]["output"]>;
  journalfortAvNavn?: Maybe<Scalars["String"]["output"]>;
  journalpostId: Scalars["String"]["output"];
  journalposttype?: Maybe<Journalposttype>;
  journalstatus?: Maybe<Journalstatus>;
  kanal?: Maybe<Kanal>;
  kanalnavn?: Maybe<Scalars["String"]["output"]>;
  opprettetAvNavn?: Maybe<Scalars["String"]["output"]>;
  relevanteDatoer?: Maybe<Array<Maybe<RelevantDato>>>;
  sak?: Maybe<Sak>;
  skjerming?: Maybe<Scalars["String"]["output"]>;
  tema?: Maybe<Tema>;
  temanavn?: Maybe<Scalars["String"]["output"]>;
  tilleggsopplysninger?: Maybe<Array<Maybe<Tilleggsopplysning>>>;
  tittel?: Maybe<Scalars["String"]["output"]>;
  utsendingsinfo?: Maybe<Utsendingsinfo>;
};

export enum Journalposttype {
  I = "I",
  N = "N",
  U = "U",
}

export enum Journalstatus {
  Avbrutt = "AVBRUTT",
  Ekspedert = "EKSPEDERT",
  Feilregistrert = "FEILREGISTRERT",
  Ferdigstilt = "FERDIGSTILT",
  Journalfoert = "JOURNALFOERT",
  Mottatt = "MOTTATT",
  OpplastingDokument = "OPPLASTING_DOKUMENT",
  Reservert = "RESERVERT",
  Ukjent = "UKJENT",
  UkjentBruker = "UKJENT_BRUKER",
  UnderArbeid = "UNDER_ARBEID",
  Utgaar = "UTGAAR",
}

export enum Kanal {
  Altinn = "ALTINN",
  Dpvt = "DPVT",
  Eessi = "EESSI",
  Eia = "EIA",
  EkstOpps = "EKST_OPPS",
  Helsenettet = "HELSENETTET",
  IngenDistribusjon = "INGEN_DISTRIBUSJON",
  InnsendtNavAnsatt = "INNSENDT_NAV_ANSATT",
  LokalUtskrift = "LOKAL_UTSKRIFT",
  NavNo = "NAV_NO",
  NavNoChat = "NAV_NO_CHAT",
  NavNoUinnlogget = "NAV_NO_UINNLOGGET",
  Sdp = "SDP",
  SentralUtskrift = "SENTRAL_UTSKRIFT",
  SkanIm = "SKAN_IM",
  SkanNets = "SKAN_NETS",
  SkanPen = "SKAN_PEN",
  Trygderetten = "TRYGDERETTEN",
  Ukjent = "UKJENT",
}

export type LogiskVedlegg = {
  __typename?: "LogiskVedlegg";
  logiskVedleggId: Scalars["String"]["output"];
  tittel?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  dokumentoversiktBruker: Dokumentoversikt;
  dokumentoversiktFagsak: Dokumentoversikt;
  dokumentoversiktJournalstatus: Dokumentoversikt;
  journalpost?: Maybe<Journalpost>;
  saker: Array<Maybe<Sak>>;
  tilknyttedeJournalposter: Array<Maybe<Journalpost>>;
};

export type QueryDokumentoversiktBrukerArgs = {
  brukerId: BrukerIdInput;
  etter?: InputMaybe<Scalars["String"]["input"]>;
  foerste?: InputMaybe<Scalars["Int"]["input"]>;
  fraDato?: InputMaybe<Scalars["Date"]["input"]>;
  journalposttyper?: InputMaybe<Array<InputMaybe<Journalposttype>>>;
  journalstatuser?: InputMaybe<Array<InputMaybe<Journalstatus>>>;
  tema?: InputMaybe<Array<InputMaybe<Tema>>>;
  tilDato?: InputMaybe<Scalars["Date"]["input"]>;
};

export type QueryDokumentoversiktFagsakArgs = {
  etter?: InputMaybe<Scalars["String"]["input"]>;
  fagsak: FagsakInput;
  foerste?: InputMaybe<Scalars["Int"]["input"]>;
  fraDato?: InputMaybe<Scalars["Date"]["input"]>;
  journalposttyper?: InputMaybe<Array<InputMaybe<Journalposttype>>>;
  journalstatuser?: InputMaybe<Array<InputMaybe<Journalstatus>>>;
  tema?: InputMaybe<Array<InputMaybe<Tema>>>;
};

export type QueryDokumentoversiktJournalstatusArgs = {
  etter?: InputMaybe<Scalars["String"]["input"]>;
  foerste?: InputMaybe<Scalars["Int"]["input"]>;
  fraDato?: InputMaybe<Scalars["Date"]["input"]>;
  journalposttyper?: InputMaybe<Array<InputMaybe<Journalposttype>>>;
  journalstatus: Journalstatus;
  tema?: InputMaybe<Array<InputMaybe<Tema>>>;
};

export type QueryJournalpostArgs = {
  journalpostId: Scalars["String"]["input"];
};

export type QuerySakerArgs = {
  brukerId: BrukerIdInput;
};

export type QueryTilknyttedeJournalposterArgs = {
  dokumentInfoId: Scalars["String"]["input"];
  tilknytning: Tilknytning;
};

export type RelevantDato = {
  __typename?: "RelevantDato";
  dato: Scalars["DateTime"]["output"];
  datotype: Datotype;
};

export type Sak = {
  __typename?: "Sak";
  /** @deprecated NB: Arkivsak skal anses som Joark-internt. Fagsystemene skal kun bruke denne etter avtale. */
  arkivsaksnummer?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated NB: Arkivsak skal anses som Joark-internt. Fagsystemene skal kun bruke denne etter avtale. */
  arkivsaksystem?: Maybe<Arkivsaksystem>;
  datoOpprettet?: Maybe<Scalars["DateTime"]["output"]>;
  fagsakId?: Maybe<Scalars["String"]["output"]>;
  fagsaksystem?: Maybe<Scalars["String"]["output"]>;
  sakstype?: Maybe<Sakstype>;
  tema?: Maybe<Tema>;
};

export enum Sakstype {
  Fagsak = "FAGSAK",
  GenerellSak = "GENERELL_SAK",
}

export type SideInfo = {
  __typename?: "SideInfo";
  antall?: Maybe<Scalars["Int"]["output"]>;
  finnesNesteSide: Scalars["Boolean"]["output"];
  sluttpeker?: Maybe<Scalars["String"]["output"]>;
  totaltAntall?: Maybe<Scalars["Int"]["output"]>;
};

export enum SkjermingType {
  Feil = "FEIL",
  Pol = "POL",
}

export type SmsVarselSendt = {
  __typename?: "SmsVarselSendt";
  adresse: Scalars["String"]["output"];
  varslingstekst: Scalars["String"]["output"];
};

export enum Tema {
  Aap = "AAP",
  Aar = "AAR",
  Agr = "AGR",
  Bar = "BAR",
  Bid = "BID",
  Bil = "BIL",
  Dag = "DAG",
  Enf = "ENF",
  Ers = "ERS",
  Eyb = "EYB",
  Eyo = "EYO",
  Far = "FAR",
  Fei = "FEI",
  For = "FOR",
  Fos = "FOS",
  Fri = "FRI",
  Ful = "FUL",
  Gen = "GEN",
  Gra = "GRA",
  Gru = "GRU",
  Hel = "HEL",
  Hje = "HJE",
  Iar = "IAR",
  Ind = "IND",
  Kon = "KON",
  Ktr = "KTR",
  Med = "MED",
  Mob = "MOB",
  Oms = "OMS",
  Opa = "OPA",
  Opp = "OPP",
  Pen = "PEN",
  Per = "PER",
  Reh = "REH",
  Rek = "REK",
  Rpo = "RPO",
  Rve = "RVE",
  Saa = "SAA",
  Sak = "SAK",
  Sap = "SAP",
  Ser = "SER",
  Sik = "SIK",
  Sto = "STO",
  Sup = "SUP",
  Syk = "SYK",
  Sym = "SYM",
  Til = "TIL",
  Trk = "TRK",
  Try = "TRY",
  Tso = "TSO",
  Tsr = "TSR",
  Ufm = "UFM",
  Ufo = "UFO",
  Ukj = "UKJ",
  Ven = "VEN",
  Yra = "YRA",
  Yrk = "YRK",
}

export enum Tilknytning {
  Gjenbruk = "GJENBRUK",
}

export type Tilleggsopplysning = {
  __typename?: "Tilleggsopplysning";
  nokkel?: Maybe<Scalars["String"]["output"]>;
  verdi?: Maybe<Scalars["String"]["output"]>;
};

export type Utsendingsinfo = {
  __typename?: "Utsendingsinfo";
  digitalpostSendt?: Maybe<DigitalpostSendt>;
  epostVarselSendt?: Maybe<EpostVarselSendt>;
  fysiskpostSendt?: Maybe<FysiskpostSendt>;
  smsVarselSendt?: Maybe<SmsVarselSendt>;
};

export enum Variantformat {
  Arkiv = "ARKIV",
  Fullversjon = "FULLVERSJON",
  Original = "ORIGINAL",
  Produksjon = "PRODUKSJON",
  ProduksjonDlf = "PRODUKSJON_DLF",
  Sladdet = "SLADDET",
}

export type JournalpostQueryVariables = Exact<{
  journalpostId: Scalars["String"]["input"];
}>;

export type JournalpostQuery = {
  __typename?: "Query";
  journalpost?: {
    __typename?: "Journalpost";
    journalpostId: string;
    tittel?: string | null;
    dokumenter?: Array<{
      __typename?: "DokumentInfo";
      dokumentInfoId: string;
      tittel?: string | null;
      brevkode?: string | null;
      originalJournalpostId?: string | null;
      dokumentvarianter: Array<{
        __typename?: "Dokumentvariant";
        variantformat: Variantformat;
        saksbehandlerHarTilgang: boolean;
        skjerming?: SkjermingType | null;
      } | null>;
    } | null> | null;
  } | null;
};

export const JournalpostDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "journalpost" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "journalpostId" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "journalpost" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "journalpostId" },
                value: { kind: "Variable", name: { kind: "Name", value: "journalpostId" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "journalpostId" } },
                { kind: "Field", name: { kind: "Name", value: "tittel" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "dokumenter" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "dokumentInfoId" } },
                      { kind: "Field", name: { kind: "Name", value: "tittel" } },
                      { kind: "Field", name: { kind: "Name", value: "brevkode" } },
                      { kind: "Field", name: { kind: "Name", value: "originalJournalpostId" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "dokumentvarianter" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "variantformat" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "saksbehandlerHarTilgang" },
                            },
                            { kind: "Field", name: { kind: "Name", value: "skjerming" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<JournalpostQuery, JournalpostQueryVariables>;
