import type { components } from "../../../openapi/behandling-typer";

export const behandling019a81e399ab79518dd1614c3b5bcf48: components["schemas"]["Behandling"] = {
  behandlingId: "019a81e3-99ab-7951-8dd1-614c3b5bcf48",
  behandletHendelse: {
    datatype: "UUID",
    id: "67b4363d-0d67-4f1b-b33d-689335bc137f",
    type: "Søknad",
    skjedde: "2025-11-14",
  },
  opprettet: "2025-11-14",
  sistEndret: "2025-11-14",
  behandlingskjedeId: "019956b6-7d42-7418-a8ec-d46abad0641a",
  basertPå: "019956b6-7d42-7418-a8ec-d46abad0641a",
  automatisk: true,
  ident: "07430195322",
  rettighetsperioder: [
    {
      fraOgMed: "2025-09-17",
      harRett: true,
      opprinnelse: "Arvet",
    },
  ],
  kreverTotrinnskontroll: true,
  tilstand: "ForslagTilVedtak",
  avklaringer: [
    {
      id: "019a81e3-99aa-7e00-aeb8-d5febf38dfa0",
      kode: "GjenopptakBehandling",
      tittel: "!! Behandles som gjenopptak i ny løsning. Disse støtter vi ikke, så IKKE RØR 😬",
      beskrivelse:
        "Denne saken har en innvilget behandling i ny løsning, og det må vurderes om den skal gjenopptas.",
      kanKvitteres: true,
      status: "Avbrutt",
      maskinelt: true,
      sistEndret: "2025-11-14T11:22:48.310266",
      regelsett: [],
    },
    {
      id: "019a81e3-99f6-790d-9d65-e03b6225dff7",
      kode: "HarTilleggsopplysninger",
      tittel: "Sjekk hva bruker har oppgitt som tilleggsopplysninger i søknaden",
      beskrivelse: "Du må vurdere om tilleggsopplysninger har betydning for saken",
      kanKvitteres: true,
      status: "Åpen",
      maskinelt: false,
      sistEndret: "2025-11-14T11:22:48.310302",
      regelsett: [],
    },
    {
      id: "019a81e4-e883-7e74-8828-fcce94c137b1",
      kode: "BarnMåGodkjennes",
      tittel: "Sjekk hvilke barn som skal gi barnetillegg",
      beskrivelse: "Barn må godkjennes om de skal gi barnetillegg",
      kanKvitteres: true,
      status: "Åpen",
      maskinelt: false,
      sistEndret: "2025-11-14T11:24:13.955472",
      regelsett: [
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
        },
      ],
    },
    {
      id: "019a81e4-e883-7e74-8828-fcce94c137b3",
      kode: "Bostedsland",
      tittel: "Bruker har oppgitt bostedsland som ikke er Norge",
      beskrivelse:
        "Du må sjekke om bruker oppfyller vilkåret om opphold i Norge eller er unntatt fra vilkåret om opphold",
      kanKvitteres: true,
      status: "Åpen",
      maskinelt: false,
      sistEndret: "2025-11-14T11:24:13.955514",
      regelsett: [
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
        },
      ],
    },
    {
      id: "019a81e4-e883-7e74-8828-fcce94c137b5",
      kode: "HattLukkedeSakerSiste8Uker",
      tittel: "Sjekk om nylig lukkede saker i Arena kan påvirke behandlingen",
      beskrivelse:
        "Personen har lukkede saker i Arena siste 8 uker. Har vi nylig gitt avslag bør vi sjekke om det er nødvendig med ekstra \nveiledning.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-11-14T11:28:21.898614",
      regelsett: [],
    },
    {
      id: "019a81e4-e883-7e74-8828-fcce94c137b7",
      kode: "MuligGjenopptak",
      tittel: "Sjekk om det er sak som kan gjenopptas i Arena",
      beskrivelse:
        "Personen har åpne saker i Arena som kan være gjenopptak. Saker som skal gjenopptas må håndteres i Arena.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-11-14T11:28:23.642162",
      regelsett: [],
    },
    {
      id: "019a81e4-e883-7e74-8828-fcce94c137b9",
      kode: "ReellArbeidssøkerUnntak",
      tittel: "Sjekk om søker oppfyller unntak til å være reell arbeidssøker",
      beskrivelse: "Det må vurderes om søker kvalifiserer til unntakene til reell arbeidssøker",
      kanKvitteres: true,
      status: "Åpen",
      maskinelt: false,
      sistEndret: "2025-11-14T11:24:13.95553",
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
    {
      id: "019a81e4-e883-7e74-8828-fcce94c137bd",
      kode: "Verneplikt",
      tittel: "Sjekk om søker oppfyller vilkåret til dagpenger ved avtjent verneplikt",
      beskrivelse:
        "Søker har oppgitt at de har avtjent verneplikt. Det må sjekkes om kravet til dagpenger ved avtjent verneplikt er oppfylt.",
      kanKvitteres: true,
      status: "Åpen",
      maskinelt: false,
      sistEndret: "2025-11-14T11:24:13.95554",
      regelsett: [
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
        },
      ],
    },
    {
      id: "019a81e8-bd48-7373-b172-dc2a5e3e97ef",
      kode: "IkkeRegistrertSomArbeidsøker",
      tittel: "Søker er ikke registrert som arbeidssøker",
      beskrivelse: "Søker er ikke registrert som arbeidssøker.",
      kanKvitteres: true,
      status: "Åpen",
      maskinelt: false,
      sistEndret: "2025-11-14T11:28:25.032646",
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
          id: "019956b6-7d42-7418-a8ec-d46abad06415",
          opprettet: "2025-09-17T10:07:04.258443",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 15538604,
            datatype: "heltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:04.258423",
            meldingId: "5b37b855-2693-4892-ab30-559fc1d27619",
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
          id: "019956b6-7d42-7418-a8ec-d46abad06417",
          opprettet: "2025-09-17T10:07:04.258496",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: "c2f8944b-9100-4f64-87c6-b15907db0c72",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:04.258494",
            meldingId: "5b37b855-2693-4892-ab30-559fc1d27619",
          },
        },
        {
          id: "019a81e3-99ad-7d0f-8940-78eb534f6054",
          opprettet: "2025-11-14T11:22:48.237935",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: "67b4363d-0d67-4f1b-b33d-689335bc137f",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:22:48.237888",
            meldingId: "4ea132c1-43d4-45e6-8c05-54f2181fda89",
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
          id: "019956b6-7d42-7418-a8ec-d46abad06419",
          opprettet: "2025-09-17T10:07:04.258517",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          gyldigTilOgMed: "2025-09-17",
          verdi: {
            verdi: "SøknadInnsendtHendelse",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:04.258516",
            meldingId: "5b37b855-2693-4892-ab30-559fc1d27619",
          },
        },
        {
          id: "019a81e3-99b1-7ced-8000-c8c4f5d3b5ac",
          opprettet: "2025-11-14T11:22:48.241536",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          gyldigTilOgMed: "2025-11-14",
          verdi: {
            verdi: "SøknadInnsendtHendelse",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:22:48.24153",
            meldingId: "4ea132c1-43d4-45e6-8c05-54f2181fda89",
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
          id: "019956b6-7d52-786b-b364-928b6f10edb6",
          opprettet: "2025-09-17T10:07:04.2743",
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
      opplysningTypeId: "0194881f-91d1-7df2-ba1d-4533f37fcc73",
      navn: "Søknadsdato",
      datatype: "dato",
      perioder: [
        {
          id: "019956b6-83ed-7842-8798-4c6966962652",
          opprettet: "2025-09-17T10:07:05.965768",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: "2025-09-17",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:05.626515",
            meldingId: "2b27d361-36c4-4620-8cf7-d18463c84a4d",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019956b6-7d42-7418-a8ec-d46abad06417"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e818-7629-b508-ac12b850da73",
          opprettet: "2025-11-14T11:24:13.848169",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: "2025-11-14",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:24:12.621816",
            meldingId: "18f63d4d-53d9-433a-a691-73b71ee965cf",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a81e3-99ad-7d0f-8940-78eb534f6054"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-83ed-7842-8798-4c6966962653",
          opprettet: "2025-09-17T10:07:05.96588",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: "2025-09-01",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:05.628992",
            meldingId: "2b27d361-36c4-4620-8cf7-d18463c84a4d",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019956b6-7d42-7418-a8ec-d46abad06417"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e81c-7092-9e35-aac362dfd753",
          opprettet: "2025-11-14T11:24:13.852616",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: "2025-11-01",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:24:12.625304",
            meldingId: "18f63d4d-53d9-433a-a691-73b71ee965cf",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a81e3-99ad-7d0f-8940-78eb534f6054"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
          },
        },
      ],
      synlig: true,
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
          id: "019956b6-83ed-7842-8798-4c6966962654",
          opprettet: "2025-09-17T10:07:05.965936",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "1991-03-07",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:05.629363",
            meldingId: "2b27d361-36c4-4620-8cf7-d18463c84a4d",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-91d1-7df2-ba1d-4533f37fcc75",
      navn: "Søknadstidspunkt",
      datatype: "dato",
      perioder: [
        {
          id: "019956b6-83ef-7ee2-8f21-7224945a00fd",
          opprettet: "2025-09-17T10:07:05.967185",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: "2025-09-17",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: [
              "019956b6-83ed-7842-8798-4c6966962652",
              "019956b6-83ed-7842-8798-4c6966962653",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e847-7f09-ac31-492c649fd4b2",
          opprettet: "2025-11-14T11:24:13.895544",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: "2025-11-14",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: [
              "019a81e4-e818-7629-b508-ac12b850da73",
              "019a81e4-e81c-7092-9e35-aac362dfd753",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-83ef-7ee2-8f21-7224945a00fe",
          opprettet: "2025-09-17T10:07:05.967267",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2058-03-07",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "LeggTilÅr",
            },
            opplysninger: [
              "019956b6-7d52-786b-b364-928b6f10edb6",
              "019956b6-83ed-7842-8798-4c6966962654",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-83ef-7ee2-8f21-7224945a0100",
          opprettet: "2025-09-17T10:07:05.967695",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: "2025-09-17",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a00fd"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e85e-7b39-804e-300e40ab3c36",
          opprettet: "2025-11-14T11:24:13.918553",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: "2025-11-14",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: ["019a81e4-e847-7f09-ac31-492c649fd4b2"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-83ef-7ee2-8f21-7224945a0101",
          opprettet: "2025-09-17T10:07:05.96778",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2058-03-31",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteDagIMåned",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a00fe"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-83f0-726a-9a0c-703c218a4623",
          opprettet: "2025-09-17T10:07:05.968238",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "FørEllerLik",
            },
            opplysninger: [
              "019956b6-83ef-7ee2-8f21-7224945a0100",
              "019956b6-83ef-7ee2-8f21-7224945a0101",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e869-7099-8443-e145ebd2a701",
          opprettet: "2025-11-14T11:24:13.929964",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "FørEllerLik",
            },
            opplysninger: [
              "019956b6-83ef-7ee2-8f21-7224945a0101",
              "019a81e4-e85e-7b39-804e-300e40ab3c36",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-83f2-7490-80d7-c5b12e99a62e",
          opprettet: "2025-09-17T10:07:05.970691",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: "2025-09-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-83f2-7490-80d7-c5b12e99a62f",
          opprettet: "2025-09-17T10:07:05.970849",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 36,
            enhet: "måneder",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-83f7-7cce-afcc-fe5607d76c2f",
          opprettet: "2025-09-17T10:07:05.975212",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-83f8-71bd-bef1-1d31bc15de30",
          opprettet: "2025-09-17T10:07:05.976879",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 1.5,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-83f8-71bd-bef1-1d31bc15de31",
          opprettet: "2025-09-17T10:07:05.976965",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 3,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-83f8-71bd-bef1-1d31bc15de32",
          opprettet: "2025-09-17T10:07:05.976989",
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
          id: "019956b6-83fc-7245-8807-e80c6be88c12",
          opprettet: "2025-09-17T10:07:05.980623",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: "2025-09-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "FørsteArbeidsdag",
            },
            opplysninger: ["019956b6-83f2-7490-80d7-c5b12e99a62e"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-83fd-7b1e-aceb-d775d748a33e",
          opprettet: "2025-09-17T10:07:05.981709",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 195240,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019956b6-83f7-7cce-afcc-fe5607d76c2f",
              "019956b6-83f8-71bd-bef1-1d31bc15de30",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-83fd-7b1e-aceb-d775d748a33f",
          opprettet: "2025-09-17T10:07:05.981828",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019956b6-83f7-7cce-afcc-fe5607d76c2f",
              "019956b6-83f8-71bd-bef1-1d31bc15de31",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-83fd-7b1e-aceb-d775d748a340",
          opprettet: "2025-09-17T10:07:05.981858",
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
          id: "019956b6-83fd-7b1e-aceb-d775d748a341",
          opprettet: "2025-09-17T10:07:05.981886",
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
          id: "019956b6-83fd-7b1e-aceb-d775d748a342",
          opprettet: "2025-09-17T10:07:05.98191",
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
          id: "019956b6-83fd-7b1e-aceb-d775d748a343",
          opprettet: "2025-09-17T10:07:05.981935",
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
          id: "019956b6-83ff-7f1b-9634-ef89340f48dc",
          opprettet: "2025-09-17T10:07:05.983687",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: "2025-08-31",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteavsluttendeKalenderMåned",
            },
            opplysninger: [
              "019956b6-83ef-7ee2-8f21-7224945a0100",
              "019956b6-83fc-7245-8807-e80c6be88c12",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8401-74d0-bd2b-c60f4bf36340",
          opprettet: "2025-09-17T10:07:05.985134",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: "2022-09-01",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "TrekkFraMåned",
            },
            opplysninger: [
              "019956b6-83f2-7490-80d7-c5b12e99a62f",
              "019956b6-83ff-7f1b-9634-ef89340f48dc",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8b93-79c1-81a5-b54a8dd69cce",
          opprettet: "2025-09-17T10:07:07.92372",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:07.608708",
            meldingId: "dd8ab6ae-f36d-4a60-a516-c4482d48270f",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019956b6-7d42-7418-a8ec-d46abad06417"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e820-771b-9ed5-a4f023d2d220",
          opprettet: "2025-11-14T11:24:13.856505",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:24:12.628867",
            meldingId: "18f63d4d-53d9-433a-a691-73b71ee965cf",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a81e3-99ad-7d0f-8940-78eb534f6054"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-8b93-79c1-81a5-b54a8dd69ccf",
          opprettet: "2025-09-17T10:07:07.923856",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:07.608994",
            meldingId: "dd8ab6ae-f36d-4a60-a516-c4482d48270f",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019956b6-7d42-7418-a8ec-d46abad06417"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e821-7189-babe-805cb49f8cd2",
          opprettet: "2025-11-14T11:24:13.857349",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:24:12.629383",
            meldingId: "18f63d4d-53d9-433a-a691-73b71ee965cf",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a81e3-99ad-7d0f-8940-78eb534f6054"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-8b93-79c1-81a5-b54a8dd69cd0",
          opprettet: "2025-09-17T10:07:07.923937",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:07.609192",
            meldingId: "dd8ab6ae-f36d-4a60-a516-c4482d48270f",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019956b6-7d42-7418-a8ec-d46abad06417"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e822-708e-9cbb-06597911f3d0",
          opprettet: "2025-11-14T11:24:13.858938",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:24:12.629853",
            meldingId: "18f63d4d-53d9-433a-a691-73b71ee965cf",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a81e3-99ad-7d0f-8940-78eb534f6054"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-8b94-7cf0-a4b5-b98d4c7820b6",
          opprettet: "2025-09-17T10:07:07.924017",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:07.609395",
            meldingId: "dd8ab6ae-f36d-4a60-a516-c4482d48270f",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019956b6-7d42-7418-a8ec-d46abad06417"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e824-79e7-823b-9c3dc06d0c49",
          opprettet: "2025-11-14T11:24:13.860298",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:24:12.630319",
            meldingId: "18f63d4d-53d9-433a-a691-73b71ee965cf",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a81e3-99ad-7d0f-8940-78eb534f6054"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-8b94-7cf0-a4b5-b98d4c7820b7",
          opprettet: "2025-09-17T10:07:07.924099",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:07.609644",
            meldingId: "dd8ab6ae-f36d-4a60-a516-c4482d48270f",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019956b6-7d42-7418-a8ec-d46abad06417"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e825-7edf-8f65-e79d41f2c365",
          opprettet: "2025-11-14T11:24:13.861469",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:24:12.630811",
            meldingId: "18f63d4d-53d9-433a-a691-73b71ee965cf",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a81e3-99ad-7d0f-8940-78eb534f6054"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-8b94-7cf0-a4b5-b98d4c7820b8",
          opprettet: "2025-09-17T10:07:07.924148",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:07.609887",
            meldingId: "dd8ab6ae-f36d-4a60-a516-c4482d48270f",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019956b6-7d42-7418-a8ec-d46abad06417"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e829-7f69-af2b-9b126873b6f1",
          opprettet: "2025-11-14T11:24:13.865991",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:24:12.635528",
            meldingId: "18f63d4d-53d9-433a-a691-73b71ee965cf",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a81e3-99ad-7d0f-8940-78eb534f6054"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-8b94-7cf0-a4b5-b98d4c7820b9",
          opprettet: "2025-09-17T10:07:07.924198",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:07.610193",
            meldingId: "dd8ab6ae-f36d-4a60-a516-c4482d48270f",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019956b6-7d42-7418-a8ec-d46abad06417"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e826-76ae-b19f-2a8dcd1ca7f7",
          opprettet: "2025-11-14T11:24:13.862403",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:24:12.631426",
            meldingId: "18f63d4d-53d9-433a-a691-73b71ee965cf",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a81e3-99ad-7d0f-8940-78eb534f6054"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-8b94-7cf0-a4b5-b98d4c7820ba",
          opprettet: "2025-09-17T10:07:07.924267",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:07.610404",
            meldingId: "dd8ab6ae-f36d-4a60-a516-c4482d48270f",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019956b6-7d42-7418-a8ec-d46abad06417"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e827-7af2-8d64-53768305c789",
          opprettet: "2025-11-14T11:24:13.863334",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:24:12.631883",
            meldingId: "18f63d4d-53d9-433a-a691-73b71ee965cf",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a81e3-99ad-7d0f-8940-78eb534f6054"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-8b94-7cf0-a4b5-b98d4c7820bb",
          opprettet: "2025-09-17T10:07:07.924348",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:07.610662",
            meldingId: "dd8ab6ae-f36d-4a60-a516-c4482d48270f",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019956b6-7d42-7418-a8ec-d46abad06417"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e829-7f69-af2b-9b126873b6f0",
          opprettet: "2025-11-14T11:24:13.865204",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:24:12.63438",
            meldingId: "18f63d4d-53d9-433a-a691-73b71ee965cf",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a81e3-99ad-7d0f-8940-78eb534f6054"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-8b94-7cf0-a4b5-b98d4c7820bc",
          opprettet: "2025-09-17T10:07:07.92442",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:07.610921",
            meldingId: "dd8ab6ae-f36d-4a60-a516-c4482d48270f",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019956b6-7d42-7418-a8ec-d46abad06417"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e82a-7b45-b486-cc042038eece",
          opprettet: "2025-11-14T11:24:13.866803",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:24:12.636306",
            meldingId: "18f63d4d-53d9-433a-a691-73b71ee965cf",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a81e3-99ad-7d0f-8940-78eb534f6054"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-8b94-7cf0-a4b5-b98d4c7820bd",
          opprettet: "2025-09-17T10:07:07.92449",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-15",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:07.611445",
            meldingId: "dd8ab6ae-f36d-4a60-a516-c4482d48270f",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e8-bd09-7860-8f70-d6f19dccadd3",
          opprettet: "2025-11-14T11:28:24.969466",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          gyldigTilOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:28:24.152516",
            meldingId: "e22b4a26-f450-4232-8e62-30aa457544b8",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a81e4-e85e-7b39-804e-300e40ab3c36"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-8b94-7cf0-a4b5-b98d4c7820be",
          opprettet: "2025-09-17T10:07:07.924602",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: "01K5BBD2A4FEXG6Y4PV33Y258K",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:07.611678",
            meldingId: "dd8ab6ae-f36d-4a60-a516-c4482d48270f",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: [
              "019956b6-83ef-7ee2-8f21-7224945a0100",
              "019956b6-83ff-7f1b-9634-ef89340f48dc",
              "019956b6-8401-74d0-bd2b-c60f4bf36340",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8b96-709f-b13d-32fbbebde48a",
          opprettet: "2025-09-17T10:07:07.926027",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: "01K5BBD2A4FEXG6Y4PV33Y258K",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["019956b6-8b94-7cf0-a4b5-b98d4c7820be"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8b96-709f-b13d-32fbbebde48b",
          opprettet: "2025-09-17T10:07:07.926133",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019956b6-83fd-7b1e-aceb-d775d748a340",
              "019956b6-8b93-79c1-81a5-b54a8dd69cce",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e84a-7caa-a20b-a3da96541d0f",
          opprettet: "2025-11-14T11:24:13.898332",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019956b6-83fd-7b1e-aceb-d775d748a340",
              "019a81e4-e820-771b-9ed5-a4f023d2d220",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-8b96-709f-b13d-32fbbebde48c",
          opprettet: "2025-09-17T10:07:07.926201",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019956b6-83fd-7b1e-aceb-d775d748a341",
              "019956b6-8b93-79c1-81a5-b54a8dd69ccf",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e84b-70e8-923f-7a0750b563cb",
          opprettet: "2025-11-14T11:24:13.899412",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019956b6-83fd-7b1e-aceb-d775d748a341",
              "019a81e4-e821-7189-babe-805cb49f8cd2",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-8b96-709f-b13d-32fbbebde48d",
          opprettet: "2025-09-17T10:07:07.926264",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019956b6-83fd-7b1e-aceb-d775d748a342",
              "019956b6-8b93-79c1-81a5-b54a8dd69cd0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e84d-7de0-9f8b-8bc84cb9c74f",
          opprettet: "2025-11-14T11:24:13.900968",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019956b6-83fd-7b1e-aceb-d775d748a342",
              "019a81e4-e822-708e-9cbb-06597911f3d0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-8b96-709f-b13d-32fbbebde48e",
          opprettet: "2025-09-17T10:07:07.926316",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: ["019956b6-8b94-7cf0-a4b5-b98d4c7820b6"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e84e-71b9-b6b4-9132b5b0be3b",
          opprettet: "2025-11-14T11:24:13.902137",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: ["019a81e4-e824-79e7-823b-9c3dc06d0c49"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-8b96-709f-b13d-32fbbebde48f",
          opprettet: "2025-09-17T10:07:07.92639",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019956b6-83fd-7b1e-aceb-d775d748a343",
              "019956b6-8b94-7cf0-a4b5-b98d4c7820b7",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e84f-7bef-b68e-9a917b305850",
          opprettet: "2025-11-14T11:24:13.903362",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019956b6-83fd-7b1e-aceb-d775d748a343",
              "019a81e4-e825-7edf-8f65-e79d41f2c365",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-8b96-709f-b13d-32fbbebde490",
          opprettet: "2025-09-17T10:07:07.926456",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-15",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019956b6-8b94-7cf0-a4b5-b98d4c7820bd"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e8-bd27-71af-bace-3375cc1b77da",
          opprettet: "2025-11-14T11:28:24.999651",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          gyldigTilOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019a81e8-bd09-7860-8f70-d6f19dccadd3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-8b96-709f-b13d-32fbbebde491",
          opprettet: "2025-09-17T10:07:07.926606",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: [
              "019956b6-8b94-7cf0-a4b5-b98d4c7820b8",
              "019956b6-8b94-7cf0-a4b5-b98d4c7820b9",
              "019956b6-8b94-7cf0-a4b5-b98d4c7820ba",
              "019956b6-8b94-7cf0-a4b5-b98d4c7820bb",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e851-71ed-aa3f-4c743456e00c",
          opprettet: "2025-11-14T11:24:13.905552",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: [
              "019a81e4-e826-76ae-b19f-2a8dcd1ca7f7",
              "019a81e4-e827-7af2-8d64-53768305c789",
              "019a81e4-e829-7f69-af2b-9b126873b6f0",
              "019a81e4-e829-7f69-af2b-9b126873b6f1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-8b96-709f-b13d-32fbbebde492",
          opprettet: "2025-09-17T10:07:07.926665",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019956b6-8b94-7cf0-a4b5-b98d4c7820bc"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e852-7469-a163-e7e17a08aa3a",
          opprettet: "2025-11-14T11:24:13.906454",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019a81e4-e82a-7b45-b486-cc042038eece"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-8b9b-72df-b3ac-5fb73752b10f",
          opprettet: "2025-09-17T10:07:07.931969",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 1200000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019956b6-8b96-709f-b13d-32fbbebde48a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8b9c-723c-9485-5b759295c174",
          opprettet: "2025-09-17T10:07:07.932823",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 3600000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019956b6-8b96-709f-b13d-32fbbebde48a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8b9c-723c-9485-5b759295c175",
          opprettet: "2025-09-17T10:07:07.932961",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019956b6-8b96-709f-b13d-32fbbebde48b",
              "019956b6-8b96-709f-b13d-32fbbebde48c",
              "019956b6-8b96-709f-b13d-32fbbebde48d",
              "019956b6-8b96-709f-b13d-32fbbebde48e",
              "019956b6-8b96-709f-b13d-32fbbebde48f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e860-7d75-9f0c-4885919a4240",
          opprettet: "2025-11-14T11:24:13.920895",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019a81e4-e84a-7caa-a20b-a3da96541d0f",
              "019a81e4-e84b-70e8-923f-7a0750b563cb",
              "019a81e4-e84d-7de0-9f8b-8bc84cb9c74f",
              "019a81e4-e84e-71b9-b6b4-9132b5b0be3b",
              "019a81e4-e84f-7bef-b68e-9a917b305850",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-8b9d-7244-ae6d-27367732da71",
          opprettet: "2025-09-17T10:07:07.933032",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019956b6-8b94-7cf0-a4b5-b98d4c7820b8",
              "019956b6-8b96-709f-b13d-32fbbebde491",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e861-7ef4-a898-f6572fb287db",
          opprettet: "2025-11-14T11:24:13.921848",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a81e4-e829-7f69-af2b-9b126873b6f1",
              "019a81e4-e851-71ed-aa3f-4c743456e00c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-8b9d-7244-ae6d-27367732da73",
          opprettet: "2025-09-17T10:07:07.933893",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019956b6-83fd-7b1e-aceb-d775d748a33e",
              "019956b6-8b9b-72df-b3ac-5fb73752b10f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8b9d-7244-ae6d-27367732da74",
          opprettet: "2025-09-17T10:07:07.933968",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019956b6-83fd-7b1e-aceb-d775d748a33f",
              "019956b6-8b9c-723c-9485-5b759295c174",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8b9e-7d42-ba5b-bc1f6242529a",
          opprettet: "2025-09-17T10:07:07.93406",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019956b6-8b94-7cf0-a4b5-b98d4c7820b9",
              "019956b6-8b94-7cf0-a4b5-b98d4c7820ba",
              "019956b6-8b94-7cf0-a4b5-b98d4c7820bb",
              "019956b6-8b9d-7244-ae6d-27367732da71",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e86c-76bd-95f4-e64a9ebe6ac5",
          opprettet: "2025-11-14T11:24:13.932101",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a81e4-e826-76ae-b19f-2a8dcd1ca7f7",
              "019a81e4-e827-7af2-8d64-53768305c789",
              "019a81e4-e829-7f69-af2b-9b126873b6f0",
              "019a81e4-e861-7ef4-a898-f6572fb287db",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-8b9e-7d42-ba5b-bc1f6242529c",
          opprettet: "2025-09-17T10:07:07.934611",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019956b6-8b9d-7244-ae6d-27367732da73",
              "019956b6-8b9d-7244-ae6d-27367732da74",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8b9f-7be7-8291-4eb67bd548b5",
          opprettet: "2025-09-17T10:07:07.935574",
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
          id: "019956b6-8b9f-7be7-8291-4eb67bd548b6",
          opprettet: "2025-09-17T10:07:07.935619",
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
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d54c",
      navn: "Bruker er medlem av folketrygden",
      datatype: "boolsk",
      perioder: [
        {
          id: "019956b6-8b9f-7be7-8291-4eb67bd548b7",
          opprettet: "2025-09-17T10:07:07.935652",
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
          id: "019956b6-8b9f-7be7-8291-4eb67bd548b8",
          opprettet: "2025-09-17T10:07:07.935843",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8b9f-7be7-8291-4eb67bd548b9",
          opprettet: "2025-09-17T10:07:07.93595",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: "01K5BBD2A4FEXG6Y4PV33Y258K",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["019956b6-8b94-7cf0-a4b5-b98d4c7820be"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8ba0-72f8-8ffc-844fe99ec90c",
          opprettet: "2025-09-17T10:07:07.936011",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 6,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8ba0-72f8-8ffc-844fe99ec90d",
          opprettet: "2025-09-17T10:07:07.936056",
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
          id: "019956b6-8ba0-72f8-8ffc-844fe99ec90e",
          opprettet: "2025-09-17T10:07:07.936104",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 3,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8ba0-72f8-8ffc-844fe99ec90f",
          opprettet: "2025-09-17T10:07:07.936141",
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
          id: "019956b6-8ba0-72f8-8ffc-844fe99ec910",
          opprettet: "2025-09-17T10:07:07.93684",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 0.0024,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8ba1-78e9-8f60-e4525e677bb4",
          opprettet: "2025-09-17T10:07:07.937289",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 37,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8ba1-78e9-8f60-e4525e677bb5",
          opprettet: "2025-09-17T10:07:07.937358",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 0.9,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8ba1-78e9-8f60-e4525e677bb6",
          opprettet: "2025-09-17T10:07:07.937424",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 260,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8ba1-78e9-8f60-e4525e677bb7",
          opprettet: "2025-09-17T10:07:07.937463",
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
          id: "019956b6-8ba1-78e9-8f60-e4525e677bb8",
          opprettet: "2025-09-17T10:07:07.937499",
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
          id: "019956b6-8ba1-78e9-8f60-e4525e677bb9",
          opprettet: "2025-09-17T10:07:07.937547",
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
          id: "019956b6-8ba1-78e9-8f60-e4525e677bba",
          opprettet: "2025-09-17T10:07:07.937662",
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
          id: "019956b6-8ba1-78e9-8f60-e4525e677bbb",
          opprettet: "2025-09-17T10:07:07.9377",
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
          id: "019956b6-8ba1-78e9-8f60-e4525e677bbc",
          opprettet: "2025-09-17T10:07:07.937739",
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
          id: "019956b6-8ba1-78e9-8f60-e4525e677bbd",
          opprettet: "2025-09-17T10:07:07.937778",
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
          id: "019956b6-8ba1-78e9-8f60-e4525e677bbe",
          opprettet: "2025-09-17T10:07:07.937816",
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
          id: "019956b6-8ba1-78e9-8f60-e4525e677bbf",
          opprettet: "2025-09-17T10:07:07.937855",
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
          id: "019956b6-8ba1-78e9-8f60-e4525e677bc0",
          opprettet: "2025-09-17T10:07:07.93791",
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
          id: "019956b6-8ba1-78e9-8f60-e4525e677bc1",
          opprettet: "2025-09-17T10:07:07.93798",
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
          id: "019956b6-8ba2-766f-8c64-ab26d9d2d8ce",
          opprettet: "2025-09-17T10:07:07.938022",
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
          id: "019956b6-8ba2-766f-8c64-ab26d9d2d8cf",
          opprettet: "2025-09-17T10:07:07.938101",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 40,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8ba2-766f-8c64-ab26d9d2d8d0",
          opprettet: "2025-09-17T10:07:07.938167",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: 37.5,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e86f-7a3a-9357-965b87f9b811",
          opprettet: "2025-11-14T11:24:13.935022",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: 37.5,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a81e4-e85e-7b39-804e-300e40ab3c36"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-8ba2-766f-8c64-ab26d9d2d8d1",
          opprettet: "2025-09-17T10:07:07.938235",
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
          id: "019956b6-8ba2-766f-8c64-ab26d9d2d8d2",
          opprettet: "2025-09-17T10:07:07.938293",
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
          id: "019956b6-8ba2-766f-8c64-ab26d9d2d8d3",
          opprettet: "2025-09-17T10:07:07.938386",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 40,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8ba2-766f-8c64-ab26d9d2d8d4",
          opprettet: "2025-09-17T10:07:07.938447",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 50,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8ba2-766f-8c64-ab26d9d2d8d5",
          opprettet: "2025-09-17T10:07:07.938491",
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
          id: "019956b6-8ba2-766f-8c64-ab26d9d2d8d6",
          opprettet: "2025-09-17T10:07:07.938588",
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
          id: "019956b6-8ba2-766f-8c64-ab26d9d2d8d7",
          opprettet: "2025-09-17T10:07:07.938648",
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
          id: "019956b6-8ba2-766f-8c64-ab26d9d2d8d8",
          opprettet: "2025-09-17T10:07:07.938708",
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
          id: "019956b6-8ba2-766f-8c64-ab26d9d2d8d9",
          opprettet: "2025-09-17T10:07:07.938763",
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
          id: "019956b6-8ba2-766f-8c64-ab26d9d2d8da",
          opprettet: "2025-09-17T10:07:07.938808",
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
          id: "019956b6-8ba2-766f-8c64-ab26d9d2d8db",
          opprettet: "2025-09-17T10:07:07.938855",
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
          id: "019956b6-8ba2-766f-8c64-ab26d9d2d8dc",
          opprettet: "2025-09-17T10:07:07.9389",
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
          id: "019956b6-8ba2-766f-8c64-ab26d9d2d8dd",
          opprettet: "2025-09-17T10:07:07.938946",
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
          id: "019956b6-8ba3-7538-9952-90c0e7a6c657",
          opprettet: "2025-09-17T10:07:07.939001",
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
          id: "019956b6-8ba3-7538-9952-90c0e7a6c658",
          opprettet: "2025-09-17T10:07:07.939058",
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
          id: "019956b6-8ba4-7eaa-83f9-8240dcac14c2",
          opprettet: "2025-09-17T10:07:07.940261",
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
            opplysninger: ["019956b6-8b9f-7be7-8291-4eb67bd548b7"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8ba8-722f-b5b3-df8dcfa0f9bd",
          opprettet: "2025-09-17T10:07:07.944142",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: "01K5BBD2A4FEXG6Y4PV33Y258K",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Oppjuster",
            },
            opplysninger: [
              "019956b6-8b9f-7be7-8291-4eb67bd548b8",
              "019956b6-8b9f-7be7-8291-4eb67bd548b9",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8ba8-722f-b5b3-df8dcfa0f9be",
          opprettet: "2025-09-17T10:07:07.944278",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019956b6-8b9f-7be7-8291-4eb67bd548b8",
              "019956b6-8ba0-72f8-8ffc-844fe99ec90c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8ba8-722f-b5b3-df8dcfa0f9bf",
          opprettet: "2025-09-17T10:07:07.944378",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019956b6-8b9f-7be7-8291-4eb67bd548b8",
              "019956b6-8ba0-72f8-8ffc-844fe99ec90e",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8ba8-722f-b5b3-df8dcfa0f9c0",
          opprettet: "2025-09-17T10:07:07.944469",
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
            opplysninger: ["019956b6-8ba1-78e9-8f60-e4525e677bbb"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8ba8-722f-b5b3-df8dcfa0f9c1",
          opprettet: "2025-09-17T10:07:07.944594",
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
              "019956b6-8ba1-78e9-8f60-e4525e677bc0",
              "019956b6-8ba1-78e9-8f60-e4525e677bc1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8ba8-722f-b5b3-df8dcfa0f9c2",
          opprettet: "2025-09-17T10:07:07.944817",
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
              "019956b6-8ba2-766f-8c64-ab26d9d2d8d1",
              "019956b6-8ba2-766f-8c64-ab26d9d2d8d2",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8ba8-722f-b5b3-df8dcfa0f9c3",
          opprettet: "2025-09-17T10:07:07.944951",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
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
              "019956b6-8b94-7cf0-a4b5-b98d4c7820bb",
              "019956b6-8ba2-766f-8c64-ab26d9d2d8d3",
              "019956b6-8ba2-766f-8c64-ab26d9d2d8d4",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8ba9-78ad-9c7d-0d632b39eb90",
          opprettet: "2025-09-17T10:07:07.945089",
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
              "019956b6-8ba2-766f-8c64-ab26d9d2d8d5",
              "019956b6-8ba2-766f-8c64-ab26d9d2d8d6",
              "019956b6-8ba2-766f-8c64-ab26d9d2d8d7",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8ba9-78ad-9c7d-0d632b39eb91",
          opprettet: "2025-09-17T10:07:07.945258",
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
              "019956b6-8ba2-766f-8c64-ab26d9d2d8d9",
              "019956b6-8ba2-766f-8c64-ab26d9d2d8da",
              "019956b6-8ba2-766f-8c64-ab26d9d2d8db",
              "019956b6-8ba2-766f-8c64-ab26d9d2d8dc",
              "019956b6-8ba2-766f-8c64-ab26d9d2d8dd",
              "019956b6-8ba3-7538-9952-90c0e7a6c657",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8ba9-78ad-9c7d-0d632b39eb92",
          opprettet: "2025-09-17T10:07:07.945366",
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
            opplysninger: ["019956b6-8ba3-7538-9952-90c0e7a6c658"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bad-7a64-bcf1-bceb85b0c851",
          opprettet: "2025-09-17T10:07:07.949041",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 1239552.3591447093,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019956b6-8ba8-722f-b5b3-df8dcfa0f9bd"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bad-7a64-bcf1-bceb85b0c852",
          opprettet: "2025-09-17T10:07:07.949606",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 1297604.5390395608,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019956b6-8ba8-722f-b5b3-df8dcfa0f9bd"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bae-7e30-8d17-2fb2822c8ede",
          opprettet: "2025-09-17T10:07:07.950009",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 1372990.2671776498,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019956b6-8ba8-722f-b5b3-df8dcfa0f9bd"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bae-7e30-8d17-2fb2822c8edf",
          opprettet: "2025-09-17T10:07:07.950137",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "019956b6-8b96-709f-b13d-32fbbebde492",
              "019956b6-8ba0-72f8-8ffc-844fe99ec90f",
              "019956b6-8ba8-722f-b5b3-df8dcfa0f9bf",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bae-7e30-8d17-2fb2822c8ee0",
          opprettet: "2025-09-17T10:07:07.950237",
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
              "019956b6-8ba1-78e9-8f60-e4525e677bbc",
              "019956b6-8ba1-78e9-8f60-e4525e677bbd",
              "019956b6-8ba8-722f-b5b3-df8dcfa0f9c0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bb0-72c1-bbbc-3575427a7922",
          opprettet: "2025-09-17T10:07:07.952306",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019956b6-8ba8-722f-b5b3-df8dcfa0f9be",
              "019956b6-8bad-7a64-bcf1-bceb85b0c851",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bb0-72c1-bbbc-3575427a7923",
          opprettet: "2025-09-17T10:07:07.952435",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019956b6-8ba8-722f-b5b3-df8dcfa0f9be",
              "019956b6-8bad-7a64-bcf1-bceb85b0c851",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bb0-72c1-bbbc-3575427a7924",
          opprettet: "2025-09-17T10:07:07.952569",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019956b6-8ba8-722f-b5b3-df8dcfa0f9be",
              "019956b6-8bad-7a64-bcf1-bceb85b0c852",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bb0-72c1-bbbc-3575427a7925",
          opprettet: "2025-09-17T10:07:07.952676",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019956b6-8ba8-722f-b5b3-df8dcfa0f9be",
              "019956b6-8bae-7e30-8d17-2fb2822c8ede",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bb1-7476-86cd-2349d9d61f0f",
          opprettet: "2025-09-17T10:07:07.953031",
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
              "019956b6-8ba1-78e9-8f60-e4525e677bb7",
              "019956b6-8ba1-78e9-8f60-e4525e677bb8",
              "019956b6-8ba1-78e9-8f60-e4525e677bb9",
              "019956b6-8ba1-78e9-8f60-e4525e677bba",
              "019956b6-8ba1-78e9-8f60-e4525e677bbe",
              "019956b6-8ba1-78e9-8f60-e4525e677bbf",
              "019956b6-8bae-7e30-8d17-2fb2822c8ee0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bb3-75b4-b858-6b029c825aa1",
          opprettet: "2025-09-17T10:07:07.955028",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 2342880,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SumAv",
            },
            opplysninger: [
              "019956b6-8bb0-72c1-bbbc-3575427a7923",
              "019956b6-8bb0-72c1-bbbc-3575427a7924",
              "019956b6-8bb0-72c1-bbbc-3575427a7925",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bb4-75ff-89a8-714d72496e2b",
          opprettet: "2025-09-17T10:07:07.956848",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019956b6-8ba0-72f8-8ffc-844fe99ec90d",
              "019956b6-8bb3-75b4-b858-6b029c825aa1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bb6-75e5-a75e-46e7f1c542a8",
          opprettet: "2025-09-17T10:07:07.958599",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "019956b6-8bb0-72c1-bbbc-3575427a7922",
              "019956b6-8bb4-75ff-89a8-714d72496e2b",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bba-7c39-970b-cfe3ad419e34",
          opprettet: "2025-09-17T10:07:07.96247",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["019956b6-8bb6-75e5-a75e-46e7f1c542a8"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bbd-776e-91aa-b4cb67e515af",
          opprettet: "2025-09-17T10:07:07.965151",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "019956b6-8bae-7e30-8d17-2fb2822c8edf",
              "019956b6-8bba-7c39-970b-cfe3ad419e34",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bbd-776e-91aa-b4cb67e515b0",
          opprettet: "2025-09-17T10:07:07.965432",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019956b6-8bae-7e30-8d17-2fb2822c8edf",
              "019956b6-8bba-7c39-970b-cfe3ad419e34",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bbf-730c-a849-dd341829f21a",
          opprettet: "2025-09-17T10:07:07.96762",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 1874.304,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019956b6-8ba0-72f8-8ffc-844fe99ec910",
              "019956b6-8bbd-776e-91aa-b4cb67e515af",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bbf-730c-a849-dd341829f21b",
          opprettet: "2025-09-17T10:07:07.967804",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 702864,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019956b6-8ba1-78e9-8f60-e4525e677bb5",
              "019956b6-8bbd-776e-91aa-b4cb67e515af",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bbf-730c-a849-dd341829f21c",
          opprettet: "2025-09-17T10:07:07.967925",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
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
              "019956b6-8ba2-766f-8c64-ab26d9d2d8d0",
              "019956b6-8ba2-766f-8c64-ab26d9d2d8d1",
              "019956b6-8bbd-776e-91aa-b4cb67e515b0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bc1-7be3-b286-093061411276",
          opprettet: "2025-09-17T10:07:07.969808",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 1874,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["019956b6-8bbf-730c-a849-dd341829f21a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bc2-7d5c-9216-ba1e328988be",
          opprettet: "2025-09-17T10:07:07.970114",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 2703.3230769230768,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019956b6-8ba1-78e9-8f60-e4525e677bb6",
              "019956b6-8bbf-730c-a849-dd341829f21b",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bc2-7d5c-9216-ba1e328988bf",
          opprettet: "2025-09-17T10:07:07.970246",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
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
              "019956b6-8b94-7cf0-a4b5-b98d4c7820b7",
              "019956b6-8ba2-766f-8c64-ab26d9d2d8cf",
              "019956b6-8ba8-722f-b5b3-df8dcfa0f9c2",
              "019956b6-8bbf-730c-a849-dd341829f21c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bc3-7968-8b7c-1d6403076208",
          opprettet: "2025-09-17T10:07:07.971763",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 2703,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["019956b6-8bc2-7d5c-9216-ba1e328988be"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-8bc3-7968-8b7c-1d6403076209",
          opprettet: "2025-09-17T10:07:07.971977",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "SjekkAvTerskel",
            },
            opplysninger: [
              "019956b6-8ba2-766f-8c64-ab26d9d2d8ce",
              "019956b6-8ba8-722f-b5b3-df8dcfa0f9c3",
              "019956b6-8bc2-7d5c-9216-ba1e328988bf",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
      ],
      synlig: true,
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
          id: "019956b6-94ff-7af2-8593-0e1bb694b343",
          opprettet: "2025-09-17T10:07:10.335195",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:10.039674",
            meldingId: "0c5c35eb-264e-47d1-b1bd-0c5f2b3e154d",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019956b6-7d42-7418-a8ec-d46abad06417"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e81f-7f44-ab8a-3c0bb696096b",
          opprettet: "2025-11-14T11:24:13.855585",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:24:12.628382",
            meldingId: "18f63d4d-53d9-433a-a691-73b71ee965cf",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a81e3-99ad-7d0f-8940-78eb534f6054"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-94ff-7af2-8593-0e1bb694b344",
          opprettet: "2025-09-17T10:07:10.335484",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: [
              {
                fødselsdato: "2013-12-11",
                fornavnOgMellomnavn: "AKSEPTABEL",
                etternavn: "LEVEREGEL",
                statsborgerskap: "NOR",
                kvalifiserer: true,
              },
              {
                fødselsdato: "2025-09-01",
                fornavnOgMellomnavn: "ewf",
                etternavn: "ff",
                statsborgerskap: "NOR",
                kvalifiserer: true,
              },
            ],
            datatype: "barn",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:10.039937",
            meldingId: "0c5c35eb-264e-47d1-b1bd-0c5f2b3e154d",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019956b6-7d42-7418-a8ec-d46abad06417"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e81e-78f4-ac38-dde9949e6379",
          opprettet: "2025-11-14T11:24:13.854373",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            søknadBarnId: "51dbd33c-8294-42b5-93c5-16ac6a20490b",
            verdi: [
              {
                fødselsdato: "2013-12-11",
                fornavnOgMellomnavn: "AKSEPTABEL",
                etternavn: "LEVEREGEL",
                statsborgerskap: "NOR",
                kvalifiserer: true,
              },
              {
                fødselsdato: "2025-11-10",
                fornavnOgMellomnavn: "ET",
                etternavn: "BARN",
                statsborgerskap: "BGD",
                kvalifiserer: true,
              },
            ],
            datatype: "barn",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:24:12.626058",
            meldingId: "18f63d4d-53d9-433a-a691-73b71ee965cf",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a81e3-99ad-7d0f-8940-78eb534f6054"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-94ff-7af2-8593-0e1bb694b345",
          opprettet: "2025-09-17T10:07:10.335704",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:10.041814",
            meldingId: "0c5c35eb-264e-47d1-b1bd-0c5f2b3e154d",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019956b6-7d42-7418-a8ec-d46abad06417"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e82b-71c3-a926-f4f9ade3f999",
          opprettet: "2025-11-14T11:24:13.867704",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:24:12.636999",
            meldingId: "18f63d4d-53d9-433a-a691-73b71ee965cf",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a81e3-99ad-7d0f-8940-78eb534f6054"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-94ff-7af2-8593-0e1bb694b346",
          opprettet: "2025-09-17T10:07:10.335897",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:10.042046",
            meldingId: "0c5c35eb-264e-47d1-b1bd-0c5f2b3e154d",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019956b6-7d42-7418-a8ec-d46abad06417"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e82c-7dbd-a784-b19c3b654e1a",
          opprettet: "2025-11-14T11:24:13.868671",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:24:12.63752",
            meldingId: "18f63d4d-53d9-433a-a691-73b71ee965cf",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a81e3-99ad-7d0f-8940-78eb534f6054"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-9500-71a7-b405-b00e1aa87e8e",
          opprettet: "2025-09-17T10:07:10.33609",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:10.042244",
            meldingId: "0c5c35eb-264e-47d1-b1bd-0c5f2b3e154d",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e8-bd04-7d5d-8fb5-ebb50e7b55d2",
          opprettet: "2025-11-14T11:28:24.96436",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:28:24.148503",
            meldingId: "e22b4a26-f450-4232-8e62-30aa457544b8",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a81e4-e85e-7b39-804e-300e40ab3c36"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-9500-71a7-b405-b00e1aa87e8f",
          opprettet: "2025-09-17T10:07:10.33624",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:10.04243",
            meldingId: "0c5c35eb-264e-47d1-b1bd-0c5f2b3e154d",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e8-bd0b-7d58-aaf1-d8ff136e1ae0",
          opprettet: "2025-11-14T11:28:24.971729",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:28:24.153163",
            meldingId: "e22b4a26-f450-4232-8e62-30aa457544b8",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a81e4-e85e-7b39-804e-300e40ab3c36"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-9500-71a7-b405-b00e1aa87e90",
          opprettet: "2025-09-17T10:07:10.336969",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:10.042643",
            meldingId: "0c5c35eb-264e-47d1-b1bd-0c5f2b3e154d",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e8-bd0d-7fbc-8602-f0b45e8e8bf4",
          opprettet: "2025-11-14T11:28:24.973983",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:28:24.153651",
            meldingId: "e22b4a26-f450-4232-8e62-30aa457544b8",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a81e4-e85e-7b39-804e-300e40ab3c36"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-9501-7894-b3a4-9a526cc53065",
          opprettet: "2025-09-17T10:07:10.337284",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:10.042838",
            meldingId: "0c5c35eb-264e-47d1-b1bd-0c5f2b3e154d",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e8-bd10-7bf6-8641-2e9461722d61",
          opprettet: "2025-11-14T11:28:24.976177",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:28:24.154147",
            meldingId: "e22b4a26-f450-4232-8e62-30aa457544b8",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a81e4-e85e-7b39-804e-300e40ab3c36"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-9501-7894-b3a4-9a526cc53066",
          opprettet: "2025-09-17T10:07:10.337509",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:10.042984",
            meldingId: "0c5c35eb-264e-47d1-b1bd-0c5f2b3e154d",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e8-bd11-7beb-b75a-7555916b557c",
          opprettet: "2025-11-14T11:28:24.977904",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:28:24.154706",
            meldingId: "e22b4a26-f450-4232-8e62-30aa457544b8",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a81e4-e85e-7b39-804e-300e40ab3c36"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-9501-7894-b3a4-9a526cc53067",
          opprettet: "2025-09-17T10:07:10.337757",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:10.043186",
            meldingId: "0c5c35eb-264e-47d1-b1bd-0c5f2b3e154d",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e8-bd13-7f2d-8c62-416d91c41b56",
          opprettet: "2025-11-14T11:28:24.979379",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-14T11:28:24.15515",
            meldingId: "e22b4a26-f450-4232-8e62-30aa457544b8",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a81e4-e85e-7b39-804e-300e40ab3c36"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-9503-72ea-901d-0f0a7b0d8d17",
          opprettet: "2025-09-17T10:07:10.339947",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019956b6-94ff-7af2-8593-0e1bb694b343"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e849-75fa-a4aa-fc2eff025588",
          opprettet: "2025-11-14T11:24:13.897467",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019a81e4-e81f-7f44-ab8a-3c0bb696096b"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-9504-753a-8a2e-e41fee6c40cf",
          opprettet: "2025-09-17T10:07:10.340212",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: 2,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "AntallAv",
            },
            opplysninger: ["019956b6-94ff-7af2-8593-0e1bb694b344"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e848-725e-bc34-cce118463452",
          opprettet: "2025-11-14T11:24:13.896666",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: 2,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "AntallAv",
            },
            opplysninger: ["019a81e4-e81e-78f4-ac38-dde9949e6379"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-9504-753a-8a2e-e41fee6c40d0",
          opprettet: "2025-09-17T10:07:10.340465",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019956b6-8ba8-722f-b5b3-df8dcfa0f9c0",
              "019956b6-9500-71a7-b405-b00e1aa87e8e",
              "019956b6-9500-71a7-b405-b00e1aa87e8f",
              "019956b6-9500-71a7-b405-b00e1aa87e90",
              "019956b6-9501-7894-b3a4-9a526cc53065",
              "019956b6-9501-7894-b3a4-9a526cc53066",
              "019956b6-9501-7894-b3a4-9a526cc53067",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e8-bd29-7d46-9875-e484a04acb34",
          opprettet: "2025-11-14T11:28:25.001099",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019956b6-8ba8-722f-b5b3-df8dcfa0f9c0",
              "019a81e8-bd04-7d5d-8fb5-ebb50e7b55d2",
              "019a81e8-bd0b-7d58-aaf1-d8ff136e1ae0",
              "019a81e8-bd0d-7fbc-8602-f0b45e8e8bf4",
              "019a81e8-bd10-7bf6-8641-2e9461722d61",
              "019a81e8-bd11-7beb-b75a-7555916b557c",
              "019a81e8-bd13-7f2d-8c62-416d91c41b56",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-9504-753a-8a2e-e41fee6c40d1",
          opprettet: "2025-09-17T10:07:10.34064",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: ["019956b6-94ff-7af2-8593-0e1bb694b345"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e854-7c24-88d7-fa7c2e7813db",
          opprettet: "2025-11-14T11:24:13.908218",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: ["019a81e4-e82b-71c3-a926-f4f9ade3f999"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-9504-753a-8a2e-e41fee6c40d2",
          opprettet: "2025-09-17T10:07:10.340774",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019956b6-94ff-7af2-8593-0e1bb694b346"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e855-76f9-932e-bf351744f1d3",
          opprettet: "2025-11-14T11:24:13.909915",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019a81e4-e82c-7dbd-a784-b19c3b654e1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-9505-7a35-9921-b2099e6cb6ac",
          opprettet: "2025-09-17T10:07:10.341157",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErUsann",
            },
            opplysninger: ["019956b6-94ff-7af2-8593-0e1bb694b346"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e855-76f9-932e-bf351744f1d2",
          opprettet: "2025-11-14T11:24:13.909094",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErUsann",
            },
            opplysninger: ["019a81e4-e82c-7dbd-a784-b19c3b654e1a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-9507-7b67-a08b-febfa03d3d26",
          opprettet: "2025-09-17T10:07:10.343426",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019956b6-8b9f-7be7-8291-4eb67bd548b6",
              "019956b6-9503-72ea-901d-0f0a7b0d8d17",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e85f-735f-aea2-4d2fe248b4e1",
          opprettet: "2025-11-14T11:24:13.919802",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019956b6-8b9f-7be7-8291-4eb67bd548b6",
              "019a81e4-e849-75fa-a4aa-fc2eff025588",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-9507-7b67-a08b-febfa03d3d27",
          opprettet: "2025-09-17T10:07:10.343728",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 74,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019956b6-8ba1-78e9-8f60-e4525e677bb4",
              "019956b6-9504-753a-8a2e-e41fee6c40cf",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
      ],
      synlig: false,
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
          id: "019956b6-9507-7b67-a08b-febfa03d3d28",
          opprettet: "2025-09-17T10:07:10.343911",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019956b6-8ba2-766f-8c64-ab26d9d2d8d8",
              "019956b6-8ba9-78ad-9c7d-0d632b39eb90",
              "019956b6-8bc3-7968-8b7c-1d6403076209",
              "019956b6-9504-753a-8a2e-e41fee6c40d1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e8-bd32-7f73-a9ba-8e58f911a734",
          opprettet: "2025-11-14T11:28:25.010546",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019956b6-8ba2-766f-8c64-ab26d9d2d8d8",
              "019956b6-8ba9-78ad-9c7d-0d632b39eb90",
              "019956b6-8bc3-7968-8b7c-1d6403076209",
              "019a81e4-e854-7c24-88d7-fa7c2e7813db",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-9508-70e7-9504-d9d8bbe9314a",
          opprettet: "2025-09-17T10:07:10.34409",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019956b6-8ba9-78ad-9c7d-0d632b39eb91",
              "019956b6-9504-753a-8a2e-e41fee6c40d2",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e862-7d78-bc74-4303315c4100",
          opprettet: "2025-11-14T11:24:13.922734",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019956b6-8ba9-78ad-9c7d-0d632b39eb91",
              "019a81e4-e855-76f9-932e-bf351744f1d3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-9509-717d-83d7-a27657fcbbf7",
          opprettet: "2025-09-17T10:07:10.345631",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019956b6-8ba4-7eaa-83f9-8240dcac14c2",
              "019956b6-9507-7b67-a08b-febfa03d3d26",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e86b-725b-93b0-3357fb50c9b4",
          opprettet: "2025-11-14T11:24:13.931008",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019956b6-8ba4-7eaa-83f9-8240dcac14c2",
              "019a81e4-e85f-735f-aea2-4d2fe248b4e1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-9509-717d-83d7-a27657fcbbf8",
          opprettet: "2025-09-17T10:07:10.345949",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 1948,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "019956b6-8bc1-7be3-b286-093061411276",
              "019956b6-9507-7b67-a08b-febfa03d3d27",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-950a-700a-9c4b-7ed40525e5d5",
          opprettet: "2025-09-17T10:07:10.346108",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019956b6-8ba1-78e9-8f60-e4525e677bb4",
              "019956b6-9507-7b67-a08b-febfa03d3d27",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-950a-700a-9c4b-7ed40525e5d6",
          opprettet: "2025-09-17T10:07:10.346277",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019956b6-9505-7a35-9921-b2099e6cb6ac",
              "019956b6-9508-70e7-9504-d9d8bbe9314a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e86d-704f-9c52-bb955b9d8bac",
          opprettet: "2025-11-14T11:24:13.933135",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a81e4-e855-76f9-932e-bf351744f1d2",
              "019a81e4-e862-7d78-bc74-4303315c4100",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-950c-7f1e-967a-ad36ed837627",
          opprettet: "2025-09-17T10:07:10.348312",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019956b6-8ba8-722f-b5b3-df8dcfa0f9be",
              "019956b6-8bad-7a64-bcf1-bceb85b0c851",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-950c-7f1e-967a-ad36ed837628",
          opprettet: "2025-09-17T10:07:10.348424",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019956b6-8ba8-722f-b5b3-df8dcfa0f9be",
              "019956b6-8bad-7a64-bcf1-bceb85b0c852",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-950c-7f1e-967a-ad36ed837629",
          opprettet: "2025-09-17T10:07:10.348519",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019956b6-8ba8-722f-b5b3-df8dcfa0f9be",
              "019956b6-8bae-7e30-8d17-2fb2822c8ede",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-950c-7f1e-967a-ad36ed83762a",
          opprettet: "2025-09-17T10:07:10.348799",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: "Inntekt etter avkortning og oppjustering siste 12 måneder",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Brukt",
            },
            opplysninger: ["019956b6-8bb6-75e5-a75e-46e7f1c542a8"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-950d-727d-abca-43ce99baae8e",
          opprettet: "2025-09-17T10:07:10.349278",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 1200000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019956b6-8b9f-7be7-8291-4eb67bd548b9"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-950d-727d-abca-43ce99baae8f",
          opprettet: "2025-09-17T10:07:10.34962",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 1200000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019956b6-8b9f-7be7-8291-4eb67bd548b9"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-950d-727d-abca-43ce99baae90",
          opprettet: "2025-09-17T10:07:10.349915",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 1200000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019956b6-8b9f-7be7-8291-4eb67bd548b9"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-950e-79c6-bf31-6545b2f7a11f",
          opprettet: "2025-09-17T10:07:10.350366",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019956b6-8bc3-7968-8b7c-1d6403076208",
              "019956b6-9509-717d-83d7-a27657fcbbf8",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9513-774c-8949-462f73c0e8b6",
          opprettet: "2025-09-17T10:07:10.355286",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 5,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9513-774c-8949-462f73c0e8b7",
          opprettet: "2025-09-17T10:07:10.355547",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 0.03,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9513-774c-8949-462f73c0e8b8",
          opprettet: "2025-09-17T10:07:10.355745",
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
          id: "019956b6-9513-774c-8949-462f73c0e8b9",
          opprettet: "2025-09-17T10:07:10.355922",
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
          id: "019956b6-9514-720e-a5d1-c17e7625f2b7",
          opprettet: "2025-09-17T10:07:10.356053",
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
          id: "019956b6-9514-720e-a5d1-c17e7625f2b8",
          opprettet: "2025-09-17T10:07:10.356275",
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
          id: "019956b6-9514-720e-a5d1-c17e7625f2b9",
          opprettet: "2025-09-17T10:07:10.356377",
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
          id: "019956b6-9514-720e-a5d1-c17e7625f2ba",
          opprettet: "2025-09-17T10:07:10.356475",
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
          id: "019956b6-9514-720e-a5d1-c17e7625f2bb",
          opprettet: "2025-09-17T10:07:10.356655",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 2,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9514-720e-a5d1-c17e7625f2bc",
          opprettet: "2025-09-17T10:07:10.356781",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 104,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9514-720e-a5d1-c17e7625f2bd",
          opprettet: "2025-09-17T10:07:10.356911",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 52,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9515-7369-86c4-7ab44c012f22",
          opprettet: "2025-09-17T10:07:10.357697",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 1200000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019956b6-8b9c-723c-9485-5b759295c174",
              "019956b6-8ba0-72f8-8ffc-844fe99ec90d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9515-7369-86c4-7ab44c012f23",
          opprettet: "2025-09-17T10:07:10.357869",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 2,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9516-7d80-9e7b-cc1952c34150",
          opprettet: "2025-09-17T10:07:10.358045",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 0,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9516-7d80-9e7b-cc1952c34151",
          opprettet: "2025-09-17T10:07:10.358216",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 5,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9516-7d80-9e7b-cc1952c34152",
          opprettet: "2025-09-17T10:07:10.358365",
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
          id: "019956b6-9516-7d80-9e7b-cc1952c34153",
          opprettet: "2025-09-17T10:07:10.358485",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 3,
            enhet: "dager",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9516-7d80-9e7b-cc1952c34154",
          opprettet: "2025-09-17T10:07:10.358677",
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
          id: "019956b6-9516-7d80-9e7b-cc1952c34155",
          opprettet: "2025-09-17T10:07:10.358822",
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
          id: "019956b6-9516-7d80-9e7b-cc1952c34156",
          opprettet: "2025-09-17T10:07:10.358994",
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
          id: "019956b6-9517-7dc4-8604-e57bebaeacc2",
          opprettet: "2025-09-17T10:07:10.359146",
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
          id: "019956b6-9517-7dc4-8604-e57bebaeacc3",
          opprettet: "2025-09-17T10:07:10.35929",
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
          id: "019956b6-9517-7dc4-8604-e57bebaeacc4",
          opprettet: "2025-09-17T10:07:10.359448",
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
          id: "019956b6-9517-7dc4-8604-e57bebaeacc5",
          opprettet: "2025-09-17T10:07:10.359882",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          gyldigTilOgMed: "2025-11-13",
          verdi: {
            verdi: 26,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019956b6-83ef-7ee2-8f21-7224945a0100"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
          },
        },
        {
          id: "019a81e4-e86e-7600-a76a-e1a207051bf0",
          opprettet: "2025-11-14T11:24:13.934096",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: 26,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a81e4-e85e-7b39-804e-300e40ab3c36"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
          id: "019956b6-951a-762b-a97e-035a936c4d61",
          opprettet: "2025-09-17T10:07:10.362245",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019956b6-950c-7f1e-967a-ad36ed837627",
              "019956b6-950c-7f1e-967a-ad36ed837628",
              "019956b6-950c-7f1e-967a-ad36ed837629",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-951a-762b-a97e-035a936c4d62",
          opprettet: "2025-09-17T10:07:10.362532",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 1874,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019956b6-8bc1-7be3-b286-093061411276",
              "019956b6-950e-79c6-bf31-6545b2f7a11f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-951a-762b-a97e-035a936c4d63",
          opprettet: "2025-09-17T10:07:10.362746",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 3904.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019956b6-8b9f-7be7-8291-4eb67bd548b8",
              "019956b6-9513-774c-8949-462f73c0e8b7",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-951a-762b-a97e-035a936c4d64",
          opprettet: "2025-09-17T10:07:10.362916",
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
              "019956b6-9513-774c-8949-462f73c0e8b8",
              "019956b6-9513-774c-8949-462f73c0e8b9",
              "019956b6-9514-720e-a5d1-c17e7625f2b7",
              "019956b6-9514-720e-a5d1-c17e7625f2b8",
              "019956b6-9514-720e-a5d1-c17e7625f2b9",
              "019956b6-9514-720e-a5d1-c17e7625f2ba",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-951b-7750-9cc0-f6dff4e63857",
          opprettet: "2025-09-17T10:07:10.363064",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 9740,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019956b6-9509-717d-83d7-a27657fcbbf8",
              "019956b6-9513-774c-8949-462f73c0e8b6",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-951b-7750-9cc0-f6dff4e63858",
          opprettet: "2025-09-17T10:07:10.363207",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019956b6-83f7-7cce-afcc-fe5607d76c2f",
              "019956b6-9514-720e-a5d1-c17e7625f2bb",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-951b-7750-9cc0-f6dff4e63859",
          opprettet: "2025-09-17T10:07:10.36341",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019956b6-83f7-7cce-afcc-fe5607d76c2f",
              "019956b6-9515-7369-86c4-7ab44c012f23",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-951d-7e91-b927-c0a31fd2d0f1",
          opprettet: "2025-09-17T10:07:10.365699",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 1874,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019956b6-8bb1-7476-86cd-2349d9d61f0f",
              "019956b6-951a-762b-a97e-035a936c4d62",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-951d-7e91-b927-c0a31fd2d0f2",
          opprettet: "2025-09-17T10:07:10.365923",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019956b6-8b9b-72df-b3ac-5fb73752b10f",
              "019956b6-951b-7750-9cc0-f6dff4e63858",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-951e-7726-b18f-2890e13cfdae",
          opprettet: "2025-09-17T10:07:10.366104",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019956b6-9515-7369-86c4-7ab44c012f22",
              "019956b6-951b-7750-9cc0-f6dff4e63859",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-951e-7726-b18f-2890e13cfdaf",
          opprettet: "2025-09-17T10:07:10.366668",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019956b6-8bb1-7476-86cd-2349d9d61f0f",
              "019956b6-951a-762b-a97e-035a936c4d62",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9521-7eb9-b1f9-e0ee8651c369",
          opprettet: "2025-09-17T10:07:10.369812",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 9370,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019956b6-9513-774c-8949-462f73c0e8b6",
              "019956b6-951d-7e91-b927-c0a31fd2d0f1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9522-7358-8b45-1a80f1333ceb",
          opprettet: "2025-09-17T10:07:10.370096",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
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
              "019956b6-9514-720e-a5d1-c17e7625f2bc",
              "019956b6-9514-720e-a5d1-c17e7625f2bd",
              "019956b6-951d-7e91-b927-c0a31fd2d0f2",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9522-7358-8b45-1a80f1333cec",
          opprettet: "2025-09-17T10:07:10.370437",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
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
              "019956b6-9514-720e-a5d1-c17e7625f2bc",
              "019956b6-9514-720e-a5d1-c17e7625f2bd",
              "019956b6-951e-7726-b18f-2890e13cfdae",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9522-7358-8b45-1a80f1333ced",
          opprettet: "2025-09-17T10:07:10.37081",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019956b6-950a-700a-9c4b-7ed40525e5d5",
              "019956b6-951e-7726-b18f-2890e13cfdaf",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9525-764d-9554-d0260b54a99c",
          opprettet: "2025-09-17T10:07:10.373548",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 3904.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019956b6-951a-762b-a97e-035a936c4d63",
              "019956b6-9521-7eb9-b1f9-e0ee8651c369",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9525-764d-9554-d0260b54a99d",
          opprettet: "2025-09-17T10:07:10.373956",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 9370,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019956b6-951a-762b-a97e-035a936c4d64",
              "019956b6-9521-7eb9-b1f9-e0ee8651c369",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9526-7d2d-976d-05648e8c4a5d",
          opprettet: "2025-09-17T10:07:10.374083",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
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
              "019956b6-9522-7358-8b45-1a80f1333ceb",
              "019956b6-9522-7358-8b45-1a80f1333cec",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9528-7fb6-bccd-2aeb0e784a54",
          opprettet: "2025-09-17T10:07:10.376168",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 9370,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "019956b6-9525-764d-9554-d0260b54a99c",
              "019956b6-9525-764d-9554-d0260b54a99d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9528-7fb6-bccd-2aeb0e784a55",
          opprettet: "2025-09-17T10:07:10.376317",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
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
              "019956b6-8b9e-7d42-ba5b-bc1f6242529c",
              "019956b6-9516-7d80-9e7b-cc1952c34150",
              "019956b6-9526-7d2d-976d-05648e8c4a5d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9528-7fb6-bccd-2aeb0e784a56",
          opprettet: "2025-09-17T10:07:10.376502",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
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
              "019956b6-9516-7d80-9e7b-cc1952c34151",
              "019956b6-9526-7d2d-976d-05648e8c4a5d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-952a-7377-86e3-51de86feec90",
          opprettet: "2025-09-17T10:07:10.378435",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 1874,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019956b6-9513-774c-8949-462f73c0e8b6",
              "019956b6-9528-7fb6-bccd-2aeb0e784a54",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-952c-7d67-9fee-1ed700d8c030",
          opprettet: "2025-09-17T10:07:10.380119",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 1948,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "019956b6-9507-7b67-a08b-febfa03d3d27",
              "019956b6-952a-7377-86e3-51de86feec90",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-952c-7d67-9fee-1ed700d8c031",
          opprettet: "2025-09-17T10:07:10.380366",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErUlik",
            },
            opplysninger: [
              "019956b6-951a-762b-a97e-035a936c4d62",
              "019956b6-952a-7377-86e3-51de86feec90",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-952e-743f-9432-ee66769e114a",
          opprettet: "2025-09-17T10:07:10.382378",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 1948,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019956b6-8bc3-7968-8b7c-1d6403076208",
              "019956b6-952c-7d67-9fee-1ed700d8c030",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9530-7bb4-bcad-2492e55ce1c2",
          opprettet: "2025-09-17T10:07:10.384178",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 9740,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019956b6-9513-774c-8949-462f73c0e8b6",
              "019956b6-952e-743f-9432-ee66769e114a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9530-7bb4-bcad-2492e55ce1c3",
          opprettet: "2025-09-17T10:07:10.384364",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 5844,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019956b6-9516-7d80-9e7b-cc1952c34153",
              "019956b6-952e-743f-9432-ee66769e114a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-9533-7973-a092-2ede35d7ee0d",
          opprettet: "2025-09-17T10:07:10.387112",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
          verdi: {
            verdi: 5844,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "019956b6-8b94-7cf0-a4b5-b98d4c7820bb",
              "019956b6-9516-7d80-9e7b-cc1952c34152",
              "019956b6-9530-7bb4-bcad-2492e55ce1c3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "019956b6-98b9-7ed4-a3ad-f668bc93b749",
          opprettet: "2025-09-17T10:07:11.289045",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-17T10:07:10.948274",
            meldingId: "30175328-a3aa-479e-a7a1-f93fe52c2652",
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
          id: "019956b6-98bc-7338-be4f-2203fc7b4cf8",
          opprettet: "2025-09-17T10:07:11.292221",
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
              "019956b6-9516-7d80-9e7b-cc1952c34154",
              "019956b6-9516-7d80-9e7b-cc1952c34155",
              "019956b6-9516-7d80-9e7b-cc1952c34156",
              "019956b6-9517-7dc4-8604-e57bebaeacc2",
              "019956b6-9517-7dc4-8604-e57bebaeacc3",
              "019956b6-9517-7dc4-8604-e57bebaeacc4",
              "019956b6-98b9-7ed4-a3ad-f668bc93b749",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.57-8565d9d",
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
          id: "01997167-0ae1-7ae0-88ba-3fb19518416c",
          opprettet: "2025-09-22T14:30:02.465089",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-17",
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
      opplysningTypeId: "01948d43-e218-76f1-b29b-7e604241d98a",
      navn: "Oppfyller kravet til verneplikt",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a81e4-e856-7277-94b6-1d01584eb0ab",
          opprettet: "2025-11-14T11:24:13.910703",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-14",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019a81e4-e82a-7b45-b486-cc042038eece"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
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
