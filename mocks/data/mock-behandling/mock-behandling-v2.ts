import { components } from "../../../openapi/behandling-typer";

// behandlingId: "01997148-5db5-70b4-b4f1-607730450315",
export const mockBehandlingPeriodisertV2: components["schemas"]["BehandlingsresultatV2"] = {
  behandlingId: "01997148-5db5-70b4-b4f1-607730450315",
  behandletHendelse: {
    datatype: "UUID",
    id: "0199c28f-2e09-77e8-a8ce-e30a80e7966b",
    type: "Manuell",
  },
  kreverTotrinnskontroll: true,
  basertPå: "01993cbf-0181-77f1-aa6c-16fe3da07fb2",
  tilstand: "ForslagTilVedtak",
  automatisk: false,
  ident: "06929798269",
  avklaringer: [
    {
      id: "0199c28f-2e42-798d-9eea-05546fa36962",
      kode: "ManuellBehandling",
      tittel: "Manuell behandling",
      beskrivelse: "Behandlingen er opprettet manuelt og kan ikke automatisk behandles",
      kanKvitteres: true,
      status: "Åpen",
      maskinelt: false,
      sistEndret: "2025-10-08T08:43:07.458435",
    },
    {
      id: "0199c28f-2e42-798d-9eea-05546fa36963",
      kode: "ManuellBehandling",
      tittel: "Manuell behandling",
      beskrivelse: "Behandlingen er opprettet manuelt og kan ikke automatisk behandles",
      kanKvitteres: false,
      status: "Avbrutt",
      maskinelt: false,
      sistEndret: "2025-10-08T08:43:07.458435",
    },

    {
      id: "0199c28f-2e42-798d-9eea-05546fa36964",
      kode: "ManuellBehandling",
      tittel: "Manuell behandling",
      beskrivelse: "Behandlingen er opprettet manuelt og kan ikke automatisk behandles",
      kanKvitteres: false,
      status: "Avklart",
      maskinelt: false,
      sistEndret: "2025-10-08T08:43:07.458435",
    },
    {
      id: "0199c28f-2e42-798d-9eea-05546fa36965",
      kode: "ManuellBehandling",
      tittel: "Manuell behandling",
      beskrivelse: "Behandlingen er opprettet manuelt og kan ikke automatisk behandles",
      kanKvitteres: false,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-10-08T08:43:07.458435",
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
      opplysninger: [
        "0194881f-9442-707b-a6ee-e96c06877be0",
        "0194881f-9442-707b-a6ee-e96c06877be1",
      ],
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
          id: "01993cbf-0180-7a64-ab81-23c0bba2ae04",
          opprettet: "2025-09-12T09:06:14.784996",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 15538469,
            datatype: "heltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:14.784987",
            meldingId: "7c7ca883-aece-4234-a462-c169a67e430d",
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
          id: "01993cbf-0181-77f1-aa6c-16fe3da07faf",
          opprettet: "2025-09-12T09:06:14.785015",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "c639982b-190e-4ffc-9a4c-90e42566251a",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:14.785015",
            meldingId: "7c7ca883-aece-4234-a462-c169a67e430d",
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
          id: "01993cbf-0181-77f1-aa6c-16fe3da07fb1",
          opprettet: "2025-09-12T09:06:14.785021",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          gyldigTilOgMed: "2025-09-12",
          verdi: {
            verdi: "SøknadInnsendtHendelse",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:14.78502",
            meldingId: "7c7ca883-aece-4234-a462-c169a67e430d",
          },
        },
        {
          id: "0199c28f-2e42-798d-9eea-05546fa36961",
          opprettet: "2025-10-08T08:43:07.458359",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-08",
          gyldigTilOgMed: "2025-10-08",
          verdi: {
            verdi: "OpprettBehandlingHendelse",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-08T08:43:07.458343",
            meldingId: "0199c28f-2e09-77e8-a8ce-e30a80e7966c",
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
          id: "01993cbf-0182-75ae-9c2c-99994d9c5c99",
          opprettet: "2025-09-12T09:06:14.78641",
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
          id: "01993cbf-02a9-75c0-b0df-75f70cafca94",
          opprettet: "2025-09-12T09:06:15.081943",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2025-09-12",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:15.049806",
            meldingId: "3baa3938-5ee7-40d4-9425-c589194d5667",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993cbf-0181-77f1-aa6c-16fe3da07faf"],
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
          id: "01993cbf-02aa-723e-87fb-927249acf50a",
          opprettet: "2025-09-12T09:06:15.082052",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2025-09-12",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:15.04998",
            meldingId: "3baa3938-5ee7-40d4-9425-c589194d5667",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993cbf-0181-77f1-aa6c-16fe3da07faf"],
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
          id: "01993cbf-02aa-723e-87fb-927249acf50b",
          opprettet: "2025-09-12T09:06:15.082061",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "1997-12-06",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:15.050064",
            meldingId: "3baa3938-5ee7-40d4-9425-c589194d5667",
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
          id: "01993cbf-02aa-723e-87fb-927249acf50d",
          opprettet: "2025-09-12T09:06:15.082602",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2025-09-12",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: [
              "01993cbf-02a9-75c0-b0df-75f70cafca94",
              "01993cbf-02aa-723e-87fb-927249acf50a",
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
          id: "01993cbf-02aa-723e-87fb-927249acf50e",
          opprettet: "2025-09-12T09:06:15.08262",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2064-12-06",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "LeggTilÅr",
            },
            opplysninger: [
              "01993cbf-0182-75ae-9c2c-99994d9c5c99",
              "01993cbf-02aa-723e-87fb-927249acf50b",
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
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "01993cbf-02aa-723e-87fb-927249acf510",
          opprettet: "2025-09-12T09:06:15.082709",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: "2025-09-12",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf50d"],
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
          id: "01993cbf-02aa-723e-87fb-927249acf511",
          opprettet: "2025-09-12T09:06:15.082719",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2064-12-31",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteDagIMåned",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf50e"],
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
          id: "01993cbf-02aa-723e-87fb-927249acf513",
          opprettet: "2025-09-12T09:06:15.082812",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "FørEllerLik",
            },
            opplysninger: [
              "01993cbf-02aa-723e-87fb-927249acf510",
              "01993cbf-02aa-723e-87fb-927249acf511",
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
          id: "01993cbf-02aa-723e-87fb-927249acf515",
          opprettet: "2025-09-12T09:06:15.082972",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: "2025-09-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
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
          id: "01993cbf-02aa-723e-87fb-927249acf516",
          opprettet: "2025-09-12T09:06:15.082987",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 36,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
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
          id: "01993cbf-02ab-769d-82d2-59f204b3d61e",
          opprettet: "2025-09-12T09:06:15.083114",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
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
          id: "01993cbf-02ab-769d-82d2-59f204b3d61f",
          opprettet: "2025-09-12T09:06:15.083138",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 1.5,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
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
          id: "01993cbf-02ab-769d-82d2-59f204b3d620",
          opprettet: "2025-09-12T09:06:15.083148",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 3,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
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
          id: "01993cbf-02ab-769d-82d2-59f204b3d621",
          opprettet: "2025-09-12T09:06:15.083156",
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
      opplysningTypeId: "0194881f-9414-7823-8d29-0e25b7feb7cf",
      navn: "Arbeidsgivers rapporteringsfrist",
      datatype: "dato",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "01993cbf-02ab-769d-82d2-59f204b3d623",
          opprettet: "2025-09-12T09:06:15.08346",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: "2025-09-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "FørsteArbeidsdag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf515"],
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
          id: "01993cbf-02ab-769d-82d2-59f204b3d624",
          opprettet: "2025-09-12T09:06:15.083508",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 195240,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993cbf-02ab-769d-82d2-59f204b3d61e",
              "01993cbf-02ab-769d-82d2-59f204b3d61f",
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
          id: "01993cbf-02ab-769d-82d2-59f204b3d625",
          opprettet: "2025-09-12T09:06:15.08352",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993cbf-02ab-769d-82d2-59f204b3d61e",
              "01993cbf-02ab-769d-82d2-59f204b3d620",
            ],
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
          id: "01993cbf-02ab-769d-82d2-59f204b3d627",
          opprettet: "2025-09-12T09:06:15.083533",
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
          id: "01993cbf-02ab-769d-82d2-59f204b3d628",
          opprettet: "2025-09-12T09:06:15.083538",
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
          id: "01993cbf-02ab-769d-82d2-59f204b3d629",
          opprettet: "2025-09-12T09:06:15.083544",
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
      opplysningTypeId: "0194881f-9414-7823-8d29-0e25b7feb7d0",
      navn: "Siste avsluttende kalendermåned",
      datatype: "dato",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "01993cbf-02ab-769d-82d2-59f204b3d62b",
          opprettet: "2025-09-12T09:06:15.083704",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: "2025-08-31",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteavsluttendeKalenderMåned",
            },
            opplysninger: [
              "01993cbf-02aa-723e-87fb-927249acf510",
              "01993cbf-02ab-769d-82d2-59f204b3d623",
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
          id: "01993cbf-02ab-769d-82d2-59f204b3d62d",
          opprettet: "2025-09-12T09:06:15.083857",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: "2022-09-01",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "TrekkFraMåned",
            },
            opplysninger: [
              "01993cbf-02aa-723e-87fb-927249acf516",
              "01993cbf-02ab-769d-82d2-59f204b3d62b",
            ],
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
          id: "01993cbf-0564-767b-bf37-dd9e5ea54c37",
          opprettet: "2025-09-12T09:06:15.780476",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:15.747435",
            meldingId: "62e95e92-008d-4751-a23c-f43415a8b03d",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993cbf-0181-77f1-aa6c-16fe3da07faf"],
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
          id: "01993cbf-0564-767b-bf37-dd9e5ea54c38",
          opprettet: "2025-09-12T09:06:15.780492",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:15.747495",
            meldingId: "62e95e92-008d-4751-a23c-f43415a8b03d",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993cbf-0181-77f1-aa6c-16fe3da07faf"],
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
          id: "01993cbf-0564-767b-bf37-dd9e5ea54c39",
          opprettet: "2025-09-12T09:06:15.780508",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:15.747572",
            meldingId: "62e95e92-008d-4751-a23c-f43415a8b03d",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993cbf-0181-77f1-aa6c-16fe3da07faf"],
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
          id: "01993cbf-0564-767b-bf37-dd9e5ea54c3a",
          opprettet: "2025-09-12T09:06:15.78054",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:15.747641",
            meldingId: "62e95e92-008d-4751-a23c-f43415a8b03d",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993cbf-0181-77f1-aa6c-16fe3da07faf"],
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
          id: "01993cbf-0564-767b-bf37-dd9e5ea54c3b",
          opprettet: "2025-09-12T09:06:15.780556",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:15.747699",
            meldingId: "62e95e92-008d-4751-a23c-f43415a8b03d",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993cbf-0181-77f1-aa6c-16fe3da07faf"],
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
          id: "01993cbf-0564-767b-bf37-dd9e5ea54c3c",
          opprettet: "2025-09-12T09:06:15.780572",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:15.747741",
            meldingId: "62e95e92-008d-4751-a23c-f43415a8b03d",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993cbf-0181-77f1-aa6c-16fe3da07faf"],
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
          id: "01993cbf-0564-767b-bf37-dd9e5ea54c3d",
          opprettet: "2025-09-12T09:06:15.780588",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:15.747783",
            meldingId: "62e95e92-008d-4751-a23c-f43415a8b03d",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993cbf-0181-77f1-aa6c-16fe3da07faf"],
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
          id: "01993cbf-0564-767b-bf37-dd9e5ea54c3e",
          opprettet: "2025-09-12T09:06:15.780604",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:15.747835",
            meldingId: "62e95e92-008d-4751-a23c-f43415a8b03d",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993cbf-0181-77f1-aa6c-16fe3da07faf"],
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
          id: "01993cbf-0564-767b-bf37-dd9e5ea54c3f",
          opprettet: "2025-09-12T09:06:15.78062",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:15.747886",
            meldingId: "62e95e92-008d-4751-a23c-f43415a8b03d",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993cbf-0181-77f1-aa6c-16fe3da07faf"],
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
          id: "01993cbf-0564-767b-bf37-dd9e5ea54c40",
          opprettet: "2025-09-12T09:06:15.780636",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:15.748018",
            meldingId: "62e95e92-008d-4751-a23c-f43415a8b03d",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
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
          id: "01993cbf-0564-767b-bf37-dd9e5ea54c41",
          opprettet: "2025-09-12T09:06:15.780658",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: "01K4YBY18JX7F6WGBNXA02K0AM",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:15.74807",
            meldingId: "62e95e92-008d-4751-a23c-f43415a8b03d",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: [
              "01993cbf-02aa-723e-87fb-927249acf510",
              "01993cbf-02ab-769d-82d2-59f204b3d62b",
              "01993cbf-02ab-769d-82d2-59f204b3d62d",
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
          id: "01993cbf-0565-7ebf-b6ba-d5558ea4fb27",
          opprettet: "2025-09-12T09:06:15.781732",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: "01K4YBY18JX7F6WGBNXA02K0AM",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["01993cbf-0564-767b-bf37-dd9e5ea54c41"],
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
          id: "01993cbf-0565-7ebf-b6ba-d5558ea4fb29",
          opprettet: "2025-09-12T09:06:15.781813",
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
              "01993cbf-02ab-769d-82d2-59f204b3d627",
              "01993cbf-0564-767b-bf37-dd9e5ea54c37",
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
          id: "01993cbf-0565-7ebf-b6ba-d5558ea4fb2a",
          opprettet: "2025-09-12T09:06:15.781826",
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
              "01993cbf-02ab-769d-82d2-59f204b3d628",
              "01993cbf-0564-767b-bf37-dd9e5ea54c38",
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
          id: "01993cbf-0565-7ebf-b6ba-d5558ea4fb2b",
          opprettet: "2025-09-12T09:06:15.78184",
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
            opplysninger: ["01993cbf-0564-767b-bf37-dd9e5ea54c39"],
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
          id: "01993cbf-0565-7ebf-b6ba-d5558ea4fb2c",
          opprettet: "2025-09-12T09:06:15.781858",
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
              "01993cbf-02ab-769d-82d2-59f204b3d629",
              "01993cbf-0564-767b-bf37-dd9e5ea54c3a",
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
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "01993cbf-0565-7ebf-b6ba-d5558ea4fb2d",
          opprettet: "2025-09-12T09:06:15.781874",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["01993cbf-0564-767b-bf37-dd9e5ea54c40"],
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
          id: "01993cbf-0565-7ebf-b6ba-d5558ea4fb2e",
          opprettet: "2025-09-12T09:06:15.781891",
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
              "01993cbf-0564-767b-bf37-dd9e5ea54c3b",
              "01993cbf-0564-767b-bf37-dd9e5ea54c3c",
              "01993cbf-0564-767b-bf37-dd9e5ea54c3d",
              "01993cbf-0564-767b-bf37-dd9e5ea54c3e",
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
          id: "01993cbf-0565-7ebf-b6ba-d5558ea4fb2f",
          opprettet: "2025-09-12T09:06:15.781904",
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
            opplysninger: ["01993cbf-0564-767b-bf37-dd9e5ea54c3f"],
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
          id: "01993cbf-0566-7f51-98bb-685c90bcc86d",
          opprettet: "2025-09-12T09:06:15.782489",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 555550,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01993cbf-0565-7ebf-b6ba-d5558ea4fb27"],
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
          id: "01993cbf-0566-7f51-98bb-685c90bcc86e",
          opprettet: "2025-09-12T09:06:15.782634",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 555550,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01993cbf-0565-7ebf-b6ba-d5558ea4fb27"],
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
          id: "01993cbf-0566-7f51-98bb-685c90bcc870",
          opprettet: "2025-09-12T09:06:15.782678",
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
              "01993cbf-0564-767b-bf37-dd9e5ea54c3b",
              "01993cbf-0565-7ebf-b6ba-d5558ea4fb2e",
            ],
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
          id: "01993cbf-0566-7f51-98bb-685c90bcc872",
          opprettet: "2025-09-12T09:06:15.782925",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01993cbf-02ab-769d-82d2-59f204b3d624",
              "01993cbf-0566-7f51-98bb-685c90bcc86d",
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
          id: "01993cbf-0567-7dca-be94-ed3b99c5ebc1",
          opprettet: "2025-09-12T09:06:15.783009",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01993cbf-02ab-769d-82d2-59f204b3d625",
              "01993cbf-0566-7f51-98bb-685c90bcc86e",
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
          id: "01993cbf-0567-7dca-be94-ed3b99c5ebc2",
          opprettet: "2025-09-12T09:06:15.783034",
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
              "01993cbf-0564-767b-bf37-dd9e5ea54c3c",
              "01993cbf-0564-767b-bf37-dd9e5ea54c3d",
              "01993cbf-0564-767b-bf37-dd9e5ea54c3e",
              "01993cbf-0566-7f51-98bb-685c90bcc870",
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
          id: "01993cbf-056a-7a19-8ee4-71cb46e40c27",
          opprettet: "2025-09-12T09:06:15.786249",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01993cbf-0566-7f51-98bb-685c90bcc872",
              "01993cbf-0567-7dca-be94-ed3b99c5ebc1",
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
          id: "01993cbf-056a-7a19-8ee4-71cb46e40c29",
          opprettet: "2025-09-12T09:06:15.786617",
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
          id: "01993cbf-056a-7a19-8ee4-71cb46e40c2a",
          opprettet: "2025-09-12T09:06:15.786645",
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
          id: "01993cbf-056a-7a19-8ee4-71cb46e40c2b",
          opprettet: "2025-09-12T09:06:15.786659",
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
          id: "01993cbf-056a-7a19-8ee4-71cb46e40c2c",
          opprettet: "2025-09-12T09:06:15.78675",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
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
          id: "01993cbf-056a-7a19-8ee4-71cb46e40c2d",
          opprettet: "2025-09-12T09:06:15.786791",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: "01K4YBY18JX7F6WGBNXA02K0AM",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["01993cbf-0564-767b-bf37-dd9e5ea54c41"],
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
          id: "01993cbf-056a-7a19-8ee4-71cb46e40c2e",
          opprettet: "2025-09-12T09:06:15.786816",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 6,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
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
          id: "01993cbf-056a-7a19-8ee4-71cb46e40c2f",
          opprettet: "2025-09-12T09:06:15.786834",
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
          id: "01993cbf-056a-7a19-8ee4-71cb46e40c30",
          opprettet: "2025-09-12T09:06:15.786852",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 3,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
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
          id: "01993cbf-056a-7a19-8ee4-71cb46e40c31",
          opprettet: "2025-09-12T09:06:15.786867",
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
          id: "01993cbf-056a-7a19-8ee4-71cb46e40c32",
          opprettet: "2025-09-12T09:06:15.78689",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 0.0024,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
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
          id: "01993cbf-056a-7a19-8ee4-71cb46e40c33",
          opprettet: "2025-09-12T09:06:15.786921",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 37,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
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
          id: "01993cbf-056a-7a19-8ee4-71cb46e40c34",
          opprettet: "2025-09-12T09:06:15.78694",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 0.9,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
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
          id: "01993cbf-056a-7a19-8ee4-71cb46e40c35",
          opprettet: "2025-09-12T09:06:15.786995",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 260,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51a1",
          opprettet: "2025-09-12T09:06:15.787014",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51a2",
          opprettet: "2025-09-12T09:06:15.787039",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51a3",
          opprettet: "2025-09-12T09:06:15.787062",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51a4",
          opprettet: "2025-09-12T09:06:15.787083",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51a5",
          opprettet: "2025-09-12T09:06:15.7871",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51a6",
          opprettet: "2025-09-12T09:06:15.787118",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51a7",
          opprettet: "2025-09-12T09:06:15.787139",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51a8",
          opprettet: "2025-09-12T09:06:15.787157",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51a9",
          opprettet: "2025-09-12T09:06:15.787175",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51aa",
          opprettet: "2025-09-12T09:06:15.787193",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51ab",
          opprettet: "2025-09-12T09:06:15.787212",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51ac",
          opprettet: "2025-09-12T09:06:15.78723",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51ad",
          opprettet: "2025-09-12T09:06:15.787256",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51ae",
          opprettet: "2025-09-12T09:06:15.787278",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 37.5,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51af",
          opprettet: "2025-09-12T09:06:15.787298",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51b0",
          opprettet: "2025-09-12T09:06:15.787317",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51b1",
          opprettet: "2025-09-12T09:06:15.787341",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51b2",
          opprettet: "2025-09-12T09:06:15.787364",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 50,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51b3",
          opprettet: "2025-09-12T09:06:15.787384",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51b4",
          opprettet: "2025-09-12T09:06:15.787406",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51b5",
          opprettet: "2025-09-12T09:06:15.787426",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51b6",
          opprettet: "2025-09-12T09:06:15.787443",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51b7",
          opprettet: "2025-09-12T09:06:15.787462",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51b8",
          opprettet: "2025-09-12T09:06:15.787481",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51b9",
          opprettet: "2025-09-12T09:06:15.787499",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51ba",
          opprettet: "2025-09-12T09:06:15.787518",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51bb",
          opprettet: "2025-09-12T09:06:15.787544",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51bc",
          opprettet: "2025-09-12T09:06:15.787566",
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
          id: "01993cbf-056b-7e9a-a533-38be8b3d51bd",
          opprettet: "2025-09-12T09:06:15.787585",
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
          id: "01993cbf-056c-7bdf-ba19-9a0b2e5cc44a",
          opprettet: "2025-09-12T09:06:15.788066",
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
            opplysninger: ["01993cbf-056a-7a19-8ee4-71cb46e40c2b"],
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
          id: "01993cbf-056c-7bdf-ba19-9a0b2e5cc44b",
          opprettet: "2025-09-12T09:06:15.788394",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: "01K4YBY18JX7F6WGBNXA02K0AM",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Oppjuster",
            },
            opplysninger: [
              "01993cbf-056a-7a19-8ee4-71cb46e40c2c",
              "01993cbf-056a-7a19-8ee4-71cb46e40c2d",
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
          id: "01993cbf-056c-7bdf-ba19-9a0b2e5cc44c",
          opprettet: "2025-09-12T09:06:15.78845",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993cbf-056a-7a19-8ee4-71cb46e40c2c",
              "01993cbf-056a-7a19-8ee4-71cb46e40c2e",
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
          id: "01993cbf-056c-7bdf-ba19-9a0b2e5cc44d",
          opprettet: "2025-09-12T09:06:15.788476",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993cbf-056a-7a19-8ee4-71cb46e40c2c",
              "01993cbf-056a-7a19-8ee4-71cb46e40c30",
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
          id: "01993cbf-056c-7bdf-ba19-9a0b2e5cc44e",
          opprettet: "2025-09-12T09:06:15.788501",
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
            opplysninger: ["01993cbf-056b-7e9a-a533-38be8b3d51a5"],
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
          id: "01993cbf-056c-7bdf-ba19-9a0b2e5cc44f",
          opprettet: "2025-09-12T09:06:15.78853",
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
              "01993cbf-056b-7e9a-a533-38be8b3d51aa",
              "01993cbf-056b-7e9a-a533-38be8b3d51ab",
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
          id: "01993cbf-056c-7bdf-ba19-9a0b2e5cc450",
          opprettet: "2025-09-12T09:06:15.788577",
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
              "01993cbf-056b-7e9a-a533-38be8b3d51af",
              "01993cbf-056b-7e9a-a533-38be8b3d51b0",
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
          id: "01993cbf-056c-7bdf-ba19-9a0b2e5cc451",
          opprettet: "2025-09-12T09:06:15.788619",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 50,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "01993cbf-0564-767b-bf37-dd9e5ea54c3e",
              "01993cbf-056b-7e9a-a533-38be8b3d51b1",
              "01993cbf-056b-7e9a-a533-38be8b3d51b2",
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
          id: "01993cbf-056c-7bdf-ba19-9a0b2e5cc452",
          opprettet: "2025-09-12T09:06:15.788663",
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
              "01993cbf-056b-7e9a-a533-38be8b3d51b3",
              "01993cbf-056b-7e9a-a533-38be8b3d51b4",
              "01993cbf-056b-7e9a-a533-38be8b3d51b5",
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
          id: "01993cbf-056c-7bdf-ba19-9a0b2e5cc453",
          opprettet: "2025-09-12T09:06:15.788704",
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
              "01993cbf-056b-7e9a-a533-38be8b3d51b7",
              "01993cbf-056b-7e9a-a533-38be8b3d51b8",
              "01993cbf-056b-7e9a-a533-38be8b3d51b9",
              "01993cbf-056b-7e9a-a533-38be8b3d51ba",
              "01993cbf-056b-7e9a-a533-38be8b3d51bb",
              "01993cbf-056b-7e9a-a533-38be8b3d51bc",
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
          id: "01993cbf-056c-7bdf-ba19-9a0b2e5cc454",
          opprettet: "2025-09-12T09:06:15.788743",
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
            opplysninger: ["01993cbf-056b-7e9a-a533-38be8b3d51bd"],
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
          id: "01993cbf-056d-79df-899a-4e8aa2fd320d",
          opprettet: "2025-09-12T09:06:15.789436",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 577523.3131228433,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01993cbf-056c-7bdf-ba19-9a0b2e5cc44b"],
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
          id: "01993cbf-056d-79df-899a-4e8aa2fd320e",
          opprettet: "2025-09-12T09:06:15.789501",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01993cbf-056c-7bdf-ba19-9a0b2e5cc44b"],
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
          id: "01993cbf-056d-79df-899a-4e8aa2fd320f",
          opprettet: "2025-09-12T09:06:15.789562",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01993cbf-056c-7bdf-ba19-9a0b2e5cc44b"],
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
          id: "01993cbf-056d-79df-899a-4e8aa2fd3210",
          opprettet: "2025-09-12T09:06:15.789596",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "01993cbf-0565-7ebf-b6ba-d5558ea4fb2f",
              "01993cbf-056a-7a19-8ee4-71cb46e40c31",
              "01993cbf-056c-7bdf-ba19-9a0b2e5cc44d",
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
          id: "01993cbf-056d-79df-899a-4e8aa2fd3211",
          opprettet: "2025-09-12T09:06:15.789624",
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
              "01993cbf-056b-7e9a-a533-38be8b3d51a6",
              "01993cbf-056b-7e9a-a533-38be8b3d51a7",
              "01993cbf-056c-7bdf-ba19-9a0b2e5cc44e",
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
          id: "01993cbf-056e-76e8-802d-cee1b440063b",
          opprettet: "2025-09-12T09:06:15.790203",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 577523.3131228433,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01993cbf-056c-7bdf-ba19-9a0b2e5cc44c",
              "01993cbf-056d-79df-899a-4e8aa2fd320d",
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
          id: "01993cbf-056e-76e8-802d-cee1b440063c",
          opprettet: "2025-09-12T09:06:15.790237",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 577523.3131228433,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01993cbf-056c-7bdf-ba19-9a0b2e5cc44c",
              "01993cbf-056d-79df-899a-4e8aa2fd320d",
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
          id: "01993cbf-056e-76e8-802d-cee1b440063d",
          opprettet: "2025-09-12T09:06:15.790265",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01993cbf-056c-7bdf-ba19-9a0b2e5cc44c",
              "01993cbf-056d-79df-899a-4e8aa2fd320e",
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
          id: "01993cbf-056e-76e8-802d-cee1b440063e",
          opprettet: "2025-09-12T09:06:15.790302",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01993cbf-056c-7bdf-ba19-9a0b2e5cc44c",
              "01993cbf-056d-79df-899a-4e8aa2fd320f",
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
          id: "01993cbf-056e-76e8-802d-cee1b440063f",
          opprettet: "2025-09-12T09:06:15.790382",
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
              "01993cbf-056b-7e9a-a533-38be8b3d51a1",
              "01993cbf-056b-7e9a-a533-38be8b3d51a2",
              "01993cbf-056b-7e9a-a533-38be8b3d51a3",
              "01993cbf-056b-7e9a-a533-38be8b3d51a4",
              "01993cbf-056b-7e9a-a533-38be8b3d51a8",
              "01993cbf-056b-7e9a-a533-38be8b3d51a9",
              "01993cbf-056d-79df-899a-4e8aa2fd3211",
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
          id: "01993cbf-056f-72ba-9e7b-d1ee627033f2",
          opprettet: "2025-09-12T09:06:15.791067",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 577523.3131228433,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SumAv",
            },
            opplysninger: [
              "01993cbf-056e-76e8-802d-cee1b440063c",
              "01993cbf-056e-76e8-802d-cee1b440063d",
              "01993cbf-056e-76e8-802d-cee1b440063e",
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
          id: "01993cbf-056f-72ba-9e7b-d1ee627033f4",
          opprettet: "2025-09-12T09:06:15.791698",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 192507.77104094773,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "01993cbf-056a-7a19-8ee4-71cb46e40c2f",
              "01993cbf-056f-72ba-9e7b-d1ee627033f2",
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
          id: "01993cbf-0570-79ba-82fc-bb6eabebf141",
          opprettet: "2025-09-12T09:06:15.792251",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 577523.3131228433,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "01993cbf-056e-76e8-802d-cee1b440063b",
              "01993cbf-056f-72ba-9e7b-d1ee627033f4",
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
          id: "01993cbf-0570-79ba-82fc-bb6eabebf143",
          opprettet: "2025-09-12T09:06:15.792848",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 577523,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["01993cbf-0570-79ba-82fc-bb6eabebf141"],
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
          id: "01993cbf-0571-7a56-a7b3-cfcc1527b49d",
          opprettet: "2025-09-12T09:06:15.793351",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          gyldigTilOgMed: "2025-09-30",
          verdi: {
            verdi: 577523,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "01993cbf-056d-79df-899a-4e8aa2fd3210",
              "01993cbf-0570-79ba-82fc-bb6eabebf143",
            ],
          },
        },
        {
          id: "01993cbf-0571-7a56-a7b3-cfcc1527b49f",
          opprettet: "2025-09-12T09:06:15.793351",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-10-01",
          verdi: {
            verdi: 700000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "01993cbf-056d-79df-899a-4e8aa2fd3210",
              "01993cbf-0570-79ba-82fc-bb6eabebf143",
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
          id: "01993cbf-0571-7a56-a7b3-cfcc1527b49e",
          opprettet: "2025-09-12T09:06:15.793389",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "01993cbf-056d-79df-899a-4e8aa2fd3210",
              "01993cbf-0570-79ba-82fc-bb6eabebf143",
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
          id: "01993cbf-0571-7a56-a7b3-cfcc1527b4a0",
          opprettet: "2025-09-12T09:06:15.79392",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 1386.0552,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993cbf-056a-7a19-8ee4-71cb46e40c32",
              "01993cbf-0571-7a56-a7b3-cfcc1527b49d",
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
          id: "01993cbf-0571-7a56-a7b3-cfcc1527b4a1",
          opprettet: "2025-09-12T09:06:15.793988",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 519770.7,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993cbf-056a-7a19-8ee4-71cb46e40c34",
              "01993cbf-0571-7a56-a7b3-cfcc1527b49d",
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
          id: "01993cbf-0572-7466-b4c5-4d60321797d9",
          opprettet: "2025-09-12T09:06:15.794026",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 37.5,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "01993cbf-056b-7e9a-a533-38be8b3d51ae",
              "01993cbf-056b-7e9a-a533-38be8b3d51af",
              "01993cbf-0571-7a56-a7b3-cfcc1527b49e",
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
          id: "01993cbf-0572-7466-b4c5-4d60321797db",
          opprettet: "2025-09-12T09:06:15.794522",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["01993cbf-0571-7a56-a7b3-cfcc1527b4a0"],
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
          id: "01993cbf-0572-7466-b4c5-4d60321797dc",
          opprettet: "2025-09-12T09:06:15.794599",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 1999.1180769230768,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "01993cbf-056a-7a19-8ee4-71cb46e40c35",
              "01993cbf-0571-7a56-a7b3-cfcc1527b4a1",
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
          id: "01993cbf-0572-7466-b4c5-4d60321797dd",
          opprettet: "2025-09-12T09:06:15.794639",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 37.5,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01993cbf-0564-767b-bf37-dd9e5ea54c3a",
              "01993cbf-056b-7e9a-a533-38be8b3d51ad",
              "01993cbf-056c-7bdf-ba19-9a0b2e5cc450",
              "01993cbf-0572-7466-b4c5-4d60321797d9",
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
          id: "01993cbf-0573-7870-b81c-76d01b9ed06d",
          opprettet: "2025-09-12T09:06:15.795271",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 1999,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["01993cbf-0572-7466-b4c5-4d60321797dc"],
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
          id: "01993cbf-0573-7870-b81c-76d01b9ed06e",
          opprettet: "2025-09-12T09:06:15.795321",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "SjekkAvTerskel",
            },
            opplysninger: [
              "01993cbf-056b-7e9a-a533-38be8b3d51ac",
              "01993cbf-056c-7bdf-ba19-9a0b2e5cc451",
              "01993cbf-0572-7466-b4c5-4d60321797dd",
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
          id: "01993cbf-08c4-7afc-8f53-dbd16ae7cb37",
          opprettet: "2025-09-12T09:06:16.644843",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:16.593314",
            meldingId: "ff7d8337-4ae3-4035-b814-9bec8253f9d8",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993cbf-0181-77f1-aa6c-16fe3da07faf"],
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
          id: "01993cbf-08c4-7afc-8f53-dbd16ae7cb38",
          opprettet: "2025-09-12T09:06:16.644983",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: [],
            datatype: "barn",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:16.593384",
            meldingId: "ff7d8337-4ae3-4035-b814-9bec8253f9d8",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993cbf-0181-77f1-aa6c-16fe3da07faf"],
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
          id: "01993cbf-08c5-7e48-8ddf-44789a52fce1",
          opprettet: "2025-09-12T09:06:16.645078",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:16.593437",
            meldingId: "ff7d8337-4ae3-4035-b814-9bec8253f9d8",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993cbf-0181-77f1-aa6c-16fe3da07faf"],
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
          id: "01993cbf-08c5-7e48-8ddf-44789a52fce2",
          opprettet: "2025-09-12T09:06:16.645153",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:16.593468",
            meldingId: "ff7d8337-4ae3-4035-b814-9bec8253f9d8",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993cbf-0181-77f1-aa6c-16fe3da07faf"],
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
          id: "01993cbf-08c5-7e48-8ddf-44789a52fce3",
          opprettet: "2025-09-12T09:06:16.64522",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:16.593502",
            meldingId: "ff7d8337-4ae3-4035-b814-9bec8253f9d8",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
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
          id: "01993cbf-08c5-7e48-8ddf-44789a52fce4",
          opprettet: "2025-09-12T09:06:16.645287",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:16.593562",
            meldingId: "ff7d8337-4ae3-4035-b814-9bec8253f9d8",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
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
          id: "01993cbf-08c5-7e48-8ddf-44789a52fce5",
          opprettet: "2025-09-12T09:06:16.645383",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:16.59362",
            meldingId: "ff7d8337-4ae3-4035-b814-9bec8253f9d8",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
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
          id: "01993cbf-08c5-7e48-8ddf-44789a52fce6",
          opprettet: "2025-09-12T09:06:16.645444",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:16.593664",
            meldingId: "ff7d8337-4ae3-4035-b814-9bec8253f9d8",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
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
          id: "01993cbf-08c5-7e48-8ddf-44789a52fce7",
          opprettet: "2025-09-12T09:06:16.645501",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:16.593711",
            meldingId: "ff7d8337-4ae3-4035-b814-9bec8253f9d8",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
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
          id: "01993cbf-08c5-7e48-8ddf-44789a52fce8",
          opprettet: "2025-09-12T09:06:16.645583",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-12T09:06:16.593757",
            meldingId: "ff7d8337-4ae3-4035-b814-9bec8253f9d8",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
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
      redigertAvSaksbehandler: true,
      formål: "Bruker",
      perioder: [
        {
          id: "01993cbf-08c6-7771-93ab-f51c695a4ea7",
          opprettet: "2025-09-12T09:06:16.646902",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-10-09",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["01993cbf-08c4-7afc-8f53-dbd16ae7cb37"],
          },
        },
        {
          id: "0199c297-b23c-7baf-a853-344c4afd3a54",
          opprettet: "2025-10-08T08:52:25.532538",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-10",
          gyldigTilOgMed: "2025-10-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-10-08T08:52:25.154787",
            ident: "Z994794",
            begrunnelse: {
              verdi: "Skal se kirsebærblomstringen i Japan",
              sistEndret: "2025-10-08T08:52:25.151037",
            },
          },
        },
        {
          id: "0199c299-0241-7245-9f2e-7e86e9721cd4",
          opprettet: "2025-10-08T08:53:51.553942",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-30",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-10-08T08:53:51.381371",
            ident: "Z994794",
            begrunnelse: {
              verdi: "Kom tilbake fra Japan, men glemte å søke om gjenopptak",
              sistEndret: "2025-10-08T08:53:51.381354",
            },
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
          id: "01993cbf-08c6-7771-93ab-f51c695a4ea8",
          opprettet: "2025-09-12T09:06:16.646991",
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
            opplysninger: ["01993cbf-08c4-7afc-8f53-dbd16ae7cb38"],
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
          id: "01993cbf-08c7-7e68-b6a2-e2e3c1ce51de",
          opprettet: "2025-09-12T09:06:16.647065",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01993cbf-056c-7bdf-ba19-9a0b2e5cc44e",
              "01993cbf-08c5-7e48-8ddf-44789a52fce3",
              "01993cbf-08c5-7e48-8ddf-44789a52fce4",
              "01993cbf-08c5-7e48-8ddf-44789a52fce5",
              "01993cbf-08c5-7e48-8ddf-44789a52fce6",
              "01993cbf-08c5-7e48-8ddf-44789a52fce7",
              "01993cbf-08c5-7e48-8ddf-44789a52fce8",
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
          id: "01993cbf-08c7-7e68-b6a2-e2e3c1ce51df",
          opprettet: "2025-09-12T09:06:16.647118",
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
            opplysninger: ["01993cbf-08c5-7e48-8ddf-44789a52fce1"],
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
          id: "01993cbf-08c7-7e68-b6a2-e2e3c1ce51e0",
          opprettet: "2025-09-12T09:06:16.647152",
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
            opplysninger: ["01993cbf-08c5-7e48-8ddf-44789a52fce2"],
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
          id: "01993cbf-08c7-7e68-b6a2-e2e3c1ce51e1",
          opprettet: "2025-09-12T09:06:16.647187",
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
            opplysninger: ["01993cbf-08c5-7e48-8ddf-44789a52fce2"],
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
          id: "01993cbf-08c7-7e68-b6a2-e2e3c1ce51e3",
          opprettet: "2025-09-12T09:06:16.647843",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-10-09",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01993cbf-056a-7a19-8ee4-71cb46e40c2a",
              "01993cbf-08c6-7771-93ab-f51c695a4ea7",
            ],
          },
        },
        {
          id: "0199c297-b259-76f9-948b-16d22b2b1537",
          opprettet: "2025-10-08T08:52:25.561618",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-10",
          gyldigTilOgMed: "2025-10-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01993cbf-056a-7a19-8ee4-71cb46e40c2a",
              "0199c297-b23c-7baf-a853-344c4afd3a54",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.49-1e3288a",
          },
        },
        {
          id: "0199c299-024b-70f2-9c38-974aba6e0d10",
          opprettet: "2025-10-08T08:53:51.563819",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-30",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01993cbf-056a-7a19-8ee4-71cb46e40c2a",
              "0199c299-0241-7245-9f2e-7e86e9721cd4",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.49-1e3288a",
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
          id: "01993cbf-08c7-7e68-b6a2-e2e3c1ce51e4",
          opprettet: "2025-09-12T09:06:16.647918",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993cbf-056a-7a19-8ee4-71cb46e40c33",
              "01993cbf-08c6-7771-93ab-f51c695a4ea8",
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
          id: "01993cbf-08c7-7e68-b6a2-e2e3c1ce51e5",
          opprettet: "2025-09-12T09:06:16.647991",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "01993cbf-056b-7e9a-a533-38be8b3d51b6",
              "01993cbf-056c-7bdf-ba19-9a0b2e5cc452",
              "01993cbf-0573-7870-b81c-76d01b9ed06e",
              "01993cbf-08c7-7e68-b6a2-e2e3c1ce51df",
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
          id: "01993cbf-08c8-7595-9dad-a47636c2db1b",
          opprettet: "2025-09-12T09:06:16.648049",
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
              "01993cbf-056c-7bdf-ba19-9a0b2e5cc453",
              "01993cbf-08c7-7e68-b6a2-e2e3c1ce51e0",
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
          id: "01993cbf-08c8-7595-9dad-a47636c2db1d",
          opprettet: "2025-09-12T09:06:16.648671",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-10-09",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "01993cbf-056c-7bdf-ba19-9a0b2e5cc44a",
              "01993cbf-08c7-7e68-b6a2-e2e3c1ce51e3",
            ],
          },
        },
        {
          id: "0199c297-b260-7be1-a3c2-ccd77bc943b2",
          opprettet: "2025-10-08T08:52:25.568716",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-10",
          gyldigTilOgMed: "2025-10-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "01993cbf-056c-7bdf-ba19-9a0b2e5cc44a",
              "0199c297-b259-76f9-948b-16d22b2b1537",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.49-1e3288a",
          },
        },
        {
          id: "0199c299-0250-7434-988c-fbc571a18365",
          opprettet: "2025-10-08T08:53:51.568959",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-30",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "01993cbf-056c-7bdf-ba19-9a0b2e5cc44a",
              "0199c299-024b-70f2-9c38-974aba6e0d10",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.49-1e3288a",
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
          id: "01993cbf-08c8-7595-9dad-a47636c2db1e",
          opprettet: "2025-09-12T09:06:16.648843",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "01993cbf-0572-7466-b4c5-4d60321797db",
              "01993cbf-08c7-7e68-b6a2-e2e3c1ce51e4",
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
          id: "01993cbf-08c8-7595-9dad-a47636c2db1f",
          opprettet: "2025-09-12T09:06:16.64892",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01993cbf-056a-7a19-8ee4-71cb46e40c33",
              "01993cbf-08c7-7e68-b6a2-e2e3c1ce51e4",
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
          id: "01993cbf-08c8-7595-9dad-a47636c2db20",
          opprettet: "2025-09-12T09:06:16.648998",
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
              "01993cbf-08c7-7e68-b6a2-e2e3c1ce51e1",
              "01993cbf-08c8-7595-9dad-a47636c2db1b",
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
          id: "01993cbf-08ca-741b-90f4-5f38c922e1c7",
          opprettet: "2025-09-12T09:06:16.650969",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "01993cbf-0573-7870-b81c-76d01b9ed06d",
              "01993cbf-08c8-7595-9dad-a47636c2db1e",
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
          id: "01993cbf-08cd-7228-a5e9-9fbbea303acc",
          opprettet: "2025-09-12T09:06:16.653899",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "01993cbf-0572-7466-b4c5-4d60321797db",
              "01993cbf-08ca-741b-90f4-5f38c922e1c7",
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
          id: "01993cbf-08cf-7274-9450-a82bddd2157b",
          opprettet: "2025-09-12T09:06:16.655852",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "01993cbf-056e-76e8-802d-cee1b440063f",
              "01993cbf-08cd-7228-a5e9-9fbbea303acc",
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
          id: "01993cbf-08d0-7df7-8285-bf0f60b84903",
          opprettet: "2025-09-12T09:06:16.656151",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01993cbf-056e-76e8-802d-cee1b440063f",
              "01993cbf-08cd-7228-a5e9-9fbbea303acc",
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
          id: "01993cbf-08d1-7fa9-8103-fa176d19f93c",
          opprettet: "2025-09-12T09:06:16.657938",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01993cbf-08c8-7595-9dad-a47636c2db1f",
              "01993cbf-08d0-7df7-8285-bf0f60b84903",
            ],
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
      redigertAvSaksbehandler: true,
      formål: "Bruker",
      perioder: [
        {
          id: "0199c28a-167b-7b1b-9720-dc9f4ff54b30",
          opprettet: "2025-10-08T08:37:33.691754",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-10-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-10-08T08:37:33.628635",
            ident: "Z994794",
            begrunnelse: {
              verdi: "Liker seg best på fiskekaia",
              sistEndret: "2025-10-08T08:37:33.628606",
            },
          },
        },
        {
          id: "0199c29c-752a-7ac5-8f6e-844a32f90b3b",
          opprettet: "2025-10-08T08:57:37.57864",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-30",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-10-08T08:57:37.23812",
            ident: "Z994794",
            begrunnelse: {
              verdi:
                "Etter å sett blomstringen i Japan er hen klar for å legge fiskestanga på hylla",
              sistEndret: "2025-10-08T08:57:37.238097",
            },
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
      redigertAvSaksbehandler: true,
      formål: "Regel",
      perioder: [
        {
          id: "0199c28a-4ea5-762c-88fa-248a6a1f7bd8",
          opprettet: "2025-10-08T08:37:48.069262",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-10-08T08:37:48.007547",
            ident: "Z994794",
            begrunnelse: {
              verdi: "Men vi er glad i fisk, så det går bra",
              sistEndret: "2025-10-08T08:37:48.007521",
            },
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
          id: "0199c28a-4ea8-7473-a759-a5d93ea03bf4",
          opprettet: "2025-10-08T08:37:48.072944",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-10-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "0199c28a-167b-7b1b-9720-dc9f4ff54b30",
              "0199c28a-4ea5-762c-88fa-248a6a1f7bd8",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
          },
        },
        {
          id: "0199c29c-7530-7f6c-b2c5-18ec484dd7e1",
          opprettet: "2025-10-08T08:57:37.584602",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-30",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "0199c28a-4ea5-762c-88fa-248a6a1f7bd8",
              "0199c29c-752a-7ac5-8f6e-844a32f90b3b",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.49-1e3288a",
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
          id: "0199c28a-4eaa-74f7-ac42-4e3faca451e8",
          opprettet: "2025-10-08T08:37:48.074638",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-10-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "01993cbf-0565-7ebf-b6ba-d5558ea4fb29",
              "01993cbf-0565-7ebf-b6ba-d5558ea4fb2a",
              "01993cbf-0565-7ebf-b6ba-d5558ea4fb2b",
              "01993cbf-0565-7ebf-b6ba-d5558ea4fb2c",
              "0199c28a-4ea8-7473-a759-a5d93ea03bf4",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
          },
        },
        {
          id: "0199c29c-7533-7ce7-830d-12d63aca46ea",
          opprettet: "2025-10-08T08:57:37.587635",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-30",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "01993cbf-0565-7ebf-b6ba-d5558ea4fb29",
              "01993cbf-0565-7ebf-b6ba-d5558ea4fb2a",
              "01993cbf-0565-7ebf-b6ba-d5558ea4fb2b",
              "01993cbf-0565-7ebf-b6ba-d5558ea4fb2c",
              "0199c29c-7530-7f6c-b2c5-18ec484dd7e1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.49-1e3288a",
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
          id: "0199c28a-4eae-74ea-90fa-c1cfdf1c8a7b",
          opprettet: "2025-10-08T08:37:48.078063",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "01993cbf-056c-7bdf-ba19-9a0b2e5cc44c",
              "01993cbf-056d-79df-899a-4e8aa2fd320d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eae-74ea-90fa-c1cfdf1c8a7c",
          opprettet: "2025-10-08T08:37:48.078197",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "01993cbf-056c-7bdf-ba19-9a0b2e5cc44c",
              "01993cbf-056d-79df-899a-4e8aa2fd320e",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eae-74ea-90fa-c1cfdf1c8a7d",
          opprettet: "2025-10-08T08:37:48.078283",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "01993cbf-056c-7bdf-ba19-9a0b2e5cc44c",
              "01993cbf-056d-79df-899a-4e8aa2fd320f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eae-74ea-90fa-c1cfdf1c8a7e",
          opprettet: "2025-10-08T08:37:48.078461",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: "Inntekt etter avkortning og oppjustering siste 12 måneder",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Brukt",
            },
            opplysninger: ["01993cbf-0570-79ba-82fc-bb6eabebf141"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eb2-7a2b-bedb-34aa6c03c1da",
          opprettet: "2025-10-08T08:37:48.082736",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 555550,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01993cbf-056a-7a19-8ee4-71cb46e40c2d"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eb3-7f18-b4fe-c60cb4c55df0",
          opprettet: "2025-10-08T08:37:48.083183",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01993cbf-056a-7a19-8ee4-71cb46e40c2d"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eb3-7f18-b4fe-c60cb4c55df1",
          opprettet: "2025-10-08T08:37:48.08342",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01993cbf-056a-7a19-8ee4-71cb46e40c2d"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eb3-7f18-b4fe-c60cb4c55df2",
          opprettet: "2025-10-08T08:37:48.083595",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 5,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eb3-7f18-b4fe-c60cb4c55df3",
          opprettet: "2025-10-08T08:37:48.083727",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 0.03,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eb3-7f18-b4fe-c60cb4c55df4",
          opprettet: "2025-10-08T08:37:48.083796",
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
          id: "0199c28a-4eb3-7f18-b4fe-c60cb4c55df5",
          opprettet: "2025-10-08T08:37:48.083862",
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
          id: "0199c28a-4eb3-7f18-b4fe-c60cb4c55df6",
          opprettet: "2025-10-08T08:37:48.083961",
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
          id: "0199c28a-4eb4-745f-b806-f430e8767bc7",
          opprettet: "2025-10-08T08:37:48.084026",
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
          id: "0199c28a-4eb4-745f-b806-f430e8767bc8",
          opprettet: "2025-10-08T08:37:48.084107",
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
          id: "0199c28a-4eb4-745f-b806-f430e8767bc9",
          opprettet: "2025-10-08T08:37:48.084173",
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
          id: "0199c28a-4eb4-745f-b806-f430e8767bca",
          opprettet: "2025-10-08T08:37:48.084299",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 2,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eb4-745f-b806-f430e8767bcb",
          opprettet: "2025-10-08T08:37:48.08441",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 104,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eb4-745f-b806-f430e8767bcc",
          opprettet: "2025-10-08T08:37:48.084531",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 52,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eb5-7323-a0f3-239a36ca7293",
          opprettet: "2025-10-08T08:37:48.085798",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 185183.33333333334,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "01993cbf-0566-7f51-98bb-685c90bcc86e",
              "01993cbf-056a-7a19-8ee4-71cb46e40c2f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eb5-7323-a0f3-239a36ca7294",
          opprettet: "2025-10-08T08:37:48.085963",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 2,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eb6-7c94-a2d4-c12f79b84df7",
          opprettet: "2025-10-08T08:37:48.086086",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 0,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eb6-7c94-a2d4-c12f79b84df8",
          opprettet: "2025-10-08T08:37:48.086194",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 5,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eb6-7c94-a2d4-c12f79b84df9",
          opprettet: "2025-10-08T08:37:48.086246",
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
          id: "0199c28a-4eb6-7c94-a2d4-c12f79b84dfa",
          opprettet: "2025-10-08T08:37:48.086325",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 3,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eb6-7c94-a2d4-c12f79b84dfb",
          opprettet: "2025-10-08T08:37:48.086384",
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
          id: "0199c28a-4eb6-7c94-a2d4-c12f79b84dfc",
          opprettet: "2025-10-08T08:37:48.086443",
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
          id: "0199c28a-4eb6-7c94-a2d4-c12f79b84dfd",
          opprettet: "2025-10-08T08:37:48.086531",
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
          id: "0199c28a-4eb6-7c94-a2d4-c12f79b84dfe",
          opprettet: "2025-10-08T08:37:48.08658",
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
          id: "0199c28a-4eb6-7c94-a2d4-c12f79b84dff",
          opprettet: "2025-10-08T08:37:48.086625",
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
          id: "0199c28a-4eb6-7c94-a2d4-c12f79b84e00",
          opprettet: "2025-10-08T08:37:48.086673",
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
          id: "0199c28a-4eb6-7c94-a2d4-c12f79b84e01",
          opprettet: "2025-10-08T08:37:48.086769",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 26,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993cbf-02aa-723e-87fb-927249acf510"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eb9-76e1-a872-cc1b64240b2c",
          opprettet: "2025-10-08T08:37:48.089418",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "0199c28a-4eae-74ea-90fa-c1cfdf1c8a7b",
              "0199c28a-4eae-74ea-90fa-c1cfdf1c8a7c",
              "0199c28a-4eae-74ea-90fa-c1cfdf1c8a7d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eb9-76e1-a872-cc1b64240b2d",
          opprettet: "2025-10-08T08:37:48.089767",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 6930,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993cbf-08cf-7274-9450-a82bddd2157b",
              "0199c28a-4eb3-7f18-b4fe-c60cb4c55df2",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eb9-76e1-a872-cc1b64240b2e",
          opprettet: "2025-10-08T08:37:48.089961",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 3904.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993cbf-056a-7a19-8ee4-71cb46e40c2c",
              "0199c28a-4eb3-7f18-b4fe-c60cb4c55df3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eba-743e-aeea-dd5336fa588c",
          opprettet: "2025-10-08T08:37:48.090323",
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
              "0199c28a-4eb3-7f18-b4fe-c60cb4c55df4",
              "0199c28a-4eb3-7f18-b4fe-c60cb4c55df5",
              "0199c28a-4eb3-7f18-b4fe-c60cb4c55df6",
              "0199c28a-4eb4-745f-b806-f430e8767bc7",
              "0199c28a-4eb4-745f-b806-f430e8767bc8",
              "0199c28a-4eb4-745f-b806-f430e8767bc9",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eba-743e-aeea-dd5336fa588d",
          opprettet: "2025-10-08T08:37:48.090445",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 6930,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993cbf-08c8-7595-9dad-a47636c2db1e",
              "0199c28a-4eb3-7f18-b4fe-c60cb4c55df2",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4ebb-760d-b64a-b99bdbf9cff0",
          opprettet: "2025-10-08T08:37:48.091251",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993cbf-02ab-769d-82d2-59f204b3d61e",
              "0199c28a-4eb4-745f-b806-f430e8767bca",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4ebb-760d-b64a-b99bdbf9cff1",
          opprettet: "2025-10-08T08:37:48.091675",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993cbf-02ab-769d-82d2-59f204b3d61e",
              "0199c28a-4eb5-7323-a0f3-239a36ca7294",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4ec0-70ea-b43c-2c4bd37525de",
          opprettet: "2025-10-08T08:37:48.096166",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 3904.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "0199c28a-4eb9-76e1-a872-cc1b64240b2d",
              "0199c28a-4eb9-76e1-a872-cc1b64240b2e",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4ec0-70ea-b43c-2c4bd37525df",
          opprettet: "2025-10-08T08:37:48.096919",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 6930,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "0199c28a-4eb9-76e1-a872-cc1b64240b2d",
              "0199c28a-4eba-743e-aeea-dd5336fa588c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4ec1-7bab-a44a-331fe825bc29",
          opprettet: "2025-10-08T08:37:48.097185",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01993cbf-0566-7f51-98bb-685c90bcc86d",
              "0199c28a-4ebb-760d-b64a-b99bdbf9cff0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4ec1-7bab-a44a-331fe825bc2a",
          opprettet: "2025-10-08T08:37:48.097365",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "0199c28a-4eb5-7323-a0f3-239a36ca7293",
              "0199c28a-4ebb-760d-b64a-b99bdbf9cff1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4ec4-7af5-ba5f-c0476bc22878",
          opprettet: "2025-10-08T08:37:48.100574",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 6930,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "0199c28a-4ec0-70ea-b43c-2c4bd37525de",
              "0199c28a-4ec0-70ea-b43c-2c4bd37525df",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4ec4-7af5-ba5f-c0476bc22879",
          opprettet: "2025-10-08T08:37:48.100798",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 104,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "0199c28a-4eb4-745f-b806-f430e8767bcb",
              "0199c28a-4eb4-745f-b806-f430e8767bcc",
              "0199c28a-4ec1-7bab-a44a-331fe825bc29",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4ec5-7e70-954a-25233eb8e467",
          opprettet: "2025-10-08T08:37:48.101015",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 52,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "0199c28a-4eb4-745f-b806-f430e8767bcb",
              "0199c28a-4eb4-745f-b806-f430e8767bcc",
              "0199c28a-4ec1-7bab-a44a-331fe825bc2a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4ec7-79be-b9da-a0a025e147a1",
          opprettet: "2025-10-08T08:37:48.103641",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "0199c28a-4eb3-7f18-b4fe-c60cb4c55df2",
              "0199c28a-4ec4-7af5-ba5f-c0476bc22878",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4ec7-79be-b9da-a0a025e147a2",
          opprettet: "2025-10-08T08:37:48.103765",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 104,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "0199c28a-4ec4-7af5-ba5f-c0476bc22879",
              "0199c28a-4ec5-7e70-954a-25233eb8e467",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eca-7efd-9cae-85e5ed4bc531",
          opprettet: "2025-10-08T08:37:48.106469",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "01993cbf-08c7-7e68-b6a2-e2e3c1ce51e4",
              "0199c28a-4ec7-79be-b9da-a0a025e147a1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eca-7efd-9cae-85e5ed4bc532",
          opprettet: "2025-10-08T08:37:48.106615",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErUlik",
            },
            opplysninger: [
              "01993cbf-08cd-7228-a5e9-9fbbea303acc",
              "0199c28a-4ec7-79be-b9da-a0a025e147a1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eca-7efd-9cae-85e5ed4bc533",
          opprettet: "2025-10-08T08:37:48.106732",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 104,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "01993cbf-056a-7a19-8ee4-71cb46e40c27",
              "0199c28a-4eb6-7c94-a2d4-c12f79b84df7",
              "0199c28a-4ec7-79be-b9da-a0a025e147a2",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4eca-7efd-9cae-85e5ed4bc534",
          opprettet: "2025-10-08T08:37:48.106875",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 520,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199c28a-4eb6-7c94-a2d4-c12f79b84df8",
              "0199c28a-4ec7-79be-b9da-a0a025e147a2",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
      redigertAvSaksbehandler: true,
      formål: "Regel",
      perioder: [
        {
          id: "0199c28a-4ecc-79c1-a96d-daf62e3b9b3a",
          opprettet: "2025-10-08T08:37:48.108954",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          gyldigTilOgMed: "2025-10-29",
          verdi: {
            verdi: 1386,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01993cbf-0573-7870-b81c-76d01b9ed06d",
              "0199c28a-4eca-7efd-9cae-85e5ed4bc531",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
          },
        },
        {
          id: "0199c29b-19d3-79a5-9451-0a695ce8bebb",
          opprettet: "2025-10-08T08:56:08.659264",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-30",
          verdi: {
            verdi: 5000,
            datatype: "penger",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-10-08T08:56:08.499993",
            ident: "Z994794",
            begrunnelse: {
              verdi: "1386 kroner per dag er litt lite",
              sistEndret: "2025-10-08T08:56:08.499971",
            },
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
          id: "0199c28a-4ecf-76d3-9fa2-e51a2079cf91",
          opprettet: "2025-10-08T08:37:48.111344",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          gyldigTilOgMed: "2025-10-29",
          verdi: {
            verdi: 6930,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199c28a-4eb3-7f18-b4fe-c60cb4c55df2",
              "0199c28a-4ecc-79c1-a96d-daf62e3b9b3a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
          },
        },
        {
          id: "0199c29b-19d7-7aa8-a523-969fece177a1",
          opprettet: "2025-10-08T08:56:08.663862",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-30",
          verdi: {
            verdi: 25000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199c28a-4eb3-7f18-b4fe-c60cb4c55df2",
              "0199c29b-19d3-79a5-9451-0a695ce8bebb",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.49-1e3288a",
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
          id: "0199c28a-4ecf-76d3-9fa2-e51a2079cf92",
          opprettet: "2025-10-08T08:37:48.111506",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 4158,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0199c28a-4eb6-7c94-a2d4-c12f79b84dfa",
              "0199c28a-4ecc-79c1-a96d-daf62e3b9b3a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4ed2-79bd-b4ba-7caf7664faa3",
          opprettet: "2025-10-08T08:37:48.114474",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: 4158,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "01993cbf-0564-767b-bf37-dd9e5ea54c3e",
              "0199c28a-4eb6-7c94-a2d4-c12f79b84df9",
              "0199c28a-4ecf-76d3-9fa2-e51a2079cf92",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-4ff6-7ab7-be98-4145ffaf0454",
          opprettet: "2025-10-08T08:37:48.406187",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-10-08T08:37:48.360813",
            meldingId: "f9f6df36-6a2e-484b-935e-0df7a3317c71",
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
          id: "0199c28a-4ff9-7ee5-9a23-0cfae3b0ac27",
          opprettet: "2025-10-08T08:37:48.409619",
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
              "0199c28a-4eb6-7c94-a2d4-c12f79b84dfb",
              "0199c28a-4eb6-7c94-a2d4-c12f79b84dfc",
              "0199c28a-4eb6-7c94-a2d4-c12f79b84dfd",
              "0199c28a-4eb6-7c94-a2d4-c12f79b84dfe",
              "0199c28a-4eb6-7c94-a2d4-c12f79b84dff",
              "0199c28a-4eb6-7c94-a2d4-c12f79b84e00",
              "0199c28a-4ff6-7ab7-be98-4145ffaf0454",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.08-06.31-3563ac5",
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
          id: "0199c28a-b7e5-7344-b5f4-8987487188f9",
          opprettet: "2025-10-08T08:38:15.01316",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
      ],
    },
  ],
  rettighetsperioder: [
    {
      fraOgMed: "2025-09-12",
      harRett: true,
      opprinnelse: "Arvet",
    },
  ],
};
