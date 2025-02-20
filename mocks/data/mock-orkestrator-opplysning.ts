import type { IOpplysning } from "~/models/behandling.server";
import { IOrkestratorOpplysning } from "~/models/orkestrator-opplysning.server";

const behandlingOpplysning: IOpplysning[] = [
  {
    id: "0193bfe6-3354-7f88-9f5a-46815b635fbe",
    navn: "Antall barn som gir rett til barnetillegg",
    verdi: "2",
    status: "Faktum",
    datatype: "heltall",
    redigerbar: false,
    synlig: true,
    formål: "Regel",
    gyldigFraOgMed: null,
    gyldigTilOgMed: null,
    kilde: null,
    utledetAv: {
      regel: {
        navn: "AntallAv",
      },
      opplysninger: ["0193bfe6-3340-74c7-b30f-34831602469c"],
    },
  },
  {
    id: "0194889c-1f27-74da-b699-5c960a71600b",
    navn: "Avrundet dagsats uten barnetillegg",
    verdi: "679",
    status: "Faktum",
    datatype: "penger",
    redigerbar: false,
    synlig: true,
    formål: "Regel",
    gyldigFraOgMed: null,
    gyldigTilOgMed: null,
    kilde: null,
    utledetAv: {
      regel: {
        navn: "Avrund",
      },
      opplysninger: ["0194889c-1f23-7153-98c3-a3a85410f13c"],
    },
  },
  {
    id: "0194889c-1f27-74da-b699-5c960a71600c",
    navn: "Samordnet dagsats med barnetillegg",
    verdi: "616",
    status: "Faktum",
    datatype: "penger",
    redigerbar: false,
    synlig: true,
    formål: "Regel",
    gyldigFraOgMed: null,
    gyldigTilOgMed: null,
    kilde: null,
    utledetAv: {
      regel: {
        navn: "Avrund",
      },
      opplysninger: ["0194889c-1f23-7153-98c3-a3a85410f13c"],
    },
  },
  {
    id: "0194889c-1f27-74da-b699-5c960a71600d",
    navn: "Dagsats med barnetillegg etter samordning og 90% regel",
    verdi: "616",
    status: "Faktum",
    datatype: "penger",
    redigerbar: false,
    synlig: true,
    formål: "Regel",
    gyldigFraOgMed: null,
    gyldigTilOgMed: null,
    kilde: null,
    utledetAv: {
      regel: {
        navn: "Avrund",
      },
      opplysninger: ["0194889c-1f23-7153-98c3-a3a85410f13c"],
    },
  },
  {
    id: "0194889c-1f27-74da-b699-5c960a71600e",
    navn: "Har samordnet",
    verdi: "true",
    status: "Faktum",
    datatype: "boolsk",
    redigerbar: false,
    synlig: true,
    formål: "Regel",
    gyldigFraOgMed: null,
    gyldigTilOgMed: null,
    kilde: null,
    utledetAv: {
      regel: {
        navn: "Avrund",
      },
      opplysninger: ["0194889c-1f23-7153-98c3-a3a85410f13c"],
    },
  },
];

const opplysningsBarn1: IOpplysning[] = [
  {
    id: "0193bfe6-3354-7f88-9f5a-46815b635fbe",
    navn: "Antall barn som gir rett til barnetillegg",
    verdi: "2",
    status: "Faktum",
    datatype: "heltall",
    redigerbar: false,
    synlig: true,
    formål: "Regel",
    gyldigFraOgMed: null,
    gyldigTilOgMed: null,
    kilde: null,
    utledetAv: {
      regel: {
        navn: "AntallAv",
      },
      opplysninger: ["0193bfe6-3340-74c7-b30f-34831602469c"],
    },
  },
  {
    id: "0194889c-1f27-74da-b699-5c960a71600b",
    navn: "Avrundet dagsats uten barnetillegg",
    verdi: "679",
    status: "Faktum",
    datatype: "penger",
    redigerbar: false,
    synlig: true,
    formål: "Regel",
    gyldigFraOgMed: null,
    gyldigTilOgMed: null,
    kilde: null,
    utledetAv: {
      regel: {
        navn: "Avrund",
      },
      opplysninger: ["0194889c-1f23-7153-98c3-a3a85410f13c"],
    },
  },
  {
    id: "0194889c-1f27-74da-b699-5c960a71600c",
    navn: "Samordnet dagsats med barnetillegg",
    verdi: "616",
    status: "Faktum",
    datatype: "penger",
    redigerbar: false,
    synlig: true,
    formål: "Regel",
    gyldigFraOgMed: null,
    gyldigTilOgMed: null,
    kilde: null,
    utledetAv: {
      regel: {
        navn: "Avrund",
      },
      opplysninger: ["0194889c-1f23-7153-98c3-a3a85410f13c"],
    },
  },
  {
    id: "0194889c-1f27-74da-b699-5c960a71600d",
    navn: "Dagsats med barnetillegg etter samordning og 90% regel",
    verdi: "616",
    status: "Faktum",
    datatype: "penger",
    redigerbar: false,
    synlig: true,
    formål: "Regel",
    gyldigFraOgMed: null,
    gyldigTilOgMed: null,
    kilde: null,
    utledetAv: {
      regel: {
        navn: "Avrund",
      },
      opplysninger: ["0194889c-1f23-7153-98c3-a3a85410f13c"],
    },
  },
  {
    id: "0194889c-1f27-74da-b699-5c960a71600e",
    navn: "Har samordnet",
    verdi: "true",
    status: "Faktum",
    datatype: "boolsk",
    redigerbar: false,
    synlig: true,
    formål: "Regel",
    gyldigFraOgMed: null,
    gyldigTilOgMed: null,
    kilde: null,
    utledetAv: {
      regel: {
        navn: "Avrund",
      },
      opplysninger: ["0194889c-1f23-7153-98c3-a3a85410f13c"],
    },
  },
];

const opplysningsBarn2: IOpplysning[] = [
  {
    id: "0193bfe6-3354-7f88-9f5a-46815b635fbe",
    navn: "Antall barn som gir rett til barnetillegg",
    verdi: "2",
    status: "Faktum",
    datatype: "heltall",
    redigerbar: false,
    synlig: true,
    formål: "Regel",
    gyldigFraOgMed: null,
    gyldigTilOgMed: null,
    kilde: null,
    utledetAv: {
      regel: {
        navn: "AntallAv",
      },
      opplysninger: ["0193bfe6-3340-74c7-b30f-34831602469c"],
    },
  },
  {
    id: "0194889c-1f27-74da-b699-5c960a71600b",
    navn: "Avrundet dagsats uten barnetillegg",
    verdi: "679",
    status: "Faktum",
    datatype: "penger",
    redigerbar: false,
    synlig: true,
    formål: "Regel",
    gyldigFraOgMed: null,
    gyldigTilOgMed: null,
    kilde: null,
    utledetAv: {
      regel: {
        navn: "Avrund",
      },
      opplysninger: ["0194889c-1f23-7153-98c3-a3a85410f13c"],
    },
  },
  {
    id: "0194889c-1f27-74da-b699-5c960a71600c",
    navn: "Samordnet dagsats med barnetillegg",
    verdi: "616",
    status: "Faktum",
    datatype: "penger",
    redigerbar: false,
    synlig: true,
    formål: "Regel",
    gyldigFraOgMed: null,
    gyldigTilOgMed: null,
    kilde: null,
    utledetAv: {
      regel: {
        navn: "Avrund",
      },
      opplysninger: ["0194889c-1f23-7153-98c3-a3a85410f13c"],
    },
  },
  {
    id: "0194889c-1f27-74da-b699-5c960a71600d",
    navn: "Dagsats med barnetillegg etter samordning og 90% regel",
    verdi: "616",
    status: "Faktum",
    datatype: "penger",
    redigerbar: false,
    synlig: true,
    formål: "Regel",
    gyldigFraOgMed: null,
    gyldigTilOgMed: null,
    kilde: null,
    utledetAv: {
      regel: {
        navn: "Avrund",
      },
      opplysninger: ["0194889c-1f23-7153-98c3-a3a85410f13c"],
    },
  },
  {
    id: "0194889c-1f27-74da-b699-5c960a71600e",
    navn: "Har samordnet",
    verdi: "true",
    status: "Faktum",
    datatype: "boolsk",
    redigerbar: false,
    synlig: true,
    formål: "Regel",
    gyldigFraOgMed: null,
    gyldigTilOgMed: null,
    kilde: null,
    utledetAv: {
      regel: {
        navn: "Avrund",
      },
      opplysninger: ["0194889c-1f23-7153-98c3-a3a85410f13c"],
    },
  },
];

export const mockOrkestratorOpplysning: IOrkestratorOpplysning = {
  regelsett: {
    navn: "4-12 Sats og barnetillegg",
    hjemmel: {
      kilde: {
        navn: "Folketrygdloven",
        kortnavn: "ftrl",
      },
      kapittel: "4",
      paragraf: "12",
      tittel: "ftrl § 4-12. Dagpengenes størrelse",
    },
    avklaringer: [],
    relevantForVedtak: true,
    status: "Info",
    opplysningIder: [
      "0193bfe6-3340-74c7-b30f-34831602469c",
      "0193bfe6-3354-7f88-9f5a-46815b635fbe",
    ],
  },
  opplysninger: [behandlingOpplysning, opplysningsBarn1, opplysningsBarn2]
}