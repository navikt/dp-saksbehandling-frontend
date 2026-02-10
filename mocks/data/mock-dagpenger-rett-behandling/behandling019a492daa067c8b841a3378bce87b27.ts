import type { components } from "../../../openapi/behandling-typer";

export const behandling019a492daa067c8b841a3378bce87b27: components["schemas"]["Behandling"] = {
  behandlingId: "019a492d-aa06-7c8b-841a-3378bce87b27",
  behandletHendelse: {
    datatype: "UUID",
    id: "c72ecdf9-1103-415a-ba99-fd1d94b4dc40",
    type: "Søknad",
    skjedde: "2025-11-03",
  },
  behandlingskjedeId: "019a492d-aa06-7c8b-841a-3378bce87b27",
  automatisk: false,
  ident: "15837399782",
  rettighetsperioder: [
    {
      fraOgMed: "2025-11-03",
      harRett: true,
      opprinnelse: "Ny",
    },
  ],
  opprettet: "2025-11-03T11:05:20.782315",
  sistEndret: "2025-11-11T13:03:45.434505",
  kreverTotrinnskontroll: true,
  tilstand: "TilBeslutning",
  avklaringer: [
    {
      id: "019a492d-aa0c-77b9-865c-974a4e475b0c",
      kode: "HarTilleggsopplysninger",
      tittel: "Sjekk hva bruker har oppgitt som tilleggsopplysninger i søknaden",
      beskrivelse: "Du må vurdere om tilleggsopplysninger har betydning for saken",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-11-03T11:05:21.002733",
      regelsett: [],
    },
    {
      id: "019a492d-ab55-7eb2-8692-8f1f37d2a258",
      kode: "HattLukkedeSakerSiste8Uker",
      tittel: "Sjekk om nylig lukkede saker i Arena kan påvirke behandlingen",
      beskrivelse:
        "Personen har lukkede saker i Arena siste 8 uker. Har vi nylig gitt avslag bør vi sjekke om det er nødvendig med ekstra \nveiledning.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-11-03T11:05:22.143869",
      regelsett: [],
    },
    {
      id: "019a492d-ab55-7eb2-8692-8f1f37d2a25a",
      kode: "MuligGjenopptak",
      tittel: "Sjekk om det er sak som kan gjenopptas i Arena",
      beskrivelse:
        "Personen har åpne saker i Arena som kan være gjenopptak. Saker som skal gjenopptas må håndteres i Arena.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-11-03T11:05:22.361377",
      regelsett: [],
    },
    {
      id: "019a492d-c91c-768b-8316-1441f4f42dcd",
      kode: "EØSArbeid",
      tittel: "Sjekk om arbeid i EØS fører til sammenlegging",
      beskrivelse:
        "Personen har oppgitt arbeid fra EØS i søknaden. Det må vurderes om det skal være sammenlegging.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-11-03T11:05:29.040861",
      regelsett: [],
    },
    {
      id: "019a492d-c91c-768b-8316-1441f4f42dd1",
      kode: "InntektNesteKalendermåned",
      tittel: "Sjekk om inntekt for neste måned er relevant",
      beskrivelse:
        "Personen har inntekt som tilhører neste inntektsperiode. Vurder om det er tilstrekkelige inntekter til at utfallet vil \nendre seg i neste inntektsperiode.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: false,
      begrunnelse: "test",
      sistEndret: "2025-11-11T13:03:38.824323",
      avklartAv: {
        ident: "Z993809",
      },
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
      id: "019a492d-c91c-768b-8316-1441f4f42dd3",
      kode: "JobbetUtenforNorge",
      tittel: "Sjekk om arbeid utenfor Norge påvirker retten til dagpenger",
      beskrivelse:
        "Personen har oppgitt arbeid utenfor Norge i søknaden. Sjekk om arbeidsforholdene som er oppgitt i søknaden skal være \nmed i vurderingen av retten til dagpenger.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-11-03T11:05:29.129292",
      regelsett: [],
    },
    {
      id: "019a492d-c91c-768b-8316-1441f4f42dd9",
      kode: "BeregnetArbeidstid",
      tittel: "Sjekk om beregnet arbeidstid er korrekt",
      beskrivelse:
        "Du må sjekke om beregnet vanlig arbeidstid er korrekt og at det er brukt riktig beregningsregel. \nDu må også sjekke om ny vanlig arbeidstid er korrekt",
      kanKvitteres: true,
      status: "Avbrutt",
      maskinelt: true,
      sistEndret: "2025-11-03T11:09:57.875764",
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
    {
      id: "019a492d-d11c-728a-91dd-6285e021fa64",
      kode: "SjekkPrøvingsdato",
      tittel: "Sjekk om valgt prøvingsdato er riktig",
      beskrivelse: "Sjekk at valgt prøvingsdato er riktig",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: false,
      begrunnelse: "test",
      sistEndret: "2025-11-11T13:03:42.073912",
      avklartAv: {
        ident: "Z993809",
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
      relevantForResultat: true,
      opplysningTypeId: "019522b0-c722-76d4-8d7f-78f556c51f72",
      opplysninger: ["019522d2-9bb1-7960-b1e2-a959566e2428"],
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
      relevantForResultat: true,
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
          id: "019a492d-aa06-7c8b-841a-3378bce87b22",
          opprettet: "2025-11-03T11:05:20.774511",
          opprinnelse: "Ny",
          verdi: {
            verdi: 15605504,
            datatype: "heltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:20.774501",
            meldingId: "fd293e16-3624-42b6-9fc5-b7489c56e14c",
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
          id: "019a492d-aa06-7c8b-841a-3378bce87b24",
          opprettet: "2025-11-03T11:05:20.774642",
          opprinnelse: "Ny",
          verdi: {
            verdi: "c72ecdf9-1103-415a-ba99-fd1d94b4dc40",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:20.77464",
            meldingId: "fd293e16-3624-42b6-9fc5-b7489c56e14c",
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
          id: "019a492d-aa06-7c8b-841a-3378bce87b26",
          opprettet: "2025-11-03T11:05:20.77465",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          gyldigTilOgMed: "2025-11-03",
          verdi: {
            verdi: "SøknadInnsendtHendelse",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:20.774649",
            meldingId: "fd293e16-3624-42b6-9fc5-b7489c56e14c",
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
          id: "019a492d-aa0a-7adb-bbbc-6f75d7f3149b",
          opprettet: "2025-11-03T11:05:20.778623",
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
          id: "019a492d-ab48-742a-b043-a756721376f2",
          opprettet: "2025-11-03T11:05:21.096567",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2025-11-03",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:21.05906",
            meldingId: "264e8933-0d50-448a-b2ca-4f16f0ff74ce",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a492d-aa06-7c8b-841a-3378bce87b24"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-ab48-742a-b043-a756721376f3",
          opprettet: "2025-11-03T11:05:21.096643",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2025-11-03",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:21.059335",
            meldingId: "264e8933-0d50-448a-b2ca-4f16f0ff74ce",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a492d-aa06-7c8b-841a-3378bce87b24"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-ab48-742a-b043-a756721376f4",
          opprettet: "2025-11-03T11:05:21.096678",
          opprinnelse: "Ny",
          verdi: {
            verdi: "1973-03-15",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:21.05954",
            meldingId: "264e8933-0d50-448a-b2ca-4f16f0ff74ce",
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
          id: "019a492d-ab49-7a3f-8404-951567f513ee",
          opprettet: "2025-11-03T11:05:21.097748",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2025-11-03",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: [
              "019a492d-ab48-742a-b043-a756721376f2",
              "019a492d-ab48-742a-b043-a756721376f3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-ab49-7a3f-8404-951567f513ef",
          opprettet: "2025-11-03T11:05:21.09785",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2040-03-15",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "LeggTilÅr",
            },
            opplysninger: [
              "019a492d-aa0a-7adb-bbbc-6f75d7f3149b",
              "019a492d-ab48-742a-b043-a756721376f4",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-ab4a-7671-b9ed-5c7e57f9c0ea",
          opprettet: "2025-11-03T11:05:21.098088",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: "2025-11-03",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: ["019a492d-ab49-7a3f-8404-951567f513ee"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-ab4a-7671-b9ed-5c7e57f9c0eb",
          opprettet: "2025-11-03T11:05:21.098116",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2040-03-31",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteDagIMåned",
            },
            opplysninger: ["019a492d-ab49-7a3f-8404-951567f513ef"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-ab4a-7671-b9ed-5c7e57f9c0ed",
          opprettet: "2025-11-03T11:05:21.098354",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "FørEllerLik",
            },
            opplysninger: [
              "019a492d-ab4a-7671-b9ed-5c7e57f9c0ea",
              "019a492d-ab4a-7671-b9ed-5c7e57f9c0eb",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-ab4b-710c-bf18-51be36039dd5",
          opprettet: "2025-11-03T11:05:21.099303",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: "2025-11-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-ab4b-710c-bf18-51be36039dd6",
          opprettet: "2025-11-03T11:05:21.09935",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 36,
            enhet: "måneder",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-ab4c-7676-bd21-e4299ebf79e4",
          opprettet: "2025-11-03T11:05:21.10008",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-ab4c-7676-bd21-e4299ebf79e5",
          opprettet: "2025-11-03T11:05:21.100282",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 1.5,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-ab4c-7676-bd21-e4299ebf79e6",
          opprettet: "2025-11-03T11:05:21.100313",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 3,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-ab4c-7676-bd21-e4299ebf79e7",
          opprettet: "2025-11-03T11:05:21.100326",
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
          id: "019a492d-ab4d-7e93-89f1-f6840935dada",
          opprettet: "2025-11-03T11:05:21.101634",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: "2025-11-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "FørsteArbeidsdag",
            },
            opplysninger: ["019a492d-ab4b-710c-bf18-51be36039dd5"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-ab4e-75a1-af0e-4108a3dbdfc2",
          opprettet: "2025-11-03T11:05:21.102647",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 195240,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a492d-ab4c-7676-bd21-e4299ebf79e4",
              "019a492d-ab4c-7676-bd21-e4299ebf79e5",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-ab4e-75a1-af0e-4108a3dbdfc3",
          opprettet: "2025-11-03T11:05:21.102734",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a492d-ab4c-7676-bd21-e4299ebf79e4",
              "019a492d-ab4c-7676-bd21-e4299ebf79e6",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-ab4e-75a1-af0e-4108a3dbdfc4",
          opprettet: "2025-11-03T11:05:21.102752",
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
          id: "019a492d-ab4f-74f1-8047-2c156df18354",
          opprettet: "2025-11-03T11:05:21.103602",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: "2025-09-30",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteavsluttendeKalenderMåned",
            },
            opplysninger: [
              "019a492d-ab4a-7671-b9ed-5c7e57f9c0ea",
              "019a492d-ab4d-7e93-89f1-f6840935dada",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-ab50-788e-8569-96732ec2c17e",
          opprettet: "2025-11-03T11:05:21.104199",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: "2022-10-01",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "TrekkFraMåned",
            },
            opplysninger: [
              "019a492d-ab4b-710c-bf18-51be36039dd6",
              "019a492d-ab4f-74f1-8047-2c156df18354",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c8fc-7c60-9eac-d0489745e411",
          opprettet: "2025-11-03T11:05:28.700727",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:28.654857",
            meldingId: "39a4d78b-b04d-427c-b67b-3e01f1ffb100",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a492d-aa06-7c8b-841a-3378bce87b24"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c8fc-7c60-9eac-d0489745e412",
          opprettet: "2025-11-03T11:05:28.700809",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:28.655003",
            meldingId: "39a4d78b-b04d-427c-b67b-3e01f1ffb100",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a492d-aa06-7c8b-841a-3378bce87b24"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c8fc-7c60-9eac-d0489745e413",
          opprettet: "2025-11-03T11:05:28.700864",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:28.6551",
            meldingId: "39a4d78b-b04d-427c-b67b-3e01f1ffb100",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a492d-aa06-7c8b-841a-3378bce87b24"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c8fc-7c60-9eac-d0489745e414",
          opprettet: "2025-11-03T11:05:28.700912",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:28.655196",
            meldingId: "39a4d78b-b04d-427c-b67b-3e01f1ffb100",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a492d-aa06-7c8b-841a-3378bce87b24"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c8fc-7c60-9eac-d0489745e415",
          opprettet: "2025-11-03T11:05:28.700952",
          opprinnelse: "Ny",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:28.655282",
            meldingId: "39a4d78b-b04d-427c-b67b-3e01f1ffb100",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a492d-aa06-7c8b-841a-3378bce87b24"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c8fc-7c60-9eac-d0489745e416",
          opprettet: "2025-11-03T11:05:28.700989",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:28.655382",
            meldingId: "39a4d78b-b04d-427c-b67b-3e01f1ffb100",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a492d-aa06-7c8b-841a-3378bce87b24"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c8fd-72fd-a348-065b5b17fb0c",
          opprettet: "2025-11-03T11:05:28.701027",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:28.655543",
            meldingId: "39a4d78b-b04d-427c-b67b-3e01f1ffb100",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a492d-aa06-7c8b-841a-3378bce87b24"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c8fd-72fd-a348-065b5b17fb0d",
          opprettet: "2025-11-03T11:05:28.701063",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:28.655654",
            meldingId: "39a4d78b-b04d-427c-b67b-3e01f1ffb100",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a492d-aa06-7c8b-841a-3378bce87b24"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c8fd-72fd-a348-065b5b17fb0e",
          opprettet: "2025-11-03T11:05:28.701101",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:28.65573",
            meldingId: "39a4d78b-b04d-427c-b67b-3e01f1ffb100",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a492d-aa06-7c8b-841a-3378bce87b24"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c8fd-72fd-a348-065b5b17fb0f",
          opprettet: "2025-11-03T11:05:28.701146",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:28.6558",
            meldingId: "39a4d78b-b04d-427c-b67b-3e01f1ffb100",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a492d-aa06-7c8b-841a-3378bce87b24"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c8fd-72fd-a348-065b5b17fb10",
          opprettet: "2025-11-03T11:05:28.701191",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:28.65589",
            meldingId: "39a4d78b-b04d-427c-b67b-3e01f1ffb100",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c8fd-72fd-a348-065b5b17fb11",
          opprettet: "2025-11-03T11:05:28.701254",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: "01K94JVHQQ4JE4WQHNFC6MQ9QV",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:28.655961",
            meldingId: "39a4d78b-b04d-427c-b67b-3e01f1ffb100",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: [
              "019a492d-ab4a-7671-b9ed-5c7e57f9c0ea",
              "019a492d-ab4f-74f1-8047-2c156df18354",
              "019a492d-ab50-788e-8569-96732ec2c17e",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c8fe-7894-9d16-4ac740bc5734",
          opprettet: "2025-11-03T11:05:28.702924",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: "01K94JVHQQ4JE4WQHNFC6MQ9QV",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["019a492d-c8fd-72fd-a348-065b5b17fb11"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c8fe-7894-9d16-4ac740bc5735",
          opprettet: "2025-11-03T11:05:28.702985",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019a492d-c8fc-7c60-9eac-d0489745e411"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c8ff-7886-b55a-fae484f5a84f",
          opprettet: "2025-11-03T11:05:28.703005",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019a492d-c8fc-7c60-9eac-d0489745e412"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c8ff-7886-b55a-fae484f5a850",
          opprettet: "2025-11-03T11:05:28.703029",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019a492d-c8fc-7c60-9eac-d0489745e413"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c8ff-7886-b55a-fae484f5a851",
          opprettet: "2025-11-03T11:05:28.703101",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: ["019a492d-c8fc-7c60-9eac-d0489745e414"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c8ff-7886-b55a-fae484f5a852",
          opprettet: "2025-11-03T11:05:28.703173",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a492d-ab4e-75a1-af0e-4108a3dbdfc4",
              "019a492d-c8fc-7c60-9eac-d0489745e415",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c8ff-7886-b55a-fae484f5a853",
          opprettet: "2025-11-03T11:05:28.703204",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019a492d-c8fd-72fd-a348-065b5b17fb10"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c8ff-7886-b55a-fae484f5a854",
          opprettet: "2025-11-03T11:05:28.703329",
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
              "019a492d-c8fc-7c60-9eac-d0489745e416",
              "019a492d-c8fd-72fd-a348-065b5b17fb0c",
              "019a492d-c8fd-72fd-a348-065b5b17fb0d",
              "019a492d-c8fd-72fd-a348-065b5b17fb0e",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c8ff-7886-b55a-fae484f5a855",
          opprettet: "2025-11-03T11:05:28.703368",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019a492d-c8fd-72fd-a348-065b5b17fb0f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c900-73fa-8fae-c68137ab42d8",
          opprettet: "2025-11-03T11:05:28.704923",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 360000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a492d-c8fe-7894-9d16-4ac740bc5734"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c902-76fe-b99f-e4ea16ad99b4",
          opprettet: "2025-11-03T11:05:28.706813",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 1020000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a492d-c8fe-7894-9d16-4ac740bc5734"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c902-76fe-b99f-e4ea16ad99b5",
          opprettet: "2025-11-03T11:05:28.706922",
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
              "019a492d-c8fc-7c60-9eac-d0489745e411",
              "019a492d-c8fe-7894-9d16-4ac740bc5735",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c903-78fd-9418-ee2c866c6874",
          opprettet: "2025-11-03T11:05:28.707035",
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
              "019a492d-c8fc-7c60-9eac-d0489745e412",
              "019a492d-c8ff-7886-b55a-fae484f5a84f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c903-78fd-9418-ee2c866c6875",
          opprettet: "2025-11-03T11:05:28.707074",
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
              "019a492d-c8fc-7c60-9eac-d0489745e413",
              "019a492d-c8ff-7886-b55a-fae484f5a850",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c903-78fd-9418-ee2c866c6876",
          opprettet: "2025-11-03T11:05:28.707104",
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
              "019a492d-c8fc-7c60-9eac-d0489745e416",
              "019a492d-c8ff-7886-b55a-fae484f5a854",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c903-78fd-9418-ee2c866c6878",
          opprettet: "2025-11-03T11:05:28.707828",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a492d-ab4e-75a1-af0e-4108a3dbdfc2",
              "019a492d-c900-73fa-8fae-c68137ab42d8",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c904-7dd2-9722-7250e544f0e1",
          opprettet: "2025-11-03T11:05:28.708078",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a492d-ab4e-75a1-af0e-4108a3dbdfc3",
              "019a492d-c902-76fe-b99f-e4ea16ad99b4",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c904-7dd2-9722-7250e544f0e2",
          opprettet: "2025-11-03T11:05:28.708225",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019a492d-c8ff-7886-b55a-fae484f5a851",
              "019a492d-c8ff-7886-b55a-fae484f5a852",
              "019a492d-c902-76fe-b99f-e4ea16ad99b5",
              "019a492d-c903-78fd-9418-ee2c866c6874",
              "019a492d-c903-78fd-9418-ee2c866c6875",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c904-7dd2-9722-7250e544f0e3",
          opprettet: "2025-11-03T11:05:28.708277",
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
              "019a492d-c8fd-72fd-a348-065b5b17fb0c",
              "019a492d-c8fd-72fd-a348-065b5b17fb0d",
              "019a492d-c8fd-72fd-a348-065b5b17fb0e",
              "019a492d-c903-78fd-9418-ee2c866c6876",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c904-7dd2-9722-7250e544f0e5",
          opprettet: "2025-11-03T11:05:28.70873",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a492d-c903-78fd-9418-ee2c866c6878",
              "019a492d-c904-7dd2-9722-7250e544f0e1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c905-744b-86f6-d8553618995f",
          opprettet: "2025-11-03T11:05:28.709253",
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
          id: "019a492d-c905-744b-86f6-d85536189960",
          opprettet: "2025-11-03T11:05:28.709283",
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
      opplysningTypeId: "0194881f-940f-7af9-9387-052e028b29ee",
      navn: "Grunnbeløp for grunnlag",
      datatype: "penger",
      perioder: [
        {
          id: "019a492d-c905-744b-86f6-d85536189961",
          opprettet: "2025-11-03T11:05:28.709989",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c906-7b51-9bf4-658569066761",
          opprettet: "2025-11-03T11:05:28.710145",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: "01K94JVHQQ4JE4WQHNFC6MQ9QV",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["019a492d-c8fd-72fd-a348-065b5b17fb11"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c906-7b51-9bf4-658569066762",
          opprettet: "2025-11-03T11:05:28.710193",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 6,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c906-7b51-9bf4-658569066763",
          opprettet: "2025-11-03T11:05:28.710213",
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
          id: "019a492d-c906-7b51-9bf4-658569066764",
          opprettet: "2025-11-03T11:05:28.71024",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 3,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c906-7b51-9bf4-658569066765",
          opprettet: "2025-11-03T11:05:28.710262",
          opprinnelse: "Ny",
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
          id: "019a492d-c906-7b51-9bf4-658569066766",
          opprettet: "2025-11-03T11:05:28.710367",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 0.0024,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c906-7b51-9bf4-658569066767",
          opprettet: "2025-11-03T11:05:28.710669",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 37,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c906-7b51-9bf4-658569066768",
          opprettet: "2025-11-03T11:05:28.710842",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 0.9,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c906-7b51-9bf4-658569066769",
          opprettet: "2025-11-03T11:05:28.710893",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 260,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c906-7b51-9bf4-65856906676a",
          opprettet: "2025-11-03T11:05:28.710924",
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
          id: "019a492d-c906-7b51-9bf4-65856906676b",
          opprettet: "2025-11-03T11:05:28.710946",
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
          id: "019a492d-c906-7b51-9bf4-65856906676c",
          opprettet: "2025-11-03T11:05:28.71097",
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
          id: "019a492d-c906-7b51-9bf4-65856906676d",
          opprettet: "2025-11-03T11:05:28.710992",
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
          id: "019a492d-c907-74c6-9bdc-532a6e7cd0f9",
          opprettet: "2025-11-03T11:05:28.711015",
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
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d8",
      navn: "Uføre dagsats",
      datatype: "penger",
      perioder: [
        {
          id: "019a492d-c907-74c6-9bdc-532a6e7cd0fa",
          opprettet: "2025-11-03T11:05:28.711063",
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
      opplysningTypeId: "0196afc0-6807-7fa3-83e4-cf7f621f3a7e",
      navn: "Sum hvis Uføre ikke skal samordnes",
      datatype: "penger",
      perioder: [
        {
          id: "019a492d-c907-74c6-9bdc-532a6e7cd0fb",
          opprettet: "2025-11-03T11:05:28.711089",
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
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d9",
      navn: "Foreldrepenger dagsats",
      datatype: "penger",
      perioder: [
        {
          id: "019a492d-c907-74c6-9bdc-532a6e7cd0fc",
          opprettet: "2025-11-03T11:05:28.711113",
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
          id: "019a492d-c907-74c6-9bdc-532a6e7cd0fd",
          opprettet: "2025-11-03T11:05:28.711331",
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
          id: "019a492d-c907-74c6-9bdc-532a6e7cd0fe",
          opprettet: "2025-11-03T11:05:28.711366",
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
          id: "019a492d-c907-74c6-9bdc-532a6e7cd0ff",
          opprettet: "2025-11-03T11:05:28.711398",
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
          id: "019a492d-c907-74c6-9bdc-532a6e7cd100",
          opprettet: "2025-11-03T11:05:28.711449",
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
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a768",
      navn: "Maksimal vanlig arbeidstid",
      datatype: "desimaltall",
      perioder: [
        {
          id: "019a492d-c907-74c6-9bdc-532a6e7cd101",
          opprettet: "2025-11-03T11:05:28.711523",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 40,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c907-74c6-9bdc-532a6e7cd102",
          opprettet: "2025-11-03T11:05:28.711601",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 37.5,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c907-74c6-9bdc-532a6e7cd104",
          opprettet: "2025-11-03T11:05:28.711653",
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
      opplysningTypeId: "019522d2-9bb1-7960-b1e2-a959566e2428",
      navn: "Krav til prosentvis tap av arbeidstid ved permittering fra fiskeindustrien",
      datatype: "desimaltall",
      perioder: [
        {
          id: "019a492d-c907-74c6-9bdc-532a6e7cd105",
          opprettet: "2025-11-03T11:05:28.711687",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 40,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c907-74c6-9bdc-532a6e7cd106",
          opprettet: "2025-11-03T11:05:28.711807",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 50,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c907-74c6-9bdc-532a6e7cd107",
          opprettet: "2025-11-03T11:05:28.711841",
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
          id: "019a492d-c907-74c6-9bdc-532a6e7cd108",
          opprettet: "2025-11-03T11:05:28.71187",
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
          id: "019a492d-c907-74c6-9bdc-532a6e7cd109",
          opprettet: "2025-11-03T11:05:28.711893",
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
          id: "019a492d-c907-74c6-9bdc-532a6e7cd10a",
          opprettet: "2025-11-03T11:05:28.711916",
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
          id: "019a492d-c907-74c6-9bdc-532a6e7cd10b",
          opprettet: "2025-11-03T11:05:28.711937",
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
          id: "019a492d-c907-74c6-9bdc-532a6e7cd10c",
          opprettet: "2025-11-03T11:05:28.711959",
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
          id: "019a492d-c907-74c6-9bdc-532a6e7cd10d",
          opprettet: "2025-11-03T11:05:28.711982",
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
          id: "019a492d-c908-7a2d-904e-81966bbccaaf",
          opprettet: "2025-11-03T11:05:28.712052",
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
          id: "019a492d-c908-7a2d-904e-81966bbccab0",
          opprettet: "2025-11-03T11:05:28.712085",
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
          id: "019a492d-c908-7a2d-904e-81966bbccab1",
          opprettet: "2025-11-03T11:05:28.712109",
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
          id: "019a492d-c908-7a2d-904e-81966bbccab2",
          opprettet: "2025-11-03T11:05:28.712134",
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
          id: "019a492d-c908-7a2d-904e-81966bbccab4",
          opprettet: "2025-11-03T11:05:28.712966",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019a492d-c905-744b-86f6-d85536189960"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c90b-7d91-bd2e-22cc4986c57f",
          opprettet: "2025-11-03T11:05:28.715761",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: "01K94JVHQQ4JE4WQHNFC6MQ9QV",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Oppjuster",
            },
            opplysninger: [
              "019a492d-c905-744b-86f6-d85536189961",
              "019a492d-c906-7b51-9bf4-658569066761",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c90c-7e76-8068-366dabdccddf",
          opprettet: "2025-11-03T11:05:28.716019",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a492d-c905-744b-86f6-d85536189961",
              "019a492d-c906-7b51-9bf4-658569066762",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c90c-7e76-8068-366dabdccde0",
          opprettet: "2025-11-03T11:05:28.716206",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a492d-c905-744b-86f6-d85536189961",
              "019a492d-c906-7b51-9bf4-658569066764",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c90c-7e76-8068-366dabdccde1",
          opprettet: "2025-11-03T11:05:28.716274",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019a492d-c907-74c6-9bdc-532a6e7cd0f9"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c90c-7e76-8068-366dabdccde2",
          opprettet: "2025-11-03T11:05:28.716361",
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
              "019a492d-c907-74c6-9bdc-532a6e7cd0fe",
              "019a492d-c907-74c6-9bdc-532a6e7cd0ff",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c90c-7e76-8068-366dabdccde4",
          opprettet: "2025-11-03T11:05:28.716788",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
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
              "019a492d-c8fd-72fd-a348-065b5b17fb0e",
              "019a492d-c907-74c6-9bdc-532a6e7cd105",
              "019a492d-c907-74c6-9bdc-532a6e7cd106",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c90c-7e76-8068-366dabdccde5",
          opprettet: "2025-11-03T11:05:28.716862",
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
              "019a492d-c907-74c6-9bdc-532a6e7cd107",
              "019a492d-c907-74c6-9bdc-532a6e7cd108",
              "019a492d-c907-74c6-9bdc-532a6e7cd109",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c90c-7e76-8068-366dabdccde6",
          opprettet: "2025-11-03T11:05:28.716916",
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
              "019a492d-c907-74c6-9bdc-532a6e7cd10b",
              "019a492d-c907-74c6-9bdc-532a6e7cd10c",
              "019a492d-c907-74c6-9bdc-532a6e7cd10d",
              "019a492d-c908-7a2d-904e-81966bbccaaf",
              "019a492d-c908-7a2d-904e-81966bbccab0",
              "019a492d-c908-7a2d-904e-81966bbccab1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c90c-7e76-8068-366dabdccde7",
          opprettet: "2025-11-03T11:05:28.716962",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: ["019a492d-c908-7a2d-904e-81966bbccab2"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c90e-794a-869b-63294df9dba1",
          opprettet: "2025-11-03T11:05:28.718354",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 370382.49427548615,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a492d-c90b-7d91-bd2e-22cc4986c57f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c90e-794a-869b-63294df9dba2",
          opprettet: "2025-11-03T11:05:28.718635",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 387846.0116997746,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a492d-c90b-7d91-bd2e-22cc4986c57f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c90e-794a-869b-63294df9dba3",
          opprettet: "2025-11-03T11:05:28.718887",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 339732.08379585994,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a492d-c90b-7d91-bd2e-22cc4986c57f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c90e-794a-869b-63294df9dba4",
          opprettet: "2025-11-03T11:05:28.718945",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "019a492d-c8ff-7886-b55a-fae484f5a855",
              "019a492d-c906-7b51-9bf4-658569066765",
              "019a492d-c90c-7e76-8068-366dabdccde0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c90e-794a-869b-63294df9dba5",
          opprettet: "2025-11-03T11:05:28.718993",
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
              "019a492d-c907-74c6-9bdc-532a6e7cd0fa",
              "019a492d-c907-74c6-9bdc-532a6e7cd0fb",
              "019a492d-c90c-7e76-8068-366dabdccde1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c90f-7853-8c69-74481046187b",
          opprettet: "2025-11-03T11:05:28.719883",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 370382.49427548615,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a492d-c90c-7e76-8068-366dabdccddf",
              "019a492d-c90e-794a-869b-63294df9dba1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c90f-7853-8c69-74481046187c",
          opprettet: "2025-11-03T11:05:28.719963",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 370382.49427548615,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a492d-c90c-7e76-8068-366dabdccddf",
              "019a492d-c90e-794a-869b-63294df9dba1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c910-7a94-93ee-9ab0195bc022",
          opprettet: "2025-11-03T11:05:28.720024",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 387846.0116997746,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a492d-c90c-7e76-8068-366dabdccddf",
              "019a492d-c90e-794a-869b-63294df9dba2",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c910-7a94-93ee-9ab0195bc023",
          opprettet: "2025-11-03T11:05:28.720105",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 339732.08379585994,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a492d-c90c-7e76-8068-366dabdccddf",
              "019a492d-c90e-794a-869b-63294df9dba3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c910-7a94-93ee-9ab0195bc024",
          opprettet: "2025-11-03T11:05:28.720287",
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
              "019a492d-c906-7b51-9bf4-65856906676a",
              "019a492d-c906-7b51-9bf4-65856906676b",
              "019a492d-c906-7b51-9bf4-65856906676c",
              "019a492d-c906-7b51-9bf4-65856906676d",
              "019a492d-c907-74c6-9bdc-532a6e7cd0fc",
              "019a492d-c907-74c6-9bdc-532a6e7cd0fd",
              "019a492d-c90e-794a-869b-63294df9dba5",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c911-7023-b892-66841a93f34b",
          opprettet: "2025-11-03T11:05:28.72196",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 1097960.5897711208,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SumAv",
            },
            opplysninger: [
              "019a492d-c90f-7853-8c69-74481046187c",
              "019a492d-c910-7a94-93ee-9ab0195bc022",
              "019a492d-c910-7a94-93ee-9ab0195bc023",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c912-7ae3-854f-aac2c5ea41d7",
          opprettet: "2025-11-03T11:05:28.722859",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 365986.86325704027,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019a492d-c906-7b51-9bf4-658569066763",
              "019a492d-c911-7023-b892-66841a93f34b",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c913-78bd-afe4-b48be05013e7",
          opprettet: "2025-11-03T11:05:28.723657",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 370382.49427548615,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "019a492d-c90f-7853-8c69-74481046187b",
              "019a492d-c912-7ae3-854f-aac2c5ea41d7",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c914-70db-b235-8a61918137a6",
          opprettet: "2025-11-03T11:05:28.724732",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 370382,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["019a492d-c913-78bd-afe4-b48be05013e7"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c915-7565-a6cb-dcfc771aadd0",
          opprettet: "2025-11-03T11:05:28.725608",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 370382,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "019a492d-c90e-794a-869b-63294df9dba4",
              "019a492d-c914-70db-b235-8a61918137a6",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c915-7565-a6cb-dcfc771aadd1",
          opprettet: "2025-11-03T11:05:28.725679",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019a492d-c90e-794a-869b-63294df9dba4",
              "019a492d-c914-70db-b235-8a61918137a6",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c916-7d9e-a835-5f8416c8bc27",
          opprettet: "2025-11-03T11:05:28.726482",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 888.9168,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a492d-c906-7b51-9bf4-658569066766",
              "019a492d-c915-7565-a6cb-dcfc771aadd0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c916-7d9e-a835-5f8416c8bc28",
          opprettet: "2025-11-03T11:05:28.726587",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 333343.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a492d-c906-7b51-9bf4-658569066768",
              "019a492d-c915-7565-a6cb-dcfc771aadd0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c917-792d-aad5-5794caa04b85",
          opprettet: "2025-11-03T11:05:28.727601",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 889,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["019a492d-c916-7d9e-a835-5f8416c8bc27"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c917-792d-aad5-5794caa04b86",
          opprettet: "2025-11-03T11:05:28.727785",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 1282.0915384615384,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019a492d-c906-7b51-9bf4-658569066769",
              "019a492d-c916-7d9e-a835-5f8416c8bc28",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-c918-7825-9449-04e408dabcda",
          opprettet: "2025-11-03T11:05:28.728871",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 1282,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["019a492d-c917-792d-aad5-5794caa04b86"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d100-76f8-8e80-f3a1bc370d49",
          opprettet: "2025-11-03T11:05:30.752288",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:30.704346",
            meldingId: "29ca29da-9182-4d4d-a9c9-c0b926bb1ad5",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a492d-aa06-7c8b-841a-3378bce87b24"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d100-76f8-8e80-f3a1bc370d4a",
          opprettet: "2025-11-03T11:05:30.752446",
          opprinnelse: "Ny",
          verdi: {
            verdi: [],
            datatype: "barn",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:30.704652",
            meldingId: "29ca29da-9182-4d4d-a9c9-c0b926bb1ad5",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a492d-aa06-7c8b-841a-3378bce87b24"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d100-76f8-8e80-f3a1bc370d4b",
          opprettet: "2025-11-03T11:05:30.752556",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:30.704866",
            meldingId: "29ca29da-9182-4d4d-a9c9-c0b926bb1ad5",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a492d-aa06-7c8b-841a-3378bce87b24"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d100-76f8-8e80-f3a1bc370d4c",
          opprettet: "2025-11-03T11:05:30.752632",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:30.705017",
            meldingId: "29ca29da-9182-4d4d-a9c9-c0b926bb1ad5",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a492d-aa06-7c8b-841a-3378bce87b24"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d100-76f8-8e80-f3a1bc370d4d",
          opprettet: "2025-11-03T11:05:30.752707",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:30.705183",
            meldingId: "29ca29da-9182-4d4d-a9c9-c0b926bb1ad5",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d100-76f8-8e80-f3a1bc370d4e",
          opprettet: "2025-11-03T11:05:30.752781",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:30.705299",
            meldingId: "29ca29da-9182-4d4d-a9c9-c0b926bb1ad5",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d100-76f8-8e80-f3a1bc370d4f",
          opprettet: "2025-11-03T11:05:30.752849",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:30.705391",
            meldingId: "29ca29da-9182-4d4d-a9c9-c0b926bb1ad5",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d100-76f8-8e80-f3a1bc370d50",
          opprettet: "2025-11-03T11:05:30.752947",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:30.705826",
            meldingId: "29ca29da-9182-4d4d-a9c9-c0b926bb1ad5",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d101-7fef-92dd-3dca65dcfb4e",
          opprettet: "2025-11-03T11:05:30.753025",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:30.705953",
            meldingId: "29ca29da-9182-4d4d-a9c9-c0b926bb1ad5",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d101-7fef-92dd-3dca65dcfb4f",
          opprettet: "2025-11-03T11:05:30.753101",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:30.706108",
            meldingId: "29ca29da-9182-4d4d-a9c9-c0b926bb1ad5",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d102-732e-9036-48a70cbf988f",
          opprettet: "2025-11-03T11:05:30.754425",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019a492d-d100-76f8-8e80-f3a1bc370d49"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d102-732e-9036-48a70cbf9890",
          opprettet: "2025-11-03T11:05:30.754591",
          opprinnelse: "Ny",
          verdi: {
            verdi: 0,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "AntallAv",
            },
            opplysninger: ["019a492d-d100-76f8-8e80-f3a1bc370d4a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9434-79e8-a64d-1a23cc5d86ea",
      navn: "Medlem har reduserte ytelser fra folketrygden (Samordning)",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a492d-d102-732e-9036-48a70cbf9891",
          opprettet: "2025-11-03T11:05:30.754717",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a492d-c90c-7e76-8068-366dabdccde1",
              "019a492d-d100-76f8-8e80-f3a1bc370d4d",
              "019a492d-d100-76f8-8e80-f3a1bc370d4e",
              "019a492d-d100-76f8-8e80-f3a1bc370d4f",
              "019a492d-d100-76f8-8e80-f3a1bc370d50",
              "019a492d-d101-7fef-92dd-3dca65dcfb4e",
              "019a492d-d101-7fef-92dd-3dca65dcfb4f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d102-732e-9036-48a70cbf9892",
          opprettet: "2025-11-03T11:05:30.754772",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: ["019a492d-d100-76f8-8e80-f3a1bc370d4b"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d102-732e-9036-48a70cbf9893",
          opprettet: "2025-11-03T11:05:30.75481",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019a492d-d100-76f8-8e80-f3a1bc370d4c"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d102-732e-9036-48a70cbf9894",
          opprettet: "2025-11-03T11:05:30.754909",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErUsann",
            },
            opplysninger: ["019a492d-d100-76f8-8e80-f3a1bc370d4c"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d103-7f12-a6c3-cd97225c7be0",
          opprettet: "2025-11-03T11:05:30.755704",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019a492d-d102-732e-9036-48a70cbf988f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d103-7f12-a6c3-cd97225c7be1",
          opprettet: "2025-11-03T11:05:30.755812",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a492d-c906-7b51-9bf4-658569066767",
              "019a492d-d102-732e-9036-48a70cbf9890",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d103-7f12-a6c3-cd97225c7be3",
          opprettet: "2025-11-03T11:05:30.755908",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019a492d-c90c-7e76-8068-366dabdccde6",
              "019a492d-d102-732e-9036-48a70cbf9893",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d104-7dae-8df7-a8797164da18",
          opprettet: "2025-11-03T11:05:30.756579",
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
              "019a492d-d102-732e-9036-48a70cbf988f",
              "019a492d-d103-7f12-a6c3-cd97225c7be0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d104-7dae-8df7-a8797164da19",
          opprettet: "2025-11-03T11:05:30.756848",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 889,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "019a492d-c917-792d-aad5-5794caa04b85",
              "019a492d-d103-7f12-a6c3-cd97225c7be1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d104-7dae-8df7-a8797164da1a",
          opprettet: "2025-11-03T11:05:30.756947",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a492d-c906-7b51-9bf4-658569066767",
              "019a492d-d103-7f12-a6c3-cd97225c7be1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d105-7b67-9864-e127d78fd557",
          opprettet: "2025-11-03T11:05:30.757013",
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
              "019a492d-d102-732e-9036-48a70cbf9894",
              "019a492d-d103-7f12-a6c3-cd97225c7be3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d105-7b67-9864-e127d78fd559",
          opprettet: "2025-11-03T11:05:30.757625",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019a492d-c908-7a2d-904e-81966bbccab4",
              "019a492d-d104-7dae-8df7-a8797164da18",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d105-7b67-9864-e127d78fd55a",
          opprettet: "2025-11-03T11:05:30.757751",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019a492d-c918-7825-9449-04e408dabcda",
              "019a492d-d104-7dae-8df7-a8797164da19",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d107-7642-af5f-71b7b5b38d3e",
          opprettet: "2025-11-03T11:05:30.759122",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019a492d-c90c-7e76-8068-366dabdccddf",
              "019a492d-c90e-794a-869b-63294df9dba1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d107-7642-af5f-71b7b5b38d3f",
          opprettet: "2025-11-03T11:05:30.759215",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019a492d-c90c-7e76-8068-366dabdccddf",
              "019a492d-c90e-794a-869b-63294df9dba2",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d107-7642-af5f-71b7b5b38d40",
          opprettet: "2025-11-03T11:05:30.759292",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019a492d-c90c-7e76-8068-366dabdccddf",
              "019a492d-c90e-794a-869b-63294df9dba3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d107-7642-af5f-71b7b5b38d41",
          opprettet: "2025-11-03T11:05:30.759492",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: "Inntekt etter avkortning og oppjustering siste 12 måneder",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Brukt",
            },
            opplysninger: ["019a492d-c913-78bd-afe4-b48be05013e7"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d107-7642-af5f-71b7b5b38d42",
          opprettet: "2025-11-03T11:05:30.75981",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 360000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a492d-c906-7b51-9bf4-658569066761"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d108-73fd-ba8c-961818637f9e",
          opprettet: "2025-11-03T11:05:30.760013",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 360000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a492d-c906-7b51-9bf4-658569066761"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d108-73fd-ba8c-961818637f9f",
          opprettet: "2025-11-03T11:05:30.760198",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 300000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a492d-c906-7b51-9bf4-658569066761"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d108-73fd-ba8c-961818637fa0",
          opprettet: "2025-11-03T11:05:30.760318",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 889,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019a492d-c917-792d-aad5-5794caa04b85",
              "019a492d-d105-7b67-9864-e127d78fd55a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d108-73fd-ba8c-961818637fa1",
          opprettet: "2025-11-03T11:05:30.76059",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 5,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d108-73fd-ba8c-961818637fa2",
          opprettet: "2025-11-03T11:05:30.760718",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 0.03,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d108-73fd-ba8c-961818637fa3",
          opprettet: "2025-11-03T11:05:30.760795",
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
          id: "019a492d-d108-73fd-ba8c-961818637fa4",
          opprettet: "2025-11-03T11:05:30.760837",
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
          id: "019a492d-d108-73fd-ba8c-961818637fa5",
          opprettet: "2025-11-03T11:05:30.760874",
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
          id: "019a492d-d108-73fd-ba8c-961818637fa6",
          opprettet: "2025-11-03T11:05:30.760911",
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
          id: "019a492d-d108-73fd-ba8c-961818637fa7",
          opprettet: "2025-11-03T11:05:30.760947",
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
          id: "019a492d-d108-73fd-ba8c-961818637fa8",
          opprettet: "2025-11-03T11:05:30.760981",
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
          id: "019a492d-d109-725e-898e-cb2a585bcca6",
          opprettet: "2025-11-03T11:05:30.761073",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 2,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d109-725e-898e-cb2a585bcca7",
          opprettet: "2025-11-03T11:05:30.761144",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 104,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d109-725e-898e-cb2a585bcca8",
          opprettet: "2025-11-03T11:05:30.761208",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 52,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d109-725e-898e-cb2a585bcca9",
          opprettet: "2025-11-03T11:05:30.761495",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 340000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019a492d-c902-76fe-b99f-e4ea16ad99b4",
              "019a492d-c906-7b51-9bf4-658569066763",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d109-725e-898e-cb2a585bccaa",
          opprettet: "2025-11-03T11:05:30.761568",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 2,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d109-725e-898e-cb2a585bccab",
          opprettet: "2025-11-03T11:05:30.761615",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 0,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d109-725e-898e-cb2a585bccac",
          opprettet: "2025-11-03T11:05:30.761659",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 5,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d109-725e-898e-cb2a585bccad",
          opprettet: "2025-11-03T11:05:30.761699",
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
      opplysningTypeId: "0194881f-943f-78d9-b874-00a4944c54f0",
      navn: "Antall dagsats for egenandel",
      datatype: "desimaltall",
      perioder: [
        {
          id: "019a492d-d109-725e-898e-cb2a585bccae",
          opprettet: "2025-11-03T11:05:30.761743",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 3,
            enhet: "dager",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d109-725e-898e-cb2a585bccaf",
          opprettet: "2025-11-03T11:05:30.761788",
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
          id: "019a492d-d109-725e-898e-cb2a585bccb0",
          opprettet: "2025-11-03T11:05:30.761826",
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
          id: "019a492d-d109-725e-898e-cb2a585bccb1",
          opprettet: "2025-11-03T11:05:30.761864",
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
          id: "019a492d-d109-725e-898e-cb2a585bccb2",
          opprettet: "2025-11-03T11:05:30.761904",
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
          id: "019a492d-d109-725e-898e-cb2a585bccb3",
          opprettet: "2025-11-03T11:05:30.761943",
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
          id: "019a492d-d109-725e-898e-cb2a585bccb4",
          opprettet: "2025-11-03T11:05:30.761981",
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
      opplysningTypeId: "0194881f-9421-766c-9dc6-41fe6c9a1e01",
      navn: "Periode som gis ved verneplikt",
      datatype: "heltall",
      perioder: [
        {
          id: "019a492d-d10a-71be-930f-303d96b6e7ec",
          opprettet: "2025-11-03T11:05:30.762027",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 26,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a492d-ab4a-7671-b9ed-5c7e57f9c0ea"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d10b-7d77-bd63-01dfa16604e4",
          opprettet: "2025-11-03T11:05:30.763282",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a492d-d107-7642-af5f-71b7b5b38d3e",
              "019a492d-d107-7642-af5f-71b7b5b38d3f",
              "019a492d-d107-7642-af5f-71b7b5b38d40",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d10b-7d77-bd63-01dfa16604e5",
          opprettet: "2025-11-03T11:05:30.763464",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 889,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019a492d-c910-7a94-93ee-9ab0195bc024",
              "019a492d-d108-73fd-ba8c-961818637fa0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d10b-7d77-bd63-01dfa16604e6",
          opprettet: "2025-11-03T11:05:30.763595",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 3904.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a492d-c905-744b-86f6-d85536189961",
              "019a492d-d108-73fd-ba8c-961818637fa2",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d10b-7d77-bd63-01dfa16604e7",
          opprettet: "2025-11-03T11:05:30.763689",
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
              "019a492d-d108-73fd-ba8c-961818637fa3",
              "019a492d-d108-73fd-ba8c-961818637fa4",
              "019a492d-d108-73fd-ba8c-961818637fa5",
              "019a492d-d108-73fd-ba8c-961818637fa6",
              "019a492d-d108-73fd-ba8c-961818637fa7",
              "019a492d-d108-73fd-ba8c-961818637fa8",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d10b-7d77-bd63-01dfa16604e8",
          opprettet: "2025-11-03T11:05:30.76379",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 4445,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a492d-d104-7dae-8df7-a8797164da19",
              "019a492d-d108-73fd-ba8c-961818637fa1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d10b-7d77-bd63-01dfa16604e9",
          opprettet: "2025-11-03T11:05:30.763856",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a492d-ab4c-7676-bd21-e4299ebf79e4",
              "019a492d-d109-725e-898e-cb2a585bcca6",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d10b-7d77-bd63-01dfa16604ea",
          opprettet: "2025-11-03T11:05:30.763911",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a492d-ab4c-7676-bd21-e4299ebf79e4",
              "019a492d-d109-725e-898e-cb2a585bccaa",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d10b-7d77-bd63-01dfa16604eb",
          opprettet: "2025-11-03T11:05:30.763977",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a492d-c910-7a94-93ee-9ab0195bc024",
              "019a492d-d108-73fd-ba8c-961818637fa0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d10d-75a6-b26c-51635ae002b5",
          opprettet: "2025-11-03T11:05:30.765101",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 4445,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a492d-d108-73fd-ba8c-961818637fa1",
              "019a492d-d10b-7d77-bd63-01dfa16604e5",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d10d-75a6-b26c-51635ae002b6",
          opprettet: "2025-11-03T11:05:30.765185",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a492d-c900-73fa-8fae-c68137ab42d8",
              "019a492d-d10b-7d77-bd63-01dfa16604e9",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d10d-75a6-b26c-51635ae002b7",
          opprettet: "2025-11-03T11:05:30.765267",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a492d-d109-725e-898e-cb2a585bcca9",
              "019a492d-d10b-7d77-bd63-01dfa16604ea",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d10d-75a6-b26c-51635ae002b8",
          opprettet: "2025-11-03T11:05:30.765352",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a492d-d104-7dae-8df7-a8797164da1a",
              "019a492d-d10b-7d77-bd63-01dfa16604eb",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d10e-723f-ac8d-f85d9d1fa530",
          opprettet: "2025-11-03T11:05:30.766583",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 3904.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a492d-d10b-7d77-bd63-01dfa16604e6",
              "019a492d-d10d-75a6-b26c-51635ae002b5",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d10e-723f-ac8d-f85d9d1fa531",
          opprettet: "2025-11-03T11:05:30.766747",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 4445,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019a492d-d10b-7d77-bd63-01dfa16604e7",
              "019a492d-d10d-75a6-b26c-51635ae002b5",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d10e-723f-ac8d-f85d9d1fa532",
          opprettet: "2025-11-03T11:05:30.766863",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
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
              "019a492d-d109-725e-898e-cb2a585bcca7",
              "019a492d-d109-725e-898e-cb2a585bcca8",
              "019a492d-d10d-75a6-b26c-51635ae002b6",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d10e-723f-ac8d-f85d9d1fa533",
          opprettet: "2025-11-03T11:05:30.766945",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
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
              "019a492d-d109-725e-898e-cb2a585bcca7",
              "019a492d-d109-725e-898e-cb2a585bcca8",
              "019a492d-d10d-75a6-b26c-51635ae002b7",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d110-72cc-ac67-6adead9cef78",
          opprettet: "2025-11-03T11:05:30.768235",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 4445,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "019a492d-d10e-723f-ac8d-f85d9d1fa530",
              "019a492d-d10e-723f-ac8d-f85d9d1fa531",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d110-72cc-ac67-6adead9cef79",
          opprettet: "2025-11-03T11:05:30.768327",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
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
              "019a492d-d10e-723f-ac8d-f85d9d1fa532",
              "019a492d-d10e-723f-ac8d-f85d9d1fa533",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d112-7ac9-aeb7-485a071c0943",
          opprettet: "2025-11-03T11:05:30.770011",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 889,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019a492d-d108-73fd-ba8c-961818637fa1",
              "019a492d-d110-72cc-ac67-6adead9cef78",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d112-7ac9-aeb7-485a071c0944",
          opprettet: "2025-11-03T11:05:30.770111",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
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
              "019a492d-c904-7dd2-9722-7250e544f0e5",
              "019a492d-d109-725e-898e-cb2a585bccab",
              "019a492d-d110-72cc-ac67-6adead9cef79",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d112-7ac9-aeb7-485a071c0945",
          opprettet: "2025-11-03T11:05:30.770269",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
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
              "019a492d-d109-725e-898e-cb2a585bccac",
              "019a492d-d110-72cc-ac67-6adead9cef79",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d113-7556-9c42-62a2879a922c",
          opprettet: "2025-11-03T11:05:30.771954",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 889,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "019a492d-d103-7f12-a6c3-cd97225c7be1",
              "019a492d-d112-7ac9-aeb7-485a071c0943",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d114-7108-b506-534101f1f5ed",
          opprettet: "2025-11-03T11:05:30.77214",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErUlik",
            },
            opplysninger: [
              "019a492d-d108-73fd-ba8c-961818637fa0",
              "019a492d-d112-7ac9-aeb7-485a071c0943",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d115-7735-bd36-b8aeb70abb76",
          opprettet: "2025-11-03T11:05:30.773693",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 889,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a492d-c918-7825-9449-04e408dabcda",
              "019a492d-d113-7556-9c42-62a2879a922c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d116-7f1f-b8d3-ffcbfbf92e3f",
          opprettet: "2025-11-03T11:05:30.77497",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 4445,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a492d-d108-73fd-ba8c-961818637fa1",
              "019a492d-d115-7735-bd36-b8aeb70abb76",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d117-7abe-9979-58fbbb9cc269",
          opprettet: "2025-11-03T11:05:30.77513",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 2667,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a492d-d109-725e-898e-cb2a585bccae",
              "019a492d-d115-7735-bd36-b8aeb70abb76",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d118-7cf7-b610-4fd533ca66cc",
          opprettet: "2025-11-03T11:05:30.776424",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 2667,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "019a492d-c8fd-72fd-a348-065b5b17fb0e",
              "019a492d-d109-725e-898e-cb2a585bccad",
              "019a492d-d117-7abe-9979-58fbbb9cc269",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a492d-d1f3-72d3-a5e8-46fe11989518",
          opprettet: "2025-11-03T11:05:30.995669",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-03T11:05:30.94798",
            meldingId: "2954a93e-52cc-4969-913d-6be91aba97e2",
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
          id: "019a492d-d1f5-7027-9601-6d994e08ecd9",
          opprettet: "2025-11-03T11:05:30.997502",
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
              "019a492d-d109-725e-898e-cb2a585bccaf",
              "019a492d-d109-725e-898e-cb2a585bccb0",
              "019a492d-d109-725e-898e-cb2a585bccb1",
              "019a492d-d109-725e-898e-cb2a585bccb2",
              "019a492d-d109-725e-898e-cb2a585bccb3",
              "019a492d-d109-725e-898e-cb2a585bccb4",
              "019a492d-d1f3-72d3-a5e8-46fe11989518",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.10.30-19.07-e696638",
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
          id: "019a5390-7f1f-75e0-bdf5-34cc2f0f5f5c",
          opprettet: "2025-11-05T11:29:30.015553",
          opprinnelse: "Ny",
          verdi: {
            verdi: 10,
            enhet: "timer",
            datatype: "desimaltall",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-11-05T11:29:29.942864",
            ident: "Z993809",
            begrunnelse: {
              verdi: "test",
              sistEndret: "2025-11-05T11:29:29.942855",
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
          id: "019a5390-7f22-7612-9bfb-47d6989f9dd4",
          opprettet: "2025-11-05T11:29:30.018617",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 10,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "019a492d-c907-74c6-9bdc-532a6e7cd102",
              "019a492d-c915-7565-a6cb-dcfc771aadd1",
              "019a5390-7f1f-75e0-bdf5-34cc2f0f5f5c",
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
          id: "019a5390-7f22-7612-9bfb-47d6989f9dd5",
          opprettet: "2025-11-05T11:29:30.018834",
          opprinnelse: "Ny",
          verdi: {
            verdi: 10,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019a492d-c907-74c6-9bdc-532a6e7cd104",
              "019a5390-7f1f-75e0-bdf5-34cc2f0f5f5c",
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
          id: "019a5390-7f24-7c7a-b6b4-cde387b0b9bb",
          opprettet: "2025-11-05T11:29:30.020096",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: 10,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a492d-c8fc-7c60-9eac-d0489745e415",
              "019a492d-c907-74c6-9bdc-532a6e7cd101",
              "019a5390-7f22-7612-9bfb-47d6989f9dd4",
              "019a5390-7f22-7612-9bfb-47d6989f9dd5",
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
          id: "019a5390-7f25-75ea-bab2-9b5d6dce7e08",
          opprettet: "2025-11-05T11:29:30.021176",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "SjekkAvTerskel",
            },
            opplysninger: [
              "019a492d-c907-74c6-9bdc-532a6e7cd100",
              "019a492d-c90c-7e76-8068-366dabdccde4",
              "019a5390-7f24-7c7a-b6b4-cde387b0b9bb",
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
          id: "019a5390-7f26-76bd-9354-ae8f70087110",
          opprettet: "2025-11-05T11:29:30.022263",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019a492d-c907-74c6-9bdc-532a6e7cd10a",
              "019a492d-c90c-7e76-8068-366dabdccde5",
              "019a492d-d102-732e-9036-48a70cbf9892",
              "019a5390-7f25-75ea-bab2-9b5d6dce7e08",
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
      opplysningTypeId: "01990a09-0eab-7957-b88f-14484a50e194",
      navn: "Har løpende rett på dagpenger",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a72cc-e57b-77cb-9dfd-ffe503617321",
          opprettet: "2025-11-11T13:03:42.075078",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-03",
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
