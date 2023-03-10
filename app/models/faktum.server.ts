export type Faktum =
  | IBooleanFaktum
  | IFlervalgFaktum
  | IEnvalgFaktum
  | ITekstFaktum
  | IDatoFaktum
  | IPeriodeFaktum
  | INumberFaktum
  | ILandFaktum;

export interface IBaseFaktum {
  id: string;
  beskrivendeId: string;
  readOnly: boolean;
  roller?: string[];
  sannsynliggjoresAv?: Faktum[];
}

export interface IFlervalgFaktum extends IBaseFaktum {
  type: "flervalg";
  gyldigeValg: string[];
  svar?: string[];
}

export interface IBooleanFaktum extends IBaseFaktum {
  type: "boolean";
  gyldigeValg: string[];
  svar?: boolean;
}

export interface IEnvalgFaktum extends IBaseFaktum {
  type: "envalg";
  gyldigeValg: string[];
  svar?: string;
}

export interface ITekstFaktum extends IBaseFaktum {
  type: "tekst";
  svar?: string;
}

export interface IDatoFaktum extends IBaseFaktum {
  type: "localdate";
  svar?: string | null;
}

export interface IPeriodeFaktum extends IBaseFaktum {
  type: "periode";
  svar?: IPeriodeFaktumSvar;
}

export interface INumberFaktum extends IBaseFaktum {
  type: "int" | "double";
  svar?: number;
}

interface ILandGruppe {
  gruppeId: string;
  land: string[];
}

export interface ILandFaktum extends IBaseFaktum {
  type: "land";
  grupper: ILandGruppe[];
  gyldigeLand: string[];
  svar?: string;
}

export interface IGeneratorFaktum extends IBaseFaktum {
  type: "generator";
  svar?: Faktum[][];
  templates: Omit<Faktum, "readOnly">[];
}

export interface IPeriodeFaktumSvar {
  fom: string;
  tom?: string;
}
