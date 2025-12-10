import type { components } from "../../../openapi/behandling-typer";

export const behandling019a97149968731e8918779b5d1e8727: components["schemas"]["Behandling"] = {
  behandlingId: "019a9714-9968-731e-8918-779b5d1e8727",
  behandletHendelse: {
    datatype: "UUID",
    id: "079ad249-a99f-44c4-a779-d294ac7ea3a1",
    type: "Søknad",
    skjedde: "2025-11-18",
  },
  opprettet: "2025-11-18",
  sistEndret: "2025-11-18",
  behandlingskjedeId: "019a9714-9968-731e-8918-779b5d1e8727",
  automatisk: false,
  ident: "44827400804",
  rettighetsperioder: [
    {
      fraOgMed: "2025-11-18",
      tilOgMed: "2025-11-25",
      harRett: true,
      opprinnelse: "Ny",
    },
  ],
  kreverTotrinnskontroll: true,
  tilstand: "Ferdig",
  avklaringer: [
    {
      id: "019a9714-999c-790a-b27f-e145ad3743c5",
      kode: "HarTilleggsopplysninger",
      tittel: "Sjekk hva bruker har oppgitt som tilleggsopplysninger i søknaden",
      beskrivelse: "Du må vurdere om tilleggsopplysninger har betydning for saken",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-11-18T14:08:21.297367",
      regelsett: [],
    },
    {
      id: "019a9714-9b3b-7e6c-84d4-5b69c3786684",
      kode: "HattLukkedeSakerSiste8Uker",
      tittel: "Sjekk om nylig lukkede saker i Arena kan påvirke behandlingen",
      beskrivelse:
        "Personen har lukkede saker i Arena siste 8 uker. Har vi nylig gitt avslag bør vi sjekke om det er nødvendig med ekstra \nveiledning.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-11-18T14:08:21.845261",
      regelsett: [],
    },
    {
      id: "019a9714-9b3b-7e6c-84d4-5b69c3786686",
      kode: "MuligGjenopptak",
      tittel: "Sjekk om det er sak som kan gjenopptas i Arena",
      beskrivelse:
        "Personen har åpne saker i Arena som kan være gjenopptak. Saker som skal gjenopptas må håndteres i Arena.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-11-18T14:08:22.076095",
      regelsett: [],
    },
    {
      id: "019a9714-a04d-7bd5-8484-924cf604f774",
      kode: "EØSArbeid",
      tittel: "Sjekk om arbeid i EØS fører til sammenlegging",
      beskrivelse:
        "Personen har oppgitt arbeid fra EØS i søknaden. Det må vurderes om det skal være sammenlegging.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-11-18T14:08:23.04652",
      regelsett: [],
    },
    {
      id: "019a9714-a04d-7bd5-8484-924cf604f778",
      kode: "InntektNesteKalendermåned",
      tittel: "Sjekk om inntekt for neste måned er relevant",
      beskrivelse:
        "Personen har inntekt som tilhører neste inntektsperiode. Vurder om det er tilstrekkelige inntekter til at utfallet vil \nendre seg i neste inntektsperiode.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-11-18T14:08:23.286172",
      regelsett: [
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
        },
      ],
    },
    {
      id: "019a9714-a04d-7bd5-8484-924cf604f77a",
      kode: "JobbetUtenforNorge",
      tittel: "Sjekk om arbeid utenfor Norge påvirker retten til dagpenger",
      beskrivelse:
        "Personen har oppgitt arbeid utenfor Norge i søknaden. Sjekk om arbeidsforholdene som er oppgitt i søknaden skal være \nmed i vurderingen av retten til dagpenger.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-11-18T14:08:23.166381",
      regelsett: [],
    },
    {
      id: "019a9714-a448-70bd-adac-b51c28040a03",
      kode: "SjekkPrøvingsdato",
      tittel: "Sjekk om valgt prøvingsdato er riktig",
      beskrivelse: "Sjekk at valgt prøvingsdato er riktig",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: false,
      begrunnelse: "asef",
      sistEndret: "2025-11-18T14:09:42.057651",
      avklartAv: {
        ident: "Z994794",
      },
      regelsett: [],
    },
    {
      id: "019a9714-a448-70bd-adac-b51c28040a07",
      kode: "BeregnetArbeidstid",
      tittel: "Sjekk om beregnet arbeidstid er korrekt",
      beskrivelse:
        "Du må sjekke om beregnet vanlig arbeidstid er korrekt og at det er brukt riktig beregningsregel. \nDu må også sjekke om ny vanlig arbeidstid er korrekt",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: false,
      begrunnelse: "asdf",
      sistEndret: "2025-11-18T14:09:45.193848",
      avklartAv: {
        ident: "Z994794",
      },
      regelsett: [
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
          id: "019a9714-9968-731e-8918-779b5d1e8726",
          opprettet: "2025-11-18T14:08:20.968739",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: 15606511,
            datatype: "heltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:20.968719",
            meldingId: "841856ed-01a6-4e2e-b976-613ff9b4270b",
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
          id: "019a9714-996c-7a5d-b8ac-361a394e68d4",
          opprettet: "2025-11-18T14:08:20.972216",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: "079ad249-a99f-44c4-a779-d294ac7ea3a1",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:20.972129",
            meldingId: "841856ed-01a6-4e2e-b976-613ff9b4270b",
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
          id: "019a9714-996c-7a5d-b8ac-361a394e68d6",
          opprettet: "2025-11-18T14:08:20.972541",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          gyldigTilOgMed: "2025-11-18",
          verdi: {
            verdi: "SøknadInnsendtHendelse",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:20.972537",
            meldingId: "841856ed-01a6-4e2e-b976-613ff9b4270b",
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
          id: "019a9714-998d-7ab6-865f-c0bc2032d7e3",
          opprettet: "2025-11-18T14:08:21.005715",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-9b27-77bd-9dc6-67edf2642ab7",
          opprettet: "2025-11-18T14:08:21.415399",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: "2025-11-18",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:21.367472",
            meldingId: "e8639099-ccbc-4d7a-a104-951232f22d76",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a9714-996c-7a5d-b8ac-361a394e68d4"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-9b27-77bd-9dc6-67edf2642ab8",
          opprettet: "2025-11-18T14:08:21.415616",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: "2025-11-18",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:21.370615",
            meldingId: "e8639099-ccbc-4d7a-a104-951232f22d76",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a9714-996c-7a5d-b8ac-361a394e68d4"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-9b27-77bd-9dc6-67edf2642ab9",
          opprettet: "2025-11-18T14:08:21.415688",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: "1974-02-04",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:21.371221",
            meldingId: "e8639099-ccbc-4d7a-a104-951232f22d76",
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
          id: "019a9714-9b29-7a5e-9a9c-5af77e4586a3",
          opprettet: "2025-11-18T14:08:21.417205",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: "2025-11-18",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: [
              "019a9714-9b27-77bd-9dc6-67edf2642ab7",
              "019a9714-9b27-77bd-9dc6-67edf2642ab8",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-9b29-7a5e-9a9c-5af77e4586a4",
          opprettet: "2025-11-18T14:08:21.417348",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2041-02-04",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "LeggTilÅr",
            },
            opplysninger: [
              "019a9714-998d-7ab6-865f-c0bc2032d7e3",
              "019a9714-9b27-77bd-9dc6-67edf2642ab9",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-9b2a-7f9f-9e04-5fe3e304898f",
          opprettet: "2025-11-18T14:08:21.418244",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: "2025-11-18",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: ["019a9714-9b29-7a5e-9a9c-5af77e4586a3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-9b2a-7f9f-9e04-5fe3e3048990",
          opprettet: "2025-11-18T14:08:21.418356",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2041-02-28",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteDagIMåned",
            },
            opplysninger: ["019a9714-9b29-7a5e-9a9c-5af77e4586a4"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-9b2a-7f9f-9e04-5fe3e3048992",
          opprettet: "2025-11-18T14:08:21.418959",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "FørEllerLik",
            },
            opplysninger: [
              "019a9714-9b2a-7f9f-9e04-5fe3e304898f",
              "019a9714-9b2a-7f9f-9e04-5fe3e3048990",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-9b2c-7051-8ea4-05399f3c4d43",
          opprettet: "2025-11-18T14:08:21.420833",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: "2025-11-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-9b2c-7051-8ea4-05399f3c4d44",
          opprettet: "2025-11-18T14:08:21.420907",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 36,
            enhet: "måneder",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-9b31-754d-a98d-a3597d1bb3c9",
          opprettet: "2025-11-18T14:08:21.425446",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-9b33-7b0b-8d51-afbbedb5ebaa",
          opprettet: "2025-11-18T14:08:21.427445",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 1.5,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-9b33-7b0b-8d51-afbbedb5ebab",
          opprettet: "2025-11-18T14:08:21.427524",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 3,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-9b33-7b0b-8d51-afbbedb5ebac",
          opprettet: "2025-11-18T14:08:21.427548",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
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
      opplysningTypeId: "0194881f-9414-7823-8d29-0e25b7feb7cf",
      navn: "Arbeidsgivers rapporteringsfrist",
      datatype: "dato",
      perioder: [
        {
          id: "019a9714-9b35-7390-984d-3c15d646590a",
          opprettet: "2025-11-18T14:08:21.429594",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: "2025-11-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "FørsteArbeidsdag",
            },
            opplysninger: ["019a9714-9b2c-7051-8ea4-05399f3c4d43"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-9b36-7e08-a5c8-5ba1771ac95a",
          opprettet: "2025-11-18T14:08:21.43041",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 195240,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a9714-9b31-754d-a98d-a3597d1bb3c9",
              "019a9714-9b33-7b0b-8d51-afbbedb5ebaa",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-9b36-7e08-a5c8-5ba1771ac95b",
          opprettet: "2025-11-18T14:08:21.430494",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a9714-9b31-754d-a98d-a3597d1bb3c9",
              "019a9714-9b33-7b0b-8d51-afbbedb5ebab",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-9b36-7e08-a5c8-5ba1771ac95c",
          opprettet: "2025-11-18T14:08:21.430519",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-9b37-7037-899a-3bd771af6b6c",
          opprettet: "2025-11-18T14:08:21.431615",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: "2025-10-31",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteavsluttendeKalenderMåned",
            },
            opplysninger: [
              "019a9714-9b2a-7f9f-9e04-5fe3e304898f",
              "019a9714-9b35-7390-984d-3c15d646590a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-9b38-7c0a-90b3-5ae5f5adbe76",
          opprettet: "2025-11-18T14:08:21.432621",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: "2022-11-01",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "TrekkFraMåned",
            },
            opplysninger: [
              "019a9714-9b2c-7051-8ea4-05399f3c4d44",
              "019a9714-9b37-7037-899a-3bd771af6b6c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a02c-7041-aee9-e4e43291da67",
          opprettet: "2025-11-18T14:08:22.700187",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:22.635545",
            meldingId: "129a80c4-b19b-42bc-bf2b-f72a3a85e750",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a9714-996c-7a5d-b8ac-361a394e68d4"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a02c-7041-aee9-e4e43291da68",
          opprettet: "2025-11-18T14:08:22.700274",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:22.635992",
            meldingId: "129a80c4-b19b-42bc-bf2b-f72a3a85e750",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a9714-996c-7a5d-b8ac-361a394e68d4"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a02c-7041-aee9-e4e43291da69",
          opprettet: "2025-11-18T14:08:22.700386",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:22.636285",
            meldingId: "129a80c4-b19b-42bc-bf2b-f72a3a85e750",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a9714-996c-7a5d-b8ac-361a394e68d4"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a02c-7041-aee9-e4e43291da6a",
          opprettet: "2025-11-18T14:08:22.700493",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:22.636651",
            meldingId: "129a80c4-b19b-42bc-bf2b-f72a3a85e750",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a9714-996c-7a5d-b8ac-361a394e68d4"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a02c-7041-aee9-e4e43291da6b",
          opprettet: "2025-11-18T14:08:22.700561",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:22.636874",
            meldingId: "129a80c4-b19b-42bc-bf2b-f72a3a85e750",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a9714-996c-7a5d-b8ac-361a394e68d4"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a02c-7041-aee9-e4e43291da6c",
          opprettet: "2025-11-18T14:08:22.700631",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:22.637264",
            meldingId: "129a80c4-b19b-42bc-bf2b-f72a3a85e750",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a9714-996c-7a5d-b8ac-361a394e68d4"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a02c-7041-aee9-e4e43291da6d",
          opprettet: "2025-11-18T14:08:22.700681",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:22.637823",
            meldingId: "129a80c4-b19b-42bc-bf2b-f72a3a85e750",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Register",
    },
    {
      opplysningTypeId: "0194881f-9444-7a73-a458-0af81c034d86",
      navn: "Bruker er permittert",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a9714-a02c-7041-aee9-e4e43291da6e",
          opprettet: "2025-11-18T14:08:22.700729",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:22.638109",
            meldingId: "129a80c4-b19b-42bc-bf2b-f72a3a85e750",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a9714-996c-7a5d-b8ac-361a394e68d4"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a02c-7041-aee9-e4e43291da6f",
          opprettet: "2025-11-18T14:08:22.700787",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:22.638376",
            meldingId: "129a80c4-b19b-42bc-bf2b-f72a3a85e750",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a9714-996c-7a5d-b8ac-361a394e68d4"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a02c-7041-aee9-e4e43291da70",
          opprettet: "2025-11-18T14:08:22.700842",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:22.638626",
            meldingId: "129a80c4-b19b-42bc-bf2b-f72a3a85e750",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a9714-996c-7a5d-b8ac-361a394e68d4"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a02c-7041-aee9-e4e43291da71",
          opprettet: "2025-11-18T14:08:22.700897",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:22.638878",
            meldingId: "129a80c4-b19b-42bc-bf2b-f72a3a85e750",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a9714-996c-7a5d-b8ac-361a394e68d4"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04244",
      navn: "Inntektsopplysninger",
      datatype: "inntekt",
      perioder: [
        {
          id: "019a9714-a02c-7041-aee9-e4e43291da72",
          opprettet: "2025-11-18T14:08:22.700952",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: "01KABH97X195EE1Z8TVCFWE0Z1",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:22.639121",
            meldingId: "129a80c4-b19b-42bc-bf2b-f72a3a85e750",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: [
              "019a9714-9b2a-7f9f-9e04-5fe3e304898f",
              "019a9714-9b37-7037-899a-3bd771af6b6c",
              "019a9714-9b38-7c0a-90b3-5ae5f5adbe76",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a02e-716b-ab0a-1c96b7e65314",
          opprettet: "2025-11-18T14:08:22.702787",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: "01KABH97X195EE1Z8TVCFWE0Z1",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["019a9714-a02c-7041-aee9-e4e43291da72"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a02e-716b-ab0a-1c96b7e65315",
          opprettet: "2025-11-18T14:08:22.702841",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019a9714-a02c-7041-aee9-e4e43291da67"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a02e-716b-ab0a-1c96b7e65316",
          opprettet: "2025-11-18T14:08:22.702872",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019a9714-a02c-7041-aee9-e4e43291da68"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a02e-716b-ab0a-1c96b7e65317",
          opprettet: "2025-11-18T14:08:22.702904",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019a9714-a02c-7041-aee9-e4e43291da69"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a02e-716b-ab0a-1c96b7e65318",
          opprettet: "2025-11-18T14:08:22.702992",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: ["019a9714-a02c-7041-aee9-e4e43291da6a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a02f-70fc-9d07-31c4a83b9f05",
          opprettet: "2025-11-18T14:08:22.703084",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a9714-9b36-7e08-a5c8-5ba1771ac95c",
              "019a9714-a02c-7041-aee9-e4e43291da6b",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a02f-70fc-9d07-31c4a83b9f07",
          opprettet: "2025-11-18T14:08:22.703258",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: [
              "019a9714-a02c-7041-aee9-e4e43291da6c",
              "019a9714-a02c-7041-aee9-e4e43291da6e",
              "019a9714-a02c-7041-aee9-e4e43291da6f",
              "019a9714-a02c-7041-aee9-e4e43291da70",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a02f-70fc-9d07-31c4a83b9f08",
          opprettet: "2025-11-18T14:08:22.703296",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019a9714-a02c-7041-aee9-e4e43291da71"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a02f-70fc-9d07-31c4a83b9f09",
          opprettet: "2025-11-18T14:08:22.703332",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019a9714-a02c-7041-aee9-e4e43291da71"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a034-7e3d-91bd-684154e90a40",
          opprettet: "2025-11-18T14:08:22.708698",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 444440,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a9714-a02e-716b-ab0a-1c96b7e65314"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a035-7a10-813e-5434e7083f83",
          opprettet: "2025-11-18T14:08:22.709608",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 555550,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a9714-a02e-716b-ab0a-1c96b7e65314"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a035-7a10-813e-5434e7083f84",
          opprettet: "2025-11-18T14:08:22.709708",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a9714-a02c-7041-aee9-e4e43291da67",
              "019a9714-a02e-716b-ab0a-1c96b7e65315",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a035-7a10-813e-5434e7083f85",
          opprettet: "2025-11-18T14:08:22.709765",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a9714-a02c-7041-aee9-e4e43291da68",
              "019a9714-a02e-716b-ab0a-1c96b7e65316",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a035-7a10-813e-5434e7083f86",
          opprettet: "2025-11-18T14:08:22.709882",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a9714-a02c-7041-aee9-e4e43291da69",
              "019a9714-a02e-716b-ab0a-1c96b7e65317",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a035-7a10-813e-5434e7083f87",
          opprettet: "2025-11-18T14:08:22.709937",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a9714-a02c-7041-aee9-e4e43291da6c",
              "019a9714-a02f-70fc-9d07-31c4a83b9f07",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a037-7fa1-a018-b40919a89886",
          opprettet: "2025-11-18T14:08:22.711143",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a9714-9b36-7e08-a5c8-5ba1771ac95a",
              "019a9714-a034-7e3d-91bd-684154e90a40",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a037-7fa1-a018-b40919a89887",
          opprettet: "2025-11-18T14:08:22.711211",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a9714-9b36-7e08-a5c8-5ba1771ac95b",
              "019a9714-a035-7a10-813e-5434e7083f83",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a037-7fa1-a018-b40919a89888",
          opprettet: "2025-11-18T14:08:22.71133",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019a9714-a02e-716b-ab0a-1c96b7e65318",
              "019a9714-a02f-70fc-9d07-31c4a83b9f05",
              "019a9714-a035-7a10-813e-5434e7083f84",
              "019a9714-a035-7a10-813e-5434e7083f85",
              "019a9714-a035-7a10-813e-5434e7083f86",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a037-7fa1-a018-b40919a89889",
          opprettet: "2025-11-18T14:08:22.711422",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a9714-a02c-7041-aee9-e4e43291da6e",
              "019a9714-a02c-7041-aee9-e4e43291da6f",
              "019a9714-a02c-7041-aee9-e4e43291da70",
              "019a9714-a035-7a10-813e-5434e7083f87",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a038-79fb-a010-08d38dd1597e",
          opprettet: "2025-11-18T14:08:22.712431",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a9714-a037-7fa1-a018-b40919a89886",
              "019a9714-a037-7fa1-a018-b40919a89887",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a03a-74fe-ab7c-851fb8c17fa7",
          opprettet: "2025-11-18T14:08:22.714739",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a03a-74fe-ab7c-851fb8c17fa8",
          opprettet: "2025-11-18T14:08:22.714794",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a03a-74fe-ab7c-851fb8c17fa9",
          opprettet: "2025-11-18T14:08:22.714831",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a03a-74fe-ab7c-851fb8c17faa",
          opprettet: "2025-11-18T14:08:22.714865",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a03a-74fe-ab7c-851fb8c17fab",
          opprettet: "2025-11-18T14:08:22.714902",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a03f-711f-a8ac-27e19f715553",
          opprettet: "2025-11-18T14:08:22.719379",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a03f-711f-a8ac-27e19f715554",
          opprettet: "2025-11-18T14:08:22.71951",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a03f-711f-a8ac-27e19f715555",
          opprettet: "2025-11-18T14:08:22.719564",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a03f-711f-a8ac-27e19f715556",
          opprettet: "2025-11-18T14:08:22.719629",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a03f-711f-a8ac-27e19f715557",
          opprettet: "2025-11-18T14:08:22.71968",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a03f-711f-a8ac-27e19f715558",
          opprettet: "2025-11-18T14:08:22.71973",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a03f-711f-a8ac-27e19f715559",
          opprettet: "2025-11-18T14:08:22.719779",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a03f-711f-a8ac-27e19f71555a",
          opprettet: "2025-11-18T14:08:22.719941",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 50,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a040-74d2-8250-20d122bc5b3d",
          opprettet: "2025-11-18T14:08:22.72008",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a040-74d2-8250-20d122bc5b3e",
          opprettet: "2025-11-18T14:08:22.720169",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a040-74d2-8250-20d122bc5b3f",
          opprettet: "2025-11-18T14:08:22.720232",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a040-74d2-8250-20d122bc5b40",
          opprettet: "2025-11-18T14:08:22.720287",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a040-74d2-8250-20d122bc5b41",
          opprettet: "2025-11-18T14:08:22.720337",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a040-74d2-8250-20d122bc5b42",
          opprettet: "2025-11-18T14:08:22.720391",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a040-74d2-8250-20d122bc5b43",
          opprettet: "2025-11-18T14:08:22.720442",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a040-74d2-8250-20d122bc5b44",
          opprettet: "2025-11-18T14:08:22.720498",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a040-74d2-8250-20d122bc5b45",
          opprettet: "2025-11-18T14:08:22.72055",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a040-74d2-8250-20d122bc5b46",
          opprettet: "2025-11-18T14:08:22.720611",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a040-74d2-8250-20d122bc5b47",
          opprettet: "2025-11-18T14:08:22.720667",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a042-7d67-839a-57f858ba3c82",
          opprettet: "2025-11-18T14:08:22.72265",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019a9714-a03a-74fe-ab7c-851fb8c17fa8"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a042-7d67-839a-57f858ba3c83",
          opprettet: "2025-11-18T14:08:22.722732",
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
            opplysninger: ["019a9714-a03f-711f-a8ac-27e19f715554"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a042-7d67-839a-57f858ba3c84",
          opprettet: "2025-11-18T14:08:22.722823",
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
            opplysninger: [
              "019a9714-a03f-711f-a8ac-27e19f715557",
              "019a9714-a03f-711f-a8ac-27e19f715558",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a042-7d67-839a-57f858ba3c85",
          opprettet: "2025-11-18T14:08:22.722906",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
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
              "019a9714-a02c-7041-aee9-e4e43291da70",
              "019a9714-a03f-711f-a8ac-27e19f71555a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a043-7577-ae12-9a53381781d8",
          opprettet: "2025-11-18T14:08:22.723006",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a9714-a040-74d2-8250-20d122bc5b3d",
              "019a9714-a040-74d2-8250-20d122bc5b3e",
              "019a9714-a040-74d2-8250-20d122bc5b3f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a043-7577-ae12-9a53381781d9",
          opprettet: "2025-11-18T14:08:22.723117",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a9714-a040-74d2-8250-20d122bc5b41",
              "019a9714-a040-74d2-8250-20d122bc5b42",
              "019a9714-a040-74d2-8250-20d122bc5b43",
              "019a9714-a040-74d2-8250-20d122bc5b44",
              "019a9714-a040-74d2-8250-20d122bc5b45",
              "019a9714-a040-74d2-8250-20d122bc5b46",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a043-7577-ae12-9a53381781da",
          opprettet: "2025-11-18T14:08:22.72319",
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
            opplysninger: ["019a9714-a040-74d2-8250-20d122bc5b47"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a046-7eb9-bf86-bca73d3bf0ab",
          opprettet: "2025-11-18T14:08:22.726097",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a047-7f8d-9eb2-f0923d94d5f5",
          opprettet: "2025-11-18T14:08:22.727869",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "019a9714-a042-7d67-839a-57f858ba3c83",
              "019a9714-a046-7eb9-bf86-bca73d3bf0ab",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a049-7d29-8083-e76a7e26f13f",
          opprettet: "2025-11-18T14:08:22.729988",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "019a9714-a03a-74fe-ab7c-851fb8c17fa9",
              "019a9714-a03a-74fe-ab7c-851fb8c17faa",
              "019a9714-a03a-74fe-ab7c-851fb8c17fab",
              "019a9714-a03f-711f-a8ac-27e19f715553",
              "019a9714-a03f-711f-a8ac-27e19f715555",
              "019a9714-a03f-711f-a8ac-27e19f715556",
              "019a9714-a047-7f8d-9eb2-f0923d94d5f5",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3e8-7094-bf3b-e814b5137b65",
          opprettet: "2025-11-18T14:08:23.656395",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:23.612995",
            meldingId: "e92fad16-2acd-4932-9d3b-c11c7bb3486e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a9714-996c-7a5d-b8ac-361a394e68d4"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3e8-7094-bf3b-e814b5137b66",
          opprettet: "2025-11-18T14:08:23.656534",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:23.613313",
            meldingId: "e92fad16-2acd-4932-9d3b-c11c7bb3486e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a75e",
      navn: "Har krav på lønn fra arbeidsgiver",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a9714-a3e8-7094-bf3b-e814b5137b67",
          opprettet: "2025-11-18T14:08:23.656643",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:23.613598",
            meldingId: "e92fad16-2acd-4932-9d3b-c11c7bb3486e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a9714-996c-7a5d-b8ac-361a394e68d4"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3e8-7094-bf3b-e814b5137b68",
          opprettet: "2025-11-18T14:08:23.656759",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:23.613842",
            meldingId: "e92fad16-2acd-4932-9d3b-c11c7bb3486e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a9714-996c-7a5d-b8ac-361a394e68d4"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45cf",
      navn: "Omsorgspenger etter lovens kapittel 9",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a9714-a3e8-7094-bf3b-e814b5137b69",
          opprettet: "2025-11-18T14:08:23.656862",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:23.614102",
            meldingId: "e92fad16-2acd-4932-9d3b-c11c7bb3486e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3e8-7094-bf3b-e814b5137b6a",
          opprettet: "2025-11-18T14:08:23.656988",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:23.614314",
            meldingId: "e92fad16-2acd-4932-9d3b-c11c7bb3486e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3e9-718c-a81c-6b6282cb2407",
          opprettet: "2025-11-18T14:08:23.657112",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:23.614459",
            meldingId: "e92fad16-2acd-4932-9d3b-c11c7bb3486e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3e9-718c-a81c-6b6282cb2408",
          opprettet: "2025-11-18T14:08:23.657262",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:23.614647",
            meldingId: "e92fad16-2acd-4932-9d3b-c11c7bb3486e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3e9-718c-a81c-6b6282cb2409",
          opprettet: "2025-11-18T14:08:23.657387",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:23.614867",
            meldingId: "e92fad16-2acd-4932-9d3b-c11c7bb3486e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3eb-7ee2-b6fc-a8ae2ad6c9b9",
          opprettet: "2025-11-18T14:08:23.659697",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019a9714-a3e8-7094-bf3b-e814b5137b65"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3eb-7ee2-b6fc-a8ae2ad6c9ba",
          opprettet: "2025-11-18T14:08:23.659852",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a9714-a042-7d67-839a-57f858ba3c83",
              "019a9714-a3e8-7094-bf3b-e814b5137b66",
              "019a9714-a3e8-7094-bf3b-e814b5137b69",
              "019a9714-a3e8-7094-bf3b-e814b5137b6a",
              "019a9714-a3e9-718c-a81c-6b6282cb2407",
              "019a9714-a3e9-718c-a81c-6b6282cb2408",
              "019a9714-a3e9-718c-a81c-6b6282cb2409",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3eb-7ee2-b6fc-a8ae2ad6c9bb",
          opprettet: "2025-11-18T14:08:23.659925",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: ["019a9714-a3e8-7094-bf3b-e814b5137b67"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3ec-7e85-8df5-95afe651dd8c",
          opprettet: "2025-11-18T14:08:23.660005",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019a9714-a3e8-7094-bf3b-e814b5137b68"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3ec-7e85-8df5-95afe651dd8d",
          opprettet: "2025-11-18T14:08:23.660119",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErUsann",
            },
            opplysninger: ["019a9714-a3e8-7094-bf3b-e814b5137b68"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3ed-715d-ac2c-a320312c4c87",
          opprettet: "2025-11-18T14:08:23.661575",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019a9714-a3eb-7ee2-b6fc-a8ae2ad6c9b9"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3ed-715d-ac2c-a320312c4c88",
          opprettet: "2025-11-18T14:08:23.661681",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019a9714-a043-7577-ae12-9a53381781d9",
              "019a9714-a3ec-7e85-8df5-95afe651dd8c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3ef-7fe3-b443-1f8080f70ad0",
          opprettet: "2025-11-18T14:08:23.663123",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a9714-a3eb-7ee2-b6fc-a8ae2ad6c9b9",
              "019a9714-a3ed-715d-ac2c-a320312c4c87",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3f2-7062-8097-6e635a42feae",
          opprettet: "2025-11-18T14:08:23.666655",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a9714-a3ec-7e85-8df5-95afe651dd8d",
              "019a9714-a3ed-715d-ac2c-a320312c4c88",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3f5-7df0-9f44-3614915e2174",
          opprettet: "2025-11-18T14:08:23.669595",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019a9714-a042-7d67-839a-57f858ba3c82",
              "019a9714-a3ef-7fe3-b443-1f8080f70ad0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-940f-7af9-9387-052e028b29ee",
      navn: "Grunnbeløp for grunnlag",
      datatype: "penger",
      perioder: [
        {
          id: "019a9714-a3fa-73e5-a0c4-107c89b99bfd",
          opprettet: "2025-11-18T14:08:23.674226",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3fa-73e5-a0c4-107c89b99bfe",
          opprettet: "2025-11-18T14:08:23.674433",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: "01KABH97X195EE1Z8TVCFWE0Z1",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["019a9714-a02c-7041-aee9-e4e43291da72"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3fa-73e5-a0c4-107c89b99bff",
          opprettet: "2025-11-18T14:08:23.674591",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 6,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3fa-73e5-a0c4-107c89b99c00",
          opprettet: "2025-11-18T14:08:23.674751",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a3fc-7cc2-a4df-c4988c5ee1ca",
          opprettet: "2025-11-18T14:08:23.676252",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 0.0024,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3fd-7a85-bc75-7b4d0ed5d268",
          opprettet: "2025-11-18T14:08:23.677539",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 37,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3fd-7a85-bc75-7b4d0ed5d269",
          opprettet: "2025-11-18T14:08:23.677831",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 0.9,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3fe-70af-995f-e96c5d99d50e",
          opprettet: "2025-11-18T14:08:23.678032",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 260,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3fe-70af-995f-e96c5d99d50f",
          opprettet: "2025-11-18T14:08:23.678189",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 5,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3fe-70af-995f-e96c5d99d510",
          opprettet: "2025-11-18T14:08:23.678344",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 0.03,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3fe-70af-995f-e96c5d99d511",
          opprettet: "2025-11-18T14:08:23.678629",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a3fe-70af-995f-e96c5d99d512",
          opprettet: "2025-11-18T14:08:23.678763",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a3fe-70af-995f-e96c5d99d513",
          opprettet: "2025-11-18T14:08:23.678872",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a3ff-7a9f-a522-6feed0223907",
          opprettet: "2025-11-18T14:08:23.679001",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a3ff-7a9f-a522-6feed0223908",
          opprettet: "2025-11-18T14:08:23.679113",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a3ff-7a9f-a522-6feed0223909",
          opprettet: "2025-11-18T14:08:23.679231",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a3ff-7a9f-a522-6feed022390a",
          opprettet: "2025-11-18T14:08:23.6794",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 2,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3ff-7a9f-a522-6feed022390b",
          opprettet: "2025-11-18T14:08:23.679545",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 2,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3ff-7a9f-a522-6feed022390c",
          opprettet: "2025-11-18T14:08:23.679686",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 5,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a3ff-7a9f-a522-6feed022390d",
          opprettet: "2025-11-18T14:08:23.679826",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 3,
            enhet: "dager",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a400-74ba-925a-5d10461a5bf3",
          opprettet: "2025-11-18T14:08:23.680067",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a400-74ba-925a-5d10461a5bf4",
          opprettet: "2025-11-18T14:08:23.680206",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a400-74ba-925a-5d10461a5bf5",
          opprettet: "2025-11-18T14:08:23.680309",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a400-74ba-925a-5d10461a5bf6",
          opprettet: "2025-11-18T14:08:23.680436",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a400-74ba-925a-5d10461a5bf7",
          opprettet: "2025-11-18T14:08:23.68055",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a400-74ba-925a-5d10461a5bf8",
          opprettet: "2025-11-18T14:08:23.680663",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a400-74ba-925a-5d10461a5bf9",
          opprettet: "2025-11-18T14:08:23.680828",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 40,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a400-74ba-925a-5d10461a5bfa",
          opprettet: "2025-11-18T14:08:23.680951",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a401-7488-94cb-80bb3e788d71",
          opprettet: "2025-11-18T14:08:23.681094",
          status: "Ny",
          opprinnelse: "Ny",
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
          id: "019a9714-a408-780d-b7ec-075daf013bb7",
          opprettet: "2025-11-18T14:08:23.688377",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: "01KABH97X195EE1Z8TVCFWE0Z1",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Oppjuster",
            },
            opplysninger: [
              "019a9714-a3fa-73e5-a0c4-107c89b99bfd",
              "019a9714-a3fa-73e5-a0c4-107c89b99bfe",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a408-780d-b7ec-075daf013bb8",
          opprettet: "2025-11-18T14:08:23.688664",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a9714-a3fa-73e5-a0c4-107c89b99bfd",
              "019a9714-a3fa-73e5-a0c4-107c89b99bff",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a409-7ae3-b0f9-c64d07853132",
          opprettet: "2025-11-18T14:08:23.689243",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 444440,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a9714-a3fa-73e5-a0c4-107c89b99bfe"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a409-7ae3-b0f9-c64d07853133",
          opprettet: "2025-11-18T14:08:23.689891",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 111110,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a9714-a3fa-73e5-a0c4-107c89b99bfe"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a40a-710e-826b-5e9111d07a58",
          opprettet: "2025-11-18T14:08:23.690351",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a9714-a3fa-73e5-a0c4-107c89b99bfe"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a40a-710e-826b-5e9111d07a59",
          opprettet: "2025-11-18T14:08:23.690556",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 3904.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a9714-a3fa-73e5-a0c4-107c89b99bfd",
              "019a9714-a3fe-70af-995f-e96c5d99d510",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a40a-710e-826b-5e9111d07a5a",
          opprettet: "2025-11-18T14:08:23.690864",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SumAv",
            },
            opplysninger: [
              "019a9714-a3fe-70af-995f-e96c5d99d511",
              "019a9714-a3fe-70af-995f-e96c5d99d512",
              "019a9714-a3fe-70af-995f-e96c5d99d513",
              "019a9714-a3ff-7a9f-a522-6feed0223907",
              "019a9714-a3ff-7a9f-a522-6feed0223908",
              "019a9714-a3ff-7a9f-a522-6feed0223909",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a40b-7f7c-a280-e403b4b54f09",
          opprettet: "2025-11-18T14:08:23.691107",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a9714-9b31-754d-a98d-a3597d1bb3c9",
              "019a9714-a3ff-7a9f-a522-6feed022390a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a40b-7f7c-a280-e403b4b54f0a",
          opprettet: "2025-11-18T14:08:23.691706",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 185183.33333333334,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019a9714-a035-7a10-813e-5434e7083f83",
              "019a9714-a3fa-73e5-a0c4-107c89b99c00",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a40b-7f7c-a280-e403b4b54f0b",
          opprettet: "2025-11-18T14:08:23.691901",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a9714-9b31-754d-a98d-a3597d1bb3c9",
              "019a9714-a3ff-7a9f-a522-6feed022390b",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a40c-730a-84cc-e017d9cf3525",
          opprettet: "2025-11-18T14:08:23.692226",
          status: "Ny",
          opprinnelse: "Ny",
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
              "019a9714-a400-74ba-925a-5d10461a5bfa",
              "019a9714-a401-7488-94cb-80bb3e788d71",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a410-711a-9029-232373576fc6",
          opprettet: "2025-11-18T14:08:23.696818",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 460919.9848421324,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a9714-a408-780d-b7ec-075daf013bb7"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a411-72cb-9a4f-942b846ed8ff",
          opprettet: "2025-11-18T14:08:23.697203",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 116603.3282807108,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a9714-a408-780d-b7ec-075daf013bb7"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a411-72cb-9a4f-942b846ed900",
          opprettet: "2025-11-18T14:08:23.697469",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a9714-a408-780d-b7ec-075daf013bb7"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a411-72cb-9a4f-942b846ed901",
          opprettet: "2025-11-18T14:08:23.697601",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a9714-a034-7e3d-91bd-684154e90a40",
              "019a9714-a40b-7f7c-a280-e403b4b54f09",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a411-72cb-9a4f-942b846ed902",
          opprettet: "2025-11-18T14:08:23.697724",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a9714-a40b-7f7c-a280-e403b4b54f0a",
              "019a9714-a40b-7f7c-a280-e403b4b54f0b",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a415-78eb-b7f1-903dd721abd5",
          opprettet: "2025-11-18T14:08:23.701156",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 460919.9848421324,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a9714-a408-780d-b7ec-075daf013bb8",
              "019a9714-a410-711a-9029-232373576fc6",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a415-78eb-b7f1-903dd721abd6",
          opprettet: "2025-11-18T14:08:23.701317",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 460919.9848421324,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a9714-a408-780d-b7ec-075daf013bb8",
              "019a9714-a410-711a-9029-232373576fc6",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a415-78eb-b7f1-903dd721abd7",
          opprettet: "2025-11-18T14:08:23.701432",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 116603.3282807108,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a9714-a408-780d-b7ec-075daf013bb8",
              "019a9714-a411-72cb-9a4f-942b846ed8ff",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a415-78eb-b7f1-903dd721abd8",
          opprettet: "2025-11-18T14:08:23.701533",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a9714-a408-780d-b7ec-075daf013bb8",
              "019a9714-a411-72cb-9a4f-942b846ed900",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a415-78eb-b7f1-903dd721abd9",
          opprettet: "2025-11-18T14:08:23.701663",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019a9714-a408-780d-b7ec-075daf013bb8",
              "019a9714-a410-711a-9029-232373576fc6",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a415-78eb-b7f1-903dd721abda",
          opprettet: "2025-11-18T14:08:23.701767",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019a9714-a408-780d-b7ec-075daf013bb8",
              "019a9714-a411-72cb-9a4f-942b846ed8ff",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a415-78eb-b7f1-903dd721abdb",
          opprettet: "2025-11-18T14:08:23.701863",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019a9714-a408-780d-b7ec-075daf013bb8",
              "019a9714-a411-72cb-9a4f-942b846ed900",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a416-7a38-b286-bdd491f48d01",
          opprettet: "2025-11-18T14:08:23.702003",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 104,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a416-7a38-b286-bdd491f48d02",
          opprettet: "2025-11-18T14:08:23.702147",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 52,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a9714-9b2a-7f9f-9e04-5fe3e304898f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a419-7e14-8136-80dd97df8914",
          opprettet: "2025-11-18T14:08:23.705546",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 577523.3131228433,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SumAv",
            },
            opplysninger: [
              "019a9714-a415-78eb-b7f1-903dd721abd6",
              "019a9714-a415-78eb-b7f1-903dd721abd7",
              "019a9714-a415-78eb-b7f1-903dd721abd8",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a419-7e14-8136-80dd97df8915",
          opprettet: "2025-11-18T14:08:23.70574",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a9714-a415-78eb-b7f1-903dd721abd9",
              "019a9714-a415-78eb-b7f1-903dd721abda",
              "019a9714-a415-78eb-b7f1-903dd721abdb",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a419-7e14-8136-80dd97df8916",
          opprettet: "2025-11-18T14:08:23.705846",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
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
              "019a9714-a411-72cb-9a4f-942b846ed901",
              "019a9714-a416-7a38-b286-bdd491f48d01",
              "019a9714-a416-7a38-b286-bdd491f48d02",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a419-7e14-8136-80dd97df8917",
          opprettet: "2025-11-18T14:08:23.705945",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
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
              "019a9714-a411-72cb-9a4f-942b846ed902",
              "019a9714-a416-7a38-b286-bdd491f48d01",
              "019a9714-a416-7a38-b286-bdd491f48d02",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a41d-7a51-babd-a8f0546b51aa",
          opprettet: "2025-11-18T14:08:23.709323",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 192507.77104094773,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019a9714-a3fa-73e5-a0c4-107c89b99c00",
              "019a9714-a419-7e14-8136-80dd97df8914",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a41d-7a51-babd-a8f0546b51ab",
          opprettet: "2025-11-18T14:08:23.709511",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
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
              "019a9714-a419-7e14-8136-80dd97df8916",
              "019a9714-a419-7e14-8136-80dd97df8917",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a420-7277-a946-987ede1b1f59",
          opprettet: "2025-11-18T14:08:23.712612",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 460919.9848421324,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "019a9714-a415-78eb-b7f1-903dd721abd5",
              "019a9714-a41d-7a51-babd-a8f0546b51aa",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a420-7277-a946-987ede1b1f5a",
          opprettet: "2025-11-18T14:08:23.712746",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
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
              "019a9714-a038-79fb-a010-08d38dd1597e",
              "019a9714-a41d-7a51-babd-a8f0546b51ab",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a420-7277-a946-987ede1b1f5b",
          opprettet: "2025-11-18T14:08:23.712883",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
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
              "019a9714-a3ff-7a9f-a522-6feed022390c",
              "019a9714-a41d-7a51-babd-a8f0546b51ab",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a426-7dfc-843e-fab87c447023",
          opprettet: "2025-11-18T14:08:23.718558",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 460920,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["019a9714-a420-7277-a946-987ede1b1f59"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a426-7dfc-843e-fab87c447024",
          opprettet: "2025-11-18T14:08:23.718918",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: "Inntekt etter avkortning og oppjustering siste 12 måneder",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Brukt",
            },
            opplysninger: ["019a9714-a420-7277-a946-987ede1b1f59"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a42a-7a47-b62d-bbca5ce2bfa3",
          opprettet: "2025-11-18T14:08:23.722708",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 460920,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "019a9714-a02f-70fc-9d07-31c4a83b9f08",
              "019a9714-a426-7dfc-843e-fab87c447023",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a42f-70ef-abe2-7276bb3c8c92",
          opprettet: "2025-11-18T14:08:23.727783",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 460920,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "019a9714-a426-7dfc-843e-fab87c447023",
              "019a9714-a42a-7a47-b62d-bbca5ce2bfa3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a42f-70ef-abe2-7276bb3c8c93",
          opprettet: "2025-11-18T14:08:23.727995",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019a9714-a426-7dfc-843e-fab87c447023",
              "019a9714-a42a-7a47-b62d-bbca5ce2bfa3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a433-7241-87ca-a31393eb043f",
          opprettet: "2025-11-18T14:08:23.731581",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 1106.208,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a9714-a3fc-7cc2-a4df-c4988c5ee1ca",
              "019a9714-a42f-70ef-abe2-7276bb3c8c92",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a433-7241-87ca-a31393eb0440",
          opprettet: "2025-11-18T14:08:23.731762",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 414828,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a9714-a3fd-7a85-bc75-7b4d0ed5d269",
              "019a9714-a42f-70ef-abe2-7276bb3c8c92",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a433-7241-87ca-a31393eb0441",
          opprettet: "2025-11-18T14:08:23.731884",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
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
              "019a9714-a400-74ba-925a-5d10461a5bfa",
              "019a9714-a42f-70ef-abe2-7276bb3c8c93",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a437-7df5-83bd-48615f668ed1",
          opprettet: "2025-11-18T14:08:23.735448",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 1106,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["019a9714-a433-7241-87ca-a31393eb043f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a437-7df5-83bd-48615f668ed2",
          opprettet: "2025-11-18T14:08:23.735778",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 1595.4923076923078,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019a9714-a3fe-70af-995f-e96c5d99d50e",
              "019a9714-a433-7241-87ca-a31393eb0440",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a437-7df5-83bd-48615f668ed3",
          opprettet: "2025-11-18T14:08:23.735936",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
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
              "019a9714-a02c-7041-aee9-e4e43291da6b",
              "019a9714-a400-74ba-925a-5d10461a5bf9",
              "019a9714-a40c-730a-84cc-e017d9cf3525",
              "019a9714-a433-7241-87ca-a31393eb0441",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a43b-7618-9105-f13b8d71eeba",
          opprettet: "2025-11-18T14:08:23.739385",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 1595,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["019a9714-a437-7df5-83bd-48615f668ed2"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a43b-7618-9105-f13b8d71eebb",
          opprettet: "2025-11-18T14:08:23.739587",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "SjekkAvTerskel",
            },
            opplysninger: [
              "019a9714-a03f-711f-a8ac-27e19f715559",
              "019a9714-a042-7d67-839a-57f858ba3c85",
              "019a9714-a437-7df5-83bd-48615f668ed3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a441-707d-b730-ae9e6b954606",
          opprettet: "2025-11-18T14:08:23.745773",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019a9714-a040-74d2-8250-20d122bc5b40",
              "019a9714-a043-7577-ae12-9a53381781d8",
              "019a9714-a3eb-7ee2-b6fc-a8ae2ad6c9bb",
              "019a9714-a43b-7618-9105-f13b8d71eebb",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a54c-7733-9436-5f7a5fc55a17",
          opprettet: "2025-11-18T14:08:24.012208",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            søknadBarnId: "189a5c17-8363-4155-ae4c-279953da6a80",
            verdi: [],
            datatype: "barn",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:23.963031",
            meldingId: "ad37ab0d-ad9f-4be7-9ebf-e2b62a11eeaa",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a9714-996c-7a5d-b8ac-361a394e68d4"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a54c-7733-9436-5f7a5fc55a18",
          opprettet: "2025-11-18T14:08:24.012448",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-18T14:08:23.965087",
            meldingId: "ad37ab0d-ad9f-4be7-9ebf-e2b62a11eeaa",
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
          id: "019a9714-a550-7eb0-9055-dcbf9bb76329",
          opprettet: "2025-11-18T14:08:24.016561",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 0,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "AntallAv",
            },
            opplysninger: ["019a9714-a54c-7733-9436-5f7a5fc55a17"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a551-7ed7-83d1-a4569a7ef4d7",
          opprettet: "2025-11-18T14:08:24.017111",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a9714-a400-74ba-925a-5d10461a5bf3",
              "019a9714-a400-74ba-925a-5d10461a5bf4",
              "019a9714-a400-74ba-925a-5d10461a5bf5",
              "019a9714-a400-74ba-925a-5d10461a5bf6",
              "019a9714-a400-74ba-925a-5d10461a5bf7",
              "019a9714-a400-74ba-925a-5d10461a5bf8",
              "019a9714-a54c-7733-9436-5f7a5fc55a18",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a554-79c4-a4f3-0a7ab06112df",
          opprettet: "2025-11-18T14:08:24.020388",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a9714-a3fd-7a85-bc75-7b4d0ed5d268",
              "019a9714-a550-7eb0-9055-dcbf9bb76329",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a557-7ed1-aeb9-5afadbaff1e9",
          opprettet: "2025-11-18T14:08:24.02362",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 1106,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "019a9714-a437-7df5-83bd-48615f668ed1",
              "019a9714-a554-79c4-a4f3-0a7ab06112df",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a557-7ed1-aeb9-5afadbaff1ea",
          opprettet: "2025-11-18T14:08:24.023848",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a9714-a3fd-7a85-bc75-7b4d0ed5d268",
              "019a9714-a554-79c4-a4f3-0a7ab06112df",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a55b-7156-8bae-6be9312602bf",
          opprettet: "2025-11-18T14:08:24.027408",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019a9714-a43b-7618-9105-f13b8d71eeba",
              "019a9714-a557-7ed1-aeb9-5afadbaff1e9",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a55b-7156-8bae-6be9312602c0",
          opprettet: "2025-11-18T14:08:24.027731",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 5530,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a9714-a3fe-70af-995f-e96c5d99d50f",
              "019a9714-a557-7ed1-aeb9-5afadbaff1e9",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a55f-7b31-a917-ee46d2cf02ad",
          opprettet: "2025-11-18T14:08:24.031074",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 1106,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019a9714-a437-7df5-83bd-48615f668ed1",
              "019a9714-a55b-7156-8bae-6be9312602bf",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a562-7477-8234-0312d2eb5d25",
          opprettet: "2025-11-18T14:08:24.034146",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 1106,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019a9714-a049-7d29-8083-e76a7e26f13f",
              "019a9714-a55f-7b31-a917-ee46d2cf02ad",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a562-7477-8234-0312d2eb5d26",
          opprettet: "2025-11-18T14:08:24.034402",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a9714-a049-7d29-8083-e76a7e26f13f",
              "019a9714-a55f-7b31-a917-ee46d2cf02ad",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a565-745b-96f0-4284955b7691",
          opprettet: "2025-11-18T14:08:24.037478",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 5530,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a9714-a3fe-70af-995f-e96c5d99d50f",
              "019a9714-a562-7477-8234-0312d2eb5d25",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a565-745b-96f0-4284955b7692",
          opprettet: "2025-11-18T14:08:24.037792",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a9714-a557-7ed1-aeb9-5afadbaff1ea",
              "019a9714-a562-7477-8234-0312d2eb5d26",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a568-7cd2-b520-4da50c83c7ab",
          opprettet: "2025-11-18T14:08:24.040691",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 3904.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a9714-a40a-710e-826b-5e9111d07a59",
              "019a9714-a565-745b-96f0-4284955b7691",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a569-7189-9db5-abade2d8aeca",
          opprettet: "2025-11-18T14:08:24.041118",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 5530,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019a9714-a40a-710e-826b-5e9111d07a5a",
              "019a9714-a565-745b-96f0-4284955b7691",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a56c-7a0e-88ee-53522a3599d1",
          opprettet: "2025-11-18T14:08:24.044137",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 5530,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "019a9714-a568-7cd2-b520-4da50c83c7ab",
              "019a9714-a569-7189-9db5-abade2d8aeca",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a56f-71d1-9f27-973993e98f9c",
          opprettet: "2025-11-18T14:08:24.047737",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 1106,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019a9714-a3fe-70af-995f-e96c5d99d50f",
              "019a9714-a56c-7a0e-88ee-53522a3599d1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a573-7322-a079-9d6167e87830",
          opprettet: "2025-11-18T14:08:24.051061",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 1106,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "019a9714-a554-79c4-a4f3-0a7ab06112df",
              "019a9714-a56f-71d1-9f27-973993e98f9c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a573-7322-a079-9d6167e87831",
          opprettet: "2025-11-18T14:08:24.051368",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErUlik",
            },
            opplysninger: [
              "019a9714-a55f-7b31-a917-ee46d2cf02ad",
              "019a9714-a56f-71d1-9f27-973993e98f9c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a576-7eb3-b064-8ef97c57b58e",
          opprettet: "2025-11-18T14:08:24.054327",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 1106,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a9714-a43b-7618-9105-f13b8d71eeba",
              "019a9714-a573-7322-a079-9d6167e87830",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a579-7946-a56c-efc4ddb5c297",
          opprettet: "2025-11-18T14:08:24.057239",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 5530,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a9714-a3fe-70af-995f-e96c5d99d50f",
              "019a9714-a576-7eb3-b064-8ef97c57b58e",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a579-7946-a56c-efc4ddb5c298",
          opprettet: "2025-11-18T14:08:24.057508",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 3318,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a9714-a3ff-7a9f-a522-6feed022390d",
              "019a9714-a576-7eb3-b064-8ef97c57b58e",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
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
          id: "019a9714-a57c-74e1-91c3-ae20c8bf5b99",
          opprettet: "2025-11-18T14:08:24.060413",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          verdi: {
            verdi: 3318,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "019a9714-a02c-7041-aee9-e4e43291da70",
              "019a9714-a579-7946-a56c-efc4ddb5c298",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.18-12.52-623664c",
          },
        },
      ],
      synlig: true,
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
          id: "019a9714-fdf8-7640-9370-4b82bcceb4f9",
          opprettet: "2025-11-18T14:08:46.71289",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          gyldigTilOgMed: "2025-11-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-11-18T14:08:46.656533",
            ident: "Z994794",
            begrunnelse: {
              verdi: "sdf",
              sistEndret: "2025-11-18T14:08:46.656491",
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
      opplysningTypeId: "01990a09-0eab-7957-b88f-14484a50e194",
      navn: "Har løpende rett på dagpenger",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a9715-e26c-7187-9b0a-94b85cfe7553",
          opprettet: "2025-11-18T14:09:45.196794",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          gyldigTilOgMed: "2025-11-25",
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
  ],
  forslagOm: "Innvilgelse",
};
