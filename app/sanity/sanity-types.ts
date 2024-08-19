import type { TypedObject } from "@portabletext/types";

export interface ISanityBrevBlokk {
  textId: string;
  innhold: TypedObject | TypedObject[];
  utvidetBeskrivelse: boolean;
}
