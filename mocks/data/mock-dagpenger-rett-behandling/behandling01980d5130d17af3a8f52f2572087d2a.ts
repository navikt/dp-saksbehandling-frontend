import type { components } from "../../../openapi/behandling-typer";

export const behandling01980d5130d17af3a8f52f2572087d2a: components["schemas"]["Behandling"] = {
  behandlingId: "01980d51-30d1-7af3-a8f5-2f2572087d2a",
  behandletHendelse: {
    datatype: "UUID",
    id: "02387802-0322-4f2f-abb8-183d50637713",
    type: "Søknad",
    skjedde: "2025-07-15",
  },
  opprettet: "2025-07-15",
  sistEndret: "2025-07-15",
  behandlingskjedeId: "01980d51-30d1-7af3-a8f5-2f2572087d2a",
  automatisk: false,
  ident: "04810098363",
  rettighetsperioder: [],
  kreverTotrinnskontroll: false,
  tilstand: "TilGodkjenning",
  avklaringer: [
    {
      id: "01980d51-30ef-7225-9686-4ed7ef01e895",
      kode: "HarTilleggsopplysninger",
      tittel: "Sjekk hva bruker har oppgitt som tilleggsopplysninger i søknaden",
      beskrivelse: "Du må vurdere om tilleggsopplysninger har betydning for saken",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-07-15T11:01:24.519387",
      regelsett: [],
    },
    {
      id: "01980d51-39d4-7bea-80ca-cffa5d65da3e",
      kode: "HattLukkedeSakerSiste8Uker",
      tittel: "Sjekk om nylig lukkede saker i Arena kan påvirke behandlingen",
      beskrivelse:
        "Personen har lukkede saker i Arena siste 8 uker. Har vi nylig gitt avslag bør vi sjekke om det er nødvendig med ekstra \nveiledning.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-07-15T11:01:51.853276",
      regelsett: [],
    },
    {
      id: "01980d51-39d4-7bea-80ca-cffa5d65da40",
      kode: "MuligGjenopptak",
      tittel: "Sjekk om det er sak som kan gjenopptas i Arena",
      beskrivelse:
        "Personen har åpne saker i Arena som kan være gjenopptak. Saker som skal gjenopptas må håndteres i Arena.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-07-15T11:03:25.893497",
      regelsett: [],
    },
    {
      id: "01980d51-42f8-7f82-8d18-a20b622357b4",
      kode: "EØSArbeid",
      tittel: "Sjekk om arbeid i EØS fører til sammenlegging",
      beskrivelse:
        "Personen har oppgitt arbeid fra EØS i søknaden. Det må vurderes om det skal være sammenlegging.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-07-15T11:01:27.859277",
      regelsett: [],
    },
    {
      id: "01980d51-42f8-7f82-8d18-a20b622357b8",
      kode: "InntektNesteKalendermåned",
      tittel: "Sjekk om inntekt for neste måned er relevant",
      beskrivelse:
        "Personen har inntekt som tilhører neste inntektsperiode. Vurder om det er tilstrekkelige inntekter til at utfallet vil \nendre seg i neste inntektsperiode.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-07-15T11:01:29.026174",
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
      id: "01980d51-42f8-7f82-8d18-a20b622357ba",
      kode: "JobbetUtenforNorge",
      tittel: "Sjekk om arbeid utenfor Norge påvirker retten til dagpenger",
      beskrivelse:
        "Personen har oppgitt arbeid utenfor Norge i søknaden. Sjekk om arbeidsforholdene som er oppgitt i søknaden skal være \nmed i vurderingen av retten til dagpenger.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-07-15T11:01:28.439232",
      regelsett: [],
    },
    {
      id: "01980d51-42f8-7f82-8d18-a20b622357c0",
      kode: "Verneplikt",
      tittel: "Sjekk om søker oppfyller vilkåret til dagpenger ved avtjent verneplikt",
      beskrivelse:
        "Søker har oppgitt at de har avtjent verneplikt. Det må sjekkes om kravet til dagpenger ved avtjent verneplikt er oppfylt.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: false,
      begrunnelse: "adsf",
      sistEndret: "2025-07-15T13:22:40.354676",
      avklartAv: {
        ident: "Z994276",
      },
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
      id: "01980d51-42f8-7f82-8d18-a20b622357c2",
      kode: "BeregnetArbeidstid",
      tittel: "Sjekk om beregnet arbeidstid er korrekt",
      beskrivelse:
        "Du må sjekke om beregnet vanlig arbeidstid er korrekt og at det er brukt riktig beregningsregel. \nDu må også sjekke om ny vanlig arbeidstid er korrekt",
      kanKvitteres: true,
      status: "Avbrutt",
      maskinelt: true,
      sistEndret: "2025-07-15T13:33:31.838618",
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
      id: "01980d51-5a56-73cf-964a-3b511af0dc33",
      kode: "SjekkPrøvingsdato",
      tittel: "Sjekk om valgt prøvingsdato er riktig",
      beskrivelse: "Sjekk at valgt prøvingsdato er riktig",
      kanKvitteres: true,
      status: "Avbrutt",
      maskinelt: true,
      sistEndret: "2025-07-15T13:33:31.838625",
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
      relevantForResultat: false,
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d54e",
      opplysninger: [],
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
      relevantForResultat: false,
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a76f",
      opplysninger: [],
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
      relevantForResultat: false,
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b52d",
      opplysninger: [],
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
      relevantForResultat: false,
      opplysningTypeId: "0194881f-91df-746a-a8ac-4a6b2b30685f",
      opplysninger: [],
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
      relevantForResultat: false,
      opplysningTypeId: "0194881f-943f-78d9-b874-00a4944c54f1",
      opplysninger: [],
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
      opplysninger: [],
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
      relevantForResultat: false,
      opplysningTypeId: "0194881f-9447-7e36-a569-3e9f42bff9f7",
      opplysninger: [],
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
      relevantForResultat: false,
      opplysninger: [],
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
      opplysninger: [],
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
      opplysninger: [],
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
      opplysninger: [],
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
      relevantForResultat: false,
      opplysninger: [],
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
      relevantForResultat: false,
      opplysninger: [],
    },
  ],
  opplysninger: [
    {
      opplysningTypeId: "0194881f-9462-78af-8977-46092bb030eb",
      navn: "fagsakId",
      datatype: "heltall",
      perioder: [
        {
          id: "01980d51-30d1-7af3-a8f5-2f2572087d25",
          opprettet: "2025-07-15T11:01:21.489064",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: 15480621,
            datatype: "heltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-15T11:01:21.488975",
            meldingId: "7ab95d9b-789f-4e7c-b905-b2cc6dada787",
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
          id: "01980d51-30d1-7af3-a8f5-2f2572087d27",
          opprettet: "2025-07-15T11:01:21.489157",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: "02387802-0322-4f2f-abb8-183d50637713",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-15T11:01:21.48915",
            meldingId: "7ab95d9b-789f-4e7c-b905-b2cc6dada787",
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
          id: "01980d51-30d1-7af3-a8f5-2f2572087d29",
          opprettet: "2025-07-15T11:01:21.489179",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-15",
          verdi: {
            verdi: "SøknadInnsendtHendelse",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-15T11:01:21.489175",
            meldingId: "7ab95d9b-789f-4e7c-b905-b2cc6dada787",
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
          id: "01980d51-30e7-7554-b776-7e39f614d153",
          opprettet: "2025-07-15T11:01:21.511321",
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
          id: "01980d51-39c0-7156-a682-43cb1a30ae99",
          opprettet: "2025-07-15T11:01:23.776584",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2025-07-15",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-15T11:01:23.47519",
            meldingId: "72cd49c0-a7c7-4b07-a30a-7a1361da0459",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01980d51-30d1-7af3-a8f5-2f2572087d27"],
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
          id: "01980d51-39c0-7156-a682-43cb1a30ae9a",
          opprettet: "2025-07-15T11:01:23.77668",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2025-07-15",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-15T11:01:23.475815",
            meldingId: "72cd49c0-a7c7-4b07-a30a-7a1361da0459",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01980d51-30d1-7af3-a8f5-2f2572087d27"],
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
          id: "01980d51-39c0-7156-a682-43cb1a30ae9b",
          opprettet: "2025-07-15T11:01:23.776729",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2000-01-04",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-15T11:01:23.476304",
            meldingId: "72cd49c0-a7c7-4b07-a30a-7a1361da0459",
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
          id: "01980d51-39c2-715f-b4d9-7d298fc3c6f5",
          opprettet: "2025-07-15T11:01:23.77819",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2025-07-15",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: [
              "01980d51-39c0-7156-a682-43cb1a30ae99",
              "01980d51-39c0-7156-a682-43cb1a30ae9a",
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
          id: "01980d51-39c2-715f-b4d9-7d298fc3c6f6",
          opprettet: "2025-07-15T11:01:23.778269",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2067-01-04",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "LeggTilÅr",
            },
            opplysninger: [
              "01980d51-30e7-7554-b776-7e39f614d153",
              "01980d51-39c0-7156-a682-43cb1a30ae9b",
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
          id: "01980d51-39c2-715f-b4d9-7d298fc3c6f8",
          opprettet: "2025-07-15T11:01:23.778806",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-15",
          verdi: {
            verdi: "2025-07-15",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: ["01980d51-39c2-715f-b4d9-7d298fc3c6f5"],
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
          id: "01980d51-39c2-715f-b4d9-7d298fc3c6f9",
          opprettet: "2025-07-15T11:01:23.778869",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2067-01-31",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteDagIMåned",
            },
            opplysninger: ["01980d51-39c2-715f-b4d9-7d298fc3c6f6"],
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
          id: "01980d51-39c3-7ebe-8ab4-237599be607a",
          opprettet: "2025-07-15T11:01:23.779625",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-15",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "FørEllerLik",
            },
            opplysninger: [
              "01980d51-39c2-715f-b4d9-7d298fc3c6f8",
              "01980d51-39c2-715f-b4d9-7d298fc3c6f9",
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
          id: "01980d51-39c5-7212-b259-3354c944fc28",
          opprettet: "2025-07-15T11:01:23.781153",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-15",
          verdi: {
            verdi: "2025-07-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01980d51-39c2-715f-b4d9-7d298fc3c6f8"],
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
          id: "01980d51-39c5-7212-b259-3354c944fc29",
          opprettet: "2025-07-15T11:01:23.78122",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-15",
          verdi: {
            verdi: 36,
            enhet: "måneder",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01980d51-39c2-715f-b4d9-7d298fc3c6f8"],
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
          id: "01980d51-39ca-7d78-b712-cbe5ddbc4af5",
          opprettet: "2025-07-15T11:01:23.786108",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-15",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01980d51-39c2-715f-b4d9-7d298fc3c6f8"],
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
          id: "01980d51-39cc-7f10-934e-3c7b2d71c4c1",
          opprettet: "2025-07-15T11:01:23.788023",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-15",
          verdi: {
            verdi: 1.5,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01980d51-39c2-715f-b4d9-7d298fc3c6f8"],
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
          id: "01980d51-39cc-7f10-934e-3c7b2d71c4c2",
          opprettet: "2025-07-15T11:01:23.788107",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-15",
          verdi: {
            verdi: 3,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01980d51-39c2-715f-b4d9-7d298fc3c6f8"],
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
          id: "01980d51-39cc-7f10-934e-3c7b2d71c4c3",
          opprettet: "2025-07-15T11:01:23.788151",
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
      opplysningTypeId: "0194881f-9414-7823-8d29-0e25b7feb7cf",
      navn: "Arbeidsgivers rapporteringsfrist",
      datatype: "dato",
      perioder: [
        {
          id: "01980d51-39ce-7882-a49e-c3985068535f",
          opprettet: "2025-07-15T11:01:23.790446",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-15",
          verdi: {
            verdi: "2025-07-07",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "FørsteArbeidsdag",
            },
            opplysninger: ["01980d51-39c5-7212-b259-3354c944fc28"],
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
          id: "01980d51-39ce-7882-a49e-c39850685360",
          opprettet: "2025-07-15T11:01:23.790666",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-15",
          verdi: {
            verdi: 195240,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01980d51-39ca-7d78-b712-cbe5ddbc4af5",
              "01980d51-39cc-7f10-934e-3c7b2d71c4c1",
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
          id: "01980d51-39ce-7882-a49e-c39850685361",
          opprettet: "2025-07-15T11:01:23.790746",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-15",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01980d51-39ca-7d78-b712-cbe5ddbc4af5",
              "01980d51-39cc-7f10-934e-3c7b2d71c4c2",
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
          id: "01980d51-39ce-7882-a49e-c39850685362",
          opprettet: "2025-07-15T11:01:23.790763",
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
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bda",
      navn: "Det er godkjent at bruker kun søker arbeid lokalt",
      datatype: "boolsk",
      perioder: [
        {
          id: "01980d51-39ce-7882-a49e-c39850685363",
          opprettet: "2025-07-15T11:01:23.790771",
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
      opplysningTypeId: "0194929e-2036-7ac1-ada3-5cbe05a83f08",
      navn: "Har helsemessige begrensninger og kan ikke ta alle typer arbeid",
      datatype: "boolsk",
      perioder: [
        {
          id: "01980d51-39ce-7882-a49e-c39850685364",
          opprettet: "2025-07-15T11:01:23.790777",
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
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a769",
      navn: "Minimum vanlig arbeidstid",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01980d51-39ce-7882-a49e-c39850685365",
          opprettet: "2025-07-15T11:01:23.790784",
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
          id: "01980d51-39d0-7b09-849b-932fbc9a6f3d",
          opprettet: "2025-07-15T11:01:23.791961",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-15",
          verdi: {
            verdi: "2025-06-30",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteavsluttendeKalenderMåned",
            },
            opplysninger: [
              "01980d51-39c2-715f-b4d9-7d298fc3c6f8",
              "01980d51-39ce-7882-a49e-c3985068535f",
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
          id: "01980d51-39d1-7106-90a9-68c12f9d8259",
          opprettet: "2025-07-15T11:01:23.793018",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-15",
          verdi: {
            verdi: "2022-07-01",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "TrekkFraMåned",
            },
            opplysninger: [
              "01980d51-39c5-7212-b259-3354c944fc29",
              "01980d51-39d0-7b09-849b-932fbc9a6f3d",
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
          id: "01980d51-42cc-702e-a27f-eab23a6d0f8e",
          opprettet: "2025-07-15T11:01:26.092552",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-15T11:01:25.84091",
            meldingId: "fcfd2abd-f148-4ad3-9451-347bb9217ccd",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01980d51-30d1-7af3-a8f5-2f2572087d27"],
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
          id: "01980d51-42cc-702e-a27f-eab23a6d0f8f",
          opprettet: "2025-07-15T11:01:26.092647",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-15T11:01:25.841219",
            meldingId: "fcfd2abd-f148-4ad3-9451-347bb9217ccd",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01980d51-30d1-7af3-a8f5-2f2572087d27"],
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
          id: "01980d51-42cc-702e-a27f-eab23a6d0f90",
          opprettet: "2025-07-15T11:01:26.09271",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-15T11:01:25.841479",
            meldingId: "fcfd2abd-f148-4ad3-9451-347bb9217ccd",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01980d51-30d1-7af3-a8f5-2f2572087d27"],
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
          id: "01980d51-42cc-702e-a27f-eab23a6d0f91",
          opprettet: "2025-07-15T11:01:26.092759",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-15T11:01:25.841717",
            meldingId: "fcfd2abd-f148-4ad3-9451-347bb9217ccd",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01980d51-30d1-7af3-a8f5-2f2572087d27"],
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877be0",
      navn: "Registrert som arbeidssøker",
      datatype: "boolsk",
      perioder: [
        {
          id: "01980d51-42cc-702e-a27f-eab23a6d0f92",
          opprettet: "2025-07-15T11:01:26.092806",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-15",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-15T11:01:25.84216",
            meldingId: "fcfd2abd-f148-4ad3-9451-347bb9217ccd",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01980d51-39c2-715f-b4d9-7d298fc3c6f8"],
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Register",
    },
    {
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a75f",
      navn: "Ønsket arbeidstid",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01980d51-42cc-702e-a27f-eab23a6d0f93",
          opprettet: "2025-07-15T11:01:26.092851",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-15T11:01:25.842404",
            meldingId: "fcfd2abd-f148-4ad3-9451-347bb9217ccd",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01980d51-30d1-7af3-a8f5-2f2572087d27"],
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
          id: "01980d51-42cc-702e-a27f-eab23a6d0f94",
          opprettet: "2025-07-15T11:01:26.092898",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-15T11:01:25.842773",
            meldingId: "fcfd2abd-f148-4ad3-9451-347bb9217ccd",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01980d51-30d1-7af3-a8f5-2f2572087d27"],
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
          id: "01980d51-42cc-702e-a27f-eab23a6d0f95",
          opprettet: "2025-07-15T11:01:26.092958",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-15T11:01:25.843137",
            meldingId: "fcfd2abd-f148-4ad3-9451-347bb9217ccd",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01980d51-30d1-7af3-a8f5-2f2572087d27"],
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
          id: "01980d51-42cd-74ab-8c36-9e99df12f230",
          opprettet: "2025-07-15T11:01:26.093022",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-15T11:01:25.843382",
            meldingId: "fcfd2abd-f148-4ad3-9451-347bb9217ccd",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01980d51-30d1-7af3-a8f5-2f2572087d27"],
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
          id: "01980d51-42cd-74ab-8c36-9e99df12f231",
          opprettet: "2025-07-15T11:01:26.093071",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-15T11:01:25.843653",
            meldingId: "fcfd2abd-f148-4ad3-9451-347bb9217ccd",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01980d51-30d1-7af3-a8f5-2f2572087d27"],
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
          id: "01980d51-42cd-74ab-8c36-9e99df12f232",
          opprettet: "2025-07-15T11:01:26.093119",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-15T11:01:25.843959",
            meldingId: "fcfd2abd-f148-4ad3-9451-347bb9217ccd",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01980d51-30d1-7af3-a8f5-2f2572087d27"],
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
          id: "01980d51-42cd-74ab-8c36-9e99df12f233",
          opprettet: "2025-07-15T11:01:26.093219",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-15",
          verdi: {
            verdi: "01K06N2G6S0GWXC4WT6M2GYHNM",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-07-15T11:01:25.844301",
            meldingId: "fcfd2abd-f148-4ad3-9451-347bb9217ccd",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: [
              "01980d51-39c2-715f-b4d9-7d298fc3c6f8",
              "01980d51-39d0-7b09-849b-932fbc9a6f3d",
              "01980d51-39d1-7106-90a9-68c12f9d8259",
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
          id: "01980d51-42ce-757f-8edc-690d8b78eb3c",
          opprettet: "2025-07-15T11:01:26.094617",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-15",
          verdi: {
            verdi: "01K06N2G6S0GWXC4WT6M2GYHNM",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["01980d51-42cd-74ab-8c36-9e99df12f233"],
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
          id: "01980d51-42ce-757f-8edc-690d8b78eb3d",
          opprettet: "2025-07-15T11:01:26.094693",
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
              "01980d51-39ce-7882-a49e-c39850685362",
              "01980d51-42cc-702e-a27f-eab23a6d0f8e",
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
          id: "01980d51-42ce-757f-8edc-690d8b78eb3e",
          opprettet: "2025-07-15T11:01:26.094724",
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
              "01980d51-39ce-7882-a49e-c39850685363",
              "01980d51-42cc-702e-a27f-eab23a6d0f8f",
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
          id: "01980d51-42ce-757f-8edc-690d8b78eb3f",
          opprettet: "2025-07-15T11:01:26.09475",
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
              "01980d51-39ce-7882-a49e-c39850685364",
              "01980d51-42cc-702e-a27f-eab23a6d0f90",
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
          id: "01980d51-42ce-757f-8edc-690d8b78eb40",
          opprettet: "2025-07-15T11:01:26.09477",
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
            opplysninger: ["01980d51-42cc-702e-a27f-eab23a6d0f91"],
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
          id: "01980d51-42ce-757f-8edc-690d8b78eb41",
          opprettet: "2025-07-15T11:01:26.094818",
          status: "Ny",
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
              "01980d51-39ce-7882-a49e-c39850685365",
              "01980d51-42cc-702e-a27f-eab23a6d0f93",
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
          id: "01980d51-42ce-757f-8edc-690d8b78eb42",
          opprettet: "2025-07-15T11:01:26.094835",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-15",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["01980d51-42cc-702e-a27f-eab23a6d0f92"],
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
          id: "01980d51-42ce-757f-8edc-690d8b78eb43",
          opprettet: "2025-07-15T11:01:26.094898",
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
              "01980d51-42cc-702e-a27f-eab23a6d0f94",
              "01980d51-42cc-702e-a27f-eab23a6d0f95",
              "01980d51-42cd-74ab-8c36-9e99df12f230",
              "01980d51-42cd-74ab-8c36-9e99df12f231",
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
          id: "01980d51-42d2-7e96-9804-e0d42514628d",
          opprettet: "2025-07-15T11:01:26.098729",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-15",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01980d51-42ce-757f-8edc-690d8b78eb3c"],
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
          id: "01980d51-42d3-7d23-88c0-af0872b04c49",
          opprettet: "2025-07-15T11:01:26.09957",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-15",
          verdi: {
            verdi: 38885,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01980d51-42ce-757f-8edc-690d8b78eb3c"],
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
          id: "01980d51-42d3-7d23-88c0-af0872b04c4a",
          opprettet: "2025-07-15T11:01:26.099694",
          status: "Ny",
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
              "01980d51-42ce-757f-8edc-690d8b78eb3d",
              "01980d51-42ce-757f-8edc-690d8b78eb3e",
              "01980d51-42ce-757f-8edc-690d8b78eb3f",
              "01980d51-42ce-757f-8edc-690d8b78eb40",
              "01980d51-42ce-757f-8edc-690d8b78eb41",
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
          id: "01980d51-42d3-7d23-88c0-af0872b04c4b",
          opprettet: "2025-07-15T11:01:26.099732",
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
              "01980d51-42cc-702e-a27f-eab23a6d0f94",
              "01980d51-42ce-757f-8edc-690d8b78eb43",
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
          id: "01980d51-42d5-76a8-8d79-d137f665175e",
          opprettet: "2025-07-15T11:01:26.10109",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-15",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01980d51-39ce-7882-a49e-c39850685360",
              "01980d51-42d2-7e96-9804-e0d42514628d",
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
          id: "01980d51-42d5-76a8-8d79-d137f665175f",
          opprettet: "2025-07-15T11:01:26.101115",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-15",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01980d51-39ce-7882-a49e-c39850685361",
              "01980d51-42d3-7d23-88c0-af0872b04c49",
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
          id: "01980d51-42d5-76a8-8d79-d137f6651762",
          opprettet: "2025-07-15T11:01:26.101227",
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
              "01980d51-42cc-702e-a27f-eab23a6d0f95",
              "01980d51-42cd-74ab-8c36-9e99df12f230",
              "01980d51-42cd-74ab-8c36-9e99df12f231",
              "01980d51-42d3-7d23-88c0-af0872b04c4b",
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
          id: "01980d51-42d8-7551-b047-61cce0f63a91",
          opprettet: "2025-07-15T11:01:26.10487",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-15",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01980d51-42d5-76a8-8d79-d137f665175e",
              "01980d51-42d5-76a8-8d79-d137f665175f",
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
          id: "01980dd2-fc71-7cca-b4c6-4207d0d60c95",
          opprettet: "2025-07-15T13:23:07.761741",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-07-15T13:23:07.491812",
            ident: "Z994276",
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
          id: "01980ddc-822f-782d-bb16-2bfcb6c6437c",
          opprettet: "2025-07-15T13:33:31.823495",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-07-15T13:33:31.536467",
            ident: "Z994276",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: true,
      formål: "Regel",
    },
  ],
  forslagOm: "Endring",
};
