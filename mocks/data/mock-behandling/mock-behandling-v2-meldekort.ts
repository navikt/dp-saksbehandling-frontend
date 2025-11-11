import { components } from "../../../openapi/behandling-typer";

export const mockBehandlingV2Meldekort: components["schemas"]["BehandlingsresultatV2"] = {
  behandlingId: "0199b8b8-4f28-7926-bfac-4459a0ebb34f",
  behandletHendelse: {
    datatype: "String",
    id: "0199b8b7-90ec-7522-96f7-c4e9b2366802",
    type: "Meldekort",
  },
  kreverTotrinnskontroll: true,
  basertPå: "0199a9ab-b8e3-78c3-b0f5-9692c6702209",
  tilstand: "ForslagTilVedtak",
  automatisk: false,
  ident: "28848898122",
  avklaringer: [
    {
      id: "0199b8b8-4f28-7926-bfac-4459a0ebb34d",
      kode: "MeldekortBehandling",
      tittel: "Beregning av meldekort",
      beskrivelse: "Behandlingen er opprettet av meldekort og kan ikke automatisk behandles",
      kanKvitteres: true,
      status: "Åpen",
      maskinelt: false,
      sistEndret: "2025-10-06T10:51:50.696966",
    },
  ],
  vilkår: [
    {
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
      opplysningTypeId: "0194881f-943f-78d9-b874-00a4944c54f1",
      opplysninger: ["0194881f-943f-78d9-b874-00a4944c54f1"],
    },
    {
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
      opplysninger: ["01990a09-0eab-7957-b88f-14484a50e194"],
    },
    {
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
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877be1",
      opplysninger: ["0194881f-9442-707b-a6ee-e96c06877be1"],
    },
    {
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
      opplysningTypeId: "0194881f-91df-746a-a8ac-4a6b2b30685f",
      opplysninger: [
        "0194881f-91df-746a-a8ac-4a6b2b30685d",
        "0194881f-91df-746a-a8ac-4a6b2b30685e",
        "0194881f-91df-746a-a8ac-4a6b2b30685f",
      ],
    },
    {
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
      opplysningTypeId: "0194881f-9447-7e36-a569-3e9f42bff9f7",
      opplysninger: [
        "0194881f-9447-7e36-a569-3e9f42bff9f6",
        "0194881f-9447-7e36-a569-3e9f42bff9f7",
      ],
    },
  ],
  fastsettelser: [
    {
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
      ],
    },
    {
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
        "0194881f-9410-7481-b263-4606fdd10cbd",
        "0194881f-9410-7481-b263-4606fdd10cb6",
        "0194881f-9410-7481-b263-4606fdd10cb7",
        "0194881f-9410-7481-b263-4606fdd10cb8",
        "0194881f-9410-7481-b263-4606fdd10cb9",
      ],
    },
    {
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
      opplysninger: [
        "0194881f-943f-78d9-b874-00a4944c54f0",
        "019523aa-7941-7dd2-8c43-0644d7b43f57",
        "019523aa-980d-7805-b6ed-d701e7827998",
        "0194881f-943f-78d9-b874-00a4944c54ef",
      ],
    },
    {
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
      opplysninger: [
        "0194881f-9414-7823-8d29-0e25b7feb7ce",
        "0194881f-9414-7823-8d29-0e25b7feb7cf",
        "0194881f-9414-7823-8d29-0e25b7feb7d0",
      ],
    },
    {
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
    {
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
      opplysninger: [
        "0194881f-91d1-7df2-ba1d-4533f37fcc77",
        "0194881f-91d1-7df2-ba1d-4533f37fcc73",
        "0194881f-91d1-7df2-ba1d-4533f37fcc74",
        "0194881f-91d1-7df2-ba1d-4533f37fcc75",
        "0194881f-91d1-7df2-ba1d-4533f37fcc76",
      ],
    },
    {
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
      opplysninger: ["0194881f-9435-72a8-b1ce-9575cbc2a76a"],
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
          id: "0199a9ab-b8e3-78c3-b0f5-9692c6702204",
          opprettet: "2025-10-03T12:43:47.555133",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 15576997,
            datatype: "heltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T12:43:47.555122",
            meldingId: "0eafe1ac-aba0-4a24-9039-560bbcc4d631",
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
          id: "0199a9ab-b8e3-78c3-b0f5-9692c6702206",
          opprettet: "2025-10-03T12:43:47.555159",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "1246f84a-3946-431b-b633-4826b86e65a8",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T12:43:47.555158",
            meldingId: "0eafe1ac-aba0-4a24-9039-560bbcc4d631",
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
          id: "0199a9ab-b8e3-78c3-b0f5-9692c6702208",
          opprettet: "2025-10-03T12:43:47.555167",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          gyldigTilOgMed: "2025-10-03",
          verdi: {
            verdi: "SøknadInnsendtHendelse",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T12:43:47.555166",
            meldingId: "0eafe1ac-aba0-4a24-9039-560bbcc4d631",
          },
        },
        {
          id: "0199b8b8-4f28-7926-bfac-4459a0ebb34b",
          opprettet: "2025-10-06T10:51:50.696932",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-06",
          gyldigTilOgMed: "2025-10-06",
          verdi: {
            verdi: "BeregnMeldekortHendelse",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696926",
            meldingId: "7f147776-db25-463e-9c96-1817538a1c78",
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
          id: "0199a9ab-b8e4-7ea3-82dd-6d6fa03049af",
          opprettet: "2025-10-03T12:43:47.556332",
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
          id: "0199a9ab-ba26-7c77-8c19-5b93cdda79aa",
          opprettet: "2025-10-03T12:43:47.878581",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2025-10-03",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T12:43:47.842991",
            meldingId: "f1945f00-7c92-49de-81c6-8e8cbf1a96fd",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199a9ab-b8e3-78c3-b0f5-9692c6702206"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9ab-ba26-7c77-8c19-5b93cdda79ab",
          opprettet: "2025-10-03T12:43:47.878638",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2025-10-03",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T12:43:47.843195",
            meldingId: "f1945f00-7c92-49de-81c6-8e8cbf1a96fd",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199a9ab-b8e3-78c3-b0f5-9692c6702206"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9ab-ba26-7c77-8c19-5b93cdda79ac",
          opprettet: "2025-10-03T12:43:47.878651",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "1988-04-28",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T12:43:47.843352",
            meldingId: "f1945f00-7c92-49de-81c6-8e8cbf1a96fd",
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
          id: "0199a9ab-ba27-74e4-bec7-aa658ce67b72",
          opprettet: "2025-10-03T12:43:47.879053",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2025-10-03",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: [
              "0199a9ab-ba26-7c77-8c19-5b93cdda79aa",
              "0199a9ab-ba26-7c77-8c19-5b93cdda79ab",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9ab-ba27-74e4-bec7-aa658ce67b73",
          opprettet: "2025-10-03T12:43:47.879078",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2055-04-28",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "LeggTilÅr",
            },
            opplysninger: [
              "0199a9ab-b8e4-7ea3-82dd-6d6fa03049af",
              "0199a9ab-ba26-7c77-8c19-5b93cdda79ac",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9ab-ba27-74e4-bec7-aa658ce67b76",
          opprettet: "2025-10-03T12:43:47.879183",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2055-04-30",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteDagIMåned",
            },
            opplysninger: ["0199a9ab-ba27-74e4-bec7-aa658ce67b73"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194ff86-a035-7eb0-9c60-21899f7cc0c1",
      navn: "Kravet til reell arbeidssøker er vurdert",
      datatype: "boolsk",
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199a9ab-ba27-74e4-bec7-aa658ce67b7f",
          opprettet: "2025-10-03T12:43:47.879536",
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
          id: "0199a9ab-ba28-728d-b9f0-b6a69d14f97e",
          opprettet: "2025-10-03T12:43:47.880494",
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
          id: "0199a9ab-ba28-728d-b9f0-b6a69d14f97f",
          opprettet: "2025-10-03T12:43:47.8805",
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
          id: "0199a9ab-ba28-728d-b9f0-b6a69d14f980",
          opprettet: "2025-10-03T12:43:47.880506",
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
          id: "0199a9ab-ba28-728d-b9f0-b6a69d14f981",
          opprettet: "2025-10-03T12:43:47.880512",
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
          id: "0199a9ab-c0eb-7571-9cea-6e4100c240ef",
          opprettet: "2025-10-03T12:43:49.611511",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T12:43:49.567197",
            meldingId: "2fd5dd51-8c0e-43b7-8b52-5b9aca657523",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199a9ab-b8e3-78c3-b0f5-9692c6702206"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9ab-c0eb-7571-9cea-6e4100c240f0",
          opprettet: "2025-10-03T12:43:49.611567",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T12:43:49.567367",
            meldingId: "2fd5dd51-8c0e-43b7-8b52-5b9aca657523",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199a9ab-b8e3-78c3-b0f5-9692c6702206"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9ab-c0eb-7571-9cea-6e4100c240f1",
          opprettet: "2025-10-03T12:43:49.611606",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T12:43:49.567477",
            meldingId: "2fd5dd51-8c0e-43b7-8b52-5b9aca657523",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199a9ab-b8e3-78c3-b0f5-9692c6702206"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9ab-c0eb-7571-9cea-6e4100c240f2",
          opprettet: "2025-10-03T12:43:49.611649",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T12:43:49.567599",
            meldingId: "2fd5dd51-8c0e-43b7-8b52-5b9aca657523",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199a9ab-b8e3-78c3-b0f5-9692c6702206"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9ab-c0eb-7571-9cea-6e4100c240f3",
          opprettet: "2025-10-03T12:43:49.611678",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T12:43:49.567704",
            meldingId: "2fd5dd51-8c0e-43b7-8b52-5b9aca657523",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199a9ab-b8e3-78c3-b0f5-9692c6702206"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9ab-c0eb-7571-9cea-6e4100c240f4",
          opprettet: "2025-10-03T12:43:49.611696",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T12:43:49.5678",
            meldingId: "2fd5dd51-8c0e-43b7-8b52-5b9aca657523",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199a9ab-b8e3-78c3-b0f5-9692c6702206"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9ab-c0eb-7571-9cea-6e4100c240f5",
          opprettet: "2025-10-03T12:43:49.611729",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T12:43:49.567915",
            meldingId: "2fd5dd51-8c0e-43b7-8b52-5b9aca657523",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199a9ab-b8e3-78c3-b0f5-9692c6702206"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9ab-c0eb-7571-9cea-6e4100c240f6",
          opprettet: "2025-10-03T12:43:49.611757",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T12:43:49.568032",
            meldingId: "2fd5dd51-8c0e-43b7-8b52-5b9aca657523",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199a9ab-b8e3-78c3-b0f5-9692c6702206"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9ab-c0eb-7571-9cea-6e4100c240f7",
          opprettet: "2025-10-03T12:43:49.61179",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T12:43:49.568104",
            meldingId: "2fd5dd51-8c0e-43b7-8b52-5b9aca657523",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199a9ab-b8e3-78c3-b0f5-9692c6702206"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9ab-c0eb-7571-9cea-6e4100c240f8",
          opprettet: "2025-10-03T12:43:49.611818",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T12:43:49.568187",
            meldingId: "2fd5dd51-8c0e-43b7-8b52-5b9aca657523",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199a9ab-b8e3-78c3-b0f5-9692c6702206"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9ab-c0f0-7209-bbdc-889e2c2bc499",
          opprettet: "2025-10-03T12:43:49.616266",
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
              "0199a9ab-ba28-728d-b9f0-b6a69d14f97e",
              "0199a9ab-c0eb-7571-9cea-6e4100c240ef",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9ab-c0f0-7209-bbdc-889e2c2bc49a",
          opprettet: "2025-10-03T12:43:49.616281",
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
              "0199a9ab-ba28-728d-b9f0-b6a69d14f97f",
              "0199a9ab-c0eb-7571-9cea-6e4100c240f0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9ab-c0f0-7209-bbdc-889e2c2bc49b",
          opprettet: "2025-10-03T12:43:49.616295",
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
              "0199a9ab-ba28-728d-b9f0-b6a69d14f980",
              "0199a9ab-c0eb-7571-9cea-6e4100c240f1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9ab-c0f0-7209-bbdc-889e2c2bc49c",
          opprettet: "2025-10-03T12:43:49.616308",
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
            opplysninger: ["0199a9ab-c0eb-7571-9cea-6e4100c240f2"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9ab-c0f0-7209-bbdc-889e2c2bc49d",
          opprettet: "2025-10-03T12:43:49.616326",
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
              "0199a9ab-ba28-728d-b9f0-b6a69d14f981",
              "0199a9ab-c0eb-7571-9cea-6e4100c240f3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9ab-c0f0-7209-bbdc-889e2c2bc49f",
          opprettet: "2025-10-03T12:43:49.616358",
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
              "0199a9ab-c0eb-7571-9cea-6e4100c240f4",
              "0199a9ab-c0eb-7571-9cea-6e4100c240f5",
              "0199a9ab-c0eb-7571-9cea-6e4100c240f6",
              "0199a9ab-c0eb-7571-9cea-6e4100c240f7",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9ab-c0f0-7209-bbdc-889e2c2bc4a0",
          opprettet: "2025-10-03T12:43:49.616371",
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
            opplysninger: ["0199a9ab-c0eb-7571-9cea-6e4100c240f8"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9ab-c0f1-7865-8dfa-50bab16d03f5",
          opprettet: "2025-10-03T12:43:49.617345",
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
              "0199a9ab-c0f0-7209-bbdc-889e2c2bc499",
              "0199a9ab-c0f0-7209-bbdc-889e2c2bc49a",
              "0199a9ab-c0f0-7209-bbdc-889e2c2bc49b",
              "0199a9ab-c0f0-7209-bbdc-889e2c2bc49c",
              "0199a9ab-c0f0-7209-bbdc-889e2c2bc49d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9ab-c0f1-7865-8dfa-50bab16d03f6",
          opprettet: "2025-10-03T12:43:49.617375",
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
              "0199a9ab-c0eb-7571-9cea-6e4100c240f4",
              "0199a9ab-c0f0-7209-bbdc-889e2c2bc49f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9ab-c0f1-7865-8dfa-50bab16d03fa",
          opprettet: "2025-10-03T12:43:49.617831",
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
              "0199a9ab-c0eb-7571-9cea-6e4100c240f5",
              "0199a9ab-c0eb-7571-9cea-6e4100c240f6",
              "0199a9ab-c0eb-7571-9cea-6e4100c240f7",
              "0199a9ab-c0f1-7865-8dfa-50bab16d03f6",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-289c-712c-9672-a445ca4fac1a",
          opprettet: "2025-10-03T13:00:39.196526",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: "2025-10-03",
            datatype: "dato",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-10-03T13:00:39.123597",
            ident: "Z990310",
            begrunnelse: {
              verdi: "ok",
              sistEndret: "2025-10-03T13:01:54.994826",
            },
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
          id: "0199a9bb-28a3-7363-80b4-f1ae2977f8e0",
          opprettet: "2025-10-03T13:00:39.20371",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "FørEllerLik",
            },
            opplysninger: [
              "0199a9ab-ba27-74e4-bec7-aa658ce67b76",
              "0199a9bb-289c-712c-9672-a445ca4fac1a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-28a4-744f-8735-23c60dacb1cc",
          opprettet: "2025-10-03T13:00:39.204148",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: "2025-10-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-28a4-744f-8735-23c60dacb1cd",
          opprettet: "2025-10-03T13:00:39.2042",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 36,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-28a4-744f-8735-23c60dacb1ce",
          opprettet: "2025-10-03T13:00:39.204329",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-28a4-744f-8735-23c60dacb1cf",
          opprettet: "2025-10-03T13:00:39.204373",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 1.5,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-28a4-744f-8735-23c60dacb1d0",
          opprettet: "2025-10-03T13:00:39.204407",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 3,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-28a4-744f-8735-23c60dacb1d2",
          opprettet: "2025-10-03T13:00:39.204972",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: "2025-10-06",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "FørsteArbeidsdag",
            },
            opplysninger: ["0199a9bb-28a4-744f-8735-23c60dacb1cc"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-28a5-7146-9d3a-43b91ec09d3e",
          opprettet: "2025-10-03T13:00:39.205062",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 195240,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199a9bb-28a4-744f-8735-23c60dacb1ce",
              "0199a9bb-28a4-744f-8735-23c60dacb1cf",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-28a5-7146-9d3a-43b91ec09d3f",
          opprettet: "2025-10-03T13:00:39.205104",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199a9bb-28a4-744f-8735-23c60dacb1ce",
              "0199a9bb-28a4-744f-8735-23c60dacb1d0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-28a5-7146-9d3a-43b91ec09d41",
          opprettet: "2025-10-03T13:00:39.205393",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: "2025-08-31",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteavsluttendeKalenderMåned",
            },
            opplysninger: [
              "0199a9bb-289c-712c-9672-a445ca4fac1a",
              "0199a9bb-28a4-744f-8735-23c60dacb1d2",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-28a5-7146-9d3a-43b91ec09d43",
          opprettet: "2025-10-03T13:00:39.205686",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: "2022-09-01",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "TrekkFraMåned",
            },
            opplysninger: [
              "0199a9bb-28a4-744f-8735-23c60dacb1cd",
              "0199a9bb-28a5-7146-9d3a-43b91ec09d41",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29f9-798f-8b26-9a11986e5742",
          opprettet: "2025-10-03T13:00:39.545392",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: "01K6MTQG4MRA89Y9WN411E6815",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T13:00:39.481971",
            meldingId: "35c46011-7150-41f4-b2d4-4bb9b7f47095",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: [
              "0199a9bb-289c-712c-9672-a445ca4fac1a",
              "0199a9bb-28a5-7146-9d3a-43b91ec09d41",
              "0199a9bb-28a5-7146-9d3a-43b91ec09d43",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29f9-798f-8b26-9a11986e5744",
          opprettet: "2025-10-03T13:00:39.545973",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: "01K6MTQG4MRA89Y9WN411E6815",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["0199a9bb-29f9-798f-8b26-9a11986e5742"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fa-7437-9b2d-bb8498dc4f17",
          opprettet: "2025-10-03T13:00:39.546376",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 300000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0199a9bb-29f9-798f-8b26-9a11986e5744"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fa-7437-9b2d-bb8498dc4f18",
          opprettet: "2025-10-03T13:00:39.546632",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 850000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0199a9bb-29f9-798f-8b26-9a11986e5744"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fa-7437-9b2d-bb8498dc4f1a",
          opprettet: "2025-10-03T13:00:39.546996",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "0199a9bb-28a5-7146-9d3a-43b91ec09d3e",
              "0199a9bb-29fa-7437-9b2d-bb8498dc4f17",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fb-7e98-889f-9b02d2924975",
          opprettet: "2025-10-03T13:00:39.547032",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "0199a9bb-28a5-7146-9d3a-43b91ec09d3f",
              "0199a9bb-29fa-7437-9b2d-bb8498dc4f18",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fb-7e98-889f-9b02d2924977",
          opprettet: "2025-10-03T13:00:39.547286",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "0199a9bb-29fa-7437-9b2d-bb8498dc4f1a",
              "0199a9bb-29fb-7e98-889f-9b02d2924975",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fb-7e98-889f-9b02d2924979",
          opprettet: "2025-10-03T13:00:39.547674",
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
          id: "0199a9bb-29fb-7e98-889f-9b02d292497a",
          opprettet: "2025-10-03T13:00:39.547695",
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
          id: "0199a9bb-29fb-7e98-889f-9b02d292497b",
          opprettet: "2025-10-03T13:00:39.547714",
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
          id: "0199a9bb-29fb-7e98-889f-9b02d292497c",
          opprettet: "2025-10-03T13:00:39.547798",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fb-7e98-889f-9b02d292497d",
          opprettet: "2025-10-03T13:00:39.547858",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: "01K6MTQG4MRA89Y9WN411E6815",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["0199a9bb-29f9-798f-8b26-9a11986e5742"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fb-7e98-889f-9b02d292497e",
          opprettet: "2025-10-03T13:00:39.547899",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 6,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c9388",
          opprettet: "2025-10-03T13:00:39.548023",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c9389",
          opprettet: "2025-10-03T13:00:39.548057",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 3,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9421-766c-9dc6-41fe6c9a1e04",
      navn: "Grunnlag for verneplikt hvis kravet ikke er oppfylt",
      datatype: "penger",
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199a9bb-29fc-7f91-bebd-1022811c938a",
          opprettet: "2025-10-03T13:00:39.54808",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c938b",
          opprettet: "2025-10-03T13:00:39.548129",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 0.0024,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c938c",
          opprettet: "2025-10-03T13:00:39.548181",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 37,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c938d",
          opprettet: "2025-10-03T13:00:39.548209",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 0.9,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c938e",
          opprettet: "2025-10-03T13:00:39.548235",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 260,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c938f",
          opprettet: "2025-10-03T13:00:39.54839",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c9390",
          opprettet: "2025-10-03T13:00:39.548422",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c9391",
          opprettet: "2025-10-03T13:00:39.548446",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c9392",
          opprettet: "2025-10-03T13:00:39.548462",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c9393",
          opprettet: "2025-10-03T13:00:39.548478",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c9394",
          opprettet: "2025-10-03T13:00:39.548495",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c9395",
          opprettet: "2025-10-03T13:00:39.548511",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c9396",
          opprettet: "2025-10-03T13:00:39.548527",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c9397",
          opprettet: "2025-10-03T13:00:39.548545",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c9398",
          opprettet: "2025-10-03T13:00:39.548561",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c9399",
          opprettet: "2025-10-03T13:00:39.548578",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c939a",
          opprettet: "2025-10-03T13:00:39.548595",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c939b",
          opprettet: "2025-10-03T13:00:39.54868",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c939c",
          opprettet: "2025-10-03T13:00:39.54871",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 37.5,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c939d",
          opprettet: "2025-10-03T13:00:39.548728",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c939e",
          opprettet: "2025-10-03T13:00:39.54875",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c939f",
          opprettet: "2025-10-03T13:00:39.548772",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c93a0",
          opprettet: "2025-10-03T13:00:39.548794",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 50,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c93a1",
          opprettet: "2025-10-03T13:00:39.548812",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c93a2",
          opprettet: "2025-10-03T13:00:39.54883",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c93a3",
          opprettet: "2025-10-03T13:00:39.548849",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c93a4",
          opprettet: "2025-10-03T13:00:39.548868",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c93a5",
          opprettet: "2025-10-03T13:00:39.548891",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c93a6",
          opprettet: "2025-10-03T13:00:39.548915",
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
          id: "0199a9bb-29fc-7f91-bebd-1022811c93a7",
          opprettet: "2025-10-03T13:00:39.548985",
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
          id: "0199a9bb-29fd-7233-b596-9bafc47ec7c8",
          opprettet: "2025-10-03T13:00:39.549019",
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
          id: "0199a9bb-29fd-7233-b596-9bafc47ec7c9",
          opprettet: "2025-10-03T13:00:39.549052",
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
          id: "0199a9bb-29fd-7233-b596-9bafc47ec7ca",
          opprettet: "2025-10-03T13:00:39.549083",
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
          id: "0199a9bb-29fd-7233-b596-9bafc47ec7cb",
          opprettet: "2025-10-03T13:00:39.549118",
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
          id: "0199a9bb-29fd-7233-b596-9bafc47ec7cd",
          opprettet: "2025-10-03T13:00:39.549576",
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
            opplysninger: ["0199a9bb-29fb-7e98-889f-9b02d292497b"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fe-7907-ab80-8b8c276a7113",
          opprettet: "2025-10-03T13:00:39.550243",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: "01K6MTQG4MRA89Y9WN411E6815",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Oppjuster",
            },
            opplysninger: [
              "0199a9bb-29fb-7e98-889f-9b02d292497c",
              "0199a9bb-29fb-7e98-889f-9b02d292497d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fe-7907-ab80-8b8c276a7114",
          opprettet: "2025-10-03T13:00:39.550327",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199a9bb-29fb-7e98-889f-9b02d292497c",
              "0199a9bb-29fb-7e98-889f-9b02d292497e",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fe-7907-ab80-8b8c276a7115",
          opprettet: "2025-10-03T13:00:39.55037",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199a9bb-29fb-7e98-889f-9b02d292497c",
              "0199a9bb-29fc-7f91-bebd-1022811c9389",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fe-7907-ab80-8b8c276a7116",
          opprettet: "2025-10-03T13:00:39.550411",
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
            opplysninger: ["0199a9bb-29fc-7f91-bebd-1022811c9393"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fe-7907-ab80-8b8c276a7117",
          opprettet: "2025-10-03T13:00:39.550459",
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
              "0199a9bb-29fc-7f91-bebd-1022811c9398",
              "0199a9bb-29fc-7f91-bebd-1022811c9399",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fe-7907-ab80-8b8c276a7118",
          opprettet: "2025-10-03T13:00:39.550508",
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
              "0199a9bb-29fc-7f91-bebd-1022811c939d",
              "0199a9bb-29fc-7f91-bebd-1022811c939e",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fe-7907-ab80-8b8c276a7119",
          opprettet: "2025-10-03T13:00:39.550552",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 50,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "0199a9ab-c0eb-7571-9cea-6e4100c240f7",
              "0199a9bb-29fc-7f91-bebd-1022811c939f",
              "0199a9bb-29fc-7f91-bebd-1022811c93a0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fe-7907-ab80-8b8c276a711a",
          opprettet: "2025-10-03T13:00:39.550596",
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
              "0199a9bb-29fc-7f91-bebd-1022811c93a1",
              "0199a9bb-29fc-7f91-bebd-1022811c93a2",
              "0199a9bb-29fc-7f91-bebd-1022811c93a3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fe-7907-ab80-8b8c276a711b",
          opprettet: "2025-10-03T13:00:39.550648",
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
              "0199a9bb-29fc-7f91-bebd-1022811c93a5",
              "0199a9bb-29fc-7f91-bebd-1022811c93a6",
              "0199a9bb-29fc-7f91-bebd-1022811c93a7",
              "0199a9bb-29fd-7233-b596-9bafc47ec7c8",
              "0199a9bb-29fd-7233-b596-9bafc47ec7c9",
              "0199a9bb-29fd-7233-b596-9bafc47ec7ca",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29fe-7907-ab80-8b8c276a711c",
          opprettet: "2025-10-03T13:00:39.55069",
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
            opplysninger: ["0199a9bb-29fd-7233-b596-9bafc47ec7cb"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29ff-7ae3-b07a-0ddde0fca590",
          opprettet: "2025-10-03T13:00:39.551441",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 309888.0897861773,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0199a9bb-29fe-7907-ab80-8b8c276a7113"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29ff-7ae3-b07a-0ddde0fca591",
          opprettet: "2025-10-03T13:00:39.551562",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 324401.1347598902,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0199a9bb-29fe-7907-ab80-8b8c276a7113"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29ff-7ae3-b07a-0ddde0fca592",
          opprettet: "2025-10-03T13:00:39.551716",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 284867.81132915954,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0199a9bb-29fe-7907-ab80-8b8c276a7113"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29ff-7ae3-b07a-0ddde0fca593",
          opprettet: "2025-10-03T13:00:39.551774",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "0199a9ab-c0f0-7209-bbdc-889e2c2bc4a0",
              "0199a9bb-29fc-7f91-bebd-1022811c938a",
              "0199a9bb-29fe-7907-ab80-8b8c276a7115",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-29ff-7ae3-b07a-0ddde0fca594",
          opprettet: "2025-10-03T13:00:39.551817",
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
              "0199a9bb-29fc-7f91-bebd-1022811c9394",
              "0199a9bb-29fc-7f91-bebd-1022811c9395",
              "0199a9bb-29fe-7907-ab80-8b8c276a7116",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2a00-7558-ab9d-dde25944a787",
          opprettet: "2025-10-03T13:00:39.552408",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 309888.0897861773,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "0199a9bb-29fe-7907-ab80-8b8c276a7114",
              "0199a9bb-29ff-7ae3-b07a-0ddde0fca590",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2a00-7558-ab9d-dde25944a788",
          opprettet: "2025-10-03T13:00:39.552461",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 309888.0897861773,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "0199a9bb-29fe-7907-ab80-8b8c276a7114",
              "0199a9bb-29ff-7ae3-b07a-0ddde0fca590",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2a00-7558-ab9d-dde25944a789",
          opprettet: "2025-10-03T13:00:39.552496",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 324401.1347598902,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "0199a9bb-29fe-7907-ab80-8b8c276a7114",
              "0199a9bb-29ff-7ae3-b07a-0ddde0fca591",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2a00-7558-ab9d-dde25944a78a",
          opprettet: "2025-10-03T13:00:39.552531",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 284867.81132915954,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "0199a9bb-29fe-7907-ab80-8b8c276a7114",
              "0199a9bb-29ff-7ae3-b07a-0ddde0fca592",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2a00-7558-ab9d-dde25944a78b",
          opprettet: "2025-10-03T13:00:39.552625",
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
              "0199a9bb-29fc-7f91-bebd-1022811c938f",
              "0199a9bb-29fc-7f91-bebd-1022811c9390",
              "0199a9bb-29fc-7f91-bebd-1022811c9391",
              "0199a9bb-29fc-7f91-bebd-1022811c9392",
              "0199a9bb-29fc-7f91-bebd-1022811c9396",
              "0199a9bb-29fc-7f91-bebd-1022811c9397",
              "0199a9bb-29ff-7ae3-b07a-0ddde0fca594",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2a01-761f-9433-eb9be531f711",
          opprettet: "2025-10-03T13:00:39.553325",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 919157.0358752271,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SumAv",
            },
            opplysninger: [
              "0199a9bb-2a00-7558-ab9d-dde25944a788",
              "0199a9bb-2a00-7558-ab9d-dde25944a789",
              "0199a9bb-2a00-7558-ab9d-dde25944a78a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2a01-761f-9433-eb9be531f713",
          opprettet: "2025-10-03T13:00:39.553823",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 306385.67862507567,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "0199a9bb-29fc-7f91-bebd-1022811c9388",
              "0199a9bb-2a01-761f-9433-eb9be531f711",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2a02-7a57-9789-ef234a524f84",
          opprettet: "2025-10-03T13:00:39.554507",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 309888.0897861773,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "0199a9bb-2a00-7558-ab9d-dde25944a787",
              "0199a9bb-2a01-761f-9433-eb9be531f713",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2a03-79ff-91fa-52eb59068463",
          opprettet: "2025-10-03T13:00:39.555306",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 309888,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["0199a9bb-2a02-7a57-9789-ef234a524f84"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2a03-79ff-91fa-52eb59068465",
          opprettet: "2025-10-03T13:00:39.555974",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 309888,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "0199a9bb-29ff-7ae3-b07a-0ddde0fca593",
              "0199a9bb-2a03-79ff-91fa-52eb59068463",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2a04-7545-8a32-c752461b5229",
          opprettet: "2025-10-03T13:00:39.556036",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "0199a9bb-29ff-7ae3-b07a-0ddde0fca593",
              "0199a9bb-2a03-79ff-91fa-52eb59068463",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2a04-7545-8a32-c752461b522b",
          opprettet: "2025-10-03T13:00:39.556696",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 743.7312,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199a9bb-29fc-7f91-bebd-1022811c938b",
              "0199a9bb-2a03-79ff-91fa-52eb59068465",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2a04-7545-8a32-c752461b522c",
          opprettet: "2025-10-03T13:00:39.556763",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 278899.2,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199a9bb-29fc-7f91-bebd-1022811c938d",
              "0199a9bb-2a03-79ff-91fa-52eb59068465",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2a04-7545-8a32-c752461b522d",
          opprettet: "2025-10-03T13:00:39.556812",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 37.5,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "0199a9bb-29fc-7f91-bebd-1022811c939c",
              "0199a9bb-29fc-7f91-bebd-1022811c939d",
              "0199a9bb-2a04-7545-8a32-c752461b5229",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2a05-70df-8d8b-03c3e66bbb2d",
          opprettet: "2025-10-03T13:00:39.557363",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 744,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["0199a9bb-2a04-7545-8a32-c752461b522b"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2a05-70df-8d8b-03c3e66bbb2e",
          opprettet: "2025-10-03T13:00:39.557456",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 1072.6892307692308,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "0199a9bb-29fc-7f91-bebd-1022811c938e",
              "0199a9bb-2a04-7545-8a32-c752461b522c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2a05-70df-8d8b-03c3e66bbb2f",
          opprettet: "2025-10-03T13:00:39.557498",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 37.5,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "0199a9ab-c0eb-7571-9cea-6e4100c240f3",
              "0199a9bb-29fc-7f91-bebd-1022811c939b",
              "0199a9bb-29fe-7907-ab80-8b8c276a7118",
              "0199a9bb-2a04-7545-8a32-c752461b522d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2a06-73c4-894d-c30f181b5c37",
          opprettet: "2025-10-03T13:00:39.558092",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 1073,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["0199a9bb-2a05-70df-8d8b-03c3e66bbb2e"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2a06-73c4-894d-c30f181b5c38",
          opprettet: "2025-10-03T13:00:39.558156",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "SjekkAvTerskel",
            },
            opplysninger: [
              "0199a9bb-29fc-7f91-bebd-1022811c939a",
              "0199a9bb-29fe-7907-ab80-8b8c276a7119",
              "0199a9bb-2a05-70df-8d8b-03c3e66bbb2f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2d68-73e6-a076-59258b058e71",
          opprettet: "2025-10-03T13:00:40.424147",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T13:00:40.341489",
            meldingId: "f2e574ed-3334-40da-8980-6dc1985c6c9b",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199a9ab-b8e3-78c3-b0f5-9692c6702206"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2d68-73e6-a076-59258b058e72",
          opprettet: "2025-10-03T13:00:40.424339",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: [],
            datatype: "barn",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T13:00:40.341643",
            meldingId: "f2e574ed-3334-40da-8980-6dc1985c6c9b",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199a9ab-b8e3-78c3-b0f5-9692c6702206"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
      redigertAvSaksbehandler: true,
      formål: "Bruker",
      perioder: [
        {
          id: "0199c8da-7f86-7956-b775-58e6d5ad5fe7",
          opprettet: "2025-10-09T14:03:06.758422",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigTilOgMed: "2025-10-10",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-10-09T14:03:06.623012",
            ident: "Z993298",
            begrunnelse: {
              verdi: "ø",
              sistEndret: "2025-10-09T14:03:06.622998",
            },
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
          id: "0199a9bb-2d68-73e6-a076-59258b058e74",
          opprettet: "2025-10-03T13:00:40.42454",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T13:00:40.341854",
            meldingId: "f2e574ed-3334-40da-8980-6dc1985c6c9b",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199a9ab-b8e3-78c3-b0f5-9692c6702206"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2d68-73e6-a076-59258b058e75",
          opprettet: "2025-10-03T13:00:40.424606",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T13:00:40.341972",
            meldingId: "f2e574ed-3334-40da-8980-6dc1985c6c9b",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2d68-73e6-a076-59258b058e76",
          opprettet: "2025-10-03T13:00:40.424683",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T13:00:40.342074",
            meldingId: "f2e574ed-3334-40da-8980-6dc1985c6c9b",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2d68-73e6-a076-59258b058e77",
          opprettet: "2025-10-03T13:00:40.424751",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T13:00:40.342165",
            meldingId: "f2e574ed-3334-40da-8980-6dc1985c6c9b",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2d68-73e6-a076-59258b058e78",
          opprettet: "2025-10-03T13:00:40.424823",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T13:00:40.342249",
            meldingId: "f2e574ed-3334-40da-8980-6dc1985c6c9b",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2d68-73e6-a076-59258b058e79",
          opprettet: "2025-10-03T13:00:40.424956",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T13:00:40.342364",
            meldingId: "f2e574ed-3334-40da-8980-6dc1985c6c9b",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2d69-7a6d-8e5e-1ddda0248fc8",
          opprettet: "2025-10-03T13:00:40.42503",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T13:00:40.342458",
            meldingId: "f2e574ed-3334-40da-8980-6dc1985c6c9b",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2d6a-74b0-bef6-1d0097c8270c",
          opprettet: "2025-10-03T13:00:40.426091",
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
            opplysninger: ["0199a9bb-2d68-73e6-a076-59258b058e71"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2d6a-74b0-bef6-1d0097c8270d",
          opprettet: "2025-10-03T13:00:40.426161",
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
            opplysninger: ["0199a9bb-2d68-73e6-a076-59258b058e72"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2d6a-74b0-bef6-1d0097c8270e",
          opprettet: "2025-10-03T13:00:40.426225",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "0199a9bb-29fe-7907-ab80-8b8c276a7116",
              "0199a9bb-2d68-73e6-a076-59258b058e75",
              "0199a9bb-2d68-73e6-a076-59258b058e76",
              "0199a9bb-2d68-73e6-a076-59258b058e77",
              "0199a9bb-2d68-73e6-a076-59258b058e78",
              "0199a9bb-2d68-73e6-a076-59258b058e79",
              "0199a9bb-2d69-7a6d-8e5e-1ddda0248fc8",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199c8da-7f98-7b50-94d4-92de60ad19d9",
          opprettet: "2025-10-09T14:03:06.776699",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigTilOgMed: "2025-10-10",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: ["0199c8da-7f86-7956-b775-58e6d5ad5fe7"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-16.55-bedb2b5",
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
          id: "0199a9bb-2d6a-74b0-bef6-1d0097c82710",
          opprettet: "2025-10-03T13:00:40.426302",
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
            opplysninger: ["0199a9bb-2d68-73e6-a076-59258b058e74"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2d6a-74b0-bef6-1d0097c82711",
          opprettet: "2025-10-03T13:00:40.426341",
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
            opplysninger: ["0199a9bb-2d68-73e6-a076-59258b058e74"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2d6a-74b0-bef6-1d0097c82713",
          opprettet: "2025-10-03T13:00:40.426872",
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
              "0199a9bb-29fb-7e98-889f-9b02d292497a",
              "0199a9bb-2d6a-74b0-bef6-1d0097c8270c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2d6b-771c-88b1-765ef3db2fee",
          opprettet: "2025-10-03T13:00:40.427024",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199a9bb-29fc-7f91-bebd-1022811c938c",
              "0199a9bb-2d6a-74b0-bef6-1d0097c8270d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199c8da-7f9a-773c-8b83-c3feeec6a4d2",
          opprettet: "2025-10-09T14:03:06.778772",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-03",
          gyldigTilOgMed: "2025-10-10",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "0199a9bb-29fc-7f91-bebd-1022811c93a4",
              "0199a9bb-29fe-7907-ab80-8b8c276a711a",
              "0199a9bb-2a06-73c4-894d-c30f181b5c38",
              "0199c8da-7f98-7b50-94d4-92de60ad19d9",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-16.55-bedb2b5",
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
          id: "0199a9bb-2d6b-771c-88b1-765ef3db2ff0",
          opprettet: "2025-10-03T13:00:40.427135",
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
              "0199a9bb-29fe-7907-ab80-8b8c276a711b",
              "0199a9bb-2d6a-74b0-bef6-1d0097c82710",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2d6b-771c-88b1-765ef3db2ff2",
          opprettet: "2025-10-03T13:00:40.427695",
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
              "0199a9bb-29fd-7233-b596-9bafc47ec7cd",
              "0199a9bb-2d6a-74b0-bef6-1d0097c82713",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2d6b-771c-88b1-765ef3db2ff3",
          opprettet: "2025-10-03T13:00:40.427801",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 744,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "0199a9bb-2a05-70df-8d8b-03c3e66bbb2d",
              "0199a9bb-2d6b-771c-88b1-765ef3db2fee",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2d6b-771c-88b1-765ef3db2ff4",
          opprettet: "2025-10-03T13:00:40.427882",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "0199a9bb-29fc-7f91-bebd-1022811c938c",
              "0199a9bb-2d6b-771c-88b1-765ef3db2fee",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2d6c-7c5b-a533-3f22432210c2",
          opprettet: "2025-10-03T13:00:40.428636",
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
              "0199a9bb-2d6a-74b0-bef6-1d0097c82711",
              "0199a9bb-2d6b-771c-88b1-765ef3db2ff0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2d6d-7380-8eec-98ecf90b594f",
          opprettet: "2025-10-03T13:00:40.429993",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "0199a9bb-2a06-73c4-894d-c30f181b5c37",
              "0199a9bb-2d6b-771c-88b1-765ef3db2ff3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2d6f-725e-b211-6e3fa93328a7",
          opprettet: "2025-10-03T13:00:40.431356",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 744,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "0199a9bb-2a05-70df-8d8b-03c3e66bbb2d",
              "0199a9bb-2d6d-7380-8eec-98ecf90b594f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2d70-7144-8147-a04ae61a565e",
          opprettet: "2025-10-03T13:00:40.432329",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "0199a9bb-2a00-7558-ab9d-dde25944a78b",
              "0199a9bb-2d6f-725e-b211-6e3fa93328a7",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2d70-7144-8147-a04ae61a565f",
          opprettet: "2025-10-03T13:00:40.432466",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 744,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "0199a9bb-2a00-7558-ab9d-dde25944a78b",
              "0199a9bb-2d6f-725e-b211-6e3fa93328a7",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-2d71-7347-a54e-64a5897d8ae5",
          opprettet: "2025-10-03T13:00:40.433827",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "0199a9bb-2d6b-771c-88b1-765ef3db2ff4",
              "0199a9bb-2d70-7144-8147-a04ae61a565e",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70bc-7c78-af8e-c68ea2a01392",
          opprettet: "2025-10-03T13:00:57.660236",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-01",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-10-03T13:00:57.590818",
            ident: "Z990310",
            begrunnelse: {
              verdi: "ok",
              sistEndret: "2025-10-03T13:00:57.590802",
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
          id: "0199a9bb-70be-71f6-b988-0de02ec7214c",
          opprettet: "2025-10-03T13:00:57.662194",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "0199a9bb-29fe-7907-ab80-8b8c276a7114",
              "0199a9bb-29ff-7ae3-b07a-0ddde0fca590",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70be-71f6-b988-0de02ec7214d",
          opprettet: "2025-10-03T13:00:57.662268",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "0199a9bb-29fe-7907-ab80-8b8c276a7114",
              "0199a9bb-29ff-7ae3-b07a-0ddde0fca591",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70be-71f6-b988-0de02ec7214e",
          opprettet: "2025-10-03T13:00:57.662323",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "0199a9bb-29fe-7907-ab80-8b8c276a7114",
              "0199a9bb-29ff-7ae3-b07a-0ddde0fca592",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70be-71f6-b988-0de02ec7214f",
          opprettet: "2025-10-03T13:00:57.662379",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: "Inntekt etter avkortning og oppjustering siste 12 måneder",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Brukt",
            },
            opplysninger: ["0199a9bb-2a02-7a57-9789-ef234a524f84"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70be-71f6-b988-0de02ec72150",
          opprettet: "2025-10-03T13:00:57.662548",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 300000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0199a9bb-29fb-7e98-889f-9b02d292497d"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70be-71f6-b988-0de02ec72151",
          opprettet: "2025-10-03T13:00:57.662693",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 300000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0199a9bb-29fb-7e98-889f-9b02d292497d"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70be-71f6-b988-0de02ec72152",
          opprettet: "2025-10-03T13:00:57.662784",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 250000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0199a9bb-29fb-7e98-889f-9b02d292497d"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70be-71f6-b988-0de02ec72153",
          opprettet: "2025-10-03T13:00:57.662836",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 5,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70be-71f6-b988-0de02ec72154",
          opprettet: "2025-10-03T13:00:57.662916",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 0.03,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70be-71f6-b988-0de02ec72155",
          opprettet: "2025-10-03T13:00:57.662997",
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
          id: "0199a9bb-70bf-7add-9b49-3216e8dbca3b",
          opprettet: "2025-10-03T13:00:57.663041",
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
          id: "0199a9bb-70bf-7add-9b49-3216e8dbca3c",
          opprettet: "2025-10-03T13:00:57.663083",
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
          id: "0199a9bb-70bf-7add-9b49-3216e8dbca3d",
          opprettet: "2025-10-03T13:00:57.66312",
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
          id: "0199a9bb-70bf-7add-9b49-3216e8dbca3e",
          opprettet: "2025-10-03T13:00:57.663159",
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
          id: "0199a9bb-70bf-7add-9b49-3216e8dbca3f",
          opprettet: "2025-10-03T13:00:57.663197",
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
          id: "0199a9bb-70bf-7add-9b49-3216e8dbca40",
          opprettet: "2025-10-03T13:00:57.663245",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 2,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70bf-7add-9b49-3216e8dbca41",
          opprettet: "2025-10-03T13:00:57.663289",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 104,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70bf-7add-9b49-3216e8dbca42",
          opprettet: "2025-10-03T13:00:57.663331",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 52,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70bf-7add-9b49-3216e8dbca43",
          opprettet: "2025-10-03T13:00:57.663485",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 283333.3333333333,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "0199a9bb-29fa-7437-9b2d-bb8498dc4f18",
              "0199a9bb-29fc-7f91-bebd-1022811c9388",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70bf-7add-9b49-3216e8dbca44",
          opprettet: "2025-10-03T13:00:57.663537",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 2,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70bf-7add-9b49-3216e8dbca45",
          opprettet: "2025-10-03T13:00:57.663582",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 0,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70bf-7add-9b49-3216e8dbca46",
          opprettet: "2025-10-03T13:00:57.66363",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 5,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70bf-7add-9b49-3216e8dbca47",
          opprettet: "2025-10-03T13:00:57.663672",
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
          id: "0199a9bb-70bf-7add-9b49-3216e8dbca48",
          opprettet: "2025-10-03T13:00:57.663717",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 3,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70bf-7add-9b49-3216e8dbca49",
          opprettet: "2025-10-03T13:00:57.663757",
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
          id: "0199a9bb-70bf-7add-9b49-3216e8dbca4a",
          opprettet: "2025-10-03T13:00:57.663801",
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
          id: "0199a9bb-70bf-7add-9b49-3216e8dbca4b",
          opprettet: "2025-10-03T13:00:57.663842",
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
          id: "0199a9bb-70bf-7add-9b49-3216e8dbca4c",
          opprettet: "2025-10-03T13:00:57.663892",
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
          id: "0199a9bb-70bf-7add-9b49-3216e8dbca4d",
          opprettet: "2025-10-03T13:00:57.663973",
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
          id: "0199a9bb-70c0-7ec6-adeb-1a944a73071f",
          opprettet: "2025-10-03T13:00:57.664017",
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
          id: "0199a9bb-70c0-7ec6-adeb-1a944a730720",
          opprettet: "2025-10-03T13:00:57.664069",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 26,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["0199a9bb-289c-712c-9672-a445ca4fac1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c1-77a1-8690-3b5a585447c6",
          opprettet: "2025-10-03T13:00:57.665125",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "0199a9bb-70be-71f6-b988-0de02ec7214c",
              "0199a9bb-70be-71f6-b988-0de02ec7214d",
              "0199a9bb-70be-71f6-b988-0de02ec7214e",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c1-77a1-8690-3b5a585447c7",
          opprettet: "2025-10-03T13:00:57.665217",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 3720,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199a9bb-2d70-7144-8147-a04ae61a565f",
              "0199a9bb-70be-71f6-b988-0de02ec72153",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c1-77a1-8690-3b5a585447c8",
          opprettet: "2025-10-03T13:00:57.665282",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 3904.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199a9bb-29fb-7e98-889f-9b02d292497c",
              "0199a9bb-70be-71f6-b988-0de02ec72154",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c1-77a1-8690-3b5a585447c9",
          opprettet: "2025-10-03T13:00:57.665426",
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
              "0199a9bb-70be-71f6-b988-0de02ec72155",
              "0199a9bb-70bf-7add-9b49-3216e8dbca3b",
              "0199a9bb-70bf-7add-9b49-3216e8dbca3c",
              "0199a9bb-70bf-7add-9b49-3216e8dbca3d",
              "0199a9bb-70bf-7add-9b49-3216e8dbca3e",
              "0199a9bb-70bf-7add-9b49-3216e8dbca3f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c1-77a1-8690-3b5a585447ca",
          opprettet: "2025-10-03T13:00:57.665496",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 3720,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199a9bb-2d6b-771c-88b1-765ef3db2ff3",
              "0199a9bb-70be-71f6-b988-0de02ec72153",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c1-77a1-8690-3b5a585447cb",
          opprettet: "2025-10-03T13:00:57.665554",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199a9bb-28a4-744f-8735-23c60dacb1ce",
              "0199a9bb-70bf-7add-9b49-3216e8dbca40",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c1-77a1-8690-3b5a585447cc",
          opprettet: "2025-10-03T13:00:57.66561",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199a9bb-28a4-744f-8735-23c60dacb1ce",
              "0199a9bb-70bf-7add-9b49-3216e8dbca44",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c2-7dd4-aaaa-264c05f91897",
          opprettet: "2025-10-03T13:00:57.666613",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 3720,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "0199a9bb-70c1-77a1-8690-3b5a585447c7",
              "0199a9bb-70c1-77a1-8690-3b5a585447c8",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c2-7dd4-aaaa-264c05f91898",
          opprettet: "2025-10-03T13:00:57.666721",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 3720,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "0199a9bb-70c1-77a1-8690-3b5a585447c7",
              "0199a9bb-70c1-77a1-8690-3b5a585447c9",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c2-7dd4-aaaa-264c05f91899",
          opprettet: "2025-10-03T13:00:57.666777",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "0199a9bb-29fa-7437-9b2d-bb8498dc4f17",
              "0199a9bb-70c1-77a1-8690-3b5a585447cb",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c2-7dd4-aaaa-264c05f9189a",
          opprettet: "2025-10-03T13:00:57.666835",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "0199a9bb-70bf-7add-9b49-3216e8dbca43",
              "0199a9bb-70c1-77a1-8690-3b5a585447cc",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c3-7328-b5e3-e6a04f182f18",
          opprettet: "2025-10-03T13:00:57.66795",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 3720,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "0199a9bb-70c2-7dd4-aaaa-264c05f91897",
              "0199a9bb-70c2-7dd4-aaaa-264c05f91898",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c4-7080-ae9c-2d87d9d6d9c0",
          opprettet: "2025-10-03T13:00:57.668088",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 104,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "0199a9bb-70bf-7add-9b49-3216e8dbca41",
              "0199a9bb-70bf-7add-9b49-3216e8dbca42",
              "0199a9bb-70c2-7dd4-aaaa-264c05f91899",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c4-7080-ae9c-2d87d9d6d9c1",
          opprettet: "2025-10-03T13:00:57.668178",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 104,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "0199a9bb-70bf-7add-9b49-3216e8dbca41",
              "0199a9bb-70bf-7add-9b49-3216e8dbca42",
              "0199a9bb-70c2-7dd4-aaaa-264c05f9189a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c5-7f0a-bfe4-7277031fcbd3",
          opprettet: "2025-10-03T13:00:57.6692",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 744,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "0199a9bb-70be-71f6-b988-0de02ec72153",
              "0199a9bb-70c3-7328-b5e3-e6a04f182f18",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c5-7f0a-bfe4-7277031fcbd4",
          opprettet: "2025-10-03T13:00:57.669294",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 104,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "0199a9bb-70c4-7080-ae9c-2d87d9d6d9c0",
              "0199a9bb-70c4-7080-ae9c-2d87d9d6d9c1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c6-7a3f-8244-835b0a6cd91f",
          opprettet: "2025-10-03T13:00:57.670403",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 744,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "0199a9bb-2d6b-771c-88b1-765ef3db2fee",
              "0199a9bb-70c5-7f0a-bfe4-7277031fcbd3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c6-7a3f-8244-835b0a6cd920",
          opprettet: "2025-10-03T13:00:57.670478",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErUlik",
            },
            opplysninger: [
              "0199a9bb-2d6f-725e-b211-6e3fa93328a7",
              "0199a9bb-70c5-7f0a-bfe4-7277031fcbd3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c6-7a3f-8244-835b0a6cd921",
          opprettet: "2025-10-03T13:00:57.670542",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 104,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "0199a9bb-29fb-7e98-889f-9b02d2924977",
              "0199a9bb-70bf-7add-9b49-3216e8dbca45",
              "0199a9bb-70c5-7f0a-bfe4-7277031fcbd4",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c6-7a3f-8244-835b0a6cd922",
          opprettet: "2025-10-03T13:00:57.670606",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 520,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199a9bb-70bf-7add-9b49-3216e8dbca46",
              "0199a9bb-70c5-7f0a-bfe4-7277031fcbd4",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c7-7dd7-b2d0-ed05f8c03e82",
          opprettet: "2025-10-03T13:00:57.671702",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 744,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "0199a9bb-2a06-73c4-894d-c30f181b5c37",
              "0199a9bb-70c6-7a3f-8244-835b0a6cd91f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c8-76bf-bbcc-7188e3d61c07",
          opprettet: "2025-10-03T13:00:57.672825",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 3720,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199a9bb-70be-71f6-b988-0de02ec72153",
              "0199a9bb-70c7-7dd7-b2d0-ed05f8c03e82",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c8-76bf-bbcc-7188e3d61c08",
          opprettet: "2025-10-03T13:00:57.672951",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 2232,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199a9bb-70bf-7add-9b49-3216e8dbca48",
              "0199a9bb-70c7-7dd7-b2d0-ed05f8c03e82",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-70c9-76ac-a58d-8026b16ab5ea",
          opprettet: "2025-10-03T13:00:57.67394",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
          verdi: {
            verdi: 2232,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "0199a9ab-c0eb-7571-9cea-6e4100c240f7",
              "0199a9bb-70bf-7add-9b49-3216e8dbca47",
              "0199a9bb-70c8-76bf-bbcc-7188e3d61c08",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bb-7213-7b07-966c-5baf3b36b032",
          opprettet: "2025-10-03T13:00:58.003657",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-03T13:00:57.940024",
            meldingId: "46e45eb1-b834-4519-b382-69e7a1bcbe5e",
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
          id: "0199a9bb-7215-702d-8bd6-d4e2342e44de",
          opprettet: "2025-10-03T13:00:58.005594",
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
              "0199a9bb-70bf-7add-9b49-3216e8dbca49",
              "0199a9bb-70bf-7add-9b49-3216e8dbca4a",
              "0199a9bb-70bf-7add-9b49-3216e8dbca4b",
              "0199a9bb-70bf-7add-9b49-3216e8dbca4c",
              "0199a9bb-70bf-7add-9b49-3216e8dbca4d",
              "0199a9bb-70c0-7ec6-adeb-1a944a73071f",
              "0199a9bb-7213-7b07-966c-5baf3b36b032",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.01-12.54-1557a52",
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
          id: "0199a9bc-1dd2-7ca5-9a7f-98682c423a88",
          opprettet: "2025-10-03T13:01:41.970313",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-03",
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
          id: "0199b8b8-4f28-7926-bfac-4459a0ebb34c",
          opprettet: "2025-10-06T10:51:50.696947",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          gyldigTilOgMed: "2025-10-05",
          verdi: {
            fom: "2025-09-22",
            tom: "2025-10-05",
            datatype: "periode",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
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
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9dd",
          opprettet: "2025-10-06T10:51:50.697101",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          gyldigTilOgMed: "2025-09-22",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9e0",
          opprettet: "2025-10-06T10:51:50.69711",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-23",
          gyldigTilOgMed: "2025-09-23",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9e3",
          opprettet: "2025-10-06T10:51:50.697121",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-24",
          gyldigTilOgMed: "2025-09-24",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9e6",
          opprettet: "2025-10-06T10:51:50.697125",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-25",
          gyldigTilOgMed: "2025-09-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9e9",
          opprettet: "2025-10-06T10:51:50.697131",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-26",
          gyldigTilOgMed: "2025-09-26",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9ec",
          opprettet: "2025-10-06T10:51:50.697137",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-27",
          gyldigTilOgMed: "2025-09-27",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9ef",
          opprettet: "2025-10-06T10:51:50.69714",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-28",
          gyldigTilOgMed: "2025-09-28",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9f2",
          opprettet: "2025-10-06T10:51:50.697143",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9f5",
          opprettet: "2025-10-06T10:51:50.697146",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-30",
          gyldigTilOgMed: "2025-09-30",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9f8",
          opprettet: "2025-10-06T10:51:50.697149",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-01",
          gyldigTilOgMed: "2025-10-01",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9fb",
          opprettet: "2025-10-06T10:51:50.697152",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-02",
          gyldigTilOgMed: "2025-10-02",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9fe",
          opprettet: "2025-10-06T10:51:50.697155",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-03",
          gyldigTilOgMed: "2025-10-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2ba01",
          opprettet: "2025-10-06T10:51:50.697158",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-04",
          gyldigTilOgMed: "2025-10-04",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2ba04",
          opprettet: "2025-10-06T10:51:50.697161",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-05",
          gyldigTilOgMed: "2025-10-05",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
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
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9de",
          opprettet: "2025-10-06T10:51:50.697106",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          gyldigTilOgMed: "2025-09-22",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9e1",
          opprettet: "2025-10-06T10:51:50.69711",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-23",
          gyldigTilOgMed: "2025-09-23",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9e4",
          opprettet: "2025-10-06T10:51:50.697122",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-24",
          gyldigTilOgMed: "2025-09-24",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9e7",
          opprettet: "2025-10-06T10:51:50.697125",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-25",
          gyldigTilOgMed: "2025-09-25",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9ea",
          opprettet: "2025-10-06T10:51:50.697135",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-26",
          gyldigTilOgMed: "2025-09-26",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9ed",
          opprettet: "2025-10-06T10:51:50.697138",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-27",
          gyldigTilOgMed: "2025-09-27",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9f0",
          opprettet: "2025-10-06T10:51:50.697141",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-28",
          gyldigTilOgMed: "2025-09-28",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9f3",
          opprettet: "2025-10-06T10:51:50.697144",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-09-29",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9f6",
          opprettet: "2025-10-06T10:51:50.697147",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-30",
          gyldigTilOgMed: "2025-09-30",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9f9",
          opprettet: "2025-10-06T10:51:50.69715",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-01",
          gyldigTilOgMed: "2025-10-01",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9fc",
          opprettet: "2025-10-06T10:51:50.697153",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-02",
          gyldigTilOgMed: "2025-10-02",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9ff",
          opprettet: "2025-10-06T10:51:50.697156",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-03",
          gyldigTilOgMed: "2025-10-03",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2ba02",
          opprettet: "2025-10-06T10:51:50.697159",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-04",
          gyldigTilOgMed: "2025-10-04",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2ba05",
          opprettet: "2025-10-06T10:51:50.697162",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-05",
          gyldigTilOgMed: "2025-10-05",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
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
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9df",
          opprettet: "2025-10-06T10:51:50.697107",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          gyldigTilOgMed: "2025-09-22",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9e2",
          opprettet: "2025-10-06T10:51:50.697115",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-23",
          gyldigTilOgMed: "2025-09-23",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9e5",
          opprettet: "2025-10-06T10:51:50.697123",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-24",
          gyldigTilOgMed: "2025-09-24",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9e8",
          opprettet: "2025-10-06T10:51:50.697126",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-25",
          gyldigTilOgMed: "2025-09-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9eb",
          opprettet: "2025-10-06T10:51:50.697135",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-26",
          gyldigTilOgMed: "2025-09-26",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9ee",
          opprettet: "2025-10-06T10:51:50.697138",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-27",
          gyldigTilOgMed: "2025-09-27",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9f1",
          opprettet: "2025-10-06T10:51:50.697141",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-28",
          gyldigTilOgMed: "2025-09-28",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9f4",
          opprettet: "2025-10-06T10:51:50.697144",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-09-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9f7",
          opprettet: "2025-10-06T10:51:50.697147",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-30",
          gyldigTilOgMed: "2025-09-30",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9fa",
          opprettet: "2025-10-06T10:51:50.69715",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-01",
          gyldigTilOgMed: "2025-10-01",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2b9fd",
          opprettet: "2025-10-06T10:51:50.697153",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-02",
          gyldigTilOgMed: "2025-10-02",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2ba00",
          opprettet: "2025-10-06T10:51:50.697156",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-03",
          gyldigTilOgMed: "2025-10-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2ba03",
          opprettet: "2025-10-06T10:51:50.697159",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-04",
          gyldigTilOgMed: "2025-10-04",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
          },
        },
        {
          id: "0199b8b8-4f29-7a05-ad6a-064096c2ba06",
          opprettet: "2025-10-06T10:51:50.697162",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-05",
          gyldigTilOgMed: "2025-10-05",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-06T10:51:50.696832",
            meldingId: "795d6978-7f33-46fe-a0e7-6f88933eb427",
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
          id: "0199c8db-3b5d-71a3-bdcf-5875c929371f",
          opprettet: "2025-10-09T14:03:54.845975",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          gyldigTilOgMed: "2025-10-05",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
    },
    {
      opplysningTypeId: "01994cfd-9a27-762e-81fa-61f550467c95",
      navn: "Penger som skal utbetales for perioden",
      datatype: "penger",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199c8db-3b5e-7012-a8b1-0d2ebcd84f9a",
          opprettet: "2025-10-09T14:03:54.846252",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          gyldigTilOgMed: "2025-10-05",
          verdi: {
            verdi: 744,
            datatype: "penger",
          },
        },
      ],
    },
    {
      opplysningTypeId: "01997b70-a12c-7622-bff8-82a20687e640",
      navn: "Gjenstående egenandel",
      datatype: "penger",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199c8db-3b5e-7012-a8b1-0d2ebcd84f9b",
          opprettet: "2025-10-09T14:03:54.846616",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          gyldigTilOgMed: "2025-10-05",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
      ],
    },
    {
      opplysningTypeId: "01997b70-6e6e-702a-a296-18ae5fb9621d",
      navn: "Oppfyller kravet til tapt arbeidstid i perioden",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0199c8db-3b5e-7012-a8b1-0d2ebcd84f9c",
          opprettet: "2025-10-09T14:03:54.846815",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          gyldigTilOgMed: "2025-10-05",
          verdi: {
            verdi: true,
            datatype: "boolsk",
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
          id: "0199c8db-3b5e-7012-a8b1-0d2ebcd84f9d",
          opprettet: "2025-10-09T14:03:54.846979",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          gyldigTilOgMed: "2025-09-22",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "0199c8db-3b5f-7d16-ace6-ce70915b1cd3",
          opprettet: "2025-10-09T14:03:54.847397",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-23",
          gyldigTilOgMed: "2025-09-23",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "0199c8db-3b5f-7d16-ace6-ce70915b1cd5",
          opprettet: "2025-10-09T14:03:54.847944",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-24",
          gyldigTilOgMed: "2025-09-24",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "0199c8db-3b60-7702-a7a6-a15cd8a09763",
          opprettet: "2025-10-09T14:03:54.848253",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-25",
          gyldigTilOgMed: "2025-09-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "0199c8db-3b60-7702-a7a6-a15cd8a09765",
          opprettet: "2025-10-09T14:03:54.848676",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-26",
          gyldigTilOgMed: "2025-09-26",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "0199c8db-3b60-7702-a7a6-a15cd8a09767",
          opprettet: "2025-10-09T14:03:54.848987",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-27",
          gyldigTilOgMed: "2025-09-27",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "0199c8db-3b61-7f99-8105-c426e7920bf1",
          opprettet: "2025-10-09T14:03:54.849486",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-28",
          gyldigTilOgMed: "2025-09-28",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "0199c8db-3b61-7f99-8105-c426e7920bf3",
          opprettet: "2025-10-09T14:03:54.849836",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-09-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "0199c8db-3b62-70a2-8359-c49b7264f889",
          opprettet: "2025-10-09T14:03:54.850111",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-30",
          gyldigTilOgMed: "2025-09-30",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "0199c8db-3b62-70a2-8359-c49b7264f88b",
          opprettet: "2025-10-09T14:03:54.850551",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-01",
          gyldigTilOgMed: "2025-10-01",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "0199c8db-3b62-70a2-8359-c49b7264f88d",
          opprettet: "2025-10-09T14:03:54.850988",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-02",
          gyldigTilOgMed: "2025-10-02",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "0199c8db-3b63-7e0e-a370-ec05b83a1558",
          opprettet: "2025-10-09T14:03:54.851412",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-03",
          gyldigTilOgMed: "2025-10-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "0199c8db-3b63-7e0e-a370-ec05b83a155a",
          opprettet: "2025-10-09T14:03:54.851857",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-04",
          gyldigTilOgMed: "2025-10-04",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "0199c8db-3b64-7399-8dc8-34637193430e",
          opprettet: "2025-10-09T14:03:54.852365",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-05",
          gyldigTilOgMed: "2025-10-05",
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
          id: "0199c8db-3b5f-7d16-ace6-ce70915b1cd2",
          opprettet: "2025-10-09T14:03:54.847206",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          gyldigTilOgMed: "2025-09-22",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "0199c8db-3b5f-7d16-ace6-ce70915b1cd4",
          opprettet: "2025-10-09T14:03:54.847739",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-23",
          gyldigTilOgMed: "2025-09-23",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "0199c8db-3b60-7702-a7a6-a15cd8a09762",
          opprettet: "2025-10-09T14:03:54.848099",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-24",
          gyldigTilOgMed: "2025-09-24",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "0199c8db-3b60-7702-a7a6-a15cd8a09764",
          opprettet: "2025-10-09T14:03:54.848469",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-25",
          gyldigTilOgMed: "2025-09-25",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "0199c8db-3b60-7702-a7a6-a15cd8a09766",
          opprettet: "2025-10-09T14:03:54.848844",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-26",
          gyldigTilOgMed: "2025-09-26",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "0199c8db-3b61-7f99-8105-c426e7920bf0",
          opprettet: "2025-10-09T14:03:54.849304",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-27",
          gyldigTilOgMed: "2025-09-27",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "0199c8db-3b61-7f99-8105-c426e7920bf2",
          opprettet: "2025-10-09T14:03:54.849691",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-28",
          gyldigTilOgMed: "2025-09-28",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "0199c8db-3b61-7f99-8105-c426e7920bf4",
          opprettet: "2025-10-09T14:03:54.849975",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-09-29",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "0199c8db-3b62-70a2-8359-c49b7264f88a",
          opprettet: "2025-10-09T14:03:54.850287",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-30",
          gyldigTilOgMed: "2025-09-30",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "0199c8db-3b62-70a2-8359-c49b7264f88c",
          opprettet: "2025-10-09T14:03:54.850781",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-01",
          gyldigTilOgMed: "2025-10-01",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "0199c8db-3b63-7e0e-a370-ec05b83a1557",
          opprettet: "2025-10-09T14:03:54.851195",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-02",
          gyldigTilOgMed: "2025-10-02",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "0199c8db-3b63-7e0e-a370-ec05b83a1559",
          opprettet: "2025-10-09T14:03:54.851657",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-03",
          gyldigTilOgMed: "2025-10-03",
          verdi: {
            verdi: 744,
            datatype: "penger",
          },
        },
        {
          id: "0199c8db-3b64-7399-8dc8-34637193430d",
          opprettet: "2025-10-09T14:03:54.852097",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-04",
          gyldigTilOgMed: "2025-10-04",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "0199c8db-3b64-7399-8dc8-34637193430f",
          opprettet: "2025-10-09T14:03:54.85278",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-05",
          gyldigTilOgMed: "2025-10-05",
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
          id: "0199c8db-3b73-7fe9-8b94-819f0dda2571",
          opprettet: "2025-10-09T14:03:54.867245",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          gyldigTilOgMed: "2025-09-22",
          verdi: {
            verdi: 0,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b73-7fe9-8b94-819f0dda2573",
          opprettet: "2025-10-09T14:03:54.86769",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-23",
          gyldigTilOgMed: "2025-09-23",
          verdi: {
            verdi: 0,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b73-7fe9-8b94-819f0dda2575",
          opprettet: "2025-10-09T14:03:54.867996",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-24",
          gyldigTilOgMed: "2025-09-24",
          verdi: {
            verdi: 0,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b74-7653-8fca-44057f9ca24b",
          opprettet: "2025-10-09T14:03:54.868255",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-25",
          gyldigTilOgMed: "2025-09-25",
          verdi: {
            verdi: 0,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b74-7653-8fca-44057f9ca24d",
          opprettet: "2025-10-09T14:03:54.868568",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-26",
          gyldigTilOgMed: "2025-09-26",
          verdi: {
            verdi: 0,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b74-7653-8fca-44057f9ca24f",
          opprettet: "2025-10-09T14:03:54.86884",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-27",
          gyldigTilOgMed: "2025-09-27",
          verdi: {
            verdi: 0,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b75-7748-be9e-a62faa6b16ae",
          opprettet: "2025-10-09T14:03:54.869119",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-28",
          gyldigTilOgMed: "2025-09-28",
          verdi: {
            verdi: 0,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b75-7748-be9e-a62faa6b16b0",
          opprettet: "2025-10-09T14:03:54.869425",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-09-29",
          verdi: {
            verdi: 0,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b75-7748-be9e-a62faa6b16b2",
          opprettet: "2025-10-09T14:03:54.869722",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-30",
          gyldigTilOgMed: "2025-09-30",
          verdi: {
            verdi: 0,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b76-799b-a659-cf1c56fc2eff",
          opprettet: "2025-10-09T14:03:54.870016",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-01",
          gyldigTilOgMed: "2025-10-01",
          verdi: {
            verdi: 0,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b76-799b-a659-cf1c56fc2f01",
          opprettet: "2025-10-09T14:03:54.870279",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-02",
          gyldigTilOgMed: "2025-10-02",
          verdi: {
            verdi: 0,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b76-799b-a659-cf1c56fc2f03",
          opprettet: "2025-10-09T14:03:54.870576",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-03",
          gyldigTilOgMed: "2025-10-03",
          verdi: {
            verdi: 1,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b76-799b-a659-cf1c56fc2f05",
          opprettet: "2025-10-09T14:03:54.870893",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-04",
          gyldigTilOgMed: "2025-10-04",
          verdi: {
            verdi: 1,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b77-7f33-b81d-2f2dd83053f4",
          opprettet: "2025-10-09T14:03:54.871151",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-05",
          gyldigTilOgMed: "2025-10-05",
          verdi: {
            verdi: 1,
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
          id: "0199c8db-3b73-7fe9-8b94-819f0dda2572",
          opprettet: "2025-10-09T14:03:54.867448",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          gyldigTilOgMed: "2025-09-22",
          verdi: {
            verdi: 520,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b73-7fe9-8b94-819f0dda2574",
          opprettet: "2025-10-09T14:03:54.867864",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-23",
          gyldigTilOgMed: "2025-09-23",
          verdi: {
            verdi: 520,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b74-7653-8fca-44057f9ca24a",
          opprettet: "2025-10-09T14:03:54.868124",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-24",
          gyldigTilOgMed: "2025-09-24",
          verdi: {
            verdi: 520,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b74-7653-8fca-44057f9ca24c",
          opprettet: "2025-10-09T14:03:54.868386",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-25",
          gyldigTilOgMed: "2025-09-25",
          verdi: {
            verdi: 520,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b74-7653-8fca-44057f9ca24e",
          opprettet: "2025-10-09T14:03:54.868704",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-26",
          gyldigTilOgMed: "2025-09-26",
          verdi: {
            verdi: 520,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b74-7653-8fca-44057f9ca250",
          opprettet: "2025-10-09T14:03:54.868988",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-27",
          gyldigTilOgMed: "2025-09-27",
          verdi: {
            verdi: 520,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b75-7748-be9e-a62faa6b16af",
          opprettet: "2025-10-09T14:03:54.869292",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-28",
          gyldigTilOgMed: "2025-09-28",
          verdi: {
            verdi: 520,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b75-7748-be9e-a62faa6b16b1",
          opprettet: "2025-10-09T14:03:54.869591",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-29",
          gyldigTilOgMed: "2025-09-29",
          verdi: {
            verdi: 520,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b75-7748-be9e-a62faa6b16b3",
          opprettet: "2025-10-09T14:03:54.869888",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-30",
          gyldigTilOgMed: "2025-09-30",
          verdi: {
            verdi: 520,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b76-799b-a659-cf1c56fc2f00",
          opprettet: "2025-10-09T14:03:54.870153",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-01",
          gyldigTilOgMed: "2025-10-01",
          verdi: {
            verdi: 520,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b76-799b-a659-cf1c56fc2f02",
          opprettet: "2025-10-09T14:03:54.870405",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-02",
          gyldigTilOgMed: "2025-10-02",
          verdi: {
            verdi: 520,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b76-799b-a659-cf1c56fc2f04",
          opprettet: "2025-10-09T14:03:54.870746",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-03",
          gyldigTilOgMed: "2025-10-03",
          verdi: {
            verdi: 519,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b77-7f33-b81d-2f2dd83053f3",
          opprettet: "2025-10-09T14:03:54.871023",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-04",
          gyldigTilOgMed: "2025-10-04",
          verdi: {
            verdi: 519,
            datatype: "heltall",
          },
        },
        {
          id: "0199c8db-3b77-7f33-b81d-2f2dd83053f5",
          opprettet: "2025-10-09T14:03:54.871308",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-05",
          gyldigTilOgMed: "2025-10-05",
          verdi: {
            verdi: 519,
            datatype: "heltall",
          },
        },
      ],
    },
  ],
  rettighetsperioder: [
    {
      fraOgMed: "2025-10-03",
      harRett: true,
      opprinnelse: "Arvet",
    },
  ],
};
