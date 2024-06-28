import type { TypedObject } from "@portabletext/types";

interface ISanityBrevBlokk {
  textId: string;
  innhold: TypedObject | TypedObject[];
}

export interface ISanityBrevMal {
  brevBlokker: ISanityBrevBlokk[];
  textId: string;
}
