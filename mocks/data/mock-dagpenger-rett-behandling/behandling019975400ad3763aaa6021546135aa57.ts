import type { components } from "../../../openapi/behandling-typer";

export const behandling019975400ad3763aaa6021546135aa57: components["schemas"]["Behandling"] = {
  behandlingId: "01997540-0ad3-763a-aa60-21546135aa57",
  behandletHendelse: {
    datatype: "UUID",
    id: "ac4b34e5-8d8e-4410-a321-6123a99e56fb",
    type: "Søknad",
    skjedde: "2025-09-23",
  },
  behandlingskjedeId: "01997540-0ad3-763a-aa60-21546135aa57",
  automatisk: false,
  ident: "02479329608",
  rettighetsperioder: [
    {
      fraOgMed: "2025-09-22",
      tilOgMed: "2025-09-22",
      harRett: false,
      opprinnelse: "Ny",
    },
  ],
  opprettet: "2025-09-23T08:25:55.414644",
  sistEndret: "2025-11-27T13:54:12.627708",
  kreverTotrinnskontroll: true,
  tilstand: "TilBeslutning",
  avklaringer: [
    {
      id: "01997540-0ad5-740c-a7e2-a29c6977527b",
      kode: "HarTilleggsopplysninger",
      tittel: "Sjekk hva bruker har oppgitt som tilleggsopplysninger i søknaden",
      beskrivelse: "Du må vurdere om tilleggsopplysninger har betydning for saken",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-09-23T08:25:55.920728",
      regelsett: [],
    },
    {
      id: "01997540-0d56-7724-82bb-cceabbabbca1",
      kode: "HattLukkedeSakerSiste8Uker",
      tittel: "Sjekk om nylig lukkede saker i Arena kan påvirke behandlingen",
      beskrivelse:
        "Personen har lukkede saker i Arena siste 8 uker. Har vi nylig gitt avslag bør vi sjekke om det er nødvendig med ekstra \nveiledning.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-09-23T08:25:56.487127",
      regelsett: [],
    },
    {
      id: "01997540-0d56-7724-82bb-cceabbabbca3",
      kode: "MuligGjenopptak",
      tittel: "Sjekk om det er sak som kan gjenopptas i Arena",
      beskrivelse:
        "Personen har åpne saker i Arena som kan være gjenopptak. Saker som skal gjenopptas må håndteres i Arena.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-09-23T08:25:56.626756",
      regelsett: [],
    },
    {
      id: "01997540-10a3-7da7-8864-928251de7835",
      kode: "EØSArbeid",
      tittel: "Sjekk om arbeid i EØS fører til sammenlegging",
      beskrivelse:
        "Personen har oppgitt arbeid fra EØS i søknaden. Det må vurderes om det skal være sammenlegging.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-09-23T08:25:57.315814",
      regelsett: [],
    },
    {
      id: "01997540-10a3-7da7-8864-928251de7839",
      kode: "IkkeRegistrertSomArbeidsøker",
      tittel: "Søker er ikke registrert som arbeidssøker",
      beskrivelse: "Søker er ikke registrert som arbeidssøker.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: false,
      begrunnelse: "adw",
      sistEndret: "2025-11-27T13:50:48.447975",
      avklartAv: {
        ident: "Z993622",
      },
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
      id: "01997540-10a3-7da7-8864-928251de783b",
      kode: "InntektNesteKalendermåned",
      tittel: "Sjekk om inntekt for neste måned er relevant",
      beskrivelse:
        "Personen har inntekt som tilhører neste inntektsperiode. Vurder om det er tilstrekkelige inntekter til at utfallet vil \nendre seg i neste inntektsperiode.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-09-23T08:25:57.744297",
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
      id: "01997540-10a3-7da7-8864-928251de783d",
      kode: "JobbetUtenforNorge",
      tittel: "Sjekk om arbeid utenfor Norge påvirker retten til dagpenger",
      beskrivelse:
        "Personen har oppgitt arbeid utenfor Norge i søknaden. Sjekk om arbeidsforholdene som er oppgitt i søknaden skal være \nmed i vurderingen av retten til dagpenger.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-09-23T08:25:57.464024",
      regelsett: [],
    },
    {
      id: "01997540-10a3-7da7-8864-928251de7843",
      kode: "Verneplikt",
      tittel: "Sjekk om søker oppfyller vilkåret til dagpenger ved avtjent verneplikt",
      beskrivelse:
        "Søker har oppgitt at de har avtjent verneplikt. Det må sjekkes om kravet til dagpenger ved avtjent verneplikt er oppfylt.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: false,
      begrunnelse: "awdawd",
      sistEndret: "2025-11-27T13:50:52.516568",
      avklartAv: {
        ident: "Z993622",
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
      id: "01997540-10a3-7da7-8864-928251de7845",
      kode: "BeregnetArbeidstid",
      tittel: "Sjekk om beregnet arbeidstid er korrekt",
      beskrivelse:
        "Du må sjekke om beregnet vanlig arbeidstid er korrekt og at det er brukt riktig beregningsregel. \nDu må også sjekke om ny vanlig arbeidstid er korrekt",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: false,
      begrunnelse: "awdawd",
      sistEndret: "2025-11-27T13:50:56.778494",
      avklartAv: {
        ident: "Z993622",
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
      opplysninger: [
        "0194881f-9410-7481-b263-4606fdd10ca9",
        "0194881f-9410-7481-b263-4606fdd10ca7",
        "0194881f-9410-7481-b263-4606fdd10ca8",
        "0194881f-940f-7af9-9387-052e028b29ee",
        "0194881f-940f-7af9-9387-052e028b29ed",
        "0194881f-940f-7af9-9387-052e028b29ec",
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
        "0194881f-9410-7481-b263-4606fdd10cbc",
        "0194881f-9421-766c-9dc6-41fe6c9a1e03",
        "0194881f-9421-766c-9dc6-41fe6c9a1e05",
        "0194881f-9410-7481-b263-4606fdd10cbd",
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
        "0194881f-9428-74d5-b160-f63a4c61a246",
        "0194881f-9428-74d5-b160-f63a4c61a247",
        "0194881f-9428-74d5-b160-f63a4c61a248",
        "0194881f-9428-74d5-b160-f63a4c61a24a",
        "0194881f-9428-74d5-b160-f63a4c61a24b",
        "0194881f-9428-74d5-b160-f63a4c61a242",
        "0194881f-9428-74d5-b160-f63a4c61a243",
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
      relevantForResultat: true,
      opplysninger: [
        "0194881f-9421-766c-9dc6-41fe6c9a1dff",
        "0194881f-9421-766c-9dc6-41fe6c9a1e00",
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
          id: "01997540-0ad3-763a-aa60-21546135aa52",
          opprettet: "2025-09-23T08:25:55.411886",
          opprinnelse: "Ny",
          verdi: {
            verdi: 15576616,
            datatype: "heltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:55.411881",
            meldingId: "09175956-1e3b-4cf5-bd4e-8ff69959eaef",
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
          id: "01997540-0ad3-763a-aa60-21546135aa54",
          opprettet: "2025-09-23T08:25:55.411898",
          opprinnelse: "Ny",
          verdi: {
            verdi: "ac4b34e5-8d8e-4410-a321-6123a99e56fb",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:55.411897",
            meldingId: "09175956-1e3b-4cf5-bd4e-8ff69959eaef",
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
          id: "01997540-0ad3-763a-aa60-21546135aa56",
          opprettet: "2025-09-23T08:25:55.411903",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-23",
          gyldigTilOgMed: "2025-09-23",
          verdi: {
            verdi: "SøknadInnsendtHendelse",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:55.411902",
            meldingId: "09175956-1e3b-4cf5-bd4e-8ff69959eaef",
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
          id: "01997540-0ad5-740c-a7e2-a29c69775277",
          opprettet: "2025-09-23T08:25:55.41301",
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
          id: "01997540-0d53-7497-90a6-ec2b5e6583fb",
          opprettet: "2025-09-23T08:25:56.051432",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2025-09-22",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:55.994642",
            meldingId: "63456478-d42b-438d-b1c2-4c925b9bf574",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01997540-0ad3-763a-aa60-21546135aa54"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-0d53-7497-90a6-ec2b5e6583fc",
          opprettet: "2025-09-23T08:25:56.051494",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2025-09-01",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:55.994822",
            meldingId: "63456478-d42b-438d-b1c2-4c925b9bf574",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01997540-0ad3-763a-aa60-21546135aa54"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-0d53-7497-90a6-ec2b5e6583fd",
          opprettet: "2025-09-23T08:25:56.051532",
          opprinnelse: "Ny",
          verdi: {
            verdi: "1993-07-02",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:55.994953",
            meldingId: "63456478-d42b-438d-b1c2-4c925b9bf574",
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
          id: "01997540-0d54-776e-8d23-2fc5ca1e96d0",
          opprettet: "2025-09-23T08:25:56.052083",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2025-09-22",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: [
              "01997540-0d53-7497-90a6-ec2b5e6583fb",
              "01997540-0d53-7497-90a6-ec2b5e6583fc",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-0d54-776e-8d23-2fc5ca1e96d1",
          opprettet: "2025-09-23T08:25:56.052104",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2060-07-02",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "LeggTilÅr",
            },
            opplysninger: [
              "01997540-0ad5-740c-a7e2-a29c69775277",
              "01997540-0d53-7497-90a6-ec2b5e6583fd",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-0d54-776e-8d23-2fc5ca1e96d3",
          opprettet: "2025-09-23T08:25:56.052206",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: "2025-09-22",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d0"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-0d54-776e-8d23-2fc5ca1e96d4",
          opprettet: "2025-09-23T08:25:56.052217",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2060-07-31",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteDagIMåned",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d1"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-0d54-776e-8d23-2fc5ca1e96d6",
          opprettet: "2025-09-23T08:25:56.052421",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "FørEllerLik",
            },
            opplysninger: [
              "01997540-0d54-776e-8d23-2fc5ca1e96d3",
              "01997540-0d54-776e-8d23-2fc5ca1e96d4",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-0d54-776e-8d23-2fc5ca1e96d8",
          opprettet: "2025-09-23T08:25:56.052552",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: "2025-09-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-0d54-776e-8d23-2fc5ca1e96d9",
          opprettet: "2025-09-23T08:25:56.05257",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 36,
            enhet: "måneder",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-0d54-776e-8d23-2fc5ca1e96da",
          opprettet: "2025-09-23T08:25:56.052708",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-0d54-776e-8d23-2fc5ca1e96db",
          opprettet: "2025-09-23T08:25:56.052734",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 1.5,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-0d54-776e-8d23-2fc5ca1e96dc",
          opprettet: "2025-09-23T08:25:56.052749",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 3,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-0d54-776e-8d23-2fc5ca1e96dd",
          opprettet: "2025-09-23T08:25:56.052759",
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
          id: "01997540-0d55-7355-8d71-64bfa2b79e97",
          opprettet: "2025-09-23T08:25:56.053141",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: "2025-09-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "FørsteArbeidsdag",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d8"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-0d55-7355-8d71-64bfa2b79e98",
          opprettet: "2025-09-23T08:25:56.053223",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 195240,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01997540-0d54-776e-8d23-2fc5ca1e96da",
              "01997540-0d54-776e-8d23-2fc5ca1e96db",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-0d55-7355-8d71-64bfa2b79e99",
          opprettet: "2025-09-23T08:25:56.053249",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01997540-0d54-776e-8d23-2fc5ca1e96da",
              "01997540-0d54-776e-8d23-2fc5ca1e96dc",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-0d55-7355-8d71-64bfa2b79e9a",
          opprettet: "2025-09-23T08:25:56.05326",
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
          id: "01997540-0d55-7355-8d71-64bfa2b79e9b",
          opprettet: "2025-09-23T08:25:56.053268",
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
          id: "01997540-0d55-7355-8d71-64bfa2b79e9c",
          opprettet: "2025-09-23T08:25:56.053275",
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
          id: "01997540-0d55-7355-8d71-64bfa2b79e9d",
          opprettet: "2025-09-23T08:25:56.053317",
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
          id: "01997540-0d55-7355-8d71-64bfa2b79e9f",
          opprettet: "2025-09-23T08:25:56.053571",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: "2025-08-31",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteavsluttendeKalenderMåned",
            },
            opplysninger: [
              "01997540-0d54-776e-8d23-2fc5ca1e96d3",
              "01997540-0d55-7355-8d71-64bfa2b79e97",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-0d55-7355-8d71-64bfa2b79ea1",
          opprettet: "2025-09-23T08:25:56.053783",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: "2022-09-01",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "TrekkFraMåned",
            },
            opplysninger: [
              "01997540-0d54-776e-8d23-2fc5ca1e96d9",
              "01997540-0d55-7355-8d71-64bfa2b79e9f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1092-7dee-b394-a33ca5c2392d",
          opprettet: "2025-09-23T08:25:56.882663",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:56.826191",
            meldingId: "fecb6283-6d9d-4fef-9eb6-f92386976078",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01997540-0ad3-763a-aa60-21546135aa54"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1092-7dee-b394-a33ca5c2392e",
          opprettet: "2025-09-23T08:25:56.882701",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:56.826463",
            meldingId: "fecb6283-6d9d-4fef-9eb6-f92386976078",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01997540-0ad3-763a-aa60-21546135aa54"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1092-7dee-b394-a33ca5c2392f",
          opprettet: "2025-09-23T08:25:56.882719",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:56.826575",
            meldingId: "fecb6283-6d9d-4fef-9eb6-f92386976078",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01997540-0ad3-763a-aa60-21546135aa54"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1092-7dee-b394-a33ca5c23930",
          opprettet: "2025-09-23T08:25:56.882748",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:56.826661",
            meldingId: "fecb6283-6d9d-4fef-9eb6-f92386976078",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01997540-0ad3-763a-aa60-21546135aa54"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1092-7dee-b394-a33ca5c23931",
          opprettet: "2025-09-23T08:25:56.882765",
          opprinnelse: "Ny",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:56.82676",
            meldingId: "fecb6283-6d9d-4fef-9eb6-f92386976078",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01997540-0ad3-763a-aa60-21546135aa54"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1092-7dee-b394-a33ca5c23932",
          opprettet: "2025-09-23T08:25:56.88278",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:56.826856",
            meldingId: "fecb6283-6d9d-4fef-9eb6-f92386976078",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01997540-0ad3-763a-aa60-21546135aa54"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1092-7dee-b394-a33ca5c23933",
          opprettet: "2025-09-23T08:25:56.882797",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:56.827051",
            meldingId: "fecb6283-6d9d-4fef-9eb6-f92386976078",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01997540-0ad3-763a-aa60-21546135aa54"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1092-7dee-b394-a33ca5c23934",
          opprettet: "2025-09-23T08:25:56.882815",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          gyldigTilOgMed: "2025-09-22",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:56.827206",
            meldingId: "fecb6283-6d9d-4fef-9eb6-f92386976078",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Register",
    },
    {
      opplysningTypeId: "0194881f-9444-7a73-a458-0af81c034d87",
      navn: "Forskutterte lønnsgarantimidler i form av dagpenger",
      datatype: "boolsk",
      perioder: [
        {
          id: "01997540-1092-7dee-b394-a33ca5c23935",
          opprettet: "2025-09-23T08:25:56.882834",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:56.827304",
            meldingId: "fecb6283-6d9d-4fef-9eb6-f92386976078",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01997540-0ad3-763a-aa60-21546135aa54"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1092-7dee-b394-a33ca5c23936",
          opprettet: "2025-09-23T08:25:56.882851",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:56.827384",
            meldingId: "fecb6283-6d9d-4fef-9eb6-f92386976078",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01997540-0ad3-763a-aa60-21546135aa54"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1092-7dee-b394-a33ca5c23937",
          opprettet: "2025-09-23T08:25:56.882868",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:56.827476",
            meldingId: "fecb6283-6d9d-4fef-9eb6-f92386976078",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01997540-0ad3-763a-aa60-21546135aa54"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1092-7dee-b394-a33ca5c23938",
          opprettet: "2025-09-23T08:25:56.88289",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: "01K5TM040QSNVJGSKRY3F13061",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:56.827543",
            meldingId: "fecb6283-6d9d-4fef-9eb6-f92386976078",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: [
              "01997540-0d54-776e-8d23-2fc5ca1e96d3",
              "01997540-0d55-7355-8d71-64bfa2b79e9f",
              "01997540-0d55-7355-8d71-64bfa2b79ea1",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1093-7c4e-a9d4-84749d0bce37",
          opprettet: "2025-09-23T08:25:56.883475",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: "01K5TM040QSNVJGSKRY3F13061",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["01997540-1092-7dee-b394-a33ca5c23938"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1093-7c4e-a9d4-84749d0bce38",
          opprettet: "2025-09-23T08:25:56.883503",
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
              "01997540-0d55-7355-8d71-64bfa2b79e9a",
              "01997540-1092-7dee-b394-a33ca5c2392d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1093-7c4e-a9d4-84749d0bce39",
          opprettet: "2025-09-23T08:25:56.883517",
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
              "01997540-0d55-7355-8d71-64bfa2b79e9b",
              "01997540-1092-7dee-b394-a33ca5c2392e",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1093-7c4e-a9d4-84749d0bce3a",
          opprettet: "2025-09-23T08:25:56.883529",
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
              "01997540-0d55-7355-8d71-64bfa2b79e9c",
              "01997540-1092-7dee-b394-a33ca5c2392f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1093-7c4e-a9d4-84749d0bce3b",
          opprettet: "2025-09-23T08:25:56.883541",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: ["01997540-1092-7dee-b394-a33ca5c23930"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1093-7c4e-a9d4-84749d0bce3c",
          opprettet: "2025-09-23T08:25:56.883556",
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
              "01997540-0d55-7355-8d71-64bfa2b79e9d",
              "01997540-1092-7dee-b394-a33ca5c23931",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1093-7c4e-a9d4-84749d0bce3d",
          opprettet: "2025-09-23T08:25:56.88357",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          gyldigTilOgMed: "2025-09-22",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["01997540-1092-7dee-b394-a33ca5c23934"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1093-7c4e-a9d4-84749d0bce3e",
          opprettet: "2025-09-23T08:25:56.883586",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: [
              "01997540-1092-7dee-b394-a33ca5c23932",
              "01997540-1092-7dee-b394-a33ca5c23933",
              "01997540-1092-7dee-b394-a33ca5c23935",
              "01997540-1092-7dee-b394-a33ca5c23936",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1093-7c4e-a9d4-84749d0bce3f",
          opprettet: "2025-09-23T08:25:56.883599",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["01997540-1092-7dee-b394-a33ca5c23937"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1093-7c4e-a9d4-84749d0bce41",
          opprettet: "2025-09-23T08:25:56.883983",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01997540-1093-7c4e-a9d4-84749d0bce37"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1094-7ee3-8e48-34952c720222",
          opprettet: "2025-09-23T08:25:56.884122",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01997540-1093-7c4e-a9d4-84749d0bce37"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1094-7ee3-8e48-34952c720223",
          opprettet: "2025-09-23T08:25:56.884154",
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
              "01997540-1093-7c4e-a9d4-84749d0bce38",
              "01997540-1093-7c4e-a9d4-84749d0bce39",
              "01997540-1093-7c4e-a9d4-84749d0bce3a",
              "01997540-1093-7c4e-a9d4-84749d0bce3b",
              "01997540-1093-7c4e-a9d4-84749d0bce3c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1094-7ee3-8e48-34952c720224",
          opprettet: "2025-09-23T08:25:56.884174",
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
              "01997540-1092-7dee-b394-a33ca5c23932",
              "01997540-1093-7c4e-a9d4-84749d0bce3e",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "01948d43-e218-76f1-b29b-7e604241d98a",
      navn: "Oppfyller kravet til verneplikt",
      datatype: "boolsk",
      perioder: [
        {
          id: "01997540-1094-7ee3-8e48-34952c720225",
          opprettet: "2025-09-23T08:25:56.88419",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["01997540-1092-7dee-b394-a33ca5c23937"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-943f-78d9-b874-00a4944c54f1",
      navn: "Oppfyller vilkåret om å ikke motta andre fulle ytelser",
      datatype: "boolsk",
      perioder: [
        {
          id: "01997540-1094-7ee3-8e48-34952c720227",
          opprettet: "2025-09-23T08:25:56.884658",
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
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f0424a",
      navn: "Arbeidsinntekt er over kravet for siste 12 måneder",
      datatype: "boolsk",
      perioder: [
        {
          id: "01997540-1094-7ee3-8e48-34952c720228",
          opprettet: "2025-09-23T08:25:56.884709",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01997540-0d55-7355-8d71-64bfa2b79e98",
              "01997540-1093-7c4e-a9d4-84749d0bce41",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1094-7ee3-8e48-34952c720229",
          opprettet: "2025-09-23T08:25:56.884738",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01997540-0d55-7355-8d71-64bfa2b79e99",
              "01997540-1094-7ee3-8e48-34952c720222",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
          },
        },
      ],
      synlig: true,
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
          id: "01997540-1094-7ee3-8e48-34952c72022a",
          opprettet: "2025-09-23T08:25:56.884758",
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
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d54c",
      navn: "Bruker er medlem av folketrygden",
      datatype: "boolsk",
      perioder: [
        {
          id: "01997540-1094-7ee3-8e48-34952c72022b",
          opprettet: "2025-09-23T08:25:56.884775",
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
      opplysningTypeId: "0194881f-9444-7a73-a458-0af81c034d8b",
      navn: "Rettighetstype",
      datatype: "boolsk",
      perioder: [
        {
          id: "01997540-1094-7ee3-8e48-34952c72022c",
          opprettet: "2025-09-23T08:25:56.884806",
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
              "01997540-1092-7dee-b394-a33ca5c23933",
              "01997540-1092-7dee-b394-a33ca5c23935",
              "01997540-1092-7dee-b394-a33ca5c23936",
              "01997540-1094-7ee3-8e48-34952c720224",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1094-7ee3-8e48-34952c72022d",
          opprettet: "2025-09-23T08:25:56.884908",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1094-7ee3-8e48-34952c72022e",
          opprettet: "2025-09-23T08:25:56.884945",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: "01K5TM040QSNVJGSKRY3F13061",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["01997540-1092-7dee-b394-a33ca5c23938"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1094-7ee3-8e48-34952c72022f",
          opprettet: "2025-09-23T08:25:56.884969",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 6,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1094-7ee3-8e48-34952c720230",
          opprettet: "2025-09-23T08:25:56.884989",
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
          id: "01997540-1095-7035-a5e5-e57487929a6c",
          opprettet: "2025-09-23T08:25:56.885013",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 3,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1095-7035-a5e5-e57487929a6d",
          opprettet: "2025-09-23T08:25:56.885038",
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
          id: "01997540-1095-7035-a5e5-e57487929a6e",
          opprettet: "2025-09-23T08:25:56.885093",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 0.0024,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1095-7035-a5e5-e57487929a6f",
          opprettet: "2025-09-23T08:25:56.885154",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 37,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1095-7035-a5e5-e57487929a70",
          opprettet: "2025-09-23T08:25:56.885184",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 0.9,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1095-7035-a5e5-e57487929a71",
          opprettet: "2025-09-23T08:25:56.885207",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 260,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1095-7035-a5e5-e57487929a72",
          opprettet: "2025-09-23T08:25:56.885228",
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
          id: "01997540-1095-7035-a5e5-e57487929a73",
          opprettet: "2025-09-23T08:25:56.885249",
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
          id: "01997540-1095-7035-a5e5-e57487929a74",
          opprettet: "2025-09-23T08:25:56.885272",
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
          id: "01997540-1095-7035-a5e5-e57487929a75",
          opprettet: "2025-09-23T08:25:56.885326",
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
          id: "01997540-1095-7035-a5e5-e57487929a76",
          opprettet: "2025-09-23T08:25:56.885344",
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
          id: "01997540-1095-7035-a5e5-e57487929a77",
          opprettet: "2025-09-23T08:25:56.885362",
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
          id: "01997540-1095-7035-a5e5-e57487929a78",
          opprettet: "2025-09-23T08:25:56.885379",
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
          id: "01997540-1095-7035-a5e5-e57487929a79",
          opprettet: "2025-09-23T08:25:56.885397",
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
          id: "01997540-1095-7035-a5e5-e57487929a7a",
          opprettet: "2025-09-23T08:25:56.885415",
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
          id: "01997540-1095-7035-a5e5-e57487929a7b",
          opprettet: "2025-09-23T08:25:56.885434",
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
          id: "01997540-1095-7035-a5e5-e57487929a7c",
          opprettet: "2025-09-23T08:25:56.885453",
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
          id: "01997540-1095-7035-a5e5-e57487929a7d",
          opprettet: "2025-09-23T08:25:56.88547",
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
          id: "01997540-1095-7035-a5e5-e57487929a7e",
          opprettet: "2025-09-23T08:25:56.885495",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 40,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1095-7035-a5e5-e57487929a7f",
          opprettet: "2025-09-23T08:25:56.885516",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 37.5,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1095-7035-a5e5-e57487929a80",
          opprettet: "2025-09-23T08:25:56.885533",
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
          id: "01997540-1095-7035-a5e5-e57487929a81",
          opprettet: "2025-09-23T08:25:56.885551",
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
          id: "01997540-1095-7035-a5e5-e57487929a82",
          opprettet: "2025-09-23T08:25:56.885573",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 40,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1095-7035-a5e5-e57487929a83",
          opprettet: "2025-09-23T08:25:56.885593",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 50,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1095-7035-a5e5-e57487929a84",
          opprettet: "2025-09-23T08:25:56.885612",
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
          id: "01997540-1095-7035-a5e5-e57487929a85",
          opprettet: "2025-09-23T08:25:56.885632",
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
          id: "01997540-1095-7035-a5e5-e57487929a86",
          opprettet: "2025-09-23T08:25:56.885651",
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
          id: "01997540-1095-7035-a5e5-e57487929a87",
          opprettet: "2025-09-23T08:25:56.885672",
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
          id: "01997540-1095-7035-a5e5-e57487929a88",
          opprettet: "2025-09-23T08:25:56.885691",
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
          id: "01997540-1095-7035-a5e5-e57487929a89",
          opprettet: "2025-09-23T08:25:56.88571",
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
          id: "01997540-1095-7035-a5e5-e57487929a8a",
          opprettet: "2025-09-23T08:25:56.88573",
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
          id: "01997540-1095-7035-a5e5-e57487929a8b",
          opprettet: "2025-09-23T08:25:56.88575",
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
          id: "01997540-1095-7035-a5e5-e57487929a8c",
          opprettet: "2025-09-23T08:25:56.88577",
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
          id: "01997540-1095-7035-a5e5-e57487929a8d",
          opprettet: "2025-09-23T08:25:56.885792",
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
          id: "01997540-1095-7035-a5e5-e57487929a8e",
          opprettet: "2025-09-23T08:25:56.885813",
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
      opplysningTypeId: "0194881f-9413-77ce-92ec-d29700f0424c",
      navn: "Oppfyller kravet til minsteinntekt",
      datatype: "boolsk",
      perioder: [
        {
          id: "01997540-1096-784d-80a6-56221a525158",
          opprettet: "2025-09-23T08:25:56.88646",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01997540-1094-7ee3-8e48-34952c720228",
              "01997540-1094-7ee3-8e48-34952c720229",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1096-784d-80a6-56221a525159",
          opprettet: "2025-09-23T08:25:56.886519",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["01997540-1094-7ee3-8e48-34952c72022b"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1096-784d-80a6-56221a52515a",
          opprettet: "2025-09-23T08:25:56.886569",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: "01K5TM040QSNVJGSKRY3F13061",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Oppjuster",
            },
            opplysninger: [
              "01997540-1094-7ee3-8e48-34952c72022d",
              "01997540-1094-7ee3-8e48-34952c72022e",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1096-784d-80a6-56221a52515b",
          opprettet: "2025-09-23T08:25:56.886651",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01997540-1094-7ee3-8e48-34952c72022d",
              "01997540-1094-7ee3-8e48-34952c72022f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1096-784d-80a6-56221a52515c",
          opprettet: "2025-09-23T08:25:56.886702",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01997540-1094-7ee3-8e48-34952c72022d",
              "01997540-1095-7035-a5e5-e57487929a6c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1096-784d-80a6-56221a52515d",
          opprettet: "2025-09-23T08:25:56.886743",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["01997540-1095-7035-a5e5-e57487929a76"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1096-784d-80a6-56221a52515e",
          opprettet: "2025-09-23T08:25:56.886787",
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
              "01997540-1095-7035-a5e5-e57487929a7b",
              "01997540-1095-7035-a5e5-e57487929a7c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1096-784d-80a6-56221a52515f",
          opprettet: "2025-09-23T08:25:56.886834",
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
              "01997540-1095-7035-a5e5-e57487929a80",
              "01997540-1095-7035-a5e5-e57487929a81",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1096-784d-80a6-56221a525160",
          opprettet: "2025-09-23T08:25:56.886877",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
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
              "01997540-1092-7dee-b394-a33ca5c23936",
              "01997540-1095-7035-a5e5-e57487929a82",
              "01997540-1095-7035-a5e5-e57487929a83",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1096-784d-80a6-56221a525161",
          opprettet: "2025-09-23T08:25:56.886914",
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
              "01997540-1095-7035-a5e5-e57487929a84",
              "01997540-1095-7035-a5e5-e57487929a85",
              "01997540-1095-7035-a5e5-e57487929a86",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1096-784d-80a6-56221a525162",
          opprettet: "2025-09-23T08:25:56.886947",
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
              "01997540-1095-7035-a5e5-e57487929a88",
              "01997540-1095-7035-a5e5-e57487929a89",
              "01997540-1095-7035-a5e5-e57487929a8a",
              "01997540-1095-7035-a5e5-e57487929a8b",
              "01997540-1095-7035-a5e5-e57487929a8c",
              "01997540-1095-7035-a5e5-e57487929a8d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1096-784d-80a6-56221a525163",
          opprettet: "2025-09-23T08:25:56.886979",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: ["01997540-1095-7035-a5e5-e57487929a8e"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1097-799b-9da7-7380726e96e9",
          opprettet: "2025-09-23T08:25:56.887902",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01997540-1096-784d-80a6-56221a52515a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1098-7aa7-a883-372ef071ad69",
          opprettet: "2025-09-23T08:25:56.888011",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01997540-1096-784d-80a6-56221a52515a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1098-7aa7-a883-372ef071ad6a",
          opprettet: "2025-09-23T08:25:56.888107",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01997540-1096-784d-80a6-56221a52515a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1098-7aa7-a883-372ef071ad6b",
          opprettet: "2025-09-23T08:25:56.888145",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "01997540-1093-7c4e-a9d4-84749d0bce3f",
              "01997540-1095-7035-a5e5-e57487929a6d",
              "01997540-1096-784d-80a6-56221a52515c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1098-7aa7-a883-372ef071ad6c",
          opprettet: "2025-09-23T08:25:56.888176",
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
              "01997540-1095-7035-a5e5-e57487929a77",
              "01997540-1095-7035-a5e5-e57487929a78",
              "01997540-1096-784d-80a6-56221a52515d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1098-7aa7-a883-372ef071ad6e",
          opprettet: "2025-09-23T08:25:56.888887",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01997540-1096-784d-80a6-56221a52515b",
              "01997540-1097-799b-9da7-7380726e96e9",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1098-7aa7-a883-372ef071ad6f",
          opprettet: "2025-09-23T08:25:56.888924",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01997540-1096-784d-80a6-56221a52515b",
              "01997540-1097-799b-9da7-7380726e96e9",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1098-7aa7-a883-372ef071ad70",
          opprettet: "2025-09-23T08:25:56.888958",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01997540-1096-784d-80a6-56221a52515b",
              "01997540-1098-7aa7-a883-372ef071ad69",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1098-7aa7-a883-372ef071ad71",
          opprettet: "2025-09-23T08:25:56.888988",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01997540-1096-784d-80a6-56221a52515b",
              "01997540-1098-7aa7-a883-372ef071ad6a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1099-722b-a56a-683f7315e4a2",
          opprettet: "2025-09-23T08:25:56.889497",
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
              "01997540-1095-7035-a5e5-e57487929a72",
              "01997540-1095-7035-a5e5-e57487929a73",
              "01997540-1095-7035-a5e5-e57487929a74",
              "01997540-1095-7035-a5e5-e57487929a75",
              "01997540-1095-7035-a5e5-e57487929a79",
              "01997540-1095-7035-a5e5-e57487929a7a",
              "01997540-1098-7aa7-a883-372ef071ad6c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-109a-7093-9119-98f5dd75654c",
          opprettet: "2025-09-23T08:25:56.890876",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SumAv",
            },
            opplysninger: [
              "01997540-1098-7aa7-a883-372ef071ad6f",
              "01997540-1098-7aa7-a883-372ef071ad70",
              "01997540-1098-7aa7-a883-372ef071ad71",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-109c-7092-8bd1-d41d7b34184c",
          opprettet: "2025-09-23T08:25:56.892043",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "01997540-1094-7ee3-8e48-34952c720230",
              "01997540-109a-7093-9119-98f5dd75654c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-109c-7092-8bd1-d41d7b34184e",
          opprettet: "2025-09-23T08:25:56.892774",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "01997540-1098-7aa7-a883-372ef071ad6e",
              "01997540-109c-7092-8bd1-d41d7b34184c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-109d-7dd8-9e05-ca6b1b7bf4a8",
          opprettet: "2025-09-23T08:25:56.893691",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["01997540-109c-7092-8bd1-d41d7b34184e"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-109e-7215-8322-5faec1bac138",
          opprettet: "2025-09-23T08:25:56.894385",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "01997540-1098-7aa7-a883-372ef071ad6b",
              "01997540-109d-7dd8-9e05-ca6b1b7bf4a8",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-109e-7215-8322-5faec1bac139",
          opprettet: "2025-09-23T08:25:56.894442",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "01997540-1098-7aa7-a883-372ef071ad6b",
              "01997540-109d-7dd8-9e05-ca6b1b7bf4a8",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
          },
        },
      ],
      synlig: true,
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
          id: "01997540-109f-7c77-a966-1d08c3bb76ca",
          opprettet: "2025-09-23T08:25:56.895119",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 937.152,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01997540-1095-7035-a5e5-e57487929a6e",
              "01997540-109e-7215-8322-5faec1bac138",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-109f-7c77-a966-1d08c3bb76cb",
          opprettet: "2025-09-23T08:25:56.895162",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 351432,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01997540-1095-7035-a5e5-e57487929a70",
              "01997540-109e-7215-8322-5faec1bac138",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-109f-7c77-a966-1d08c3bb76cc",
          opprettet: "2025-09-23T08:25:56.895198",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
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
              "01997540-1095-7035-a5e5-e57487929a7f",
              "01997540-1095-7035-a5e5-e57487929a80",
              "01997540-109e-7215-8322-5faec1bac139",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-109f-7c77-a966-1d08c3bb76ce",
          opprettet: "2025-09-23T08:25:56.895931",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 937,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["01997540-109f-7c77-a966-1d08c3bb76ca"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-10a0-7141-8269-b4552a1d7f2a",
          opprettet: "2025-09-23T08:25:56.896016",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 1351.6615384615384,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "01997540-1095-7035-a5e5-e57487929a71",
              "01997540-109f-7c77-a966-1d08c3bb76cb",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-10a0-7141-8269-b4552a1d7f2b",
          opprettet: "2025-09-23T08:25:56.89606",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
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
              "01997540-1092-7dee-b394-a33ca5c23931",
              "01997540-1095-7035-a5e5-e57487929a7e",
              "01997540-1096-784d-80a6-56221a52515f",
              "01997540-109f-7c77-a966-1d08c3bb76cc",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-10a0-7141-8269-b4552a1d7f2d",
          opprettet: "2025-09-23T08:25:56.896777",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 1352,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["01997540-10a0-7141-8269-b4552a1d7f2a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-10a0-7141-8269-b4552a1d7f2e",
          opprettet: "2025-09-23T08:25:56.896823",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "SjekkAvTerskel",
            },
            opplysninger: [
              "01997540-1095-7035-a5e5-e57487929a7d",
              "01997540-1096-784d-80a6-56221a525160",
              "01997540-10a0-7141-8269-b4552a1d7f2b",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a53-757c-8ba5-13c1a413e46d",
          opprettet: "2025-09-23T08:25:59.379151",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:59.319962",
            meldingId: "84e7083d-c50f-4fb0-8977-74e2623f9f82",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01997540-0ad3-763a-aa60-21546135aa54"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a53-757c-8ba5-13c1a413e46e",
          opprettet: "2025-09-23T08:25:59.379247",
          opprinnelse: "Ny",
          verdi: {
            verdi: [],
            datatype: "barn",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:59.320116",
            meldingId: "84e7083d-c50f-4fb0-8977-74e2623f9f82",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01997540-0ad3-763a-aa60-21546135aa54"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a53-757c-8ba5-13c1a413e46f",
          opprettet: "2025-09-23T08:25:59.379353",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:59.32024",
            meldingId: "84e7083d-c50f-4fb0-8977-74e2623f9f82",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01997540-0ad3-763a-aa60-21546135aa54"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a53-757c-8ba5-13c1a413e470",
          opprettet: "2025-09-23T08:25:59.379425",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:59.320362",
            meldingId: "84e7083d-c50f-4fb0-8977-74e2623f9f82",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01997540-0ad3-763a-aa60-21546135aa54"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a53-757c-8ba5-13c1a413e471",
          opprettet: "2025-09-23T08:25:59.379474",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:59.320448",
            meldingId: "84e7083d-c50f-4fb0-8977-74e2623f9f82",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a53-757c-8ba5-13c1a413e472",
          opprettet: "2025-09-23T08:25:59.379527",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:59.320543",
            meldingId: "84e7083d-c50f-4fb0-8977-74e2623f9f82",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a53-757c-8ba5-13c1a413e473",
          opprettet: "2025-09-23T08:25:59.379576",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:59.320634",
            meldingId: "84e7083d-c50f-4fb0-8977-74e2623f9f82",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a53-757c-8ba5-13c1a413e474",
          opprettet: "2025-09-23T08:25:59.379628",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:59.320691",
            meldingId: "84e7083d-c50f-4fb0-8977-74e2623f9f82",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a53-757c-8ba5-13c1a413e475",
          opprettet: "2025-09-23T08:25:59.379677",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:59.320745",
            meldingId: "84e7083d-c50f-4fb0-8977-74e2623f9f82",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a53-757c-8ba5-13c1a413e476",
          opprettet: "2025-09-23T08:25:59.379728",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-23T08:25:59.320793",
            meldingId: "84e7083d-c50f-4fb0-8977-74e2623f9f82",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01997540-0d54-776e-8d23-2fc5ca1e96d3"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a55-70a3-a463-c469f630fd38",
          opprettet: "2025-09-23T08:25:59.381005",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["01997540-1a53-757c-8ba5-13c1a413e46d"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a55-70a3-a463-c469f630fd39",
          opprettet: "2025-09-23T08:25:59.381059",
          opprinnelse: "Ny",
          verdi: {
            verdi: 0,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "AntallAv",
            },
            opplysninger: ["01997540-1a53-757c-8ba5-13c1a413e46e"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a55-70a3-a463-c469f630fd3a",
          opprettet: "2025-09-23T08:25:59.381126",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01997540-1096-784d-80a6-56221a52515d",
              "01997540-1a53-757c-8ba5-13c1a413e471",
              "01997540-1a53-757c-8ba5-13c1a413e472",
              "01997540-1a53-757c-8ba5-13c1a413e473",
              "01997540-1a53-757c-8ba5-13c1a413e474",
              "01997540-1a53-757c-8ba5-13c1a413e475",
              "01997540-1a53-757c-8ba5-13c1a413e476",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a55-70a3-a463-c469f630fd3b",
          opprettet: "2025-09-23T08:25:59.381168",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: ["01997540-1a53-757c-8ba5-13c1a413e46f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a55-70a3-a463-c469f630fd3c",
          opprettet: "2025-09-23T08:25:59.381206",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["01997540-1a53-757c-8ba5-13c1a413e470"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a55-70a3-a463-c469f630fd3d",
          opprettet: "2025-09-23T08:25:59.381242",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErUsann",
            },
            opplysninger: ["01997540-1a53-757c-8ba5-13c1a413e470"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a56-7167-b52a-5c7601694b88",
          opprettet: "2025-09-23T08:25:59.382088",
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
              "01997540-1094-7ee3-8e48-34952c72022a",
              "01997540-1a55-70a3-a463-c469f630fd38",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a56-7167-b52a-5c7601694b89",
          opprettet: "2025-09-23T08:25:59.382181",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01997540-1095-7035-a5e5-e57487929a6f",
              "01997540-1a55-70a3-a463-c469f630fd39",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a56-7167-b52a-5c7601694b8a",
          opprettet: "2025-09-23T08:25:59.382233",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "01997540-1095-7035-a5e5-e57487929a87",
              "01997540-1096-784d-80a6-56221a525161",
              "01997540-10a0-7141-8269-b4552a1d7f2e",
              "01997540-1a55-70a3-a463-c469f630fd3b",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a56-7167-b52a-5c7601694b8b",
          opprettet: "2025-09-23T08:25:59.382298",
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
              "01997540-1096-784d-80a6-56221a525162",
              "01997540-1a55-70a3-a463-c469f630fd3c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a57-73c5-854a-174c738a3abf",
          opprettet: "2025-09-23T08:25:59.383105",
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
              "01997540-1096-784d-80a6-56221a525159",
              "01997540-1a56-7167-b52a-5c7601694b88",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a57-73c5-854a-174c738a3ac0",
          opprettet: "2025-09-23T08:25:59.383237",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 937,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "01997540-109f-7c77-a966-1d08c3bb76ce",
              "01997540-1a56-7167-b52a-5c7601694b89",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a57-73c5-854a-174c738a3ac1",
          opprettet: "2025-09-23T08:25:59.383314",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01997540-1095-7035-a5e5-e57487929a6f",
              "01997540-1a56-7167-b52a-5c7601694b89",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a57-73c5-854a-174c738a3ac2",
          opprettet: "2025-09-23T08:25:59.38336",
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
              "01997540-1a55-70a3-a463-c469f630fd3d",
              "01997540-1a56-7167-b52a-5c7601694b8b",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a58-7b8b-b0b4-7bfa41fe87df",
          opprettet: "2025-09-23T08:25:59.384355",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "01997540-10a0-7141-8269-b4552a1d7f2d",
              "01997540-1a57-73c5-854a-174c738a3ac0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
          },
        },
      ],
      synlig: false,
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
          id: "01997540-1a59-7447-bcd4-f200cee4124a",
          opprettet: "2025-09-23T08:25:59.385423",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 937,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "01997540-109f-7c77-a966-1d08c3bb76ce",
              "01997540-1a58-7b8b-b0b4-7bfa41fe87df",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a5a-73ca-a2e0-89da909f9400",
          opprettet: "2025-09-23T08:25:59.386326",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01997540-1099-722b-a56a-683f7315e4a2",
              "01997540-1a59-7447-bcd4-f200cee4124a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a5a-73ca-a2e0-89da909f9401",
          opprettet: "2025-09-23T08:25:59.38644",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: 937,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "01997540-1099-722b-a56a-683f7315e4a2",
              "01997540-1a59-7447-bcd4-f200cee4124a",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "01997540-1a5b-7659-b55e-0ce01edf4527",
          opprettet: "2025-09-23T08:25:59.387519",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01997540-1a57-73c5-854a-174c738a3ac1",
              "01997540-1a5a-73ca-a2e0-89da909f9400",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "019ac55d-e68b-714e-9c18-f112816213e6",
          opprettet: "2025-11-27T13:50:56.779905",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          gyldigTilOgMed: "2025-09-22",
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
  ],
  forslagOm: "Avslag",
};
