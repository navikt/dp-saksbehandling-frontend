import type { components } from "../../../openapi/behandling-typer";

export const behandling019b2cdfd7f67814ba92bbad8be1bd07: components["schemas"]["Behandling"] = {
  behandlingId: "019b2cdf-d7f6-7814-ba92-bbad8be1bd07",
  behandletHendelse: {
    datatype: "String",
    id: "019b2ccc-b893-7de9-ac01-599c1ad39ba7",
    type: "Meldekort",
    skjedde: "2025-12-17",
  },
  behandlingskjedeId: "019b2cbf-a124-77ab-8944-496c1856f599",
  basertPå: "019b2ccd-878b-754a-b941-507d4da5ab71",
  automatisk: false,
  ident: "24838299217",
  rettighetsperioder: [
    {
      fraOgMed: "2025-09-29",
      harRett: true,
      opprinnelse: "Arvet",
    },
  ],
  opprettet: "2025-12-17T16:13:46.042625",
  sistEndret: "2025-12-17T16:14:47.651204",
  kreverTotrinnskontroll: false,
  tilstand: "Ferdig",
  avklaringer: [
    {
      id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd05",
      kode: "MeldekortBehandling",
      tittel: "Beregning av meldekort",
      beskrivelse: "Behandlingen er opprettet av meldekort og kan ikke automatisk behandles",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: false,
      begrunnelse: "dds",
      sistEndret: "2025-12-17T16:14:35.997035",
      avklartAv: {
        ident: "Z994714",
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
      opplysninger: [],
    },
    {
      id: "628695927",
      navn: "Manglende og uriktige opplysninger",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "21",
        paragraf: "7",
        tittel: "§ 21-7. Uriktige opplysninger m.m. - følger for ytelser fra trygden",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§21-7",
      },
      type: "Vilkår",
      relevantForResultat: false,
      opplysningTypeId: "019bc5f8-fdf3-7240-afaf-52c0486eddc5",
      opplysninger: [],
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
      id: "-354266510",
      navn: "Søknad",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "22",
        paragraf: "13",
        tittel: "§ 22-13. Frister for framsetting av krav, virkningstidspunkt og etterbetaling",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§22-13",
      },
      type: "Vilkår",
      relevantForResultat: false,
      opplysningTypeId: "019c092a-7759-700a-9f7d-f4415b91e8db",
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
      relevantForResultat: true,
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
      relevantForResultat: true,
      opplysninger: [
        "01956abd-2871-7517-a332-b462c0c31292",
        "01948ea0-36e8-72cc-aa4f-16bc446ed3bd",
        "01948ea0-e25c-7c47-8429-a05045d80eca",
        "01948ea0-ffdc-7964-ab55-52a7e35e1020",
        "01956ab8-126c-7636-803e-a5d87eda2015",
        "01973a27-d8b3-7ffd-a81a-a3826963b079",
        "01957069-d7d5-7f7c-b359-c00686fbf1f7",
        "01994cfd-9a27-762e-81fa-61f550467c95",
        "01992934-66e4-7606-bdd3-c6c9dd420ffd",
        "01992956-e349-76b1-8f68-c9d481df3a32",
        "01997b70-a12c-7622-bff8-82a20687e640",
        "01997b70-6e6e-702a-a296-18ae5fb9621d",
        "019a81bf-50e1-7f1d-b23b-f30265b16042",
        "019a9b47-2442-7533-bc71-a71a4600c49a",
        "019ae986-43bb-7529-af23-9b3d309501eb",
        "019ae986-81bf-7b29-9458-446e6dbaedae",
        "019ae986-a128-72f0-9868-032bc8a57b21",
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
      relevantForResultat: true,
      opplysninger: [
        "0194881f-943f-78d9-b874-00a4944c54f0",
        "019523aa-7941-7dd2-8c43-0644d7b43f57",
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
      relevantForResultat: true,
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
      opplysninger: [],
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
          id: "019b2cbf-a124-77ab-8944-496c1856f598",
          opprettet: "2025-12-17T15:38:34.788829",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 15678466,
            datatype: "heltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:38:34.788823",
            meldingId: "0ebde3b6-0019-4047-946f-ca29a65eb1da",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "01958ef2-e237-77c4-89e1-de91256e2e4a",
      navn: "hendelseType",
      datatype: "tekst",
      perioder: [
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd03",
          opprettet: "2025-12-17T16:13:45.973999",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-12-17",
          gyldigTilOgMed: "2025-12-17",
          verdi: {
            verdi: "BeregnMeldekortHendelse",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973995",
            meldingId: "e232542f-0700-4a69-bc1f-8581148966f1",
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
          id: "019b2cbf-a126-78d4-ad09-f7056888b125",
          opprettet: "2025-12-17T15:38:34.790249",
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
          id: "019b2cbf-a248-70c6-a0ed-983cb7301aaf",
          opprettet: "2025-12-17T15:38:35.080742",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "1982-03-24",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:38:35.040184",
            meldingId: "484ac6ec-c42b-496b-85b9-c70635ae4ad4",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-940b-76ff-acf5-ba7bcb367235",
      navn: "Dato søker når maks alder",
      datatype: "dato",
      perioder: [
        {
          id: "019b2cbf-a249-7a0f-9333-681a15fae31f",
          opprettet: "2025-12-17T15:38:35.081283",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2049-03-24",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "LeggTilÅr",
            },
            opplysninger: [
              "019b2cbf-a126-78d4-ad09-f7056888b125",
              "019b2cbf-a248-70c6-a0ed-983cb7301aaf",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-940b-76ff-acf5-ba7bcb367236",
      navn: "Siste mulige dag bruker kan oppfylle alderskrav",
      datatype: "dato",
      perioder: [
        {
          id: "019b2cbf-a249-7a0f-9333-681a15fae322",
          opprettet: "2025-12-17T15:38:35.081357",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2049-03-31",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteDagIMåned",
            },
            opplysninger: ["019b2cbf-a249-7a0f-9333-681a15fae31f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-3959-7967-a90e-8672e3600899",
          opprettet: "2025-12-17T15:50:09.113396",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: "e834ef80-00b3-46d8-998b-686054309444",
            datatype: "tekst",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-12-17T15:50:09.060263",
            ident: "Z994714",
            begrunnelse: {
              verdi: "DD",
              sistEndret: "2025-12-17T15:50:09.060241",
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
      opplysningTypeId: "0194881f-91d1-7df2-ba1d-4533f37fcc73",
      navn: "Søknadsdato",
      datatype: "dato",
      perioder: [
        {
          id: "019b2cca-3a31-770d-b97c-18c08b260c6e",
          opprettet: "2025-12-17T15:50:09.329131",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: "2025-12-17",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:09.29192",
            meldingId: "953ddc7b-4779-4e4a-b2a0-dca2b7d27504",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019b2cca-3959-7967-a90e-8672e3600899"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-3a31-770d-b97c-18c08b260c6f",
          opprettet: "2025-12-17T15:50:09.329159",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: "2025-09-29",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:09.292077",
            meldingId: "953ddc7b-4779-4e4a-b2a0-dca2b7d27504",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019b2cca-3959-7967-a90e-8672e3600899"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-3a31-770d-b97c-18c08b260c71",
          opprettet: "2025-12-17T15:50:09.329651",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: "2025-12-17",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: [
              "019b2cca-3a31-770d-b97c-18c08b260c6e",
              "019b2cca-3a31-770d-b97c-18c08b260c6f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-3a32-7751-af29-d77a733cd9a2",
          opprettet: "2025-12-17T15:50:09.330301",
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
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a769",
      navn: "Minimum vanlig arbeidstid",
      datatype: "desimaltall",
      perioder: [
        {
          id: "019b2cca-3a33-79c6-8ecf-5b9997cc33e9",
          opprettet: "2025-12-17T15:50:09.331365",
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
      opplysningTypeId: "0194881f-9441-7d1b-a06a-6727543a141e",
      navn: "Kan jobbe heltid og deltid",
      datatype: "boolsk",
      perioder: [
        {
          id: "019b2cca-3b73-758b-968d-557a5b90b074",
          opprettet: "2025-12-17T15:50:09.651279",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:09.610398",
            meldingId: "6d35c3d7-a31a-47a2-acfa-d69aa6fd7b80",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019b2cca-3959-7967-a90e-8672e3600899"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-3b73-758b-968d-557a5b90b075",
          opprettet: "2025-12-17T15:50:09.651346",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:09.610636",
            meldingId: "6d35c3d7-a31a-47a2-acfa-d69aa6fd7b80",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019b2cca-3959-7967-a90e-8672e3600899"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-3b73-758b-968d-557a5b90b076",
          opprettet: "2025-12-17T15:50:09.651381",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:09.610732",
            meldingId: "6d35c3d7-a31a-47a2-acfa-d69aa6fd7b80",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019b2cca-3959-7967-a90e-8672e3600899"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-3b73-758b-968d-557a5b90b077",
          opprettet: "2025-12-17T15:50:09.651438",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:09.610797",
            meldingId: "6d35c3d7-a31a-47a2-acfa-d69aa6fd7b80",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019b2cca-3959-7967-a90e-8672e3600899"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-3b73-758b-968d-557a5b90b078",
          opprettet: "2025-12-17T15:50:09.651467",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:09.61086",
            meldingId: "6d35c3d7-a31a-47a2-acfa-d69aa6fd7b80",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019b2cca-3959-7967-a90e-8672e3600899"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-3b73-758b-968d-557a5b90b079",
          opprettet: "2025-12-17T15:50:09.651492",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:09.610925",
            meldingId: "6d35c3d7-a31a-47a2-acfa-d69aa6fd7b80",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019b2cca-3959-7967-a90e-8672e3600899"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-3b73-758b-968d-557a5b90b07a",
          opprettet: "2025-12-17T15:50:09.651548",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:09.610995",
            meldingId: "6d35c3d7-a31a-47a2-acfa-d69aa6fd7b80",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019b2cca-3959-7967-a90e-8672e3600899"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-3b73-758b-968d-557a5b90b07b",
          opprettet: "2025-12-17T15:50:09.651575",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:09.611061",
            meldingId: "6d35c3d7-a31a-47a2-acfa-d69aa6fd7b80",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019b2cca-3959-7967-a90e-8672e3600899"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-3b73-758b-968d-557a5b90b07d",
          opprettet: "2025-12-17T15:50:09.651626",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:09.612103",
            meldingId: "6d35c3d7-a31a-47a2-acfa-d69aa6fd7b80",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019b2cca-3959-7967-a90e-8672e3600899"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-3b73-758b-968d-557a5b90b07e",
          opprettet: "2025-12-17T15:50:09.651652",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:09.612192",
            meldingId: "6d35c3d7-a31a-47a2-acfa-d69aa6fd7b80",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019b2cca-3959-7967-a90e-8672e3600899"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9441-7d1b-a06a-6727543a141f",
      navn: "Det er godkjent at bruker kun søker deltidsarbeid",
      datatype: "boolsk",
      perioder: [
        {
          id: "019b2cca-3b74-7d9a-a0d5-35afb36979cd",
          opprettet: "2025-12-17T15:50:09.652608",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019b2cca-3b73-758b-968d-557a5b90b074"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-3b74-7d9a-a0d5-35afb36979ce",
          opprettet: "2025-12-17T15:50:09.652624",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019b2cca-3b73-758b-968d-557a5b90b075"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-3b74-7d9a-a0d5-35afb36979cf",
          opprettet: "2025-12-17T15:50:09.652641",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019b2cca-3b73-758b-968d-557a5b90b076"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-3b74-7d9a-a0d5-35afb36979d0",
          opprettet: "2025-12-17T15:50:09.652684",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: ["019b2cca-3b73-758b-968d-557a5b90b077"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-3b74-7d9a-a0d5-35afb36979d1",
          opprettet: "2025-12-17T15:50:09.652708",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019b2cca-3a33-79c6-8ecf-5b9997cc33e9",
              "019b2cca-3b73-758b-968d-557a5b90b078",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9444-7a73-a458-0af81c034d89",
      navn: "Har rett til ordinære dagpenger uten arbeidsforhold",
      datatype: "boolsk",
      perioder: [
        {
          id: "019b2cca-3b74-7d9a-a0d5-35afb36979d3",
          opprettet: "2025-12-17T15:50:09.652743",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: [
              "019b2cca-3b73-758b-968d-557a5b90b079",
              "019b2cca-3b73-758b-968d-557a5b90b07a",
              "019b2cca-3b73-758b-968d-557a5b90b07b",
              "019b2cca-3b73-758b-968d-557a5b90b07d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-3b74-7d9a-a0d5-35afb36979d4",
          opprettet: "2025-12-17T15:50:09.652757",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019b2cca-3b73-758b-968d-557a5b90b07e"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "01948d43-e218-76f1-b29b-7e604241d98a",
      navn: "Oppfyller kravet til verneplikt",
      datatype: "boolsk",
      perioder: [
        {
          id: "019b2cca-3b74-7d9a-a0d5-35afb36979d5",
          opprettet: "2025-12-17T15:50:09.65277",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019b2cca-3b73-758b-968d-557a5b90b07e"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bd8",
      navn: "Oppfyller kravet til heltid- og deltidsarbeid",
      datatype: "boolsk",
      perioder: [
        {
          id: "019b2cca-3b75-7e36-aa02-49a1cef5986f",
          opprettet: "2025-12-17T15:50:09.653336",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019b2cca-3b73-758b-968d-557a5b90b074",
              "019b2cca-3b74-7d9a-a0d5-35afb36979cd",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-3b75-7e36-aa02-49a1cef59870",
          opprettet: "2025-12-17T15:50:09.653353",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019b2cca-3b73-758b-968d-557a5b90b075",
              "019b2cca-3b74-7d9a-a0d5-35afb36979ce",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-3b75-7e36-aa02-49a1cef59871",
          opprettet: "2025-12-17T15:50:09.653369",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019b2cca-3b73-758b-968d-557a5b90b076",
              "019b2cca-3b74-7d9a-a0d5-35afb36979cf",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-3b75-7e36-aa02-49a1cef59872",
          opprettet: "2025-12-17T15:50:09.653385",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019b2cca-3b73-758b-968d-557a5b90b079",
              "019b2cca-3b74-7d9a-a0d5-35afb36979d3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-3b75-7e36-aa02-49a1cef59876",
          opprettet: "2025-12-17T15:50:09.653892",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019b2cca-3b74-7d9a-a0d5-35afb36979d0",
              "019b2cca-3b74-7d9a-a0d5-35afb36979d1",
              "019b2cca-3b75-7e36-aa02-49a1cef5986f",
              "019b2cca-3b75-7e36-aa02-49a1cef59870",
              "019b2cca-3b75-7e36-aa02-49a1cef59871",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-3b75-7e36-aa02-49a1cef59877",
          opprettet: "2025-12-17T15:50:09.653917",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019b2cca-3b73-758b-968d-557a5b90b07a",
              "019b2cca-3b73-758b-968d-557a5b90b07b",
              "019b2cca-3b73-758b-968d-557a5b90b07d",
              "019b2cca-3b75-7e36-aa02-49a1cef59872",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: true,
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
          id: "019b2cca-afb9-7d75-9a1f-1b5ab9c2c0e3",
          opprettet: "2025-12-17T15:50:39.417063",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
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
      opplysningTypeId: "0194881f-91d1-7df2-ba1d-4533f37fcc76",
      navn: "Prøvingsdato",
      datatype: "dato",
      perioder: [
        {
          id: "019b2cca-70d0-71af-aec1-208fa2af2184",
          opprettet: "2025-12-17T15:50:23.312034",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: "2025-09-29",
            datatype: "dato",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-12-17T15:50:23.265516",
            ident: "Z994714",
            begrunnelse: {
              verdi: "dsasd",
              sistEndret: "2025-12-17T15:50:23.265481",
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
      opplysningTypeId: "0194881f-940b-76ff-acf5-ba7bcb367237",
      navn: "Oppfyller kravet til alder",
      datatype: "boolsk",
      perioder: [
        {
          id: "019b2cca-70e1-701b-80d9-a75ea463c410",
          opprettet: "2025-12-17T15:50:23.329449",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "FørEllerLik",
            },
            opplysninger: [
              "019b2cbf-a249-7a0f-9333-681a15fae322",
              "019b2cca-70d0-71af-aec1-208fa2af2184",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-70e2-7440-a08a-0dc5d9950c3d",
          opprettet: "2025-12-17T15:50:23.330055",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: "2025-09-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-70e2-7440-a08a-0dc5d9950c3e",
          opprettet: "2025-12-17T15:50:23.330107",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 36,
            enhet: "måneder",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-70e2-7440-a08a-0dc5d9950c3f",
          opprettet: "2025-12-17T15:50:23.330235",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-70e2-7440-a08a-0dc5d9950c40",
          opprettet: "2025-12-17T15:50:23.330281",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 1.5,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-70e2-7440-a08a-0dc5d9950c41",
          opprettet: "2025-12-17T15:50:23.330313",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 3,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9414-7823-8d29-0e25b7feb7cf",
      navn: "Arbeidsgivers rapporteringsfrist",
      datatype: "dato",
      perioder: [
        {
          id: "019b2cca-70e3-7176-84ed-d3ba6c26ab74",
          opprettet: "2025-12-17T15:50:23.33118",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: "2025-09-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "FørsteArbeidsdag",
            },
            opplysninger: ["019b2cca-70e2-7440-a08a-0dc5d9950c3d"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-70e3-7176-84ed-d3ba6c26ab75",
          opprettet: "2025-12-17T15:50:23.331306",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 195240,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019b2cca-70e2-7440-a08a-0dc5d9950c3f",
              "019b2cca-70e2-7440-a08a-0dc5d9950c40",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-70e3-7176-84ed-d3ba6c26ab76",
          opprettet: "2025-12-17T15:50:23.331369",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019b2cca-70e2-7440-a08a-0dc5d9950c3f",
              "019b2cca-70e2-7440-a08a-0dc5d9950c41",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9414-7823-8d29-0e25b7feb7d0",
      navn: "Siste avsluttende kalendermåned",
      datatype: "dato",
      perioder: [
        {
          id: "019b2cca-70e3-7176-84ed-d3ba6c26ab78",
          opprettet: "2025-12-17T15:50:23.331951",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: "2025-08-31",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteavsluttendeKalenderMåned",
            },
            opplysninger: [
              "019b2cca-70d0-71af-aec1-208fa2af2184",
              "019b2cca-70e3-7176-84ed-d3ba6c26ab74",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-70e4-7e4b-8c80-5869f6561c58",
          opprettet: "2025-12-17T15:50:23.332447",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: "2022-09-01",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "TrekkFraMåned",
            },
            opplysninger: [
              "019b2cca-70e2-7440-a08a-0dc5d9950c3e",
              "019b2cca-70e3-7176-84ed-d3ba6c26ab78",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04244",
      navn: "Inntektsopplysninger",
      datatype: "inntekt",
      perioder: [
        {
          id: "019b2cca-7325-779a-b32a-3fb10d12eb97",
          opprettet: "2025-12-17T15:50:23.909105",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: "01KCPCMWPKB6F3KTN7RFRJ1GDC",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:23.868474",
            meldingId: "f934d936-7fd6-47f6-9355-be85160c5bf0",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: [
              "019b2cca-70d0-71af-aec1-208fa2af2184",
              "019b2cca-70e3-7176-84ed-d3ba6c26ab78",
              "019b2cca-70e4-7e4b-8c80-5869f6561c58",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-7325-779a-b32a-3fb10d12eb99",
          opprettet: "2025-12-17T15:50:23.909887",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: "01KCPCMWPKB6F3KTN7RFRJ1GDC",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["019b2cca-7325-779a-b32a-3fb10d12eb97"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-7326-7a8f-817f-4c219b940719",
          opprettet: "2025-12-17T15:50:23.910448",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 555550,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019b2cca-7325-779a-b32a-3fb10d12eb99"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-7326-7a8f-817f-4c219b94071a",
          opprettet: "2025-12-17T15:50:23.910631",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 555550,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019b2cca-7325-779a-b32a-3fb10d12eb99"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-7326-7a8f-817f-4c219b94071c",
          opprettet: "2025-12-17T15:50:23.910885",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019b2cca-70e3-7176-84ed-d3ba6c26ab75",
              "019b2cca-7326-7a8f-817f-4c219b940719",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-7326-7a8f-817f-4c219b94071d",
          opprettet: "2025-12-17T15:50:23.910906",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019b2cca-70e3-7176-84ed-d3ba6c26ab76",
              "019b2cca-7326-7a8f-817f-4c219b94071a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-7327-73b9-86bb-a4ed2bfa53fe",
          opprettet: "2025-12-17T15:50:23.911108",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019b2cca-7326-7a8f-817f-4c219b94071c",
              "019b2cca-7326-7a8f-817f-4c219b94071d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-7327-73b9-86bb-a4ed2bfa5400",
          opprettet: "2025-12-17T15:50:23.911472",
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
          id: "019b2cca-7327-73b9-86bb-a4ed2bfa5401",
          opprettet: "2025-12-17T15:50:23.911582",
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
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d4",
      navn: "Sykepenger dagsats",
      datatype: "penger",
      perioder: [
        {
          id: "019b2cca-7327-73b9-86bb-a4ed2bfa5402",
          opprettet: "2025-12-17T15:50:23.911604",
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
          id: "019b2cca-7327-73b9-86bb-a4ed2bfa5403",
          opprettet: "2025-12-17T15:50:23.911627",
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
          id: "019b2cca-7327-73b9-86bb-a4ed2bfa5404",
          opprettet: "2025-12-17T15:50:23.911651",
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
          id: "019b2cca-7327-73b9-86bb-a4ed2bfa5405",
          opprettet: "2025-12-17T15:50:23.91167",
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
          id: "019b2cca-7327-73b9-86bb-a4ed2bfa5406",
          opprettet: "2025-12-17T15:50:23.911687",
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
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d9",
      navn: "Foreldrepenger dagsats",
      datatype: "penger",
      perioder: [
        {
          id: "019b2cca-7327-73b9-86bb-a4ed2bfa5407",
          opprettet: "2025-12-17T15:50:23.91171",
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
          id: "019b2cca-7327-73b9-86bb-a4ed2bfa5408",
          opprettet: "2025-12-17T15:50:23.911735",
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
          id: "019b2cca-7327-73b9-86bb-a4ed2bfa5409",
          opprettet: "2025-12-17T15:50:23.91176",
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
          id: "019b2cca-7327-73b9-86bb-a4ed2bfa540a",
          opprettet: "2025-12-17T15:50:23.911783",
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
          id: "019b2cca-7327-73b9-86bb-a4ed2bfa540b",
          opprettet: "2025-12-17T15:50:23.911804",
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
      opplysningTypeId: "019522d6-846d-7173-a892-67f10016d8d2",
      navn: "Ordinært krav til prosentvis tap av arbeidstid",
      datatype: "desimaltall",
      perioder: [
        {
          id: "019b2cca-7327-73b9-86bb-a4ed2bfa540c",
          opprettet: "2025-12-17T15:50:23.911848",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 50,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-7327-73b9-86bb-a4ed2bfa540d",
          opprettet: "2025-12-17T15:50:23.911875",
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
          id: "019b2cca-7327-73b9-86bb-a4ed2bfa540e",
          opprettet: "2025-12-17T15:50:23.911902",
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
          id: "019b2cca-7327-73b9-86bb-a4ed2bfa540f",
          opprettet: "2025-12-17T15:50:23.911931",
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
          id: "019b2cca-7327-73b9-86bb-a4ed2bfa5410",
          opprettet: "2025-12-17T15:50:23.911972",
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
          id: "019b2cca-7328-70a1-a3e3-d8043aa5b173",
          opprettet: "2025-12-17T15:50:23.912",
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
          id: "019b2cca-7328-70a1-a3e3-d8043aa5b174",
          opprettet: "2025-12-17T15:50:23.912031",
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
          id: "019b2cca-7328-70a1-a3e3-d8043aa5b175",
          opprettet: "2025-12-17T15:50:23.91206",
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
          id: "019b2cca-7328-70a1-a3e3-d8043aa5b176",
          opprettet: "2025-12-17T15:50:23.912087",
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
          id: "019b2cca-7328-70a1-a3e3-d8043aa5b177",
          opprettet: "2025-12-17T15:50:23.91213",
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
          id: "019b2cca-7328-70a1-a3e3-d8043aa5b178",
          opprettet: "2025-12-17T15:50:23.912161",
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
          id: "019b2cca-7328-70a1-a3e3-d8043aa5b179",
          opprettet: "2025-12-17T15:50:23.912191",
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
          id: "019b2cca-7328-70a1-a3e3-d8043aa5b17b",
          opprettet: "2025-12-17T15:50:23.912689",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019b2cca-7327-73b9-86bb-a4ed2bfa5401"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-7328-70a1-a3e3-d8043aa5b17c",
          opprettet: "2025-12-17T15:50:23.912737",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019b2cca-7327-73b9-86bb-a4ed2bfa5406"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-7329-74a5-8891-c35f76f4b0e9",
          opprettet: "2025-12-17T15:50:23.913037",
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
              "019b2cca-7327-73b9-86bb-a4ed2bfa5409",
              "019b2cca-7327-73b9-86bb-a4ed2bfa540a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-7329-74a5-8891-c35f76f4b0ea",
          opprettet: "2025-12-17T15:50:23.913133",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
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
              "019b2cca-3b73-758b-968d-557a5b90b07d",
              "019b2cca-7327-73b9-86bb-a4ed2bfa540c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-7329-74a5-8891-c35f76f4b0eb",
          opprettet: "2025-12-17T15:50:23.91319",
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
              "019b2cca-7327-73b9-86bb-a4ed2bfa540d",
              "019b2cca-7327-73b9-86bb-a4ed2bfa540e",
              "019b2cca-7327-73b9-86bb-a4ed2bfa540f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-7329-74a5-8891-c35f76f4b0ec",
          opprettet: "2025-12-17T15:50:23.913237",
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
              "019b2cca-7328-70a1-a3e3-d8043aa5b173",
              "019b2cca-7328-70a1-a3e3-d8043aa5b174",
              "019b2cca-7328-70a1-a3e3-d8043aa5b175",
              "019b2cca-7328-70a1-a3e3-d8043aa5b176",
              "019b2cca-7328-70a1-a3e3-d8043aa5b177",
              "019b2cca-7328-70a1-a3e3-d8043aa5b178",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-7329-74a5-8891-c35f76f4b0ed",
          opprettet: "2025-12-17T15:50:23.913291",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: ["019b2cca-7328-70a1-a3e3-d8043aa5b179"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0196afc0-6807-7fa3-83e4-cf7f621f3a7e",
      navn: "Sum hvis Uføre ikke skal samordnes",
      datatype: "penger",
      perioder: [
        {
          id: "019b2cca-7329-74a5-8891-c35f76f4b0ef",
          opprettet: "2025-12-17T15:50:23.913921",
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
      opplysningTypeId: "0196afbf-e32d-775a-ad10-f476e26dcb6f",
      navn: "Uførebeløp som skal samordnes",
      datatype: "penger",
      perioder: [
        {
          id: "019b2cca-732a-714b-b715-d05fb3810adf",
          opprettet: "2025-12-17T15:50:23.91436",
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
              "019b2cca-7328-70a1-a3e3-d8043aa5b17c",
              "019b2cca-7329-74a5-8891-c35f76f4b0ef",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-732a-714b-b715-d05fb3810ae1",
          opprettet: "2025-12-17T15:50:23.914944",
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
              "019b2cca-7327-73b9-86bb-a4ed2bfa5402",
              "019b2cca-7327-73b9-86bb-a4ed2bfa5403",
              "019b2cca-7327-73b9-86bb-a4ed2bfa5404",
              "019b2cca-7327-73b9-86bb-a4ed2bfa5405",
              "019b2cca-7327-73b9-86bb-a4ed2bfa5407",
              "019b2cca-7327-73b9-86bb-a4ed2bfa5408",
              "019b2cca-732a-714b-b715-d05fb3810adf",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-75cb-782a-b4bc-62059b118a82",
          opprettet: "2025-12-17T15:50:24.587941",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:24.54776",
            meldingId: "c3691325-3e2f-4d5c-8239-c9810c6ff7c3",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019b2cca-3959-7967-a90e-8672e3600899"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a75e",
      navn: "Har krav på lønn fra arbeidsgiver",
      datatype: "boolsk",
      perioder: [
        {
          id: "019b2cca-75cc-76bc-85c9-4a9accd5a421",
          opprettet: "2025-12-17T15:50:24.588012",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:24.547814",
            meldingId: "c3691325-3e2f-4d5c-8239-c9810c6ff7c3",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019b2cca-3959-7967-a90e-8672e3600899"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b522",
      navn: "Brukeren er under utdanning eller opplæring",
      datatype: "boolsk",
      perioder: [
        {
          id: "019b2cca-75cc-76bc-85c9-4a9accd5a422",
          opprettet: "2025-12-17T15:50:24.588096",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:24.547859",
            meldingId: "c3691325-3e2f-4d5c-8239-c9810c6ff7c3",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019b2cca-3959-7967-a90e-8672e3600899"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-75cc-76bc-85c9-4a9accd5a423",
          opprettet: "2025-12-17T15:50:24.588161",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:24.547908",
            meldingId: "c3691325-3e2f-4d5c-8239-c9810c6ff7c3",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-75cc-76bc-85c9-4a9accd5a424",
          opprettet: "2025-12-17T15:50:24.588208",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:24.547941",
            meldingId: "c3691325-3e2f-4d5c-8239-c9810c6ff7c3",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-75cc-76bc-85c9-4a9accd5a425",
          opprettet: "2025-12-17T15:50:24.588267",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:24.547969",
            meldingId: "c3691325-3e2f-4d5c-8239-c9810c6ff7c3",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-75cc-76bc-85c9-4a9accd5a426",
          opprettet: "2025-12-17T15:50:24.58832",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:24.547999",
            meldingId: "c3691325-3e2f-4d5c-8239-c9810c6ff7c3",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-75cc-76bc-85c9-4a9accd5a427",
          opprettet: "2025-12-17T15:50:24.588378",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:24.548027",
            meldingId: "c3691325-3e2f-4d5c-8239-c9810c6ff7c3",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-75cc-76bc-85c9-4a9accd5a428",
          opprettet: "2025-12-17T15:50:24.588418",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:24.54813",
            meldingId: "c3691325-3e2f-4d5c-8239-c9810c6ff7c3",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-75cd-7972-8c07-ad467d6c8404",
          opprettet: "2025-12-17T15:50:24.589406",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019b2cca-75cb-782a-b4bc-62059b118a82"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9434-79e8-a64d-1a23cc5d86ea",
      navn: "Medlem har reduserte ytelser fra folketrygden (Samordning)",
      datatype: "boolsk",
      perioder: [
        {
          id: "019b2cca-75cd-7972-8c07-ad467d6c8405",
          opprettet: "2025-12-17T15:50:24.589512",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019b2cca-7328-70a1-a3e3-d8043aa5b17c",
              "019b2cca-75cc-76bc-85c9-4a9accd5a423",
              "019b2cca-75cc-76bc-85c9-4a9accd5a424",
              "019b2cca-75cc-76bc-85c9-4a9accd5a425",
              "019b2cca-75cc-76bc-85c9-4a9accd5a426",
              "019b2cca-75cc-76bc-85c9-4a9accd5a427",
              "019b2cca-75cc-76bc-85c9-4a9accd5a428",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-75cd-7972-8c07-ad467d6c8406",
          opprettet: "2025-12-17T15:50:24.589562",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: ["019b2cca-75cc-76bc-85c9-4a9accd5a421"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-75cd-7972-8c07-ad467d6c8407",
          opprettet: "2025-12-17T15:50:24.589615",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019b2cca-75cc-76bc-85c9-4a9accd5a422"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-75cd-7972-8c07-ad467d6c8408",
          opprettet: "2025-12-17T15:50:24.589661",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErUsann",
            },
            opplysninger: ["019b2cca-75cc-76bc-85c9-4a9accd5a422"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-75ce-7a10-843b-2cbbcbbe0da1",
          opprettet: "2025-12-17T15:50:24.590309",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019b2cca-75cd-7972-8c07-ad467d6c8404"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b526",
      navn: "Oppfyller kravet på unntak for utdanning eller opplæring",
      datatype: "boolsk",
      perioder: [
        {
          id: "019b2cca-75ce-7a10-843b-2cbbcbbe0da2",
          opprettet: "2025-12-17T15:50:24.590373",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019b2cca-7329-74a5-8891-c35f76f4b0ec",
              "019b2cca-75cd-7972-8c07-ad467d6c8407",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-75ce-7a10-843b-2cbbcbbe0da4",
          opprettet: "2025-12-17T15:50:24.590985",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019b2cca-75cd-7972-8c07-ad467d6c8404",
              "019b2cca-75ce-7a10-843b-2cbbcbbe0da1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-75cf-7d15-84a1-4c787ece1812",
          opprettet: "2025-12-17T15:50:24.591027",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019b2cca-75cd-7972-8c07-ad467d6c8408",
              "019b2cca-75ce-7a10-843b-2cbbcbbe0da2",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-75cf-7d15-84a1-4c787ece1814",
          opprettet: "2025-12-17T15:50:24.591691",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019b2cca-7328-70a1-a3e3-d8043aa5b17b",
              "019b2cca-75ce-7a10-843b-2cbbcbbe0da4",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877be0",
      navn: "Registrert som arbeidssøker",
      datatype: "boolsk",
      perioder: [
        {
          id: "019b2cca-aea6-7dc1-a771-0c26fd9c3866",
          opprettet: "2025-12-17T15:50:39.142447",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-12-17T15:50:39.100001",
            ident: "Z994714",
            begrunnelse: {
              verdi: "asdads",
              sistEndret: "2025-12-17T15:50:39.099993",
            },
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: true,
      formål: "Register",
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877be1",
      navn: "Oppfyller kravet til å være registrert som arbeidssøker",
      datatype: "boolsk",
      perioder: [
        {
          id: "019b2cca-aea8-7761-b8a6-51d35b95f297",
          opprettet: "2025-12-17T15:50:39.144214",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019b2cca-aea6-7dc1-a771-0c26fd9c3866"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aea9-7a6a-92ad-d4a62bd080ea",
          opprettet: "2025-12-17T15:50:39.14534",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aea9-7a6a-92ad-d4a62bd080eb",
          opprettet: "2025-12-17T15:50:39.145426",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: "01KCPCMWPKB6F3KTN7RFRJ1GDC",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["019b2cca-7325-779a-b32a-3fb10d12eb97"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aea9-7a6a-92ad-d4a62bd080ec",
          opprettet: "2025-12-17T15:50:39.145478",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 6,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aea9-7a6a-92ad-d4a62bd080ed",
          opprettet: "2025-12-17T15:50:39.145789",
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
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a23e",
      navn: "Faktor for utregning av dagsats etter dagpengegrunnlaget",
      datatype: "desimaltall",
      perioder: [
        {
          id: "019b2cca-aea9-7a6a-92ad-d4a62bd080ee",
          opprettet: "2025-12-17T15:50:39.145908",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 0.0024,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeaa-7b34-898e-9638f42e7217",
          opprettet: "2025-12-17T15:50:39.146045",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 37,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a246",
      navn: "90% av grunnlag for dagpenger",
      datatype: "desimaltall",
      perioder: [
        {
          id: "019b2cca-aeaa-7b34-898e-9638f42e7218",
          opprettet: "2025-12-17T15:50:39.146092",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 0.9,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeaa-7b34-898e-9638f42e7219",
          opprettet: "2025-12-17T15:50:39.146293",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 260,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeaa-7b34-898e-9638f42e721a",
          opprettet: "2025-12-17T15:50:39.146404",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 5,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeaa-7b34-898e-9638f42e721b",
          opprettet: "2025-12-17T15:50:39.146447",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 0.03,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeaa-7b34-898e-9638f42e721c",
          opprettet: "2025-12-17T15:50:39.146536",
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
          id: "019b2cca-aeaa-7b34-898e-9638f42e721d",
          opprettet: "2025-12-17T15:50:39.146588",
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
          id: "019b2cca-aeaa-7b34-898e-9638f42e721e",
          opprettet: "2025-12-17T15:50:39.146635",
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
          id: "019b2cca-aeaa-7b34-898e-9638f42e721f",
          opprettet: "2025-12-17T15:50:39.146677",
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
          id: "019b2cca-aeaa-7b34-898e-9638f42e7220",
          opprettet: "2025-12-17T15:50:39.146711",
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
          id: "019b2cca-aeaa-7b34-898e-9638f42e7221",
          opprettet: "2025-12-17T15:50:39.146742",
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
          id: "019b2cca-aeaa-7b34-898e-9638f42e7222",
          opprettet: "2025-12-17T15:50:39.14678",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 2,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeaa-7b34-898e-9638f42e7223",
          opprettet: "2025-12-17T15:50:39.146815",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 2,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeaa-7b34-898e-9638f42e7224",
          opprettet: "2025-12-17T15:50:39.146858",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 5,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeaa-7b34-898e-9638f42e7225",
          opprettet: "2025-12-17T15:50:39.146896",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 3,
            enhet: "dager",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeaa-7b34-898e-9638f42e7226",
          opprettet: "2025-12-17T15:50:39.14693",
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
          id: "019b2cca-aeaa-7b34-898e-9638f42e7227",
          opprettet: "2025-12-17T15:50:39.146962",
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
          id: "019b2cca-aeaa-7b34-898e-9638f42e7228",
          opprettet: "2025-12-17T15:50:39.146994",
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
          id: "019b2cca-aeab-7698-8b9a-3057c77a4bd6",
          opprettet: "2025-12-17T15:50:39.147025",
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
          id: "019b2cca-aeab-7698-8b9a-3057c77a4bd7",
          opprettet: "2025-12-17T15:50:39.147062",
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
          id: "019b2cca-aeab-7698-8b9a-3057c77a4bd8",
          opprettet: "2025-12-17T15:50:39.147568",
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
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a768",
      navn: "Maksimal vanlig arbeidstid",
      datatype: "desimaltall",
      perioder: [
        {
          id: "019b2cca-aeab-7698-8b9a-3057c77a4bd9",
          opprettet: "2025-12-17T15:50:39.147781",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 40,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: false,
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
          id: "019b2cca-aeab-7698-8b9a-3057c77a4bda",
          opprettet: "2025-12-17T15:50:39.147868",
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
          id: "019b2cca-aeab-7698-8b9a-3057c77a4bdb",
          opprettet: "2025-12-17T15:50:39.147953",
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
      opplysningTypeId: "0194881f-940f-7af9-9387-052e028b29ec",
      navn: "Oppjustert inntekt",
      datatype: "inntekt",
      perioder: [
        {
          id: "019b2cca-aead-716b-8b3f-964e192843c5",
          opprettet: "2025-12-17T15:50:39.149974",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: "01KCPCMWPKB6F3KTN7RFRJ1GDC",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Oppjuster",
            },
            opplysninger: [
              "019b2cca-aea9-7a6a-92ad-d4a62bd080ea",
              "019b2cca-aea9-7a6a-92ad-d4a62bd080eb",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeae-769d-99ad-81c66d9927e4",
          opprettet: "2025-12-17T15:50:39.150079",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019b2cca-aea9-7a6a-92ad-d4a62bd080ea",
              "019b2cca-aea9-7a6a-92ad-d4a62bd080ec",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: false,
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
          id: "019b2cca-aeae-769d-99ad-81c66d9927e5",
          opprettet: "2025-12-17T15:50:39.150218",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 555550,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019b2cca-aea9-7a6a-92ad-d4a62bd080eb"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeae-769d-99ad-81c66d9927e6",
          opprettet: "2025-12-17T15:50:39.150291",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019b2cca-aea9-7a6a-92ad-d4a62bd080eb"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeae-769d-99ad-81c66d9927e7",
          opprettet: "2025-12-17T15:50:39.150367",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019b2cca-aea9-7a6a-92ad-d4a62bd080eb"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: true,
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
          id: "019b2cca-aeae-769d-99ad-81c66d9927e8",
          opprettet: "2025-12-17T15:50:39.150453",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 3904.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019b2cca-aea9-7a6a-92ad-d4a62bd080ea",
              "019b2cca-aeaa-7b34-898e-9638f42e721b",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeae-769d-99ad-81c66d9927e9",
          opprettet: "2025-12-17T15:50:39.150626",
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
              "019b2cca-aeaa-7b34-898e-9638f42e721c",
              "019b2cca-aeaa-7b34-898e-9638f42e721d",
              "019b2cca-aeaa-7b34-898e-9638f42e721e",
              "019b2cca-aeaa-7b34-898e-9638f42e721f",
              "019b2cca-aeaa-7b34-898e-9638f42e7220",
              "019b2cca-aeaa-7b34-898e-9638f42e7221",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f1544c",
      navn: "Terskel for 12 måneder",
      datatype: "penger",
      perioder: [
        {
          id: "019b2cca-aeae-769d-99ad-81c66d9927ea",
          opprettet: "2025-12-17T15:50:39.150732",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019b2cca-70e2-7440-a08a-0dc5d9950c3f",
              "019b2cca-aeaa-7b34-898e-9638f42e7222",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeae-769d-99ad-81c66d9927eb",
          opprettet: "2025-12-17T15:50:39.150963",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 185183.33333333334,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019b2cca-7326-7a8f-817f-4c219b94071a",
              "019b2cca-aea9-7a6a-92ad-d4a62bd080ed",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeaf-7bcd-8bd2-d13aafaa83a1",
          opprettet: "2025-12-17T15:50:39.151049",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019b2cca-70e2-7440-a08a-0dc5d9950c3f",
              "019b2cca-aeaa-7b34-898e-9638f42e7223",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeaf-7bcd-8bd2-d13aafaa83a2",
          opprettet: "2025-12-17T15:50:39.151136",
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
              "019b2cca-aeab-7698-8b9a-3057c77a4bda",
              "019b2cca-aeab-7698-8b9a-3057c77a4bdb",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeb1-71a1-abe1-bb50ffbcb0b1",
          opprettet: "2025-12-17T15:50:39.153013",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 577523.3131228433,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019b2cca-aead-716b-8b3f-964e192843c5"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeb1-71a1-abe1-bb50ffbcb0b2",
          opprettet: "2025-12-17T15:50:39.153178",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019b2cca-aead-716b-8b3f-964e192843c5"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeb1-71a1-abe1-bb50ffbcb0b3",
          opprettet: "2025-12-17T15:50:39.153303",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019b2cca-aead-716b-8b3f-964e192843c5"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeb1-71a1-abe1-bb50ffbcb0b4",
          opprettet: "2025-12-17T15:50:39.153396",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019b2cca-7326-7a8f-817f-4c219b940719",
              "019b2cca-aeae-769d-99ad-81c66d9927ea",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeb1-71a1-abe1-bb50ffbcb0b5",
          opprettet: "2025-12-17T15:50:39.153493",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019b2cca-aeae-769d-99ad-81c66d9927eb",
              "019b2cca-aeaf-7bcd-8bd2-d13aafaa83a1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeb3-774f-af4c-771a00a923d3",
          opprettet: "2025-12-17T15:50:39.155081",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 577523.3131228433,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019b2cca-aeae-769d-99ad-81c66d9927e4",
              "019b2cca-aeb1-71a1-abe1-bb50ffbcb0b1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeb3-774f-af4c-771a00a923d4",
          opprettet: "2025-12-17T15:50:39.155154",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 577523.3131228433,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019b2cca-aeae-769d-99ad-81c66d9927e4",
              "019b2cca-aeb1-71a1-abe1-bb50ffbcb0b1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeb3-774f-af4c-771a00a923d5",
          opprettet: "2025-12-17T15:50:39.155205",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019b2cca-aeae-769d-99ad-81c66d9927e4",
              "019b2cca-aeb1-71a1-abe1-bb50ffbcb0b2",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeb3-774f-af4c-771a00a923d6",
          opprettet: "2025-12-17T15:50:39.155276",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019b2cca-aeae-769d-99ad-81c66d9927e4",
              "019b2cca-aeb1-71a1-abe1-bb50ffbcb0b3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeb3-774f-af4c-771a00a923d7",
          opprettet: "2025-12-17T15:50:39.155365",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019b2cca-aeae-769d-99ad-81c66d9927e4",
              "019b2cca-aeb1-71a1-abe1-bb50ffbcb0b1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeb3-774f-af4c-771a00a923d8",
          opprettet: "2025-12-17T15:50:39.155417",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019b2cca-aeae-769d-99ad-81c66d9927e4",
              "019b2cca-aeb1-71a1-abe1-bb50ffbcb0b2",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeb3-774f-af4c-771a00a923d9",
          opprettet: "2025-12-17T15:50:39.155465",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019b2cca-aeae-769d-99ad-81c66d9927e4",
              "019b2cca-aeb1-71a1-abe1-bb50ffbcb0b3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeb3-774f-af4c-771a00a923da",
          opprettet: "2025-12-17T15:50:39.155558",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 104,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeb3-774f-af4c-771a00a923db",
          opprettet: "2025-12-17T15:50:39.155609",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 52,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019b2cca-70d0-71af-aec1-208fa2af2184"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeb5-7a0e-b0ec-767f37dd0acc",
          opprettet: "2025-12-17T15:50:39.157225",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 577523.3131228433,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SumAv",
            },
            opplysninger: [
              "019b2cca-aeb3-774f-af4c-771a00a923d4",
              "019b2cca-aeb3-774f-af4c-771a00a923d5",
              "019b2cca-aeb3-774f-af4c-771a00a923d6",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeb5-7a0e-b0ec-767f37dd0acd",
          opprettet: "2025-12-17T15:50:39.157369",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019b2cca-aeb3-774f-af4c-771a00a923d7",
              "019b2cca-aeb3-774f-af4c-771a00a923d8",
              "019b2cca-aeb3-774f-af4c-771a00a923d9",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: true,
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
          id: "019b2cca-aeb5-7a0e-b0ec-767f37dd0ace",
          opprettet: "2025-12-17T15:50:39.15745",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
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
              "019b2cca-aeb1-71a1-abe1-bb50ffbcb0b4",
              "019b2cca-aeb3-774f-af4c-771a00a923da",
              "019b2cca-aeb3-774f-af4c-771a00a923db",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeb5-7a0e-b0ec-767f37dd0acf",
          opprettet: "2025-12-17T15:50:39.157542",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
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
              "019b2cca-aeb1-71a1-abe1-bb50ffbcb0b5",
              "019b2cca-aeb3-774f-af4c-771a00a923da",
              "019b2cca-aeb3-774f-af4c-771a00a923db",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeb6-7048-8453-1da1575cd347",
          opprettet: "2025-12-17T15:50:39.158988",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 192507.77104094773,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019b2cca-aea9-7a6a-92ad-d4a62bd080ed",
              "019b2cca-aeb5-7a0e-b0ec-767f37dd0acc",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeb7-7ce0-bddb-aa424a9faa87",
          opprettet: "2025-12-17T15:50:39.159061",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
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
              "019b2cca-aeb5-7a0e-b0ec-767f37dd0ace",
              "019b2cca-aeb5-7a0e-b0ec-767f37dd0acf",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: false,
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
          id: "019b2cca-aeb8-7eaf-9fc9-275efc5fbddb",
          opprettet: "2025-12-17T15:50:39.160211",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 577523.3131228433,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "019b2cca-aeb3-774f-af4c-771a00a923d3",
              "019b2cca-aeb6-7048-8453-1da1575cd347",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: false,
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
          id: "019b2cca-aeb8-7eaf-9fc9-275efc5fbddc",
          opprettet: "2025-12-17T15:50:39.160298",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
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
              "019b2cca-7327-73b9-86bb-a4ed2bfa53fe",
              "019b2cca-aeb7-7ce0-bddb-aa424a9faa87",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeb8-7eaf-9fc9-275efc5fbddd",
          opprettet: "2025-12-17T15:50:39.160356",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
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
              "019b2cca-aeaa-7b34-898e-9638f42e7224",
              "019b2cca-aeb7-7ce0-bddb-aa424a9faa87",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aeb9-753a-a569-c29d36d7f60c",
          opprettet: "2025-12-17T15:50:39.16185",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 577523,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["019b2cca-aeb8-7eaf-9fc9-275efc5fbddb"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: true,
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
          id: "019b2cca-aeb9-753a-a569-c29d36d7f60d",
          opprettet: "2025-12-17T15:50:39.161984",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: "Inntekt etter avkortning og oppjustering siste 12 måneder",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Brukt",
            },
            opplysninger: ["019b2cca-aeb8-7eaf-9fc9-275efc5fbddb"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: true,
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
          id: "019b2cca-aebb-74a4-a214-a927e2d85480",
          opprettet: "2025-12-17T15:50:39.16347",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 577523,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "019b2cca-3b74-7d9a-a0d5-35afb36979d4",
              "019b2cca-aeb9-753a-a569-c29d36d7f60c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: false,
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
          id: "019b2cca-aebc-75af-a6fe-7d60ccee6a82",
          opprettet: "2025-12-17T15:50:39.164993",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 577523,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "019b2cca-aeb9-753a-a569-c29d36d7f60c",
              "019b2cca-aebb-74a4-a214-a927e2d85480",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9421-766c-9dc6-41fe6c9a1e05",
      navn: "Grunnlaget for verneplikt er høyere enn dagpengegrunnlaget",
      datatype: "boolsk",
      perioder: [
        {
          id: "019b2cca-aebd-71d3-8222-d3664f4213b8",
          opprettet: "2025-12-17T15:50:39.165874",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019b2cca-aeb9-753a-a569-c29d36d7f60c",
              "019b2cca-aebb-74a4-a214-a927e2d85480",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aebf-7624-9095-04ad54d4bcfb",
          opprettet: "2025-12-17T15:50:39.167681",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 1386.0552,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019b2cca-aea9-7a6a-92ad-d4a62bd080ee",
              "019b2cca-aebc-75af-a6fe-7d60ccee6a82",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aebf-7624-9095-04ad54d4bcfc",
          opprettet: "2025-12-17T15:50:39.167824",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 519770.7,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019b2cca-aeaa-7b34-898e-9638f42e7218",
              "019b2cca-aebc-75af-a6fe-7d60ccee6a82",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aebf-7624-9095-04ad54d4bcfd",
          opprettet: "2025-12-17T15:50:39.167897",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
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
              "019b2cca-aeab-7698-8b9a-3057c77a4bda",
              "019b2cca-aebd-71d3-8222-d3664f4213b8",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aec1-716d-9792-fd33f7d185dd",
          opprettet: "2025-12-17T15:50:39.16974",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["019b2cca-aebf-7624-9095-04ad54d4bcfb"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aec1-716d-9792-fd33f7d185de",
          opprettet: "2025-12-17T15:50:39.169951",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 1999.1180769230768,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019b2cca-aeaa-7b34-898e-9638f42e7219",
              "019b2cca-aebf-7624-9095-04ad54d4bcfc",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aec2-777b-8895-841d7c851f3f",
          opprettet: "2025-12-17T15:50:39.170063",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
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
              "019b2cca-3b73-758b-968d-557a5b90b078",
              "019b2cca-aeab-7698-8b9a-3057c77a4bd9",
              "019b2cca-aeaf-7bcd-8bd2-d13aafaa83a2",
              "019b2cca-aebf-7624-9095-04ad54d4bcfd",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aec3-7147-b906-4c0be70cffa3",
          opprettet: "2025-12-17T15:50:39.171917",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 1999,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["019b2cca-aec1-716d-9792-fd33f7d185de"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aec4-7573-9b2d-5e570ac9de19",
          opprettet: "2025-12-17T15:50:39.172018",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "SjekkAvTerskel",
            },
            opplysninger: [
              "019b2cca-7327-73b9-86bb-a4ed2bfa540b",
              "019b2cca-7329-74a5-8891-c35f76f4b0ea",
              "019b2cca-aec2-777b-8895-841d7c851f3f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-aec5-7d2e-a475-c9550f07ea0e",
          opprettet: "2025-12-17T15:50:39.173247",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019b2cca-7327-73b9-86bb-a4ed2bfa5410",
              "019b2cca-7329-74a5-8891-c35f76f4b0eb",
              "019b2cca-75cd-7972-8c07-ad467d6c8406",
              "019b2cca-aec4-7573-9b2d-5e570ac9de19",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a23b",
      navn: "Barn",
      datatype: "barn",
      perioder: [
        {
          id: "019b2cca-af99-7d9b-ab71-79029a5268aa",
          opprettet: "2025-12-17T15:50:39.38542",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            søknadBarnId: "a67ced87-7305-4195-a694-e882b56632a9",
            verdi: [
              {
                fødselsdato: "2014-03-08",
                fornavnOgMellomnavn: "OVERFØLSOM",
                etternavn: "TIMEPLAN",
                statsborgerskap: "NOR",
                kvalifiserer: false,
              },
              {
                fødselsdato: "2019-07-25",
                fornavnOgMellomnavn: "FARLIG",
                etternavn: "FOSS",
                statsborgerskap: "NOR",
                kvalifiserer: false,
              },
            ],
            datatype: "barn",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:39.34499",
            meldingId: "5f4494ef-d6e4-47dd-906c-6c9c332b2014",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019b2cca-3959-7967-a90e-8672e3600899"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Register",
    },
    {
      opplysningTypeId: "0194881f-942e-7cb0-aa59-05ea449d88e0",
      navn: "Oppgitt andre ytelser utenfor NAV i søknaden",
      datatype: "boolsk",
      perioder: [
        {
          id: "019b2cca-af99-7d9b-ab71-79029a5268ab",
          opprettet: "2025-12-17T15:50:39.38557",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:50:39.345253",
            meldingId: "5f4494ef-d6e4-47dd-906c-6c9c332b2014",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a23c",
      navn: "Antall barn som gir rett til barnetillegg",
      datatype: "heltall",
      perioder: [
        {
          id: "019b2cca-af9b-7137-b39c-d89e7b684a4a",
          opprettet: "2025-12-17T15:50:39.387292",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 0,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "AntallAv",
            },
            opplysninger: ["019b2cca-af99-7d9b-ab71-79029a5268aa"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a2d",
      navn: "Skal samordnes med ytelser utenfor folketrygden",
      datatype: "boolsk",
      perioder: [
        {
          id: "019b2cca-af9b-7137-b39c-d89e7b684a4b",
          opprettet: "2025-12-17T15:50:39.387383",
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
              "019b2cca-aeaa-7b34-898e-9638f42e7226",
              "019b2cca-aeaa-7b34-898e-9638f42e7227",
              "019b2cca-aeaa-7b34-898e-9638f42e7228",
              "019b2cca-aeab-7698-8b9a-3057c77a4bd6",
              "019b2cca-aeab-7698-8b9a-3057c77a4bd7",
              "019b2cca-aeab-7698-8b9a-3057c77a4bd8",
              "019b2cca-af99-7d9b-ab71-79029a5268ab",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: true,
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
          id: "019b2cca-af9c-702b-a08f-37560d869bfa",
          opprettet: "2025-12-17T15:50:39.388792",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019b2cca-aeaa-7b34-898e-9638f42e7217",
              "019b2cca-af9b-7137-b39c-d89e7b684a4a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-af9e-7cc8-86e3-abdd29c8014c",
          opprettet: "2025-12-17T15:50:39.390132",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "019b2cca-aec1-716d-9792-fd33f7d185dd",
              "019b2cca-af9c-702b-a08f-37560d869bfa",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-af9e-7cc8-86e3-abdd29c8014d",
          opprettet: "2025-12-17T15:50:39.39022",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019b2cca-aeaa-7b34-898e-9638f42e7217",
              "019b2cca-af9c-702b-a08f-37560d869bfa",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: false,
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
          id: "019b2cca-af9f-70a5-a8dd-a25574c71ced",
          opprettet: "2025-12-17T15:50:39.391825",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019b2cca-aec3-7147-b906-4c0be70cffa3",
              "019b2cca-af9e-7cc8-86e3-abdd29c8014c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-afa0-7a50-b893-db06354c7716",
          opprettet: "2025-12-17T15:50:39.392004",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 6930,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019b2cca-aeaa-7b34-898e-9638f42e721a",
              "019b2cca-af9e-7cc8-86e3-abdd29c8014c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Legacy",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a243",
      navn: "Andel av dagsats uten barnetillegg avkortet til maks andel av dagpengegrunnlaget",
      datatype: "penger",
      perioder: [
        {
          id: "019b2cca-afa1-707e-ae5a-c4c1b156569f",
          opprettet: "2025-12-17T15:50:39.393691",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019b2cca-aec1-716d-9792-fd33f7d185dd",
              "019b2cca-af9f-70a5-a8dd-a25574c71ced",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-afa3-7581-9e1f-47786b6f5d70",
          opprettet: "2025-12-17T15:50:39.395022",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019b2cca-732a-714b-b715-d05fb3810ae1",
              "019b2cca-afa1-707e-ae5a-c4c1b156569f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-afa3-7581-9e1f-47786b6f5d71",
          opprettet: "2025-12-17T15:50:39.395108",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019b2cca-732a-714b-b715-d05fb3810ae1",
              "019b2cca-afa1-707e-ae5a-c4c1b156569f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-afa4-7db3-9c8e-8443e5d3d6b1",
          opprettet: "2025-12-17T15:50:39.396427",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 6930,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019b2cca-aeaa-7b34-898e-9638f42e721a",
              "019b2cca-afa3-7581-9e1f-47786b6f5d70",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-afa4-7db3-9c8e-8443e5d3d6b2",
          opprettet: "2025-12-17T15:50:39.396554",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019b2cca-af9e-7cc8-86e3-abdd29c8014d",
              "019b2cca-afa3-7581-9e1f-47786b6f5d71",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-afa9-7674-9048-80f24278d832",
          opprettet: "2025-12-17T15:50:39.401968",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 3904.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019b2cca-aeae-769d-99ad-81c66d9927e8",
              "019b2cca-afa4-7db3-9c8e-8443e5d3d6b1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-afaa-7db9-ab18-67406593591f",
          opprettet: "2025-12-17T15:50:39.402178",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 6930,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019b2cca-aeae-769d-99ad-81c66d9927e9",
              "019b2cca-afa4-7db3-9c8e-8443e5d3d6b1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-afab-745d-857c-504662aebfd0",
          opprettet: "2025-12-17T15:50:39.403758",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 6930,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "019b2cca-afa9-7674-9048-80f24278d832",
              "019b2cca-afaa-7db9-ab18-67406593591f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: true,
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
          id: "019b2cca-afad-7490-b8bc-bbab55fa1c85",
          opprettet: "2025-12-17T15:50:39.405556",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019b2cca-aeaa-7b34-898e-9638f42e721a",
              "019b2cca-afab-745d-857c-504662aebfd0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-afaf-73ba-8b6e-f459995d0c3d",
          opprettet: "2025-12-17T15:50:39.407252",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "019b2cca-af9c-702b-a08f-37560d869bfa",
              "019b2cca-afad-7490-b8bc-bbab55fa1c85",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-afaf-73ba-8b6e-f459995d0c3e",
          opprettet: "2025-12-17T15:50:39.407375",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErUlik",
            },
            opplysninger: [
              "019b2cca-afa1-707e-ae5a-c4c1b156569f",
              "019b2cca-afad-7490-b8bc-bbab55fa1c85",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-afb1-7bb9-8b04-2a73fe4eb30d",
          opprettet: "2025-12-17T15:50:39.409041",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019b2cca-aec3-7147-b906-4c0be70cffa3",
              "019b2cca-afaf-73ba-8b6e-f459995d0c3d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a24e",
      navn: "Ukessats med barnetillegg etter samordning",
      datatype: "penger",
      perioder: [
        {
          id: "019b2cca-afb3-7f92-a915-2182441df424",
          opprettet: "2025-12-17T15:50:39.411078",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 6930,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019b2cca-aeaa-7b34-898e-9638f42e721a",
              "019b2cca-afb1-7bb9-8b04-2a73fe4eb30d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-afb3-7f92-a915-2182441df425",
          opprettet: "2025-12-17T15:50:39.411298",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 4158,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019b2cca-aeaa-7b34-898e-9638f42e7225",
              "019b2cca-afb1-7bb9-8b04-2a73fe4eb30d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
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
          id: "019b2cca-afb4-7fcf-a54a-ca0123544b78",
          opprettet: "2025-12-17T15:50:39.412639",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          verdi: {
            verdi: 4158,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "019b2cca-3b73-758b-968d-557a5b90b07d",
              "019b2cca-afb3-7f92-a915-2182441df425",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.12.17-08.22-eddab7e",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "01956abd-2871-7517-a332-b462c0c31292",
      navn: "Meldeperiode",
      datatype: "periode",
      perioder: [
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab6e",
          opprettet: "2025-12-17T15:53:45.739538",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-10-12",
          verdi: {
            fom: "2025-09-29",
            tom: "2025-10-12",
            datatype: "periode",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd04",
          opprettet: "2025-12-17T16:13:45.974015",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-13",
          gyldigTilOgMed: "2025-10-26",
          verdi: {
            fom: "2025-10-13",
            tom: "2025-10-26",
            datatype: "periode",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "01948ea0-36e8-72cc-aa4f-16bc446ed3bd",
      navn: "Arbeidsdag",
      datatype: "boolsk",
      perioder: [
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab73",
          opprettet: "2025-12-17T15:53:45.739684",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab76",
          opprettet: "2025-12-17T15:53:45.739691",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-30",
          gyldigTilOgMed: "2025-09-30",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab79",
          opprettet: "2025-12-17T15:53:45.739694",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-01",
          gyldigTilOgMed: "2025-10-01",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab7c",
          opprettet: "2025-12-17T15:53:45.739697",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-02",
          gyldigTilOgMed: "2025-10-02",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab7f",
          opprettet: "2025-12-17T15:53:45.7397",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          gyldigTilOgMed: "2025-10-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab82",
          opprettet: "2025-12-17T15:53:45.739703",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-04",
          gyldigTilOgMed: "2025-10-04",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab85",
          opprettet: "2025-12-17T15:53:45.739705",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-05",
          gyldigTilOgMed: "2025-10-05",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab88",
          opprettet: "2025-12-17T15:53:45.739708",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-06",
          gyldigTilOgMed: "2025-10-06",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab8b",
          opprettet: "2025-12-17T15:53:45.739711",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-07",
          gyldigTilOgMed: "2025-10-07",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab8e",
          opprettet: "2025-12-17T15:53:45.739714",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-08",
          gyldigTilOgMed: "2025-10-08",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab91",
          opprettet: "2025-12-17T15:53:45.739716",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-09",
          gyldigTilOgMed: "2025-10-09",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab94",
          opprettet: "2025-12-17T15:53:45.739719",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-10",
          gyldigTilOgMed: "2025-10-10",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab97",
          opprettet: "2025-12-17T15:53:45.739722",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-11",
          gyldigTilOgMed: "2025-10-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab9a",
          opprettet: "2025-12-17T15:53:45.739725",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-12",
          gyldigTilOgMed: "2025-10-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd09",
          opprettet: "2025-12-17T16:13:45.974196",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-13",
          gyldigTilOgMed: "2025-10-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd0c",
          opprettet: "2025-12-17T16:13:45.974209",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-14",
          gyldigTilOgMed: "2025-10-14",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd0f",
          opprettet: "2025-12-17T16:13:45.974211",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-15",
          gyldigTilOgMed: "2025-10-15",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd12",
          opprettet: "2025-12-17T16:13:45.974213",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-16",
          gyldigTilOgMed: "2025-10-16",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd15",
          opprettet: "2025-12-17T16:13:45.974215",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-17",
          gyldigTilOgMed: "2025-10-17",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd18",
          opprettet: "2025-12-17T16:13:45.974217",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-18",
          gyldigTilOgMed: "2025-10-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd1b",
          opprettet: "2025-12-17T16:13:45.974219",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-19",
          gyldigTilOgMed: "2025-10-19",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd1e",
          opprettet: "2025-12-17T16:13:45.974221",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-20",
          gyldigTilOgMed: "2025-10-20",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd21",
          opprettet: "2025-12-17T16:13:45.974223",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-21",
          gyldigTilOgMed: "2025-10-21",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd24",
          opprettet: "2025-12-17T16:13:45.974224",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-22",
          gyldigTilOgMed: "2025-10-22",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd27",
          opprettet: "2025-12-17T16:13:45.974226",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-23",
          gyldigTilOgMed: "2025-10-23",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd2a",
          opprettet: "2025-12-17T16:13:45.974228",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-24",
          gyldigTilOgMed: "2025-10-24",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd2d",
          opprettet: "2025-12-17T16:13:45.97423",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-25",
          gyldigTilOgMed: "2025-10-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd30",
          opprettet: "2025-12-17T16:13:45.974232",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-26",
          gyldigTilOgMed: "2025-10-26",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "01948ea0-e25c-7c47-8429-a05045d80eca",
      navn: "Arbeidstimer på en arbeidsdag",
      datatype: "desimaltall",
      perioder: [
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab74",
          opprettet: "2025-12-17T15:53:45.739686",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-09-29",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab77",
          opprettet: "2025-12-17T15:53:45.739692",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-30",
          gyldigTilOgMed: "2025-09-30",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab7a",
          opprettet: "2025-12-17T15:53:45.739695",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-01",
          gyldigTilOgMed: "2025-10-01",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab7d",
          opprettet: "2025-12-17T15:53:45.739698",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-02",
          gyldigTilOgMed: "2025-10-02",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab80",
          opprettet: "2025-12-17T15:53:45.739701",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          gyldigTilOgMed: "2025-10-03",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab83",
          opprettet: "2025-12-17T15:53:45.739703",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-04",
          gyldigTilOgMed: "2025-10-04",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab86",
          opprettet: "2025-12-17T15:53:45.739705",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-05",
          gyldigTilOgMed: "2025-10-05",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab89",
          opprettet: "2025-12-17T15:53:45.739708",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-06",
          gyldigTilOgMed: "2025-10-06",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab8c",
          opprettet: "2025-12-17T15:53:45.739711",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-07",
          gyldigTilOgMed: "2025-10-07",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab8f",
          opprettet: "2025-12-17T15:53:45.739714",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-08",
          gyldigTilOgMed: "2025-10-08",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab92",
          opprettet: "2025-12-17T15:53:45.739717",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-09",
          gyldigTilOgMed: "2025-10-09",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab95",
          opprettet: "2025-12-17T15:53:45.73972",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-10",
          gyldigTilOgMed: "2025-10-10",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab98",
          opprettet: "2025-12-17T15:53:45.739723",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-11",
          gyldigTilOgMed: "2025-10-11",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab9b",
          opprettet: "2025-12-17T15:53:45.739725",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-12",
          gyldigTilOgMed: "2025-10-12",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd0a",
          opprettet: "2025-12-17T16:13:45.974199",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-13",
          gyldigTilOgMed: "2025-10-13",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd0d",
          opprettet: "2025-12-17T16:13:45.974209",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-14",
          gyldigTilOgMed: "2025-10-14",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd10",
          opprettet: "2025-12-17T16:13:45.974211",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-15",
          gyldigTilOgMed: "2025-10-15",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd13",
          opprettet: "2025-12-17T16:13:45.974213",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-16",
          gyldigTilOgMed: "2025-10-16",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd16",
          opprettet: "2025-12-17T16:13:45.974216",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-17",
          gyldigTilOgMed: "2025-10-17",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd19",
          opprettet: "2025-12-17T16:13:45.974217",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-18",
          gyldigTilOgMed: "2025-10-18",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd1c",
          opprettet: "2025-12-17T16:13:45.974219",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-19",
          gyldigTilOgMed: "2025-10-19",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd1f",
          opprettet: "2025-12-17T16:13:45.974221",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-20",
          gyldigTilOgMed: "2025-10-20",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd22",
          opprettet: "2025-12-17T16:13:45.974223",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-21",
          gyldigTilOgMed: "2025-10-21",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd25",
          opprettet: "2025-12-17T16:13:45.974225",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-22",
          gyldigTilOgMed: "2025-10-22",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd28",
          opprettet: "2025-12-17T16:13:45.974226",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-23",
          gyldigTilOgMed: "2025-10-23",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd2b",
          opprettet: "2025-12-17T16:13:45.974228",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-24",
          gyldigTilOgMed: "2025-10-24",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd2e",
          opprettet: "2025-12-17T16:13:45.97423",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-25",
          gyldigTilOgMed: "2025-10-25",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd31",
          opprettet: "2025-12-17T16:13:45.974232",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-26",
          gyldigTilOgMed: "2025-10-26",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "01956ab8-126c-7636-803e-a5d87eda2015",
      navn: "Har meldt seg via meldekort",
      datatype: "boolsk",
      perioder: [
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab75",
          opprettet: "2025-12-17T15:53:45.739689",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab78",
          opprettet: "2025-12-17T15:53:45.739692",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-30",
          gyldigTilOgMed: "2025-09-30",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab7b",
          opprettet: "2025-12-17T15:53:45.739695",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-01",
          gyldigTilOgMed: "2025-10-01",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab7e",
          opprettet: "2025-12-17T15:53:45.739698",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-02",
          gyldigTilOgMed: "2025-10-02",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab81",
          opprettet: "2025-12-17T15:53:45.739701",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          gyldigTilOgMed: "2025-10-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab84",
          opprettet: "2025-12-17T15:53:45.739704",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-04",
          gyldigTilOgMed: "2025-10-04",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab87",
          opprettet: "2025-12-17T15:53:45.739706",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-05",
          gyldigTilOgMed: "2025-10-05",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab8a",
          opprettet: "2025-12-17T15:53:45.739709",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-06",
          gyldigTilOgMed: "2025-10-06",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab8d",
          opprettet: "2025-12-17T15:53:45.739712",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-07",
          gyldigTilOgMed: "2025-10-07",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab90",
          opprettet: "2025-12-17T15:53:45.739715",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-08",
          gyldigTilOgMed: "2025-10-08",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab93",
          opprettet: "2025-12-17T15:53:45.739717",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-09",
          gyldigTilOgMed: "2025-10-09",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab96",
          opprettet: "2025-12-17T15:53:45.739721",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-10",
          gyldigTilOgMed: "2025-10-10",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab99",
          opprettet: "2025-12-17T15:53:45.739723",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-11",
          gyldigTilOgMed: "2025-10-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab9c",
          opprettet: "2025-12-17T15:53:45.739725",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-12",
          gyldigTilOgMed: "2025-10-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd0b",
          opprettet: "2025-12-17T16:13:45.974207",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-13",
          gyldigTilOgMed: "2025-10-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd0e",
          opprettet: "2025-12-17T16:13:45.97421",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-14",
          gyldigTilOgMed: "2025-10-14",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd11",
          opprettet: "2025-12-17T16:13:45.974212",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-15",
          gyldigTilOgMed: "2025-10-15",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd14",
          opprettet: "2025-12-17T16:13:45.974214",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-16",
          gyldigTilOgMed: "2025-10-16",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd17",
          opprettet: "2025-12-17T16:13:45.974216",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-17",
          gyldigTilOgMed: "2025-10-17",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd1a",
          opprettet: "2025-12-17T16:13:45.974218",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-18",
          gyldigTilOgMed: "2025-10-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd1d",
          opprettet: "2025-12-17T16:13:45.974219",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-19",
          gyldigTilOgMed: "2025-10-19",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd20",
          opprettet: "2025-12-17T16:13:45.974221",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-20",
          gyldigTilOgMed: "2025-10-20",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd23",
          opprettet: "2025-12-17T16:13:45.974223",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-21",
          gyldigTilOgMed: "2025-10-21",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd26",
          opprettet: "2025-12-17T16:13:45.974225",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-22",
          gyldigTilOgMed: "2025-10-22",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd29",
          opprettet: "2025-12-17T16:13:45.974227",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-23",
          gyldigTilOgMed: "2025-10-23",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd2c",
          opprettet: "2025-12-17T16:13:45.974229",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-24",
          gyldigTilOgMed: "2025-10-24",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd2f",
          opprettet: "2025-12-17T16:13:45.974231",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-25",
          gyldigTilOgMed: "2025-10-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd32",
          opprettet: "2025-12-17T16:13:45.974232",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-26",
          gyldigTilOgMed: "2025-10-26",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "019a9b47-2442-7533-bc71-a71a4600c49a",
      navn: "Meldedato",
      datatype: "dato",
      perioder: [
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab9d",
          opprettet: "2025-12-17T15:53:45.73973",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-10-12",
          verdi: {
            verdi: "2025-12-17",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd33",
          opprettet: "2025-12-17T16:13:45.974237",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-13",
          gyldigTilOgMed: "2025-10-26",
          verdi: {
            verdi: "2025-12-17",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "019a81bf-50e1-7f1d-b23b-f30265b16042",
      navn: "Har meldt seg i tide",
      datatype: "boolsk",
      perioder: [
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab9e",
          opprettet: "2025-12-17T15:53:45.739754",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-10-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T15:53:45.739276",
            meldingId: "2837c4af-6d41-423d-909c-d6d4354aa98a",
          },
        },
        {
          id: "019b2cdf-d7f6-7814-ba92-bbad8be1bd34",
          opprettet: "2025-12-17T16:13:45.974256",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-13",
          gyldigTilOgMed: "2025-10-26",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-12-17T16:13:45.973841",
            meldingId: "e2f1eb48-a1c2-4f14-9e10-1aca425bd28b",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "01973a27-d8b3-7ffd-a81a-a3826963b079",
      navn: "Forbrukt egenandel",
      datatype: "penger",
      perioder: [
        {
          id: "019b2ccd-8794-7004-ad67-0b777637f4c5",
          opprettet: "2025-12-17T15:53:45.74818",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-10-12",
          verdi: {
            verdi: 4158,
            datatype: "penger",
          },
        },
        {
          id: "019b2cdf-d805-7a63-a6f3-bb14de627c23",
          opprettet: "2025-12-17T16:13:45.989832",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-13",
          gyldigTilOgMed: "2025-10-26",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "01994cfd-9a27-762e-81fa-61f550467c95",
      navn: "Penger som skal utbetales for perioden",
      datatype: "penger",
      perioder: [
        {
          id: "019b2ccd-8794-7004-ad67-0b777637f4c6",
          opprettet: "2025-12-17T15:53:45.748311",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-10-12",
          verdi: {
            verdi: 9702,
            datatype: "penger",
          },
        },
        {
          id: "019b2cdf-d806-7154-bae1-08da030fe8d7",
          opprettet: "2025-12-17T16:13:45.990088",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-13",
          gyldigTilOgMed: "2025-10-26",
          verdi: {
            verdi: 13860,
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
      opplysningTypeId: "01997b70-a12c-7622-bff8-82a20687e640",
      navn: "Gjenstående egenandel",
      datatype: "penger",
      perioder: [
        {
          id: "019b2ccd-8794-7004-ad67-0b777637f4c7",
          opprettet: "2025-12-17T15:53:45.748394",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-10-12",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "019b2cdf-d806-7154-bae1-08da030fe8d8",
          opprettet: "2025-12-17T16:13:45.990221",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-13",
          gyldigTilOgMed: "2025-10-26",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "01997b70-6e6e-702a-a296-18ae5fb9621d",
      navn: "Oppfyller kravet til tapt arbeidstid i perioden",
      datatype: "boolsk",
      perioder: [
        {
          id: "019b2ccd-8794-7004-ad67-0b777637f4c8",
          opprettet: "2025-12-17T15:53:45.748479",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-10-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2cdf-d806-7154-bae1-08da030fe8d9",
          opprettet: "2025-12-17T16:13:45.990328",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-13",
          gyldigTilOgMed: "2025-10-26",
          verdi: {
            verdi: true,
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
      opplysningTypeId: "019ae986-43bb-7529-af23-9b3d309501eb",
      navn: "Sum av fastsatt vanlig arbeidstid",
      datatype: "desimaltall",
      perioder: [
        {
          id: "019b2ccd-8794-7004-ad67-0b777637f4c9",
          opprettet: "2025-12-17T15:53:45.748598",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-10-12",
          verdi: {
            verdi: 75,
            enhet: "timer",
            datatype: "desimaltall",
          },
        },
        {
          id: "019b2cdf-d806-7154-bae1-08da030fe8da",
          opprettet: "2025-12-17T16:13:45.990421",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-13",
          gyldigTilOgMed: "2025-10-26",
          verdi: {
            verdi: 75,
            enhet: "timer",
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
      opplysningTypeId: "019ae986-81bf-7b29-9458-446e6dbaedae",
      navn: "Sum av arbeidede timer",
      datatype: "desimaltall",
      perioder: [
        {
          id: "019b2ccd-8794-7004-ad67-0b777637f4ca",
          opprettet: "2025-12-17T15:53:45.748676",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-10-12",
          verdi: {
            verdi: 0,
            enhet: "timer",
            datatype: "desimaltall",
          },
        },
        {
          id: "019b2cdf-d806-7154-bae1-08da030fe8db",
          opprettet: "2025-12-17T16:13:45.990547",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-13",
          gyldigTilOgMed: "2025-10-26",
          verdi: {
            verdi: 0,
            enhet: "timer",
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
      opplysningTypeId: "019ae986-a128-72f0-9868-032bc8a57b21",
      navn: "Prosentfaktor",
      datatype: "desimaltall",
      perioder: [
        {
          id: "019b2ccd-8794-7004-ad67-0b777637f4cb",
          opprettet: "2025-12-17T15:53:45.748788",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-10-12",
          verdi: {
            verdi: 1,
            datatype: "desimaltall",
          },
        },
        {
          id: "019b2cdf-d806-7154-bae1-08da030fe8dc",
          opprettet: "2025-12-17T16:13:45.990682",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-13",
          gyldigTilOgMed: "2025-10-26",
          verdi: {
            verdi: 1,
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
      opplysningTypeId: "01948ea0-ffdc-7964-ab55-52a7e35e1020",
      navn: "Dag som fører til forbruk av dagpengeperiode",
      datatype: "boolsk",
      perioder: [
        {
          id: "019b2ccd-8794-7004-ad67-0b777637f4cc",
          opprettet: "2025-12-17T15:53:45.748912",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2ccd-8795-7bc2-be79-cbc724c3ff7e",
          opprettet: "2025-12-17T15:53:45.749111",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-30",
          gyldigTilOgMed: "2025-09-30",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2ccd-8795-7bc2-be79-cbc724c3ff80",
          opprettet: "2025-12-17T15:53:45.749262",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-01",
          gyldigTilOgMed: "2025-10-01",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2ccd-8795-7bc2-be79-cbc724c3ff82",
          opprettet: "2025-12-17T15:53:45.749407",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-02",
          gyldigTilOgMed: "2025-10-02",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2ccd-8795-7bc2-be79-cbc724c3ff84",
          opprettet: "2025-12-17T15:53:45.749618",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          gyldigTilOgMed: "2025-10-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2ccd-8795-7bc2-be79-cbc724c3ff86",
          opprettet: "2025-12-17T15:53:45.749795",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-04",
          gyldigTilOgMed: "2025-10-04",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2ccd-8796-7cdf-9516-9783f477d395",
          opprettet: "2025-12-17T15:53:45.750015",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-05",
          gyldigTilOgMed: "2025-10-05",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2ccd-8796-7cdf-9516-9783f477d397",
          opprettet: "2025-12-17T15:53:45.750175",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-06",
          gyldigTilOgMed: "2025-10-06",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2ccd-8796-7cdf-9516-9783f477d399",
          opprettet: "2025-12-17T15:53:45.750326",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-07",
          gyldigTilOgMed: "2025-10-07",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2ccd-8796-7cdf-9516-9783f477d39b",
          opprettet: "2025-12-17T15:53:45.750471",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-08",
          gyldigTilOgMed: "2025-10-08",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2ccd-8796-7cdf-9516-9783f477d39d",
          opprettet: "2025-12-17T15:53:45.750663",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-09",
          gyldigTilOgMed: "2025-10-09",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2ccd-8796-7cdf-9516-9783f477d39f",
          opprettet: "2025-12-17T15:53:45.750821",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-10",
          gyldigTilOgMed: "2025-10-10",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2ccd-8796-7cdf-9516-9783f477d3a1",
          opprettet: "2025-12-17T15:53:45.750974",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-11",
          gyldigTilOgMed: "2025-10-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2ccd-8797-74f6-945e-c24f7a18ce8f",
          opprettet: "2025-12-17T15:53:45.75117",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-12",
          gyldigTilOgMed: "2025-10-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2cdf-d806-7154-bae1-08da030fe8dd",
          opprettet: "2025-12-17T16:13:45.990794",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-13",
          gyldigTilOgMed: "2025-10-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2cdf-d80b-7e94-82fc-dfb9f7c4bd2e",
          opprettet: "2025-12-17T16:13:45.995176",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-14",
          gyldigTilOgMed: "2025-10-14",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2cdf-d80b-7e94-82fc-dfb9f7c4bd30",
          opprettet: "2025-12-17T16:13:45.995569",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-15",
          gyldigTilOgMed: "2025-10-15",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2cdf-d80b-7e94-82fc-dfb9f7c4bd32",
          opprettet: "2025-12-17T16:13:45.995827",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-16",
          gyldigTilOgMed: "2025-10-16",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2cdf-d80c-74bc-bc3c-fbe4208e150d",
          opprettet: "2025-12-17T16:13:45.996066",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-17",
          gyldigTilOgMed: "2025-10-17",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2cdf-d80c-74bc-bc3c-fbe4208e150f",
          opprettet: "2025-12-17T16:13:45.996333",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-18",
          gyldigTilOgMed: "2025-10-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2cdf-d80c-74bc-bc3c-fbe4208e1511",
          opprettet: "2025-12-17T16:13:45.996798",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-19",
          gyldigTilOgMed: "2025-10-19",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2cdf-d80d-7752-9fec-23240cceeed2",
          opprettet: "2025-12-17T16:13:45.997033",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-20",
          gyldigTilOgMed: "2025-10-20",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2cdf-d80d-7752-9fec-23240cceeed4",
          opprettet: "2025-12-17T16:13:45.997222",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-21",
          gyldigTilOgMed: "2025-10-21",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2cdf-d80d-7752-9fec-23240cceeed6",
          opprettet: "2025-12-17T16:13:45.997452",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-22",
          gyldigTilOgMed: "2025-10-22",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2cdf-d80d-7752-9fec-23240cceeed8",
          opprettet: "2025-12-17T16:13:45.997683",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-23",
          gyldigTilOgMed: "2025-10-23",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2cdf-d80d-7752-9fec-23240cceeeda",
          opprettet: "2025-12-17T16:13:45.997883",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-24",
          gyldigTilOgMed: "2025-10-24",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2cdf-d80e-78f2-b1f8-10f68961ffb6",
          opprettet: "2025-12-17T16:13:45.998117",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-25",
          gyldigTilOgMed: "2025-10-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "019b2cdf-d80e-78f2-b1f8-10f68961ffb8",
          opprettet: "2025-12-17T16:13:45.998351",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-26",
          gyldigTilOgMed: "2025-10-26",
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
      opplysningTypeId: "01957069-d7d5-7f7c-b359-c00686fbf1f7",
      navn: "Penger som skal utbetales",
      datatype: "penger",
      perioder: [
        {
          id: "019b2ccd-8795-7bc2-be79-cbc724c3ff7d",
          opprettet: "2025-12-17T15:53:45.749023",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-09-29",
          verdi: {
            verdi: 970,
            datatype: "penger",
          },
        },
        {
          id: "019b2ccd-8795-7bc2-be79-cbc724c3ff7f",
          opprettet: "2025-12-17T15:53:45.749188",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-30",
          gyldigTilOgMed: "2025-09-30",
          verdi: {
            verdi: 970,
            datatype: "penger",
          },
        },
        {
          id: "019b2ccd-8795-7bc2-be79-cbc724c3ff81",
          opprettet: "2025-12-17T15:53:45.749333",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-01",
          gyldigTilOgMed: "2025-10-01",
          verdi: {
            verdi: 970,
            datatype: "penger",
          },
        },
        {
          id: "019b2ccd-8795-7bc2-be79-cbc724c3ff83",
          opprettet: "2025-12-17T15:53:45.749484",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-02",
          gyldigTilOgMed: "2025-10-02",
          verdi: {
            verdi: 970,
            datatype: "penger",
          },
        },
        {
          id: "019b2ccd-8795-7bc2-be79-cbc724c3ff85",
          opprettet: "2025-12-17T15:53:45.749698",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          gyldigTilOgMed: "2025-10-03",
          verdi: {
            verdi: 970,
            datatype: "penger",
          },
        },
        {
          id: "019b2ccd-8795-7bc2-be79-cbc724c3ff87",
          opprettet: "2025-12-17T15:53:45.749928",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-04",
          gyldigTilOgMed: "2025-10-04",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "019b2ccd-8796-7cdf-9516-9783f477d396",
          opprettet: "2025-12-17T15:53:45.750097",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-05",
          gyldigTilOgMed: "2025-10-05",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "019b2ccd-8796-7cdf-9516-9783f477d398",
          opprettet: "2025-12-17T15:53:45.75025",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-06",
          gyldigTilOgMed: "2025-10-06",
          verdi: {
            verdi: 970,
            datatype: "penger",
          },
        },
        {
          id: "019b2ccd-8796-7cdf-9516-9783f477d39a",
          opprettet: "2025-12-17T15:53:45.750398",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-07",
          gyldigTilOgMed: "2025-10-07",
          verdi: {
            verdi: 970,
            datatype: "penger",
          },
        },
        {
          id: "019b2ccd-8796-7cdf-9516-9783f477d39c",
          opprettet: "2025-12-17T15:53:45.750579",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-08",
          gyldigTilOgMed: "2025-10-08",
          verdi: {
            verdi: 970,
            datatype: "penger",
          },
        },
        {
          id: "019b2ccd-8796-7cdf-9516-9783f477d39e",
          opprettet: "2025-12-17T15:53:45.750737",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-09",
          gyldigTilOgMed: "2025-10-09",
          verdi: {
            verdi: 970,
            datatype: "penger",
          },
        },
        {
          id: "019b2ccd-8796-7cdf-9516-9783f477d3a0",
          opprettet: "2025-12-17T15:53:45.750895",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-10",
          gyldigTilOgMed: "2025-10-10",
          verdi: {
            verdi: 972,
            datatype: "penger",
          },
        },
        {
          id: "019b2ccd-8797-74f6-945e-c24f7a18ce8e",
          opprettet: "2025-12-17T15:53:45.751067",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-11",
          gyldigTilOgMed: "2025-10-11",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "019b2ccd-8797-74f6-945e-c24f7a18ce90",
          opprettet: "2025-12-17T15:53:45.751253",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-12",
          gyldigTilOgMed: "2025-10-12",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "019b2cdf-d806-7154-bae1-08da030fe8de",
          opprettet: "2025-12-17T16:13:45.990893",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-13",
          gyldigTilOgMed: "2025-10-13",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
        },
        {
          id: "019b2cdf-d80b-7e94-82fc-dfb9f7c4bd2f",
          opprettet: "2025-12-17T16:13:45.995392",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-14",
          gyldigTilOgMed: "2025-10-14",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
        },
        {
          id: "019b2cdf-d80b-7e94-82fc-dfb9f7c4bd31",
          opprettet: "2025-12-17T16:13:45.995694",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-15",
          gyldigTilOgMed: "2025-10-15",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
        },
        {
          id: "019b2cdf-d80b-7e94-82fc-dfb9f7c4bd33",
          opprettet: "2025-12-17T16:13:45.995951",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-16",
          gyldigTilOgMed: "2025-10-16",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
        },
        {
          id: "019b2cdf-d80c-74bc-bc3c-fbe4208e150e",
          opprettet: "2025-12-17T16:13:45.996217",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-17",
          gyldigTilOgMed: "2025-10-17",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
        },
        {
          id: "019b2cdf-d80c-74bc-bc3c-fbe4208e1510",
          opprettet: "2025-12-17T16:13:45.996634",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-18",
          gyldigTilOgMed: "2025-10-18",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "019b2cdf-d80c-74bc-bc3c-fbe4208e1512",
          opprettet: "2025-12-17T16:13:45.996937",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-19",
          gyldigTilOgMed: "2025-10-19",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "019b2cdf-d80d-7752-9fec-23240cceeed3",
          opprettet: "2025-12-17T16:13:45.99713",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-20",
          gyldigTilOgMed: "2025-10-20",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
        },
        {
          id: "019b2cdf-d80d-7752-9fec-23240cceeed5",
          opprettet: "2025-12-17T16:13:45.997347",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-21",
          gyldigTilOgMed: "2025-10-21",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
        },
        {
          id: "019b2cdf-d80d-7752-9fec-23240cceeed7",
          opprettet: "2025-12-17T16:13:45.997587",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-22",
          gyldigTilOgMed: "2025-10-22",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
        },
        {
          id: "019b2cdf-d80d-7752-9fec-23240cceeed9",
          opprettet: "2025-12-17T16:13:45.997773",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-23",
          gyldigTilOgMed: "2025-10-23",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
        },
        {
          id: "019b2cdf-d80d-7752-9fec-23240cceeedb",
          opprettet: "2025-12-17T16:13:45.997974",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-24",
          gyldigTilOgMed: "2025-10-24",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
        },
        {
          id: "019b2cdf-d80e-78f2-b1f8-10f68961ffb7",
          opprettet: "2025-12-17T16:13:45.998249",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-25",
          gyldigTilOgMed: "2025-10-25",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "019b2cdf-d80e-78f2-b1f8-10f68961ffb9",
          opprettet: "2025-12-17T16:13:45.99845",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-26",
          gyldigTilOgMed: "2025-10-26",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "01992934-66e4-7606-bdd3-c6c9dd420ffd",
      navn: "Antall dager som er forbrukt",
      datatype: "heltall",
      perioder: [
        {
          id: "019b2ccd-87bc-7cde-9f45-d647316f815f",
          opprettet: "2025-12-17T15:53:45.78825",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-09-29",
          verdi: {
            verdi: 1,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87bc-7cde-9f45-d647316f8161",
          opprettet: "2025-12-17T15:53:45.788414",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-30",
          gyldigTilOgMed: "2025-09-30",
          verdi: {
            verdi: 2,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87bc-7cde-9f45-d647316f8163",
          opprettet: "2025-12-17T15:53:45.788643",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-01",
          gyldigTilOgMed: "2025-10-01",
          verdi: {
            verdi: 3,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87bc-7cde-9f45-d647316f8165",
          opprettet: "2025-12-17T15:53:45.788805",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-02",
          gyldigTilOgMed: "2025-10-02",
          verdi: {
            verdi: 4,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87bc-7cde-9f45-d647316f8167",
          opprettet: "2025-12-17T15:53:45.788954",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          gyldigTilOgMed: "2025-10-03",
          verdi: {
            verdi: 5,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87bd-7b4a-83a5-7897811a1ada",
          opprettet: "2025-12-17T15:53:45.789101",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-04",
          gyldigTilOgMed: "2025-10-04",
          verdi: {
            verdi: 5,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87bd-7b4a-83a5-7897811a1adc",
          opprettet: "2025-12-17T15:53:45.789264",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-05",
          gyldigTilOgMed: "2025-10-05",
          verdi: {
            verdi: 5,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87bd-7b4a-83a5-7897811a1ade",
          opprettet: "2025-12-17T15:53:45.789407",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-06",
          gyldigTilOgMed: "2025-10-06",
          verdi: {
            verdi: 6,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87bd-7b4a-83a5-7897811a1ae0",
          opprettet: "2025-12-17T15:53:45.789624",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-07",
          gyldigTilOgMed: "2025-10-07",
          verdi: {
            verdi: 7,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87bd-7b4a-83a5-7897811a1ae2",
          opprettet: "2025-12-17T15:53:45.789792",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-08",
          gyldigTilOgMed: "2025-10-08",
          verdi: {
            verdi: 8,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87bd-7b4a-83a5-7897811a1ae4",
          opprettet: "2025-12-17T15:53:45.789943",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-09",
          gyldigTilOgMed: "2025-10-09",
          verdi: {
            verdi: 9,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87be-7922-8c98-ae169cfa1431",
          opprettet: "2025-12-17T15:53:45.790166",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-10",
          gyldigTilOgMed: "2025-10-10",
          verdi: {
            verdi: 10,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87be-7922-8c98-ae169cfa1433",
          opprettet: "2025-12-17T15:53:45.790425",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-11",
          gyldigTilOgMed: "2025-10-11",
          verdi: {
            verdi: 10,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87be-7922-8c98-ae169cfa1435",
          opprettet: "2025-12-17T15:53:45.790824",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-12",
          gyldigTilOgMed: "2025-10-12",
          verdi: {
            verdi: 10,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d831-7d79-863d-135cf347e659",
          opprettet: "2025-12-17T16:13:46.033619",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-13",
          gyldigTilOgMed: "2025-10-13",
          verdi: {
            verdi: 11,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d831-7d79-863d-135cf347e65b",
          opprettet: "2025-12-17T16:13:46.033836",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-14",
          gyldigTilOgMed: "2025-10-14",
          verdi: {
            verdi: 12,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d832-7d5b-8c14-3111f11f2563",
          opprettet: "2025-12-17T16:13:46.034028",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-15",
          gyldigTilOgMed: "2025-10-15",
          verdi: {
            verdi: 13,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d832-7d5b-8c14-3111f11f2565",
          opprettet: "2025-12-17T16:13:46.034223",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-16",
          gyldigTilOgMed: "2025-10-16",
          verdi: {
            verdi: 14,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d832-7d5b-8c14-3111f11f2567",
          opprettet: "2025-12-17T16:13:46.034414",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-17",
          gyldigTilOgMed: "2025-10-17",
          verdi: {
            verdi: 15,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d832-7d5b-8c14-3111f11f2569",
          opprettet: "2025-12-17T16:13:46.034661",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-18",
          gyldigTilOgMed: "2025-10-18",
          verdi: {
            verdi: 15,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d832-7d5b-8c14-3111f11f256b",
          opprettet: "2025-12-17T16:13:46.034856",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-19",
          gyldigTilOgMed: "2025-10-19",
          verdi: {
            verdi: 15,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d833-785e-8d43-2cb9ae0332e7",
          opprettet: "2025-12-17T16:13:46.035055",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-20",
          gyldigTilOgMed: "2025-10-20",
          verdi: {
            verdi: 16,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d833-785e-8d43-2cb9ae0332e9",
          opprettet: "2025-12-17T16:13:46.035314",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-21",
          gyldigTilOgMed: "2025-10-21",
          verdi: {
            verdi: 17,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d833-785e-8d43-2cb9ae0332eb",
          opprettet: "2025-12-17T16:13:46.035538",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-22",
          gyldigTilOgMed: "2025-10-22",
          verdi: {
            verdi: 18,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d833-785e-8d43-2cb9ae0332ed",
          opprettet: "2025-12-17T16:13:46.035758",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-23",
          gyldigTilOgMed: "2025-10-23",
          verdi: {
            verdi: 19,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d833-785e-8d43-2cb9ae0332ef",
          opprettet: "2025-12-17T16:13:46.03595",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-24",
          gyldigTilOgMed: "2025-10-24",
          verdi: {
            verdi: 20,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d834-72ae-937e-53a74170f1b6",
          opprettet: "2025-12-17T16:13:46.036148",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-25",
          gyldigTilOgMed: "2025-10-25",
          verdi: {
            verdi: 20,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d834-72ae-937e-53a74170f1b8",
          opprettet: "2025-12-17T16:13:46.036336",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-26",
          gyldigTilOgMed: "2025-10-26",
          verdi: {
            verdi: 20,
            enhet: "dager",
            datatype: "heltall",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "01992956-e349-76b1-8f68-c9d481df3a32",
      navn: "Antall dager som gjenstår",
      datatype: "heltall",
      perioder: [
        {
          id: "019b2ccd-87bc-7cde-9f45-d647316f8160",
          opprettet: "2025-12-17T15:53:45.788336",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-09-29",
          verdi: {
            verdi: 519,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87bc-7cde-9f45-d647316f8162",
          opprettet: "2025-12-17T15:53:45.788556",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-30",
          gyldigTilOgMed: "2025-09-30",
          verdi: {
            verdi: 518,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87bc-7cde-9f45-d647316f8164",
          opprettet: "2025-12-17T15:53:45.788732",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-01",
          gyldigTilOgMed: "2025-10-01",
          verdi: {
            verdi: 517,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87bc-7cde-9f45-d647316f8166",
          opprettet: "2025-12-17T15:53:45.788881",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-02",
          gyldigTilOgMed: "2025-10-02",
          verdi: {
            verdi: 516,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87bd-7b4a-83a5-7897811a1ad9",
          opprettet: "2025-12-17T15:53:45.789027",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          gyldigTilOgMed: "2025-10-03",
          verdi: {
            verdi: 515,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87bd-7b4a-83a5-7897811a1adb",
          opprettet: "2025-12-17T15:53:45.789187",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-04",
          gyldigTilOgMed: "2025-10-04",
          verdi: {
            verdi: 515,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87bd-7b4a-83a5-7897811a1add",
          opprettet: "2025-12-17T15:53:45.789335",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-05",
          gyldigTilOgMed: "2025-10-05",
          verdi: {
            verdi: 515,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87bd-7b4a-83a5-7897811a1adf",
          opprettet: "2025-12-17T15:53:45.789479",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-06",
          gyldigTilOgMed: "2025-10-06",
          verdi: {
            verdi: 514,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87bd-7b4a-83a5-7897811a1ae1",
          opprettet: "2025-12-17T15:53:45.789717",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-07",
          gyldigTilOgMed: "2025-10-07",
          verdi: {
            verdi: 513,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87bd-7b4a-83a5-7897811a1ae3",
          opprettet: "2025-12-17T15:53:45.789868",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-08",
          gyldigTilOgMed: "2025-10-08",
          verdi: {
            verdi: 512,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87be-7922-8c98-ae169cfa1430",
          opprettet: "2025-12-17T15:53:45.790016",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-09",
          gyldigTilOgMed: "2025-10-09",
          verdi: {
            verdi: 511,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87be-7922-8c98-ae169cfa1432",
          opprettet: "2025-12-17T15:53:45.790303",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-10",
          gyldigTilOgMed: "2025-10-10",
          verdi: {
            verdi: 510,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87be-7922-8c98-ae169cfa1434",
          opprettet: "2025-12-17T15:53:45.790735",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-11",
          gyldigTilOgMed: "2025-10-11",
          verdi: {
            verdi: 510,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2ccd-87be-7922-8c98-ae169cfa1436",
          opprettet: "2025-12-17T15:53:45.790906",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-12",
          gyldigTilOgMed: "2025-10-12",
          verdi: {
            verdi: 510,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d831-7d79-863d-135cf347e65a",
          opprettet: "2025-12-17T16:13:46.033738",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-13",
          gyldigTilOgMed: "2025-10-13",
          verdi: {
            verdi: 509,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d831-7d79-863d-135cf347e65c",
          opprettet: "2025-12-17T16:13:46.033935",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-14",
          gyldigTilOgMed: "2025-10-14",
          verdi: {
            verdi: 508,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d832-7d5b-8c14-3111f11f2564",
          opprettet: "2025-12-17T16:13:46.03413",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-15",
          gyldigTilOgMed: "2025-10-15",
          verdi: {
            verdi: 507,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d832-7d5b-8c14-3111f11f2566",
          opprettet: "2025-12-17T16:13:46.034321",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-16",
          gyldigTilOgMed: "2025-10-16",
          verdi: {
            verdi: 506,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d832-7d5b-8c14-3111f11f2568",
          opprettet: "2025-12-17T16:13:46.034533",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-17",
          gyldigTilOgMed: "2025-10-17",
          verdi: {
            verdi: 505,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d832-7d5b-8c14-3111f11f256a",
          opprettet: "2025-12-17T16:13:46.034757",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-18",
          gyldigTilOgMed: "2025-10-18",
          verdi: {
            verdi: 505,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d832-7d5b-8c14-3111f11f256c",
          opprettet: "2025-12-17T16:13:46.034961",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-19",
          gyldigTilOgMed: "2025-10-19",
          verdi: {
            verdi: 505,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d833-785e-8d43-2cb9ae0332e8",
          opprettet: "2025-12-17T16:13:46.035187",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-20",
          gyldigTilOgMed: "2025-10-20",
          verdi: {
            verdi: 504,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d833-785e-8d43-2cb9ae0332ea",
          opprettet: "2025-12-17T16:13:46.035411",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-21",
          gyldigTilOgMed: "2025-10-21",
          verdi: {
            verdi: 503,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d833-785e-8d43-2cb9ae0332ec",
          opprettet: "2025-12-17T16:13:46.035664",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-22",
          gyldigTilOgMed: "2025-10-22",
          verdi: {
            verdi: 502,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d833-785e-8d43-2cb9ae0332ee",
          opprettet: "2025-12-17T16:13:46.035856",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-23",
          gyldigTilOgMed: "2025-10-23",
          verdi: {
            verdi: 501,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d834-72ae-937e-53a74170f1b5",
          opprettet: "2025-12-17T16:13:46.036042",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-24",
          gyldigTilOgMed: "2025-10-24",
          verdi: {
            verdi: 500,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d834-72ae-937e-53a74170f1b7",
          opprettet: "2025-12-17T16:13:46.036243",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-25",
          gyldigTilOgMed: "2025-10-25",
          verdi: {
            verdi: 500,
            enhet: "dager",
            datatype: "heltall",
          },
        },
        {
          id: "019b2cdf-d834-72ae-937e-53a74170f1b9",
          opprettet: "2025-12-17T16:13:46.036429",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-26",
          gyldigTilOgMed: "2025-10-26",
          verdi: {
            verdi: 500,
            enhet: "dager",
            datatype: "heltall",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
  ],
  forslagOm: "Endring",
};
