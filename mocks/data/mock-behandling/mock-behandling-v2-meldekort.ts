import { components } from "../../../openapi/behandling-typer";

export const mockBehandlingV2Meldekort: components["schemas"]["Behandling"] = {
  behandlingId: "0199b8b8-4f28-7926-bfac-4459a0ebb34f",
  behandletHendelse: {
    datatype: "String",
    skjedde: "",
    id: "f6e15060-dd4e-4e5b-a1c2-beefb61c6c22",
    type: "Meldekort",
  },
  kreverTotrinnskontroll: false,
  basertPå: "0199296a-4259-71dd-94dc-8210bd670865",
  tilstand: "ForslagTilVedtak",
  automatisk: true,
  ident: "05919599415",
  avklaringer: [
    {
      id: "0199298c-ec59-79dd-b4cd-04ce5e793149",
      kode: "MeldekortBehandling",
      tittel: "Beregning av meldekort",
      beskrivelse: "Behandlingen er opprettet av meldekort og kan ikke automatisk behandles",
      kanKvitteres: true,
      status: "Åpen",
      maskinelt: false,
      sistEndret: "2025-09-08T15:38:45.46509",
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
      relevantForResultat: true,
      type: "Vilkår",
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
      relevantForResultat: true,
      type: "Vilkår",
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
      relevantForResultat: true,
      type: "Vilkår",
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
      relevantForResultat: true,
      type: "Vilkår",
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
      id: "709778893",
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
      relevantForResultat: true,
      type: "Vilkår",
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
      relevantForResultat: true,
      type: "Vilkår",
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
      relevantForResultat: true,
      type: "Vilkår",
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
      relevantForResultat: false,
      type: "Vilkår",
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
      relevantForResultat: false,
      type: "Vilkår",
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
      relevantForResultat: false,
      type: "Vilkår",
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
      relevantForResultat: false,
      type: "Vilkår",
      opplysningTypeId: "01948d43-e218-76f1-b29b-7e604241d98a",
      opplysninger: ["01948d3c-4bea-7802-9d18-5342a5e2be99"],
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
      relevantForResultat: true,
      type: "Vilkår",
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
      relevantForResultat: true,
      type: "Vilkår",
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
      relevantForResultat: true,
      type: "Vilkår",
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
      relevantForResultat: false,
      type: "Vilkår",
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
      relevantForResultat: true,
      type: "Vilkår",
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
      relevantForResultat: true,
      type: "Fastsettelse",
      opplysninger: [
        "01956abd-2871-7517-a332-b462c0c31292",
        "01948ea0-36e8-72cc-aa4f-16bc446ed3bd",
        "01948ea0-e25c-7c47-8429-a05045d80eca",
        "01948ea0-ffdc-7964-ab55-52a7e35e1020",
        "01956ab8-126c-7636-803e-a5d87eda2015",
        "01973a27-d8b3-7ffd-a81a-a3826963b079",
        "01957069-d7d5-7f7c-b359-c00686fbf1f7",
        "01992934-66e4-7606-bdd3-c6c9dd420ffd",
        "01992956-e349-76b1-8f68-c9d481df3a32",
      ],
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
      relevantForResultat: true,
      type: "Fastsettelse",
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
      relevantForResultat: true,
      type: "Fastsettelse",
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
      relevantForResultat: true,
      type: "Fastsettelse",
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
      relevantForResultat: true,
      type: "Fastsettelse",
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
      relevantForResultat: false,
      type: "Fastsettelse",
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
      relevantForResultat: false,
      type: "Fastsettelse",
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
      relevantForResultat: true,
      type: "Fastsettelse",
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
      relevantForResultat: true,
      type: "Fastsettelse",
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
      relevantForResultat: true,
      type: "Fastsettelse",
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
      relevantForResultat: true,
      type: "Fastsettelse",
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
      relevantForResultat: false,
      type: "Fastsettelse",
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
      relevantForResultat: true,
      type: "Fastsettelse",
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
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-4257-7731-8db2-630695d3ac08",
          opprettet: "2025-09-08T15:00:53.719237",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 15538306,
            datatype: "heltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:00:53.718",
            meldingId: "c1da507f-87af-48f2-a7d1-0d4c35cc0879",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-91d1-7df2-ba1d-4533f37fcc77",
      navn: "søknadId",
      datatype: "tekst",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-4258-72ec-ab6c-db42802ab358",
          opprettet: "2025-09-08T15:00:53.720305",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "c8472d03-2601-4a6f-adef-ce106032fd88",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:00:53.72029",
            meldingId: "c1da507f-87af-48f2-a7d1-0d4c35cc0879",
          },
        },
      ],
    },
    {
      opplysningTypeId: "01958ef2-e237-77c4-89e1-de91256e2e4a",
      navn: "hendelseType",
      datatype: "tekst",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199298c-ec58-7857-b1a8-c4a5d3df3494",
          opprettet: "2025-09-08T15:38:45.464875",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-08",
          gyldigTilOgMed: "2025-09-08",
          verdi: {
            verdi: "BeregnMeldekortHendelse",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.464821",
            meldingId: "1400a122-36a3-4722-8be1-99af19186877",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-940b-76ff-acf5-ba7bcb367234",
      navn: "Aldersgrense",
      datatype: "heltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-427f-76a7-8f41-280c40150d84",
          opprettet: "2025-09-08T15:00:53.758999",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 67,
            datatype: "heltall",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-91d1-7df2-ba1d-4533f37fcc73",
      navn: "Søknadsdato",
      datatype: "dato",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-44df-777d-8cab-41b871f64c44",
          opprettet: "2025-09-08T15:00:54.367232",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2025-09-08",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:00:54.304728",
            meldingId: "7316e976-b18f-4f46-a2c9-887dc98bfdb3",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199296a-4258-72ec-ab6c-db42802ab358"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-91d1-7df2-ba1d-4533f37fcc74",
      navn: "Ønsker dagpenger fra dato",
      datatype: "dato",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-44df-777d-8cab-41b871f64c45",
          opprettet: "2025-09-08T15:00:54.367472",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2025-06-02",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:00:54.308652",
            meldingId: "7316e976-b18f-4f46-a2c9-887dc98bfdb3",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199296a-4258-72ec-ab6c-db42802ab358"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-940b-76ff-acf5-ba7bcb367233",
      navn: "Fødselsdato",
      datatype: "dato",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
      perioder: [
        {
          id: "0199296a-44df-777d-8cab-41b871f64c46",
          opprettet: "2025-09-08T15:00:54.367632",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "1995-11-05",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:00:54.309223",
            meldingId: "7316e976-b18f-4f46-a2c9-887dc98bfdb3",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-91d1-7df2-ba1d-4533f37fcc75",
      navn: "Søknadstidspunkt",
      datatype: "dato",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-44e1-7c67-886f-4557e2998a24",
          opprettet: "2025-09-08T15:00:54.369429",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2025-09-08",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: [
              "0199296a-44df-777d-8cab-41b871f64c44",
              "0199296a-44df-777d-8cab-41b871f64c45",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-940b-76ff-acf5-ba7bcb367235",
      navn: "Dato søker når maks alder",
      datatype: "dato",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-44e1-7c67-886f-4557e2998a25",
          opprettet: "2025-09-08T15:00:54.36959",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2062-11-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "LeggTilÅr",
            },
            opplysninger: [
              "0199296a-427f-76a7-8f41-280c40150d84",
              "0199296a-44df-777d-8cab-41b871f64c46",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-940b-76ff-acf5-ba7bcb367236",
      navn: "Siste mulige dag bruker kan oppfylle alderskrav",
      datatype: "dato",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-44e2-71c0-869a-ac5ab5cf8d33",
          opprettet: "2025-09-08T15:00:54.370435",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2062-11-30",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteDagIMåned",
            },
            opplysninger: ["0199296a-44e1-7c67-886f-4557e2998a25"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194ff86-a035-7eb0-9c60-21899f7cc0c1",
      navn: "Kravet til reell arbeidssøker er relevant",
      datatype: "boolsk",
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-44ed-7148-85b9-d02cccef4257",
          opprettet: "2025-09-08T15:00:54.381175",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9441-7d1b-a06a-6727543a141f",
      navn: "Det er godkjent at bruker kun søker deltidsarbeid",
      datatype: "boolsk",
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-44f2-7aba-bee3-c91c1b3637ce",
          opprettet: "2025-09-08T15:00:54.386992",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bda",
      navn: "Det er godkjent at bruker kun søker arbeid lokalt",
      datatype: "boolsk",
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-44f3-7193-be9c-3b8eaaa81933",
          opprettet: "2025-09-08T15:00:54.387101",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194929e-2036-7ac1-ada3-5cbe05a83f08",
      navn: "Har helsemessige begrensninger og kan ikke ta alle typer arbeid",
      datatype: "boolsk",
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-44f3-7193-be9c-3b8eaaa81934",
          opprettet: "2025-09-08T15:00:54.387189",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a769",
      navn: "Minimum vanlig arbeidstid",
      datatype: "desimaltall",
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-44f3-7193-be9c-3b8eaaa81935",
          opprettet: "2025-09-08T15:00:54.38726",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 18.75,
            datatype: "desimaltall",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9441-7d1b-a06a-6727543a141e",
      navn: "Kan jobbe heltid og deltid",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
      perioder: [
        {
          id: "0199296a-4d41-727a-b295-2f9910544473",
          opprettet: "2025-09-08T15:00:56.513382",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:00:56.433176",
            meldingId: "ad259292-bd88-4098-8bb5-8b737659c876",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199296a-4258-72ec-ab6c-db42802ab358"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bd9",
      navn: "Kan jobbe i hele Norge",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
      perioder: [
        {
          id: "0199296a-4d41-727a-b295-2f9910544474",
          opprettet: "2025-09-08T15:00:56.513538",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:00:56.433689",
            meldingId: "ad259292-bd88-4098-8bb5-8b737659c876",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199296a-4258-72ec-ab6c-db42802ab358"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bdc",
      navn: "Kan ta alle typer arbeid",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
      perioder: [
        {
          id: "0199296a-4d41-727a-b295-2f9910544475",
          opprettet: "2025-09-08T15:00:56.513663",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:00:56.434088",
            meldingId: "ad259292-bd88-4098-8bb5-8b737659c876",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199296a-4258-72ec-ab6c-db42802ab358"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bde",
      navn: "Villig til å bytte yrke",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
      perioder: [
        {
          id: "0199296a-4d41-727a-b295-2f9910544476",
          opprettet: "2025-09-08T15:00:56.51386",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:00:56.434466",
            meldingId: "ad259292-bd88-4098-8bb5-8b737659c876",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199296a-4258-72ec-ab6c-db42802ab358"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a75f",
      navn: "Ønsket arbeidstid",
      datatype: "desimaltall",
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
      perioder: [
        {
          id: "0199296a-4d42-7174-b209-15767a261c73",
          opprettet: "2025-09-08T15:00:56.51408",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:00:56.434757",
            meldingId: "ad259292-bd88-4098-8bb5-8b737659c876",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199296a-4258-72ec-ab6c-db42802ab358"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9444-7a73-a458-0af81c034d85",
      navn: "Har rett til ordinære dagpenger gjennom arbeidsforhold",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-4d42-7174-b209-15767a261c74",
          opprettet: "2025-09-08T15:00:56.514262",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:00:56.435162",
            meldingId: "ad259292-bd88-4098-8bb5-8b737659c876",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199296a-4258-72ec-ab6c-db42802ab358"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9444-7a73-a458-0af81c034d86",
      navn: "Bruker er permittert",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
      perioder: [
        {
          id: "0199296a-4d42-7174-b209-15767a261c75",
          opprettet: "2025-09-08T15:00:56.514431",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:00:56.435497",
            meldingId: "ad259292-bd88-4098-8bb5-8b737659c876",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199296a-4258-72ec-ab6c-db42802ab358"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9444-7a73-a458-0af81c034d87",
      navn: "Forskutterte lønnsgarantimidler i form av dagpenger",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-4d42-7174-b209-15767a261c76",
          opprettet: "2025-09-08T15:00:56.514553",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:00:56.435841",
            meldingId: "ad259292-bd88-4098-8bb5-8b737659c876",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199296a-4258-72ec-ab6c-db42802ab358"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9444-7a73-a458-0af81c034d88",
      navn: "Permittert fra fiskeindustrien",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
      perioder: [
        {
          id: "0199296a-4d42-7174-b209-15767a261c77",
          opprettet: "2025-09-08T15:00:56.514686",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:00:56.436284",
            meldingId: "ad259292-bd88-4098-8bb5-8b737659c876",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199296a-4258-72ec-ab6c-db42802ab358"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "01948d3c-4bea-7802-9d18-5342a5e2be99",
      navn: "Avtjent verneplikt",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
      perioder: [
        {
          id: "0199296a-4d42-7174-b209-15767a261c78",
          opprettet: "2025-09-08T15:00:56.514866",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:00:56.436582",
            meldingId: "ad259292-bd88-4098-8bb5-8b737659c876",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199296a-4258-72ec-ab6c-db42802ab358"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bd8",
      navn: "Oppfyller kravet til heltid- og deltidsarbeid",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-4d45-7902-a0a4-5e8674e1ad3e",
          opprettet: "2025-09-08T15:00:56.517435",
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
              "0199296a-44f2-7aba-bee3-c91c1b3637ce",
              "0199296a-4d41-727a-b295-2f9910544473",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bdb",
      navn: "Oppfyller kravet til mobilitet",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-4d45-7902-a0a4-5e8674e1ad3f",
          opprettet: "2025-09-08T15:00:56.517583",
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
              "0199296a-44f3-7193-be9c-3b8eaaa81933",
              "0199296a-4d41-727a-b295-2f9910544474",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bdd",
      navn: "Oppfyller kravet til å være arbeidsfør",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-4d45-7902-a0a4-5e8674e1ad40",
          opprettet: "2025-09-08T15:00:56.517687",
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
              "0199296a-44f3-7193-be9c-3b8eaaa81934",
              "0199296a-4d41-727a-b295-2f9910544475",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bdf",
      navn: "Oppfyller kravet til å ta ethvert arbeid",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-4d45-7902-a0a4-5e8674e1ad41",
          opprettet: "2025-09-08T15:00:56.517801",
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
            opplysninger: ["0199296a-4d41-727a-b295-2f9910544476"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a76d",
      navn: "Villig til å jobbe minimum arbeidstid",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-4d46-7088-95dc-f3fbbe8900b7",
          opprettet: "2025-09-08T15:00:56.51804",
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
              "0199296a-44f3-7193-be9c-3b8eaaa81935",
              "0199296a-4d42-7174-b209-15767a261c73",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9444-7a73-a458-0af81c034d89",
      navn: "Har rett til ordinære dagpenger uten arbeidsforhold",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-4d46-7088-95dc-f3fbbe8900b9",
          opprettet: "2025-09-08T15:00:56.51837",
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
              "0199296a-4d42-7174-b209-15767a261c74",
              "0199296a-4d42-7174-b209-15767a261c75",
              "0199296a-4d42-7174-b209-15767a261c76",
              "0199296a-4d42-7174-b209-15767a261c77",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "01980cf4-9010-7bcf-b578-ca5a825d64ef",
      navn: "Skal kravet til verneplikt vurderes",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-4d46-7088-95dc-f3fbbe8900ba",
          opprettet: "2025-09-08T15:00:56.518477",
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
            opplysninger: ["0199296a-4d42-7174-b209-15767a261c78"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877be2",
      navn: "Reell arbeidssøker",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-4d4d-7653-8574-503ee49029c4",
          opprettet: "2025-09-08T15:00:56.525728",
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
              "0199296a-4d45-7902-a0a4-5e8674e1ad3e",
              "0199296a-4d45-7902-a0a4-5e8674e1ad3f",
              "0199296a-4d45-7902-a0a4-5e8674e1ad40",
              "0199296a-4d45-7902-a0a4-5e8674e1ad41",
              "0199296a-4d46-7088-95dc-f3fbbe8900b7",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9444-7a73-a458-0af81c034d8a",
      navn: "Ordinære dagpenger",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-4d4d-7653-8574-503ee49029c5",
          opprettet: "2025-09-08T15:00:56.525864",
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
              "0199296a-4d42-7174-b209-15767a261c74",
              "0199296a-4d46-7088-95dc-f3fbbe8900b9",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9444-7a73-a458-0af81c034d8b",
      navn: "Rettighetstype",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296a-4d4f-74be-9153-f51f5e2e9079",
          opprettet: "2025-09-08T15:00:56.527815",
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
              "0199296a-4d42-7174-b209-15767a261c75",
              "0199296a-4d42-7174-b209-15767a261c76",
              "0199296a-4d42-7174-b209-15767a261c77",
              "0199296a-4d4d-7653-8574-503ee49029c5",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-91d1-7df2-ba1d-4533f37fcc76",
      navn: "Prøvingsdato",
      datatype: "dato",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: true,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0872-7a76-b9d1-84c534c8f23a",
          opprettet: "2025-09-08T15:03:55.506082",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: "2025-06-02",
            datatype: "dato",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-09-08T15:03:55.44216",
            ident: "Z994794",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-940b-76ff-acf5-ba7bcb367237",
      navn: "Oppfyller kravet til alder",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-08af-7f76-a2c2-cdd0ee54632f",
          opprettet: "2025-09-08T15:03:55.567428",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "FørEllerLik",
            },
            opplysninger: [
              "0199296a-44e2-71c0-869a-ac5ab5cf8d33",
              "0199296d-0872-7a76-b9d1-84c534c8f23a",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9414-7823-8d29-0e25b7feb7ce",
      navn: "Lovpålagt rapporteringsfrist for A-ordningen",
      datatype: "dato",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-08b0-7211-9ddc-cc5164bd8e58",
          opprettet: "2025-09-08T15:03:55.56841",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: "2025-06-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04246",
      navn: "Maks lengde på opptjeningsperiode",
      datatype: "heltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-08b0-7211-9ddc-cc5164bd8e59",
          opprettet: "2025-09-08T15:03:55.568498",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 36,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04243",
      navn: "Grunnbeløp",
      datatype: "penger",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-08b0-7211-9ddc-cc5164bd8e5a",
          opprettet: "2025-09-08T15:03:55.568745",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f0423f",
      navn: "Antall G for krav til 12 mnd arbeidsinntekt",
      datatype: "desimaltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-08b0-7211-9ddc-cc5164bd8e5b",
          opprettet: "2025-09-08T15:03:55.56884",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 1.5,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04240",
      navn: "Antall G for krav til 36 mnd arbeidsinntekt",
      datatype: "desimaltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-08b0-7211-9ddc-cc5164bd8e5c",
          opprettet: "2025-09-08T15:03:55.568902",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 3,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9414-7823-8d29-0e25b7feb7cf",
      navn: "Arbeidsgivers rapporteringsfrist",
      datatype: "dato",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-08b1-787e-b843-529afc818f33",
          opprettet: "2025-09-08T15:03:55.569826",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: "2025-06-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "FørsteArbeidsdag",
            },
            opplysninger: ["0199296d-08b0-7211-9ddc-cc5164bd8e58"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04248",
      navn: "Inntektskrav for siste 12 måneder",
      datatype: "penger",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-08b1-787e-b843-529afc818f34",
          opprettet: "2025-09-08T15:03:55.569991",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 195240,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199296d-08b0-7211-9ddc-cc5164bd8e5a",
              "0199296d-08b0-7211-9ddc-cc5164bd8e5b",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04249",
      navn: "Inntektskrav for siste 36 måneder",
      datatype: "penger",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-08b2-7e80-b5f7-1695027053ab",
          opprettet: "2025-09-08T15:03:55.570285",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199296d-08b0-7211-9ddc-cc5164bd8e5a",
              "0199296d-08b0-7211-9ddc-cc5164bd8e5c",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9414-7823-8d29-0e25b7feb7d0",
      navn: "Siste avsluttende kalendermåned",
      datatype: "dato",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-08b2-7e80-b5f7-1695027053ad",
          opprettet: "2025-09-08T15:03:55.570913",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: "2025-04-30",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteavsluttendeKalenderMåned",
            },
            opplysninger: [
              "0199296d-0872-7a76-b9d1-84c534c8f23a",
              "0199296d-08b1-787e-b843-529afc818f33",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04247",
      navn: "Første måned av opptjeningsperiode",
      datatype: "dato",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-08b3-74b9-ba35-01472f276d9f",
          opprettet: "2025-09-08T15:03:55.571531",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: "2022-05-01",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "TrekkFraMåned",
            },
            opplysninger: [
              "0199296d-08b0-7211-9ddc-cc5164bd8e59",
              "0199296d-08b2-7e80-b5f7-1695027053ad",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877be0",
      navn: "Registrert som arbeidssøker",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Register",
      perioder: [
        {
          id: "0199296d-0c63-746f-a0d2-27a704fac13a",
          opprettet: "2025-09-08T15:03:56.515054",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          gyldigTilOgMed: "2025-06-02",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:03:56.449915",
            meldingId: "66aac101-7eb5-4d7d-9951-142cbfceacea",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04244",
      navn: "Inntektsopplysninger",
      datatype: "inntekt",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Register",
      perioder: [
        {
          id: "0199296d-0c63-746f-a0d2-27a704fac13b",
          opprettet: "2025-09-08T15:03:56.515149",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: "01K4MPT2ZKJ39E0AMGZ94EDYS7",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:03:56.450303",
            meldingId: "66aac101-7eb5-4d7d-9951-142cbfceacea",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: [
              "0199296d-0872-7a76-b9d1-84c534c8f23a",
              "0199296d-08b2-7e80-b5f7-1695027053ad",
              "0199296d-08b3-74b9-ba35-01472f276d9f",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04245",
      navn: "Brutto arbeidsinntekt",
      datatype: "inntekt",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c64-76e1-88be-27bc2341e633",
          opprettet: "2025-09-08T15:03:56.516382",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: "01K4MPT2ZKJ39E0AMGZ94EDYS7",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["0199296d-0c63-746f-a0d2-27a704fac13b"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04241",
      navn: "Arbeidsinntekt siste 12 måneder",
      datatype: "penger",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c65-7771-9eda-1eb82401b676",
          opprettet: "2025-09-08T15:03:56.517129",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 499995,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0199296d-0c64-76e1-88be-27bc2341e633"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04242",
      navn: "Arbeidsinntekt siste 36 måneder",
      datatype: "penger",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c65-7771-9eda-1eb82401b677",
          opprettet: "2025-09-08T15:03:56.5176",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 499995,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0199296d-0c64-76e1-88be-27bc2341e633"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f0424a",
      navn: "Arbeidsinntekt er over kravet for siste 12 måneder",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c66-7bd7-8749-f56aaa64ab90",
          opprettet: "2025-09-08T15:03:56.518185",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "0199296d-08b1-787e-b843-529afc818f34",
              "0199296d-0c65-7771-9eda-1eb82401b676",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f0424b",
      navn: "Arbeidsinntekt er over kravet for siste 36 måneder",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c66-7bd7-8749-f56aaa64ab91",
          opprettet: "2025-09-08T15:03:56.518261",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "0199296d-08b2-7e80-b5f7-1695027053ab",
              "0199296d-0c65-7771-9eda-1eb82401b677",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f0424c",
      navn: "Oppfyller kravet til minsteinntekt",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c66-7bd7-8749-f56aaa64ab93",
          opprettet: "2025-09-08T15:03:56.518645",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "0199296d-0c66-7bd7-8749-f56aaa64ab90",
              "0199296d-0c66-7bd7-8749-f56aaa64ab91",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-943f-78d9-b874-00a4944c54f1",
      navn: "Oppfyller vilkåret om å ikke motta andre fulle ytelser",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c67-7240-893c-01eff22cd71f",
          opprettet: "2025-09-08T15:03:56.519148",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d54a",
      navn: "Oppfyller unntak for opphold i Norge",
      datatype: "boolsk",
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c67-7240-893c-01eff22cd720",
          opprettet: "2025-09-08T15:03:56.519243",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d54c",
      navn: "Bruker er medlem av folketrygden",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c67-7240-893c-01eff22cd721",
          opprettet: "2025-09-08T15:03:56.519297",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-940f-7af9-9387-052e028b29ee",
      navn: "Grunnbeløp for grunnlag",
      datatype: "penger",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c67-7240-893c-01eff22cd722",
          opprettet: "2025-09-08T15:03:56.519462",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-940f-7af9-9387-052e028b29ed",
      navn: "Tellende inntekt",
      datatype: "inntekt",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c67-7240-893c-01eff22cd723",
          opprettet: "2025-09-08T15:03:56.51952",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: "01K4MPT2ZKJ39E0AMGZ94EDYS7",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["0199296d-0c63-746f-a0d2-27a704fac13b"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10ca7",
      navn: "Faktor for maksimalt mulig grunnlag",
      datatype: "desimaltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c67-7240-893c-01eff22cd724",
          opprettet: "2025-09-08T15:03:56.519559",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 6,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10ca9",
      navn: "Antall år i 36 måneder",
      datatype: "desimaltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c67-7240-893c-01eff22cd725",
          opprettet: "2025-09-08T15:03:56.519591",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 3,
            datatype: "desimaltall",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9421-766c-9dc6-41fe6c9a1dff",
      navn: "Antall G som gis som grunnlag ved verneplikt",
      datatype: "desimaltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c67-7240-893c-01eff22cd726",
          opprettet: "2025-09-08T15:03:56.519627",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 3,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9421-766c-9dc6-41fe6c9a1e04",
      navn: "Grunnlag for verneplikt hvis kravet ikke er oppfylt",
      datatype: "penger",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c67-7240-893c-01eff22cd727",
          opprettet: "2025-09-08T15:03:56.519658",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a23e",
      navn: "Faktor for utregning av dagsats etter dagpengegrunnlaget",
      datatype: "desimaltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c67-7240-893c-01eff22cd728",
          opprettet: "2025-09-08T15:03:56.519701",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 0.0024,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a23d",
      navn: "Barnetilleggets størrelse i kroner per dag for hvert barn",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c67-7240-893c-01eff22cd729",
          opprettet: "2025-09-08T15:03:56.519769",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 37,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a246",
      navn: "90% av grunnlag for dagpenger",
      datatype: "desimaltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c67-7240-893c-01eff22cd72a",
          opprettet: "2025-09-08T15:03:56.519812",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 0.9,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a247",
      navn: "Antall arbeidsdager per år",
      datatype: "heltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c67-7240-893c-01eff22cd72b",
          opprettet: "2025-09-08T15:03:56.519849",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 260,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d4",
      navn: "Sykepenger dagsats",
      datatype: "penger",
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c67-7240-893c-01eff22cd72c",
          opprettet: "2025-09-08T15:03:56.519884",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d5",
      navn: "Pleiepenger dagsats",
      datatype: "penger",
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c67-7240-893c-01eff22cd72d",
          opprettet: "2025-09-08T15:03:56.519918",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d6",
      navn: "Omsorgspenger dagsats",
      datatype: "penger",
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c67-7240-893c-01eff22cd72e",
          opprettet: "2025-09-08T15:03:56.519997",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d7",
      navn: "Opplæringspenger dagsats",
      datatype: "penger",
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c68-788e-b139-cee042af934f",
          opprettet: "2025-09-08T15:03:56.520086",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d1",
      navn: "Uføretrygd etter lovens kapittel 12",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c68-788e-b139-cee042af9350",
          opprettet: "2025-09-08T15:03:56.520147",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d8",
      navn: "Uføre dagsats",
      datatype: "penger",
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c68-788e-b139-cee042af9351",
          opprettet: "2025-09-08T15:03:56.520218",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0196afc0-6807-7fa3-83e4-cf7f621f3a7e",
      navn: "Sum hvis Uføre ikke skal samordnes",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c68-788e-b139-cee042af9352",
          opprettet: "2025-09-08T15:03:56.520288",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d9",
      navn: "Foreldrepenger dagsats",
      datatype: "penger",
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c68-788e-b139-cee042af9353",
          opprettet: "2025-09-08T15:03:56.520345",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45da",
      navn: "Svangerskapspenger dagsats",
      datatype: "penger",
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c68-788e-b139-cee042af9354",
          opprettet: "2025-09-08T15:03:56.520403",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-91df-746a-a8ac-4a6b2b30685d",
      navn: "Brukeren deltar i streik eller er omfattet av lock-out",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c68-788e-b139-cee042af9355",
          opprettet: "2025-09-08T15:03:56.520464",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-91df-746a-a8ac-4a6b2b30685e",
      navn: "Brukeren er ledig ved samme bedrift eller arbeidsplass, og blir påvirket av utfallet",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c68-788e-b139-cee042af9356",
          opprettet: "2025-09-08T15:03:56.52053",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a76b",
      navn: "Ny arbeidstid per uke",
      datatype: "desimaltall",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c68-788e-b139-cee042af9357",
          opprettet: "2025-09-08T15:03:56.520583",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a768",
      navn: "Maksimal vanlig arbeidstid",
      datatype: "desimaltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c68-788e-b139-cee042af9358",
          opprettet: "2025-09-08T15:03:56.520635",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9421-766c-9dc6-41fe6c9a1e02",
      navn: "Fastsatt vanlig arbeidstid for verneplikt",
      datatype: "desimaltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c68-788e-b139-cee042af9359",
          opprettet: "2025-09-08T15:03:56.520683",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 37.5,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a767",
      navn: "Beregnet vanlig arbeidstid per uke før tap",
      datatype: "desimaltall",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c68-788e-b139-cee042af935a",
          opprettet: "2025-09-08T15:03:56.520723",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 37.5,
            datatype: "desimaltall",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9434-79e8-a64d-1a23cc5d86ed",
      navn: "Antall timer arbeidstiden skal samordnes mot",
      datatype: "desimaltall",
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c68-788e-b139-cee042af935b",
          opprettet: "2025-09-08T15:03:56.520764",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
        },
      ],
    },
    {
      opplysningTypeId: "019522d2-9bb1-7960-b1e2-a959566e2428",
      navn: "Krav til prosentvis tap av arbeidstid ved permittering fra fiskeindustrien",
      datatype: "desimaltall",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c68-788e-b139-cee042af935c",
          opprettet: "2025-09-08T15:03:56.520811",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "019522d6-846d-7173-a892-67f10016d8d2",
      navn: "Ordinært krav til prosentvis tap av arbeidstid",
      datatype: "desimaltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c68-788e-b139-cee042af935d",
          opprettet: "2025-09-08T15:03:56.520857",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 50,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a764",
      navn: "Beregningsregel: Arbeidstid siste 6 måneder",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c68-788e-b139-cee042af935e",
          opprettet: "2025-09-08T15:03:56.520905",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a765",
      navn: "Beregningsregel: Arbeidstid siste 12 måneder",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c68-788e-b139-cee042af935f",
          opprettet: "2025-09-08T15:03:56.520949",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a766",
      navn: "Beregningsregel: Arbeidstid siste 36 måneder",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c68-788e-b139-cee042af9360",
          opprettet: "2025-09-08T15:03:56.520992",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0196b4a7-23b5-7b2c-aa95-e4167d900de8",
      navn: "Arbeidstidsreduksjonen er ikke brukt tidligere i en full stønadsperiode",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c69-72ff-a84a-db9db5edbe81",
          opprettet: "2025-09-08T15:03:56.521055",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b527",
      navn: "Deltar i arbeidsmarkedstiltak",
      datatype: "boolsk",
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c69-72ff-a84a-db9db5edbe82",
          opprettet: "2025-09-08T15:03:56.521101",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b528",
      navn: "Deltar i opplæring for innvandrere",
      datatype: "boolsk",
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c69-72ff-a84a-db9db5edbe83",
          opprettet: "2025-09-08T15:03:56.521145",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b529",
      navn: "Deltar i grunnskoleopplæring, videregående opplæring og opplæring i grunnleggende ferdigheter",
      datatype: "boolsk",
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c69-72ff-a84a-db9db5edbe84",
          opprettet: "2025-09-08T15:03:56.52119",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b52a",
      navn: "Deltar i høyere yrkesfaglig utdanning",
      datatype: "boolsk",
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c69-72ff-a84a-db9db5edbe85",
          opprettet: "2025-09-08T15:03:56.521242",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b52b",
      navn: "Deltar i høyere utdanning",
      datatype: "boolsk",
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c69-72ff-a84a-db9db5edbe86",
          opprettet: "2025-09-08T15:03:56.521328",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b52c",
      navn: "Deltar på kurs mv",
      datatype: "boolsk",
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c69-72ff-a84a-db9db5edbe87",
          opprettet: "2025-09-08T15:03:56.521376",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9447-7e36-a569-3e9f42bff9f6",
      navn: "Bruker er utestengt fra dagpenger",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c69-72ff-a84a-db9db5edbe88",
          opprettet: "2025-09-08T15:03:56.521424",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d54d",
      navn: "Oppfyller kravet til medlemskap",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c6a-7ee9-9102-a56e7f353aa0",
          opprettet: "2025-09-08T15:03:56.522132",
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
            opplysninger: ["0199296d-0c67-7240-893c-01eff22cd721"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-940f-7af9-9387-052e028b29ec",
      navn: "Oppjustert inntekt",
      datatype: "inntekt",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c6a-7ee9-9102-a56e7f353aa1",
          opprettet: "2025-09-08T15:03:56.52291",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: "01K4MPT2ZKJ39E0AMGZ94EDYS7",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Oppjuster",
            },
            opplysninger: [
              "0199296d-0c67-7240-893c-01eff22cd722",
              "0199296d-0c67-7240-893c-01eff22cd723",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10ca8",
      navn: "6 ganger grunnbeløp",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c6b-72aa-b446-6ca469e76b91",
          opprettet: "2025-09-08T15:03:56.523031",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199296d-0c67-7240-893c-01eff22cd722",
              "0199296d-0c67-7240-893c-01eff22cd724",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9421-766c-9dc6-41fe6c9a1e00",
      navn: "Grunnlag for gis ved verneplikt",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c6b-72aa-b446-6ca469e76b92",
          opprettet: "2025-09-08T15:03:56.523142",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199296d-0c67-7240-893c-01eff22cd722",
              "0199296d-0c67-7240-893c-01eff22cd726",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0196afaf-afbd-7079-b2cf-3669ad9d86aa",
      navn: "Uføretrygden er gitt med virkningstidspunkt i inneværende år eller innenfor de to siste kalenderår",
      datatype: "boolsk",
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c6b-72aa-b446-6ca469e76b93",
          opprettet: "2025-09-08T15:03:56.52329",
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
            opplysninger: ["0199296d-0c68-788e-b139-cee042af9350"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-91df-746a-a8ac-4a6b2b30685f",
      navn: "Brukeren er ikke påvirket av streik eller lock-out",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c6b-72aa-b446-6ca469e76b94",
          opprettet: "2025-09-08T15:03:56.523637",
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
              "0199296d-0c68-788e-b139-cee042af9355",
              "0199296d-0c68-788e-b139-cee042af9356",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9434-79e8-a64d-1a23cc5d86ee",
      navn: "Samordnet fastsatt arbeidstid",
      datatype: "desimaltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c6b-72aa-b446-6ca469e76b95",
          opprettet: "2025-09-08T15:03:56.523841",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 37.5,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "0199296d-0c68-788e-b139-cee042af935a",
              "0199296d-0c68-788e-b139-cee042af935b",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a762",
      navn: "Krav til prosentvis tap av arbeidstid",
      datatype: "desimaltall",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c6b-72aa-b446-6ca469e76b96",
          opprettet: "2025-09-08T15:03:56.523944",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 50,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "0199296a-4d42-7174-b209-15767a261c77",
              "0199296d-0c68-788e-b139-cee042af935c",
              "0199296d-0c68-788e-b139-cee042af935d",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a763",
      navn: "Beregningsregel: Tapt arbeidstid",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c6c-7485-a01b-a37040394f98",
          opprettet: "2025-09-08T15:03:56.52413",
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
              "0199296d-0c68-788e-b139-cee042af935e",
              "0199296d-0c68-788e-b139-cee042af935f",
              "0199296d-0c68-788e-b139-cee042af9360",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b523",
      navn: "Godkjent unntak for utdanning eller opplæring?",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c6c-7485-a01b-a37040394f99",
          opprettet: "2025-09-08T15:03:56.524339",
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
              "0199296d-0c69-72ff-a84a-db9db5edbe82",
              "0199296d-0c69-72ff-a84a-db9db5edbe83",
              "0199296d-0c69-72ff-a84a-db9db5edbe84",
              "0199296d-0c69-72ff-a84a-db9db5edbe85",
              "0199296d-0c69-72ff-a84a-db9db5edbe86",
              "0199296d-0c69-72ff-a84a-db9db5edbe87",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9447-7e36-a569-3e9f42bff9f7",
      navn: "Oppfyller krav til ikke utestengt",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c6c-7485-a01b-a37040394f9a",
          opprettet: "2025-09-08T15:03:56.524466",
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
            opplysninger: ["0199296d-0c69-72ff-a84a-db9db5edbe88"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb0",
      navn: "Inntektperiode 1",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c6e-7c53-9107-f21ecff65a99",
          opprettet: "2025-09-08T15:03:56.526171",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 524714.9772631986,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0199296d-0c6a-7ee9-9102-a56e7f353aa1"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb1",
      navn: "Inntektperiode 2",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c6e-7c53-9107-f21ecff65a9a",
          opprettet: "2025-09-08T15:03:56.526478",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0199296d-0c6a-7ee9-9102-a56e7f353aa1"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb2",
      navn: "Inntektperiode 3",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c6e-7c53-9107-f21ecff65a9b",
          opprettet: "2025-09-08T15:03:56.526701",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0199296d-0c6a-7ee9-9102-a56e7f353aa1"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9421-766c-9dc6-41fe6c9a1e03",
      navn: "Grunnlag for verneplikt hvis kravet er oppfylt",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c6e-7c53-9107-f21ecff65a9c",
          opprettet: "2025-09-08T15:03:56.526797",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "0199296a-4d46-7088-95dc-f3fbbe8900ba",
              "0199296d-0c67-7240-893c-01eff22cd727",
              "0199296d-0c6b-72aa-b446-6ca469e76b92",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0196afbf-e32d-775a-ad10-f476e26dcb6f",
      navn: "Uførebeløp som skal samordnes",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c6e-7c53-9107-f21ecff65a9d",
          opprettet: "2025-09-08T15:03:56.52686",
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
              "0199296d-0c68-788e-b139-cee042af9351",
              "0199296d-0c68-788e-b139-cee042af9352",
              "0199296d-0c6b-72aa-b446-6ca469e76b93",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10caa",
      navn: "Inntekt etter avkortning og oppjustering siste 12 måneder",
      datatype: "penger",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c6f-7350-89cf-abb1c71f760d",
          opprettet: "2025-09-08T15:03:56.527812",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 524714.9772631986,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "0199296d-0c6b-72aa-b446-6ca469e76b91",
              "0199296d-0c6e-7c53-9107-f21ecff65a99",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb3",
      navn: "Avkortet inntektperiode 1",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c6f-7350-89cf-abb1c71f760e",
          opprettet: "2025-09-08T15:03:56.527921",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 524714.9772631986,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "0199296d-0c6b-72aa-b446-6ca469e76b91",
              "0199296d-0c6e-7c53-9107-f21ecff65a99",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb4",
      navn: "Avkortet inntektperiode 2",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c6f-7350-89cf-abb1c71f760f",
          opprettet: "2025-09-08T15:03:56.527989",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "0199296d-0c6b-72aa-b446-6ca469e76b91",
              "0199296d-0c6e-7c53-9107-f21ecff65a9a",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb5",
      navn: "Avkortet inntektperiode 3",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c70-73b5-8ea3-a4ac8ee7ed15",
          opprettet: "2025-09-08T15:03:56.5281",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "0199296d-0c6b-72aa-b446-6ca469e76b91",
              "0199296d-0c6e-7c53-9107-f21ecff65a9b",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9434-79e8-a64d-1a23cc5d86e9",
      navn: "Sum andre ytelser",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c70-73b5-8ea3-a4ac8ee7ed16",
          opprettet: "2025-09-08T15:03:56.528256",
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
              "0199296d-0c67-7240-893c-01eff22cd72c",
              "0199296d-0c67-7240-893c-01eff22cd72d",
              "0199296d-0c67-7240-893c-01eff22cd72e",
              "0199296d-0c68-788e-b139-cee042af934f",
              "0199296d-0c68-788e-b139-cee042af9353",
              "0199296d-0c68-788e-b139-cee042af9354",
              "0199296d-0c6e-7c53-9107-f21ecff65a9d",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cab",
      navn: "Inntekt siste 36 måneder",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c71-7a62-908c-4187cddcc8ac",
          opprettet: "2025-09-08T15:03:56.52933",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 524714.9772631986,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SumAv",
            },
            opplysninger: [
              "0199296d-0c6f-7350-89cf-abb1c71f760e",
              "0199296d-0c6f-7350-89cf-abb1c71f760f",
              "0199296d-0c70-73b5-8ea3-a4ac8ee7ed15",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cac",
      navn: "Gjennomsnittlig inntekt etter avkortning og oppjustering siste 36 måneder",
      datatype: "penger",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c72-733e-a6f2-82494a313ed6",
          opprettet: "2025-09-08T15:03:56.530258",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 174904.9924210662,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "0199296d-0c67-7240-893c-01eff22cd725",
              "0199296d-0c71-7a62-908c-4187cddcc8ac",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cbb",
      navn: "Uavrundet grunnlag",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c73-7524-8349-71e74ad9674a",
          opprettet: "2025-09-08T15:03:56.531269",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 524714.9772631986,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "0199296d-0c6f-7350-89cf-abb1c71f760d",
              "0199296d-0c72-733e-a6f2-82494a313ed6",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cbc",
      navn: "Grunnlag ved ordinære dagpenger",
      datatype: "penger",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c74-7b7b-9f99-4b548cc55018",
          opprettet: "2025-09-08T15:03:56.532204",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 524715,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["0199296d-0c73-7524-8349-71e74ad9674a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cbd",
      navn: "Dagpengegrunnlag",
      datatype: "penger",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c74-7b7b-9f99-4b548cc5501a",
          opprettet: "2025-09-08T15:03:56.532947",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 524715,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "0199296d-0c6e-7c53-9107-f21ecff65a9c",
              "0199296d-0c74-7b7b-9f99-4b548cc55018",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9421-766c-9dc6-41fe6c9a1e05",
      navn: "Grunnlaget for verneplikt er høyere enn dagpengegrunnlaget",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c75-787c-86c8-1230499e3eaa",
          opprettet: "2025-09-08T15:03:56.533041",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "0199296d-0c6e-7c53-9107-f21ecff65a9c",
              "0199296d-0c74-7b7b-9f99-4b548cc55018",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a23f",
      navn: "Dagsats uten barnetillegg før samordning",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c75-787c-86c8-1230499e3eac",
          opprettet: "2025-09-08T15:03:56.533956",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 1259.316,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199296d-0c67-7240-893c-01eff22cd728",
              "0199296d-0c74-7b7b-9f99-4b548cc5501a",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a248",
      navn: "Maksimalt mulig grunnlag avgrenset til 90% av dagpengegrunnlaget",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c76-7dbd-af1b-f5a26767bdd3",
          opprettet: "2025-09-08T15:03:56.534112",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 472243.5,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199296d-0c67-7240-893c-01eff22cd72a",
              "0199296d-0c74-7b7b-9f99-4b548cc5501a",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a76c",
      navn: "Fastsatt vanlig arbeidstid etter ordinær eller verneplikt",
      datatype: "desimaltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c76-7dbd-af1b-f5a26767bdd4",
          opprettet: "2025-09-08T15:03:56.534198",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 37.5,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "0199296d-0c68-788e-b139-cee042af9359",
              "0199296d-0c68-788e-b139-cee042af935a",
              "0199296d-0c75-787c-86c8-1230499e3eaa",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a241",
      navn: "Dagsats uten barnetillegg før samordning",
      datatype: "penger",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c77-7ee1-8a7c-862b946cf0fc",
          opprettet: "2025-09-08T15:03:56.535113",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 1259,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["0199296d-0c75-787c-86c8-1230499e3eac"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a24a",
      navn: "Maksimal mulig dagsats avgrenset til 90% av dagpengegrunnlaget",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c77-7ee1-8a7c-862b946cf0fd",
          opprettet: "2025-09-08T15:03:56.535281",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 1816.321153846154,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "0199296d-0c67-7240-893c-01eff22cd72b",
              "0199296d-0c76-7dbd-af1b-f5a26767bdd3",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a76a",
      navn: "Fastsatt arbeidstid per uke før tap",
      datatype: "desimaltall",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c77-7ee1-8a7c-862b946cf0fe",
          opprettet: "2025-09-08T15:03:56.535363",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 37.5,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "0199296a-4d42-7174-b209-15767a261c73",
              "0199296d-0c68-788e-b139-cee042af9358",
              "0199296d-0c6b-72aa-b446-6ca469e76b95",
              "0199296d-0c76-7dbd-af1b-f5a26767bdd4",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a24b",
      navn: "Avrundet maksimal mulig dagsats avgrenset til 90% av dagpengegrunnlaget",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c78-772f-aad6-cccd04838ea6",
          opprettet: "2025-09-08T15:03:56.536392",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 1816,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["0199296d-0c77-7ee1-8a7c-862b946cf0fd"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a76e",
      navn: "Oppfyller vilkåret om tap av arbeidstid",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-0c78-772f-aad6-cccd04838ea7",
          opprettet: "2025-09-08T15:03:56.536558",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "SjekkAvTerskel",
            },
            opplysninger: [
              "0199296d-0c68-788e-b139-cee042af9357",
              "0199296d-0c6b-72aa-b446-6ca469e76b96",
              "0199296d-0c77-7ee1-8a7c-862b946cf0fe",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0196ab10-0cff-7301-99d6-65be50a50201",
      navn: "Bostedsland er Norge",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
      perioder: [
        {
          id: "0199296d-1085-7d1f-a3cd-a66f5fb195ad",
          opprettet: "2025-09-08T15:03:57.573123",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:03:57.512182",
            meldingId: "95395cf5-1bfc-4409-b0b6-493006289246",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199296a-4258-72ec-ab6c-db42802ab358"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a23b",
      navn: "Barn",
      datatype: "barn",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Register",
      perioder: [
        {
          id: "0199296d-1085-7d1f-a3cd-a66f5fb195ae",
          opprettet: "2025-09-08T15:03:57.573306",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: [],
            datatype: "barn",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:03:57.512476",
            meldingId: "95395cf5-1bfc-4409-b0b6-493006289246",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199296a-4258-72ec-ab6c-db42802ab358"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a75e",
      navn: "Har krav på lønn fra arbeidsgiver",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
      perioder: [
        {
          id: "0199296d-1085-7d1f-a3cd-a66f5fb195af",
          opprettet: "2025-09-08T15:03:57.573506",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:03:57.512702",
            meldingId: "95395cf5-1bfc-4409-b0b6-493006289246",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199296a-4258-72ec-ab6c-db42802ab358"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b522",
      navn: "Brukeren er under utdanning eller opplæring",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
      perioder: [
        {
          id: "0199296d-1085-7d1f-a3cd-a66f5fb195b0",
          opprettet: "2025-09-08T15:03:57.573691",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:03:57.512883",
            meldingId: "95395cf5-1bfc-4409-b0b6-493006289246",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199296a-4258-72ec-ab6c-db42802ab358"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d2",
      navn: "Foreldrepenger etter lovens kapittel 14",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-1085-7d1f-a3cd-a66f5fb195b1",
          opprettet: "2025-09-08T15:03:57.573867",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:03:57.513051",
            meldingId: "95395cf5-1bfc-4409-b0b6-493006289246",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45cf",
      navn: "Omsorgspenger etter lovens kapittel 9",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-1086-7ce7-9666-af53435a29fb",
          opprettet: "2025-09-08T15:03:57.574132",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:03:57.513239",
            meldingId: "95395cf5-1bfc-4409-b0b6-493006289246",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45ce",
      navn: "Pleiepenger etter lovens kapittel 9",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-1087-72f7-8735-7f8ef7f70de0",
          opprettet: "2025-09-08T15:03:57.575091",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:03:57.513394",
            meldingId: "95395cf5-1bfc-4409-b0b6-493006289246",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d3",
      navn: "Svangerskapspenger etter lovens kapittel 14",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-1087-72f7-8735-7f8ef7f70de1",
          opprettet: "2025-09-08T15:03:57.575364",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:03:57.513586",
            meldingId: "95395cf5-1bfc-4409-b0b6-493006289246",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d0",
      navn: "Opplæringspenger etter lovens kapittel 9",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-1087-72f7-8735-7f8ef7f70de2",
          opprettet: "2025-09-08T15:03:57.575603",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:03:57.513768",
            meldingId: "95395cf5-1bfc-4409-b0b6-493006289246",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45cd",
      navn: "Sykepenger etter lovens kapittel 8",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-1087-72f7-8735-7f8ef7f70de3",
          opprettet: "2025-09-08T15:03:57.575783",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:03:57.513965",
            meldingId: "95395cf5-1bfc-4409-b0b6-493006289246",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d549",
      navn: "Bruker oppholder seg i Norge",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
      perioder: [
        {
          id: "0199296d-108a-7dcc-a87c-4bd601599283",
          opprettet: "2025-09-08T15:03:57.578384",
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
            opplysninger: ["0199296d-1085-7d1f-a3cd-a66f5fb195ad"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a23c",
      navn: "Antall barn som gir rett til barnetillegg",
      datatype: "heltall",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-108a-7dcc-a87c-4bd601599284",
          opprettet: "2025-09-08T15:03:57.578622",
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
            opplysninger: ["0199296d-1085-7d1f-a3cd-a66f5fb195ae"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9434-79e8-a64d-1a23cc5d86ea",
      navn: "Medlem har reduserte ytelser fra folketrygden (Samordning)",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-108a-7dcc-a87c-4bd601599285",
          opprettet: "2025-09-08T15:03:57.578905",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "0199296d-0c6b-72aa-b446-6ca469e76b93",
              "0199296d-1085-7d1f-a3cd-a66f5fb195b1",
              "0199296d-1086-7ce7-9666-af53435a29fb",
              "0199296d-1087-72f7-8735-7f8ef7f70de0",
              "0199296d-1087-72f7-8735-7f8ef7f70de1",
              "0199296d-1087-72f7-8735-7f8ef7f70de2",
              "0199296d-1087-72f7-8735-7f8ef7f70de3",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a761",
      navn: "Oppfyller vilkåret til tap av arbeidsinntekt",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-108b-75b6-911d-ab094403b4b5",
          opprettet: "2025-09-08T15:03:57.579098",
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
            opplysninger: ["0199296d-1085-7d1f-a3cd-a66f5fb195af"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b524",
      navn: "Har svart ja på spørsmål om utdanning eller opplæring",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-108b-75b6-911d-ab094403b4b6",
          opprettet: "2025-09-08T15:03:57.579247",
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
            opplysninger: ["0199296d-1085-7d1f-a3cd-a66f5fb195b0"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b525",
      navn: "Har svart nei på spørsmål om utdanning eller opplæring",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-108b-75b6-911d-ab094403b4b7",
          opprettet: "2025-09-08T15:03:57.579365",
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
            opplysninger: ["0199296d-1085-7d1f-a3cd-a66f5fb195b0"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d54b",
      navn: "Oppfyller kravet til opphold i Norge eller unntak",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-108c-7753-a08b-8bc370b2f459",
          opprettet: "2025-09-08T15:03:57.580371",
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
              "0199296d-0c67-7240-893c-01eff22cd720",
              "0199296d-108a-7dcc-a87c-4bd601599283",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a244",
      navn: "Sum av barnetillegg",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-108c-7753-a08b-8bc370b2f45a",
          opprettet: "2025-09-08T15:03:57.58062",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199296d-0c67-7240-893c-01eff22cd729",
              "0199296d-108a-7dcc-a87c-4bd601599284",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a76f",
      navn: "Oppfyller vilkåret om tap av arbeidsinntekt og arbeidstid",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-108c-7753-a08b-8bc370b2f45b",
          opprettet: "2025-09-08T15:03:57.580764",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "0199296d-0c69-72ff-a84a-db9db5edbe81",
              "0199296d-0c6c-7485-a01b-a37040394f98",
              "0199296d-0c78-772f-aad6-cccd04838ea7",
              "0199296d-108b-75b6-911d-ab094403b4b5",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b526",
      navn: "Oppfyller kravet på unntak for utdanning eller opplæring",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-108c-7753-a08b-8bc370b2f45c",
          opprettet: "2025-09-08T15:03:57.580869",
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
              "0199296d-0c6c-7485-a01b-a37040394f99",
              "0199296d-108b-75b6-911d-ab094403b4b6",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d54e",
      navn: "Kravet til opphold i Norge er oppfylt",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-108e-7491-89ce-0adf3018317b",
          opprettet: "2025-09-08T15:03:57.582143",
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
              "0199296d-0c6a-7ee9-9102-a56e7f353aa0",
              "0199296d-108c-7753-a08b-8bc370b2f459",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a245",
      navn: "Dagsats med barnetillegg før samordning",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-108e-7491-89ce-0adf3018317c",
          opprettet: "2025-09-08T15:03:57.582437",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 1259,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "0199296d-0c77-7ee1-8a7c-862b946cf0fc",
              "0199296d-108c-7753-a08b-8bc370b2f45a",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a24c",
      navn: "Har barnetillegg",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-108e-7491-89ce-0adf3018317d",
          opprettet: "2025-09-08T15:03:57.582588",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "0199296d-0c67-7240-893c-01eff22cd729",
              "0199296d-108c-7753-a08b-8bc370b2f45a",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b52d",
      navn: "Oppfyller krav til utdanning eller opplæring",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-108e-7491-89ce-0adf3018317e",
          opprettet: "2025-09-08T15:03:57.582725",
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
              "0199296d-108b-75b6-911d-ab094403b4b7",
              "0199296d-108c-7753-a08b-8bc370b2f45c",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a242",
      navn: "Andel av dagsats med barnetillegg som overstiger maks andel av dagpengegrunnlaget",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-1090-78f1-813f-5f2053d66518",
          opprettet: "2025-09-08T15:03:57.584163",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "0199296d-0c78-772f-aad6-cccd04838ea6",
              "0199296d-108e-7491-89ce-0adf3018317c",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a243",
      navn: "Andel av dagsats uten barnetillegg avkortet til maks andel av dagpengegrunnlaget",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-1091-718f-932c-c0dfb8ba85bd",
          opprettet: "2025-09-08T15:03:57.585371",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 1259,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "0199296d-0c77-7ee1-8a7c-862b946cf0fc",
              "0199296d-1090-78f1-813f-5f2053d66518",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9434-79e8-a64d-1a23cc5d86ec",
      navn: "Samordnet dagsats er større enn 0",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-1092-70e5-b304-cd81e14ba894",
          opprettet: "2025-09-08T15:03:57.586711",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "0199296d-0c70-73b5-8ea3-a4ac8ee7ed16",
              "0199296d-1091-718f-932c-c0dfb8ba85bd",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9434-79e8-a64d-1a23cc5d86eb",
      navn: "Samordnet dagsats uten barnetillegg",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-1092-70e5-b304-cd81e14ba895",
          opprettet: "2025-09-08T15:03:57.586876",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 1259,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "0199296d-0c70-73b5-8ea3-a4ac8ee7ed16",
              "0199296d-1091-718f-932c-c0dfb8ba85bd",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9434-79e8-a64d-1a23cc5d86ef",
      navn: "Utfall etter samordning",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-1094-743c-8d61-3f6cefe30a8b",
          opprettet: "2025-09-08T15:03:57.588059",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "0199296d-108e-7491-89ce-0adf3018317d",
              "0199296d-1092-70e5-b304-cd81e14ba894",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877be1",
      navn: "Oppfyller kravet til å være registrert som arbeidssøker",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: true,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-466b-7036-ae29-1ce9c016dc23",
          opprettet: "2025-09-08T15:04:11.371413",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-09-08T15:04:11.310602",
            ident: "Z994794",
            begrunnelse: {
              verdi: "aewf",
              sistEndret: "2025-09-08T15:04:11.310583",
            },
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb6",
      navn: "Har avkortet grunnlaget i periode 1",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-466e-7a82-8a04-1248ff2ca5be",
          opprettet: "2025-09-08T15:04:11.374197",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "0199296d-0c6b-72aa-b446-6ca469e76b91",
              "0199296d-0c6e-7c53-9107-f21ecff65a99",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb7",
      navn: "Har avkortet grunnlaget i periode 2",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-466e-7a82-8a04-1248ff2ca5bf",
          opprettet: "2025-09-08T15:04:11.374317",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "0199296d-0c6b-72aa-b446-6ca469e76b91",
              "0199296d-0c6e-7c53-9107-f21ecff65a9a",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb8",
      navn: "Har avkortet grunnlaget i periode 3",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-466e-7a82-8a04-1248ff2ca5c0",
          opprettet: "2025-09-08T15:04:11.374379",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "0199296d-0c6b-72aa-b446-6ca469e76b91",
              "0199296d-0c6e-7c53-9107-f21ecff65a9b",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cba",
      navn: "Brukt beregningsregel",
      datatype: "tekst",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-466e-7a82-8a04-1248ff2ca5c1",
          opprettet: "2025-09-08T15:04:11.374453",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: "Inntekt etter avkortning og oppjustering siste 12 måneder",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Brukt",
            },
            opplysninger: ["0199296d-0c73-7524-8349-71e74ad9674a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cad",
      navn: "Utbetalt inntekt periode 1",
      datatype: "penger",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-466e-7a82-8a04-1248ff2ca5c2",
          opprettet: "2025-09-08T15:04:11.374873",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 499995,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0199296d-0c67-7240-893c-01eff22cd723"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cae",
      navn: "Utbetalt inntekt periode 2",
      datatype: "penger",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-466f-71d5-929b-421c2561af2f",
          opprettet: "2025-09-08T15:04:11.375169",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0199296d-0c67-7240-893c-01eff22cd723"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10caf",
      navn: "Utbetalt inntekt periode 3",
      datatype: "penger",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-466f-71d5-929b-421c2561af30",
          opprettet: "2025-09-08T15:04:11.375372",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0199296d-0c67-7240-893c-01eff22cd723"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a249",
      navn: "Antall arbeidsdager per uke",
      datatype: "heltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-466f-71d5-929b-421c2561af31",
          opprettet: "2025-09-08T15:04:11.375423",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 5,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a2b",
      navn: "Hvor mange prosent av G skal brukes som terskel ved samordning",
      datatype: "desimaltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-466f-71d5-929b-421c2561af32",
          opprettet: "2025-09-08T15:04:11.375467",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 0.03,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-942e-7cb0-aa59-05ea449d88e7",
      navn: "Pensjon fra en offentlig tjenestepensjonsordning beløp",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-466f-71d5-929b-421c2561af33",
          opprettet: "2025-09-08T15:04:11.375533",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-942e-7cb0-aa59-05ea449d88e8",
      navn: "Uførepensjon fra offentlig pensjonsordning beløp",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-466f-71d5-929b-421c2561af34",
          opprettet: "2025-09-08T15:04:11.375571",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a26",
      navn: "Vartpenger beløp",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-466f-71d5-929b-421c2561af35",
          opprettet: "2025-09-08T15:04:11.375606",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a27",
      navn: "Ventelønn beløp",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-466f-71d5-929b-421c2561af36",
          opprettet: "2025-09-08T15:04:11.375642",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a28",
      navn: "Etterlønn beløp",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-466f-71d5-929b-421c2561af37",
          opprettet: "2025-09-08T15:04:11.375677",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a29",
      navn: "Garantilott fra Garantikassen for fiskere beløp",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-466f-71d5-929b-421c2561af38",
          opprettet: "2025-09-08T15:04:11.375712",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f1544f",
      navn: "Terskelfaktor for 12 måneder",
      datatype: "desimaltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-466f-71d5-929b-421c2561af39",
          opprettet: "2025-09-08T15:04:11.375755",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 2,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f1544b",
      navn: "Lang dagpengeperiode",
      datatype: "heltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-466f-71d5-929b-421c2561af3a",
          opprettet: "2025-09-08T15:04:11.375795",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 104,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f1544a",
      navn: "Kort dagpengeperiode",
      datatype: "heltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-466f-71d5-929b-421c2561af3b",
          opprettet: "2025-09-08T15:04:11.375834",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 52,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15451",
      navn: "Snittinntekt siste 36 måneder",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4670-7b45-84d0-1835440374d5",
          opprettet: "2025-09-08T15:04:11.376002",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 166665,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "0199296d-0c65-7771-9eda-1eb82401b677",
              "0199296d-0c67-7240-893c-01eff22cd725",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15450",
      navn: "Terskelfaktor for 36 måneder",
      datatype: "desimaltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4670-7b45-84d0-1835440374d6",
          opprettet: "2025-09-08T15:04:11.376098",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 2,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15458",
      navn: "Stønadsuker når kravet til minste arbeidsinntekt ikke er oppfylt",
      datatype: "heltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4670-7b45-84d0-1835440374d7",
          opprettet: "2025-09-08T15:04:11.376161",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 0,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15449",
      navn: "Antall dager som skal regnes med i hver uke",
      datatype: "heltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4670-7b45-84d0-1835440374d8",
          opprettet: "2025-09-08T15:04:11.376219",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 5,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "019523aa-980d-7805-b6ed-d701e7827998",
      navn: "Ingen egenandel",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4670-7b45-84d0-1835440374d9",
          opprettet: "2025-09-08T15:04:11.37629",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-943f-78d9-b874-00a4944c54f0",
      navn: "Antall dagsats for egenandel",
      datatype: "desimaltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4670-7b45-84d0-1835440374da",
          opprettet: "2025-09-08T15:04:11.37635",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 3,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-942e-7cb0-aa59-05ea449d88e1",
      navn: "Mottar pensjon fra en offentlig tjenestepensjonsordning",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4670-7b45-84d0-1835440374db",
          opprettet: "2025-09-08T15:04:11.376402",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-942e-7cb0-aa59-05ea449d88e2",
      navn: "Mottar redusert uførepensjon fra offentlig pensjonsordning",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4670-7b45-84d0-1835440374dc",
          opprettet: "2025-09-08T15:04:11.376449",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-942e-7cb0-aa59-05ea449d88e3",
      navn: "Mottar vartpenger",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4670-7b45-84d0-1835440374dd",
          opprettet: "2025-09-08T15:04:11.376515",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-942e-7cb0-aa59-05ea449d88e4",
      navn: "Mottar ventelønn",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4670-7b45-84d0-1835440374de",
          opprettet: "2025-09-08T15:04:11.376571",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-942e-7cb0-aa59-05ea449d88e5",
      navn: "Mottar etterlønn",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4670-7b45-84d0-1835440374df",
          opprettet: "2025-09-08T15:04:11.37661",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-942e-7cb0-aa59-05ea449d88e6",
      navn: "Mottar garantilott fra Garantikassen for fiskere.",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4670-7b45-84d0-1835440374e0",
          opprettet: "2025-09-08T15:04:11.376658",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9421-766c-9dc6-41fe6c9a1e01",
      navn: "Periode som gis ved verneplikt",
      datatype: "heltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4670-7b45-84d0-1835440374e1",
          opprettet: "2025-09-08T15:04:11.376709",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 26,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199296d-0872-7a76-b9d1-84c534c8f23a"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb9",
      navn: "Har avkortet grunnlag",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4672-724f-83d6-a678ab9a9e61",
          opprettet: "2025-09-08T15:04:11.378438",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "0199296d-466e-7a82-8a04-1248ff2ca5be",
              "0199296d-466e-7a82-8a04-1248ff2ca5bf",
              "0199296d-466e-7a82-8a04-1248ff2ca5c0",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a2f",
      navn: "Samordnet ukessats uten barnetillegg",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4672-724f-83d6-a678ab9a9e62",
          opprettet: "2025-09-08T15:04:11.378575",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 6295,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199296d-1092-70e5-b304-cd81e14ba895",
              "0199296d-466f-71d5-929b-421c2561af31",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a2c",
      navn: "Beløp tilsvarende nedre terskel av G",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4672-724f-83d6-a678ab9a9e63",
          opprettet: "2025-09-08T15:04:11.378694",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 3904.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199296d-0c67-7240-893c-01eff22cd722",
              "0199296d-466f-71d5-929b-421c2561af32",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a2e",
      navn: "Sum av ytelser utenfor folketrygden",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4672-724f-83d6-a678ab9a9e64",
          opprettet: "2025-09-08T15:04:11.378816",
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
              "0199296d-466f-71d5-929b-421c2561af33",
              "0199296d-466f-71d5-929b-421c2561af34",
              "0199296d-466f-71d5-929b-421c2561af35",
              "0199296d-466f-71d5-929b-421c2561af36",
              "0199296d-466f-71d5-929b-421c2561af37",
              "0199296d-466f-71d5-929b-421c2561af38",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a240",
      navn: "Avrundet ukessats med barnetillegg før samordning",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Legacy",
      perioder: [
        {
          id: "0199296d-4672-724f-83d6-a678ab9a9e65",
          opprettet: "2025-09-08T15:04:11.378878",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 6295,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199296d-108e-7491-89ce-0adf3018317c",
              "0199296d-466f-71d5-929b-421c2561af31",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f1544c",
      navn: "Terskel for 12 måneder",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4672-724f-83d6-a678ab9a9e66",
          opprettet: "2025-09-08T15:04:11.378961",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199296d-08b0-7211-9ddc-cc5164bd8e5a",
              "0199296d-466f-71d5-929b-421c2561af39",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f1544d",
      navn: "Terskel for 36 måneder",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4673-7d1d-bf0f-e09d3c57fd1d",
          opprettet: "2025-09-08T15:04:11.37908",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199296d-08b0-7211-9ddc-cc5164bd8e5a",
              "0199296d-4670-7b45-84d0-1835440374d6",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a30",
      navn: "Minste mulige ukessats som som kan brukes",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4674-71f0-90f9-8b875f9b0e15",
          opprettet: "2025-09-08T15:04:11.380816",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 3904.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "0199296d-4672-724f-83d6-a678ab9a9e62",
              "0199296d-4672-724f-83d6-a678ab9a9e63",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a31",
      navn: "Ukessats trukket ned for ytelser utenfor folketrygden",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4674-71f0-90f9-8b875f9b0e16",
          opprettet: "2025-09-08T15:04:11.38098",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 6295,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "0199296d-4672-724f-83d6-a678ab9a9e62",
              "0199296d-4672-724f-83d6-a678ab9a9e64",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15454",
      navn: "Over terskel for 12 måneder",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4675-7aef-a423-b09c34f1030c",
          opprettet: "2025-09-08T15:04:11.381098",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "0199296d-0c65-7771-9eda-1eb82401b676",
              "0199296d-4672-724f-83d6-a678ab9a9e66",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15455",
      navn: "Over terskel for 36 måneder",
      datatype: "boolsk",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4675-7aef-a423-b09c34f1030d",
          opprettet: "2025-09-08T15:04:11.381176",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "0199296d-4670-7b45-84d0-1835440374d5",
              "0199296d-4673-7d1d-bf0f-e09d3c57fd1d",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a32",
      navn: "Samordnet ukessats med ytelser utenfor folketrygden",
      datatype: "penger",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4676-770d-b2f6-64550436a06e",
          opprettet: "2025-09-08T15:04:11.382925",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 6295,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "0199296d-4674-71f0-90f9-8b875f9b0e15",
              "0199296d-4674-71f0-90f9-8b875f9b0e16",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15452",
      navn: "Stønadsuker ved siste 12 måneder",
      datatype: "heltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4677-799c-9b8c-d305462d64f4",
          opprettet: "2025-09-08T15:04:11.38305",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 104,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "0199296d-466f-71d5-929b-421c2561af3a",
              "0199296d-466f-71d5-929b-421c2561af3b",
              "0199296d-4675-7aef-a423-b09c34f1030c",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15453",
      navn: "Stønadsuker ved siste 36 måneder",
      datatype: "heltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4677-799c-9b8c-d305462d64f5",
          opprettet: "2025-09-08T15:04:11.383121",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 52,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "0199296d-466f-71d5-929b-421c2561af3a",
              "0199296d-466f-71d5-929b-421c2561af3b",
              "0199296d-4675-7aef-a423-b09c34f1030d",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a33",
      navn: "Dagsats uten barnetillegg samordnet",
      datatype: "penger",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4678-7d97-98b8-a2fa9cce52ca",
          opprettet: "2025-09-08T15:04:11.384909",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 1259,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "0199296d-466f-71d5-929b-421c2561af31",
              "0199296d-4676-770d-b2f6-64550436a06e",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15456",
      navn: "Antall stønadsuker",
      datatype: "heltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4678-7d97-98b8-a2fa9cce52cb",
          opprettet: "2025-09-08T15:04:11.384995",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 104,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "0199296d-4677-799c-9b8c-d305462d64f4",
              "0199296d-4677-799c-9b8c-d305462d64f5",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a24d",
      navn: "Samordnet dagsats med barnetillegg",
      datatype: "penger",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-467a-7074-86d2-020dbc2664f9",
          opprettet: "2025-09-08T15:04:11.386681",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 1259,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "0199296d-108c-7753-a08b-8bc370b2f45a",
              "0199296d-4678-7d97-98b8-a2fa9cce52ca",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a250",
      navn: "Har samordnet",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-467a-7074-86d2-020dbc2664fa",
          opprettet: "2025-09-08T15:04:11.38678",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErUlik",
            },
            opplysninger: [
              "0199296d-1091-718f-932c-c0dfb8ba85bd",
              "0199296d-4678-7d97-98b8-a2fa9cce52ca",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15459",
      navn: "Antall stønadsuker (stønadsperiode)",
      datatype: "heltall",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-467a-7074-86d2-020dbc2664fb",
          opprettet: "2025-09-08T15:04:11.38686",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 104,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "0199296d-0c66-7bd7-8749-f56aaa64ab93",
              "0199296d-4670-7b45-84d0-1835440374d7",
              "0199296d-4678-7d97-98b8-a2fa9cce52cb",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15457",
      navn: "Antall stønadsdager",
      datatype: "heltall",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-467a-7074-86d2-020dbc2664fc",
          opprettet: "2025-09-08T15:04:11.386926",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 520,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199296d-4670-7b45-84d0-1835440374d8",
              "0199296d-4678-7d97-98b8-a2fa9cce52cb",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a24f",
      navn: "Dagsats med barnetillegg etter samordning og 90 % regel",
      datatype: "penger",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-467c-7f4b-b8d8-8ff3c91833ad",
          opprettet: "2025-09-08T15:04:11.388484",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 1259,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "0199296d-0c78-772f-aad6-cccd04838ea6",
              "0199296d-467a-7074-86d2-020dbc2664f9",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a24e",
      navn: "Ukessats med barnetillegg etter samordning",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Legacy",
      perioder: [
        {
          id: "0199296d-467e-712e-a160-c4881190131f",
          opprettet: "2025-09-08T15:04:11.390098",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 6295,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199296d-466f-71d5-929b-421c2561af31",
              "0199296d-467c-7f4b-b8d8-8ff3c91833ad",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "019523aa-7941-7dd2-8c43-0644d7b43f57",
      navn: "Tre ganger dagsats",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-467e-712e-a160-c48811901320",
          opprettet: "2025-09-08T15:04:11.390416",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 3777,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199296d-4670-7b45-84d0-1835440374da",
              "0199296d-467c-7f4b-b8d8-8ff3c91833ad",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-943f-78d9-b874-00a4944c54ef",
      navn: "Egenandel",
      datatype: "penger",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-4680-7d2b-badc-25ab06776be1",
          opprettet: "2025-09-08T15:04:11.392795",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: 3777,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "0199296a-4d42-7174-b209-15767a261c77",
              "0199296d-4670-7b45-84d0-1835440374d9",
              "0199296d-467e-712e-a160-c48811901320",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-942e-7cb0-aa59-05ea449d88e0",
      navn: "Oppgitt andre ytelser utenfor NAV i søknaden",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-47cc-704a-8ae3-2f8cc3aeacc3",
          opprettet: "2025-09-08T15:04:11.724919",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:04:11.671123",
            meldingId: "8ce2371f-50ec-496f-8f56-104fdd19b051",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a2d",
      navn: "Skal samordnes med ytelser utenfor folketrygden",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-47cf-7f05-813f-04725d6bbbaa",
          opprettet: "2025-09-08T15:04:11.727445",
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
              "0199296d-4670-7b45-84d0-1835440374db",
              "0199296d-4670-7b45-84d0-1835440374dc",
              "0199296d-4670-7b45-84d0-1835440374dd",
              "0199296d-4670-7b45-84d0-1835440374de",
              "0199296d-4670-7b45-84d0-1835440374df",
              "0199296d-4670-7b45-84d0-1835440374e0",
              "0199296d-47cc-704a-8ae3-2f8cc3aeacc3",
            ],
          },
        },
      ],
    },
    {
      opplysningTypeId: "01990a09-0eab-7957-b88f-14484a50e194",
      navn: "Har løpende rett på dagpenger",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199296d-7068-7aaf-af9c-76e4e2171bfa",
          opprettet: "2025-09-08T15:04:22.120507",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-02",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "01956abd-2871-7517-a332-b462c0c31292",
      navn: "Meldeperiode",
      datatype: "periode",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199298c-ec58-7857-b1a8-c4a5d3df3495",
          opprettet: "2025-09-08T15:38:45.46499",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-02",
          gyldigTilOgMed: "2025-06-15",
          verdi: {
            fom: "2025-06-02",
            tom: "2025-06-15",
            datatype: "periode",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
      ],
    },
    {
      opplysningTypeId: "01948ea0-36e8-72cc-aa4f-16bc446ed3bd",
      navn: "Arbeidsdag",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d754",
          opprettet: "2025-09-08T15:38:45.468573",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-02",
          gyldigTilOgMed: "2025-06-02",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d757",
          opprettet: "2025-09-08T15:38:45.468659",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-03",
          gyldigTilOgMed: "2025-06-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d75a",
          opprettet: "2025-09-08T15:38:45.46868",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-04",
          gyldigTilOgMed: "2025-06-04",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d75d",
          opprettet: "2025-09-08T15:38:45.468697",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-05",
          gyldigTilOgMed: "2025-06-05",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d760",
          opprettet: "2025-09-08T15:38:45.468712",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-06",
          gyldigTilOgMed: "2025-06-06",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d763",
          opprettet: "2025-09-08T15:38:45.468726",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-07",
          gyldigTilOgMed: "2025-06-07",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d766",
          opprettet: "2025-09-08T15:38:45.46874",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-08",
          gyldigTilOgMed: "2025-06-08",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d769",
          opprettet: "2025-09-08T15:38:45.468753",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-09",
          gyldigTilOgMed: "2025-06-09",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d76c",
          opprettet: "2025-09-08T15:38:45.468767",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-10",
          gyldigTilOgMed: "2025-06-10",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d76f",
          opprettet: "2025-09-08T15:38:45.46878",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-11",
          gyldigTilOgMed: "2025-06-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d772",
          opprettet: "2025-09-08T15:38:45.468794",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-12",
          gyldigTilOgMed: "2025-06-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d775",
          opprettet: "2025-09-08T15:38:45.468812",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-13",
          gyldigTilOgMed: "2025-06-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d778",
          opprettet: "2025-09-08T15:38:45.468831",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-14",
          gyldigTilOgMed: "2025-06-14",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d77b",
          opprettet: "2025-09-08T15:38:45.468845",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-15",
          gyldigTilOgMed: "2025-06-15",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
      ],
    },
    {
      opplysningTypeId: "01948ea0-e25c-7c47-8429-a05045d80eca",
      navn: "Arbeidstimer på en arbeidsdag",
      datatype: "desimaltall",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d755",
          opprettet: "2025-09-08T15:38:45.468613",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-02",
          gyldigTilOgMed: "2025-06-02",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d758",
          opprettet: "2025-09-08T15:38:45.468667",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-03",
          gyldigTilOgMed: "2025-06-03",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d75b",
          opprettet: "2025-09-08T15:38:45.468685",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-04",
          gyldigTilOgMed: "2025-06-04",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d75e",
          opprettet: "2025-09-08T15:38:45.468701",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-05",
          gyldigTilOgMed: "2025-06-05",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d761",
          opprettet: "2025-09-08T15:38:45.468716",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-06",
          gyldigTilOgMed: "2025-06-06",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d764",
          opprettet: "2025-09-08T15:38:45.468731",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-07",
          gyldigTilOgMed: "2025-06-07",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d767",
          opprettet: "2025-09-08T15:38:45.468744",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-08",
          gyldigTilOgMed: "2025-06-08",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d76a",
          opprettet: "2025-09-08T15:38:45.468757",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-09",
          gyldigTilOgMed: "2025-06-09",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d76d",
          opprettet: "2025-09-08T15:38:45.468771",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-10",
          gyldigTilOgMed: "2025-06-10",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d770",
          opprettet: "2025-09-08T15:38:45.468784",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-11",
          gyldigTilOgMed: "2025-06-11",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d773",
          opprettet: "2025-09-08T15:38:45.468802",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-12",
          gyldigTilOgMed: "2025-06-12",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d776",
          opprettet: "2025-09-08T15:38:45.46882",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-13",
          gyldigTilOgMed: "2025-06-13",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d779",
          opprettet: "2025-09-08T15:38:45.468835",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-14",
          gyldigTilOgMed: "2025-06-14",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d77c",
          opprettet: "2025-09-08T15:38:45.468849",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-15",
          gyldigTilOgMed: "2025-06-15",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
      ],
    },
    {
      opplysningTypeId: "01956ab8-126c-7636-803e-a5d87eda2015",
      navn: "Har meldt seg via meldekort",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d756",
          opprettet: "2025-09-08T15:38:45.468625",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-02",
          gyldigTilOgMed: "2025-06-02",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d759",
          opprettet: "2025-09-08T15:38:45.468672",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-03",
          gyldigTilOgMed: "2025-06-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d75c",
          opprettet: "2025-09-08T15:38:45.46869",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-04",
          gyldigTilOgMed: "2025-06-04",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d75f",
          opprettet: "2025-09-08T15:38:45.468706",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-05",
          gyldigTilOgMed: "2025-06-05",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d762",
          opprettet: "2025-09-08T15:38:45.468721",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-06",
          gyldigTilOgMed: "2025-06-06",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d765",
          opprettet: "2025-09-08T15:38:45.468735",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-07",
          gyldigTilOgMed: "2025-06-07",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d768",
          opprettet: "2025-09-08T15:38:45.468748",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-08",
          gyldigTilOgMed: "2025-06-08",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d76b",
          opprettet: "2025-09-08T15:38:45.468761",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-09",
          gyldigTilOgMed: "2025-06-09",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d76e",
          opprettet: "2025-09-08T15:38:45.468775",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-10",
          gyldigTilOgMed: "2025-06-10",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d771",
          opprettet: "2025-09-08T15:38:45.468788",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-11",
          gyldigTilOgMed: "2025-06-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d774",
          opprettet: "2025-09-08T15:38:45.468807",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-12",
          gyldigTilOgMed: "2025-06-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d777",
          opprettet: "2025-09-08T15:38:45.468824",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-13",
          gyldigTilOgMed: "2025-06-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d77a",
          opprettet: "2025-09-08T15:38:45.468839",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-14",
          gyldigTilOgMed: "2025-06-14",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
        {
          id: "0199298c-ec5c-78bb-8389-2ead1cb1d77d",
          opprettet: "2025-09-08T15:38:45.468853",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-15",
          gyldigTilOgMed: "2025-06-15",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-08T15:38:45.463409",
            meldingId: "1cba30c5-1919-48f7-9fa6-2c1688949245",
          },
        },
      ],
    },
    {
      opplysningTypeId: "01948ea0-ffdc-7964-ab55-52a7e35e1020",
      navn: "Dag som fører til forbruk av dagpengeperiode",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199298c-ecc1-78e2-ae16-22f11d51781d",
          opprettet: "2025-09-08T15:38:45.56928",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-02",
          gyldigTilOgMed: "2025-06-02",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "0199298c-ecc4-79bc-86de-362b7550a5c1",
          opprettet: "2025-09-08T15:38:45.57207",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-03",
          gyldigTilOgMed: "2025-06-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "0199298c-ecc6-71d4-8a2e-4fe65445b74e",
          opprettet: "2025-09-08T15:38:45.574059",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-04",
          gyldigTilOgMed: "2025-06-04",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "0199298c-ecca-7060-a230-a1bd7f4f9ab4",
          opprettet: "2025-09-08T15:38:45.578085",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-05",
          gyldigTilOgMed: "2025-06-05",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "0199298c-eccc-7255-8216-0103f03f13c2",
          opprettet: "2025-09-08T15:38:45.580084",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-06",
          gyldigTilOgMed: "2025-06-06",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "0199298c-ecce-7afc-9dff-81a78105894d",
          opprettet: "2025-09-08T15:38:45.582144",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-07",
          gyldigTilOgMed: "2025-06-07",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "0199298c-eccf-7c9a-b4bd-45f8f0be88fa",
          opprettet: "2025-09-08T15:38:45.583889",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-08",
          gyldigTilOgMed: "2025-06-08",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "0199298c-ecd2-75cb-b618-192fc539c176",
          opprettet: "2025-09-08T15:38:45.586872",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-09",
          gyldigTilOgMed: "2025-06-09",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "0199298c-ecd5-7461-b02d-84f4fbd85f22",
          opprettet: "2025-09-08T15:38:45.589358",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-10",
          gyldigTilOgMed: "2025-06-10",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "0199298c-ecd6-7f3b-a164-fe8ae6ddbfb9",
          opprettet: "2025-09-08T15:38:45.590827",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-11",
          gyldigTilOgMed: "2025-06-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "0199298c-ecd8-76a7-8d5b-acf76eaa6010",
          opprettet: "2025-09-08T15:38:45.592676",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-12",
          gyldigTilOgMed: "2025-06-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "0199298c-ecda-7949-bba4-546c2c01978a",
          opprettet: "2025-09-08T15:38:45.594262",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-13",
          gyldigTilOgMed: "2025-06-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "0199298c-ecdb-70ef-8746-9905ff6abb0a",
          opprettet: "2025-09-08T15:38:45.595085",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-14",
          gyldigTilOgMed: "2025-06-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "0199298c-ecdc-704b-8d95-b2b279ec1122",
          opprettet: "2025-09-08T15:38:45.596114",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-15",
          gyldigTilOgMed: "2025-06-15",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "01957069-d7d5-7f7c-b359-c00686fbf1f7",
      navn: "Penger som skal utbetales",
      datatype: "penger",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199298c-ecc2-7fd1-baf3-c1359a9471c7",
          opprettet: "2025-09-08T15:38:45.570362",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-02",
          gyldigTilOgMed: "2025-06-02",
          verdi: {
            verdi: 882,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-ecc4-79bc-86de-362b7550a5c2",
          opprettet: "2025-09-08T15:38:45.572641",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-03",
          gyldigTilOgMed: "2025-06-03",
          verdi: {
            verdi: 882,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-ecc7-7d26-934c-ffc405ea2eeb",
          opprettet: "2025-09-08T15:38:45.575245",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-04",
          gyldigTilOgMed: "2025-06-04",
          verdi: {
            verdi: 882,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-ecca-7060-a230-a1bd7f4f9ab5",
          opprettet: "2025-09-08T15:38:45.578703",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-05",
          gyldigTilOgMed: "2025-06-05",
          verdi: {
            verdi: 882,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-eccc-7255-8216-0103f03f13c3",
          opprettet: "2025-09-08T15:38:45.580887",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-06",
          gyldigTilOgMed: "2025-06-06",
          verdi: {
            verdi: 882,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-ecce-7afc-9dff-81a78105894e",
          opprettet: "2025-09-08T15:38:45.582722",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-07",
          gyldigTilOgMed: "2025-06-07",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-ecd0-74ab-b714-b8af87eab8e8",
          opprettet: "2025-09-08T15:38:45.584388",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-08",
          gyldigTilOgMed: "2025-06-08",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-ecd3-790a-9585-47b5f8b94e77",
          opprettet: "2025-09-08T15:38:45.587823",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-09",
          gyldigTilOgMed: "2025-06-09",
          verdi: {
            verdi: 882,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-ecd5-7461-b02d-84f4fbd85f23",
          opprettet: "2025-09-08T15:38:45.589789",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-10",
          gyldigTilOgMed: "2025-06-10",
          verdi: {
            verdi: 882,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-ecd7-7b54-a171-2fdec7429415",
          opprettet: "2025-09-08T15:38:45.591412",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-11",
          gyldigTilOgMed: "2025-06-11",
          verdi: {
            verdi: 882,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-ecd9-7e36-9e92-ebce1a20ab6b",
          opprettet: "2025-09-08T15:38:45.593407",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-12",
          gyldigTilOgMed: "2025-06-12",
          verdi: {
            verdi: 882,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-ecda-7949-bba4-546c2c01978b",
          opprettet: "2025-09-08T15:38:45.594557",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-13",
          gyldigTilOgMed: "2025-06-13",
          verdi: {
            verdi: 875,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-ecdb-70ef-8746-9905ff6abb0b",
          opprettet: "2025-09-08T15:38:45.595383",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-14",
          gyldigTilOgMed: "2025-06-14",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-ecdd-7c62-9ff5-0d82bd67a251",
          opprettet: "2025-09-08T15:38:45.597033",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-15",
          gyldigTilOgMed: "2025-06-15",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
    },
    {
      opplysningTypeId: "01973a27-d8b3-7ffd-a81a-a3826963b079",
      navn: "Forbrukt egenandel",
      datatype: "penger",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199298c-ecc3-7628-8f7d-98a2aa02c7f0",
          opprettet: "2025-09-08T15:38:45.571129",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-02",
          gyldigTilOgMed: "2025-06-02",
          verdi: {
            verdi: 377,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-ecc5-7987-a045-3dd6cf5f07d6",
          opprettet: "2025-09-08T15:38:45.573284",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-03",
          gyldigTilOgMed: "2025-06-03",
          verdi: {
            verdi: 377,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-ecc8-777d-8194-9eafa8792068",
          opprettet: "2025-09-08T15:38:45.576669",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-04",
          gyldigTilOgMed: "2025-06-04",
          verdi: {
            verdi: 377,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-eccb-76fc-a753-7a2b02333045",
          opprettet: "2025-09-08T15:38:45.579301",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-05",
          gyldigTilOgMed: "2025-06-05",
          verdi: {
            verdi: 377,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-eccd-74b4-a7b2-5e063c250012",
          opprettet: "2025-09-08T15:38:45.581529",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-06",
          gyldigTilOgMed: "2025-06-06",
          verdi: {
            verdi: 377,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-eccf-7c9a-b4bd-45f8f0be88f9",
          opprettet: "2025-09-08T15:38:45.583289",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-07",
          gyldigTilOgMed: "2025-06-07",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-ecd1-7aaa-ba20-6a1d3fd6e074",
          opprettet: "2025-09-08T15:38:45.585001",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-08",
          gyldigTilOgMed: "2025-06-08",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-ecd4-79e3-a559-74b7fd8f10d6",
          opprettet: "2025-09-08T15:38:45.588475",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-09",
          gyldigTilOgMed: "2025-06-09",
          verdi: {
            verdi: 377,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-ecd6-7f3b-a164-fe8ae6ddbfb8",
          opprettet: "2025-09-08T15:38:45.590134",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-10",
          gyldigTilOgMed: "2025-06-10",
          verdi: {
            verdi: 377,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-ecd8-76a7-8d5b-acf76eaa600f",
          opprettet: "2025-09-08T15:38:45.592038",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-11",
          gyldigTilOgMed: "2025-06-11",
          verdi: {
            verdi: 377,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-ecd9-7e36-9e92-ebce1a20ab6c",
          opprettet: "2025-09-08T15:38:45.593762",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-12",
          gyldigTilOgMed: "2025-06-12",
          verdi: {
            verdi: 377,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-ecda-7949-bba4-546c2c01978c",
          opprettet: "2025-09-08T15:38:45.594798",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-13",
          gyldigTilOgMed: "2025-06-13",
          verdi: {
            verdi: 384,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-ecdb-70ef-8746-9905ff6abb0c",
          opprettet: "2025-09-08T15:38:45.595682",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-14",
          gyldigTilOgMed: "2025-06-14",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "0199298c-ecdd-7c62-9ff5-0d82bd67a252",
          opprettet: "2025-09-08T15:38:45.597591",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-15",
          gyldigTilOgMed: "2025-06-15",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
    },
    {
      opplysningTypeId: "01992934-66e4-7606-bdd3-c6c9dd420ffd",
      navn: "Antall dager som er forbrukt",
      datatype: "heltall",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199298c-ed6e-7aeb-8fc9-86ec603138d1",
          opprettet: "2025-09-08T15:38:45.742239",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-02",
          gyldigTilOgMed: "2025-06-02",
          verdi: {
            verdi: 1,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed6e-7aeb-8fc9-86ec603138d3",
          opprettet: "2025-09-08T15:38:45.742889",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-03",
          gyldigTilOgMed: "2025-06-03",
          verdi: {
            verdi: 2,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed6f-796e-a422-5f7fcc4d8556",
          opprettet: "2025-09-08T15:38:45.74351",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-04",
          gyldigTilOgMed: "2025-06-04",
          verdi: {
            verdi: 3,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed70-707f-a43b-db893a3a916d",
          opprettet: "2025-09-08T15:38:45.744322",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-05",
          gyldigTilOgMed: "2025-06-05",
          verdi: {
            verdi: 4,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed70-707f-a43b-db893a3a916f",
          opprettet: "2025-09-08T15:38:45.74498",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-06",
          gyldigTilOgMed: "2025-06-06",
          verdi: {
            verdi: 5,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed71-70ce-8686-0f509cd5d1d6",
          opprettet: "2025-09-08T15:38:45.745526",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-07",
          gyldigTilOgMed: "2025-06-07",
          verdi: {
            verdi: 5,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed72-72d9-be1f-0cb0580375db",
          opprettet: "2025-09-08T15:38:45.746039",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-08",
          gyldigTilOgMed: "2025-06-08",
          verdi: {
            verdi: 5,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed72-72d9-be1f-0cb0580375dd",
          opprettet: "2025-09-08T15:38:45.746618",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-09",
          gyldigTilOgMed: "2025-06-09",
          verdi: {
            verdi: 6,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed73-75cd-8306-827be6d3439b",
          opprettet: "2025-09-08T15:38:45.747209",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-10",
          gyldigTilOgMed: "2025-06-10",
          verdi: {
            verdi: 7,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed73-75cd-8306-827be6d3439d",
          opprettet: "2025-09-08T15:38:45.747841",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-11",
          gyldigTilOgMed: "2025-06-11",
          verdi: {
            verdi: 8,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed74-797e-92ab-4f5a26623261",
          opprettet: "2025-09-08T15:38:45.748591",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-12",
          gyldigTilOgMed: "2025-06-12",
          verdi: {
            verdi: 9,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed75-703a-89b8-2715fcc95585",
          opprettet: "2025-09-08T15:38:45.749277",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-13",
          gyldigTilOgMed: "2025-06-13",
          verdi: {
            verdi: 10,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed75-703a-89b8-2715fcc95587",
          opprettet: "2025-09-08T15:38:45.749928",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-14",
          gyldigTilOgMed: "2025-06-14",
          verdi: {
            verdi: 10,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed76-7793-84a3-500a1df18ece",
          opprettet: "2025-09-08T15:38:45.750608",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-15",
          gyldigTilOgMed: "2025-06-15",
          verdi: {
            verdi: 10,
            datatype: "heltall",
          },
        },
      ],
    },
    {
      opplysningTypeId: "01992956-e349-76b1-8f68-c9d481df3a32",
      navn: "Antall dager som gjenstår",
      datatype: "heltall",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199298c-ed6e-7aeb-8fc9-86ec603138d2",
          opprettet: "2025-09-08T15:38:45.742577",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-02",
          gyldigTilOgMed: "2025-06-02",
          verdi: {
            verdi: 519,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed6f-796e-a422-5f7fcc4d8555",
          opprettet: "2025-09-08T15:38:45.743206",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-03",
          gyldigTilOgMed: "2025-06-03",
          verdi: {
            verdi: 518,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed6f-796e-a422-5f7fcc4d8557",
          opprettet: "2025-09-08T15:38:45.743781",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-04",
          gyldigTilOgMed: "2025-06-04",
          verdi: {
            verdi: 517,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed70-707f-a43b-db893a3a916e",
          opprettet: "2025-09-08T15:38:45.744708",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-05",
          gyldigTilOgMed: "2025-06-05",
          verdi: {
            verdi: 516,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed71-70ce-8686-0f509cd5d1d5",
          opprettet: "2025-09-08T15:38:45.745263",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-06",
          gyldigTilOgMed: "2025-06-06",
          verdi: {
            verdi: 515,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed71-70ce-8686-0f509cd5d1d7",
          opprettet: "2025-09-08T15:38:45.74577",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-07",
          gyldigTilOgMed: "2025-06-07",
          verdi: {
            verdi: 515,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed72-72d9-be1f-0cb0580375dc",
          opprettet: "2025-09-08T15:38:45.746341",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-08",
          gyldigTilOgMed: "2025-06-08",
          verdi: {
            verdi: 515,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed72-72d9-be1f-0cb0580375de",
          opprettet: "2025-09-08T15:38:45.746798",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-09",
          gyldigTilOgMed: "2025-06-09",
          verdi: {
            verdi: 514,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed73-75cd-8306-827be6d3439c",
          opprettet: "2025-09-08T15:38:45.747536",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-10",
          gyldigTilOgMed: "2025-06-10",
          verdi: {
            verdi: 513,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed74-797e-92ab-4f5a26623260",
          opprettet: "2025-09-08T15:38:45.748198",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-11",
          gyldigTilOgMed: "2025-06-11",
          verdi: {
            verdi: 512,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed74-797e-92ab-4f5a26623262",
          opprettet: "2025-09-08T15:38:45.748924",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-12",
          gyldigTilOgMed: "2025-06-12",
          verdi: {
            verdi: 511,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed75-703a-89b8-2715fcc95586",
          opprettet: "2025-09-08T15:38:45.749594",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-13",
          gyldigTilOgMed: "2025-06-13",
          verdi: {
            verdi: 510,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed76-7793-84a3-500a1df18ecd",
          opprettet: "2025-09-08T15:38:45.750278",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-14",
          gyldigTilOgMed: "2025-06-14",
          verdi: {
            verdi: 510,
            datatype: "heltall",
          },
        },
        {
          id: "0199298c-ed76-7793-84a3-500a1df18ecf",
          opprettet: "2025-09-08T15:38:45.750928",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-15",
          gyldigTilOgMed: "2025-06-15",
          verdi: {
            verdi: 510,
            datatype: "heltall",
          },
        },
      ],
    },
  ],
  rettighetsperioder: [
    {
      fraOgMed: "2025-06-02",
      harRett: true,
      opprinnelse: "Arvet",
    },
  ],
};
