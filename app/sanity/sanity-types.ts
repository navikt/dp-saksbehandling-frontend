import { PortableTextBlock } from "@portabletext/editor";

interface ISanityBrevBlokk {
  textId: string;
  innhold: Array<PortableTextBlock>;
}

export interface ISanityBrevMal {
  brevBlokker: ISanityBrevBlokk[];
  textId: string;
}
