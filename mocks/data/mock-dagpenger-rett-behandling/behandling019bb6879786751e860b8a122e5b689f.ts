import type { components } from "../../../openapi/behandling-typer";

export const behandling019bb6879786751e860b8a122e5b689f: components["schemas"]["Behandling"] = {
  behandlingId: "019bb687-9786-751e-860b-8a122e5b689f",
  behandletHendelse: {
    datatype: "UUID",
    id: "d5e2160c-bf80-473c-8118-8e13f2672cd4",
    type: "Søknad",
    skjedde: "2026-01-12",
  },
  behandlingskjedeId: "019bb687-9786-751e-860b-8a122e5b689f",
  automatisk: true,
  ident: "02498144171",
  rettighetsperioder: [
    {
      fraOgMed: "2026-01-12",
      harRett: true,
      opprinnelse: "Ny",
    },
  ],
  opprettet: "2026-01-13T09:44:58.194988",
  sistEndret: "2026-01-13T09:45:07.745962",
  kreverTotrinnskontroll: true,
  tilstand: "ForslagTilVedtak",
  avklaringer: [
    {
      id: "019bb687-97bd-7750-8b9d-ec452a04ff3d",
      kode: "HarTilleggsopplysninger",
      tittel: "Tilleggsopplysninger",
      beskrivelse:
        "Søker har oppgitt tilleggsopplysninger i søknaden. Vurder om tilleggsopplysninger har betydning for saken.\nI tillegg bør det vurderes om opplysningene skal videreformidles til Nav lokal eller om søker trenger veiledning.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2026-01-13T09:44:58.878169",
      regelsett: [],
    },
    {
      id: "019bb687-9b96-7b61-8597-8b8f7cb4929b",
      kode: "HattLukkedeSakerSiste8Uker",
      tittel: "Nylig lukkede saker i Arena",
      beskrivelse:
        "Søker har lukkede saker i Arena fra de siste 8 ukene. Sjekk om disse kan påvirke behandlingen.\nHvis vi nylig har gitt avslag, sjekk om det er nødvendig med ekstra veiledning.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2026-01-13T09:45:01.710382",
      regelsett: [],
    },
    {
      id: "019bb687-9b97-7e8d-b69c-2801b2ff1960",
      kode: "MuligGjenopptak",
      tittel: "Gjenopptak i Arena",
      beskrivelse:
        "Søker har åpne saker i Arena som kan være gjenopptak. Sjekk om saken kan gjenopptas i Arena.",
      kanKvitteres: true,
      status: "Åpen",
      maskinelt: false,
      sistEndret: "2026-01-13T09:44:59.159061",
      regelsett: [],
    },
    {
      id: "019bb687-acc7-77ca-b665-07ac5beb9fc5",
      kode: "EØSArbeid",
      tittel: "Arbeid i EØS, Sveits eller Storbritannia",
      beskrivelse:
        "Søker har oppgitt arbeid fra EØS, Sveits eller Storbritannia i søknaden. \nVurder om det skal være sammenlegging.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2026-01-13T09:45:04.188152",
      regelsett: [],
    },
    {
      id: "019bb687-acc7-77ca-b665-07ac5beb9fc9",
      kode: "InntektNesteKalendermåned",
      tittel: "Inntekt neste måned",
      beskrivelse:
        "Søker har inntekt som tilhører neste kalendermåned. \nSjekk om det er tilstrekkelige inntekter til at utfallet eller dagpengegrunnlaget vil endre seg i neste kalendermåned.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2026-01-13T09:45:05.436218",
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
      id: "019bb687-acc7-77ca-b665-07ac5beb9fcb",
      kode: "JobbetUtenforNorge",
      tittel: "Arbeid utenfor Norge",
      beskrivelse:
        "Søker har oppgitt arbeid utenfor Norge i søknaden. \nSjekk om disse arbeidsforholdene skal være med i vurderingen av retten til dagpenger.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2026-01-13T09:45:04.322004",
      regelsett: [],
    },
    {
      id: "019bb687-acc7-77ca-b665-07ac5beb9fd1",
      kode: "Verneplikt",
      tittel: "Verneplikt",
      beskrivelse:
        "Søker har svart ja på avtjent verneplikt i søknaden. \nVurder om kravet til dagpenger ved avtjent verneplikt er oppfylt.",
      kanKvitteres: true,
      status: "Åpen",
      maskinelt: false,
      sistEndret: "2026-01-13T09:45:03.559612",
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
      id: "019bb687-bbed-7d4e-a958-7fdeb4a46cdd",
      kode: "SjekkPrøvingsdato",
      tittel: "Prøvingsdato",
      beskrivelse: "Sjekk at valgt prøvingsdato er riktig.",
      kanKvitteres: true,
      status: "Åpen",
      maskinelt: false,
      sistEndret: "2026-01-13T09:45:07.437153",
      regelsett: [],
    },
    {
      id: "019bb687-bbed-7d4e-a958-7fdeb4a46ce3",
      kode: "BeregnetArbeidstid",
      tittel: "Arbeidstid",
      beskrivelse:
        "Sjekk om vanlig arbeidstid er korrekt og at det er brukt riktig beregningsregel. \nDu må også sjekke om ny vanlig arbeidstid er korrekt.",
      kanKvitteres: true,
      status: "Åpen",
      maskinelt: false,
      sistEndret: "2026-01-13T09:45:07.437161",
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
          id: "019bb687-9785-7167-97f5-b1a4e16c7cdc",
          opprettet: "2026-01-13T09:44:58.11703",
          opprinnelse: "Ny",
          verdi: {
            verdi: 15701623,
            datatype: "heltall",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:44:58.116107",
            meldingId: "27805a82-0d1c-4e1e-b342-2cdd5273785b",
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
          id: "019bb687-9794-7d8d-b4e4-55b888bce334",
          opprettet: "2026-01-13T09:44:58.132892",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: "d5e2160c-bf80-473c-8118-8e13f2672cd4",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:44:58.132847",
            meldingId: "27805a82-0d1c-4e1e-b342-2cdd5273785b",
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
          id: "019bb687-9796-7262-9e47-35fda9b9596f",
          opprettet: "2026-01-13T09:44:58.134477",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          gyldigTilOgMed: "2026-01-12",
          verdi: {
            verdi: "SøknadInnsendtHendelse",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:44:58.134471",
            meldingId: "27805a82-0d1c-4e1e-b342-2cdd5273785b",
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
          id: "019bb687-97ae-783a-bf8b-0a16dc6819b1",
          opprettet: "2026-01-13T09:44:58.158377",
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
          id: "019bb687-9b74-7763-9510-238d1867e0fa",
          opprettet: "2026-01-13T09:44:59.124081",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: "2026-01-12",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:44:59.049145",
            meldingId: "fa3807bc-f9fa-4ae6-bafe-c594018c8647",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019bb687-9794-7d8d-b4e4-55b888bce334"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-9b74-7763-9510-238d1867e0fb",
          opprettet: "2026-01-13T09:44:59.124372",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: "2026-01-05",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:44:59.054529",
            meldingId: "fa3807bc-f9fa-4ae6-bafe-c594018c8647",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019bb687-9794-7d8d-b4e4-55b888bce334"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-9b74-7763-9510-238d1867e0fc",
          opprettet: "2026-01-13T09:44:59.124553",
          opprinnelse: "Ny",
          verdi: {
            verdi: "1981-09-02",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:44:59.056741",
            meldingId: "fa3807bc-f9fa-4ae6-bafe-c594018c8647",
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
          id: "019bb687-9b76-7d64-9278-36821b868d55",
          opprettet: "2026-01-13T09:44:59.126723",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: "2026-01-12",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: [
              "019bb687-9b74-7763-9510-238d1867e0fa",
              "019bb687-9b74-7763-9510-238d1867e0fb",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-9b77-76d6-8921-a5643b6cdc1d",
          opprettet: "2026-01-13T09:44:59.127324",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2048-09-02",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "LeggTilÅr",
            },
            opplysninger: [
              "019bb687-97ae-783a-bf8b-0a16dc6819b1",
              "019bb687-9b74-7763-9510-238d1867e0fc",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-9b78-7f3d-bfe4-dae3c92aff55",
          opprettet: "2026-01-13T09:44:59.128857",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: "2026-01-12",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: ["019bb687-9b76-7d64-9278-36821b868d55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-9b79-71c7-b145-6cf99dad6692",
          opprettet: "2026-01-13T09:44:59.129059",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2048-09-30",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteDagIMåned",
            },
            opplysninger: ["019bb687-9b77-76d6-8921-a5643b6cdc1d"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-9b79-71c7-b145-6cf99dad6694",
          opprettet: "2026-01-13T09:44:59.129942",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "FørEllerLik",
            },
            opplysninger: [
              "019bb687-9b78-7f3d-bfe4-dae3c92aff55",
              "019bb687-9b79-71c7-b145-6cf99dad6692",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-9b7c-7e74-8845-cc4497fb7f7a",
          opprettet: "2026-01-13T09:44:59.132652",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: "2026-01-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-9b7c-7e74-8845-cc4497fb7f7b",
          opprettet: "2026-01-13T09:44:59.132899",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 36,
            enhet: "måneder",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-9b82-7c5a-a656-5798dca787fd",
          opprettet: "2026-01-13T09:44:59.138545",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-9b86-7856-ba47-fd01f7925a17",
          opprettet: "2026-01-13T09:44:59.142084",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 1.5,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-9b86-7856-ba47-fd01f7925a18",
          opprettet: "2026-01-13T09:44:59.14239",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 3,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-9b86-7856-ba47-fd01f7925a19",
          opprettet: "2026-01-13T09:44:59.142827",
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
      opplysningTypeId: "0194881f-9414-7823-8d29-0e25b7feb7cf",
      navn: "Arbeidsgivers rapporteringsfrist",
      datatype: "dato",
      perioder: [
        {
          id: "019bb687-9b89-7367-bee1-cae890570788",
          opprettet: "2026-01-13T09:44:59.145229",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: "2026-01-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "FørsteArbeidsdag",
            },
            opplysninger: ["019bb687-9b7c-7e74-8845-cc4497fb7f7a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-9b8b-7d42-b6d1-4023c0c05ffe",
          opprettet: "2026-01-13T09:44:59.147763",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 195240,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019bb687-9b82-7c5a-a656-5798dca787fd",
              "019bb687-9b86-7856-ba47-fd01f7925a17",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-9b8b-7d42-b6d1-4023c0c05fff",
          opprettet: "2026-01-13T09:44:59.147966",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019bb687-9b82-7c5a-a656-5798dca787fd",
              "019bb687-9b86-7856-ba47-fd01f7925a18",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-9b8c-7a32-aeab-198f73e37cec",
          opprettet: "2026-01-13T09:44:59.148058",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 18.75,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019bb687-9794-7d8d-b4e4-55b888bce334"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-9b8d-7914-ac61-c4705075053f",
          opprettet: "2026-01-13T09:44:59.149992",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: "2025-12-31",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteavsluttendeKalenderMåned",
            },
            opplysninger: [
              "019bb687-9b78-7f3d-bfe4-dae3c92aff55",
              "019bb687-9b89-7367-bee1-cae890570788",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-9b8f-74f4-83e3-4f55591dec24",
          opprettet: "2026-01-13T09:44:59.151869",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: "2023-01-01",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "TrekkFraMåned",
            },
            opplysninger: [
              "019bb687-9b7c-7e74-8845-cc4497fb7f7b",
              "019bb687-9b8d-7914-ac61-c4705075053f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac75-7556-9de3-0f3b4a21e118",
          opprettet: "2026-01-13T09:45:03.477672",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:45:03.400654",
            meldingId: "bd37b589-7919-433b-aa1b-efde71198def",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019bb687-9794-7d8d-b4e4-55b888bce334"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac75-7556-9de3-0f3b4a21e119",
          opprettet: "2026-01-13T09:45:03.477935",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:45:03.40121",
            meldingId: "bd37b589-7919-433b-aa1b-efde71198def",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019bb687-9794-7d8d-b4e4-55b888bce334"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac76-73f8-bcfa-04880a05cee5",
          opprettet: "2026-01-13T09:45:03.478264",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:45:03.401553",
            meldingId: "bd37b589-7919-433b-aa1b-efde71198def",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019bb687-9794-7d8d-b4e4-55b888bce334"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac76-73f8-bcfa-04880a05cee6",
          opprettet: "2026-01-13T09:45:03.47841",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:45:03.401873",
            meldingId: "bd37b589-7919-433b-aa1b-efde71198def",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019bb687-9794-7d8d-b4e4-55b888bce334"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac76-73f8-bcfa-04880a05cee7",
          opprettet: "2026-01-13T09:45:03.478544",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:45:03.402272",
            meldingId: "bd37b589-7919-433b-aa1b-efde71198def",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019bb687-9794-7d8d-b4e4-55b888bce334"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac76-73f8-bcfa-04880a05cee8",
          opprettet: "2026-01-13T09:45:03.478789",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:45:03.402678",
            meldingId: "bd37b589-7919-433b-aa1b-efde71198def",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019bb687-9794-7d8d-b4e4-55b888bce334"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac76-73f8-bcfa-04880a05cee9",
          opprettet: "2026-01-13T09:45:03.478931",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:45:03.402993",
            meldingId: "bd37b589-7919-433b-aa1b-efde71198def",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019bb687-9794-7d8d-b4e4-55b888bce334"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac77-7260-ad0d-6051e92d97c0",
          opprettet: "2026-01-13T09:45:03.479098",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:45:03.403355",
            meldingId: "bd37b589-7919-433b-aa1b-efde71198def",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019bb687-9794-7d8d-b4e4-55b888bce334"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac77-7260-ad0d-6051e92d97c1",
          opprettet: "2026-01-13T09:45:03.479269",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:45:03.403633",
            meldingId: "bd37b589-7919-433b-aa1b-efde71198def",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019bb687-9794-7d8d-b4e4-55b888bce334"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac77-7260-ad0d-6051e92d97c2",
          opprettet: "2026-01-13T09:45:03.479411",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:45:03.403938",
            meldingId: "bd37b589-7919-433b-aa1b-efde71198def",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019bb687-9794-7d8d-b4e4-55b888bce334"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac77-7260-ad0d-6051e92d97c3",
          opprettet: "2026-01-13T09:45:03.47956",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:45:03.404951",
            meldingId: "bd37b589-7919-433b-aa1b-efde71198def",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Register",
    },
    {
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04244",
      navn: "Inntektsopplysninger",
      datatype: "inntekt",
      perioder: [
        {
          id: "019bb687-ac77-7260-ad0d-6051e92d97c4",
          opprettet: "2026-01-13T09:45:03.479724",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: "01KEV8FAH07NKB7W7M5MFE00D2",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:45:03.405278",
            meldingId: "bd37b589-7919-433b-aa1b-efde71198def",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: [
              "019bb687-9b78-7f3d-bfe4-dae3c92aff55",
              "019bb687-9b8d-7914-ac61-c4705075053f",
              "019bb687-9b8f-74f4-83e3-4f55591dec24",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac7b-75a2-b09e-0da787080995",
          opprettet: "2026-01-13T09:45:03.483812",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: "01KEV8FAH07NKB7W7M5MFE00D2",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["019bb687-ac77-7260-ad0d-6051e92d97c4"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac7c-70f6-a5c7-3c2a4a4e1c34",
          opprettet: "2026-01-13T09:45:03.484093",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019bb687-ac75-7556-9de3-0f3b4a21e118"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac7c-70f6-a5c7-3c2a4a4e1c35",
          opprettet: "2026-01-13T09:45:03.484232",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019bb687-ac75-7556-9de3-0f3b4a21e119"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac7c-70f6-a5c7-3c2a4a4e1c36",
          opprettet: "2026-01-13T09:45:03.484379",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019bb687-ac76-73f8-bcfa-04880a05cee5"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac7c-70f6-a5c7-3c2a4a4e1c37",
          opprettet: "2026-01-13T09:45:03.484551",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: ["019bb687-ac76-73f8-bcfa-04880a05cee6"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac7c-70f6-a5c7-3c2a4a4e1c38",
          opprettet: "2026-01-13T09:45:03.484756",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019bb687-9b8c-7a32-aeab-198f73e37cec",
              "019bb687-ac76-73f8-bcfa-04880a05cee7",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac7c-70f6-a5c7-3c2a4a4e1c39",
          opprettet: "2026-01-13T09:45:03.48492",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019bb687-ac77-7260-ad0d-6051e92d97c3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac7d-745c-9e3a-d3ec901344eb",
          opprettet: "2026-01-13T09:45:03.485169",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: [
              "019bb687-ac76-73f8-bcfa-04880a05cee8",
              "019bb687-ac76-73f8-bcfa-04880a05cee9",
              "019bb687-ac77-7260-ad0d-6051e92d97c0",
              "019bb687-ac77-7260-ad0d-6051e92d97c1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac7d-745c-9e3a-d3ec901344ec",
          opprettet: "2026-01-13T09:45:03.485395",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019bb687-ac77-7260-ad0d-6051e92d97c2"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac7d-745c-9e3a-d3ec901344ed",
          opprettet: "2026-01-13T09:45:03.485583",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019bb687-ac77-7260-ad0d-6051e92d97c2"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac83-7a91-bb6c-fb4f870ba496",
          opprettet: "2026-01-13T09:45:03.491577",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac84-7147-9eee-6ccce47cfd36",
          opprettet: "2026-01-13T09:45:03.492198",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: "01KEV8FAH07NKB7W7M5MFE00D2",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["019bb687-ac77-7260-ad0d-6051e92d97c4"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac84-7147-9eee-6ccce47cfd37",
          opprettet: "2026-01-13T09:45:03.492415",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 6,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac84-7147-9eee-6ccce47cfd38",
          opprettet: "2026-01-13T09:45:03.49258",
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
      opplysningTypeId: "0194881f-9421-766c-9dc6-41fe6c9a1dff",
      navn: "Antall G som gis som grunnlag ved verneplikt",
      datatype: "desimaltall",
      perioder: [
        {
          id: "019bb687-ac84-7147-9eee-6ccce47cfd39",
          opprettet: "2026-01-13T09:45:03.492719",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 3,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
          },
        },
      ],
      synlig: false,
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
          id: "019bb687-ac84-7147-9eee-6ccce47cfd3a",
          opprettet: "2026-01-13T09:45:03.492862",
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
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f04241",
      navn: "Arbeidsinntekt siste 12 måneder",
      datatype: "penger",
      perioder: [
        {
          id: "019bb687-ac8a-7742-8ab2-de42f2c1a5b4",
          opprettet: "2026-01-13T09:45:03.498349",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 3000000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019bb687-ac7b-75a2-b09e-0da787080995"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac8b-7d22-980c-85db144c1226",
          opprettet: "2026-01-13T09:45:03.499908",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 10200000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019bb687-ac7b-75a2-b09e-0da787080995"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d54c",
      navn: "Bruker er medlem av folketrygden",
      datatype: "boolsk",
      perioder: [
        {
          id: "019bb687-ac8c-74c0-864b-706072e9c6a7",
          opprettet: "2026-01-13T09:45:03.500141",
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
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bd8",
      navn: "Oppfyller kravet til heltid- og deltidsarbeid",
      datatype: "boolsk",
      perioder: [
        {
          id: "019bb687-ac8c-74c0-864b-706072e9c6a8",
          opprettet: "2026-01-13T09:45:03.500366",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019bb687-ac75-7556-9de3-0f3b4a21e118",
              "019bb687-ac7c-70f6-a5c7-3c2a4a4e1c34",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac8c-74c0-864b-706072e9c6a9",
          opprettet: "2026-01-13T09:45:03.500611",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019bb687-ac75-7556-9de3-0f3b4a21e119",
              "019bb687-ac7c-70f6-a5c7-3c2a4a4e1c35",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac8c-74c0-864b-706072e9c6aa",
          opprettet: "2026-01-13T09:45:03.50079",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019bb687-ac76-73f8-bcfa-04880a05cee5",
              "019bb687-ac7c-70f6-a5c7-3c2a4a4e1c36",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac8c-74c0-864b-706072e9c6ab",
          opprettet: "2026-01-13T09:45:03.500962",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019bb687-ac76-73f8-bcfa-04880a05cee8",
              "019bb687-ac7d-745c-9e3a-d3ec901344eb",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
          },
        },
      ],
      synlig: true,
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
          id: "019bb687-ac8d-7c37-b17e-dd1a8a499312",
          opprettet: "2026-01-13T09:45:03.501158",
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
          id: "019bb687-ac8d-7c37-b17e-dd1a8a499313",
          opprettet: "2026-01-13T09:45:03.501347",
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
          id: "019bb687-ac8d-7c37-b17e-dd1a8a499314",
          opprettet: "2026-01-13T09:45:03.501555",
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
          id: "019bb687-ac8d-7c37-b17e-dd1a8a499315",
          opprettet: "2026-01-13T09:45:03.501943",
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
          id: "019bb687-ac8e-755c-b908-186292954709",
          opprettet: "2026-01-13T09:45:03.502185",
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
          id: "019bb687-ac8e-755c-b908-18629295470a",
          opprettet: "2026-01-13T09:45:03.502358",
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
          id: "019bb687-ac8e-755c-b908-18629295470b",
          opprettet: "2026-01-13T09:45:03.50253",
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
          id: "019bb687-ac8e-755c-b908-18629295470c",
          opprettet: "2026-01-13T09:45:03.502689",
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
          id: "019bb687-ac8e-755c-b908-18629295470d",
          opprettet: "2026-01-13T09:45:03.502832",
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
          id: "019bb687-ac8f-7237-ad51-c556ab0d476b",
          opprettet: "2026-01-13T09:45:03.503119",
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
          id: "019bb687-ac8f-7237-ad51-c556ab0d476c",
          opprettet: "2026-01-13T09:45:03.503476",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 50,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac8f-7237-ad51-c556ab0d476d",
          opprettet: "2026-01-13T09:45:03.503621",
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
          id: "019bb687-ac8f-7237-ad51-c556ab0d476e",
          opprettet: "2026-01-13T09:45:03.503752",
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
          id: "019bb687-ac8f-7237-ad51-c556ab0d476f",
          opprettet: "2026-01-13T09:45:03.503888",
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
          id: "019bb687-ac90-7631-a163-0d405582d891",
          opprettet: "2026-01-13T09:45:03.504017",
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
          id: "019bb687-ac90-7631-a163-0d405582d892",
          opprettet: "2026-01-13T09:45:03.504231",
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
          id: "019bb687-ac90-7631-a163-0d405582d893",
          opprettet: "2026-01-13T09:45:03.504431",
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
          id: "019bb687-ac90-7631-a163-0d405582d894",
          opprettet: "2026-01-13T09:45:03.504639",
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
          id: "019bb687-ac90-7631-a163-0d405582d895",
          opprettet: "2026-01-13T09:45:03.504832",
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
          id: "019bb687-ac91-7c75-a207-0cc96daf2975",
          opprettet: "2026-01-13T09:45:03.505014",
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
          id: "019bb687-ac91-7c75-a207-0cc96daf2976",
          opprettet: "2026-01-13T09:45:03.505216",
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
          id: "019bb687-ac91-7c75-a207-0cc96daf2977",
          opprettet: "2026-01-13T09:45:03.505401",
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
      opplysningTypeId: "0194881f-9421-766c-9dc6-41fe6c9a1e01",
      navn: "Periode som gis ved verneplikt",
      datatype: "heltall",
      perioder: [
        {
          id: "019bb687-ac91-7c75-a207-0cc96daf2978",
          opprettet: "2026-01-13T09:45:03.505691",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 26,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac91-7c75-a207-0cc96daf2979",
          opprettet: "2026-01-13T09:45:03.505875",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 37.5,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac9c-7f3e-9eea-be993db92c1e",
          opprettet: "2026-01-13T09:45:03.516014",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: "01KEV8FAH07NKB7W7M5MFE00D2",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Oppjuster",
            },
            opplysninger: [
              "019bb687-ac83-7a91-bb6c-fb4f870ba496",
              "019bb687-ac84-7147-9eee-6ccce47cfd36",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac9d-75f2-b5a6-8daec714ba5f",
          opprettet: "2026-01-13T09:45:03.517032",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019bb687-ac83-7a91-bb6c-fb4f870ba496",
              "019bb687-ac84-7147-9eee-6ccce47cfd37",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
      navn: "Grunnlag som gis ved verneplikt",
      datatype: "penger",
      perioder: [
        {
          id: "019bb687-ac9d-75f2-b5a6-8daec714ba60",
          opprettet: "2026-01-13T09:45:03.517432",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019bb687-ac83-7a91-bb6c-fb4f870ba496",
              "019bb687-ac84-7147-9eee-6ccce47cfd39",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac9e-799d-8188-6e53323ef81b",
          opprettet: "2026-01-13T09:45:03.518388",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 3000000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019bb687-ac84-7147-9eee-6ccce47cfd36"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac9e-799d-8188-6e53323ef81c",
          opprettet: "2026-01-13T09:45:03.518744",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 3600000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019bb687-ac84-7147-9eee-6ccce47cfd36"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac9f-73e5-850f-619ca0499e3e",
          opprettet: "2026-01-13T09:45:03.519059",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 3600000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019bb687-ac84-7147-9eee-6ccce47cfd36"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac9f-73e5-850f-619ca0499e3f",
          opprettet: "2026-01-13T09:45:03.519304",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019bb687-9b8b-7d42-b6d1-4023c0c05ffe",
              "019bb687-ac8a-7742-8ab2-de42f2c1a5b4",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac9f-73e5-850f-619ca0499e40",
          opprettet: "2026-01-13T09:45:03.51941",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019bb687-9b8b-7d42-b6d1-4023c0c05fff",
              "019bb687-ac8b-7d22-980c-85db144c1226",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d54d",
      navn: "Oppfyller kravet til medlemskap",
      datatype: "boolsk",
      perioder: [
        {
          id: "019bb687-ac9f-73e5-850f-619ca0499e41",
          opprettet: "2026-01-13T09:45:03.519497",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019bb687-ac8c-74c0-864b-706072e9c6a7"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
          },
        },
      ],
      synlig: false,
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
          id: "019bb687-ac9f-73e5-850f-619ca0499e42",
          opprettet: "2026-01-13T09:45:03.519797",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019bb687-ac7c-70f6-a5c7-3c2a4a4e1c37",
              "019bb687-ac7c-70f6-a5c7-3c2a4a4e1c38",
              "019bb687-ac8c-74c0-864b-706072e9c6a8",
              "019bb687-ac8c-74c0-864b-706072e9c6a9",
              "019bb687-ac8c-74c0-864b-706072e9c6aa",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-ac9f-73e5-850f-619ca0499e43",
          opprettet: "2026-01-13T09:45:03.519958",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019bb687-ac76-73f8-bcfa-04880a05cee9",
              "019bb687-ac77-7260-ad0d-6051e92d97c0",
              "019bb687-ac77-7260-ad0d-6051e92d97c1",
              "019bb687-ac8c-74c0-864b-706072e9c6ab",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-aca0-77f6-98eb-79757650f6eb",
          opprettet: "2026-01-13T09:45:03.520092",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019bb687-ac8e-755c-b908-186292954709"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-aca0-77f6-98eb-79757650f6ec",
          opprettet: "2026-01-13T09:45:03.520236",
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
              "019bb687-ac8e-755c-b908-18629295470c",
              "019bb687-ac8e-755c-b908-18629295470d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-aca0-77f6-98eb-79757650f6ed",
          opprettet: "2026-01-13T09:45:03.520393",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
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
              "019bb687-ac77-7260-ad0d-6051e92d97c1",
              "019bb687-ac8f-7237-ad51-c556ab0d476c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-aca0-77f6-98eb-79757650f6ee",
          opprettet: "2026-01-13T09:45:03.520551",
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
              "019bb687-ac8f-7237-ad51-c556ab0d476d",
              "019bb687-ac8f-7237-ad51-c556ab0d476e",
              "019bb687-ac8f-7237-ad51-c556ab0d476f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-aca0-77f6-98eb-79757650f6ef",
          opprettet: "2026-01-13T09:45:03.520744",
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
              "019bb687-ac90-7631-a163-0d405582d892",
              "019bb687-ac90-7631-a163-0d405582d893",
              "019bb687-ac90-7631-a163-0d405582d894",
              "019bb687-ac90-7631-a163-0d405582d895",
              "019bb687-ac91-7c75-a207-0cc96daf2975",
              "019bb687-ac91-7c75-a207-0cc96daf2976",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-aca0-77f6-98eb-79757650f6f0",
          opprettet: "2026-01-13T09:45:03.520896",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: ["019bb687-ac91-7c75-a207-0cc96daf2977"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-aca4-703d-a117-76c330d30d97",
          opprettet: "2026-01-13T09:45:03.524573",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 3059328.538717064,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019bb687-ac9c-7f3e-9eea-be993db92c1e"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-aca4-703d-a117-76c330d30d98",
          opprettet: "2026-01-13T09:45:03.524932",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 3835399.616634937,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019bb687-ac9c-7f3e-9eea-be993db92c1e"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-aca5-7fd4-9984-4a5821218d69",
          opprettet: "2026-01-13T09:45:03.525375",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 4034599.209567689,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019bb687-ac9c-7f3e-9eea-be993db92c1e"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-aca5-7fd4-9984-4a5821218d6a",
          opprettet: "2026-01-13T09:45:03.525711",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "019bb687-ac7d-745c-9e3a-d3ec901344ec",
              "019bb687-ac9d-75f2-b5a6-8daec714ba60",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
          },
        },
      ],
      synlig: false,
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
          id: "019bb687-aca5-7fd4-9984-4a5821218d6b",
          opprettet: "2026-01-13T09:45:03.525865",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019bb687-ac9f-73e5-850f-619ca0499e3f",
              "019bb687-ac9f-73e5-850f-619ca0499e40",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
          },
        },
      ],
      synlig: true,
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
          id: "019bb687-aca5-7fd4-9984-4a5821218d6c",
          opprettet: "2026-01-13T09:45:03.525984",
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
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10caa",
      navn: "Inntekt etter avkortning og oppjustering siste 12 måneder",
      datatype: "penger",
      perioder: [
        {
          id: "019bb687-aca8-7334-be19-b80cd1e5250e",
          opprettet: "2026-01-13T09:45:03.528401",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019bb687-ac9d-75f2-b5a6-8daec714ba5f",
              "019bb687-aca4-703d-a117-76c330d30d97",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-aca8-7334-be19-b80cd1e5250f",
          opprettet: "2026-01-13T09:45:03.528512",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019bb687-ac9d-75f2-b5a6-8daec714ba5f",
              "019bb687-aca4-703d-a117-76c330d30d97",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-aca8-7334-be19-b80cd1e52510",
          opprettet: "2026-01-13T09:45:03.528603",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019bb687-ac9d-75f2-b5a6-8daec714ba5f",
              "019bb687-aca4-703d-a117-76c330d30d98",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-aca8-7334-be19-b80cd1e52511",
          opprettet: "2026-01-13T09:45:03.528698",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019bb687-ac9d-75f2-b5a6-8daec714ba5f",
              "019bb687-aca5-7fd4-9984-4a5821218d69",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-aca8-7334-be19-b80cd1e52512",
          opprettet: "2026-01-13T09:45:03.528806",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019bb687-ac9d-75f2-b5a6-8daec714ba5f",
              "019bb687-aca4-703d-a117-76c330d30d97",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-aca8-7334-be19-b80cd1e52513",
          opprettet: "2026-01-13T09:45:03.528909",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019bb687-ac9d-75f2-b5a6-8daec714ba5f",
              "019bb687-aca4-703d-a117-76c330d30d98",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-aca9-73d3-8694-c50578112608",
          opprettet: "2026-01-13T09:45:03.529001",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019bb687-ac9d-75f2-b5a6-8daec714ba5f",
              "019bb687-aca5-7fd4-9984-4a5821218d69",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-aca9-73d3-8694-c50578112609",
          opprettet: "2026-01-13T09:45:03.529154",
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
              "019bb687-aca0-77f6-98eb-79757650f6eb",
              "019bb687-aca5-7fd4-9984-4a5821218d6c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-acac-75cf-97a5-c58022f6c0ea",
          opprettet: "2026-01-13T09:45:03.53244",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 2342880,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SumAv",
            },
            opplysninger: [
              "019bb687-aca8-7334-be19-b80cd1e5250f",
              "019bb687-aca8-7334-be19-b80cd1e52510",
              "019bb687-aca8-7334-be19-b80cd1e52511",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-acac-75cf-97a5-c58022f6c0eb",
          opprettet: "2026-01-13T09:45:03.532669",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019bb687-aca8-7334-be19-b80cd1e52512",
              "019bb687-aca8-7334-be19-b80cd1e52513",
              "019bb687-aca9-73d3-8694-c50578112608",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
          },
        },
      ],
      synlig: true,
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
          id: "019bb687-acac-75cf-97a5-c58022f6c0ec",
          opprettet: "2026-01-13T09:45:03.532994",
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
              "019bb687-ac8d-7c37-b17e-dd1a8a499312",
              "019bb687-ac8d-7c37-b17e-dd1a8a499313",
              "019bb687-ac8d-7c37-b17e-dd1a8a499314",
              "019bb687-ac8d-7c37-b17e-dd1a8a499315",
              "019bb687-ac8e-755c-b908-18629295470a",
              "019bb687-ac8e-755c-b908-18629295470b",
              "019bb687-aca9-73d3-8694-c50578112609",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-acb0-7d8f-b247-ed978bb7fa39",
          opprettet: "2026-01-13T09:45:03.536209",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019bb687-ac84-7147-9eee-6ccce47cfd38",
              "019bb687-acac-75cf-97a5-c58022f6c0ea",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-acb3-7539-9c45-d1cf63b8a809",
          opprettet: "2026-01-13T09:45:03.539111",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "019bb687-aca8-7334-be19-b80cd1e5250e",
              "019bb687-acb0-7d8f-b247-ed978bb7fa39",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-acb8-7bbd-8083-2562afb71227",
          opprettet: "2026-01-13T09:45:03.544445",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["019bb687-acb3-7539-9c45-d1cf63b8a809"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-acb8-7bbd-8083-2562afb71228",
          opprettet: "2026-01-13T09:45:03.544705",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: "Inntekt etter avkortning og oppjustering siste 12 måneder",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Brukt",
            },
            opplysninger: ["019bb687-acb3-7539-9c45-d1cf63b8a809"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-acbe-7cc6-b280-509b7152254b",
          opprettet: "2026-01-13T09:45:03.55068",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "019bb687-aca5-7fd4-9984-4a5821218d6a",
              "019bb687-acb8-7bbd-8083-2562afb71227",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-acbe-7cc6-b280-509b7152254c",
          opprettet: "2026-01-13T09:45:03.550915",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019bb687-aca5-7fd4-9984-4a5821218d6a",
              "019bb687-acb8-7bbd-8083-2562afb71227",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbb4-7621-9730-44e5d6ef9a49",
          opprettet: "2026-01-13T09:45:07.380078",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:45:07.312839",
            meldingId: "df1e333a-58ab-44b1-bf45-b2a9f00a3c90",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019bb687-9794-7d8d-b4e4-55b888bce334"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbb4-7621-9730-44e5d6ef9a4a",
          opprettet: "2026-01-13T09:45:07.380538",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:45:07.313263",
            meldingId: "df1e333a-58ab-44b1-bf45-b2a9f00a3c90",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019bb687-9794-7d8d-b4e4-55b888bce334"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbb4-7621-9730-44e5d6ef9a4b",
          opprettet: "2026-01-13T09:45:07.380711",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:45:07.313656",
            meldingId: "df1e333a-58ab-44b1-bf45-b2a9f00a3c90",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019bb687-9794-7d8d-b4e4-55b888bce334"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbb4-7621-9730-44e5d6ef9a4c",
          opprettet: "2026-01-13T09:45:07.380975",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:45:07.313935",
            meldingId: "df1e333a-58ab-44b1-bf45-b2a9f00a3c90",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbb5-7be9-9e14-f58ae5099f38",
          opprettet: "2026-01-13T09:45:07.38122",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:45:07.314295",
            meldingId: "df1e333a-58ab-44b1-bf45-b2a9f00a3c90",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbb5-7be9-9e14-f58ae5099f39",
          opprettet: "2026-01-13T09:45:07.381368",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:45:07.314509",
            meldingId: "df1e333a-58ab-44b1-bf45-b2a9f00a3c90",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbb5-7be9-9e14-f58ae5099f3a",
          opprettet: "2026-01-13T09:45:07.381508",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:45:07.314702",
            meldingId: "df1e333a-58ab-44b1-bf45-b2a9f00a3c90",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbb5-7be9-9e14-f58ae5099f3b",
          opprettet: "2026-01-13T09:45:07.381713",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:45:07.314993",
            meldingId: "df1e333a-58ab-44b1-bf45-b2a9f00a3c90",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbb5-7be9-9e14-f58ae5099f3c",
          opprettet: "2026-01-13T09:45:07.381852",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:45:07.315292",
            meldingId: "df1e333a-58ab-44b1-bf45-b2a9f00a3c90",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbb8-773a-8937-6f353d22fa38",
          opprettet: "2026-01-13T09:45:07.384421",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019bb687-bbb4-7621-9730-44e5d6ef9a49"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbb8-773a-8937-6f353d22fa39",
          opprettet: "2026-01-13T09:45:07.384641",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019bb687-aca0-77f6-98eb-79757650f6eb",
              "019bb687-bbb4-7621-9730-44e5d6ef9a4c",
              "019bb687-bbb5-7be9-9e14-f58ae5099f38",
              "019bb687-bbb5-7be9-9e14-f58ae5099f39",
              "019bb687-bbb5-7be9-9e14-f58ae5099f3a",
              "019bb687-bbb5-7be9-9e14-f58ae5099f3b",
              "019bb687-bbb5-7be9-9e14-f58ae5099f3c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbb8-773a-8937-6f353d22fa3a",
          opprettet: "2026-01-13T09:45:07.384743",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: ["019bb687-bbb4-7621-9730-44e5d6ef9a4a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbb8-773a-8937-6f353d22fa3b",
          opprettet: "2026-01-13T09:45:07.384825",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019bb687-bbb4-7621-9730-44e5d6ef9a4b"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbb8-773a-8937-6f353d22fa3c",
          opprettet: "2026-01-13T09:45:07.384985",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErUsann",
            },
            opplysninger: ["019bb687-bbb4-7621-9730-44e5d6ef9a4b"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbba-7fb9-921c-bf3b59b844d8",
          opprettet: "2026-01-13T09:45:07.386595",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019bb687-bbb8-773a-8937-6f353d22fa38"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbba-7fb9-921c-bf3b59b844d9",
          opprettet: "2026-01-13T09:45:07.386731",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019bb687-aca0-77f6-98eb-79757650f6ef",
              "019bb687-bbb8-773a-8937-6f353d22fa3b",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbbc-7df5-b4a9-39d40a281161",
          opprettet: "2026-01-13T09:45:07.38838",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019bb687-bbb8-773a-8937-6f353d22fa38",
              "019bb687-bbba-7fb9-921c-bf3b59b844d8",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbbc-7df5-b4a9-39d40a281162",
          opprettet: "2026-01-13T09:45:07.388831",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019bb687-bbb8-773a-8937-6f353d22fa3c",
              "019bb687-bbba-7fb9-921c-bf3b59b844d9",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbbf-7148-9260-22df2a02da4e",
          opprettet: "2026-01-13T09:45:07.391927",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019bb687-ac9f-73e5-850f-619ca0499e41",
              "019bb687-bbbc-7df5-b4a9-39d40a281161",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbc3-7467-bef7-ffda23cac633",
          opprettet: "2026-01-13T09:45:07.395898",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 0.0024,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbc5-7454-b1b8-0944ac7a7f57",
          opprettet: "2026-01-13T09:45:07.397717",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 38,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbc5-7454-b1b8-0944ac7a7f58",
          opprettet: "2026-01-13T09:45:07.397963",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 0.9,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbc6-7881-811f-d71ac441f66a",
          opprettet: "2026-01-13T09:45:07.398184",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 260,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbc6-7881-811f-d71ac441f66b",
          opprettet: "2026-01-13T09:45:07.398375",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 5,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbc6-7881-811f-d71ac441f66c",
          opprettet: "2026-01-13T09:45:07.398525",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 0.03,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbc6-7881-811f-d71ac441f66d",
          opprettet: "2026-01-13T09:45:07.398637",
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
          id: "019bb687-bbc6-7881-811f-d71ac441f66e",
          opprettet: "2026-01-13T09:45:07.398742",
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
          id: "019bb687-bbc6-7881-811f-d71ac441f66f",
          opprettet: "2026-01-13T09:45:07.398858",
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
          id: "019bb687-bbc6-7881-811f-d71ac441f670",
          opprettet: "2026-01-13T09:45:07.398978",
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
          id: "019bb687-bbc7-72fd-967d-4e19782d530a",
          opprettet: "2026-01-13T09:45:07.399129",
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
          id: "019bb687-bbc7-72fd-967d-4e19782d530b",
          opprettet: "2026-01-13T09:45:07.399271",
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
          id: "019bb687-bbc7-72fd-967d-4e19782d530c",
          opprettet: "2026-01-13T09:45:07.399505",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 2,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbc9-7375-8f8f-eb4d64eb1ab2",
          opprettet: "2026-01-13T09:45:07.401239",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 3400000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019bb687-ac84-7147-9eee-6ccce47cfd38",
              "019bb687-ac8b-7d22-980c-85db144c1226",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbc9-7375-8f8f-eb4d64eb1ab3",
          opprettet: "2026-01-13T09:45:07.401747",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 2,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbc9-7375-8f8f-eb4d64eb1ab4",
          opprettet: "2026-01-13T09:45:07.401989",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 5,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbca-7a28-ab71-30bac058e3b7",
          opprettet: "2026-01-13T09:45:07.402332",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 3,
            enhet: "dager",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbca-7a28-ab71-30bac058e3b8",
          opprettet: "2026-01-13T09:45:07.402545",
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
          id: "019bb687-bbca-7a28-ab71-30bac058e3b9",
          opprettet: "2026-01-13T09:45:07.402682",
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
          id: "019bb687-bbca-7a28-ab71-30bac058e3ba",
          opprettet: "2026-01-13T09:45:07.402836",
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
          id: "019bb687-bbca-7a28-ab71-30bac058e3bb",
          opprettet: "2026-01-13T09:45:07.402976",
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
          id: "019bb687-bbcb-7b57-b2a2-4169f1afaab9",
          opprettet: "2026-01-13T09:45:07.403161",
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
          id: "019bb687-bbcb-7b57-b2a2-4169f1afaaba",
          opprettet: "2026-01-13T09:45:07.403292",
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
          id: "019bb687-bbcb-7b57-b2a2-4169f1afaabb",
          opprettet: "2026-01-13T09:45:07.403554",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 40,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbcb-7b57-b2a2-4169f1afaabc",
          opprettet: "2026-01-13T09:45:07.403833",
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
          id: "019bb687-bbcb-7b57-b2a2-4169f1afaabd",
          opprettet: "2026-01-13T09:45:07.403973",
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
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a23f",
      navn: "Dagsats uten barnetillegg før samordning",
      datatype: "penger",
      perioder: [
        {
          id: "019bb687-bbd0-77cd-bd6e-71d3e74021d4",
          opprettet: "2026-01-13T09:45:07.408381",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 1874.304,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019bb687-acbe-7cc6-b280-509b7152254b",
              "019bb687-bbc3-7467-bef7-ffda23cac633",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbd0-77cd-bd6e-71d3e74021d5",
          opprettet: "2026-01-13T09:45:07.408748",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 702864,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019bb687-acbe-7cc6-b280-509b7152254b",
              "019bb687-bbc5-7454-b1b8-0944ac7a7f58",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbd0-77cd-bd6e-71d3e74021d6",
          opprettet: "2026-01-13T09:45:07.408951",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 3904.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019bb687-ac83-7a91-bb6c-fb4f870ba496",
              "019bb687-bbc6-7881-811f-d71ac441f66c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbd1-70b5-9797-44d5bab82e5f",
          opprettet: "2026-01-13T09:45:07.409443",
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
              "019bb687-bbc6-7881-811f-d71ac441f66d",
              "019bb687-bbc6-7881-811f-d71ac441f66e",
              "019bb687-bbc6-7881-811f-d71ac441f66f",
              "019bb687-bbc6-7881-811f-d71ac441f670",
              "019bb687-bbc7-72fd-967d-4e19782d530a",
              "019bb687-bbc7-72fd-967d-4e19782d530b",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbd1-70b5-9797-44d5bab82e60",
          opprettet: "2026-01-13T09:45:07.409687",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019bb687-9b82-7c5a-a656-5798dca787fd",
              "019bb687-bbc7-72fd-967d-4e19782d530c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbd1-70b5-9797-44d5bab82e61",
          opprettet: "2026-01-13T09:45:07.409906",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019bb687-9b82-7c5a-a656-5798dca787fd",
              "019bb687-bbc9-7375-8f8f-eb4d64eb1ab3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbd2-737e-8686-83b8d3dda5f1",
          opprettet: "2026-01-13T09:45:07.410099",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
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
              "019bb687-ac91-7c75-a207-0cc96daf2979",
              "019bb687-acbe-7cc6-b280-509b7152254c",
              "019bb687-bbcb-7b57-b2a2-4169f1afaabc",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbd2-737e-8686-83b8d3dda5f2",
          opprettet: "2026-01-13T09:45:07.410492",
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
              "019bb687-bbcb-7b57-b2a2-4169f1afaabc",
              "019bb687-bbcb-7b57-b2a2-4169f1afaabd",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbd6-7aed-b671-af9e59956ee0",
          opprettet: "2026-01-13T09:45:07.414062",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 1874,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["019bb687-bbd0-77cd-bd6e-71d3e74021d4"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbd6-7aed-b671-af9e59956ee1",
          opprettet: "2026-01-13T09:45:07.414857",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 2703.3230769230768,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019bb687-bbc6-7881-811f-d71ac441f66a",
              "019bb687-bbd0-77cd-bd6e-71d3e74021d5",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbd7-7fd1-9b36-01e9dcc8d2ad",
          opprettet: "2026-01-13T09:45:07.415067",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019bb687-ac8a-7742-8ab2-de42f2c1a5b4",
              "019bb687-bbd1-70b5-9797-44d5bab82e60",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbd7-7fd1-9b36-01e9dcc8d2ae",
          opprettet: "2026-01-13T09:45:07.41526",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019bb687-bbc9-7375-8f8f-eb4d64eb1ab2",
              "019bb687-bbd1-70b5-9797-44d5bab82e61",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbd7-7fd1-9b36-01e9dcc8d2af",
          opprettet: "2026-01-13T09:45:07.415425",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
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
              "019bb687-ac76-73f8-bcfa-04880a05cee7",
              "019bb687-bbcb-7b57-b2a2-4169f1afaabb",
              "019bb687-bbd2-737e-8686-83b8d3dda5f1",
              "019bb687-bbd2-737e-8686-83b8d3dda5f2",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbda-7862-a3aa-1e063893dea9",
          opprettet: "2026-01-13T09:45:07.418825",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 2703,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["019bb687-bbd6-7aed-b671-af9e59956ee1"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbdb-7cce-b046-4ba0b06dddce",
          opprettet: "2026-01-13T09:45:07.419189",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 104,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019bb687-9b78-7f3d-bfe4-dae3c92aff55"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbdb-7cce-b046-4ba0b06dddcf",
          opprettet: "2026-01-13T09:45:07.419409",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "SjekkAvTerskel",
            },
            opplysninger: [
              "019bb687-ac8f-7237-ad51-c556ab0d476b",
              "019bb687-aca0-77f6-98eb-79757650f6ed",
              "019bb687-bbd7-7fd1-9b36-01e9dcc8d2af",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbde-720a-86e3-83c5b37b7a59",
          opprettet: "2026-01-13T09:45:07.422025",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
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
              "019bb687-bbd7-7fd1-9b36-01e9dcc8d2ad",
              "019bb687-bbdb-7cce-b046-4ba0b06dddce",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbde-720a-86e3-83c5b37b7a5a",
          opprettet: "2026-01-13T09:45:07.422312",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
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
              "019bb687-bbd7-7fd1-9b36-01e9dcc8d2ae",
              "019bb687-bbdb-7cce-b046-4ba0b06dddce",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbde-720a-86e3-83c5b37b7a5b",
          opprettet: "2026-01-13T09:45:07.422601",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019bb687-ac90-7631-a163-0d405582d891",
              "019bb687-aca0-77f6-98eb-79757650f6ee",
              "019bb687-bbb8-773a-8937-6f353d22fa3a",
              "019bb687-bbdb-7cce-b046-4ba0b06dddcf",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbe1-7d5d-a139-c2041bba89e0",
          opprettet: "2026-01-13T09:45:07.425248",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
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
              "019bb687-bbde-720a-86e3-83c5b37b7a59",
              "019bb687-bbde-720a-86e3-83c5b37b7a5a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbe4-7abf-9333-3e158613f018",
          opprettet: "2026-01-13T09:45:07.428684",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
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
              "019bb687-aca5-7fd4-9984-4a5821218d6b",
              "019bb687-bbe1-7d5d-a139-c2041bba89e0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bbe5-7b76-8e8b-6b305a3d42b3",
          opprettet: "2026-01-13T09:45:07.429144",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
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
              "019bb687-bbc9-7375-8f8f-eb4d64eb1ab4",
              "019bb687-bbe1-7d5d-a139-c2041bba89e0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bcd3-7571-b686-680877a136e8",
          opprettet: "2026-01-13T09:45:07.667482",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            søknadBarnId: "a1ee7fde-52de-4c60-9445-60d9733adc8f",
            verdi: [],
            datatype: "barn",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:45:07.607307",
            meldingId: "30bef3f3-1624-4419-b3e4-efffe322b4bb",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019bb687-9794-7d8d-b4e4-55b888bce334"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bcd3-7571-b686-680877a136e9",
          opprettet: "2026-01-13T09:45:07.667936",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2026-01-13T09:45:07.608823",
            meldingId: "30bef3f3-1624-4419-b3e4-efffe322b4bb",
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
          id: "019bb687-bcd8-77b7-ae41-deef21b8b58d",
          opprettet: "2026-01-13T09:45:07.672079",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 0,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "AntallAv",
            },
            opplysninger: ["019bb687-bcd3-7571-b686-680877a136e8"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bcd8-77b7-ae41-deef21b8b58e",
          opprettet: "2026-01-13T09:45:07.672724",
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
              "019bb687-bbca-7a28-ab71-30bac058e3b8",
              "019bb687-bbca-7a28-ab71-30bac058e3b9",
              "019bb687-bbca-7a28-ab71-30bac058e3ba",
              "019bb687-bbca-7a28-ab71-30bac058e3bb",
              "019bb687-bbcb-7b57-b2a2-4169f1afaab9",
              "019bb687-bbcb-7b57-b2a2-4169f1afaaba",
              "019bb687-bcd3-7571-b686-680877a136e9",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bcdb-7895-83bd-2e2a6e708c9e",
          opprettet: "2026-01-13T09:45:07.675975",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019bb687-bbc5-7454-b1b8-0944ac7a7f57",
              "019bb687-bcd8-77b7-ae41-deef21b8b58d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bcdf-7d73-b7a8-3c0157dcaa51",
          opprettet: "2026-01-13T09:45:07.679119",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 1874,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "019bb687-bbd6-7aed-b671-af9e59956ee0",
              "019bb687-bcdb-7895-83bd-2e2a6e708c9e",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bcdf-7d73-b7a8-3c0157dcaa52",
          opprettet: "2026-01-13T09:45:07.679359",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019bb687-bbc5-7454-b1b8-0944ac7a7f57",
              "019bb687-bcdb-7895-83bd-2e2a6e708c9e",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bce2-7d2a-b001-176ef562fcac",
          opprettet: "2026-01-13T09:45:07.68236",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019bb687-bbda-7862-a3aa-1e063893dea9",
              "019bb687-bcdf-7d73-b7a8-3c0157dcaa51",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bce2-7d2a-b001-176ef562fcad",
          opprettet: "2026-01-13T09:45:07.682638",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 9370,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019bb687-bbc6-7881-811f-d71ac441f66b",
              "019bb687-bcdf-7d73-b7a8-3c0157dcaa51",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bce6-7f85-8cf9-ec4a573330e8",
          opprettet: "2026-01-13T09:45:07.686425",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 1874,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019bb687-bbd6-7aed-b671-af9e59956ee0",
              "019bb687-bce2-7d2a-b001-176ef562fcac",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bce9-7126-8821-cc49c4d74424",
          opprettet: "2026-01-13T09:45:07.689417",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 1874,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019bb687-acac-75cf-97a5-c58022f6c0ec",
              "019bb687-bce6-7f85-8cf9-ec4a573330e8",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bce9-7126-8821-cc49c4d74425",
          opprettet: "2026-01-13T09:45:07.689673",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019bb687-acac-75cf-97a5-c58022f6c0ec",
              "019bb687-bce6-7f85-8cf9-ec4a573330e8",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bced-75b6-9eca-90f018914d6a",
          opprettet: "2026-01-13T09:45:07.693025",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 9370,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019bb687-bbc6-7881-811f-d71ac441f66b",
              "019bb687-bce9-7126-8821-cc49c4d74424",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bced-75b6-9eca-90f018914d6b",
          opprettet: "2026-01-13T09:45:07.693387",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019bb687-bcdf-7d73-b7a8-3c0157dcaa52",
              "019bb687-bce9-7126-8821-cc49c4d74425",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bcf1-7ab3-8fae-cc57ea697c98",
          opprettet: "2026-01-13T09:45:07.697021",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 3904.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019bb687-bbd0-77cd-bd6e-71d3e74021d6",
              "019bb687-bced-75b6-9eca-90f018914d6a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bcf1-7ab3-8fae-cc57ea697c99",
          opprettet: "2026-01-13T09:45:07.697567",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 9370,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019bb687-bbd1-70b5-9797-44d5bab82e5f",
              "019bb687-bced-75b6-9eca-90f018914d6a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bcf6-79b2-892f-e45c0fd3fd66",
          opprettet: "2026-01-13T09:45:07.702094",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 9370,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "019bb687-bcf1-7ab3-8fae-cc57ea697c98",
              "019bb687-bcf1-7ab3-8fae-cc57ea697c99",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bcf9-7c9e-bfa3-354715ace20f",
          opprettet: "2026-01-13T09:45:07.705484",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 1874,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019bb687-bbc6-7881-811f-d71ac441f66b",
              "019bb687-bcf6-79b2-892f-e45c0fd3fd66",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bcfc-7e21-84a0-979e3d09f50b",
          opprettet: "2026-01-13T09:45:07.708993",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 1874,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "019bb687-bcdb-7895-83bd-2e2a6e708c9e",
              "019bb687-bcf9-7c9e-bfa3-354715ace20f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bcfd-70a1-b49b-ef39a22c933f",
          opprettet: "2026-01-13T09:45:07.709334",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErUlik",
            },
            opplysninger: [
              "019bb687-bce6-7f85-8cf9-ec4a573330e8",
              "019bb687-bcf9-7c9e-bfa3-354715ace20f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bd00-7575-9fe3-b43a496d70a0",
          opprettet: "2026-01-13T09:45:07.712534",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 1874,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019bb687-bbda-7862-a3aa-1e063893dea9",
              "019bb687-bcfc-7e21-84a0-979e3d09f50b",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bd03-701e-8497-a83a3031819f",
          opprettet: "2026-01-13T09:45:07.715292",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 9370,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019bb687-bbc6-7881-811f-d71ac441f66b",
              "019bb687-bd00-7575-9fe3-b43a496d70a0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bd03-701e-8497-a83a303181a0",
          opprettet: "2026-01-13T09:45:07.715496",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 5622,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019bb687-bbca-7a28-ab71-30bac058e3b7",
              "019bb687-bd00-7575-9fe3-b43a496d70a0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bd09-79ec-aaa7-222d8bcd7d7d",
          opprettet: "2026-01-13T09:45:07.721807",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
          verdi: {
            verdi: 5622,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "019bb687-ac77-7260-ad0d-6051e92d97c1",
              "019bb687-bd03-701e-8497-a83a303181a0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.01.13-08.34-6f97fac",
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
          id: "019bb687-bd20-7ff5-8a9a-76eb364595fa",
          opprettet: "2026-01-13T09:45:07.744336",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-12",
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
