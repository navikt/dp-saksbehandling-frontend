import type { components } from "../../../openapi/behandling-typer";

export const behandling0198c672111d7701a98676b0ca6b215d: components["schemas"]["Behandling"] = {
  behandlingId: "0198c672-111d-7701-a986-76b0ca6b215d",
  behandletHendelse: {
    datatype: "UUID",
    id: "0198c672-0c80-7b39-a412-abee6a332d93",
    type: "Manuell",
    skjedde: "2025-08-20",
  },
  opprettet: "2025-08-20",
  sistEndret: "2025-08-20",
  behandlingskjedeId: "01982c00-4476-7636-b147-2d0b9f4ee60d",
  basertPå: "01982c00-4476-7636-b147-2d0b9f4ee60d",
  automatisk: false,
  ident: "11888199359",
  rettighetsperioder: [],
  kreverTotrinnskontroll: true,
  tilstand: "Avbrutt",
  avklaringer: [
    {
      id: "0198c672-111d-7701-a986-76b0ca6b215b",
      kode: "ManuellBehandling",
      tittel: "Manuell behandling",
      beskrivelse: "Behandlingen er opprettet manuelt og kan ikke automatisk behandles",
      kanKvitteres: true,
      status: "Avbrutt",
      maskinelt: true,
      sistEndret: "2025-08-20T09:49:42.149634",
      regelsett: [],
    },
    {
      id: "0198c674-8685-79c6-909b-0ae6cb05d9a8",
      kode: "ReellArbeidssøkerUnntak",
      tittel: "Sjekk om søker oppfyller unntak til å være reell arbeidssøker",
      beskrivelse: "Det må vurderes om søker kvalifiserer til unntakene til reell arbeidssøker",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: false,
      begrunnelse: "Ikke villig til å flytte",
      sistEndret: "2025-08-20T09:50:12.551011",
      avklartAv: {
        ident: "Z994714",
      },
      regelsett: [
        {
          id: "-709778893",
          navn: "Reell arbeidssøker",
          hjemmel: {
            kilde: {
              navn: "Folketrygdloven",
              kortnavn: "ftrl",
            },
            kapittel: "4",
            paragraf: "5",
            tittel: "§ 4-5. Reelle arbeidssøkere",
            url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-5",
          },
          type: "Vilkår",
        },
      ],
    },
  ],
  vilkår: [
    {
      id: "2099145502",
      navn: "Krav på dagpenger",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "0",
        paragraf: "0",
        tittel: "§ 0-0. Krav på dagpenger",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§0-0",
      },
      type: "Vilkår",
      relevantForResultat: true,
      opplysninger: [],
    },
    {
      id: "-422034844",
      navn: "Opphold",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "2",
        tittel: "§ 4-2. Opphold i Norge",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-2",
      },
      type: "Vilkår",
      relevantForResultat: true,
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d54e",
      opplysninger: [
        "0196ab10-0cff-7301-99d6-65be50a50201",
        "0194881f-9443-72b4-8b30-5f6cdb24d549",
        "0194881f-9443-72b4-8b30-5f6cdb24d54a",
        "0194881f-9443-72b4-8b30-5f6cdb24d54b",
        "0194881f-9443-72b4-8b30-5f6cdb24d54c",
        "0194881f-9443-72b4-8b30-5f6cdb24d54d",
        "0194881f-9443-72b4-8b30-5f6cdb24d54e",
      ],
    },
    {
      id: "113817629",
      navn: "Tap av arbeidsinntekt og arbeidstid",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "3",
        tittel: "§ 4-3. Tap av arbeidsinntekt og arbeidstid",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-3",
      },
      type: "Vilkår",
      relevantForResultat: true,
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a76f",
      opplysninger: [
        "0194881f-9435-72a8-b1ce-9575cbc2a75e",
        "0194881f-9435-72a8-b1ce-9575cbc2a761",
        "019522d6-846d-7173-a892-67f10016d8d2",
        "0194881f-9435-72a8-b1ce-9575cbc2a762",
        "0194881f-9435-72a8-b1ce-9575cbc2a764",
        "0194881f-9435-72a8-b1ce-9575cbc2a765",
        "0194881f-9435-72a8-b1ce-9575cbc2a766",
        "0194881f-9435-72a8-b1ce-9575cbc2a767",
        "0196b4a7-23b5-7b2c-aa95-e4167d900de8",
        "0194881f-9435-72a8-b1ce-9575cbc2a76c",
        "0194881f-9435-72a8-b1ce-9575cbc2a76b",
        "0194881f-9435-72a8-b1ce-9575cbc2a768",
        "0194881f-9435-72a8-b1ce-9575cbc2a76e",
        "0194881f-9435-72a8-b1ce-9575cbc2a763",
        "0194881f-9435-72a8-b1ce-9575cbc2a76f",
      ],
    },
    {
      id: "1917405995",
      navn: "Minsteinntekt",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "4",
        tittel: "§ 4-4. Krav til minsteinntekt",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-4",
      },
      type: "Vilkår",
      relevantForResultat: false,
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f0424c",
      opplysninger: [
        "0194881f-9413-77ce-92ec-d29700f04246",
        "0194881f-9413-77ce-92ec-d29700f04247",
        "0194881f-9413-77ce-92ec-d29700f04244",
        "0194881f-9413-77ce-92ec-d29700f04245",
        "0194881f-9413-77ce-92ec-d29700f04243",
        "0194881f-9413-77ce-92ec-d29700f04241",
        "0194881f-9413-77ce-92ec-d29700f0423f",
        "0194881f-9413-77ce-92ec-d29700f04248",
        "0194881f-9413-77ce-92ec-d29700f0424a",
        "0194881f-9413-77ce-92ec-d29700f04242",
        "0194881f-9413-77ce-92ec-d29700f04240",
        "0194881f-9413-77ce-92ec-d29700f04249",
        "0194881f-9413-77ce-92ec-d29700f0424b",
        "0194881f-9413-77ce-92ec-d29700f0424c",
      ],
    },
    {
      id: "-709778893",
      navn: "Reell arbeidssøker",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "5",
        tittel: "§ 4-5. Reelle arbeidssøkere",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-5",
      },
      type: "Vilkår",
      relevantForResultat: true,
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877be2",
      opplysninger: [
        "0194881f-9435-72a8-b1ce-9575cbc2a75f",
        "0194881f-9435-72a8-b1ce-9575cbc2a769",
        "0194881f-9435-72a8-b1ce-9575cbc2a76d",
        "0194881f-9441-7d1b-a06a-6727543a141e",
        "0194881f-9441-7d1b-a06a-6727543a141f",
        "0194881f-9442-707b-a6ee-e96c06877bd9",
        "0194881f-9442-707b-a6ee-e96c06877bda",
        "0194881f-9442-707b-a6ee-e96c06877bdc",
        "0194929e-2036-7ac1-ada3-5cbe05a83f08",
        "0194881f-9442-707b-a6ee-e96c06877bde",
        "0194881f-9442-707b-a6ee-e96c06877bd8",
        "0194881f-9442-707b-a6ee-e96c06877bdb",
        "0194881f-9442-707b-a6ee-e96c06877bdd",
        "0194881f-9442-707b-a6ee-e96c06877bdf",
        "0194881f-9442-707b-a6ee-e96c06877be2",
      ],
    },
    {
      id: "1355973545",
      navn: "Registrert som arbeidssøker",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "5",
        tittel: "§ 4-5. Reelle arbeidssøkere - registrert som arbeidssøker",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-5",
      },
      type: "Vilkår",
      relevantForResultat: true,
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877be1",
      opplysninger: [
        "0194881f-9442-707b-a6ee-e96c06877be0",
        "0194881f-9442-707b-a6ee-e96c06877be1",
      ],
    },
    {
      id: "-735652124",
      navn: "Utdanning",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "6",
        tittel: "§ 4-6. Dagpenger under utdanning, opplæring, etablering av egen virksomhet m.v",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-6",
      },
      type: "Vilkår",
      relevantForResultat: true,
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b52d",
      opplysninger: [
        "0194881f-9445-734c-a7ee-045edf29b522",
        "0194881f-9445-734c-a7ee-045edf29b527",
        "0194881f-9445-734c-a7ee-045edf29b528",
        "0194881f-9445-734c-a7ee-045edf29b529",
        "0194881f-9445-734c-a7ee-045edf29b52a",
        "0194881f-9445-734c-a7ee-045edf29b52b",
        "0194881f-9445-734c-a7ee-045edf29b52c",
        "0194881f-9445-734c-a7ee-045edf29b523",
        "0194881f-9445-734c-a7ee-045edf29b524",
        "0194881f-9445-734c-a7ee-045edf29b525",
        "0194881f-9445-734c-a7ee-045edf29b526",
        "0194881f-9445-734c-a7ee-045edf29b52d",
      ],
    },
    {
      id: "726763306",
      navn: "Permittering",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "7",
        tittel: "§ 4-7. Dagpenger til permitterte",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-7",
      },
      type: "Vilkår",
      relevantForResultat: false,
      opplysningTypeId: "0194d111-db2f-7395-bcfb-959f245fd2a6",
      opplysninger: [],
    },
    {
      id: "1696849119",
      navn: "Permittering fiskeindustri",
      hjemmel: {
        kilde: {
          navn: "Forskrift til Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "6",
        paragraf: "7",
        tittel:
          "§ 6-7. Permittering i fiskeforedlingsindustrien, sjømatindustrien og fiskeoljeindustrien",
      },
      type: "Vilkår",
      relevantForResultat: false,
      opplysningTypeId: "019522b0-c722-76d4-8d7f-78f556c51f72",
      opplysninger: ["019522d2-9bb1-7960-b1e2-a959566e2428"],
    },
    {
      id: "1257708498",
      navn: "Meldeplikt",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "8",
        tittel: "§ 4-8. Meldeplikt og møteplikt",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-8",
      },
      type: "Vilkår",
      relevantForResultat: false,
      opplysninger: [],
    },
    {
      id: "443361892",
      navn: "Verneplikt",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "19",
        tittel: "§ 4-19. Dagpenger etter avtjent verneplikt",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-19",
      },
      type: "Vilkår",
      relevantForResultat: true,
      opplysningTypeId: "01948d43-e218-76f1-b29b-7e604241d98a",
      opplysninger: [
        "01948d3c-4bea-7802-9d18-5342a5e2be99",
        "01948d43-e218-76f1-b29b-7e604241d98a",
      ],
    },
    {
      id: "-1464003313",
      navn: "Streik og lock-out",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "22",
        tittel: "§ 4-22. Bortfall ved streik og lock-out",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-22",
      },
      type: "Vilkår",
      relevantForResultat: true,
      opplysningTypeId: "0194881f-91df-746a-a8ac-4a6b2b30685f",
      opplysninger: [
        "0194881f-91df-746a-a8ac-4a6b2b30685d",
        "0194881f-91df-746a-a8ac-4a6b2b30685e",
        "0194881f-91df-746a-a8ac-4a6b2b30685f",
      ],
    },
    {
      id: "2068170353",
      navn: "Alder",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "23",
        tittel: "§ 4-23. Bortfall på grunn av alder",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-23",
      },
      type: "Vilkår",
      relevantForResultat: true,
      opplysningTypeId: "0194881f-940b-76ff-acf5-ba7bcb367237",
      opplysninger: [
        "0194881f-940b-76ff-acf5-ba7bcb367233",
        "0194881f-940b-76ff-acf5-ba7bcb367234",
        "0194881f-940b-76ff-acf5-ba7bcb367235",
        "0194881f-940b-76ff-acf5-ba7bcb367236",
        "0194881f-940b-76ff-acf5-ba7bcb367237",
      ],
    },
    {
      id: "649273752",
      navn: "Fulle ytelser",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "24",
        tittel:
          "§ 4-24. Medlem som har fulle ytelser etter folketrygdloven eller avtalefestet pensjon",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-24",
      },
      type: "Vilkår",
      relevantForResultat: true,
      opplysningTypeId: "0194881f-943f-78d9-b874-00a4944c54f1",
      opplysninger: ["0194881f-943f-78d9-b874-00a4944c54f1"],
    },
    {
      id: "-408080329",
      navn: "Samordning reduserte ytelser",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "25",
        tittel:
          "§ 4-25. Samordning med reduserte ytelser fra folketrygden, eller redusert avtalefestet pensjon",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-25",
      },
      type: "Vilkår",
      relevantForResultat: false,
      opplysningTypeId: "0194881f-9434-79e8-a64d-1a23cc5d86ef",
      opplysninger: [
        "0194881f-9433-70e9-a85b-c246150c45cd",
        "0194881f-9433-70e9-a85b-c246150c45ce",
        "0194881f-9433-70e9-a85b-c246150c45cf",
        "0194881f-9433-70e9-a85b-c246150c45d0",
        "0194881f-9433-70e9-a85b-c246150c45d2",
        "0194881f-9433-70e9-a85b-c246150c45d3",
        "0194881f-9433-70e9-a85b-c246150c45d1",
        "0196afaf-afbd-7079-b2cf-3669ad9d86aa",
        "0194881f-9434-79e8-a64d-1a23cc5d86ed",
        "0194881f-9434-79e8-a64d-1a23cc5d86ee",
        "0194881f-9433-70e9-a85b-c246150c45d4",
        "0194881f-9433-70e9-a85b-c246150c45d5",
        "0194881f-9433-70e9-a85b-c246150c45d6",
        "0194881f-9433-70e9-a85b-c246150c45d7",
        "0194881f-9433-70e9-a85b-c246150c45d8",
        "0194881f-9433-70e9-a85b-c246150c45da",
        "0194881f-9433-70e9-a85b-c246150c45d9",
        "0196afc0-6807-7fa3-83e4-cf7f621f3a7e",
        "0196afbf-e32d-775a-ad10-f476e26dcb6f",
        "0194881f-9434-79e8-a64d-1a23cc5d86e9",
        "0194881f-9434-79e8-a64d-1a23cc5d86eb",
        "0194881f-9434-79e8-a64d-1a23cc5d86ec",
        "0194881f-9434-79e8-a64d-1a23cc5d86ef",
        "0194881f-9434-79e8-a64d-1a23cc5d86ea",
      ],
    },
    {
      id: "-981023914",
      navn: "Utestengning",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "28",
        tittel: "§ 4-28. Utestengning",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-28",
      },
      type: "Vilkår",
      relevantForResultat: true,
      opplysningTypeId: "0194881f-9447-7e36-a569-3e9f42bff9f7",
      opplysninger: [
        "0194881f-9447-7e36-a569-3e9f42bff9f6",
        "0194881f-9447-7e36-a569-3e9f42bff9f7",
      ],
    },
  ],
  fastsettelser: [
    {
      id: "497240064",
      navn: "Meldekortberegning",
      hjemmel: {
        kilde: {
          navn: "Meldekortberegning",
          kortnavn: "Meldekortberegning",
        },
        kapittel: "0",
        paragraf: "0",
        tittel: "§ 0-0. Meldekortberegning",
      },
      type: "Fastsettelse",
      relevantForResultat: false,
      opplysninger: [],
    },
    {
      id: "920476734",
      navn: "Rettighetstype",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "0",
        paragraf: "0",
        tittel: "§ 0-0. Rettighetstype",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§0-0",
      },
      type: "Fastsettelse",
      relevantForResultat: true,
      opplysninger: [
        "0194881f-9444-7a73-a458-0af81c034d86",
        "0194881f-9444-7a73-a458-0af81c034d85",
        "0194881f-9444-7a73-a458-0af81c034d87",
        "0194881f-9444-7a73-a458-0af81c034d88",
        "0194881f-9444-7a73-a458-0af81c034d89",
        "0194881f-9444-7a73-a458-0af81c034d8a",
        "0194881f-9444-7a73-a458-0af81c034d8b",
        "0194ff86-a035-7eb0-9c60-21899f7cc0c1",
        "01980cf4-9010-7bcf-b578-ca5a825d64ef",
      ],
    },
    {
      id: "1938248916",
      navn: "Søknadstidspunkt",
      hjemmel: {
        kilde: {
          navn: "Forskrift til Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "3",
        paragraf: "1",
        tittel: "§ 3-1. Søknadstidspunkt",
      },
      type: "Fastsettelse",
      relevantForResultat: true,
      opplysninger: [
        "0194881f-91d1-7df2-ba1d-4533f37fcc77",
        "0194881f-91d1-7df2-ba1d-4533f37fcc73",
        "0194881f-91d1-7df2-ba1d-4533f37fcc74",
        "0194881f-91d1-7df2-ba1d-4533f37fcc75",
        "0194881f-91d1-7df2-ba1d-4533f37fcc76",
      ],
    },
    {
      id: "1566092562",
      navn: "Opptjeningsperiode",
      hjemmel: {
        kilde: {
          navn: "A-opplysningsloven",
          kortnavn: "a-opplysningsloven",
        },
        kapittel: "1",
        paragraf: "2",
        tittel: "§ 1-2. Frist for levering av opplysninger",
      },
      type: "Fastsettelse",
      relevantForResultat: true,
      opplysninger: [
        "0194881f-9414-7823-8d29-0e25b7feb7ce",
        "0194881f-9414-7823-8d29-0e25b7feb7cf",
        "0194881f-9414-7823-8d29-0e25b7feb7d0",
      ],
    },
    {
      id: "-1270428739",
      navn: "Fastsettelse av arbeidstid",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "3",
        tittel: "§ 4-3. Fastsettelse av arbeidstid",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-3",
      },
      type: "Fastsettelse",
      relevantForResultat: true,
      opplysninger: ["0194881f-9435-72a8-b1ce-9575cbc2a76a"],
    },
    {
      id: "726763306",
      navn: "Permittering",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "7",
        tittel: "§ 4-7. Dagpenger til permitterte",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-7",
      },
      type: "Fastsettelse",
      relevantForResultat: false,
      opplysninger: [],
    },
    {
      id: "-1955883769",
      navn: "Permittering fiskeindustri",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "6",
        paragraf: "7",
        tittel:
          "§ 6-7. Permittering i fiskeforedlingsindustrien, sjømatindustrien og fiskeoljeindustrien",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§6-7",
      },
      type: "Fastsettelse",
      relevantForResultat: false,
      opplysninger: [],
    },
    {
      id: "-1866856189",
      navn: "Egenandel",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "9",
        tittel: "§ 4-9. Egenandel",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-9",
      },
      type: "Fastsettelse",
      relevantForResultat: false,
      opplysninger: [
        "0194881f-943f-78d9-b874-00a4944c54f0",
        "019523aa-7941-7dd2-8c43-0644d7b43f57",
        "019523aa-980d-7805-b6ed-d701e7827998",
        "0194881f-943f-78d9-b874-00a4944c54ef",
      ],
    },
    {
      id: "-657125179",
      navn: "Dagpengegrunnlag",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "11",
        tittel: "§ 4-11. Dagpengegrunnlag",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-11",
      },
      type: "Fastsettelse",
      relevantForResultat: false,
      opplysninger: [
        "0194881f-9410-7481-b263-4606fdd10ca9",
        "0194881f-9410-7481-b263-4606fdd10ca7",
        "0194881f-9410-7481-b263-4606fdd10ca8",
        "0194881f-940f-7af9-9387-052e028b29ee",
        "0194881f-940f-7af9-9387-052e028b29ed",
        "0194881f-940f-7af9-9387-052e028b29ec",
        "0194881f-9410-7481-b263-4606fdd10cad",
        "0194881f-9410-7481-b263-4606fdd10cae",
        "0194881f-9410-7481-b263-4606fdd10caf",
        "0194881f-9410-7481-b263-4606fdd10cb0",
        "0194881f-9410-7481-b263-4606fdd10cb1",
        "0194881f-9410-7481-b263-4606fdd10cb2",
        "0194881f-9410-7481-b263-4606fdd10cb3",
        "0194881f-9410-7481-b263-4606fdd10cb4",
        "0194881f-9410-7481-b263-4606fdd10cb5",
        "0194881f-9410-7481-b263-4606fdd10caa",
        "0194881f-9410-7481-b263-4606fdd10cab",
        "0194881f-9410-7481-b263-4606fdd10cac",
        "0194881f-9410-7481-b263-4606fdd10cbb",
        "0194881f-9410-7481-b263-4606fdd10cba",
        "0194881f-9410-7481-b263-4606fdd10cbc",
        "0194881f-9421-766c-9dc6-41fe6c9a1e03",
        "0194881f-9421-766c-9dc6-41fe6c9a1e05",
        "0194881f-9410-7481-b263-4606fdd10cbd",
        "0194881f-9410-7481-b263-4606fdd10cb6",
        "0194881f-9410-7481-b263-4606fdd10cb7",
        "0194881f-9410-7481-b263-4606fdd10cb8",
        "0194881f-9410-7481-b263-4606fdd10cb9",
      ],
    },
    {
      id: "984680770",
      navn: "Sats og barnetillegg",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "12",
        tittel: "§ 4-12. Dagpengenes størrelse",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-12",
      },
      type: "Fastsettelse",
      relevantForResultat: false,
      opplysninger: [
        "0194881f-9428-74d5-b160-f63a4c61a23b",
        "0194881f-9428-74d5-b160-f63a4c61a23c",
        "0194881f-9428-74d5-b160-f63a4c61a23e",
        "0194881f-9428-74d5-b160-f63a4c61a23f",
        "0194881f-9428-74d5-b160-f63a4c61a241",
        "0194881f-9428-74d5-b160-f63a4c61a23d",
        "0194881f-9428-74d5-b160-f63a4c61a244",
        "0194881f-9428-74d5-b160-f63a4c61a245",
        "0194881f-9428-74d5-b160-f63a4c61a240",
        "0194881f-9428-74d5-b160-f63a4c61a246",
        "0194881f-9428-74d5-b160-f63a4c61a247",
        "0194881f-9428-74d5-b160-f63a4c61a248",
        "0194881f-9428-74d5-b160-f63a4c61a24a",
        "0194881f-9428-74d5-b160-f63a4c61a24b",
        "0194881f-9428-74d5-b160-f63a4c61a242",
        "0194881f-9428-74d5-b160-f63a4c61a243",
        "0194881f-9428-74d5-b160-f63a4c61a24d",
        "0194881f-9428-74d5-b160-f63a4c61a24f",
        "0194881f-9428-74d5-b160-f63a4c61a250",
        "0194881f-9428-74d5-b160-f63a4c61a249",
        "0194881f-9428-74d5-b160-f63a4c61a24e",
        "0194881f-9428-74d5-b160-f63a4c61a24c",
      ],
    },
    {
      id: "46199245",
      navn: "Periode",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "15",
        tittel: "§ 4-15. Antall stønadsuker (stønadsperiode)",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-15",
      },
      type: "Fastsettelse",
      relevantForResultat: true,
      opplysninger: [
        "0194881f-943d-77a7-969c-147999f1544a",
        "0194881f-943d-77a7-969c-147999f1544b",
        "0194881f-943d-77a7-969c-147999f1544f",
        "0194881f-943d-77a7-969c-147999f15450",
        "0194881f-943d-77a7-969c-147999f1544c",
        "0194881f-943d-77a7-969c-147999f1544d",
        "0194881f-943d-77a7-969c-147999f15451",
        "0194881f-943d-77a7-969c-147999f15454",
        "0194881f-943d-77a7-969c-147999f15455",
        "0194881f-943d-77a7-969c-147999f15452",
        "0194881f-943d-77a7-969c-147999f15453",
        "0194881f-943d-77a7-969c-147999f15456",
        "0194881f-943d-77a7-969c-147999f15458",
        "0194881f-943d-77a7-969c-147999f15459",
        "0194881f-943d-77a7-969c-147999f15449",
        "0194881f-943d-77a7-969c-147999f15457",
      ],
    },
    {
      id: "-2120647254",
      navn: "Dagpenger ved verneplikt",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "19",
        tittel: "§ 4-19. Dagpenger etter avtjent verneplikt",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-19",
      },
      type: "Fastsettelse",
      relevantForResultat: true,
      opplysninger: [
        "0194881f-9421-766c-9dc6-41fe6c9a1dff",
        "0194881f-9421-766c-9dc6-41fe6c9a1e00",
        "0194881f-9421-766c-9dc6-41fe6c9a1e01",
        "0194881f-9421-766c-9dc6-41fe6c9a1e02",
      ],
    },
    {
      id: "-1762604738",
      navn: "Samordning utenfor folketrygden",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "26",
        tittel: "§ 4-26. Samordning med ytelser utenfor folketrygden",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-26",
      },
      type: "Fastsettelse",
      relevantForResultat: true,
      opplysninger: [
        "0194881f-942e-7cb0-aa59-05ea449d88e0",
        "0194881f-942e-7cb0-aa59-05ea449d88e1",
        "0194881f-942e-7cb0-aa59-05ea449d88e2",
        "0194881f-942e-7cb0-aa59-05ea449d88e3",
        "0194881f-942e-7cb0-aa59-05ea449d88e4",
        "0194881f-942e-7cb0-aa59-05ea449d88e5",
        "0194881f-942e-7cb0-aa59-05ea449d88e6",
        "0194881f-942e-7cb0-aa59-05ea449d88e7",
        "0194881f-942e-7cb0-aa59-05ea449d88e8",
        "0194881f-942f-7bde-ab16-68ffd19e9a26",
        "0194881f-942f-7bde-ab16-68ffd19e9a27",
        "0194881f-942f-7bde-ab16-68ffd19e9a28",
        "0194881f-942f-7bde-ab16-68ffd19e9a29",
        "0194881f-942f-7bde-ab16-68ffd19e9a2e",
        "0194881f-942f-7bde-ab16-68ffd19e9a2b",
        "0194881f-942f-7bde-ab16-68ffd19e9a2c",
        "0194881f-942f-7bde-ab16-68ffd19e9a2f",
        "0194881f-942f-7bde-ab16-68ffd19e9a30",
        "0194881f-942f-7bde-ab16-68ffd19e9a31",
        "0194881f-942f-7bde-ab16-68ffd19e9a32",
        "0194881f-942f-7bde-ab16-68ffd19e9a33",
        "0194881f-942f-7bde-ab16-68ffd19e9a2d",
      ],
    },
  ],
  opplysninger: [
    {
      opplysningTypeId: "0194881f-9462-78af-8977-46092bb030eb",
      navn: "fagsakId",
      datatype: "heltall",
      perioder: [
        {
          id: "01982c00-4476-7636-b147-2d0b9f4ee608",
          opprettet: "2025-07-21T10:01:11.7989",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 15480694,
            datatype: "heltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T10:01:11.798895",
            meldingId: "32c2e336-6958-478f-9d46-14b1cb3ed42c",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-91d1-7df2-ba1d-4533f37fcc77",
      navn: "søknadId",
      datatype: "tekst",
      perioder: [
        {
          id: "01982c00-4476-7636-b147-2d0b9f4ee60a",
          opprettet: "2025-07-21T10:01:11.798911",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "5801a5b4-f901-49e6-af66-f67aec525303",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T10:01:11.798911",
            meldingId: "32c2e336-6958-478f-9d46-14b1cb3ed42c",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "01958ef2-e237-77c4-89e1-de91256e2e4a",
      navn: "hendelseType",
      datatype: "tekst",
      perioder: [
        {
          id: "01982c00-4476-7636-b147-2d0b9f4ee60c",
          opprettet: "2025-07-21T10:01:11.798917",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          gyldigTilOgMed: "2025-08-19",
          verdi: {
            verdi: "SøknadInnsendtHendelse",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T10:01:11.798916",
            meldingId: "32c2e336-6958-478f-9d46-14b1cb3ed42c",
          },
        },
        {
          id: "0198c672-111c-746e-889f-83e4505bd9a4",
          opprettet: "2025-08-20T09:47:01.020841",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-08-20",
          verdi: {
            verdi: "OpprettBehandlingHendelse",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-08-20T09:47:01.020669",
            meldingId: "0198c672-0c80-7b39-a412-abee6a332d94",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-940b-76ff-acf5-ba7bcb367234",
      navn: "Aldersgrense",
      datatype: "heltall",
      perioder: [
        {
          id: "01982c00-4478-7591-b3e0-06da9e3e5325",
          opprettet: "2025-07-21T10:01:11.800678",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 67,
            enhet: "år",
            datatype: "heltall",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-940b-76ff-acf5-ba7bcb367233",
      navn: "Fødselsdato",
      datatype: "dato",
      perioder: [
        {
          id: "01982c00-51ad-7715-a3c5-30291f3cd44d",
          opprettet: "2025-07-21T10:01:15.181596",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "1981-08-11",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T10:01:14.348074",
            meldingId: "2541115e-785c-432f-8a03-c7ac0f8ea463",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-91d1-7df2-ba1d-4533f37fcc73",
      navn: "Søknadsdato",
      datatype: "dato",
      perioder: [
        {
          id: "01982c00-51ad-7715-a3c5-30291f3cd44e",
          opprettet: "2025-07-21T10:01:15.181669",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2025-07-21",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T10:01:14.348263",
            meldingId: "2541115e-785c-432f-8a03-c7ac0f8ea463",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01982c00-4476-7636-b147-2d0b9f4ee60a"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-91d1-7df2-ba1d-4533f37fcc74",
      navn: "Ønsker dagpenger fra dato",
      datatype: "dato",
      perioder: [
        {
          id: "01982c00-51ad-7715-a3c5-30291f3cd44f",
          opprettet: "2025-07-21T10:01:15.181694",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2025-06-10",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T10:01:14.348408",
            meldingId: "2541115e-785c-432f-8a03-c7ac0f8ea463",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01982c00-4476-7636-b147-2d0b9f4ee60a"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-91d1-7df2-ba1d-4533f37fcc75",
      navn: "Søknadstidspunkt",
      datatype: "dato",
      perioder: [
        {
          id: "01982c00-51ae-7cd6-9ea4-1d766a4bfd0d",
          opprettet: "2025-07-21T10:01:15.182461",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2025-07-21",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: [
              "01982c00-51ad-7715-a3c5-30291f3cd44e",
              "01982c00-51ad-7715-a3c5-30291f3cd44f",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-940b-76ff-acf5-ba7bcb367235",
      navn: "Dato søker når maks alder",
      datatype: "dato",
      perioder: [
        {
          id: "01982c00-51ae-7cd6-9ea4-1d766a4bfd0e",
          opprettet: "2025-07-21T10:01:15.182488",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2048-08-11",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "LeggTilÅr",
            },
            opplysninger: [
              "01982c00-4478-7591-b3e0-06da9e3e5325",
              "01982c00-51ad-7715-a3c5-30291f3cd44d",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-91d1-7df2-ba1d-4533f37fcc76",
      navn: "Prøvingsdato",
      datatype: "dato",
      perioder: [
        {
          id: "01982c00-51ae-7cd6-9ea4-1d766a4bfd10",
          opprettet: "2025-07-21T10:01:15.182664",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: "2025-07-21",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd0d"],
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-940b-76ff-acf5-ba7bcb367236",
      navn: "Siste mulige dag bruker kan oppfylle alderskrav",
      datatype: "dato",
      perioder: [
        {
          id: "01982c00-51ae-7cd6-9ea4-1d766a4bfd11",
          opprettet: "2025-07-21T10:01:15.182679",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2048-08-31",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteDagIMåned",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd0e"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-940b-76ff-acf5-ba7bcb367237",
      navn: "Oppfyller kravet til alder",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-51ae-7cd6-9ea4-1d766a4bfd13",
          opprettet: "2025-07-21T10:01:15.182872",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "FørEllerLik",
            },
            opplysninger: [
              "01982c00-51ae-7cd6-9ea4-1d766a4bfd10",
              "01982c00-51ae-7cd6-9ea4-1d766a4bfd11",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9414-7823-8d29-0e25b7feb7ce",
      navn: "Lovpålagt rapporteringsfrist for A-ordningen",
      datatype: "dato",
      perioder: [
        {
          id: "01982c00-51af-7297-a1b9-69c67e038561",
          opprettet: "2025-07-21T10:01:15.183114",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: "2025-07-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04246",
      navn: "Maks lengde på opptjeningsperiode",
      datatype: "heltall",
      perioder: [
        {
          id: "01982c00-51af-7297-a1b9-69c67e038562",
          opprettet: "2025-07-21T10:01:15.183127",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 36,
            enhet: "måneder",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04243",
      navn: "Grunnbeløp",
      datatype: "penger",
      perioder: [
        {
          id: "01982c00-51af-7297-a1b9-69c67e038563",
          opprettet: "2025-07-21T10:01:15.183241",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f0423f",
      navn: "Antall G for krav til 12 mnd arbeidsinntekt",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982c00-51af-7297-a1b9-69c67e038564",
          opprettet: "2025-07-21T10:01:15.183267",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 1.5,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04240",
      navn: "Antall G for krav til 36 mnd arbeidsinntekt",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982c00-51af-7297-a1b9-69c67e038565",
          opprettet: "2025-07-21T10:01:15.183281",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 3,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194ff86-a035-7eb0-9c60-21899f7cc0c1",
      navn: "Kravet til reell arbeidssøker er relevant",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-51af-7297-a1b9-69c67e038566",
          opprettet: "2025-07-21T10:01:15.183286",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9414-7823-8d29-0e25b7feb7cf",
      navn: "Arbeidsgivers rapporteringsfrist",
      datatype: "dato",
      perioder: [
        {
          id: "01982c00-51b0-722d-ac3a-00e867ff0cc1",
          opprettet: "2025-07-21T10:01:15.184027",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: "2025-07-07",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "FørsteArbeidsdag",
            },
            opplysninger: ["01982c00-51af-7297-a1b9-69c67e038561"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04248",
      navn: "Inntektskrav for siste 12 måneder",
      datatype: "penger",
      perioder: [
        {
          id: "01982c00-51b0-722d-ac3a-00e867ff0cc2",
          opprettet: "2025-07-21T10:01:15.184141",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 195240,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01982c00-51af-7297-a1b9-69c67e038563",
              "01982c00-51af-7297-a1b9-69c67e038564",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04249",
      navn: "Inntektskrav for siste 36 måneder",
      datatype: "penger",
      perioder: [
        {
          id: "01982c00-51b0-722d-ac3a-00e867ff0cc3",
          opprettet: "2025-07-21T10:01:15.18418",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01982c00-51af-7297-a1b9-69c67e038563",
              "01982c00-51af-7297-a1b9-69c67e038565",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9441-7d1b-a06a-6727543a141f",
      navn: "Det er godkjent at bruker kun søker deltidsarbeid",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-51b0-722d-ac3a-00e867ff0cc4",
          opprettet: "2025-07-21T10:01:15.184188",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bda",
      navn: "Det er godkjent at bruker kun søker arbeid lokalt",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-51b0-722d-ac3a-00e867ff0cc5",
          opprettet: "2025-07-21T10:01:15.184193",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194929e-2036-7ac1-ada3-5cbe05a83f08",
      navn: "Har helsemessige begrensninger og kan ikke ta alle typer arbeid",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-51b0-722d-ac3a-00e867ff0cc6",
          opprettet: "2025-07-21T10:01:15.184196",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a769",
      navn: "Minimum vanlig arbeidstid",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982c00-51b0-722d-ac3a-00e867ff0cc7",
          opprettet: "2025-07-21T10:01:15.184199",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 18.75,
            enhet: "timer",
            datatype: "desimaltall",
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9414-7823-8d29-0e25b7feb7d0",
      navn: "Siste avsluttende kalendermåned",
      datatype: "dato",
      perioder: [
        {
          id: "01982c00-51b0-722d-ac3a-00e867ff0cc9",
          opprettet: "2025-07-21T10:01:15.184501",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: "2025-06-30",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteavsluttendeKalenderMåned",
            },
            opplysninger: [
              "01982c00-51ae-7cd6-9ea4-1d766a4bfd10",
              "01982c00-51b0-722d-ac3a-00e867ff0cc1",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04247",
      navn: "Første måned av opptjeningsperiode",
      datatype: "dato",
      perioder: [
        {
          id: "01982c00-51b0-722d-ac3a-00e867ff0ccb",
          opprettet: "2025-07-21T10:01:15.184814",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: "2022-07-01",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "TrekkFraMåned",
            },
            opplysninger: [
              "01982c00-51af-7297-a1b9-69c67e038562",
              "01982c00-51b0-722d-ac3a-00e867ff0cc9",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9441-7d1b-a06a-6727543a141e",
      navn: "Kan jobbe heltid og deltid",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-5ad6-76d5-88f4-8bfc91230846",
          opprettet: "2025-07-21T10:01:17.526723",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T10:01:16.747564",
            meldingId: "93fafeb8-8252-4715-8e76-f6452d2ad878",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01982c00-4476-7636-b147-2d0b9f4ee60a"],
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bd9",
      navn: "Kan jobbe i hele Norge",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-5ad6-76d5-88f4-8bfc91230847",
          opprettet: "2025-07-21T10:01:17.526852",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-08-28",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T10:01:16.747827",
            meldingId: "93fafeb8-8252-4715-8e76-f6452d2ad878",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01982c00-4476-7636-b147-2d0b9f4ee60a"],
          },
        },
        {
          id: "0198c674-867e-7e76-8b2b-bc2d99f6b7cd",
          opprettet: "2025-08-20T09:49:42.142933",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-08-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-08-20T09:49:40.787788",
            ident: "Z994714",
            begrunnelse: {
              verdi: "Har kjøpt et veldig dyrt hus i Askim",
              sistEndret: "2025-08-20T09:49:40.787772",
            },
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: true,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bdc",
      navn: "Kan ta alle typer arbeid",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-5ad6-76d5-88f4-8bfc91230848",
          opprettet: "2025-07-21T10:01:17.526885",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T10:01:16.747997",
            meldingId: "93fafeb8-8252-4715-8e76-f6452d2ad878",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01982c00-4476-7636-b147-2d0b9f4ee60a"],
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bde",
      navn: "Villig til å bytte yrke",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-5ad6-76d5-88f4-8bfc91230849",
          opprettet: "2025-07-21T10:01:17.526908",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T10:01:16.748131",
            meldingId: "93fafeb8-8252-4715-8e76-f6452d2ad878",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01982c00-4476-7636-b147-2d0b9f4ee60a"],
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a75f",
      navn: "Ønsket arbeidstid",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982c00-5ad6-76d5-88f4-8bfc9123084a",
          opprettet: "2025-07-21T10:01:17.526927",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T10:01:16.748215",
            meldingId: "93fafeb8-8252-4715-8e76-f6452d2ad878",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01982c00-4476-7636-b147-2d0b9f4ee60a"],
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9444-7a73-a458-0af81c034d85",
      navn: "Har rett til ordinære dagpenger gjennom arbeidsforhold",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-5ad6-76d5-88f4-8bfc9123084b",
          opprettet: "2025-07-21T10:01:17.526946",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T10:01:16.748312",
            meldingId: "93fafeb8-8252-4715-8e76-f6452d2ad878",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01982c00-4476-7636-b147-2d0b9f4ee60a"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9444-7a73-a458-0af81c034d86",
      navn: "Bruker er permittert",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-5ad6-76d5-88f4-8bfc9123084c",
          opprettet: "2025-07-21T10:01:17.526964",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T10:01:16.748385",
            meldingId: "93fafeb8-8252-4715-8e76-f6452d2ad878",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01982c00-4476-7636-b147-2d0b9f4ee60a"],
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9444-7a73-a458-0af81c034d87",
      navn: "Forskutterte lønnsgarantimidler i form av dagpenger",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-5ad6-76d5-88f4-8bfc9123084d",
          opprettet: "2025-07-21T10:01:17.526985",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T10:01:16.748457",
            meldingId: "93fafeb8-8252-4715-8e76-f6452d2ad878",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01982c00-4476-7636-b147-2d0b9f4ee60a"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9444-7a73-a458-0af81c034d88",
      navn: "Permittert fra fiskeindustrien",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-5ad7-7445-b4e3-c12edca039ad",
          opprettet: "2025-07-21T10:01:17.527004",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T10:01:16.748525",
            meldingId: "93fafeb8-8252-4715-8e76-f6452d2ad878",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01982c00-4476-7636-b147-2d0b9f4ee60a"],
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "01948d3c-4bea-7802-9d18-5342a5e2be99",
      navn: "Avtjent verneplikt",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-5ad7-7445-b4e3-c12edca039ae",
          opprettet: "2025-07-21T10:01:17.527024",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T10:01:16.748604",
            meldingId: "93fafeb8-8252-4715-8e76-f6452d2ad878",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01982c00-4476-7636-b147-2d0b9f4ee60a"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877be0",
      navn: "Registrert som arbeidssøker",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-5ad7-7445-b4e3-c12edca039af",
          opprettet: "2025-07-21T10:01:17.527042",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T10:01:16.748775",
            meldingId: "93fafeb8-8252-4715-8e76-f6452d2ad878",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Register",
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04244",
      navn: "Inntektsopplysninger",
      datatype: "inntekt",
      perioder: [
        {
          id: "01982c00-5ad7-7445-b4e3-c12edca039b0",
          opprettet: "2025-07-21T10:01:17.52707",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: "01K0P00NWXWBPS6K97A4W49PWQ",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T10:01:16.748922",
            meldingId: "93fafeb8-8252-4715-8e76-f6452d2ad878",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: [
              "01982c00-51ae-7cd6-9ea4-1d766a4bfd10",
              "01982c00-51b0-722d-ac3a-00e867ff0cc9",
              "01982c00-51b0-722d-ac3a-00e867ff0ccb",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Register",
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04245",
      navn: "Brutto arbeidsinntekt",
      datatype: "inntekt",
      perioder: [
        {
          id: "01982c00-5ad8-7905-9303-d8dfe2914192",
          opprettet: "2025-07-21T10:01:17.528069",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: "01K0P00NWXWBPS6K97A4W49PWQ",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["01982c00-5ad7-7445-b4e3-c12edca039b0"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bd8",
      navn: "Oppfyller kravet til heltid- og deltidsarbeid",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-5ad8-7905-9303-d8dfe2914193",
          opprettet: "2025-07-21T10:01:17.528106",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01982c00-51b0-722d-ac3a-00e867ff0cc4",
              "01982c00-5ad6-76d5-88f4-8bfc91230846",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bdb",
      navn: "Oppfyller kravet til mobilitet",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-5ad8-7905-9303-d8dfe2914194",
          opprettet: "2025-07-21T10:01:17.528124",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-08-28",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01982c00-51b0-722d-ac3a-00e867ff0cc5",
              "01982c00-5ad6-76d5-88f4-8bfc91230847",
            ],
          },
        },
        {
          id: "0198c674-8681-73bd-9fe9-3f31e72eac12",
          opprettet: "2025-08-20T09:49:42.145302",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-08-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01982c00-51b0-722d-ac3a-00e867ff0cc5",
              "0198c674-867e-7e76-8b2b-bc2d99f6b7cd",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bdd",
      navn: "Oppfyller kravet til å være arbeidsfør",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-5ad8-7905-9303-d8dfe2914195",
          opprettet: "2025-07-21T10:01:17.528141",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01982c00-51b0-722d-ac3a-00e867ff0cc6",
              "01982c00-5ad6-76d5-88f4-8bfc91230848",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bdf",
      navn: "Oppfyller kravet til å ta ethvert arbeid",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-5ad8-7905-9303-d8dfe2914196",
          opprettet: "2025-07-21T10:01:17.528153",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: ["01982c00-5ad6-76d5-88f4-8bfc91230849"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a76d",
      navn: "Villig til å jobbe minimum arbeidstid",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-5ad8-7905-9303-d8dfe2914197",
          opprettet: "2025-07-21T10:01:17.528167",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01982c00-51b0-722d-ac3a-00e867ff0cc7",
              "01982c00-5ad6-76d5-88f4-8bfc9123084a",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877be1",
      navn: "Oppfyller kravet til å være registrert som arbeidssøker",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-5ad8-7905-9303-d8dfe2914198",
          opprettet: "2025-07-21T10:01:17.528176",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["01982c00-5ad7-7445-b4e3-c12edca039af"],
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9444-7a73-a458-0af81c034d89",
      navn: "Har rett til ordinære dagpenger uten arbeidsforhold",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-5ad8-7905-9303-d8dfe2914199",
          opprettet: "2025-07-21T10:01:17.528205",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: [
              "01982c00-5ad6-76d5-88f4-8bfc9123084b",
              "01982c00-5ad6-76d5-88f4-8bfc9123084c",
              "01982c00-5ad6-76d5-88f4-8bfc9123084d",
              "01982c00-5ad7-7445-b4e3-c12edca039ad",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04241",
      navn: "Arbeidsinntekt siste 12 måneder",
      datatype: "penger",
      perioder: [
        {
          id: "01982c00-5ad8-7905-9303-d8dfe291419c",
          opprettet: "2025-07-21T10:01:17.528766",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01982c00-5ad8-7905-9303-d8dfe2914192"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04242",
      navn: "Arbeidsinntekt siste 36 måneder",
      datatype: "penger",
      perioder: [
        {
          id: "01982c00-5ad9-7d3f-ba93-6e5099ff929d",
          opprettet: "2025-07-21T10:01:17.529148",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 388885,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01982c00-5ad8-7905-9303-d8dfe2914192"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877be2",
      navn: "Reell arbeidssøker",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-5ad9-7d3f-ba93-6e5099ff929e",
          opprettet: "2025-07-21T10:01:17.529209",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-08-28",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "01982c00-5ad8-7905-9303-d8dfe2914193",
              "01982c00-5ad8-7905-9303-d8dfe2914194",
              "01982c00-5ad8-7905-9303-d8dfe2914195",
              "01982c00-5ad8-7905-9303-d8dfe2914196",
              "01982c00-5ad8-7905-9303-d8dfe2914197",
            ],
          },
        },
        {
          id: "0198c674-8682-7be9-9ede-187bb708bb16",
          opprettet: "2025-08-20T09:49:42.146501",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-08-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "01982c00-5ad8-7905-9303-d8dfe2914193",
              "01982c00-5ad8-7905-9303-d8dfe2914195",
              "01982c00-5ad8-7905-9303-d8dfe2914196",
              "01982c00-5ad8-7905-9303-d8dfe2914197",
              "0198c674-8681-73bd-9fe9-3f31e72eac12",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9444-7a73-a458-0af81c034d8a",
      navn: "Ordinære dagpenger",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-5ad9-7d3f-ba93-6e5099ff929f",
          opprettet: "2025-07-21T10:01:17.52923",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01982c00-5ad6-76d5-88f4-8bfc9123084b",
              "01982c00-5ad8-7905-9303-d8dfe2914199",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f0424a",
      navn: "Arbeidsinntekt er over kravet for siste 12 måneder",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-5ad9-7d3f-ba93-6e5099ff92a1",
          opprettet: "2025-07-21T10:01:17.529606",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01982c00-51b0-722d-ac3a-00e867ff0cc2",
              "01982c00-5ad8-7905-9303-d8dfe291419c",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f0424b",
      navn: "Arbeidsinntekt er over kravet for siste 36 måneder",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-5ad9-7d3f-ba93-6e5099ff92a2",
          opprettet: "2025-07-21T10:01:17.529623",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01982c00-51b0-722d-ac3a-00e867ff0cc3",
              "01982c00-5ad9-7d3f-ba93-6e5099ff929d",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9444-7a73-a458-0af81c034d8b",
      navn: "Rettighetstype",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-5ad9-7d3f-ba93-6e5099ff92a3",
          opprettet: "2025-07-21T10:01:17.529656",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01982c00-5ad6-76d5-88f4-8bfc9123084c",
              "01982c00-5ad6-76d5-88f4-8bfc9123084d",
              "01982c00-5ad7-7445-b4e3-c12edca039ad",
              "01982c00-5ad9-7d3f-ba93-6e5099ff929f",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f0424c",
      navn: "Oppfyller kravet til minsteinntekt",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982c00-5ada-7a5f-88d9-21d939e15432",
          opprettet: "2025-07-21T10:01:17.530002",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01982c00-5ad9-7d3f-ba93-6e5099ff92a1",
              "01982c00-5ad9-7d3f-ba93-6e5099ff92a2",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "01980cf4-9010-7bcf-b578-ca5a825d64ef",
      navn: "Skal kravet til verneplikt vurderes",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-0f4d-70e0-b920-d5f603445d3b",
          opprettet: "2025-07-21T12:57:55.021731",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-07-21T12:57:54.061895",
            ident: "Z994714",
            begrunnelse: {
              verdi: "test",
              sistEndret: "2025-08-06T09:50:56.65345",
            },
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: true,
      formål: "Regel",
    },
    {
      opplysningTypeId: "01948d43-e218-76f1-b29b-7e604241d98a",
      navn: "Oppfyller kravet til verneplikt",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29ea-73e0-90e5-c8baa53ed791",
          opprettet: "2025-07-21T12:58:01.834654",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-07-21T12:58:01.10984",
            ident: "Z994714",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: true,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-943f-78d9-b874-00a4944c54f1",
      navn: "Oppfyller vilkåret om å ikke motta andre fulle ytelser",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29ed-796d-9dce-c222d259dbb0",
          opprettet: "2025-07-21T12:58:01.837282",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d54a",
      navn: "Oppfyller unntak for opphold i Norge",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29ed-796d-9dce-c222d259dbb1",
          opprettet: "2025-07-21T12:58:01.837298",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d54c",
      navn: "Bruker er medlem av folketrygden",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29ed-796d-9dce-c222d259dbb2",
          opprettet: "2025-07-21T12:58:01.837304",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-940f-7af9-9387-052e028b29ee",
      navn: "Grunnbeløp for grunnlag",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29f0-7c97-ad1c-202bcd94c405",
          opprettet: "2025-07-21T12:58:01.840524",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-940f-7af9-9387-052e028b29ed",
      navn: "Tellende inntekt",
      datatype: "inntekt",
      perioder: [
        {
          id: "01982ca2-29f0-7c97-ad1c-202bcd94c406",
          opprettet: "2025-07-21T12:58:01.84063",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: "01K0P00NWXWBPS6K97A4W49PWQ",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["01982c00-5ad7-7445-b4e3-c12edca039b0"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10ca7",
      navn: "Faktor for maksimalt mulig grunnlag",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982ca2-29f0-7c97-ad1c-202bcd94c407",
          opprettet: "2025-07-21T12:58:01.840662",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 6,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10ca9",
      navn: "Antall år i 36 måneder",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982ca2-29f0-7c97-ad1c-202bcd94c408",
          opprettet: "2025-07-21T12:58:01.840669",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 3,
            enhet: "år",
            datatype: "desimaltall",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9421-766c-9dc6-41fe6c9a1dff",
      navn: "Antall G som gis som grunnlag ved verneplikt",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982ca2-29f0-7c97-ad1c-202bcd94c409",
          opprettet: "2025-07-21T12:58:01.840688",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 3,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9421-766c-9dc6-41fe6c9a1e04",
      navn: "Grunnlag for verneplikt hvis kravet ikke er oppfylt",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29f0-7c97-ad1c-202bcd94c40a",
          opprettet: "2025-07-21T12:58:01.840693",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a23e",
      navn: "Faktor for utregning av dagsats etter dagpengegrunnlaget",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1ba7",
          opprettet: "2025-07-21T12:58:01.841064",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 0.0024,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a23d",
      navn: "Barnetilleggets størrelse i kroner per dag for hvert barn",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1ba8",
          opprettet: "2025-07-21T12:58:01.841408",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 37,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a246",
      navn: "90% av grunnlag for dagpenger",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1ba9",
          opprettet: "2025-07-21T12:58:01.841439",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 0.9,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a247",
      navn: "Antall arbeidsdager per år",
      datatype: "heltall",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1baa",
          opprettet: "2025-07-21T12:58:01.841465",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 260,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d4",
      navn: "Sykepenger dagsats",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bab",
          opprettet: "2025-07-21T12:58:01.841472",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d5",
      navn: "Pleiepenger dagsats",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bac",
          opprettet: "2025-07-21T12:58:01.841476",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d6",
      navn: "Omsorgspenger dagsats",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bad",
          opprettet: "2025-07-21T12:58:01.84148",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d7",
      navn: "Opplæringspenger dagsats",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bae",
          opprettet: "2025-07-21T12:58:01.841483",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d1",
      navn: "Uføretrygd etter lovens kapittel 12",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1baf",
          opprettet: "2025-07-21T12:58:01.841498",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d8",
      navn: "Uføre dagsats",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bb0",
          opprettet: "2025-07-21T12:58:01.841504",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0196afc0-6807-7fa3-83e4-cf7f621f3a7e",
      navn: "Sum hvis Uføre ikke skal samordnes",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bb1",
          opprettet: "2025-07-21T12:58:01.841508",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d9",
      navn: "Foreldrepenger dagsats",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bb2",
          opprettet: "2025-07-21T12:58:01.841513",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45da",
      navn: "Svangerskapspenger dagsats",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bb3",
          opprettet: "2025-07-21T12:58:01.841516",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-91df-746a-a8ac-4a6b2b30685d",
      navn: "Brukeren deltar i streik eller er omfattet av lock-out",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bb4",
          opprettet: "2025-07-21T12:58:01.84152",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-91df-746a-a8ac-4a6b2b30685e",
      navn: "Brukeren er ledig ved samme bedrift eller arbeidsplass, og blir påvirket av utfallet",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bb5",
          opprettet: "2025-07-21T12:58:01.841524",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a75d",
      navn: "Har tapt arbeid",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bb6",
          opprettet: "2025-07-21T12:58:01.841528",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a75e",
      navn: "Har krav på lønn fra arbeidsgiver",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bb7",
          opprettet: "2025-07-21T12:58:01.841532",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a76b",
      navn: "Ny arbeidstid per uke",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bb8",
          opprettet: "2025-07-21T12:58:01.841535",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a768",
      navn: "Maksimal vanlig arbeidstid",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bb9",
          opprettet: "2025-07-21T12:58:01.841556",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 40,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9421-766c-9dc6-41fe6c9a1e02",
      navn: "Fastsatt vanlig arbeidstid for verneplikt",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bba",
          opprettet: "2025-07-21T12:58:01.841574",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 37.5,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a767",
      navn: "Beregnet vanlig arbeidstid per uke før tap",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bbb",
          opprettet: "2025-07-21T12:58:01.841579",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 37.5,
            enhet: "timer",
            datatype: "desimaltall",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9434-79e8-a64d-1a23cc5d86ed",
      navn: "Antall timer arbeidstiden skal samordnes mot",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bbc",
          opprettet: "2025-07-21T12:58:01.841583",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "019522d2-9bb1-7960-b1e2-a959566e2428",
      navn: "Krav til prosentvis tap av arbeidstid ved permittering fra fiskeindustrien",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bbd",
          opprettet: "2025-07-21T12:58:01.8416",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 40,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "019522d6-846d-7173-a892-67f10016d8d2",
      navn: "Ordinært krav til prosentvis tap av arbeidstid",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bbe",
          opprettet: "2025-07-21T12:58:01.841616",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 50,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a764",
      navn: "Beregningsregel: Arbeidstid siste 6 måneder",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bbf",
          opprettet: "2025-07-21T12:58:01.84162",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a765",
      navn: "Beregningsregel: Arbeidstid siste 12 måneder",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bc0",
          opprettet: "2025-07-21T12:58:01.841624",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a766",
      navn: "Beregningsregel: Arbeidstid siste 36 måneder",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bc1",
          opprettet: "2025-07-21T12:58:01.841628",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0196b4a7-23b5-7b2c-aa95-e4167d900de8",
      navn: "Arbeidstidsreduksjonen er ikke brukt tidligere i en full stønadsperiode",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bc2",
          opprettet: "2025-07-21T12:58:01.841631",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b527",
      navn: "Deltar i arbeidsmarkedstiltak",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bc3",
          opprettet: "2025-07-21T12:58:01.841635",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b528",
      navn: "Deltar i opplæring for innvandrere",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bc4",
          opprettet: "2025-07-21T12:58:01.841638",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b529",
      navn: "Deltar i grunnskoleopplæring, videregående opplæring og opplæring i grunnleggende ferdigheter",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bc5",
          opprettet: "2025-07-21T12:58:01.841642",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b52a",
      navn: "Deltar i høyere yrkesfaglig utdanning",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bc6",
          opprettet: "2025-07-21T12:58:01.841645",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b52b",
      navn: "Deltar i høyere utdanning",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bc7",
          opprettet: "2025-07-21T12:58:01.841648",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b52c",
      navn: "Deltar på kurs mv",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bc8",
          opprettet: "2025-07-21T12:58:01.841652",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9447-7e36-a569-3e9f42bff9f6",
      navn: "Bruker er utestengt fra dagpenger",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29f1-773f-bb2a-10129f4a1bc9",
          opprettet: "2025-07-21T12:58:01.841655",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d54d",
      navn: "Oppfyller kravet til medlemskap",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29f3-7f3d-b221-f9da17fcf31f",
          opprettet: "2025-07-21T12:58:01.843812",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["01982ca2-29ed-796d-9dce-c222d259dbb2"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-940f-7af9-9387-052e028b29ec",
      navn: "Oppjustert inntekt",
      datatype: "inntekt",
      perioder: [
        {
          id: "01982ca2-29f5-742d-a79c-6ed0476abe37",
          opprettet: "2025-07-21T12:58:01.845157",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: "01K0P00NWXWBPS6K97A4W49PWQ",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Oppjuster",
            },
            opplysninger: [
              "01982ca2-29f0-7c97-ad1c-202bcd94c405",
              "01982ca2-29f0-7c97-ad1c-202bcd94c406",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10ca8",
      navn: "6 ganger grunnbeløp",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29f5-742d-a79c-6ed0476abe38",
          opprettet: "2025-07-21T12:58:01.845324",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01982ca2-29f0-7c97-ad1c-202bcd94c405",
              "01982ca2-29f0-7c97-ad1c-202bcd94c407",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9421-766c-9dc6-41fe6c9a1e00",
      navn: "Grunnlag for gis ved verneplikt",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29f5-742d-a79c-6ed0476abe39",
          opprettet: "2025-07-21T12:58:01.845352",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01982ca2-29f0-7c97-ad1c-202bcd94c405",
              "01982ca2-29f0-7c97-ad1c-202bcd94c409",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0196afaf-afbd-7079-b2cf-3669ad9d86aa",
      navn: "Uføretrygden er gitt med virkningstidspunkt i inneværende år eller innenfor de to siste kalenderår",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29f5-742d-a79c-6ed0476abe3a",
          opprettet: "2025-07-21T12:58:01.845384",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["01982ca2-29f1-773f-bb2a-10129f4a1baf"],
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-91df-746a-a8ac-4a6b2b30685f",
      navn: "Brukeren er ikke påvirket av streik eller lock-out",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29f5-742d-a79c-6ed0476abe3b",
          opprettet: "2025-07-21T12:58:01.84544",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: [
              "01982ca2-29f1-773f-bb2a-10129f4a1bb4",
              "01982ca2-29f1-773f-bb2a-10129f4a1bb5",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a760",
      navn: "Ikke krav på lønn fra tidligere arbeidsgiver",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29f5-742d-a79c-6ed0476abe3c",
          opprettet: "2025-07-21T12:58:01.84547",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: ["01982ca2-29f1-773f-bb2a-10129f4a1bb7"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9434-79e8-a64d-1a23cc5d86ee",
      navn: "Samordnet fastsatt arbeidstid",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982ca2-29f5-742d-a79c-6ed0476abe3d",
          opprettet: "2025-07-21T12:58:01.845562",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 37.5,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "01982ca2-29f1-773f-bb2a-10129f4a1bbb",
              "01982ca2-29f1-773f-bb2a-10129f4a1bbc",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a762",
      navn: "Krav til prosentvis tap av arbeidstid",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982ca2-29f5-742d-a79c-6ed0476abe3e",
          opprettet: "2025-07-21T12:58:01.845592",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 50,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "01982c00-5ad7-7445-b4e3-c12edca039ad",
              "01982ca2-29f1-773f-bb2a-10129f4a1bbd",
              "01982ca2-29f1-773f-bb2a-10129f4a1bbe",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a763",
      navn: "Beregningsregel: Tapt arbeidstid",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29f5-742d-a79c-6ed0476abe3f",
          opprettet: "2025-07-21T12:58:01.84565",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01982ca2-29f1-773f-bb2a-10129f4a1bbf",
              "01982ca2-29f1-773f-bb2a-10129f4a1bc0",
              "01982ca2-29f1-773f-bb2a-10129f4a1bc1",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b523",
      navn: "Godkjent unntak for utdanning eller opplæring?",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29f5-742d-a79c-6ed0476abe40",
          opprettet: "2025-07-21T12:58:01.845725",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01982ca2-29f1-773f-bb2a-10129f4a1bc3",
              "01982ca2-29f1-773f-bb2a-10129f4a1bc4",
              "01982ca2-29f1-773f-bb2a-10129f4a1bc5",
              "01982ca2-29f1-773f-bb2a-10129f4a1bc6",
              "01982ca2-29f1-773f-bb2a-10129f4a1bc7",
              "01982ca2-29f1-773f-bb2a-10129f4a1bc8",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9447-7e36-a569-3e9f42bff9f7",
      navn: "Oppfyller krav til ikke utestengt",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-29f5-742d-a79c-6ed0476abe41",
          opprettet: "2025-07-21T12:58:01.845745",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: ["01982ca2-29f1-773f-bb2a-10129f4a1bc9"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb0",
      navn: "Inntektperiode 1",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29f9-7cc2-aa4c-87119ecf44a0",
          opprettet: "2025-07-21T12:58:01.84961",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01982ca2-29f5-742d-a79c-6ed0476abe37"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb1",
      navn: "Inntektperiode 2",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29f9-7cc2-aa4c-87119ecf44a1",
          opprettet: "2025-07-21T12:58:01.849901",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01982ca2-29f5-742d-a79c-6ed0476abe37"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb2",
      navn: "Inntektperiode 3",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29fa-7192-b01b-474de1c69929",
          opprettet: "2025-07-21T12:58:01.850287",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 454060.22408209764,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01982ca2-29f5-742d-a79c-6ed0476abe37"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9421-766c-9dc6-41fe6c9a1e03",
      navn: "Grunnlag for verneplikt hvis kravet er oppfylt",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29fa-7192-b01b-474de1c6992a",
          opprettet: "2025-07-21T12:58:01.850319",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "01982ca2-0f4d-70e0-b920-d5f603445d3b",
              "01982ca2-29f0-7c97-ad1c-202bcd94c40a",
              "01982ca2-29f5-742d-a79c-6ed0476abe39",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0196afbf-e32d-775a-ad10-f476e26dcb6f",
      navn: "Uførebeløp som skal samordnes",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29fa-7192-b01b-474de1c6992b",
          opprettet: "2025-07-21T12:58:01.85035",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "01982ca2-29f1-773f-bb2a-10129f4a1bb0",
              "01982ca2-29f1-773f-bb2a-10129f4a1bb1",
              "01982ca2-29f5-742d-a79c-6ed0476abe3a",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a761",
      navn: "Oppfyller vilkåret til tap av arbeidsinntekt",
      datatype: "boolsk",
      perioder: [
        {
          id: "0198c672-1121-772a-82a9-3e5182ca0337",
          opprettet: "2025-08-20T09:47:01.02597",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: ["01982ca2-29f1-773f-bb2a-10129f4a1bb7"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10caa",
      navn: "Inntekt etter avkortning og oppjustering siste 12 måneder",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29fc-764e-b794-9ac5e3901457",
          opprettet: "2025-07-21T12:58:01.852018",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01982ca2-29f5-742d-a79c-6ed0476abe38",
              "01982ca2-29f9-7cc2-aa4c-87119ecf44a0",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb3",
      navn: "Avkortet inntektperiode 1",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29fc-764e-b794-9ac5e3901458",
          opprettet: "2025-07-21T12:58:01.852051",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01982ca2-29f5-742d-a79c-6ed0476abe38",
              "01982ca2-29f9-7cc2-aa4c-87119ecf44a0",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb4",
      navn: "Avkortet inntektperiode 2",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29fc-764e-b794-9ac5e3901459",
          opprettet: "2025-07-21T12:58:01.85207",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01982ca2-29f5-742d-a79c-6ed0476abe38",
              "01982ca2-29f9-7cc2-aa4c-87119ecf44a1",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb5",
      navn: "Avkortet inntektperiode 3",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29fc-764e-b794-9ac5e390145a",
          opprettet: "2025-07-21T12:58:01.8521",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 454060.22408209764,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01982ca2-29f5-742d-a79c-6ed0476abe38",
              "01982ca2-29fa-7192-b01b-474de1c69929",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9434-79e8-a64d-1a23cc5d86e9",
      navn: "Sum andre ytelser",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29fc-764e-b794-9ac5e390145b",
          opprettet: "2025-07-21T12:58:01.852222",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "01982ca2-29f1-773f-bb2a-10129f4a1bab",
              "01982ca2-29f1-773f-bb2a-10129f4a1bac",
              "01982ca2-29f1-773f-bb2a-10129f4a1bad",
              "01982ca2-29f1-773f-bb2a-10129f4a1bae",
              "01982ca2-29f1-773f-bb2a-10129f4a1bb2",
              "01982ca2-29f1-773f-bb2a-10129f4a1bb3",
              "01982ca2-29fa-7192-b01b-474de1c6992b",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cab",
      navn: "Inntekt siste 36 måneder",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29fd-7823-9118-19abbd6cec96",
          opprettet: "2025-07-21T12:58:01.853727",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 454060.22408209764,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SumAv",
            },
            opplysninger: [
              "01982ca2-29fc-764e-b794-9ac5e3901458",
              "01982ca2-29fc-764e-b794-9ac5e3901459",
              "01982ca2-29fc-764e-b794-9ac5e390145a",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cac",
      navn: "Gjennomsnittlig inntekt etter avkortning og oppjustering siste 36 måneder",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29fe-7be3-a4d8-dee23da7244d",
          opprettet: "2025-07-21T12:58:01.854874",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 151353.4080273659,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "01982ca2-29f0-7c97-ad1c-202bcd94c408",
              "01982ca2-29fd-7823-9118-19abbd6cec96",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cbb",
      navn: "Uavrundet grunnlag",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-29ff-7ad8-8d99-89e1d6005715",
          opprettet: "2025-07-21T12:58:01.855965",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 151353.4080273659,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "01982ca2-29fc-764e-b794-9ac5e3901457",
              "01982ca2-29fe-7be3-a4d8-dee23da7244d",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cbc",
      navn: "Grunnlag ved ordinære dagpenger",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-2a02-76d6-b65e-600a5eb3e113",
          opprettet: "2025-07-21T12:58:01.85855",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 151353,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["01982ca2-29ff-7ad8-8d99-89e1d6005715"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cbd",
      navn: "Dagpengegrunnlag",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-2a03-7802-8502-2f1d75ea9901",
          opprettet: "2025-07-21T12:58:01.859635",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "01982ca2-29fa-7192-b01b-474de1c6992a",
              "01982ca2-2a02-76d6-b65e-600a5eb3e113",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9421-766c-9dc6-41fe6c9a1e05",
      navn: "Grunnlaget for verneplikt er høyere enn dagpengegrunnlaget",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-2a03-7802-8502-2f1d75ea9902",
          opprettet: "2025-07-21T12:58:01.859693",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "01982ca2-29fa-7192-b01b-474de1c6992a",
              "01982ca2-2a02-76d6-b65e-600a5eb3e113",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a23f",
      navn: "Dagsats uten barnetillegg før samordning",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-2a04-7963-93bf-6c55ce8cd4e0",
          opprettet: "2025-07-21T12:58:01.86077",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 937.152,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01982ca2-29f1-773f-bb2a-10129f4a1ba7",
              "01982ca2-2a03-7802-8502-2f1d75ea9901",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a248",
      navn: "Maksimalt mulig grunnlag avgrenset til 90% av dagpengegrunnlaget",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-2a04-7963-93bf-6c55ce8cd4e1",
          opprettet: "2025-07-21T12:58:01.860823",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 351432,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01982ca2-29f1-773f-bb2a-10129f4a1ba9",
              "01982ca2-2a03-7802-8502-2f1d75ea9901",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a76c",
      navn: "Fastsatt vanlig arbeidstid etter ordinær eller verneplikt",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982ca2-2a04-7963-93bf-6c55ce8cd4e2",
          opprettet: "2025-07-21T12:58:01.86087",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 37.5,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "01982ca2-29f1-773f-bb2a-10129f4a1bba",
              "01982ca2-29f1-773f-bb2a-10129f4a1bbb",
              "01982ca2-2a03-7802-8502-2f1d75ea9902",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a241",
      navn: "Dagsats uten barnetillegg før samordning",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-2a06-74f7-b7d4-c806b23cfacc",
          opprettet: "2025-07-21T12:58:01.862009",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 937,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["01982ca2-2a04-7963-93bf-6c55ce8cd4e0"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a24a",
      navn: "Maksimal mulig dagsats avgrenset til 90% av dagpengegrunnlaget",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-2a06-74f7-b7d4-c806b23cfacd",
          opprettet: "2025-07-21T12:58:01.862117",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 1351.6615384615384,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "01982ca2-29f1-773f-bb2a-10129f4a1baa",
              "01982ca2-2a04-7963-93bf-6c55ce8cd4e1",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a76a",
      navn: "Fastsatt arbeidstid per uke før tap",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982ca2-2a06-74f7-b7d4-c806b23cface",
          opprettet: "2025-07-21T12:58:01.862151",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 37.5,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01982c00-5ad6-76d5-88f4-8bfc9123084a",
              "01982ca2-29f1-773f-bb2a-10129f4a1bb9",
              "01982ca2-29f5-742d-a79c-6ed0476abe3d",
              "01982ca2-2a04-7963-93bf-6c55ce8cd4e2",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a24b",
      navn: "Avrundet maksimal mulig dagsats avgrenset til 90% av dagpengegrunnlaget",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-2a07-73fb-936c-fa8227315177",
          opprettet: "2025-07-21T12:58:01.863263",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 1352,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["01982ca2-2a06-74f7-b7d4-c806b23cfacd"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a76e",
      navn: "Oppfyller vilkåret om tap av arbeidstid",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-2a07-73fb-936c-fa8227315178",
          opprettet: "2025-07-21T12:58:01.863317",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "SjekkAvTerskel",
            },
            opplysninger: [
              "01982ca2-29f1-773f-bb2a-10129f4a1bb8",
              "01982ca2-29f5-742d-a79c-6ed0476abe3e",
              "01982ca2-2a06-74f7-b7d4-c806b23cface",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a76f",
      navn: "Oppfyller vilkåret om tap av arbeidsinntekt og arbeidstid",
      datatype: "boolsk",
      perioder: [
        {
          id: "0198c672-1123-7321-872d-e5284ff5d6b6",
          opprettet: "2025-08-20T09:47:01.027317",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "01982ca2-29f1-773f-bb2a-10129f4a1bc2",
              "01982ca2-29f5-742d-a79c-6ed0476abe3f",
              "01982ca2-2a07-73fb-936c-fa8227315178",
              "0198c672-1121-772a-82a9-3e5182ca0337",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0196ab10-0cff-7301-99d6-65be50a50201",
      navn: "Bostedsland er Norge",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa0-7aed-b500-18331b6fddfb",
          opprettet: "2025-07-21T12:58:06.11214",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T12:58:05.436043",
            meldingId: "c43ea46f-fe91-4dd5-87b8-a86e299a7479",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01982c00-4476-7636-b147-2d0b9f4ee60a"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a23b",
      navn: "Barn",
      datatype: "barn",
      perioder: [
        {
          id: "01982ca2-3aa0-7aed-b500-18331b6fddfc",
          opprettet: "2025-07-21T12:58:06.112235",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: [
              {
                fødselsdato: "2011-12-27",
                fornavnOgMellomnavn: "VIKTIG",
                etternavn: "DOKTOR",
                statsborgerskap: "NOR",
                kvalifiserer: true,
              },
              {
                fødselsdato: "2016-01-13",
                fornavnOgMellomnavn: "VASSEN",
                etternavn: "OPPTAKSPRØVE",
                statsborgerskap: "NOR",
                kvalifiserer: true,
              },
              {
                fødselsdato: "2018-04-15",
                fornavnOgMellomnavn: "ANALYSERENDE",
                etternavn: "PREST",
                statsborgerskap: "NOR",
                kvalifiserer: true,
              },
            ],
            datatype: "barn",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T12:58:05.436325",
            meldingId: "c43ea46f-fe91-4dd5-87b8-a86e299a7479",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01982c00-4476-7636-b147-2d0b9f4ee60a"],
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Register",
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b522",
      navn: "Brukeren er under utdanning eller opplæring",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa0-7aed-b500-18331b6fddfd",
          opprettet: "2025-07-21T12:58:06.112291",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T12:58:05.437747",
            meldingId: "c43ea46f-fe91-4dd5-87b8-a86e299a7479",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01982c00-4476-7636-b147-2d0b9f4ee60a"],
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d2",
      navn: "Foreldrepenger etter lovens kapittel 14",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa0-7aed-b500-18331b6fddfe",
          opprettet: "2025-07-21T12:58:06.112342",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T12:58:05.438031",
            meldingId: "c43ea46f-fe91-4dd5-87b8-a86e299a7479",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45cf",
      navn: "Omsorgspenger etter lovens kapittel 9",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa0-7aed-b500-18331b6fddff",
          opprettet: "2025-07-21T12:58:06.11239",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T12:58:05.438294",
            meldingId: "c43ea46f-fe91-4dd5-87b8-a86e299a7479",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45ce",
      navn: "Pleiepenger etter lovens kapittel 9",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa0-7aed-b500-18331b6fde00",
          opprettet: "2025-07-21T12:58:06.112442",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T12:58:05.438597",
            meldingId: "c43ea46f-fe91-4dd5-87b8-a86e299a7479",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d3",
      navn: "Svangerskapspenger etter lovens kapittel 14",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa0-7aed-b500-18331b6fde01",
          opprettet: "2025-07-21T12:58:06.11249",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T12:58:05.438837",
            meldingId: "c43ea46f-fe91-4dd5-87b8-a86e299a7479",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d0",
      navn: "Opplæringspenger etter lovens kapittel 9",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa0-7aed-b500-18331b6fde02",
          opprettet: "2025-07-21T12:58:06.112543",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T12:58:05.439098",
            meldingId: "c43ea46f-fe91-4dd5-87b8-a86e299a7479",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45cd",
      navn: "Sykepenger etter lovens kapittel 8",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa0-7aed-b500-18331b6fde03",
          opprettet: "2025-07-21T12:58:06.11259",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T12:58:05.439318",
            meldingId: "c43ea46f-fe91-4dd5-87b8-a86e299a7479",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d549",
      navn: "Bruker oppholder seg i Norge",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa2-7c56-8824-9db326007f3f",
          opprettet: "2025-07-21T12:58:06.114497",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["01982ca2-3aa0-7aed-b500-18331b6fddfb"],
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a23c",
      navn: "Antall barn som gir rett til barnetillegg",
      datatype: "heltall",
      perioder: [
        {
          id: "01982ca2-3aa2-7c56-8824-9db326007f40",
          opprettet: "2025-07-21T12:58:06.114592",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 3,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "AntallAv",
            },
            opplysninger: ["01982ca2-3aa0-7aed-b500-18331b6fddfc"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9434-79e8-a64d-1a23cc5d86ea",
      navn: "Medlem har reduserte ytelser fra folketrygden (Samordning)",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa2-7c56-8824-9db326007f41",
          opprettet: "2025-07-21T12:58:06.114724",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01982ca2-29f5-742d-a79c-6ed0476abe3a",
              "01982ca2-3aa0-7aed-b500-18331b6fddfe",
              "01982ca2-3aa0-7aed-b500-18331b6fddff",
              "01982ca2-3aa0-7aed-b500-18331b6fde00",
              "01982ca2-3aa0-7aed-b500-18331b6fde01",
              "01982ca2-3aa0-7aed-b500-18331b6fde02",
              "01982ca2-3aa0-7aed-b500-18331b6fde03",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b524",
      navn: "Har svart ja på spørsmål om utdanning eller opplæring",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa2-7c56-8824-9db326007f42",
          opprettet: "2025-07-21T12:58:06.114739",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["01982ca2-3aa0-7aed-b500-18331b6fddfd"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b525",
      navn: "Har svart nei på spørsmål om utdanning eller opplæring",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa2-7c56-8824-9db326007f43",
          opprettet: "2025-07-21T12:58:06.114814",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErUsann",
            },
            opplysninger: ["01982ca2-3aa0-7aed-b500-18331b6fddfd"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d54b",
      navn: "Oppfyller kravet til opphold i Norge eller unntak",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa3-76e2-8952-cd020bc43826",
          opprettet: "2025-07-21T12:58:06.11582",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01982ca2-29ed-796d-9dce-c222d259dbb1",
              "01982ca2-3aa2-7c56-8824-9db326007f3f",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a244",
      navn: "Sum av barnetillegg",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aa3-76e2-8952-cd020bc43827",
          opprettet: "2025-07-21T12:58:06.115913",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 111,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01982ca2-29f1-773f-bb2a-10129f4a1ba8",
              "01982ca2-3aa2-7c56-8824-9db326007f40",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b526",
      navn: "Oppfyller kravet på unntak for utdanning eller opplæring",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa3-76e2-8952-cd020bc43828",
          opprettet: "2025-07-21T12:58:06.115968",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "01982ca2-29f5-742d-a79c-6ed0476abe40",
              "01982ca2-3aa2-7c56-8824-9db326007f42",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d54e",
      navn: "Kravet til opphold i Norge er oppfylt",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa4-75de-8177-e60237fb7d22",
          opprettet: "2025-07-21T12:58:06.116982",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "01982ca2-29f3-7f3d-b221-f9da17fcf31f",
              "01982ca2-3aa3-76e2-8952-cd020bc43826",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a245",
      navn: "Dagsats med barnetillegg før samordning",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aa5-7a5e-a968-9ec5997d1877",
          opprettet: "2025-07-21T12:58:06.117084",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 1048,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "01982ca2-2a06-74f7-b7d4-c806b23cfacc",
              "01982ca2-3aa3-76e2-8952-cd020bc43827",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a24c",
      navn: "Har barnetillegg",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa5-7a5e-a968-9ec5997d1878",
          opprettet: "2025-07-21T12:58:06.117179",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01982ca2-29f1-773f-bb2a-10129f4a1ba8",
              "01982ca2-3aa3-76e2-8952-cd020bc43827",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b52d",
      navn: "Oppfyller krav til utdanning eller opplæring",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa5-7a5e-a968-9ec5997d1879",
          opprettet: "2025-07-21T12:58:06.117241",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01982ca2-3aa2-7c56-8824-9db326007f43",
              "01982ca2-3aa3-76e2-8952-cd020bc43828",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb6",
      navn: "Har avkortet grunnlaget i periode 1",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa6-7f41-8c32-4f1849d774c6",
          opprettet: "2025-07-21T12:58:06.118826",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "01982ca2-29f5-742d-a79c-6ed0476abe38",
              "01982ca2-29f9-7cc2-aa4c-87119ecf44a0",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb7",
      navn: "Har avkortet grunnlaget i periode 2",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa6-7f41-8c32-4f1849d774c7",
          opprettet: "2025-07-21T12:58:06.118869",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "01982ca2-29f5-742d-a79c-6ed0476abe38",
              "01982ca2-29f9-7cc2-aa4c-87119ecf44a1",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb8",
      navn: "Har avkortet grunnlaget i periode 3",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa6-7f41-8c32-4f1849d774c8",
          opprettet: "2025-07-21T12:58:06.118897",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "01982ca2-29f5-742d-a79c-6ed0476abe38",
              "01982ca2-29fa-7192-b01b-474de1c69929",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cba",
      navn: "Brukt beregningsregel",
      datatype: "tekst",
      perioder: [
        {
          id: "01982ca2-3aa6-7f41-8c32-4f1849d774c9",
          opprettet: "2025-07-21T12:58:06.118951",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: "Gjennomsnittlig inntekt etter avkortning og oppjustering siste 36 måneder",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Brukt",
            },
            opplysninger: ["01982ca2-29ff-7ad8-8d99-89e1d6005715"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cad",
      navn: "Utbetalt inntekt periode 1",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b49169",
          opprettet: "2025-07-21T12:58:06.119155",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01982ca2-29f0-7c97-ad1c-202bcd94c406"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cae",
      navn: "Utbetalt inntekt periode 2",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b4916a",
          opprettet: "2025-07-21T12:58:06.119268",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01982ca2-29f0-7c97-ad1c-202bcd94c406"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10caf",
      navn: "Utbetalt inntekt periode 3",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b4916b",
          opprettet: "2025-07-21T12:58:06.11939",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 388885,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01982ca2-29f0-7c97-ad1c-202bcd94c406"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a242",
      navn: "Andel av dagsats med barnetillegg som overstiger maks andel av dagpengegrunnlaget",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b4916c",
          opprettet: "2025-07-21T12:58:06.119647",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "01982ca2-2a07-73fb-936c-fa8227315177",
              "01982ca2-3aa5-7a5e-a968-9ec5997d1877",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a249",
      navn: "Antall arbeidsdager per uke",
      datatype: "heltall",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b4916d",
          opprettet: "2025-07-21T12:58:06.119682",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 5,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a2b",
      navn: "Hvor mange prosent av G skal brukes som terskel ved samordning",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b4916e",
          opprettet: "2025-07-21T12:58:06.11971",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 0.03,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942e-7cb0-aa59-05ea449d88e7",
      navn: "Pensjon fra en offentlig tjenestepensjonsordning beløp",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b4916f",
          opprettet: "2025-07-21T12:58:06.119716",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942e-7cb0-aa59-05ea449d88e8",
      navn: "Uførepensjon fra offentlig pensjonsordning beløp",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b49170",
          opprettet: "2025-07-21T12:58:06.119721",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a26",
      navn: "Vartpenger beløp",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b49171",
          opprettet: "2025-07-21T12:58:06.119725",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a27",
      navn: "Ventelønn beløp",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b49172",
          opprettet: "2025-07-21T12:58:06.11973",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a28",
      navn: "Etterlønn beløp",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b49173",
          opprettet: "2025-07-21T12:58:06.119739",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a29",
      navn: "Garantilott fra Garantikassen for fiskere beløp",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b49174",
          opprettet: "2025-07-21T12:58:06.119743",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f1544f",
      navn: "Terskelfaktor for 12 måneder",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b49175",
          opprettet: "2025-07-21T12:58:06.119762",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 2,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f1544b",
      navn: "Lang dagpengeperiode",
      datatype: "heltall",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b49176",
          opprettet: "2025-07-21T12:58:06.119778",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 104,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f1544a",
      navn: "Kort dagpengeperiode",
      datatype: "heltall",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b49177",
          opprettet: "2025-07-21T12:58:06.119792",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 52,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15451",
      navn: "Snittinntekt siste 36 måneder",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b49178",
          opprettet: "2025-07-21T12:58:06.11988",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 129628.3333333333,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "01982c00-5ad9-7d3f-ba93-6e5099ff929d",
              "01982ca2-29f0-7c97-ad1c-202bcd94c408",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15450",
      navn: "Terskelfaktor for 36 måneder",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b49179",
          opprettet: "2025-07-21T12:58:06.119907",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 2,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15458",
      navn: "Stønadsuker når kravet til minste arbeidsinntekt ikke er oppfylt",
      datatype: "heltall",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b4917a",
          opprettet: "2025-07-21T12:58:06.119932",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 0,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15449",
      navn: "Antall dager som skal regnes med i hver uke",
      datatype: "heltall",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b4917b",
          opprettet: "2025-07-21T12:58:06.11995",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 5,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "019523aa-980d-7805-b6ed-d701e7827998",
      navn: "Ingen egenandel",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b4917c",
          opprettet: "2025-07-21T12:58:06.119956",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-943f-78d9-b874-00a4944c54f0",
      navn: "Antall dagsats for egenandel",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b4917d",
          opprettet: "2025-07-21T12:58:06.119975",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 3,
            enhet: "dager",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942e-7cb0-aa59-05ea449d88e1",
      navn: "Mottar pensjon fra en offentlig tjenestepensjonsordning",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b4917e",
          opprettet: "2025-07-21T12:58:06.11998",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942e-7cb0-aa59-05ea449d88e2",
      navn: "Mottar redusert uførepensjon fra offentlig pensjonsordning",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b4917f",
          opprettet: "2025-07-21T12:58:06.119984",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942e-7cb0-aa59-05ea449d88e3",
      navn: "Mottar vartpenger",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b49180",
          opprettet: "2025-07-21T12:58:06.119989",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942e-7cb0-aa59-05ea449d88e4",
      navn: "Mottar ventelønn",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b49181",
          opprettet: "2025-07-21T12:58:06.119993",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942e-7cb0-aa59-05ea449d88e5",
      navn: "Mottar etterlønn",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa7-7cd0-89c8-31a976b49182",
          opprettet: "2025-07-21T12:58:06.119996",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942e-7cb0-aa59-05ea449d88e6",
      navn: "Mottar garantilott fra Garantikassen for fiskere.",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa8-7f45-b3f8-cbf3516bb165",
          opprettet: "2025-07-21T12:58:06.120006",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9421-766c-9dc6-41fe6c9a1e01",
      navn: "Periode som gis ved verneplikt",
      datatype: "heltall",
      perioder: [
        {
          id: "01982ca2-3aa8-7f45-b3f8-cbf3516bb166",
          opprettet: "2025-07-21T12:58:06.120032",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 26,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01982c00-51ae-7cd6-9ea4-1d766a4bfd10"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb9",
      navn: "Har avkortet grunnlag",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aa9-73c7-9bd2-7a365922426d",
          opprettet: "2025-07-21T12:58:06.121739",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01982ca2-3aa6-7f41-8c32-4f1849d774c6",
              "01982ca2-3aa6-7f41-8c32-4f1849d774c7",
              "01982ca2-3aa6-7f41-8c32-4f1849d774c8",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a243",
      navn: "Andel av dagsats uten barnetillegg avkortet til maks andel av dagpengegrunnlaget",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aa9-73c7-9bd2-7a365922426e",
          opprettet: "2025-07-21T12:58:06.121824",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 937,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "01982ca2-2a06-74f7-b7d4-c806b23cfacc",
              "01982ca2-3aa7-7cd0-89c8-31a976b4916c",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a2c",
      navn: "Beløp tilsvarende nedre terskel av G",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aa9-73c7-9bd2-7a365922426f",
          opprettet: "2025-07-21T12:58:06.121884",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 3904.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01982ca2-29f0-7c97-ad1c-202bcd94c405",
              "01982ca2-3aa7-7cd0-89c8-31a976b4916e",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a2e",
      navn: "Sum av ytelser utenfor folketrygden",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aa9-73c7-9bd2-7a3659224270",
          opprettet: "2025-07-21T12:58:06.121952",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SumAv",
            },
            opplysninger: [
              "01982ca2-3aa7-7cd0-89c8-31a976b4916f",
              "01982ca2-3aa7-7cd0-89c8-31a976b49170",
              "01982ca2-3aa7-7cd0-89c8-31a976b49171",
              "01982ca2-3aa7-7cd0-89c8-31a976b49172",
              "01982ca2-3aa7-7cd0-89c8-31a976b49173",
              "01982ca2-3aa7-7cd0-89c8-31a976b49174",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a240",
      navn: "Avrundet ukessats med barnetillegg før samordning",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aa9-73c7-9bd2-7a3659224271",
          opprettet: "2025-07-21T12:58:06.121997",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 5240,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01982ca2-3aa5-7a5e-a968-9ec5997d1877",
              "01982ca2-3aa7-7cd0-89c8-31a976b4916d",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Legacy",
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f1544c",
      navn: "Terskel for 12 måneder",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aaa-76e4-b2ce-40395e0e5fc3",
          opprettet: "2025-07-21T12:58:06.122053",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01982c00-51af-7297-a1b9-69c67e038563",
              "01982ca2-3aa7-7cd0-89c8-31a976b49175",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f1544d",
      navn: "Terskel for 36 måneder",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aaa-76e4-b2ce-40395e0e5fc4",
          opprettet: "2025-07-21T12:58:06.122084",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01982c00-51af-7297-a1b9-69c67e038563",
              "01982ca2-3aa7-7cd0-89c8-31a976b49179",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9434-79e8-a64d-1a23cc5d86eb",
      navn: "Samordnet dagsats uten barnetillegg",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aab-7ea2-a372-44d4b7ce4421",
          opprettet: "2025-07-21T12:58:06.123753",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 937,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "01982ca2-29fc-764e-b794-9ac5e390145b",
              "01982ca2-3aa9-73c7-9bd2-7a365922426e",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15454",
      navn: "Over terskel for 12 måneder",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aab-7ea2-a372-44d4b7ce4422",
          opprettet: "2025-07-21T12:58:06.123831",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01982c00-5ad8-7905-9303-d8dfe291419c",
              "01982ca2-3aaa-76e4-b2ce-40395e0e5fc3",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15455",
      navn: "Over terskel for 36 måneder",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aab-7ea2-a372-44d4b7ce4423",
          opprettet: "2025-07-21T12:58:06.123885",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01982ca2-3aa7-7cd0-89c8-31a976b49178",
              "01982ca2-3aaa-76e4-b2ce-40395e0e5fc4",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9434-79e8-a64d-1a23cc5d86ec",
      navn: "Samordnet dagsats er større enn 0",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aab-7ea2-a372-44d4b7ce4424",
          opprettet: "2025-07-21T12:58:06.123921",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01982ca2-29fc-764e-b794-9ac5e390145b",
              "01982ca2-3aa9-73c7-9bd2-7a365922426e",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a2f",
      navn: "Samordnet ukessats uten barnetillegg",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aad-714f-9f8b-a56333f20b82",
          opprettet: "2025-07-21T12:58:06.12543",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 4685,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01982ca2-3aa7-7cd0-89c8-31a976b4916d",
              "01982ca2-3aab-7ea2-a372-44d4b7ce4421",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15452",
      navn: "Stønadsuker ved siste 12 måneder",
      datatype: "heltall",
      perioder: [
        {
          id: "01982ca2-3aad-714f-9f8b-a56333f20b83",
          opprettet: "2025-07-21T12:58:06.125463",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 52,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "01982ca2-3aa7-7cd0-89c8-31a976b49176",
              "01982ca2-3aa7-7cd0-89c8-31a976b49177",
              "01982ca2-3aab-7ea2-a372-44d4b7ce4422",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15453",
      navn: "Stønadsuker ved siste 36 måneder",
      datatype: "heltall",
      perioder: [
        {
          id: "01982ca2-3aad-714f-9f8b-a56333f20b84",
          opprettet: "2025-07-21T12:58:06.125488",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 52,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "01982ca2-3aa7-7cd0-89c8-31a976b49176",
              "01982ca2-3aa7-7cd0-89c8-31a976b49177",
              "01982ca2-3aab-7ea2-a372-44d4b7ce4423",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9434-79e8-a64d-1a23cc5d86ef",
      navn: "Utfall etter samordning",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3aad-714f-9f8b-a56333f20b85",
          opprettet: "2025-07-21T12:58:06.12554",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01982ca2-3aa5-7a5e-a968-9ec5997d1878",
              "01982ca2-3aab-7ea2-a372-44d4b7ce4424",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a30",
      navn: "Minste mulige ukessats som som kan brukes",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aaf-7b3c-8025-e9188c2c3ed7",
          opprettet: "2025-07-21T12:58:06.127125",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 3904.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01982ca2-3aa9-73c7-9bd2-7a365922426f",
              "01982ca2-3aad-714f-9f8b-a56333f20b82",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a31",
      navn: "Ukessats trukket ned for ytelser utenfor folketrygden",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aaf-7b3c-8025-e9188c2c3ed8",
          opprettet: "2025-07-21T12:58:06.127237",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 4685,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "01982ca2-3aa9-73c7-9bd2-7a3659224270",
              "01982ca2-3aad-714f-9f8b-a56333f20b82",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15456",
      navn: "Antall stønadsuker",
      datatype: "heltall",
      perioder: [
        {
          id: "01982ca2-3aaf-7b3c-8025-e9188c2c3ed9",
          opprettet: "2025-07-21T12:58:06.127281",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 52,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "01982ca2-3aad-714f-9f8b-a56333f20b83",
              "01982ca2-3aad-714f-9f8b-a56333f20b84",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a32",
      navn: "Samordnet ukessats med ytelser utenfor folketrygden",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3ab1-7508-9920-b9894e54d8e0",
          opprettet: "2025-07-21T12:58:06.129231",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 4685,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "01982ca2-3aaf-7b3c-8025-e9188c2c3ed7",
              "01982ca2-3aaf-7b3c-8025-e9188c2c3ed8",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15459",
      navn: "Antall stønadsuker (stønadsperiode)",
      datatype: "heltall",
      perioder: [
        {
          id: "01982ca2-3ab1-7508-9920-b9894e54d8e1",
          opprettet: "2025-07-21T12:58:06.129287",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 0,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "01982c00-5ada-7a5f-88d9-21d939e15432",
              "01982ca2-3aa7-7cd0-89c8-31a976b4917a",
              "01982ca2-3aaf-7b3c-8025-e9188c2c3ed9",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15457",
      navn: "Antall stønadsdager",
      datatype: "heltall",
      perioder: [
        {
          id: "01982ca2-3ab1-7508-9920-b9894e54d8e2",
          opprettet: "2025-07-21T12:58:06.12934",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 260,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01982ca2-3aa7-7cd0-89c8-31a976b4917b",
              "01982ca2-3aaf-7b3c-8025-e9188c2c3ed9",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a33",
      navn: "Dagsats uten barnetillegg samordnet",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3ab3-7df0-8357-e7112a1fbc75",
          opprettet: "2025-07-21T12:58:06.131426",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 937,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "01982ca2-3aa7-7cd0-89c8-31a976b4916d",
              "01982ca2-3ab1-7508-9920-b9894e54d8e0",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a24d",
      navn: "Samordnet dagsats med barnetillegg",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3ab5-7ef1-9c3d-bf7aa90ccbd3",
          opprettet: "2025-07-21T12:58:06.133171",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 1048,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "01982ca2-3aa3-76e2-8952-cd020bc43827",
              "01982ca2-3ab3-7df0-8357-e7112a1fbc75",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a250",
      navn: "Har samordnet",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-3ab5-7ef1-9c3d-bf7aa90ccbd4",
          opprettet: "2025-07-21T12:58:06.13323",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErUlik",
            },
            opplysninger: [
              "01982ca2-3aa9-73c7-9bd2-7a365922426e",
              "01982ca2-3ab3-7df0-8357-e7112a1fbc75",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a24f",
      navn: "Dagsats med barnetillegg etter samordning og 90 % regel",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3ab6-74e9-a1f0-b4cc6bb28ec2",
          opprettet: "2025-07-21T12:58:06.134699",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 1048,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01982ca2-2a07-73fb-936c-fa8227315177",
              "01982ca2-3ab5-7ef1-9c3d-bf7aa90ccbd3",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a24e",
      navn: "Ukessats med barnetillegg etter samordning",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3ab8-744f-8eb0-d58ed8ef7402",
          opprettet: "2025-07-21T12:58:06.13634",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 5240,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01982ca2-3aa7-7cd0-89c8-31a976b4916d",
              "01982ca2-3ab6-74e9-a1f0-b4cc6bb28ec2",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Legacy",
    },
    {
      opplysningTypeId: "019523aa-7941-7dd2-8c43-0644d7b43f57",
      navn: "Tre ganger dagsats",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3ab8-744f-8eb0-d58ed8ef7403",
          opprettet: "2025-07-21T12:58:06.13638",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 3144,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01982ca2-3aa7-7cd0-89c8-31a976b4917d",
              "01982ca2-3ab6-74e9-a1f0-b4cc6bb28ec2",
            ],
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-943f-78d9-b874-00a4944c54ef",
      navn: "Egenandel",
      datatype: "penger",
      perioder: [
        {
          id: "01982ca2-3aba-7747-a048-b40d1a5f0869",
          opprettet: "2025-07-21T12:58:06.138117",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-07-21",
          verdi: {
            verdi: 3144,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "01982c00-5ad7-7445-b4e3-c12edca039ad",
              "01982ca2-3aa7-7cd0-89c8-31a976b4917c",
              "01982ca2-3ab8-744f-8eb0-d58ed8ef7403",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942e-7cb0-aa59-05ea449d88e0",
      navn: "Oppgitt andre ytelser utenfor NAV i søknaden",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-40dc-702b-b35a-f7076821f113",
          opprettet: "2025-07-21T12:58:07.708474",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T12:58:07.06839",
            meldingId: "0ac28afe-a254-4daa-9072-56145fe4fd0b",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a2a",
      navn: "Mottar andre økonomiske ytelser fra arbeidsgiver eller tidligere arbeidsgiver enn lønn",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-40dc-702b-b35a-f7076821f114",
          opprettet: "2025-07-21T12:58:07.70853",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-21T12:58:07.06855",
            meldingId: "0ac28afe-a254-4daa-9072-56145fe4fd0b",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a2d",
      navn: "Skal samordnes med ytelser utenfor folketrygden",
      datatype: "boolsk",
      perioder: [
        {
          id: "01982ca2-40de-7c6c-ad28-30f2c6b13227",
          opprettet: "2025-07-21T12:58:07.71063",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01982ca2-3aa7-7cd0-89c8-31a976b4917e",
              "01982ca2-3aa7-7cd0-89c8-31a976b4917f",
              "01982ca2-3aa7-7cd0-89c8-31a976b49180",
              "01982ca2-3aa7-7cd0-89c8-31a976b49181",
              "01982ca2-3aa7-7cd0-89c8-31a976b49182",
              "01982ca2-3aa8-7f45-b3f8-cbf3516bb165",
              "01982ca2-40dc-702b-b35a-f7076821f113",
              "01982ca2-40dc-702b-b35a-f7076821f114",
            ],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
  ],
  forslagOm: "Endring",
};
