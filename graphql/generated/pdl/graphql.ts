/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Long: { input: any; output: any; }
};

export type AdresseCompletionResult = {
  __typename?: 'AdresseCompletionResult';
  addressFound?: Maybe<CompletionAdresse>;
  suggestions: Array<Scalars['String']['output']>;
};

export type AdresseSearchHit = {
  __typename?: 'AdresseSearchHit';
  matrikkeladresse?: Maybe<MatrikkeladresseResult>;
  score?: Maybe<Scalars['Float']['output']>;
  vegadresse?: Maybe<VegadresseResult>;
};

export type AdresseSearchResult = {
  __typename?: 'AdresseSearchResult';
  hits: Array<AdresseSearchHit>;
  pageNumber?: Maybe<Scalars['Int']['output']>;
  totalHits?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type Adressebeskyttelse = {
  __typename?: 'Adressebeskyttelse';
  folkeregistermetadata?: Maybe<Folkeregistermetadata>;
  gradering: AdressebeskyttelseGradering;
  metadata: Metadata;
};

export enum AdressebeskyttelseGradering {
  Fortrolig = 'FORTROLIG',
  StrengtFortrolig = 'STRENGT_FORTROLIG',
  StrengtFortroligUtland = 'STRENGT_FORTROLIG_UTLAND',
  Ugradert = 'UGRADERT'
}

export type Bostedsadresse = {
  __typename?: 'Bostedsadresse';
  angittFlyttedato?: Maybe<Scalars['Date']['output']>;
  coAdressenavn?: Maybe<Scalars['String']['output']>;
  folkeregistermetadata?: Maybe<Folkeregistermetadata>;
  gyldigFraOgMed?: Maybe<Scalars['DateTime']['output']>;
  gyldigTilOgMed?: Maybe<Scalars['DateTime']['output']>;
  matrikkeladresse?: Maybe<Matrikkeladresse>;
  metadata: Metadata;
  ukjentBosted?: Maybe<UkjentBosted>;
  utenlandskAdresse?: Maybe<UtenlandskAdresse>;
  vegadresse?: Maybe<Vegadresse>;
};

export type CompletionAdresse = {
  __typename?: 'CompletionAdresse';
  matrikkeladresse?: Maybe<MatrikkeladresseResult>;
  vegadresse?: Maybe<VegadresseResult>;
};

export type CompletionFieldValue = {
  fieldName: Scalars['String']['input'];
  fieldValue?: InputMaybe<Scalars['String']['input']>;
};

export type CompletionParameters = {
  completionField: Scalars['String']['input'];
  fieldValues: Array<InputMaybe<CompletionFieldValue>>;
  maxSuggestions?: InputMaybe<Scalars['Int']['input']>;
};

export type Criterion = {
  and?: InputMaybe<Array<InputMaybe<Criterion>>>;
  fieldName?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<Array<InputMaybe<Criterion>>>;
  or?: InputMaybe<Array<InputMaybe<Criterion>>>;
  searchHistorical?: InputMaybe<Scalars['Boolean']['input']>;
  searchRule?: InputMaybe<SearchRule>;
};

export type DeltBosted = {
  __typename?: 'DeltBosted';
  coAdressenavn?: Maybe<Scalars['String']['output']>;
  folkeregistermetadata: Folkeregistermetadata;
  matrikkeladresse?: Maybe<Matrikkeladresse>;
  metadata: Metadata;
  sluttdatoForKontrakt?: Maybe<Scalars['Date']['output']>;
  startdatoForKontrakt: Scalars['Date']['output'];
  ukjentBosted?: Maybe<UkjentBosted>;
  utenlandskAdresse?: Maybe<UtenlandskAdresse>;
  vegadresse?: Maybe<Vegadresse>;
};

export enum Direction {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type DoedfoedtBarn = {
  __typename?: 'DoedfoedtBarn';
  dato?: Maybe<Scalars['Date']['output']>;
  folkeregistermetadata: Folkeregistermetadata;
  metadata: Metadata;
};

export type Doedsfall = {
  __typename?: 'Doedsfall';
  doedsdato?: Maybe<Scalars['Date']['output']>;
  folkeregistermetadata?: Maybe<Folkeregistermetadata>;
  metadata: Metadata;
};

export type Endring = {
  __typename?: 'Endring';
  hendelseId: Scalars['String']['output'];
  kilde: Scalars['String']['output'];
  registrert: Scalars['DateTime']['output'];
  registrertAv: Scalars['String']['output'];
  systemkilde: Scalars['String']['output'];
  type: Endringstype;
};

export enum Endringstype {
  Korriger = 'KORRIGER',
  Opphoer = 'OPPHOER',
  Opprett = 'OPPRETT'
}

export type FalskIdentitet = {
  __typename?: 'FalskIdentitet';
  erFalsk: Scalars['Boolean']['output'];
  folkeregistermetadata?: Maybe<Folkeregistermetadata>;
  metadata: Metadata;
  rettIdentitetErUkjent?: Maybe<Scalars['Boolean']['output']>;
  rettIdentitetVedIdentifikasjonsnummer?: Maybe<Scalars['String']['output']>;
  rettIdentitetVedOpplysninger?: Maybe<FalskIdentitetIdentifiserendeInformasjon>;
};

export type FalskIdentitetIdentifiserendeInformasjon = {
  __typename?: 'FalskIdentitetIdentifiserendeInformasjon';
  foedselsdato?: Maybe<Scalars['Date']['output']>;
  kjoenn?: Maybe<KjoennType>;
  personnavn: Personnavn;
  statsborgerskap: Array<Scalars['String']['output']>;
};

export enum Familierelasjonsrolle {
  Barn = 'BARN',
  Far = 'FAR',
  Medmor = 'MEDMOR',
  Mor = 'MOR'
}

export type Foedested = {
  __typename?: 'Foedested';
  foedekommune?: Maybe<Scalars['String']['output']>;
  foedeland?: Maybe<Scalars['String']['output']>;
  foedested?: Maybe<Scalars['String']['output']>;
  folkeregistermetadata?: Maybe<Folkeregistermetadata>;
  metadata: Metadata;
};

export type Foedsel = {
  __typename?: 'Foedsel';
  foedekommune?: Maybe<Scalars['String']['output']>;
  foedeland?: Maybe<Scalars['String']['output']>;
  foedested?: Maybe<Scalars['String']['output']>;
  foedselsaar?: Maybe<Scalars['Int']['output']>;
  foedselsdato?: Maybe<Scalars['Date']['output']>;
  folkeregistermetadata?: Maybe<Folkeregistermetadata>;
  metadata: Metadata;
};

export type Foedselsdato = {
  __typename?: 'Foedselsdato';
  foedselsaar?: Maybe<Scalars['Int']['output']>;
  foedselsdato?: Maybe<Scalars['Date']['output']>;
  folkeregistermetadata?: Maybe<Folkeregistermetadata>;
  metadata: Metadata;
};

export type Folkeregisteridentifikator = {
  __typename?: 'Folkeregisteridentifikator';
  folkeregistermetadata: Folkeregistermetadata;
  identifikasjonsnummer: Scalars['String']['output'];
  metadata: Metadata;
  status: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Folkeregistermetadata = {
  __typename?: 'Folkeregistermetadata';
  aarsak?: Maybe<Scalars['String']['output']>;
  ajourholdstidspunkt?: Maybe<Scalars['DateTime']['output']>;
  gyldighetstidspunkt?: Maybe<Scalars['DateTime']['output']>;
  kilde?: Maybe<Scalars['String']['output']>;
  opphoerstidspunkt?: Maybe<Scalars['DateTime']['output']>;
  sekvens?: Maybe<Scalars['Int']['output']>;
};

export type Folkeregisterpersonstatus = {
  __typename?: 'Folkeregisterpersonstatus';
  folkeregistermetadata: Folkeregistermetadata;
  forenkletStatus: Scalars['String']['output'];
  metadata: Metadata;
  status: Scalars['String']['output'];
};

export type ForelderBarnRelasjon = {
  __typename?: 'ForelderBarnRelasjon';
  folkeregistermetadata?: Maybe<Folkeregistermetadata>;
  metadata: Metadata;
  minRolleForPerson?: Maybe<ForelderBarnRelasjonRolle>;
  relatertPersonUtenFolkeregisteridentifikator?: Maybe<RelatertBiPerson>;
  relatertPersonsIdent?: Maybe<Scalars['String']['output']>;
  relatertPersonsRolle: ForelderBarnRelasjonRolle;
};

export enum ForelderBarnRelasjonRolle {
  Barn = 'BARN',
  Far = 'FAR',
  Medmor = 'MEDMOR',
  Mor = 'MOR'
}

export type Foreldreansvar = {
  __typename?: 'Foreldreansvar';
  ansvar?: Maybe<Scalars['String']['output']>;
  ansvarlig?: Maybe<Scalars['String']['output']>;
  ansvarligUtenIdentifikator?: Maybe<RelatertBiPerson>;
  ansvarssubjekt?: Maybe<Scalars['String']['output']>;
  folkeregistermetadata?: Maybe<Folkeregistermetadata>;
  metadata: Metadata;
};

export type Fullmakt = {
  __typename?: 'Fullmakt';
  gyldigFraOgMed: Scalars['Date']['output'];
  gyldigTilOgMed: Scalars['Date']['output'];
  metadata: Metadata;
  motpartsPersonident: Scalars['String']['output'];
  motpartsRolle: FullmaktsRolle;
  omraader: Array<Scalars['String']['output']>;
};

export enum FullmaktsRolle {
  Fullmaktsgiver = 'FULLMAKTSGIVER',
  Fullmektig = 'FULLMEKTIG'
}

export type GeografiskTilknytning = {
  __typename?: 'GeografiskTilknytning';
  gtBydel?: Maybe<Scalars['String']['output']>;
  gtKommune?: Maybe<Scalars['String']['output']>;
  gtLand?: Maybe<Scalars['String']['output']>;
  gtType: GtType;
  regel: Scalars['String']['output'];
};

export enum GtType {
  Bydel = 'BYDEL',
  Kommune = 'KOMMUNE',
  Udefinert = 'UDEFINERT',
  Utland = 'UTLAND'
}

export type HentIdenterBolkResult = {
  __typename?: 'HentIdenterBolkResult';
  code: Scalars['String']['output'];
  ident: Scalars['String']['output'];
  identer?: Maybe<Array<IdentInformasjon>>;
};

export type HentPersonBolkResult = {
  __typename?: 'HentPersonBolkResult';
  code: Scalars['String']['output'];
  ident: Scalars['String']['output'];
  person?: Maybe<Person>;
};

export enum IdentGruppe {
  Aktorid = 'AKTORID',
  Folkeregisterident = 'FOLKEREGISTERIDENT',
  Npid = 'NPID'
}

export type IdentInformasjon = {
  __typename?: 'IdentInformasjon';
  gruppe: IdentGruppe;
  historisk: Scalars['Boolean']['output'];
  ident: Scalars['String']['output'];
};

export type IdentifiserendeInformasjon = {
  __typename?: 'IdentifiserendeInformasjon';
  foedselsdato?: Maybe<Scalars['Date']['output']>;
  kjoenn?: Maybe<Scalars['String']['output']>;
  navn?: Maybe<Personnavn>;
  statsborgerskap?: Maybe<Array<Scalars['String']['output']>>;
};

export type Identitetsgrunnlag = {
  __typename?: 'Identitetsgrunnlag';
  folkeregistermetadata: Folkeregistermetadata;
  metadata: Metadata;
  status: Identitetsgrunnlagsstatus;
};

export enum Identitetsgrunnlagsstatus {
  IkkeKontrollert = 'IKKE_KONTROLLERT',
  IngenStatus = 'INGEN_STATUS',
  Kontrollert = 'KONTROLLERT'
}

export type Identliste = {
  __typename?: 'Identliste';
  identer: Array<IdentInformasjon>;
};

export type InnflyttingTilNorge = {
  __typename?: 'InnflyttingTilNorge';
  folkeregistermetadata?: Maybe<Folkeregistermetadata>;
  fraflyttingsland?: Maybe<Scalars['String']['output']>;
  fraflyttingsstedIUtlandet?: Maybe<Scalars['String']['output']>;
  metadata: Metadata;
};

export type KartverketAdresse = {
  __typename?: 'KartverketAdresse';
  id: Scalars['Long']['output'];
  matrikkeladresse?: Maybe<KartverketMatrikkeladresse>;
  vegadresse?: Maybe<KartverketVegadresse>;
};

export type KartverketBydel = {
  __typename?: 'KartverketBydel';
  bydelsnavn?: Maybe<Scalars['String']['output']>;
  bydelsnummer?: Maybe<Scalars['String']['output']>;
};

export type KartverketFylke = {
  __typename?: 'KartverketFylke';
  navn?: Maybe<Scalars['String']['output']>;
  nummer?: Maybe<Scalars['String']['output']>;
};

export type KartverketGrunnkrets = {
  __typename?: 'KartverketGrunnkrets';
  grunnkretsnavn?: Maybe<Scalars['String']['output']>;
  grunnkretsnummer?: Maybe<Scalars['String']['output']>;
};

export type KartverketKommune = {
  __typename?: 'KartverketKommune';
  fylke?: Maybe<KartverketFylke>;
  navn?: Maybe<Scalars['String']['output']>;
  nummer?: Maybe<Scalars['String']['output']>;
};

export type KartverketMatrikkeladresse = {
  __typename?: 'KartverketMatrikkeladresse';
  adressetilleggsnavn?: Maybe<Scalars['String']['output']>;
  bydel?: Maybe<KartverketBydel>;
  grunnkrets?: Maybe<KartverketGrunnkrets>;
  kortnavn?: Maybe<Scalars['String']['output']>;
  matrikkelnummer?: Maybe<KartverketMatrikkelnummer>;
  postnummeromraade?: Maybe<KartverketPostnummeromraade>;
  representasjonspunkt?: Maybe<KartverketRepresentasjonspunkt>;
  undernummer?: Maybe<Scalars['Int']['output']>;
};

export type KartverketMatrikkelnummer = {
  __typename?: 'KartverketMatrikkelnummer';
  bruksnummer?: Maybe<Scalars['Int']['output']>;
  festenummer?: Maybe<Scalars['Int']['output']>;
  gaardsnummer?: Maybe<Scalars['Int']['output']>;
  kommunenummer?: Maybe<Scalars['String']['output']>;
  seksjonsnummer?: Maybe<Scalars['Int']['output']>;
};

export type KartverketPostnummeromraade = {
  __typename?: 'KartverketPostnummeromraade';
  postnummer?: Maybe<Scalars['String']['output']>;
  poststed?: Maybe<Scalars['String']['output']>;
};

export type KartverketRepresentasjonspunkt = {
  __typename?: 'KartverketRepresentasjonspunkt';
  posisjonskvalitet?: Maybe<Scalars['Int']['output']>;
  x?: Maybe<Scalars['Float']['output']>;
  y?: Maybe<Scalars['Float']['output']>;
  z?: Maybe<Scalars['Float']['output']>;
};

export type KartverketVeg = {
  __typename?: 'KartverketVeg';
  adressekode?: Maybe<Scalars['Int']['output']>;
  adressenavn?: Maybe<Scalars['String']['output']>;
  kommune?: Maybe<KartverketKommune>;
  kortnavn?: Maybe<Scalars['String']['output']>;
  stedsnummer?: Maybe<Scalars['String']['output']>;
};

export type KartverketVegadresse = {
  __typename?: 'KartverketVegadresse';
  adressetilleggsnavn?: Maybe<Scalars['String']['output']>;
  bokstav?: Maybe<Scalars['String']['output']>;
  bydel?: Maybe<KartverketBydel>;
  grunnkrets?: Maybe<KartverketGrunnkrets>;
  kortnavn?: Maybe<Scalars['String']['output']>;
  nummer?: Maybe<Scalars['Int']['output']>;
  postnummeromraade?: Maybe<KartverketPostnummeromraade>;
  representasjonspunkt?: Maybe<KartverketRepresentasjonspunkt>;
  veg?: Maybe<KartverketVeg>;
};

export type Kjoenn = {
  __typename?: 'Kjoenn';
  folkeregistermetadata?: Maybe<Folkeregistermetadata>;
  kjoenn?: Maybe<KjoennType>;
  metadata: Metadata;
};

export enum KjoennType {
  Kvinne = 'KVINNE',
  Mann = 'MANN',
  Ukjent = 'UKJENT'
}

export type Kontaktadresse = {
  __typename?: 'Kontaktadresse';
  coAdressenavn?: Maybe<Scalars['String']['output']>;
  folkeregistermetadata?: Maybe<Folkeregistermetadata>;
  gyldigFraOgMed?: Maybe<Scalars['DateTime']['output']>;
  gyldigTilOgMed?: Maybe<Scalars['DateTime']['output']>;
  metadata: Metadata;
  postadresseIFrittFormat?: Maybe<PostadresseIFrittFormat>;
  postboksadresse?: Maybe<Postboksadresse>;
  type: KontaktadresseType;
  utenlandskAdresse?: Maybe<UtenlandskAdresse>;
  utenlandskAdresseIFrittFormat?: Maybe<UtenlandskAdresseIFrittFormat>;
  vegadresse?: Maybe<Vegadresse>;
};

export enum KontaktadresseType {
  Innland = 'Innland',
  Utland = 'Utland'
}

export type KontaktinformasjonForDoedsbo = {
  __typename?: 'KontaktinformasjonForDoedsbo';
  adresse: KontaktinformasjonForDoedsboAdresse;
  advokatSomKontakt?: Maybe<KontaktinformasjonForDoedsboAdvokatSomKontakt>;
  attestutstedelsesdato: Scalars['Date']['output'];
  folkeregistermetadata: Folkeregistermetadata;
  metadata: Metadata;
  organisasjonSomKontakt?: Maybe<KontaktinformasjonForDoedsboOrganisasjonSomKontakt>;
  personSomKontakt?: Maybe<KontaktinformasjonForDoedsboPersonSomKontakt>;
  skifteform: KontaktinformasjonForDoedsboSkifteform;
};

export type KontaktinformasjonForDoedsboAdresse = {
  __typename?: 'KontaktinformasjonForDoedsboAdresse';
  adresselinje1: Scalars['String']['output'];
  adresselinje2?: Maybe<Scalars['String']['output']>;
  landkode?: Maybe<Scalars['String']['output']>;
  postnummer: Scalars['String']['output'];
  poststedsnavn: Scalars['String']['output'];
};

export type KontaktinformasjonForDoedsboAdvokatSomKontakt = {
  __typename?: 'KontaktinformasjonForDoedsboAdvokatSomKontakt';
  organisasjonsnavn?: Maybe<Scalars['String']['output']>;
  organisasjonsnummer?: Maybe<Scalars['String']['output']>;
  personnavn: Personnavn;
};

export type KontaktinformasjonForDoedsboOrganisasjonSomKontakt = {
  __typename?: 'KontaktinformasjonForDoedsboOrganisasjonSomKontakt';
  kontaktperson?: Maybe<Personnavn>;
  organisasjonsnavn: Scalars['String']['output'];
  organisasjonsnummer?: Maybe<Scalars['String']['output']>;
};

export type KontaktinformasjonForDoedsboPersonSomKontakt = {
  __typename?: 'KontaktinformasjonForDoedsboPersonSomKontakt';
  foedselsdato?: Maybe<Scalars['Date']['output']>;
  identifikasjonsnummer?: Maybe<Scalars['String']['output']>;
  personnavn?: Maybe<Personnavn>;
};

export enum KontaktinformasjonForDoedsboSkifteform {
  Annet = 'ANNET',
  Offentlig = 'OFFENTLIG'
}

export type Koordinater = {
  __typename?: 'Koordinater';
  kvalitet?: Maybe<Scalars['Int']['output']>;
  x?: Maybe<Scalars['Float']['output']>;
  y?: Maybe<Scalars['Float']['output']>;
  z?: Maybe<Scalars['Float']['output']>;
};

export type Matrikkeladresse = {
  __typename?: 'Matrikkeladresse';
  bruksenhetsnummer?: Maybe<Scalars['String']['output']>;
  kommunenummer?: Maybe<Scalars['String']['output']>;
  koordinater?: Maybe<Koordinater>;
  matrikkelId?: Maybe<Scalars['Long']['output']>;
  postnummer?: Maybe<Scalars['String']['output']>;
  tilleggsnavn?: Maybe<Scalars['String']['output']>;
};

export type MatrikkeladresseResult = {
  __typename?: 'MatrikkeladresseResult';
  bruksnummer?: Maybe<Scalars['String']['output']>;
  gaardsnummer?: Maybe<Scalars['String']['output']>;
  kommunenummer?: Maybe<Scalars['String']['output']>;
  matrikkelId?: Maybe<Scalars['String']['output']>;
  postnummer?: Maybe<Scalars['String']['output']>;
  poststed?: Maybe<Scalars['String']['output']>;
  tilleggsnavn?: Maybe<Scalars['String']['output']>;
};

export type Metadata = {
  __typename?: 'Metadata';
  endringer: Array<Endring>;
  historisk: Scalars['Boolean']['output'];
  master: Scalars['String']['output'];
  opplysningsId?: Maybe<Scalars['String']['output']>;
};

export type Navn = {
  __typename?: 'Navn';
  etternavn: Scalars['String']['output'];
  folkeregistermetadata?: Maybe<Folkeregistermetadata>;
  /** @deprecated Field no longer supported */
  forkortetNavn?: Maybe<Scalars['String']['output']>;
  fornavn: Scalars['String']['output'];
  gyldigFraOgMed?: Maybe<Scalars['Date']['output']>;
  mellomnavn?: Maybe<Scalars['String']['output']>;
  metadata: Metadata;
  originaltNavn?: Maybe<OriginaltNavn>;
};

export type Opphold = {
  __typename?: 'Opphold';
  folkeregistermetadata: Folkeregistermetadata;
  metadata: Metadata;
  oppholdFra?: Maybe<Scalars['Date']['output']>;
  oppholdTil?: Maybe<Scalars['Date']['output']>;
  type: Oppholdstillatelse;
};

export type Oppholdsadresse = {
  __typename?: 'Oppholdsadresse';
  coAdressenavn?: Maybe<Scalars['String']['output']>;
  folkeregistermetadata?: Maybe<Folkeregistermetadata>;
  gyldigFraOgMed?: Maybe<Scalars['DateTime']['output']>;
  gyldigTilOgMed?: Maybe<Scalars['DateTime']['output']>;
  matrikkeladresse?: Maybe<Matrikkeladresse>;
  metadata: Metadata;
  oppholdAnnetSted?: Maybe<Scalars['String']['output']>;
  utenlandskAdresse?: Maybe<UtenlandskAdresse>;
  vegadresse?: Maybe<Vegadresse>;
};

export enum Oppholdstillatelse {
  Midlertidig = 'MIDLERTIDIG',
  OpplysningMangler = 'OPPLYSNING_MANGLER',
  Permanent = 'PERMANENT'
}

export type OriginaltNavn = {
  __typename?: 'OriginaltNavn';
  etternavn?: Maybe<Scalars['String']['output']>;
  fornavn?: Maybe<Scalars['String']['output']>;
  mellomnavn?: Maybe<Scalars['String']['output']>;
};

export type Paging = {
  pageNumber?: InputMaybe<Scalars['Int']['input']>;
  resultsPerPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<InputMaybe<SearchSorting>>>;
};

export type Person = {
  __typename?: 'Person';
  adressebeskyttelse: Array<Adressebeskyttelse>;
  bostedsadresse: Array<Bostedsadresse>;
  deltBosted: Array<DeltBosted>;
  doedfoedtBarn: Array<DoedfoedtBarn>;
  doedsfall: Array<Doedsfall>;
  falskIdentitet?: Maybe<FalskIdentitet>;
  foedested: Array<Foedested>;
  foedsel: Array<Foedsel>;
  foedselsdato: Array<Foedselsdato>;
  folkeregisteridentifikator: Array<Folkeregisteridentifikator>;
  folkeregisterpersonstatus: Array<Folkeregisterpersonstatus>;
  forelderBarnRelasjon: Array<ForelderBarnRelasjon>;
  foreldreansvar: Array<Foreldreansvar>;
  fullmakt: Array<Fullmakt>;
  identitetsgrunnlag: Array<Identitetsgrunnlag>;
  innflyttingTilNorge: Array<InnflyttingTilNorge>;
  kjoenn: Array<Kjoenn>;
  kontaktadresse: Array<Kontaktadresse>;
  kontaktinformasjonForDoedsbo: Array<KontaktinformasjonForDoedsbo>;
  navn: Array<Navn>;
  opphold: Array<Opphold>;
  oppholdsadresse: Array<Oppholdsadresse>;
  rettsligHandleevne: Array<RettsligHandleevne>;
  sikkerhetstiltak: Array<Sikkerhetstiltak>;
  sivilstand: Array<Sivilstand>;
  statsborgerskap: Array<Statsborgerskap>;
  telefonnummer: Array<Telefonnummer>;
  tilrettelagtKommunikasjon: Array<TilrettelagtKommunikasjon>;
  utenlandskIdentifikasjonsnummer: Array<UtenlandskIdentifikasjonsnummer>;
  utflyttingFraNorge: Array<UtflyttingFraNorge>;
  vergemaalEllerFremtidsfullmakt: Array<VergemaalEllerFremtidsfullmakt>;
};


export type PersonAdressebeskyttelseArgs = {
  historikk?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PersonBostedsadresseArgs = {
  historikk?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PersonDeltBostedArgs = {
  historikk?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PersonFolkeregisteridentifikatorArgs = {
  historikk?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PersonFolkeregisterpersonstatusArgs = {
  historikk?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PersonForeldreansvarArgs = {
  historikk?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PersonFullmaktArgs = {
  historikk?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PersonIdentitetsgrunnlagArgs = {
  historikk?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PersonKjoennArgs = {
  historikk?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PersonKontaktadresseArgs = {
  historikk?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PersonKontaktinformasjonForDoedsboArgs = {
  historikk?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PersonNavnArgs = {
  historikk?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PersonOppholdArgs = {
  historikk?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PersonOppholdsadresseArgs = {
  historikk?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PersonRettsligHandleevneArgs = {
  historikk?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PersonSivilstandArgs = {
  historikk?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PersonStatsborgerskapArgs = {
  historikk?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PersonTelefonnummerArgs = {
  historikk?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PersonUtenlandskIdentifikasjonsnummerArgs = {
  historikk?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PersonVergemaalEllerFremtidsfullmaktArgs = {
  historikk?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PersonSearchHighlight = {
  __typename?: 'PersonSearchHighlight';
  historisk?: Maybe<Scalars['Boolean']['output']>;
  matches?: Maybe<Array<Maybe<SearchMatch>>>;
  opplysning?: Maybe<Scalars['String']['output']>;
  opplysningsId?: Maybe<Scalars['String']['output']>;
};

export type PersonSearchHit = {
  __typename?: 'PersonSearchHit';
  highlights?: Maybe<Array<Maybe<PersonSearchHighlight>>>;
  identer: Array<IdentInformasjon>;
  person?: Maybe<Person>;
  score?: Maybe<Scalars['Float']['output']>;
};


export type PersonSearchHitIdenterArgs = {
  historikk?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PersonSearchResult = {
  __typename?: 'PersonSearchResult';
  hits: Array<PersonSearchHit>;
  pageNumber?: Maybe<Scalars['Int']['output']>;
  totalHits?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type Personnavn = {
  __typename?: 'Personnavn';
  etternavn: Scalars['String']['output'];
  fornavn: Scalars['String']['output'];
  mellomnavn?: Maybe<Scalars['String']['output']>;
};

export type PostadresseIFrittFormat = {
  __typename?: 'PostadresseIFrittFormat';
  adresselinje1?: Maybe<Scalars['String']['output']>;
  adresselinje2?: Maybe<Scalars['String']['output']>;
  adresselinje3?: Maybe<Scalars['String']['output']>;
  postnummer?: Maybe<Scalars['String']['output']>;
};

export type Postboksadresse = {
  __typename?: 'Postboksadresse';
  postboks: Scalars['String']['output'];
  postbokseier?: Maybe<Scalars['String']['output']>;
  postnummer?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  forslagAdresse?: Maybe<AdresseCompletionResult>;
  hentAdresse?: Maybe<KartverketAdresse>;
  hentGeografiskTilknytning?: Maybe<GeografiskTilknytning>;
  hentGeografiskTilknytningBolk: Array<HentGeografiskTilknytningBolkResult>;
  hentIdenter?: Maybe<Identliste>;
  hentIdenterBolk: Array<HentIdenterBolkResult>;
  hentPerson?: Maybe<Person>;
  hentPersonBolk: Array<HentPersonBolkResult>;
  sokAdresse?: Maybe<AdresseSearchResult>;
  sokPerson?: Maybe<PersonSearchResult>;
};


export type QueryForslagAdresseArgs = {
  parameters?: InputMaybe<CompletionParameters>;
};


export type QueryHentAdresseArgs = {
  matrikkelId: Scalars['ID']['input'];
};


export type QueryHentGeografiskTilknytningArgs = {
  ident: Scalars['ID']['input'];
};


export type QueryHentGeografiskTilknytningBolkArgs = {
  identer: Array<Scalars['ID']['input']>;
};


export type QueryHentIdenterArgs = {
  grupper?: InputMaybe<Array<IdentGruppe>>;
  historikk?: InputMaybe<Scalars['Boolean']['input']>;
  ident: Scalars['ID']['input'];
};


export type QueryHentIdenterBolkArgs = {
  grupper?: InputMaybe<Array<IdentGruppe>>;
  historikk?: InputMaybe<Scalars['Boolean']['input']>;
  identer: Array<Scalars['ID']['input']>;
};


export type QueryHentPersonArgs = {
  ident: Scalars['ID']['input'];
};


export type QueryHentPersonBolkArgs = {
  identer: Array<Scalars['ID']['input']>;
};


export type QuerySokAdresseArgs = {
  criteria?: InputMaybe<Array<InputMaybe<Criterion>>>;
  paging?: InputMaybe<Paging>;
};


export type QuerySokPersonArgs = {
  criteria?: InputMaybe<Array<InputMaybe<Criterion>>>;
  paging?: InputMaybe<Paging>;
};

export type RelatertBiPerson = {
  __typename?: 'RelatertBiPerson';
  foedselsdato?: Maybe<Scalars['Date']['output']>;
  kjoenn?: Maybe<KjoennType>;
  navn?: Maybe<Personnavn>;
  statsborgerskap?: Maybe<Scalars['String']['output']>;
};

export type RettsligHandleevne = {
  __typename?: 'RettsligHandleevne';
  folkeregistermetadata?: Maybe<Folkeregistermetadata>;
  metadata: Metadata;
  rettsligHandleevneomfang?: Maybe<Scalars['String']['output']>;
};

export type SearchMatch = {
  __typename?: 'SearchMatch';
  field: Scalars['String']['output'];
  fragments?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type SearchRule = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  boost?: InputMaybe<Scalars['Float']['input']>;
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  disablePhonetic?: InputMaybe<Scalars['Boolean']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  fromExcluding?: InputMaybe<Scalars['String']['input']>;
  fuzzy?: InputMaybe<Scalars['String']['input']>;
  greaterThan?: InputMaybe<Scalars['String']['input']>;
  lessThan?: InputMaybe<Scalars['String']['input']>;
  notEquals?: InputMaybe<Scalars['String']['input']>;
  random?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  toExcluding?: InputMaybe<Scalars['String']['input']>;
  wildcard?: InputMaybe<Scalars['String']['input']>;
};

export type SearchSorting = {
  direction: Direction;
  fieldName: Scalars['String']['input'];
};

export type Sikkerhetstiltak = {
  __typename?: 'Sikkerhetstiltak';
  beskrivelse: Scalars['String']['output'];
  gyldigFraOgMed: Scalars['Date']['output'];
  gyldigTilOgMed: Scalars['Date']['output'];
  kontaktperson?: Maybe<SikkerhetstiltakKontaktperson>;
  metadata: Metadata;
  tiltakstype: Scalars['String']['output'];
};

export type SikkerhetstiltakKontaktperson = {
  __typename?: 'SikkerhetstiltakKontaktperson';
  enhet: Scalars['String']['output'];
  personident: Scalars['String']['output'];
};

export type Sivilstand = {
  __typename?: 'Sivilstand';
  bekreftelsesdato?: Maybe<Scalars['Date']['output']>;
  folkeregistermetadata?: Maybe<Folkeregistermetadata>;
  gyldigFraOgMed?: Maybe<Scalars['Date']['output']>;
  metadata: Metadata;
  relatertVedSivilstand?: Maybe<Scalars['String']['output']>;
  type: Sivilstandstype;
};

export enum Sivilstandstype {
  EnkeEllerEnkemann = 'ENKE_ELLER_ENKEMANN',
  Gift = 'GIFT',
  GjenlevendePartner = 'GJENLEVENDE_PARTNER',
  RegistrertPartner = 'REGISTRERT_PARTNER',
  Separert = 'SEPARERT',
  SeparertPartner = 'SEPARERT_PARTNER',
  Skilt = 'SKILT',
  SkiltPartner = 'SKILT_PARTNER',
  Ugift = 'UGIFT',
  Uoppgitt = 'UOPPGITT'
}

export type Statsborgerskap = {
  __typename?: 'Statsborgerskap';
  bekreftelsesdato?: Maybe<Scalars['Date']['output']>;
  folkeregistermetadata?: Maybe<Folkeregistermetadata>;
  gyldigFraOgMed?: Maybe<Scalars['Date']['output']>;
  gyldigTilOgMed?: Maybe<Scalars['Date']['output']>;
  land: Scalars['String']['output'];
  metadata: Metadata;
};

export type Telefonnummer = {
  __typename?: 'Telefonnummer';
  landskode: Scalars['String']['output'];
  metadata: Metadata;
  nummer: Scalars['String']['output'];
  prioritet: Scalars['Int']['output'];
};

export type TilrettelagtKommunikasjon = {
  __typename?: 'TilrettelagtKommunikasjon';
  metadata: Metadata;
  talespraaktolk?: Maybe<Tolk>;
  tegnspraaktolk?: Maybe<Tolk>;
};

export type Tjenesteomraade = {
  __typename?: 'Tjenesteomraade';
  tjenesteoppgave?: Maybe<Scalars['String']['output']>;
  tjenestevirksomhet?: Maybe<Scalars['String']['output']>;
};

export type Tolk = {
  __typename?: 'Tolk';
  spraak?: Maybe<Scalars['String']['output']>;
};

export type UkjentBosted = {
  __typename?: 'UkjentBosted';
  bostedskommune?: Maybe<Scalars['String']['output']>;
};

export type UtenlandskAdresse = {
  __typename?: 'UtenlandskAdresse';
  adressenavnNummer?: Maybe<Scalars['String']['output']>;
  bySted?: Maybe<Scalars['String']['output']>;
  bygningEtasjeLeilighet?: Maybe<Scalars['String']['output']>;
  landkode: Scalars['String']['output'];
  postboksNummerNavn?: Maybe<Scalars['String']['output']>;
  postkode?: Maybe<Scalars['String']['output']>;
  regionDistriktOmraade?: Maybe<Scalars['String']['output']>;
};

export type UtenlandskAdresseIFrittFormat = {
  __typename?: 'UtenlandskAdresseIFrittFormat';
  adresselinje1?: Maybe<Scalars['String']['output']>;
  adresselinje2?: Maybe<Scalars['String']['output']>;
  adresselinje3?: Maybe<Scalars['String']['output']>;
  byEllerStedsnavn?: Maybe<Scalars['String']['output']>;
  landkode: Scalars['String']['output'];
  postkode?: Maybe<Scalars['String']['output']>;
};

export type UtenlandskIdentifikasjonsnummer = {
  __typename?: 'UtenlandskIdentifikasjonsnummer';
  folkeregistermetadata?: Maybe<Folkeregistermetadata>;
  identifikasjonsnummer: Scalars['String']['output'];
  metadata: Metadata;
  opphoert: Scalars['Boolean']['output'];
  utstederland: Scalars['String']['output'];
};

export type UtflyttingFraNorge = {
  __typename?: 'UtflyttingFraNorge';
  folkeregistermetadata?: Maybe<Folkeregistermetadata>;
  metadata: Metadata;
  tilflyttingsland?: Maybe<Scalars['String']['output']>;
  tilflyttingsstedIUtlandet?: Maybe<Scalars['String']['output']>;
  utflyttingsdato?: Maybe<Scalars['Date']['output']>;
};

export type Vegadresse = {
  __typename?: 'Vegadresse';
  adressenavn?: Maybe<Scalars['String']['output']>;
  bruksenhetsnummer?: Maybe<Scalars['String']['output']>;
  bydelsnummer?: Maybe<Scalars['String']['output']>;
  husbokstav?: Maybe<Scalars['String']['output']>;
  husnummer?: Maybe<Scalars['String']['output']>;
  kommunenummer?: Maybe<Scalars['String']['output']>;
  koordinater?: Maybe<Koordinater>;
  matrikkelId?: Maybe<Scalars['Long']['output']>;
  postnummer?: Maybe<Scalars['String']['output']>;
  tilleggsnavn?: Maybe<Scalars['String']['output']>;
};

export type VegadresseResult = {
  __typename?: 'VegadresseResult';
  adressekode?: Maybe<Scalars['String']['output']>;
  adressenavn?: Maybe<Scalars['String']['output']>;
  bydelsnavn?: Maybe<Scalars['String']['output']>;
  bydelsnummer?: Maybe<Scalars['String']['output']>;
  fylkesnavn?: Maybe<Scalars['String']['output']>;
  fylkesnummer?: Maybe<Scalars['String']['output']>;
  husbokstav?: Maybe<Scalars['String']['output']>;
  husnummer?: Maybe<Scalars['Int']['output']>;
  kommunenavn?: Maybe<Scalars['String']['output']>;
  kommunenummer?: Maybe<Scalars['String']['output']>;
  matrikkelId?: Maybe<Scalars['String']['output']>;
  postnummer?: Maybe<Scalars['String']['output']>;
  poststed?: Maybe<Scalars['String']['output']>;
  tilleggsnavn?: Maybe<Scalars['String']['output']>;
};

export type VergeEllerFullmektig = {
  __typename?: 'VergeEllerFullmektig';
  identifiserendeInformasjon?: Maybe<IdentifiserendeInformasjon>;
  motpartsPersonident?: Maybe<Scalars['String']['output']>;
  /** @deprecated Erstattes av navn iidentifiserendeInformasjon */
  navn?: Maybe<Personnavn>;
  omfang?: Maybe<Scalars['String']['output']>;
  omfangetErInnenPersonligOmraade?: Maybe<Scalars['Boolean']['output']>;
  tjenesteomraade?: Maybe<Array<Tjenesteomraade>>;
};

export type VergemaalEllerFremtidsfullmakt = {
  __typename?: 'VergemaalEllerFremtidsfullmakt';
  embete?: Maybe<Scalars['String']['output']>;
  folkeregistermetadata?: Maybe<Folkeregistermetadata>;
  metadata: Metadata;
  type?: Maybe<Scalars['String']['output']>;
  vergeEllerFullmektig: VergeEllerFullmektig;
};

export type HentGeografiskTilknytningBolkResult = {
  __typename?: 'hentGeografiskTilknytningBolkResult';
  code: Scalars['String']['output'];
  geografiskTilknytning?: Maybe<GeografiskTilknytning>;
  ident: Scalars['String']['output'];
};

export type HentPersonQueryVariables = Exact<{
  ident: Scalars['ID']['input'];
}>;


export type HentPersonQuery = { __typename?: 'Query', hentPerson?: { __typename?: 'Person', navn: Array<{ __typename?: 'Navn', fornavn: string, mellomnavn?: string | null, etternavn: string }>, statsborgerskap: Array<{ __typename?: 'Statsborgerskap', land: string }>, telefonnummer: Array<{ __typename?: 'Telefonnummer', nummer: string }>, bostedsadresse: Array<{ __typename?: 'Bostedsadresse', vegadresse?: { __typename?: 'Vegadresse', husnummer?: string | null, adressenavn?: string | null, postnummer?: string | null } | null }>, kontaktadresse: Array<{ __typename?: 'Kontaktadresse', vegadresse?: { __typename?: 'Vegadresse', husnummer?: string | null, adressenavn?: string | null, postnummer?: string | null } | null, utenlandskAdresse?: { __typename?: 'UtenlandskAdresse', adressenavnNummer?: string | null, bygningEtasjeLeilighet?: string | null, postboksNummerNavn?: string | null, postkode?: string | null, bySted?: string | null, regionDistriktOmraade?: string | null, landkode: string } | null, utenlandskAdresseIFrittFormat?: { __typename?: 'UtenlandskAdresseIFrittFormat', adresselinje1?: string | null, adresselinje2?: string | null, adresselinje3?: string | null, postkode?: string | null, byEllerStedsnavn?: string | null, landkode: string } | null }>, doedsfall: Array<{ __typename?: 'Doedsfall', doedsdato?: any | null }>, utflyttingFraNorge: Array<{ __typename?: 'UtflyttingFraNorge', utflyttingsdato?: any | null }>, sikkerhetstiltak: Array<{ __typename?: 'Sikkerhetstiltak', tiltakstype: string }>, foreldreansvar: Array<{ __typename?: 'Foreldreansvar', ansvar?: string | null }> } | null };


export const HentPersonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"hentPerson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ident"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hentPerson"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ident"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ident"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"historikk"},"value":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fornavn"}},{"kind":"Field","name":{"kind":"Name","value":"mellomnavn"}},{"kind":"Field","name":{"kind":"Name","value":"etternavn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statsborgerskap"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"historikk"},"value":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"land"}}]}},{"kind":"Field","name":{"kind":"Name","value":"telefonnummer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nummer"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bostedsadresse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"historikk"},"value":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vegadresse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"husnummer"}},{"kind":"Field","name":{"kind":"Name","value":"adressenavn"}},{"kind":"Field","name":{"kind":"Name","value":"postnummer"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"kontaktadresse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"historikk"},"value":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vegadresse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"husnummer"}},{"kind":"Field","name":{"kind":"Name","value":"adressenavn"}},{"kind":"Field","name":{"kind":"Name","value":"postnummer"}}]}},{"kind":"Field","name":{"kind":"Name","value":"utenlandskAdresse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adressenavnNummer"}},{"kind":"Field","name":{"kind":"Name","value":"bygningEtasjeLeilighet"}},{"kind":"Field","name":{"kind":"Name","value":"postboksNummerNavn"}},{"kind":"Field","name":{"kind":"Name","value":"postkode"}},{"kind":"Field","name":{"kind":"Name","value":"bySted"}},{"kind":"Field","name":{"kind":"Name","value":"regionDistriktOmraade"}},{"kind":"Field","name":{"kind":"Name","value":"landkode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"utenlandskAdresseIFrittFormat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adresselinje1"}},{"kind":"Field","name":{"kind":"Name","value":"adresselinje2"}},{"kind":"Field","name":{"kind":"Name","value":"adresselinje3"}},{"kind":"Field","name":{"kind":"Name","value":"postkode"}},{"kind":"Field","name":{"kind":"Name","value":"byEllerStedsnavn"}},{"kind":"Field","name":{"kind":"Name","value":"landkode"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"doedsfall"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"doedsdato"}}]}},{"kind":"Field","name":{"kind":"Name","value":"utflyttingFraNorge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"utflyttingsdato"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sikkerhetstiltak"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tiltakstype"}}]}},{"kind":"Field","name":{"kind":"Name","value":"foreldreansvar"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"historikk"},"value":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ansvar"}}]}}]}}]}}]} as unknown as DocumentNode<HentPersonQuery, HentPersonQueryVariables>;