import type { IOppgave } from "~/models/oppgave.server";

export const oppgaverResponse: IOppgave[] = [
  {
    uuid: "msw-c2e5845f-d139-490a-8925-890269994363",
    person: "12345678910",
    opprettet: "2023-04-25",
    hendelse: [],
    tilstand: "TilBehandling",
    journalposter: [],
    steg: [
      {
        uuid: "58402b6b-fb74-4dfc-a59c-c06ad2a40934",
        id: "Virkningsdato",
        type: "Fastsetting",
        svartype: "LocalDate",
        tilstand: "IkkeUtført",
        svar: {
          type: "LocalDate",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "962305f9-3ec5-482c-9d59-558c7653749a",
        id: "Rettighetstype",
        type: "Fastsetting",
        svartype: "String",
        tilstand: "IkkeUtført",
        svar: {
          type: "String",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "7774d126-b9ce-4313-aada-eb37938232ed",
        id: "Fastsatt vanlig arbeidstid",
        type: "Fastsetting",
        svartype: "Int",
        tilstand: "IkkeUtført",
        svar: {
          type: "Int",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "94388341-4e82-4961-aa4a-69a29e72b0f7",
        id: "Grunnlag",
        type: "Fastsetting",
        svartype: "Int",
        tilstand: "IkkeUtført",
        svar: {
          type: "Int",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "7f775daa-2cfb-4a6d-8378-6433508e2a69",
        id: "Dagsats",
        type: "Fastsetting",
        svartype: "Int",
        tilstand: "Utført",
        svar: {
          svar: "120",
          type: "Int",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "cc6d4922-d522-4bb4-b9e4-652167ae6298",
        id: "Periode",
        type: "Fastsetting",
        svartype: "Int",
        tilstand: "IkkeUtført",
        svar: {
          type: "Int",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "3a5f4a3c-8fd9-4ff4-840e-df0f2b988a30",
        id: "Oppfyller kravene til dagpenger",
        type: "Vilkår",
        svartype: "Boolean",
        tilstand: "IkkeUtført",
        svar: {
          type: "Boolean",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
    ],
    muligeTilstander: ["VentPåMangelbrev"],
  },
  {
    uuid: "1c206443-19ff-49c4-9d8e-ae8db247bf8a",
    person: "10987654321",
    opprettet: "2023-04-25",
    hendelse: [],
    tilstand: "TilBehandling",
    journalposter: [],
    steg: [
      {
        uuid: "8ebee9d8-bdaa-4256-a264-e48ce0cf7775",
        id: "Virkningsdato",
        type: "Fastsetting",
        svartype: "LocalDate",
        tilstand: "IkkeUtført",
        svar: {
          type: "LocalDate",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "df3a3913-c9d9-4cd5-94e4-872615263e1a",
        id: "Rettighetstype",
        type: "Fastsetting",
        svartype: "String",
        tilstand: "IkkeUtført",
        svar: {
          type: "String",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "2b0eb804-07c1-4cd6-9cf8-b504093ed54a",
        id: "Fastsatt vanlig arbeidstid",
        type: "Fastsetting",
        svartype: "Int",
        tilstand: "IkkeUtført",
        svar: {
          type: "Int",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "8afbea3d-fc02-4e6d-a691-17b5005b7e49",
        id: "Grunnlag",
        type: "Fastsetting",
        svartype: "Int",
        tilstand: "IkkeUtført",
        svar: {
          type: "Int",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "c23ba5e9-55e1-4ed4-a624-cfdae9592be7",
        id: "Dagsats",
        type: "Fastsetting",
        svartype: "Int",
        tilstand: "IkkeUtført",
        svar: {
          type: "Int",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "9743b4c8-daa2-4cfa-8424-fa87ef6192aa",
        id: "Periode",
        type: "Fastsetting",
        svartype: "Int",
        tilstand: "IkkeUtført",
        svar: {
          type: "Int",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "ee341c1e-5c61-4fe8-ad08-e3a5ad5a9b08",
        id: "Oppfyller kravene til dagpenger",
        type: "Vilkår",
        svartype: "Boolean",
        tilstand: "IkkeUtført",
        svar: {
          type: "Boolean",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
    ],
    muligeTilstander: ["VentPåMangelbrev"],
  },
  {
    uuid: "d04cbaea-dc4d-42a9-a5ff-c983ec4870e5",
    person: "29889196546",
    opprettet: "2023-04-25",
    hendelse: [],
    tilstand: "Innstilt",
    journalposter: [],
    steg: [
      {
        uuid: "f509ca93-8882-4212-84e1-7075d8be5b72",
        id: "Virkningsdato",
        type: "Fastsetting",
        svartype: "LocalDate",
        tilstand: "Utført",
        svar: {
          svar: "2023-04-13",
          type: "LocalDate",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "e2ebca09-4794-45d4-a93f-dd43a41b32d0",
        id: "Rettighetstype",
        type: "Fastsetting",
        svartype: "String",
        tilstand: "Utført",
        svar: {
          svar: "ert",
          type: "String",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "94e9fc45-0b69-4f03-85d4-3182cf58d6c2",
        id: "Fastsatt vanlig arbeidstid",
        type: "Fastsetting",
        svartype: "Int",
        tilstand: "Utført",
        svar: {
          svar: "34325",
          type: "Int",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "1e78e670-b972-4c51-bf6c-7df3b7ab18df",
        id: "Grunnlag",
        type: "Fastsetting",
        svartype: "Int",
        tilstand: "Utført",
        svar: {
          svar: "345",
          type: "Int",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "e6f05dd0-e449-424c-9085-9a0bc195df0e",
        id: "Dagsats",
        type: "Fastsetting",
        svartype: "Int",
        tilstand: "Utført",
        svar: {
          svar: "345",
          type: "Int",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "dc6bed6d-2c45-4968-a3d8-892dac8937d8",
        id: "Periode",
        type: "Fastsetting",
        svartype: "Int",
        tilstand: "Utført",
        svar: {
          svar: "345",
          type: "Int",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "20d7e3ce-7164-46e7-b38f-2a2c5fc56b2e",
        id: "Oppfyller kravene til dagpenger",
        type: "Vilkår",
        svartype: "Boolean",
        tilstand: "Utført",
        svar: {
          svar: "true",
          type: "Boolean",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
    ],
    muligeTilstander: ["TilBehandling", "Vedtak"],
  },
];
