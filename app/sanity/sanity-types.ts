import type { TypedObject } from "@portabletext/types";

export interface ISanityBrevBlokk {
  textId: string;
  title: string;
  innhold: TypedObject | TypedObject[];
  utvidetBeskrivelse: boolean;
}

export interface ISanityOpplysningReferenceValue {
  behandlingOpplysning: ISanityBehandlingOpplysning;
}

export interface ISanityBehandlingOpplysning {
  language: string;
  textId: string;
  type: string;
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}
