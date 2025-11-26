import type { components } from "../../../openapi/behandling-typer";

export const behandling019a5898c8057a2fbb1725cb89f1eac4: components["schemas"]["Behandling"] = {
  behandlingId: "019a5898-c805-7a2f-bb17-25cb89f1eac4",
  behandletHendelse: {
    datatype: "UUID",
    id: "019a5898-c7e8-73ed-b8ab-396dcab26073",
    type: "Manuell",
    skjedde: "2025-11-06",
  },
  behandlingskjedeId: "019a584d-966b-794d-b2a5-d5bd87cb6e4f",
  basertPå: "019a584d-966b-794d-b2a5-d5bd87cb6e4f",
  automatisk: false,
  ident: "05868899613",
  rettighetsperioder: [
    {
      fraOgMed: "2025-11-06",
      tilOgMed: "2025-11-12",
      harRett: true,
      opprinnelse: "Ny",
    },
  ],
  kreverTotrinnskontroll: true,
  tilstand: "TilGodkjenning",
  avklaringer: [
    {
      id: "019a5898-c805-7a2f-bb17-25cb89f1eac2",
      kode: "ManuellBehandling",
      tittel: "Manuell behandling",
      beskrivelse: "Behandlingen er opprettet manuelt og kan ikke automatisk behandles",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: false,
      begrunnelse: "Stans. Begynner i full jobb.",
      sistEndret: "2025-11-26T08:23:23.383225",
      avklartAv: {
        ident: "Z990436",
      },
      regelsett: [],
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
      opplysninger: ["01990a09-0eab-7957-b88f-14484a50e194"],
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
      relevantForResultat: true,
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
      relevantForResultat: false,
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
      relevantForResultat: true,
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
      relevantForResultat: false,
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
          id: "019a584d-966b-794d-b2a5-d5bd87cb6e4a",
          opprettet: "2025-11-06T09:34:31.147086",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 15605825,
            datatype: "heltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:31.147036",
            meldingId: "4749e892-e1cb-4023-9b3c-a678a5d2a5cf",
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
          id: "019a584d-966b-794d-b2a5-d5bd87cb6e4c",
          opprettet: "2025-11-06T09:34:31.147118",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "5884f33e-53b3-4a7a-9b51-c3ed0c86f29e",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:31.147117",
            meldingId: "4749e892-e1cb-4023-9b3c-a678a5d2a5cf",
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
          id: "019a5898-c805-7a2f-bb17-25cb89f1eac1",
          opprettet: "2025-11-06T10:56:39.045242",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-06",
          gyldigTilOgMed: "2025-11-06",
          verdi: {
            verdi: "OpprettBehandlingHendelse",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T10:56:39.045235",
            meldingId: "019a5898-c7e8-73ed-b8ab-396dcab26074",
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
          id: "019a584d-966c-79e9-82ac-7715fdbc6a65",
          opprettet: "2025-11-06T09:34:31.148505",
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
          id: "019a584d-97a9-705f-8fd0-f72bb6b3585a",
          opprettet: "2025-11-06T09:34:31.46508",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "1988-06-05",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:31.436385",
            meldingId: "c129ba0e-fb15-4267-b59e-f7e1452208d7",
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
          id: "019a584d-97a9-705f-8fd0-f72bb6b3585b",
          opprettet: "2025-11-06T09:34:31.465223",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2025-11-06",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:31.436711",
            meldingId: "c129ba0e-fb15-4267-b59e-f7e1452208d7",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a584d-966b-794d-b2a5-d5bd87cb6e4c"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-97a9-705f-8fd0-f72bb6b3585c",
          opprettet: "2025-11-06T09:34:31.465259",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2025-11-06",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:31.436836",
            meldingId: "c129ba0e-fb15-4267-b59e-f7e1452208d7",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a584d-966b-794d-b2a5-d5bd87cb6e4c"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-97a9-705f-8fd0-f72bb6b3585e",
          opprettet: "2025-11-06T09:34:31.465808",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2025-11-06",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: [
              "019a584d-97a9-705f-8fd0-f72bb6b3585b",
              "019a584d-97a9-705f-8fd0-f72bb6b3585c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-97a9-705f-8fd0-f72bb6b3585f",
          opprettet: "2025-11-06T09:34:31.465843",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2055-06-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "LeggTilÅr",
            },
            opplysninger: [
              "019a584d-966c-79e9-82ac-7715fdbc6a65",
              "019a584d-97a9-705f-8fd0-f72bb6b3585a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-97a9-705f-8fd0-f72bb6b35861",
          opprettet: "2025-11-06T09:34:31.465945",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: "2025-11-06",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b3585e"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-97a9-705f-8fd0-f72bb6b35862",
          opprettet: "2025-11-06T09:34:31.465977",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2055-06-30",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteDagIMåned",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b3585f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-97aa-75d4-b39f-a1c0b1ed5f44",
          opprettet: "2025-11-06T09:34:31.466099",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "FørEllerLik",
            },
            opplysninger: [
              "019a584d-97a9-705f-8fd0-f72bb6b35861",
              "019a584d-97a9-705f-8fd0-f72bb6b35862",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-97aa-75d4-b39f-a1c0b1ed5f46",
          opprettet: "2025-11-06T09:34:31.466364",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: "2025-11-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-97aa-75d4-b39f-a1c0b1ed5f47",
          opprettet: "2025-11-06T09:34:31.466386",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 36,
            enhet: "måneder",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-97aa-75d4-b39f-a1c0b1ed5f48",
          opprettet: "2025-11-06T09:34:31.466572",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-97aa-75d4-b39f-a1c0b1ed5f49",
          opprettet: "2025-11-06T09:34:31.466621",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 1.5,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-97aa-75d4-b39f-a1c0b1ed5f4a",
          opprettet: "2025-11-06T09:34:31.466639",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 3,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-97aa-75d4-b39f-a1c0b1ed5f4b",
          opprettet: "2025-11-06T09:34:31.466649",
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
          id: "019a584d-97ab-762e-89a0-45a85f69613a",
          opprettet: "2025-11-06T09:34:31.467381",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: "2025-11-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "FørsteArbeidsdag",
            },
            opplysninger: ["019a584d-97aa-75d4-b39f-a1c0b1ed5f46"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-97ab-762e-89a0-45a85f69613b",
          opprettet: "2025-11-06T09:34:31.46754",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 195240,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a584d-97aa-75d4-b39f-a1c0b1ed5f48",
              "019a584d-97aa-75d4-b39f-a1c0b1ed5f49",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-97ab-762e-89a0-45a85f69613c",
          opprettet: "2025-11-06T09:34:31.467568",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a584d-97aa-75d4-b39f-a1c0b1ed5f48",
              "019a584d-97aa-75d4-b39f-a1c0b1ed5f4a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a769",
      navn: "Minimum vanlig arbeidstid",
      datatype: "desimaltall",
      perioder: [
        {
          id: "019a584d-97ab-762e-89a0-45a85f69613d",
          opprettet: "2025-11-06T09:34:31.467577",
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
          id: "019a584d-97ab-762e-89a0-45a85f69613f",
          opprettet: "2025-11-06T09:34:31.467768",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: "2025-10-31",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteavsluttendeKalenderMåned",
            },
            opplysninger: [
              "019a584d-97a9-705f-8fd0-f72bb6b35861",
              "019a584d-97ab-762e-89a0-45a85f69613a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-97ab-762e-89a0-45a85f696141",
          opprettet: "2025-11-06T09:34:31.467894",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: "2022-11-01",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "TrekkFraMåned",
            },
            opplysninger: [
              "019a584d-97aa-75d4-b39f-a1c0b1ed5f47",
              "019a584d-97ab-762e-89a0-45a85f69613f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afa8-7c3a-b773-dcf1265b1658",
          opprettet: "2025-11-06T09:34:37.608533",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:37.572421",
            meldingId: "0329bfec-d81c-4a09-90d2-1e503c5b6448",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a584d-966b-794d-b2a5-d5bd87cb6e4c"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afa8-7c3a-b773-dcf1265b1659",
          opprettet: "2025-11-06T09:34:37.608617",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:37.572567",
            meldingId: "0329bfec-d81c-4a09-90d2-1e503c5b6448",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a584d-966b-794d-b2a5-d5bd87cb6e4c"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bdc",
      navn: "Kan ta alle typer arbeid",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a584d-afa8-7c3a-b773-dcf1265b165a",
          opprettet: "2025-11-06T09:34:37.608654",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:37.572666",
            meldingId: "0329bfec-d81c-4a09-90d2-1e503c5b6448",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a584d-966b-794d-b2a5-d5bd87cb6e4c"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afa8-7c3a-b773-dcf1265b165b",
          opprettet: "2025-11-06T09:34:37.608686",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:37.572776",
            meldingId: "0329bfec-d81c-4a09-90d2-1e503c5b6448",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a584d-966b-794d-b2a5-d5bd87cb6e4c"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afa8-7c3a-b773-dcf1265b165c",
          opprettet: "2025-11-06T09:34:37.608713",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:37.572876",
            meldingId: "0329bfec-d81c-4a09-90d2-1e503c5b6448",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a584d-966b-794d-b2a5-d5bd87cb6e4c"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afa8-7c3a-b773-dcf1265b165d",
          opprettet: "2025-11-06T09:34:37.60874",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:37.572962",
            meldingId: "0329bfec-d81c-4a09-90d2-1e503c5b6448",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a584d-966b-794d-b2a5-d5bd87cb6e4c"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afa8-7c3a-b773-dcf1265b165e",
          opprettet: "2025-11-06T09:34:37.608773",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:37.573109",
            meldingId: "0329bfec-d81c-4a09-90d2-1e503c5b6448",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a584d-966b-794d-b2a5-d5bd87cb6e4c"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afa8-7c3a-b773-dcf1265b165f",
          opprettet: "2025-11-06T09:34:37.608801",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:37.573211",
            meldingId: "0329bfec-d81c-4a09-90d2-1e503c5b6448",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a584d-966b-794d-b2a5-d5bd87cb6e4c"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afa8-7c3a-b773-dcf1265b1660",
          opprettet: "2025-11-06T09:34:37.608835",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:37.573307",
            meldingId: "0329bfec-d81c-4a09-90d2-1e503c5b6448",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a584d-966b-794d-b2a5-d5bd87cb6e4c"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afa8-7c3a-b773-dcf1265b1661",
          opprettet: "2025-11-06T09:34:37.608867",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:37.57339",
            meldingId: "0329bfec-d81c-4a09-90d2-1e503c5b6448",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a584d-966b-794d-b2a5-d5bd87cb6e4c"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afa8-7c3a-b773-dcf1265b1662",
          opprettet: "2025-11-06T09:34:37.608905",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-05",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:37.573496",
            meldingId: "0329bfec-d81c-4a09-90d2-1e503c5b6448",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afa8-7c3a-b773-dcf1265b1663",
          opprettet: "2025-11-06T09:34:37.608977",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: "01K9C4VBDR9Z81SHXMS03HEPYJ",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:37.573605",
            meldingId: "0329bfec-d81c-4a09-90d2-1e503c5b6448",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: [
              "019a584d-97a9-705f-8fd0-f72bb6b35861",
              "019a584d-97ab-762e-89a0-45a85f69613f",
              "019a584d-97ab-762e-89a0-45a85f696141",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afa9-7151-ad30-f4a89778b3f8",
          opprettet: "2025-11-06T09:34:37.609744",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: "01K9C4VBDR9Z81SHXMS03HEPYJ",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["019a584d-afa8-7c3a-b773-dcf1265b1663"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: false,
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
          id: "019a584d-afa9-7151-ad30-f4a89778b3f9",
          opprettet: "2025-11-06T09:34:37.609777",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019a584d-afa8-7c3a-b773-dcf1265b1658"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afa9-7151-ad30-f4a89778b3fa",
          opprettet: "2025-11-06T09:34:37.609797",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019a584d-afa8-7c3a-b773-dcf1265b1659"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: false,
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
          id: "019a584d-afa9-7151-ad30-f4a89778b3fb",
          opprettet: "2025-11-06T09:34:37.609811",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019a584d-afa8-7c3a-b773-dcf1265b165a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bdf",
      navn: "Oppfyller kravet til å ta ethvert arbeid",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a584d-afa9-7151-ad30-f4a89778b3fc",
          opprettet: "2025-11-06T09:34:37.609843",
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
            opplysninger: ["019a584d-afa8-7c3a-b773-dcf1265b165b"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afa9-7151-ad30-f4a89778b3fd",
          opprettet: "2025-11-06T09:34:37.609884",
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
              "019a584d-97ab-762e-89a0-45a85f69613d",
              "019a584d-afa8-7c3a-b773-dcf1265b165c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afa9-7151-ad30-f4a89778b3fe",
          opprettet: "2025-11-06T09:34:37.609906",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-05",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019a584d-afa8-7c3a-b773-dcf1265b1662"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afa9-7151-ad30-f4a89778b3ff",
          opprettet: "2025-11-06T09:34:37.609935",
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
              "019a584d-afa8-7c3a-b773-dcf1265b165d",
              "019a584d-afa8-7c3a-b773-dcf1265b165e",
              "019a584d-afa8-7c3a-b773-dcf1265b165f",
              "019a584d-afa8-7c3a-b773-dcf1265b1660",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: false,
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
          id: "019a584d-afa9-7151-ad30-f4a89778b400",
          opprettet: "2025-11-06T09:34:37.60995",
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
            opplysninger: ["019a584d-afa8-7c3a-b773-dcf1265b1661"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04241",
      navn: "Arbeidsinntekt siste 12 måneder",
      datatype: "penger",
      perioder: [
        {
          id: "019a584d-afaa-70c1-8d94-26dde9036074",
          opprettet: "2025-11-06T09:34:37.610687",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 540000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a584d-afa9-7151-ad30-f4a89778b3f8"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afab-72cd-8afc-dcb7dd5e36da",
          opprettet: "2025-11-06T09:34:37.611997",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 1575000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a584d-afa9-7151-ad30-f4a89778b3f8"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: true,
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
          id: "019a584d-afac-7f2c-80c8-c2de8dd1cd9f",
          opprettet: "2025-11-06T09:34:37.612036",
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
              "019a584d-afa8-7c3a-b773-dcf1265b1658",
              "019a584d-afa9-7151-ad30-f4a89778b3f9",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afac-7f2c-80c8-c2de8dd1cda0",
          opprettet: "2025-11-06T09:34:37.612094",
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
              "019a584d-afa8-7c3a-b773-dcf1265b1659",
              "019a584d-afa9-7151-ad30-f4a89778b3fa",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afac-7f2c-80c8-c2de8dd1cda1",
          opprettet: "2025-11-06T09:34:37.612123",
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
              "019a584d-afa8-7c3a-b773-dcf1265b165a",
              "019a584d-afa9-7151-ad30-f4a89778b3fb",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: false,
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
          id: "019a584d-afac-7f2c-80c8-c2de8dd1cda2",
          opprettet: "2025-11-06T09:34:37.612147",
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
              "019a584d-afa8-7c3a-b773-dcf1265b165d",
              "019a584d-afa9-7151-ad30-f4a89778b3ff",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afac-7f2c-80c8-c2de8dd1cda4",
          opprettet: "2025-11-06T09:34:37.612363",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a584d-97ab-762e-89a0-45a85f69613b",
              "019a584d-afaa-70c1-8d94-26dde9036074",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afac-7f2c-80c8-c2de8dd1cda5",
          opprettet: "2025-11-06T09:34:37.612387",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a584d-97ab-762e-89a0-45a85f69613c",
              "019a584d-afab-72cd-8afc-dcb7dd5e36da",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afac-7f2c-80c8-c2de8dd1cda6",
          opprettet: "2025-11-06T09:34:37.612623",
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
              "019a584d-afa9-7151-ad30-f4a89778b3fc",
              "019a584d-afa9-7151-ad30-f4a89778b3fd",
              "019a584d-afac-7f2c-80c8-c2de8dd1cd9f",
              "019a584d-afac-7f2c-80c8-c2de8dd1cda0",
              "019a584d-afac-7f2c-80c8-c2de8dd1cda1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afac-7f2c-80c8-c2de8dd1cda7",
          opprettet: "2025-11-06T09:34:37.612678",
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
              "019a584d-afa8-7c3a-b773-dcf1265b165e",
              "019a584d-afa8-7c3a-b773-dcf1265b165f",
              "019a584d-afa8-7c3a-b773-dcf1265b1660",
              "019a584d-afac-7f2c-80c8-c2de8dd1cda2",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afad-70cd-9165-102f3d189407",
          opprettet: "2025-11-06T09:34:37.613025",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a584d-afac-7f2c-80c8-c2de8dd1cda4",
              "019a584d-afac-7f2c-80c8-c2de8dd1cda5",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-943f-78d9-b874-00a4944c54f1",
      navn: "Oppfyller vilkåret om å ikke motta andre fulle ytelser",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a584d-afad-70cd-9165-102f3d189409",
          opprettet: "2025-11-06T09:34:37.613501",
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
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d54c",
      navn: "Bruker er medlem av folketrygden",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a584d-afad-70cd-9165-102f3d18940a",
          opprettet: "2025-11-06T09:34:37.613521",
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
          id: "019a584d-afad-70cd-9165-102f3d18940b",
          opprettet: "2025-11-06T09:34:37.613761",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afad-70cd-9165-102f3d18940c",
          opprettet: "2025-11-06T09:34:37.613863",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: "01K9C4VBDR9Z81SHXMS03HEPYJ",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["019a584d-afa8-7c3a-b773-dcf1265b1663"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afad-70cd-9165-102f3d18940d",
          opprettet: "2025-11-06T09:34:37.61389",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 6,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afad-70cd-9165-102f3d18940e",
          opprettet: "2025-11-06T09:34:37.613908",
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
          id: "019a584d-afad-70cd-9165-102f3d18940f",
          opprettet: "2025-11-06T09:34:37.613928",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 3,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afad-70cd-9165-102f3d189410",
          opprettet: "2025-11-06T09:34:37.613948",
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
          id: "019a584d-afad-70cd-9165-102f3d189411",
          opprettet: "2025-11-06T09:34:37.613993",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 0.0024,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afae-7f59-8499-e725db4e5820",
          opprettet: "2025-11-06T09:34:37.614028",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 37,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afae-7f59-8499-e725db4e5821",
          opprettet: "2025-11-06T09:34:37.614085",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 0.9,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afae-7f59-8499-e725db4e5822",
          opprettet: "2025-11-06T09:34:37.614108",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 260,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afae-7f59-8499-e725db4e5823",
          opprettet: "2025-11-06T09:34:37.614131",
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
          id: "019a584d-afae-7f59-8499-e725db4e5824",
          opprettet: "2025-11-06T09:34:37.614149",
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
          id: "019a584d-afae-7f59-8499-e725db4e5825",
          opprettet: "2025-11-06T09:34:37.614166",
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
          id: "019a584d-afae-7f59-8499-e725db4e5826",
          opprettet: "2025-11-06T09:34:37.614184",
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
          id: "019a584d-afae-7f59-8499-e725db4e5827",
          opprettet: "2025-11-06T09:34:37.614201",
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
          id: "019a584d-afae-7f59-8499-e725db4e5828",
          opprettet: "2025-11-06T09:34:37.614219",
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
          id: "019a584d-afae-7f59-8499-e725db4e5829",
          opprettet: "2025-11-06T09:34:37.614237",
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
          id: "019a584d-afae-7f59-8499-e725db4e582a",
          opprettet: "2025-11-06T09:34:37.614255",
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
          id: "019a584d-afae-7f59-8499-e725db4e582b",
          opprettet: "2025-11-06T09:34:37.614273",
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
          id: "019a584d-afae-7f59-8499-e725db4e582c",
          opprettet: "2025-11-06T09:34:37.614289",
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
          id: "019a584d-afae-7f59-8499-e725db4e582d",
          opprettet: "2025-11-06T09:34:37.614306",
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
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a76b",
      navn: "Ny arbeidstid per uke",
      datatype: "desimaltall",
      perioder: [
        {
          id: "019a584d-afae-7f59-8499-e725db4e582e",
          opprettet: "2025-11-06T09:34:37.614323",
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
          id: "019a584d-afae-7f59-8499-e725db4e582f",
          opprettet: "2025-11-06T09:34:37.614346",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 40,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afae-7f59-8499-e725db4e5830",
          opprettet: "2025-11-06T09:34:37.614389",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 37.5,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9434-79e8-a64d-1a23cc5d86ed",
      navn: "Antall timer arbeidstiden skal samordnes mot",
      datatype: "desimaltall",
      perioder: [
        {
          id: "019a584d-afae-7f59-8499-e725db4e5832",
          opprettet: "2025-11-06T09:34:37.614428",
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
          id: "019a584d-afae-7f59-8499-e725db4e5833",
          opprettet: "2025-11-06T09:34:37.614451",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 40,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afae-7f59-8499-e725db4e5834",
          opprettet: "2025-11-06T09:34:37.614474",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 50,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afae-7f59-8499-e725db4e5835",
          opprettet: "2025-11-06T09:34:37.614493",
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
          id: "019a584d-afae-7f59-8499-e725db4e5836",
          opprettet: "2025-11-06T09:34:37.614513",
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
          id: "019a584d-afae-7f59-8499-e725db4e5837",
          opprettet: "2025-11-06T09:34:37.614531",
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
          id: "019a584d-afae-7f59-8499-e725db4e5838",
          opprettet: "2025-11-06T09:34:37.61455",
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
          id: "019a584d-afae-7f59-8499-e725db4e5839",
          opprettet: "2025-11-06T09:34:37.614569",
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
          id: "019a584d-afae-7f59-8499-e725db4e583a",
          opprettet: "2025-11-06T09:34:37.614588",
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
          id: "019a584d-afae-7f59-8499-e725db4e583b",
          opprettet: "2025-11-06T09:34:37.614608",
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
          id: "019a584d-afae-7f59-8499-e725db4e583c",
          opprettet: "2025-11-06T09:34:37.614628",
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
          id: "019a584d-afae-7f59-8499-e725db4e583d",
          opprettet: "2025-11-06T09:34:37.614647",
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
          id: "019a584d-afae-7f59-8499-e725db4e583e",
          opprettet: "2025-11-06T09:34:37.614668",
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
          id: "019a584d-afae-7f59-8499-e725db4e583f",
          opprettet: "2025-11-06T09:34:37.614689",
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
          id: "019a584d-afaf-7cbf-a1d7-305132295a0e",
          opprettet: "2025-11-06T09:34:37.615255",
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
            opplysninger: ["019a584d-afad-70cd-9165-102f3d18940a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb0-716c-a594-0b8a798060fd",
          opprettet: "2025-11-06T09:34:37.616038",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: "01K9C4VBDR9Z81SHXMS03HEPYJ",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Oppjuster",
            },
            opplysninger: [
              "019a584d-afad-70cd-9165-102f3d18940b",
              "019a584d-afad-70cd-9165-102f3d18940c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb0-716c-a594-0b8a798060fe",
          opprettet: "2025-11-06T09:34:37.616146",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a584d-afad-70cd-9165-102f3d18940b",
              "019a584d-afad-70cd-9165-102f3d18940d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb0-716c-a594-0b8a798060ff",
          opprettet: "2025-11-06T09:34:37.616187",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a584d-afad-70cd-9165-102f3d18940b",
              "019a584d-afad-70cd-9165-102f3d18940f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: false,
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
          id: "019a584d-afb0-716c-a594-0b8a79806100",
          opprettet: "2025-11-06T09:34:37.616217",
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
            opplysninger: ["019a584d-afae-7f59-8499-e725db4e5827"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb0-716c-a594-0b8a79806101",
          opprettet: "2025-11-06T09:34:37.616249",
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
              "019a584d-afae-7f59-8499-e725db4e582c",
              "019a584d-afae-7f59-8499-e725db4e582d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb0-716c-a594-0b8a79806103",
          opprettet: "2025-11-06T09:34:37.616315",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
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
              "019a584d-afa8-7c3a-b773-dcf1265b1660",
              "019a584d-afae-7f59-8499-e725db4e5833",
              "019a584d-afae-7f59-8499-e725db4e5834",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb0-716c-a594-0b8a79806104",
          opprettet: "2025-11-06T09:34:37.616346",
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
              "019a584d-afae-7f59-8499-e725db4e5835",
              "019a584d-afae-7f59-8499-e725db4e5836",
              "019a584d-afae-7f59-8499-e725db4e5837",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb0-716c-a594-0b8a79806105",
          opprettet: "2025-11-06T09:34:37.616383",
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
              "019a584d-afae-7f59-8499-e725db4e5839",
              "019a584d-afae-7f59-8499-e725db4e583a",
              "019a584d-afae-7f59-8499-e725db4e583b",
              "019a584d-afae-7f59-8499-e725db4e583c",
              "019a584d-afae-7f59-8499-e725db4e583d",
              "019a584d-afae-7f59-8499-e725db4e583e",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb0-716c-a594-0b8a79806106",
          opprettet: "2025-11-06T09:34:37.61641",
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
            opplysninger: ["019a584d-afae-7f59-8499-e725db4e583f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb1-7ea3-b17e-d1727ee661c4",
          opprettet: "2025-11-06T09:34:37.617134",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 553348.9212113394,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a584d-afb0-716c-a594-0b8a798060fd"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb1-7ea3-b17e-d1727ee661c5",
          opprettet: "2025-11-06T09:34:37.617402",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 579615.9925315215,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a584d-afb0-716c-a594-0b8a798060fd"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb1-7ea3-b17e-d1727ee661c6",
          opprettet: "2025-11-06T09:34:37.617637",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 558975.9709138202,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a584d-afb0-716c-a594-0b8a798060fd"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb1-7ea3-b17e-d1727ee661c7",
          opprettet: "2025-11-06T09:34:37.617701",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "019a584d-afa9-7151-ad30-f4a89778b400",
              "019a584d-afad-70cd-9165-102f3d189410",
              "019a584d-afb0-716c-a594-0b8a798060ff",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb1-7ea3-b17e-d1727ee661c8",
          opprettet: "2025-11-06T09:34:37.617748",
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
              "019a584d-afae-7f59-8499-e725db4e5828",
              "019a584d-afae-7f59-8499-e725db4e5829",
              "019a584d-afb0-716c-a594-0b8a79806100",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: false,
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
          id: "019a584d-afb3-7234-a5f4-b19880c39276",
          opprettet: "2025-11-06T09:34:37.619",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 553348.9212113394,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a584d-afb0-716c-a594-0b8a798060fe",
              "019a584d-afb1-7ea3-b17e-d1727ee661c4",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb3-7234-a5f4-b19880c39277",
          opprettet: "2025-11-06T09:34:37.619193",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 553348.9212113394,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a584d-afb0-716c-a594-0b8a798060fe",
              "019a584d-afb1-7ea3-b17e-d1727ee661c4",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb3-7234-a5f4-b19880c39278",
          opprettet: "2025-11-06T09:34:37.61926",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 579615.9925315215,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a584d-afb0-716c-a594-0b8a798060fe",
              "019a584d-afb1-7ea3-b17e-d1727ee661c5",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb3-7234-a5f4-b19880c39279",
          opprettet: "2025-11-06T09:34:37.619299",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 558975.9709138202,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a584d-afb0-716c-a594-0b8a798060fe",
              "019a584d-afb1-7ea3-b17e-d1727ee661c6",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb3-7234-a5f4-b19880c3927a",
          opprettet: "2025-11-06T09:34:37.619473",
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
              "019a584d-afae-7f59-8499-e725db4e5823",
              "019a584d-afae-7f59-8499-e725db4e5824",
              "019a584d-afae-7f59-8499-e725db4e5825",
              "019a584d-afae-7f59-8499-e725db4e5826",
              "019a584d-afae-7f59-8499-e725db4e582a",
              "019a584d-afae-7f59-8499-e725db4e582b",
              "019a584d-afb1-7ea3-b17e-d1727ee661c8",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb4-77c5-b630-85e12f21a8d6",
          opprettet: "2025-11-06T09:34:37.62031",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 1691940.884656681,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SumAv",
            },
            opplysninger: [
              "019a584d-afb3-7234-a5f4-b19880c39277",
              "019a584d-afb3-7234-a5f4-b19880c39278",
              "019a584d-afb3-7234-a5f4-b19880c39279",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb4-77c5-b630-85e12f21a8d8",
          opprettet: "2025-11-06T09:34:37.620966",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 563980.2948855604,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019a584d-afad-70cd-9165-102f3d18940e",
              "019a584d-afb4-77c5-b630-85e12f21a8d6",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb5-7d71-9a02-8357424ac93c",
          opprettet: "2025-11-06T09:34:37.621646",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 563980.2948855604,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "019a584d-afb3-7234-a5f4-b19880c39276",
              "019a584d-afb4-77c5-b630-85e12f21a8d8",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb6-7d5c-abac-7be84b7c10eb",
          opprettet: "2025-11-06T09:34:37.622647",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 563980,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["019a584d-afb5-7d71-9a02-8357424ac93c"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb7-7d11-b2d2-4d31f2c893ea",
          opprettet: "2025-11-06T09:34:37.623424",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 563980,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "019a584d-afb1-7ea3-b17e-d1727ee661c7",
              "019a584d-afb6-7d5c-abac-7be84b7c10eb",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb7-7d11-b2d2-4d31f2c893eb",
          opprettet: "2025-11-06T09:34:37.623502",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019a584d-afb1-7ea3-b17e-d1727ee661c7",
              "019a584d-afb6-7d5c-abac-7be84b7c10eb",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: false,
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
          id: "019a584d-afb8-73d7-8db5-f8ed54be5096",
          opprettet: "2025-11-06T09:34:37.624082",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 1353.552,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a584d-afad-70cd-9165-102f3d189411",
              "019a584d-afb7-7d11-b2d2-4d31f2c893ea",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb8-73d7-8db5-f8ed54be5097",
          opprettet: "2025-11-06T09:34:37.624153",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 507582,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a584d-afae-7f59-8499-e725db4e5821",
              "019a584d-afb7-7d11-b2d2-4d31f2c893ea",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb8-73d7-8db5-f8ed54be509a",
          opprettet: "2025-11-06T09:34:37.624743",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 1354,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["019a584d-afb8-73d7-8db5-f8ed54be5096"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-afb8-73d7-8db5-f8ed54be509b",
          opprettet: "2025-11-06T09:34:37.624863",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 1952.2384615384615,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019a584d-afae-7f59-8499-e725db4e5822",
              "019a584d-afb8-73d7-8db5-f8ed54be5097",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: false,
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
          id: "019a584d-afb9-7c1c-ac17-ef973a88315b",
          opprettet: "2025-11-06T09:34:37.625619",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 1952,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["019a584d-afb8-73d7-8db5-f8ed54be509b"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6ef-750e-91bd-3709daba08f7",
          opprettet: "2025-11-06T09:34:39.471575",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:39.436508",
            meldingId: "3f6beba2-9688-450f-8bf3-9b5a6eecb33a",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a584d-966b-794d-b2a5-d5bd87cb6e4c"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d2",
      navn: "Foreldrepenger etter lovens kapittel 14",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a584d-b6ef-750e-91bd-3709daba08f8",
          opprettet: "2025-11-06T09:34:39.471638",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:39.436627",
            meldingId: "3f6beba2-9688-450f-8bf3-9b5a6eecb33a",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6ef-750e-91bd-3709daba08f9",
          opprettet: "2025-11-06T09:34:39.471685",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:39.436723",
            meldingId: "3f6beba2-9688-450f-8bf3-9b5a6eecb33a",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a23b",
      navn: "Barn",
      datatype: "barn",
      perioder: [
        {
          id: "019a584d-b6ef-750e-91bd-3709daba08fa",
          opprettet: "2025-11-06T09:34:39.471731",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: [],
            datatype: "barn",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:39.436808",
            meldingId: "3f6beba2-9688-450f-8bf3-9b5a6eecb33a",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a584d-966b-794d-b2a5-d5bd87cb6e4c"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Register",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a75e",
      navn: "Har krav på lønn fra arbeidsgiver",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a584d-b6ef-750e-91bd-3709daba08fb",
          opprettet: "2025-11-06T09:34:39.471776",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:39.436898",
            meldingId: "3f6beba2-9688-450f-8bf3-9b5a6eecb33a",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a584d-966b-794d-b2a5-d5bd87cb6e4c"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
        {
          id: "019abf04-5798-789f-b440-204e085a8796",
          opprettet: "2025-11-26T08:15:24.184388",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-11-26T08:15:24.066374",
            ident: "Z990436",
            begrunnelse: {
              verdi: "Lønn",
              sistEndret: "2025-11-26T08:15:24.066349",
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
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b522",
      navn: "Brukeren er under utdanning eller opplæring",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a584d-b6ef-750e-91bd-3709daba08fc",
          opprettet: "2025-11-06T09:34:39.471817",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:39.436982",
            meldingId: "3f6beba2-9688-450f-8bf3-9b5a6eecb33a",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a584d-966b-794d-b2a5-d5bd87cb6e4c"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45ce",
      navn: "Pleiepenger etter lovens kapittel 9",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a584d-b6ef-750e-91bd-3709daba08fd",
          opprettet: "2025-11-06T09:34:39.471862",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:39.437115",
            meldingId: "3f6beba2-9688-450f-8bf3-9b5a6eecb33a",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6ef-750e-91bd-3709daba08fe",
          opprettet: "2025-11-06T09:34:39.471904",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:39.437221",
            meldingId: "3f6beba2-9688-450f-8bf3-9b5a6eecb33a",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6ef-750e-91bd-3709daba08ff",
          opprettet: "2025-11-06T09:34:39.471948",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:39.437322",
            meldingId: "3f6beba2-9688-450f-8bf3-9b5a6eecb33a",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6ef-750e-91bd-3709daba0900",
          opprettet: "2025-11-06T09:34:39.471993",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:39.437418",
            meldingId: "3f6beba2-9688-450f-8bf3-9b5a6eecb33a",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f1-7ca3-95f0-789296bb8a50",
          opprettet: "2025-11-06T09:34:39.473064",
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
            opplysninger: ["019a584d-b6ef-750e-91bd-3709daba08f7"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f1-7ca3-95f0-789296bb8a51",
          opprettet: "2025-11-06T09:34:39.473159",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "AntallAv",
            },
            opplysninger: ["019a584d-b6ef-750e-91bd-3709daba08fa"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f1-7ca3-95f0-789296bb8a52",
          opprettet: "2025-11-06T09:34:39.473245",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a584d-afb0-716c-a594-0b8a79806100",
              "019a584d-b6ef-750e-91bd-3709daba08f8",
              "019a584d-b6ef-750e-91bd-3709daba08f9",
              "019a584d-b6ef-750e-91bd-3709daba08fd",
              "019a584d-b6ef-750e-91bd-3709daba08fe",
              "019a584d-b6ef-750e-91bd-3709daba08ff",
              "019a584d-b6ef-750e-91bd-3709daba0900",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f1-7ca3-95f0-789296bb8a53",
          opprettet: "2025-11-06T09:34:39.473288",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: ["019a584d-b6ef-750e-91bd-3709daba08fb"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
        {
          id: "019abf04-579d-7ef7-a8d1-4877581a025a",
          opprettet: "2025-11-26T08:15:24.18919",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-13",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: ["019abf04-5798-789f-b440-204e085a8796"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.25-13.50-41af0b4",
          },
        },
      ],
      synlig: true,
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
          id: "019a584d-b6f1-7ca3-95f0-789296bb8a54",
          opprettet: "2025-11-06T09:34:39.473322",
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
            opplysninger: ["019a584d-b6ef-750e-91bd-3709daba08fc"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f1-7ca3-95f0-789296bb8a55",
          opprettet: "2025-11-06T09:34:39.473356",
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
            opplysninger: ["019a584d-b6ef-750e-91bd-3709daba08fc"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d54a",
      navn: "Oppfyller unntak for opphold i Norge",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a584d-b6f1-7ca3-95f0-789296bb8a57",
          opprettet: "2025-11-06T09:34:39.473849",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019a584d-b6f1-7ca3-95f0-789296bb8a50"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a244",
      navn: "Sum av barnetillegg",
      datatype: "penger",
      perioder: [
        {
          id: "019a584d-b6f1-7ca3-95f0-789296bb8a58",
          opprettet: "2025-11-06T09:34:39.473925",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a584d-afae-7f59-8499-e725db4e5820",
              "019a584d-b6f1-7ca3-95f0-789296bb8a51",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f2-7d05-916f-10e511e2ebc2",
          opprettet: "2025-11-06T09:34:39.474009",
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
              "019a584d-afb0-716c-a594-0b8a79806105",
              "019a584d-b6f1-7ca3-95f0-789296bb8a54",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f2-7d05-916f-10e511e2ebc4",
          opprettet: "2025-11-06T09:34:39.47453",
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
              "019a584d-b6f1-7ca3-95f0-789296bb8a50",
              "019a584d-b6f1-7ca3-95f0-789296bb8a57",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: false,
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
          id: "019a584d-b6f2-7d05-916f-10e511e2ebc5",
          opprettet: "2025-11-06T09:34:39.474647",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 1354,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "019a584d-afb8-73d7-8db5-f8ed54be509a",
              "019a584d-b6f1-7ca3-95f0-789296bb8a58",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f2-7d05-916f-10e511e2ebc6",
          opprettet: "2025-11-06T09:34:39.474726",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a584d-afae-7f59-8499-e725db4e5820",
              "019a584d-b6f1-7ca3-95f0-789296bb8a58",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f2-7d05-916f-10e511e2ebc7",
          opprettet: "2025-11-06T09:34:39.474769",
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
              "019a584d-b6f1-7ca3-95f0-789296bb8a55",
              "019a584d-b6f2-7d05-916f-10e511e2ebc2",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: true,
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
          id: "019a584d-b6f3-7e90-a454-54c863fa8f77",
          opprettet: "2025-11-06T09:34:39.47535",
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
              "019a584d-afaf-7cbf-a1d7-305132295a0e",
              "019a584d-b6f2-7d05-916f-10e511e2ebc4",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f3-7e90-a454-54c863fa8f78",
          opprettet: "2025-11-06T09:34:39.475551",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019a584d-afb9-7c1c-ac17-ef973a88315b",
              "019a584d-b6f2-7d05-916f-10e511e2ebc5",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: false,
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
          id: "019a584d-b6f4-7d9c-bdfc-58d50ce00540",
          opprettet: "2025-11-06T09:34:39.476395",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019a584d-afb0-716c-a594-0b8a798060fe",
              "019a584d-afb1-7ea3-b17e-d1727ee661c4",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f4-7d9c-bdfc-58d50ce00541",
          opprettet: "2025-11-06T09:34:39.476444",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019a584d-afb0-716c-a594-0b8a798060fe",
              "019a584d-afb1-7ea3-b17e-d1727ee661c5",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f4-7d9c-bdfc-58d50ce00542",
          opprettet: "2025-11-06T09:34:39.476484",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019a584d-afb0-716c-a594-0b8a798060fe",
              "019a584d-afb1-7ea3-b17e-d1727ee661c6",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f4-7d9c-bdfc-58d50ce00543",
          opprettet: "2025-11-06T09:34:39.476579",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: "Gjennomsnittlig inntekt etter avkortning og oppjustering siste 36 måneder",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Brukt",
            },
            opplysninger: ["019a584d-afb5-7d71-9a02-8357424ac93c"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f4-7d9c-bdfc-58d50ce00544",
          opprettet: "2025-11-06T09:34:39.476822",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 540000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a584d-afad-70cd-9165-102f3d18940c"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f4-7d9c-bdfc-58d50ce00545",
          opprettet: "2025-11-06T09:34:39.476986",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 540000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a584d-afad-70cd-9165-102f3d18940c"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f5-76e9-b750-d35eb80e3409",
          opprettet: "2025-11-06T09:34:39.477171",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 495000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a584d-afad-70cd-9165-102f3d18940c"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f5-76e9-b750-d35eb80e340a",
          opprettet: "2025-11-06T09:34:39.4773",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 1354,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019a584d-afb8-73d7-8db5-f8ed54be509a",
              "019a584d-b6f3-7e90-a454-54c863fa8f78",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f5-76e9-b750-d35eb80e340b",
          opprettet: "2025-11-06T09:34:39.477358",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 5,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f5-76e9-b750-d35eb80e340c",
          opprettet: "2025-11-06T09:34:39.477399",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 0.03,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f5-76e9-b750-d35eb80e340d",
          opprettet: "2025-11-06T09:34:39.477447",
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
          id: "019a584d-b6f5-76e9-b750-d35eb80e340e",
          opprettet: "2025-11-06T09:34:39.477482",
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
          id: "019a584d-b6f5-76e9-b750-d35eb80e340f",
          opprettet: "2025-11-06T09:34:39.477516",
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
          id: "019a584d-b6f5-76e9-b750-d35eb80e3410",
          opprettet: "2025-11-06T09:34:39.477558",
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
          id: "019a584d-b6f5-76e9-b750-d35eb80e3411",
          opprettet: "2025-11-06T09:34:39.477594",
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
          id: "019a584d-b6f5-76e9-b750-d35eb80e3412",
          opprettet: "2025-11-06T09:34:39.477629",
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
          id: "019a584d-b6f5-76e9-b750-d35eb80e3413",
          opprettet: "2025-11-06T09:34:39.477671",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 2,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f5-76e9-b750-d35eb80e3414",
          opprettet: "2025-11-06T09:34:39.477711",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 104,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f5-76e9-b750-d35eb80e3415",
          opprettet: "2025-11-06T09:34:39.47775",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 52,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f5-76e9-b750-d35eb80e3416",
          opprettet: "2025-11-06T09:34:39.477896",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 525000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019a584d-afab-72cd-8afc-dcb7dd5e36da",
              "019a584d-afad-70cd-9165-102f3d18940e",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f5-76e9-b750-d35eb80e3417",
          opprettet: "2025-11-06T09:34:39.477943",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 2,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f5-76e9-b750-d35eb80e3418",
          opprettet: "2025-11-06T09:34:39.477984",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 0,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f6-7e4f-9e08-1f92113f46b2",
          opprettet: "2025-11-06T09:34:39.478024",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 5,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f6-7e4f-9e08-1f92113f46b3",
          opprettet: "2025-11-06T09:34:39.478101",
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
          id: "019a584d-b6f6-7e4f-9e08-1f92113f46b4",
          opprettet: "2025-11-06T09:34:39.478146",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 3,
            enhet: "dager",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f6-7e4f-9e08-1f92113f46b5",
          opprettet: "2025-11-06T09:34:39.478182",
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
          id: "019a584d-b6f6-7e4f-9e08-1f92113f46b6",
          opprettet: "2025-11-06T09:34:39.478218",
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
          id: "019a584d-b6f6-7e4f-9e08-1f92113f46b7",
          opprettet: "2025-11-06T09:34:39.478254",
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
          id: "019a584d-b6f6-7e4f-9e08-1f92113f46b8",
          opprettet: "2025-11-06T09:34:39.478291",
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
          id: "019a584d-b6f6-7e4f-9e08-1f92113f46b9",
          opprettet: "2025-11-06T09:34:39.478327",
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
          id: "019a584d-b6f6-7e4f-9e08-1f92113f46ba",
          opprettet: "2025-11-06T09:34:39.478364",
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
          id: "019a584d-b6f6-7e4f-9e08-1f92113f46bb",
          opprettet: "2025-11-06T09:34:39.478407",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 26,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a584d-97a9-705f-8fd0-f72bb6b35861"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: false,
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
          id: "019a584d-b6f7-7a84-9ae7-3a3c0ac51691",
          opprettet: "2025-11-06T09:34:39.479415",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a584d-b6f4-7d9c-bdfc-58d50ce00540",
              "019a584d-b6f4-7d9c-bdfc-58d50ce00541",
              "019a584d-b6f4-7d9c-bdfc-58d50ce00542",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: true,
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
          id: "019a584d-b6f7-7a84-9ae7-3a3c0ac51692",
          opprettet: "2025-11-06T09:34:39.479511",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 1354,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019a584d-afb3-7234-a5f4-b19880c3927a",
              "019a584d-b6f5-76e9-b750-d35eb80e340a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f7-7a84-9ae7-3a3c0ac51693",
          opprettet: "2025-11-06T09:34:39.47959",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 3904.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a584d-afad-70cd-9165-102f3d18940b",
              "019a584d-b6f5-76e9-b750-d35eb80e340c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f7-7a84-9ae7-3a3c0ac51694",
          opprettet: "2025-11-06T09:34:39.479662",
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
              "019a584d-b6f5-76e9-b750-d35eb80e340d",
              "019a584d-b6f5-76e9-b750-d35eb80e340e",
              "019a584d-b6f5-76e9-b750-d35eb80e340f",
              "019a584d-b6f5-76e9-b750-d35eb80e3410",
              "019a584d-b6f5-76e9-b750-d35eb80e3411",
              "019a584d-b6f5-76e9-b750-d35eb80e3412",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f7-7a84-9ae7-3a3c0ac51695",
          opprettet: "2025-11-06T09:34:39.479723",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 6770,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a584d-b6f2-7d05-916f-10e511e2ebc5",
              "019a584d-b6f5-76e9-b750-d35eb80e340b",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f7-7a84-9ae7-3a3c0ac51696",
          opprettet: "2025-11-06T09:34:39.479775",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a584d-97aa-75d4-b39f-a1c0b1ed5f48",
              "019a584d-b6f5-76e9-b750-d35eb80e3413",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f7-7a84-9ae7-3a3c0ac51697",
          opprettet: "2025-11-06T09:34:39.479823",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a584d-97aa-75d4-b39f-a1c0b1ed5f48",
              "019a584d-b6f5-76e9-b750-d35eb80e3417",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f7-7a84-9ae7-3a3c0ac51698",
          opprettet: "2025-11-06T09:34:39.479872",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a584d-afb3-7234-a5f4-b19880c3927a",
              "019a584d-b6f5-76e9-b750-d35eb80e340a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f8-7935-8bc5-b9b915f7eee3",
          opprettet: "2025-11-06T09:34:39.480834",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 6770,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a584d-b6f5-76e9-b750-d35eb80e340b",
              "019a584d-b6f7-7a84-9ae7-3a3c0ac51692",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f8-7935-8bc5-b9b915f7eee4",
          opprettet: "2025-11-06T09:34:39.480892",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a584d-afaa-70c1-8d94-26dde9036074",
              "019a584d-b6f7-7a84-9ae7-3a3c0ac51696",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f8-7935-8bc5-b9b915f7eee5",
          opprettet: "2025-11-06T09:34:39.48094",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a584d-b6f5-76e9-b750-d35eb80e3416",
              "019a584d-b6f7-7a84-9ae7-3a3c0ac51697",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f8-7935-8bc5-b9b915f7eee6",
          opprettet: "2025-11-06T09:34:39.480989",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a584d-b6f2-7d05-916f-10e511e2ebc6",
              "019a584d-b6f7-7a84-9ae7-3a3c0ac51698",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6f9-7ad9-a1f1-ce9a86fdfe8f",
          opprettet: "2025-11-06T09:34:39.481988",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 3904.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a584d-b6f7-7a84-9ae7-3a3c0ac51693",
              "019a584d-b6f8-7935-8bc5-b9b915f7eee3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6fa-7c07-bbfb-6e6382dd9c82",
          opprettet: "2025-11-06T09:34:39.482098",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 6770,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019a584d-b6f7-7a84-9ae7-3a3c0ac51694",
              "019a584d-b6f8-7935-8bc5-b9b915f7eee3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6fa-7c07-bbfb-6e6382dd9c83",
          opprettet: "2025-11-06T09:34:39.482156",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 104,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "019a584d-b6f5-76e9-b750-d35eb80e3414",
              "019a584d-b6f5-76e9-b750-d35eb80e3415",
              "019a584d-b6f8-7935-8bc5-b9b915f7eee4",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6fa-7c07-bbfb-6e6382dd9c84",
          opprettet: "2025-11-06T09:34:39.482205",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 104,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "019a584d-b6f5-76e9-b750-d35eb80e3414",
              "019a584d-b6f5-76e9-b750-d35eb80e3415",
              "019a584d-b6f8-7935-8bc5-b9b915f7eee5",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b6fb-78d4-8c25-e20bc9807d03",
          opprettet: "2025-11-06T09:34:39.483211",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 6770,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "019a584d-b6f9-7ad9-a1f1-ce9a86fdfe8f",
              "019a584d-b6fa-7c07-bbfb-6e6382dd9c82",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: true,
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
          id: "019a584d-b6ff-73bd-bccb-70a30fee2554",
          opprettet: "2025-11-06T09:34:39.487931",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 104,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "019a584d-b6fa-7c07-bbfb-6e6382dd9c83",
              "019a584d-b6fa-7c07-bbfb-6e6382dd9c84",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b701-7e59-a284-43ff8b0c099a",
          opprettet: "2025-11-06T09:34:39.48942",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 1354,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019a584d-b6f5-76e9-b750-d35eb80e340b",
              "019a584d-b6fb-78d4-8c25-e20bc9807d03",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b701-7e59-a284-43ff8b0c099b",
          opprettet: "2025-11-06T09:34:39.489496",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 104,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "019a584d-afad-70cd-9165-102f3d189407",
              "019a584d-b6f5-76e9-b750-d35eb80e3418",
              "019a584d-b6ff-73bd-bccb-70a30fee2554",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b701-7e59-a284-43ff8b0c099c",
          opprettet: "2025-11-06T09:34:39.489558",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 520,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a584d-b6f6-7e4f-9e08-1f92113f46b2",
              "019a584d-b6ff-73bd-bccb-70a30fee2554",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: false,
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
          id: "019a584d-b702-70c8-a6f6-1f9fb20face9",
          opprettet: "2025-11-06T09:34:39.490654",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 1354,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "019a584d-b6f1-7ca3-95f0-789296bb8a58",
              "019a584d-b701-7e59-a284-43ff8b0c099a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b702-70c8-a6f6-1f9fb20facea",
          opprettet: "2025-11-06T09:34:39.490736",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErUlik",
            },
            opplysninger: [
              "019a584d-b6f5-76e9-b750-d35eb80e340a",
              "019a584d-b701-7e59-a284-43ff8b0c099a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b703-70f7-a372-2a2f57adf5f6",
          opprettet: "2025-11-06T09:34:39.491726",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 1354,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a584d-afb9-7c1c-ac17-ef973a88315b",
              "019a584d-b702-70c8-a6f6-1f9fb20face9",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b704-75bc-88ba-9d2e6f0b960a",
          opprettet: "2025-11-06T09:34:39.492764",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 6770,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a584d-b6f5-76e9-b750-d35eb80e340b",
              "019a584d-b703-70f7-a372-2a2f57adf5f6",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b704-75bc-88ba-9d2e6f0b960b",
          opprettet: "2025-11-06T09:34:39.492855",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 4062,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a584d-b6f6-7e4f-9e08-1f92113f46b4",
              "019a584d-b703-70f7-a372-2a2f57adf5f6",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b705-7b6d-b1db-797bc5a49e46",
          opprettet: "2025-11-06T09:34:39.49388",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 4062,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "019a584d-afa8-7c3a-b773-dcf1265b1660",
              "019a584d-b6f6-7e4f-9e08-1f92113f46b3",
              "019a584d-b704-75bc-88ba-9d2e6f0b960b",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a584d-b7c5-741b-b7b5-7fa792a14b56",
          opprettet: "2025-11-06T09:34:39.685875",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-06T09:34:39.64595",
            meldingId: "9aa86666-50fb-4c69-ac5d-57a1db2600f5",
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
          id: "019a584d-b7c8-7f03-ae25-26daa87162ff",
          opprettet: "2025-11-06T09:34:39.688099",
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
              "019a584d-b6f6-7e4f-9e08-1f92113f46b5",
              "019a584d-b6f6-7e4f-9e08-1f92113f46b6",
              "019a584d-b6f6-7e4f-9e08-1f92113f46b7",
              "019a584d-b6f6-7e4f-9e08-1f92113f46b8",
              "019a584d-b6f6-7e4f-9e08-1f92113f46b9",
              "019a584d-b6f6-7e4f-9e08-1f92113f46ba",
              "019a584d-b7c5-741b-b7b5-7fa792a14b56",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a5884-bed2-7216-8528-7eaa3ebf9466",
          opprettet: "2025-11-06T10:34:45.970948",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 30,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-11-06T10:34:45.924856",
            ident: "Z990436",
            begrunnelse: {
              verdi: "Har hatt fast 80 prosent stilling",
              sistEndret: "2025-11-06T10:34:45.924836",
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
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a76c",
      navn: "Fastsatt vanlig arbeidstid etter ordinær eller verneplikt",
      datatype: "desimaltall",
      perioder: [
        {
          id: "019a5884-bed5-7f62-b90b-2704e381e18f",
          opprettet: "2025-11-06T10:34:45.973264",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 30,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "019a584d-afae-7f59-8499-e725db4e5830",
              "019a584d-afb7-7d11-b2d2-4d31f2c893eb",
              "019a5884-bed2-7216-8528-7eaa3ebf9466",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: false,
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
          id: "019a5884-bed5-7f62-b90b-2704e381e190",
          opprettet: "2025-11-06T10:34:45.973376",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 30,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019a584d-afae-7f59-8499-e725db4e5832",
              "019a5884-bed2-7216-8528-7eaa3ebf9466",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a5884-bed6-7ba1-b0c5-94cb878129d3",
          opprettet: "2025-11-06T10:34:45.974397",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: 30,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a584d-afa8-7c3a-b773-dcf1265b165c",
              "019a584d-afae-7f59-8499-e725db4e582f",
              "019a5884-bed5-7f62-b90b-2704e381e18f",
              "019a5884-bed5-7f62-b90b-2704e381e190",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
      ],
      synlig: true,
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
          id: "019a5884-bed7-7208-a073-fbec6721e49b",
          opprettet: "2025-11-06T10:34:45.975249",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "SjekkAvTerskel",
            },
            opplysninger: [
              "019a584d-afae-7f59-8499-e725db4e582e",
              "019a584d-afb0-716c-a594-0b8a79806103",
              "019a5884-bed6-7ba1-b0c5-94cb878129d3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
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
          id: "019a5884-bed8-7cce-9bff-ff1e0e29ddf9",
          opprettet: "2025-11-06T10:34:45.976041",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-11-06",
          gyldigTilOgMed: "2025-11-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019a584d-afae-7f59-8499-e725db4e5838",
              "019a584d-afb0-716c-a594-0b8a79806104",
              "019a584d-b6f1-7ca3-95f0-789296bb8a53",
              "019a5884-bed7-7208-a073-fbec6721e49b",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.05-07.01-5fe4a37",
          },
        },
        {
          id: "019abf04-57a0-7376-b8e3-df76a941221f",
          opprettet: "2025-11-26T08:15:24.192113",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-13",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019a584d-afae-7f59-8499-e725db4e5838",
              "019a584d-afb0-716c-a594-0b8a79806104",
              "019a5884-bed7-7208-a073-fbec6721e49b",
              "019abf04-579d-7ef7-a8d1-4877581a025a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.25-13.50-41af0b4",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "01990a09-0eab-7957-b88f-14484a50e194",
      navn: "Har løpende rett på dagpenger",
      datatype: "boolsk",
      perioder: [
        {
          id: "019abf07-f464-7934-aeef-7b226cf05dc1",
          opprettet: "2025-11-26T08:19:20.932541",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-06",
          gyldigTilOgMed: "2025-11-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-11-26T08:19:20.703383",
            ident: "Z990436",
            begrunnelse: {
              verdi: "Krav på lønn fra 13. november",
              sistEndret: "2025-11-26T08:19:20.703374",
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
          id: "019abef9-7b69-7424-9dee-edf14c9b26ad",
          opprettet: "2025-11-26T08:03:32.457147",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019a584d-afa8-7c3a-b773-dcf1265b1661"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.25-13.50-41af0b4",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
  ],
  forslagOm: "Innvilgelse",
};
