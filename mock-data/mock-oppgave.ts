import type { IOppgave } from "~/models/oppgave.server";

export const mockOppgaver: IOppgave[] = [
  {
    uuid: "a6474baf-eebc-409c-85d9-9b55f6ff5c7e",
    person: "12345678910",
    opprettet: "2023-05-02",
    hendelse: [
      {
        ident: "12345678910",
        søknadId: "2b4d771c-195e-477b-959c-1ceffa0c6629",
        journalpostId: "",
        type: "SøknadInnsendtHendelse",
      },
    ],
    journalposter: [],
    tilstand: "TilBehandling",
    steg: [
      {
        uuid: "a85d73d2-4da0-4816-b04e-50edbbb6cf89",
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
        uuid: "6322eaf4-18d0-483d-9ca2-d724198af215",
        id: "Rettighetstype",
        type: "Fastsetting",
        svartype: "String",
        tilstand: "Utført",
        svar: {
          svar: "Test",
          type: "String",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "27ee5d79-ecf2-400b-a196-8b62a153b400",
        id: "Fastsatt vanlig arbeidstid",
        type: "Fastsetting",
        svartype: "Double",
        tilstand: "IkkeUtført",
        svar: {
          type: "Double",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "efadf3fa-1256-41cf-a210-d1efb1687a26",
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
        uuid: "3537216b-e7cc-4624-bd3d-17c785503f0c",
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
        uuid: "52a5196f-1a0e-443e-ad91-623d11ee3895",
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
        uuid: "e42f2167-b16f-4579-b382-779a3d5ecfda",
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
    uuid: "af11366c-eb31-43a8-81bd-623136c67d29",
    person: "10987654321",
    opprettet: "2023-05-02",
    hendelse: [
      {
        ident: "10987654321",
        søknadId: "1dd9327b-4806-42db-97aa-e52d4b927fc7",
        journalpostId: "",
        type: "SøknadInnsendtHendelse",
      },
    ],
    journalposter: [],
    tilstand: "TilBehandling",
    steg: [
      {
        uuid: "f27dcd64-dbfe-442d-9f10-278a7d7349d1",
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
        uuid: "18b5475e-2f82-4c80-9e12-07197b4710d1",
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
        uuid: "497feca6-537f-41ca-80ef-bab01936cc83",
        id: "Fastsatt vanlig arbeidstid",
        type: "Fastsetting",
        svartype: "Double",
        tilstand: "IkkeUtført",
        svar: {
          type: "Double",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "a0228a8b-24fb-43eb-9ef8-446cc866722d",
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
        uuid: "2a35878e-f068-4a56-973c-7c37bbf7aefc",
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
        uuid: "d6310f35-98d2-4815-9c50-5cf612f6b1bb",
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
        uuid: "9f175948-cef0-4480-b053-d0692f63f59e",
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
    uuid: "4b53ce4a-42c6-4130-9c24-3b79fb5712f8",
    person: "12837798289",
    opprettet: "2023-05-02",
    hendelse: [
      {
        ident: "12837798289",
        søknadId: "c1e651fd-a2ae-435e-a5b3-edbe29db27bb",
        journalpostId: "",
        type: "SøknadInnsendtHendelse",
      },
    ],
    journalposter: [],
    tilstand: "TilBehandling",
    steg: [
      {
        uuid: "1937b6e3-154b-4679-87fe-f99a6f7397d3",
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
        uuid: "61736c9d-8bb5-4e9a-a70f-77fc760accfd",
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
        uuid: "c290e484-d641-4ff1-83a0-6e8b2d0371a2",
        id: "Fastsatt vanlig arbeidstid",
        type: "Fastsetting",
        svartype: "Double",
        tilstand: "IkkeUtført",
        svar: {
          type: "Double",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "5ab46fe5-0104-4103-a2f3-41a93d5d8250",
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
        uuid: "6c909162-4645-478e-a2b8-2eb4646b168f",
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
        uuid: "08a403a7-a3b2-4201-95bb-d9f16118cd3d",
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
        uuid: "289843db-a42b-4e13-b23e-4369c2b054de",
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
    uuid: "81153b3f-0403-490c-931c-3d41697376cf",
    person: "08896699289",
    opprettet: "2023-05-02",
    hendelse: [
      {
        ident: "08896699289",
        søknadId: "7e00832c-4afa-4832-b09d-6977b18e68b1",
        journalpostId: "598137389",
        type: "SøknadInnsendtHendelse",
      },
    ],
    journalposter: ["598137389"],
    tilstand: "TilBehandling",
    steg: [
      {
        uuid: "c54a086d-e4a9-48d1-9068-2fb49c4ce4f8",
        id: "Virkningsdato",
        type: "Fastsetting",
        svartype: "LocalDate",
        tilstand: "Utført",
        svar: {
          svar: "2023-05-01",
          type: "LocalDate",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "60528a5c-6e03-4a69-8017-edd8d87c0015",
        id: "Rettighetstype",
        type: "Fastsetting",
        svartype: "String",
        tilstand: "Utført",
        svar: {
          svar: "dfsa",
          type: "String",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "9ea91f23-3aac-4ff0-93cf-526697f07c81",
        id: "Fastsatt vanlig arbeidstid",
        type: "Fastsetting",
        svartype: "Double",
        tilstand: "IkkeUtført",
        svar: {
          type: "Double",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "699e786f-e34c-49b6-a392-1b543a3f3ed4",
        id: "Grunnlag",
        type: "Fastsetting",
        svartype: "Int",
        tilstand: "MåGodkjennes",
        svar: {
          svar: "123123123",
          type: "Int",
          begrunnelse: {
            kilde: "",
            tekst: "",
          },
        },
      },
      {
        uuid: "1049d1be-d8e3-48e2-9820-7e6fb2644b46",
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
        uuid: "86a779c8-b48b-4342-bf10-a853c8e53567",
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
        uuid: "16da48f7-3221-481b-86e9-c5aa3af92bdf",
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
];
