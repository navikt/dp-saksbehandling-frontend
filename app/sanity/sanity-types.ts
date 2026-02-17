import { PortableTextBlock } from "@portabletext/editor";

interface ISanityBrevBlokk {
  textId: string;
  innhold: Array<PortableTextBlock>;
}

export interface ISanityBrevMal {
  brevBlokker: ISanityBrevBlokk[];
  textId: string;
  navn: string;
}

export interface ISanityRegelmotorOpplysning {
  opplysningTypeId: string;
  navn: string;
  datatype: string;
}
