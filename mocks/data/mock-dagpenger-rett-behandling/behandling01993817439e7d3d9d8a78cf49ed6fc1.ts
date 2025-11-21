import type { components } from "../../../openapi/behandling-typer";

export const behandling01993817439e7d3d9d8a78cf49ed6fc1: components["schemas"]["Behandling"] = {
  behandlingId: "01993817-439e-7d3d-9d8a-78cf49ed6fc1",
  behandletHendelse: {
    datatype: "UUID",
    id: "0de73f03-5a38-43f3-960c-1d66e586ce8f",
    type: "Søknad",
    skjedde: "2025-09-11",
  },
  behandlingskjedeId: "01993817-439e-7d3d-9d8a-78cf49ed6fc1",
  automatisk: false,
  ident: "13856996896",
  rettighetsperioder: [
    {
      fraOgMed: "2025-09-11",
      harRett: true,
      opprinnelse: "Ny",
    },
  ],
  kreverTotrinnskontroll: true,
  tilstand: "TilBeslutning",
  avklaringer: [
    {
      id: "01993817-43a0-7abc-8230-ebb38a9a3802",
      kode: "HarTilleggsopplysninger",
      tittel: "Sjekk hva bruker har oppgitt som tilleggsopplysninger i søknaden",
      beskrivelse: "Du må vurdere om tilleggsopplysninger har betydning for saken",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-09-11T11:24:33.015204",
      regelsett: [],
    },
    {
      id: "01993817-44ee-7d94-b917-99577b9bb004",
      kode: "HattLukkedeSakerSiste8Uker",
      tittel: "Sjekk om nylig lukkede saker i Arena kan påvirke behandlingen",
      beskrivelse:
        "Personen har lukkede saker i Arena siste 8 uker. Har vi nylig gitt avslag bør vi sjekke om det er nødvendig med ekstra \nveiledning.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-09-11T11:24:33.615286",
      regelsett: [],
    },
    {
      id: "01993817-44ee-7d94-b917-99577b9bb006",
      kode: "MuligGjenopptak",
      tittel: "Sjekk om det er sak som kan gjenopptas i Arena",
      beskrivelse:
        "Personen har åpne saker i Arena som kan være gjenopptak. Saker som skal gjenopptas må håndteres i Arena.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-09-11T11:24:33.783544",
      regelsett: [],
    },
    {
      id: "01993817-4a4b-7238-90f6-2344a1d19f34",
      kode: "EØSArbeid",
      tittel: "Sjekk om arbeid i EØS fører til sammenlegging",
      beskrivelse:
        "Personen har oppgitt arbeid fra EØS i søknaden. Det må vurderes om det skal være sammenlegging.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-09-11T11:24:34.951869",
      regelsett: [],
    },
    {
      id: "01993817-4a4b-7238-90f6-2344a1d19f38",
      kode: "InntektNesteKalendermåned",
      tittel: "Sjekk om inntekt for neste måned er relevant",
      beskrivelse:
        "Personen har inntekt som tilhører neste inntektsperiode. Vurder om det er tilstrekkelige inntekter til at utfallet vil \nendre seg i neste inntektsperiode.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: false,
      begrunnelse: "ok",
      sistEndret: "2025-09-18T13:55:51.615568",
      avklartAv: {
        ident: "Z994854",
      },
      regelsett: ["Minsteinntekt"],
    },
    {
      id: "01993817-4a4b-7238-90f6-2344a1d19f3a",
      kode: "JobbetUtenforNorge",
      tittel: "Sjekk om arbeid utenfor Norge påvirker retten til dagpenger",
      beskrivelse:
        "Personen har oppgitt arbeid utenfor Norge i søknaden. Sjekk om arbeidsforholdene som er oppgitt i søknaden skal være \nmed i vurderingen av retten til dagpenger.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-09-11T11:24:35.100249",
      regelsett: [],
    },
    {
      id: "01993817-4a4b-7238-90f6-2344a1d19f40",
      kode: "BeregnetArbeidstid",
      tittel: "Sjekk om beregnet arbeidstid er korrekt",
      beskrivelse:
        "Du må sjekke om beregnet vanlig arbeidstid er korrekt og at det er brukt riktig beregningsregel. \nDu må også sjekke om ny vanlig arbeidstid er korrekt",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: false,
      begrunnelse: "ok",
      sistEndret: "2025-09-18T13:55:56.303999",
      avklartAv: {
        ident: "Z994854",
      },
      regelsett: ["Tap av arbeidsinntekt og arbeidstid"],
    },
    {
      id: "01993817-51a3-751c-9c3b-75d60691dd23",
      kode: "SjekkPrøvingsdato",
      tittel: "Sjekk om valgt prøvingsdato er riktig",
      beskrivelse: "Sjekk at valgt prøvingsdato er riktig",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: false,
      begrunnelse: "ok",
      sistEndret: "2025-09-18T13:55:46.752992",
      avklartAv: {
        ident: "Z994854",
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
      relevantForResultat: false,
      type: "Fastsettelse",
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
      perioder: [
        {
          id: "01993817-439e-7d3d-9d8a-78cf49ed6fbc",
          opprettet: "2025-09-11T11:24:32.798201",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: 15538405,
            datatype: "heltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:32.798169",
            meldingId: "08e4db81-e611-4259-a540-137300f51801",
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
          id: "01993817-439e-7d3d-9d8a-78cf49ed6fbe",
          opprettet: "2025-09-11T11:24:32.798227",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: "0de73f03-5a38-43f3-960c-1d66e586ce8f",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:32.798226",
            meldingId: "08e4db81-e611-4259-a540-137300f51801",
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
          id: "01993817-439e-7d3d-9d8a-78cf49ed6fc0",
          opprettet: "2025-09-11T11:24:32.798237",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          gyldigTilOgMed: "2025-09-11",
          verdi: {
            verdi: "SøknadInnsendtHendelse",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:32.798237",
            meldingId: "08e4db81-e611-4259-a540-137300f51801",
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
          id: "01993817-43a0-7abc-8230-ebb38a9a37fe",
          opprettet: "2025-09-11T11:24:32.800187",
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
          id: "01993817-44e9-75b3-ad7b-345d4f244084",
          opprettet: "2025-09-11T11:24:33.129711",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2025-09-11",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:33.079795",
            meldingId: "a8d85fc1-2ff0-49aa-985d-cfb187b6c85b",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993817-439e-7d3d-9d8a-78cf49ed6fbe"],
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
          id: "01993817-44e9-75b3-ad7b-345d4f244085",
          opprettet: "2025-09-11T11:24:33.129806",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2025-09-11",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:33.079988",
            meldingId: "a8d85fc1-2ff0-49aa-985d-cfb187b6c85b",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993817-439e-7d3d-9d8a-78cf49ed6fbe"],
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
          id: "01993817-44e9-75b3-ad7b-345d4f244086",
          opprettet: "2025-09-11T11:24:33.129847",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: "1969-05-13",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:33.080089",
            meldingId: "a8d85fc1-2ff0-49aa-985d-cfb187b6c85b",
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
          id: "01993817-44ea-73d9-840c-8eb267235af8",
          opprettet: "2025-09-11T11:24:33.130516",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2025-09-11",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: [
              "01993817-44e9-75b3-ad7b-345d4f244084",
              "01993817-44e9-75b3-ad7b-345d4f244085",
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
          id: "01993817-44ea-73d9-840c-8eb267235af9",
          opprettet: "2025-09-11T11:24:33.130545",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2036-05-13",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "LeggTilÅr",
            },
            opplysninger: [
              "01993817-43a0-7abc-8230-ebb38a9a37fe",
              "01993817-44e9-75b3-ad7b-345d4f244086",
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
          id: "01993817-44ea-73d9-840c-8eb267235afb",
          opprettet: "2025-09-11T11:24:33.130746",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: "2025-09-11",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235af8"],
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
          id: "01993817-44ea-73d9-840c-8eb267235afc",
          opprettet: "2025-09-11T11:24:33.130856",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2036-05-31",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteDagIMåned",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235af9"],
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
          id: "01993817-44eb-74bf-93df-e91f5119da50",
          opprettet: "2025-09-11T11:24:33.131034",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "FørEllerLik",
            },
            opplysninger: [
              "01993817-44ea-73d9-840c-8eb267235afb",
              "01993817-44ea-73d9-840c-8eb267235afc",
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
          id: "01993817-44eb-74bf-93df-e91f5119da52",
          opprettet: "2025-09-11T11:24:33.131292",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: "2025-09-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-44eb-74bf-93df-e91f5119da53",
          opprettet: "2025-09-11T11:24:33.131314",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 36,
            enhet: "måneder",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-44eb-74bf-93df-e91f5119da54",
          opprettet: "2025-09-11T11:24:33.131536",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-44eb-74bf-93df-e91f5119da55",
          opprettet: "2025-09-11T11:24:33.13157",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 1.5,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-44eb-74bf-93df-e91f5119da56",
          opprettet: "2025-09-11T11:24:33.131587",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 3,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-44eb-74bf-93df-e91f5119da57",
          opprettet: "2025-09-11T11:24:33.131599",
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
          id: "01993817-44ec-7c9d-aff0-462eeb605ba0",
          opprettet: "2025-09-11T11:24:33.132203",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: "2025-09-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "FørsteArbeidsdag",
            },
            opplysninger: ["01993817-44eb-74bf-93df-e91f5119da52"],
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
          id: "01993817-44ec-7c9d-aff0-462eeb605ba1",
          opprettet: "2025-09-11T11:24:33.132354",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 195240,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993817-44eb-74bf-93df-e91f5119da54",
              "01993817-44eb-74bf-93df-e91f5119da55",
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
          id: "01993817-44ec-7c9d-aff0-462eeb605ba2",
          opprettet: "2025-09-11T11:24:33.13239",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993817-44eb-74bf-93df-e91f5119da54",
              "01993817-44eb-74bf-93df-e91f5119da56",
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
          id: "01993817-44ec-7c9d-aff0-462eeb605ba3",
          opprettet: "2025-09-11T11:24:33.132406",
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
          id: "01993817-44ec-7c9d-aff0-462eeb605ba4",
          opprettet: "2025-09-11T11:24:33.13242",
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
          id: "01993817-44ec-7c9d-aff0-462eeb605ba5",
          opprettet: "2025-09-11T11:24:33.132434",
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
          id: "01993817-44ec-7c9d-aff0-462eeb605ba6",
          opprettet: "2025-09-11T11:24:33.132458",
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
          id: "01993817-44ec-7c9d-aff0-462eeb605ba8",
          opprettet: "2025-09-11T11:24:33.132935",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: "2025-08-31",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteavsluttendeKalenderMåned",
            },
            opplysninger: [
              "01993817-44ea-73d9-840c-8eb267235afb",
              "01993817-44ec-7c9d-aff0-462eeb605ba0",
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
          id: "01993817-44ed-7483-a097-2146b164976c",
          opprettet: "2025-09-11T11:24:33.133198",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: "2022-09-01",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "TrekkFraMåned",
            },
            opplysninger: [
              "01993817-44eb-74bf-93df-e91f5119da53",
              "01993817-44ec-7c9d-aff0-462eeb605ba8",
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
          id: "01993817-4a26-7318-9bd1-d86a94c76381",
          opprettet: "2025-09-11T11:24:34.470986",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:34.396433",
            meldingId: "86b91218-1015-4bfb-aae9-e6ff17230a88",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993817-439e-7d3d-9d8a-78cf49ed6fbe"],
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
          id: "01993817-4a27-708a-bbb8-4e338b5dd366",
          opprettet: "2025-09-11T11:24:34.471085",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:34.396607",
            meldingId: "86b91218-1015-4bfb-aae9-e6ff17230a88",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993817-439e-7d3d-9d8a-78cf49ed6fbe"],
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
          id: "01993817-4a27-708a-bbb8-4e338b5dd367",
          opprettet: "2025-09-11T11:24:34.471138",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:34.396737",
            meldingId: "86b91218-1015-4bfb-aae9-e6ff17230a88",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993817-439e-7d3d-9d8a-78cf49ed6fbe"],
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
          id: "01993817-4a27-708a-bbb8-4e338b5dd368",
          opprettet: "2025-09-11T11:24:34.471199",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:34.396896",
            meldingId: "86b91218-1015-4bfb-aae9-e6ff17230a88",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993817-439e-7d3d-9d8a-78cf49ed6fbe"],
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
          id: "01993817-4a27-708a-bbb8-4e338b5dd369",
          opprettet: "2025-09-11T11:24:34.471261",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:34.397037",
            meldingId: "86b91218-1015-4bfb-aae9-e6ff17230a88",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993817-439e-7d3d-9d8a-78cf49ed6fbe"],
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
          id: "01993817-4a27-708a-bbb8-4e338b5dd36a",
          opprettet: "2025-09-11T11:24:34.471326",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:34.39716",
            meldingId: "86b91218-1015-4bfb-aae9-e6ff17230a88",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993817-439e-7d3d-9d8a-78cf49ed6fbe"],
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
          id: "01993817-4a27-708a-bbb8-4e338b5dd36b",
          opprettet: "2025-09-11T11:24:34.47139",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:34.39726",
            meldingId: "86b91218-1015-4bfb-aae9-e6ff17230a88",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993817-439e-7d3d-9d8a-78cf49ed6fbe"],
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
          id: "01993817-4a27-708a-bbb8-4e338b5dd36c",
          opprettet: "2025-09-11T11:24:34.471452",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:34.397546",
            meldingId: "86b91218-1015-4bfb-aae9-e6ff17230a88",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993817-439e-7d3d-9d8a-78cf49ed6fbe"],
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
          id: "01993817-4a27-708a-bbb8-4e338b5dd36d",
          opprettet: "2025-09-11T11:24:34.471524",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:34.397677",
            meldingId: "86b91218-1015-4bfb-aae9-e6ff17230a88",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993817-439e-7d3d-9d8a-78cf49ed6fbe"],
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
          id: "01993817-4a27-708a-bbb8-4e338b5dd36e",
          opprettet: "2025-09-11T11:24:34.471584",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:34.397791",
            meldingId: "86b91218-1015-4bfb-aae9-e6ff17230a88",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993817-439e-7d3d-9d8a-78cf49ed6fbe"],
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
          id: "01993817-4a27-708a-bbb8-4e338b5dd36f",
          opprettet: "2025-09-11T11:24:34.471646",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:34.397916",
            meldingId: "86b91218-1015-4bfb-aae9-e6ff17230a88",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-4a27-708a-bbb8-4e338b5dd370",
          opprettet: "2025-09-11T11:24:34.471712",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: "01K4W1EJCJB4QC76TC3AWCQXZ6",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:34.398013",
            meldingId: "86b91218-1015-4bfb-aae9-e6ff17230a88",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: [
              "01993817-44ea-73d9-840c-8eb267235afb",
              "01993817-44ec-7c9d-aff0-462eeb605ba8",
              "01993817-44ed-7483-a097-2146b164976c",
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
          id: "01993817-4a28-7420-9581-a2ea106b5ed4",
          opprettet: "2025-09-11T11:24:34.472838",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: "01K4W1EJCJB4QC76TC3AWCQXZ6",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["01993817-4a27-708a-bbb8-4e338b5dd370"],
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
          id: "01993817-4a28-7420-9581-a2ea106b5ed5",
          opprettet: "2025-09-11T11:24:34.472914",
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
              "01993817-44ec-7c9d-aff0-462eeb605ba3",
              "01993817-4a26-7318-9bd1-d86a94c76381",
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
          id: "01993817-4a28-7420-9581-a2ea106b5ed6",
          opprettet: "2025-09-11T11:24:34.472961",
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
              "01993817-44ec-7c9d-aff0-462eeb605ba4",
              "01993817-4a27-708a-bbb8-4e338b5dd366",
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
          id: "01993817-4a29-727b-9d88-33b5c3954638",
          opprettet: "2025-09-11T11:24:34.473014",
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
              "01993817-44ec-7c9d-aff0-462eeb605ba5",
              "01993817-4a27-708a-bbb8-4e338b5dd367",
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
          id: "01993817-4a29-727b-9d88-33b5c3954639",
          opprettet: "2025-09-11T11:24:34.47306",
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
            opplysninger: ["01993817-4a27-708a-bbb8-4e338b5dd368"],
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
          id: "01993817-4a29-727b-9d88-33b5c395463a",
          opprettet: "2025-09-11T11:24:34.473113",
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
              "01993817-44ec-7c9d-aff0-462eeb605ba6",
              "01993817-4a27-708a-bbb8-4e338b5dd369",
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
          id: "01993817-4a29-727b-9d88-33b5c395463b",
          opprettet: "2025-09-11T11:24:34.473152",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["01993817-4a27-708a-bbb8-4e338b5dd36f"],
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
          id: "01993817-4a29-727b-9d88-33b5c395463c",
          opprettet: "2025-09-11T11:24:34.47325",
          status: "Ny",
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
              "01993817-4a27-708a-bbb8-4e338b5dd36a",
              "01993817-4a27-708a-bbb8-4e338b5dd36b",
              "01993817-4a27-708a-bbb8-4e338b5dd36c",
              "01993817-4a27-708a-bbb8-4e338b5dd36d",
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
      opplysningTypeId: "01980cf4-9010-7bcf-b578-ca5a825d64ef",
      navn: "Skal kravet til verneplikt vurderes",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-4a29-727b-9d88-33b5c395463d",
          opprettet: "2025-09-11T11:24:34.473301",
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
            opplysninger: ["01993817-4a27-708a-bbb8-4e338b5dd36e"],
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
          id: "01993817-4a2a-7258-9f46-24cb656903c2",
          opprettet: "2025-09-11T11:24:34.474203",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 238524,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01993817-4a28-7420-9581-a2ea106b5ed4"],
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
          id: "01993817-4a2a-7258-9f46-24cb656903c3",
          opprettet: "2025-09-11T11:24:34.474849",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 715572,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01993817-4a28-7420-9581-a2ea106b5ed4"],
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
          id: "01993817-4a2a-7258-9f46-24cb656903c4",
          opprettet: "2025-09-11T11:24:34.474943",
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
              "01993817-4a28-7420-9581-a2ea106b5ed5",
              "01993817-4a28-7420-9581-a2ea106b5ed6",
              "01993817-4a29-727b-9d88-33b5c3954638",
              "01993817-4a29-727b-9d88-33b5c3954639",
              "01993817-4a29-727b-9d88-33b5c395463a",
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
          id: "01993817-4a2a-7258-9f46-24cb656903c5",
          opprettet: "2025-09-11T11:24:34.474981",
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
              "01993817-4a27-708a-bbb8-4e338b5dd36a",
              "01993817-4a29-727b-9d88-33b5c395463c",
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
          id: "01993817-4a2b-7845-9645-88f6cb154b6f",
          opprettet: "2025-09-11T11:24:34.475486",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01993817-44ec-7c9d-aff0-462eeb605ba1",
              "01993817-4a2a-7258-9f46-24cb656903c2",
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
          id: "01993817-4a2b-7845-9645-88f6cb154b70",
          opprettet: "2025-09-11T11:24:34.475562",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01993817-44ec-7c9d-aff0-462eeb605ba2",
              "01993817-4a2a-7258-9f46-24cb656903c3",
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
          id: "01993817-4a2b-7845-9645-88f6cb154b71",
          opprettet: "2025-09-11T11:24:34.475632",
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
              "01993817-4a27-708a-bbb8-4e338b5dd36b",
              "01993817-4a27-708a-bbb8-4e338b5dd36c",
              "01993817-4a27-708a-bbb8-4e338b5dd36d",
              "01993817-4a2a-7258-9f46-24cb656903c5",
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
          id: "01993817-4a2c-757e-9635-6227cbb74a9e",
          opprettet: "2025-09-11T11:24:34.476126",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01993817-4a2b-7845-9645-88f6cb154b6f",
              "01993817-4a2b-7845-9645-88f6cb154b70",
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
      opplysningTypeId: "0194881f-943f-78d9-b874-00a4944c54f1",
      navn: "Oppfyller vilkåret om å ikke motta andre fulle ytelser",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-4a2d-7577-8771-1514c824841e",
          opprettet: "2025-09-11T11:24:34.477007",
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
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d54a",
      navn: "Oppfyller unntak for opphold i Norge",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-4a2d-7577-8771-1514c824841f",
          opprettet: "2025-09-11T11:24:34.47707",
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
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d54c",
      navn: "Bruker er medlem av folketrygden",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-4a2d-7577-8771-1514c8248420",
          opprettet: "2025-09-11T11:24:34.477125",
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
      opplysningTypeId: "0194881f-940f-7af9-9387-052e028b29ee",
      navn: "Grunnbeløp for grunnlag",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-4a2d-7577-8771-1514c8248421",
          opprettet: "2025-09-11T11:24:34.47729",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-4a2d-7577-8771-1514c8248422",
          opprettet: "2025-09-11T11:24:34.477399",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: "01K4W1EJCJB4QC76TC3AWCQXZ6",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["01993817-4a27-708a-bbb8-4e338b5dd370"],
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
          id: "01993817-4a2d-7577-8771-1514c8248423",
          opprettet: "2025-09-11T11:24:34.477466",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 6,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-4a2d-7577-8771-1514c8248424",
          opprettet: "2025-09-11T11:24:34.477518",
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
      opplysningTypeId: "0194881f-9421-766c-9dc6-41fe6c9a1dff",
      navn: "Antall G som gis som grunnlag ved verneplikt",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01993817-4a2d-7577-8771-1514c8248425",
          opprettet: "2025-09-11T11:24:34.477561",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 3,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-4a2d-7577-8771-1514c8248426",
          opprettet: "2025-09-11T11:24:34.477601",
          status: "Ny",
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
          id: "01993817-4a2d-7577-8771-1514c8248427",
          opprettet: "2025-09-11T11:24:34.477644",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 0.0024,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-4a2d-7577-8771-1514c8248428",
          opprettet: "2025-09-11T11:24:34.477725",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 37,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-4a2d-7577-8771-1514c8248429",
          opprettet: "2025-09-11T11:24:34.477797",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 0.9,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-4a2d-7577-8771-1514c824842a",
          opprettet: "2025-09-11T11:24:34.477913",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 260,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-4a2d-7577-8771-1514c824842b",
          opprettet: "2025-09-11T11:24:34.477949",
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
          id: "01993817-4a2d-7577-8771-1514c824842c",
          opprettet: "2025-09-11T11:24:34.477984",
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
          id: "01993817-4a2e-71a5-8f2a-649cf2ed82d6",
          opprettet: "2025-09-11T11:24:34.47802",
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
          id: "01993817-4a2e-71a5-8f2a-649cf2ed82d7",
          opprettet: "2025-09-11T11:24:34.478071",
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
          id: "01993817-4a2e-71a5-8f2a-649cf2ed82d8",
          opprettet: "2025-09-11T11:24:34.478121",
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
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d8",
      navn: "Uføre dagsats",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-4a2e-71a5-8f2a-649cf2ed82d9",
          opprettet: "2025-09-11T11:24:34.478168",
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
      opplysningTypeId: "0196afc0-6807-7fa3-83e4-cf7f621f3a7e",
      navn: "Sum hvis Uføre ikke skal samordnes",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-4a2e-71a5-8f2a-649cf2ed82da",
          opprettet: "2025-09-11T11:24:34.478208",
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
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d9",
      navn: "Foreldrepenger dagsats",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-4a2e-71a5-8f2a-649cf2ed82db",
          opprettet: "2025-09-11T11:24:34.478263",
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
          id: "01993817-4a2e-71a5-8f2a-649cf2ed82dc",
          opprettet: "2025-09-11T11:24:34.47832",
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
          id: "01993817-4a2e-71a5-8f2a-649cf2ed82dd",
          opprettet: "2025-09-11T11:24:34.478379",
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
          id: "01993817-4a2e-71a5-8f2a-649cf2ed82de",
          opprettet: "2025-09-11T11:24:34.478424",
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
          id: "01993817-4a2e-71a5-8f2a-649cf2ed82df",
          opprettet: "2025-09-11T11:24:34.478506",
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
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a768",
      navn: "Maksimal vanlig arbeidstid",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01993817-4a2e-71a5-8f2a-649cf2ed82e0",
          opprettet: "2025-09-11T11:24:34.478584",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 40,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-4a2e-71a5-8f2a-649cf2ed82e1",
          opprettet: "2025-09-11T11:24:34.478657",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 37.5,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-4a2e-71a5-8f2a-649cf2ed82e2",
          opprettet: "2025-09-11T11:24:34.478722",
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
          id: "01993817-4a2e-71a5-8f2a-649cf2ed82e3",
          opprettet: "2025-09-11T11:24:34.478813",
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
      opplysningTypeId: "019522d2-9bb1-7960-b1e2-a959566e2428",
      navn: "Krav til prosentvis tap av arbeidstid ved permittering fra fiskeindustrien",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01993817-4a2f-754c-9765-93f95df800d5",
          opprettet: "2025-09-11T11:24:34.479325",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 40,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-4a2f-754c-9765-93f95df800d6",
          opprettet: "2025-09-11T11:24:34.479537",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 50,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-4a2f-754c-9765-93f95df800d7",
          opprettet: "2025-09-11T11:24:34.479655",
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
          id: "01993817-4a2f-754c-9765-93f95df800d8",
          opprettet: "2025-09-11T11:24:34.479843",
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
          id: "01993817-4a2f-754c-9765-93f95df800d9",
          opprettet: "2025-09-11T11:24:34.479952",
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
          id: "01993817-4a30-7015-ab77-0ab7c4d7d69b",
          opprettet: "2025-09-11T11:24:34.480022",
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
          id: "01993817-4a30-7015-ab77-0ab7c4d7d69c",
          opprettet: "2025-09-11T11:24:34.480102",
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
          id: "01993817-4a30-7015-ab77-0ab7c4d7d69d",
          opprettet: "2025-09-11T11:24:34.480172",
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
          id: "01993817-4a30-7015-ab77-0ab7c4d7d69e",
          opprettet: "2025-09-11T11:24:34.480262",
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
          id: "01993817-4a30-7015-ab77-0ab7c4d7d69f",
          opprettet: "2025-09-11T11:24:34.480352",
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
          id: "01993817-4a30-7015-ab77-0ab7c4d7d6a0",
          opprettet: "2025-09-11T11:24:34.480424",
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
          id: "01993817-4a30-7015-ab77-0ab7c4d7d6a1",
          opprettet: "2025-09-11T11:24:34.480821",
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
          id: "01993817-4a30-7015-ab77-0ab7c4d7d6a2",
          opprettet: "2025-09-11T11:24:34.480957",
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
          id: "01993817-4a32-7271-8ba8-0e556c90644a",
          opprettet: "2025-09-11T11:24:34.482547",
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
            opplysninger: ["01993817-4a2d-7577-8771-1514c8248420"],
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
          id: "01993817-4a35-7c7b-93fe-20a296e4b382",
          opprettet: "2025-09-11T11:24:34.485586",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: "01K4W1EJCJB4QC76TC3AWCQXZ6",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Oppjuster",
            },
            opplysninger: [
              "01993817-4a2d-7577-8771-1514c8248421",
              "01993817-4a2d-7577-8771-1514c8248422",
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
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10ca8",
      navn: "6 ganger grunnbeløp",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-4a35-7c7b-93fe-20a296e4b383",
          opprettet: "2025-09-11T11:24:34.48588",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993817-4a2d-7577-8771-1514c8248421",
              "01993817-4a2d-7577-8771-1514c8248423",
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
      opplysningTypeId: "0194881f-9421-766c-9dc6-41fe6c9a1e00",
      navn: "Grunnlag for gis ved verneplikt",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-4a36-7bfe-853f-bf6d39e54419",
          opprettet: "2025-09-11T11:24:34.486055",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993817-4a2d-7577-8771-1514c8248421",
              "01993817-4a2d-7577-8771-1514c8248425",
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
      opplysningTypeId: "0196afaf-afbd-7079-b2cf-3669ad9d86aa",
      navn: "Uføretrygden er gitt med virkningstidspunkt i inneværende år eller innenfor de to siste kalenderår",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-4a36-7bfe-853f-bf6d39e5441a",
          opprettet: "2025-09-11T11:24:34.486155",
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
            opplysninger: ["01993817-4a2e-71a5-8f2a-649cf2ed82d8"],
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
          id: "01993817-4a36-7bfe-853f-bf6d39e5441b",
          opprettet: "2025-09-11T11:24:34.486264",
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
              "01993817-4a2e-71a5-8f2a-649cf2ed82dd",
              "01993817-4a2e-71a5-8f2a-649cf2ed82de",
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
      opplysningTypeId: "0194881f-9434-79e8-a64d-1a23cc5d86ee",
      navn: "Samordnet fastsatt arbeidstid",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01993817-4a36-7bfe-853f-bf6d39e5441c",
          opprettet: "2025-09-11T11:24:34.486376",
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
              "01993817-4a2e-71a5-8f2a-649cf2ed82e2",
              "01993817-4a2e-71a5-8f2a-649cf2ed82e3",
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
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a762",
      navn: "Krav til prosentvis tap av arbeidstid",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01993817-4a36-7bfe-853f-bf6d39e5441d",
          opprettet: "2025-09-11T11:24:34.486627",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
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
              "01993817-4a27-708a-bbb8-4e338b5dd36d",
              "01993817-4a2f-754c-9765-93f95df800d5",
              "01993817-4a2f-754c-9765-93f95df800d6",
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
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a763",
      navn: "Beregningsregel: Tapt arbeidstid",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-4a36-7bfe-853f-bf6d39e5441e",
          opprettet: "2025-09-11T11:24:34.486748",
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
              "01993817-4a2f-754c-9765-93f95df800d7",
              "01993817-4a2f-754c-9765-93f95df800d8",
              "01993817-4a2f-754c-9765-93f95df800d9",
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
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b523",
      navn: "Godkjent unntak for utdanning eller opplæring?",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-4a36-7bfe-853f-bf6d39e5441f",
          opprettet: "2025-09-11T11:24:34.486891",
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
              "01993817-4a30-7015-ab77-0ab7c4d7d69c",
              "01993817-4a30-7015-ab77-0ab7c4d7d69d",
              "01993817-4a30-7015-ab77-0ab7c4d7d69e",
              "01993817-4a30-7015-ab77-0ab7c4d7d69f",
              "01993817-4a30-7015-ab77-0ab7c4d7d6a0",
              "01993817-4a30-7015-ab77-0ab7c4d7d6a1",
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
      opplysningTypeId: "0194881f-9447-7e36-a569-3e9f42bff9f7",
      navn: "Oppfyller krav til ikke utestengt",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-4a36-7bfe-853f-bf6d39e54420",
          opprettet: "2025-09-11T11:24:34.486987",
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
            opplysninger: ["01993817-4a30-7015-ab77-0ab7c4d7d6a2"],
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
          id: "01993817-4a38-7498-9cfc-4ffb696413f4",
          opprettet: "2025-09-11T11:24:34.4886",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 246385.82242719387,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01993817-4a35-7c7b-93fe-20a296e4b382"],
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
          id: "01993817-4a39-78a1-92e0-f4f5751b9a97",
          opprettet: "2025-09-11T11:24:34.489103",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 257924.8542248935,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01993817-4a35-7c7b-93fe-20a296e4b382"],
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
          id: "01993817-4a39-78a1-92e0-f4f5751b9a98",
          opprettet: "2025-09-11T11:24:34.489409",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 272909.27540690143,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01993817-4a35-7c7b-93fe-20a296e4b382"],
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
          id: "01993817-4a39-78a1-92e0-f4f5751b9a99",
          opprettet: "2025-09-11T11:24:34.489524",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "01993817-4a29-727b-9d88-33b5c395463d",
              "01993817-4a2d-7577-8771-1514c8248426",
              "01993817-4a36-7bfe-853f-bf6d39e54419",
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
      opplysningTypeId: "0196afbf-e32d-775a-ad10-f476e26dcb6f",
      navn: "Uførebeløp som skal samordnes",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-4a39-78a1-92e0-f4f5751b9a9a",
          opprettet: "2025-09-11T11:24:34.489624",
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
              "01993817-4a2e-71a5-8f2a-649cf2ed82d9",
              "01993817-4a2e-71a5-8f2a-649cf2ed82da",
              "01993817-4a36-7bfe-853f-bf6d39e5441a",
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
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10caa",
      navn: "Inntekt etter avkortning og oppjustering siste 12 måneder",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-4a3a-720f-8a9f-6ceeb22acd2a",
          opprettet: "2025-09-11T11:24:34.490556",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 246385.82242719387,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01993817-4a35-7c7b-93fe-20a296e4b383",
              "01993817-4a38-7498-9cfc-4ffb696413f4",
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
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb3",
      navn: "Avkortet inntektperiode 1",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-4a3a-720f-8a9f-6ceeb22acd2b",
          opprettet: "2025-09-11T11:24:34.490664",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 246385.82242719387,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01993817-4a35-7c7b-93fe-20a296e4b383",
              "01993817-4a38-7498-9cfc-4ffb696413f4",
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
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb4",
      navn: "Avkortet inntektperiode 2",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-4a3a-720f-8a9f-6ceeb22acd2c",
          opprettet: "2025-09-11T11:24:34.490748",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 257924.8542248935,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01993817-4a35-7c7b-93fe-20a296e4b383",
              "01993817-4a39-78a1-92e0-f4f5751b9a97",
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
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb5",
      navn: "Avkortet inntektperiode 3",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-4a3a-720f-8a9f-6ceeb22acd2d",
          opprettet: "2025-09-11T11:24:34.490874",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 272909.27540690143,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01993817-4a35-7c7b-93fe-20a296e4b383",
              "01993817-4a39-78a1-92e0-f4f5751b9a98",
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
      opplysningTypeId: "0194881f-9434-79e8-a64d-1a23cc5d86e9",
      navn: "Sum andre ytelser",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-4a3b-7205-bfd8-2d5ad50b9d21",
          opprettet: "2025-09-11T11:24:34.491038",
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
              "01993817-4a2d-7577-8771-1514c824842b",
              "01993817-4a2d-7577-8771-1514c824842c",
              "01993817-4a2e-71a5-8f2a-649cf2ed82d6",
              "01993817-4a2e-71a5-8f2a-649cf2ed82d7",
              "01993817-4a2e-71a5-8f2a-649cf2ed82db",
              "01993817-4a2e-71a5-8f2a-649cf2ed82dc",
              "01993817-4a39-78a1-92e0-f4f5751b9a9a",
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
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cab",
      navn: "Inntekt siste 36 måneder",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-4a3c-7fc4-9909-ed01d61c49af",
          opprettet: "2025-09-11T11:24:34.492048",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 777219.9520589889,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SumAv",
            },
            opplysninger: [
              "01993817-4a3a-720f-8a9f-6ceeb22acd2b",
              "01993817-4a3a-720f-8a9f-6ceeb22acd2c",
              "01993817-4a3a-720f-8a9f-6ceeb22acd2d",
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
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cac",
      navn: "Gjennomsnittlig inntekt etter avkortning og oppjustering siste 36 måneder",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-4a3d-7d9d-8562-911dad9f7fac",
          opprettet: "2025-09-11T11:24:34.493121",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 259073.31735299627,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "01993817-4a2d-7577-8771-1514c8248424",
              "01993817-4a3c-7fc4-9909-ed01d61c49af",
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
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cbb",
      navn: "Uavrundet grunnlag",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-4a3e-7527-bc08-a53eb07f3495",
          opprettet: "2025-09-11T11:24:34.494214",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 259073.31735299627,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "01993817-4a3a-720f-8a9f-6ceeb22acd2a",
              "01993817-4a3d-7d9d-8562-911dad9f7fac",
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
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cbc",
      navn: "Grunnlag ved ordinære dagpenger",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-4a3f-74e9-8a46-34e7eac55b37",
          opprettet: "2025-09-11T11:24:34.495447",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 259073,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["01993817-4a3e-7527-bc08-a53eb07f3495"],
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
          id: "01993817-4a40-774c-b5cc-39fdad862653",
          opprettet: "2025-09-11T11:24:34.496583",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 259073,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "01993817-4a39-78a1-92e0-f4f5751b9a99",
              "01993817-4a3f-74e9-8a46-34e7eac55b37",
            ],
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
          id: "01993817-4a40-774c-b5cc-39fdad862654",
          opprettet: "2025-09-11T11:24:34.496706",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "01993817-4a39-78a1-92e0-f4f5751b9a99",
              "01993817-4a3f-74e9-8a46-34e7eac55b37",
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
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a23f",
      navn: "Dagsats uten barnetillegg før samordning",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-4a41-77ee-949c-b8bde67afb96",
          opprettet: "2025-09-11T11:24:34.497533",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 621.7752,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993817-4a2d-7577-8771-1514c8248427",
              "01993817-4a40-774c-b5cc-39fdad862653",
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
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a248",
      navn: "Maksimalt mulig grunnlag avgrenset til 90% av dagpengegrunnlaget",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-4a41-77ee-949c-b8bde67afb97",
          opprettet: "2025-09-11T11:24:34.497663",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 233165.7,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993817-4a2d-7577-8771-1514c8248429",
              "01993817-4a40-774c-b5cc-39fdad862653",
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
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a76c",
      navn: "Fastsatt vanlig arbeidstid etter ordinær eller verneplikt",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01993817-4a41-77ee-949c-b8bde67afb98",
          opprettet: "2025-09-11T11:24:34.497789",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
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
              "01993817-4a2e-71a5-8f2a-649cf2ed82e1",
              "01993817-4a2e-71a5-8f2a-649cf2ed82e2",
              "01993817-4a40-774c-b5cc-39fdad862654",
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
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a241",
      navn: "Dagsats uten barnetillegg før samordning",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-4a42-7920-a9a6-fed46c97a92d",
          opprettet: "2025-09-11T11:24:34.498634",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 622,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["01993817-4a41-77ee-949c-b8bde67afb96"],
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
          id: "01993817-4a42-7920-a9a6-fed46c97a92e",
          opprettet: "2025-09-11T11:24:34.498829",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 896.7911538461539,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "01993817-4a2d-7577-8771-1514c824842a",
              "01993817-4a41-77ee-949c-b8bde67afb97",
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
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a76a",
      navn: "Fastsatt arbeidstid per uke før tap",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01993817-4a42-7920-a9a6-fed46c97a92f",
          opprettet: "2025-09-11T11:24:34.498932",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
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
              "01993817-4a27-708a-bbb8-4e338b5dd369",
              "01993817-4a2e-71a5-8f2a-649cf2ed82e0",
              "01993817-4a36-7bfe-853f-bf6d39e5441c",
              "01993817-4a41-77ee-949c-b8bde67afb98",
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
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a24b",
      navn: "Avrundet maksimal mulig dagsats avgrenset til 90% av dagpengegrunnlaget",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-4a44-7eba-ab1f-2d169af3d415",
          opprettet: "2025-09-11T11:24:34.500443",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 897,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["01993817-4a42-7920-a9a6-fed46c97a92e"],
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
          id: "01993817-4a44-7eba-ab1f-2d169af3d416",
          opprettet: "2025-09-11T11:24:34.500637",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "SjekkAvTerskel",
            },
            opplysninger: [
              "01993817-4a2e-71a5-8f2a-649cf2ed82df",
              "01993817-4a36-7bfe-853f-bf6d39e5441d",
              "01993817-4a42-7920-a9a6-fed46c97a92f",
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
      opplysningTypeId: "0196ab10-0cff-7301-99d6-65be50a50201",
      navn: "Bostedsland er Norge",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-5185-7f39-8716-c204287b3bbc",
          opprettet: "2025-09-11T11:24:36.357163",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:36.289283",
            meldingId: "08c05c59-4f5c-46b8-8733-d9f5a0ea76d4",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993817-439e-7d3d-9d8a-78cf49ed6fbe"],
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
          id: "01993817-5185-7f39-8716-c204287b3bbd",
          opprettet: "2025-09-11T11:24:36.357312",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: [],
            datatype: "barn",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:36.289435",
            meldingId: "08c05c59-4f5c-46b8-8733-d9f5a0ea76d4",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993817-439e-7d3d-9d8a-78cf49ed6fbe"],
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
          id: "01993817-5185-7f39-8716-c204287b3bbe",
          opprettet: "2025-09-11T11:24:36.357393",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:36.289614",
            meldingId: "08c05c59-4f5c-46b8-8733-d9f5a0ea76d4",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993817-439e-7d3d-9d8a-78cf49ed6fbe"],
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
          id: "01993817-5185-7f39-8716-c204287b3bbf",
          opprettet: "2025-09-11T11:24:36.357457",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:36.289756",
            meldingId: "08c05c59-4f5c-46b8-8733-d9f5a0ea76d4",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993817-439e-7d3d-9d8a-78cf49ed6fbe"],
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
          id: "01993817-5185-7f39-8716-c204287b3bc0",
          opprettet: "2025-09-11T11:24:36.35753",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:36.289896",
            meldingId: "08c05c59-4f5c-46b8-8733-d9f5a0ea76d4",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-5185-7f39-8716-c204287b3bc1",
          opprettet: "2025-09-11T11:24:36.357593",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:36.290031",
            meldingId: "08c05c59-4f5c-46b8-8733-d9f5a0ea76d4",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-5185-7f39-8716-c204287b3bc2",
          opprettet: "2025-09-11T11:24:36.357684",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:36.290134",
            meldingId: "08c05c59-4f5c-46b8-8733-d9f5a0ea76d4",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-5185-7f39-8716-c204287b3bc3",
          opprettet: "2025-09-11T11:24:36.35779",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:36.29024",
            meldingId: "08c05c59-4f5c-46b8-8733-d9f5a0ea76d4",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-5185-7f39-8716-c204287b3bc4",
          opprettet: "2025-09-11T11:24:36.357923",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:36.290341",
            meldingId: "08c05c59-4f5c-46b8-8733-d9f5a0ea76d4",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-5186-74f5-aada-cad274bf8be2",
          opprettet: "2025-09-11T11:24:36.358006",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:36.29042",
            meldingId: "08c05c59-4f5c-46b8-8733-d9f5a0ea76d4",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-5187-704e-9ff0-6b628023710a",
          opprettet: "2025-09-11T11:24:36.359212",
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
            opplysninger: ["01993817-5185-7f39-8716-c204287b3bbc"],
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
          id: "01993817-5187-704e-9ff0-6b628023710b",
          opprettet: "2025-09-11T11:24:36.359274",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: 0,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "AntallAv",
            },
            opplysninger: ["01993817-5185-7f39-8716-c204287b3bbd"],
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
          id: "01993817-5187-704e-9ff0-6b628023710c",
          opprettet: "2025-09-11T11:24:36.35935",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01993817-4a36-7bfe-853f-bf6d39e5441a",
              "01993817-5185-7f39-8716-c204287b3bc0",
              "01993817-5185-7f39-8716-c204287b3bc1",
              "01993817-5185-7f39-8716-c204287b3bc2",
              "01993817-5185-7f39-8716-c204287b3bc3",
              "01993817-5185-7f39-8716-c204287b3bc4",
              "01993817-5186-74f5-aada-cad274bf8be2",
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
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a761",
      navn: "Oppfyller vilkåret til tap av arbeidsinntekt",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-5187-704e-9ff0-6b628023710d",
          opprettet: "2025-09-11T11:24:36.359393",
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
            opplysninger: ["01993817-5185-7f39-8716-c204287b3bbe"],
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
          id: "01993817-5187-704e-9ff0-6b628023710e",
          opprettet: "2025-09-11T11:24:36.359428",
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
            opplysninger: ["01993817-5185-7f39-8716-c204287b3bbf"],
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
          id: "01993817-5187-704e-9ff0-6b628023710f",
          opprettet: "2025-09-11T11:24:36.359466",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErUsann",
            },
            opplysninger: ["01993817-5185-7f39-8716-c204287b3bbf"],
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
          id: "01993817-5188-7de9-b55a-0f27ebd58e96",
          opprettet: "2025-09-11T11:24:36.360191",
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
              "01993817-4a2d-7577-8771-1514c824841f",
              "01993817-5187-704e-9ff0-6b628023710a",
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
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a244",
      navn: "Sum av barnetillegg",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-5188-7de9-b55a-0f27ebd58e97",
          opprettet: "2025-09-11T11:24:36.360294",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993817-4a2d-7577-8771-1514c8248428",
              "01993817-5187-704e-9ff0-6b628023710b",
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
      opplysningTypeId: "0194881f-9435-72a8-b1ce-9575cbc2a76f",
      navn: "Oppfyller vilkåret om tap av arbeidsinntekt og arbeidstid",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-5188-7de9-b55a-0f27ebd58e98",
          opprettet: "2025-09-11T11:24:36.360356",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "01993817-4a30-7015-ab77-0ab7c4d7d69b",
              "01993817-4a36-7bfe-853f-bf6d39e5441e",
              "01993817-4a44-7eba-ab1f-2d169af3d416",
              "01993817-5187-704e-9ff0-6b628023710d",
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
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b526",
      navn: "Oppfyller kravet på unntak for utdanning eller opplæring",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-5188-7de9-b55a-0f27ebd58e99",
          opprettet: "2025-09-11T11:24:36.3604",
          status: "Ny",
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
              "01993817-4a36-7bfe-853f-bf6d39e5441f",
              "01993817-5187-704e-9ff0-6b628023710e",
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
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d54e",
      navn: "Kravet til opphold i Norge er oppfylt",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-5189-7e1b-8287-c49cc55403ba",
          opprettet: "2025-09-11T11:24:36.361181",
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
              "01993817-4a32-7271-8ba8-0e556c90644a",
              "01993817-5188-7de9-b55a-0f27ebd58e96",
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
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a245",
      navn: "Dagsats med barnetillegg før samordning",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-5189-7e1b-8287-c49cc55403bb",
          opprettet: "2025-09-11T11:24:36.361339",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 622,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "01993817-4a42-7920-a9a6-fed46c97a92d",
              "01993817-5188-7de9-b55a-0f27ebd58e97",
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
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a24c",
      navn: "Har barnetillegg",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-5189-7e1b-8287-c49cc55403bc",
          opprettet: "2025-09-11T11:24:36.361401",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01993817-4a2d-7577-8771-1514c8248428",
              "01993817-5188-7de9-b55a-0f27ebd58e97",
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
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b52d",
      navn: "Oppfyller krav til utdanning eller opplæring",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-5189-7e1b-8287-c49cc55403bd",
          opprettet: "2025-09-11T11:24:36.36145",
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
              "01993817-5187-704e-9ff0-6b628023710f",
              "01993817-5188-7de9-b55a-0f27ebd58e99",
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
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb6",
      navn: "Har avkortet grunnlaget i periode 1",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-518a-7f32-8355-8d8835ed43cd",
          opprettet: "2025-09-11T11:24:36.362601",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "01993817-4a35-7c7b-93fe-20a296e4b383",
              "01993817-4a38-7498-9cfc-4ffb696413f4",
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
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb7",
      navn: "Har avkortet grunnlaget i periode 2",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-518a-7f32-8355-8d8835ed43ce",
          opprettet: "2025-09-11T11:24:36.362666",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "01993817-4a35-7c7b-93fe-20a296e4b383",
              "01993817-4a39-78a1-92e0-f4f5751b9a97",
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
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cb8",
      navn: "Har avkortet grunnlaget i periode 3",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-518a-7f32-8355-8d8835ed43cf",
          opprettet: "2025-09-11T11:24:36.362719",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "01993817-4a35-7c7b-93fe-20a296e4b383",
              "01993817-4a39-78a1-92e0-f4f5751b9a98",
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
      opplysningTypeId: "0194881f-9410-7481-b263-4606fdd10cba",
      navn: "Brukt beregningsregel",
      datatype: "tekst",
      perioder: [
        {
          id: "01993817-518a-7f32-8355-8d8835ed43d0",
          opprettet: "2025-09-11T11:24:36.36281",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: "Gjennomsnittlig inntekt etter avkortning og oppjustering siste 36 måneder",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Brukt",
            },
            opplysninger: ["01993817-4a3e-7527-bc08-a53eb07f3495"],
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
          id: "01993817-518b-72ce-961b-c80043e83695",
          opprettet: "2025-09-11T11:24:36.363112",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 238524,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01993817-4a2d-7577-8771-1514c8248422"],
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
          id: "01993817-518b-72ce-961b-c80043e83696",
          opprettet: "2025-09-11T11:24:36.3633",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 238524,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01993817-4a2d-7577-8771-1514c8248422"],
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
          id: "01993817-518b-72ce-961b-c80043e83697",
          opprettet: "2025-09-11T11:24:36.363487",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 238524,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["01993817-4a2d-7577-8771-1514c8248422"],
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
          id: "01993817-518b-72ce-961b-c80043e83698",
          opprettet: "2025-09-11T11:24:36.363591",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "01993817-4a44-7eba-ab1f-2d169af3d415",
              "01993817-5189-7e1b-8287-c49cc55403bb",
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
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a249",
      navn: "Antall arbeidsdager per uke",
      datatype: "heltall",
      perioder: [
        {
          id: "01993817-518b-72ce-961b-c80043e83699",
          opprettet: "2025-09-11T11:24:36.363644",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 5,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-518b-72ce-961b-c80043e8369a",
          opprettet: "2025-09-11T11:24:36.363686",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 0.03,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-518b-72ce-961b-c80043e8369b",
          opprettet: "2025-09-11T11:24:36.363756",
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
          id: "01993817-518b-72ce-961b-c80043e8369c",
          opprettet: "2025-09-11T11:24:36.363814",
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
          id: "01993817-518b-72ce-961b-c80043e8369d",
          opprettet: "2025-09-11T11:24:36.36385",
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
          id: "01993817-518b-72ce-961b-c80043e8369e",
          opprettet: "2025-09-11T11:24:36.363887",
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
          id: "01993817-518b-72ce-961b-c80043e8369f",
          opprettet: "2025-09-11T11:24:36.363926",
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
          id: "01993817-518b-72ce-961b-c80043e836a0",
          opprettet: "2025-09-11T11:24:36.363963",
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
          id: "01993817-518c-78f2-8735-173edcaf7ce7",
          opprettet: "2025-09-11T11:24:36.364011",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 2,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-518c-78f2-8735-173edcaf7ce8",
          opprettet: "2025-09-11T11:24:36.364089",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 104,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-518c-78f2-8735-173edcaf7ce9",
          opprettet: "2025-09-11T11:24:36.364149",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 52,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-518c-78f2-8735-173edcaf7cea",
          opprettet: "2025-09-11T11:24:36.364369",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 238524,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "01993817-4a2a-7258-9f46-24cb656903c3",
              "01993817-4a2d-7577-8771-1514c8248424",
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
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15450",
      navn: "Terskelfaktor for 36 måneder",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01993817-518c-78f2-8735-173edcaf7ceb",
          opprettet: "2025-09-11T11:24:36.364441",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 2,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-518c-78f2-8735-173edcaf7cec",
          opprettet: "2025-09-11T11:24:36.364493",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 0,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-518c-78f2-8735-173edcaf7ced",
          opprettet: "2025-09-11T11:24:36.364548",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 5,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-518c-78f2-8735-173edcaf7cee",
          opprettet: "2025-09-11T11:24:36.364609",
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
      opplysningTypeId: "0194881f-943f-78d9-b874-00a4944c54f0",
      navn: "Antall dagsats for egenandel",
      datatype: "desimaltall",
      perioder: [
        {
          id: "01993817-518c-78f2-8735-173edcaf7cef",
          opprettet: "2025-09-11T11:24:36.36468",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 3,
            enhet: "dager",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-518c-78f2-8735-173edcaf7cf0",
          opprettet: "2025-09-11T11:24:36.364753",
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
          id: "01993817-518c-78f2-8735-173edcaf7cf1",
          opprettet: "2025-09-11T11:24:36.364843",
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
          id: "01993817-518c-78f2-8735-173edcaf7cf2",
          opprettet: "2025-09-11T11:24:36.364908",
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
          id: "01993817-518f-7a41-abf0-9618afaff3f4",
          opprettet: "2025-09-11T11:24:36.367185",
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
          id: "01993817-518f-7a41-abf0-9618afaff3f5",
          opprettet: "2025-09-11T11:24:36.367308",
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
          id: "01993817-518f-7a41-abf0-9618afaff3f6",
          opprettet: "2025-09-11T11:24:36.367379",
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
      opplysningTypeId: "0194881f-9421-766c-9dc6-41fe6c9a1e01",
      navn: "Periode som gis ved verneplikt",
      datatype: "heltall",
      perioder: [
        {
          id: "01993817-518f-7a41-abf0-9618afaff3f7",
          opprettet: "2025-09-11T11:24:36.367478",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 26,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["01993817-44ea-73d9-840c-8eb267235afb"],
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
          id: "01993817-5191-7b9c-910d-4cd94d9d4ccc",
          opprettet: "2025-09-11T11:24:36.369519",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01993817-518a-7f32-8355-8d8835ed43cd",
              "01993817-518a-7f32-8355-8d8835ed43ce",
              "01993817-518a-7f32-8355-8d8835ed43cf",
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
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a243",
      navn: "Andel av dagsats uten barnetillegg avkortet til maks andel av dagpengegrunnlaget",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-5191-7b9c-910d-4cd94d9d4ccd",
          opprettet: "2025-09-11T11:24:36.369757",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 622,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "01993817-4a42-7920-a9a6-fed46c97a92d",
              "01993817-518b-72ce-961b-c80043e83698",
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
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a2c",
      navn: "Beløp tilsvarende nedre terskel av G",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-5192-716b-b191-42da357c5de8",
          opprettet: "2025-09-11T11:24:36.370069",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 3904.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993817-4a2d-7577-8771-1514c8248421",
              "01993817-518b-72ce-961b-c80043e8369a",
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
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a2e",
      navn: "Sum av ytelser utenfor folketrygden",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-5192-716b-b191-42da357c5de9",
          opprettet: "2025-09-11T11:24:36.370212",
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
              "01993817-518b-72ce-961b-c80043e8369b",
              "01993817-518b-72ce-961b-c80043e8369c",
              "01993817-518b-72ce-961b-c80043e8369d",
              "01993817-518b-72ce-961b-c80043e8369e",
              "01993817-518b-72ce-961b-c80043e8369f",
              "01993817-518b-72ce-961b-c80043e836a0",
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
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a240",
      navn: "Avrundet ukessats med barnetillegg før samordning",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-5192-716b-b191-42da357c5dea",
          opprettet: "2025-09-11T11:24:36.37028",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 3110,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993817-5189-7e1b-8287-c49cc55403bb",
              "01993817-518b-72ce-961b-c80043e83699",
            ],
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
          id: "01993817-5192-716b-b191-42da357c5deb",
          opprettet: "2025-09-11T11:24:36.370341",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993817-44eb-74bf-93df-e91f5119da54",
              "01993817-518c-78f2-8735-173edcaf7ce7",
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
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f1544d",
      navn: "Terskel for 36 måneder",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-5192-716b-b191-42da357c5dec",
          opprettet: "2025-09-11T11:24:36.370393",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993817-44eb-74bf-93df-e91f5119da54",
              "01993817-518c-78f2-8735-173edcaf7ceb",
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
      opplysningTypeId: "0194881f-9434-79e8-a64d-1a23cc5d86eb",
      navn: "Samordnet dagsats uten barnetillegg",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-5193-7e19-92e0-7baec9a49241",
          opprettet: "2025-09-11T11:24:36.37167",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 622,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "01993817-4a3b-7205-bfd8-2d5ad50b9d21",
              "01993817-5191-7b9c-910d-4cd94d9d4ccd",
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
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15454",
      navn: "Over terskel for 12 måneder",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-5193-7e19-92e0-7baec9a49242",
          opprettet: "2025-09-11T11:24:36.371738",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01993817-4a2a-7258-9f46-24cb656903c2",
              "01993817-5192-716b-b191-42da357c5deb",
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
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15455",
      navn: "Over terskel for 36 måneder",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-5193-7e19-92e0-7baec9a49243",
          opprettet: "2025-09-11T11:24:36.37183",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01993817-518c-78f2-8735-173edcaf7cea",
              "01993817-5192-716b-b191-42da357c5dec",
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
      opplysningTypeId: "0194881f-9434-79e8-a64d-1a23cc5d86ec",
      navn: "Samordnet dagsats er større enn 0",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-5193-7e19-92e0-7baec9a49244",
          opprettet: "2025-09-11T11:24:36.371884",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01993817-4a3b-7205-bfd8-2d5ad50b9d21",
              "01993817-5191-7b9c-910d-4cd94d9d4ccd",
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
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a2f",
      navn: "Samordnet ukessats uten barnetillegg",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-5195-772f-af5c-689ca72554ac",
          opprettet: "2025-09-11T11:24:36.373009",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 3110,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993817-518b-72ce-961b-c80043e83699",
              "01993817-5193-7e19-92e0-7baec9a49241",
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
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15452",
      navn: "Stønadsuker ved siste 12 måneder",
      datatype: "heltall",
      perioder: [
        {
          id: "01993817-5195-772f-af5c-689ca72554ad",
          opprettet: "2025-09-11T11:24:36.373073",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
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
              "01993817-518c-78f2-8735-173edcaf7ce8",
              "01993817-518c-78f2-8735-173edcaf7ce9",
              "01993817-5193-7e19-92e0-7baec9a49242",
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
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15453",
      navn: "Stønadsuker ved siste 36 måneder",
      datatype: "heltall",
      perioder: [
        {
          id: "01993817-5195-772f-af5c-689ca72554ae",
          opprettet: "2025-09-11T11:24:36.373126",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
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
              "01993817-518c-78f2-8735-173edcaf7ce8",
              "01993817-518c-78f2-8735-173edcaf7ce9",
              "01993817-5193-7e19-92e0-7baec9a49243",
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
      opplysningTypeId: "0194881f-9434-79e8-a64d-1a23cc5d86ef",
      navn: "Utfall etter samordning",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-5195-772f-af5c-689ca72554af",
          opprettet: "2025-09-11T11:24:36.373185",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01993817-5189-7e1b-8287-c49cc55403bc",
              "01993817-5193-7e19-92e0-7baec9a49244",
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
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a30",
      navn: "Minste mulige ukessats som som kan brukes",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-5196-7049-8837-188a61db8750",
          opprettet: "2025-09-11T11:24:36.374469",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 3110,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01993817-5192-716b-b191-42da357c5de8",
              "01993817-5195-772f-af5c-689ca72554ac",
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
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a31",
      navn: "Ukessats trukket ned for ytelser utenfor folketrygden",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-5196-7049-8837-188a61db8751",
          opprettet: "2025-09-11T11:24:36.374628",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 3110,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "01993817-5192-716b-b191-42da357c5de9",
              "01993817-5195-772f-af5c-689ca72554ac",
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
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15456",
      navn: "Antall stønadsuker",
      datatype: "heltall",
      perioder: [
        {
          id: "01993817-5196-7049-8837-188a61db8752",
          opprettet: "2025-09-11T11:24:36.374698",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 52,
            enhet: "uker",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "01993817-5195-772f-af5c-689ca72554ad",
              "01993817-5195-772f-af5c-689ca72554ae",
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
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a32",
      navn: "Samordnet ukessats med ytelser utenfor folketrygden",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-5197-75c5-afff-56410d2b00a7",
          opprettet: "2025-09-11T11:24:36.375934",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 3110,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "01993817-5196-7049-8837-188a61db8750",
              "01993817-5196-7049-8837-188a61db8751",
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
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15459",
      navn: "Antall stønadsuker (stønadsperiode)",
      datatype: "heltall",
      perioder: [
        {
          id: "01993817-5198-7921-bef0-ab667111f708",
          opprettet: "2025-09-11T11:24:36.376002",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
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
              "01993817-4a2c-757e-9635-6227cbb74a9e",
              "01993817-518c-78f2-8735-173edcaf7cec",
              "01993817-5196-7049-8837-188a61db8752",
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
      opplysningTypeId: "0194881f-943d-77a7-969c-147999f15457",
      navn: "Antall stønadsdager",
      datatype: "heltall",
      perioder: [
        {
          id: "01993817-5198-7921-bef0-ab667111f709",
          opprettet: "2025-09-11T11:24:36.376142",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 260,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993817-518c-78f2-8735-173edcaf7ced",
              "01993817-5196-7049-8837-188a61db8752",
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
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a33",
      navn: "Dagsats uten barnetillegg samordnet",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-5199-7d1a-8704-945a3bad0b5d",
          opprettet: "2025-09-11T11:24:36.377645",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 622,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "01993817-518b-72ce-961b-c80043e83699",
              "01993817-5197-75c5-afff-56410d2b00a7",
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
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a24d",
      navn: "Samordnet dagsats med barnetillegg",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-519b-7666-b05e-02438cd9b03d",
          opprettet: "2025-09-11T11:24:36.379451",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 622,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "01993817-5188-7de9-b55a-0f27ebd58e97",
              "01993817-5199-7d1a-8704-945a3bad0b5d",
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
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a250",
      navn: "Har samordnet",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-519b-7666-b05e-02438cd9b03e",
          opprettet: "2025-09-11T11:24:36.379658",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErUlik",
            },
            opplysninger: [
              "01993817-5191-7b9c-910d-4cd94d9d4ccd",
              "01993817-5199-7d1a-8704-945a3bad0b5d",
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
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a24f",
      navn: "Dagsats med barnetillegg etter samordning og 90 % regel",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-519d-7ab8-bd6a-376118be10ac",
          opprettet: "2025-09-11T11:24:36.381238",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 622,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01993817-4a44-7eba-ab1f-2d169af3d415",
              "01993817-519b-7666-b05e-02438cd9b03d",
            ],
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
          id: "01993817-519e-7f4a-8804-559374ef159e",
          opprettet: "2025-09-11T11:24:36.38257",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 3110,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993817-518b-72ce-961b-c80043e83699",
              "01993817-519d-7ab8-bd6a-376118be10ac",
            ],
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
          id: "01993817-519e-7f4a-8804-559374ef159f",
          opprettet: "2025-09-11T11:24:36.382683",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 1866,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "01993817-518c-78f2-8735-173edcaf7cef",
              "01993817-519d-7ab8-bd6a-376118be10ac",
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
      opplysningTypeId: "0194881f-943f-78d9-b874-00a4944c54ef",
      navn: "Egenandel",
      datatype: "penger",
      perioder: [
        {
          id: "01993817-519f-711a-8e1f-d0fcccab6ff9",
          opprettet: "2025-09-11T11:24:36.383909",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
          verdi: {
            verdi: 1866,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "01993817-4a27-708a-bbb8-4e338b5dd36d",
              "01993817-518c-78f2-8735-173edcaf7cee",
              "01993817-519e-7f4a-8804-559374ef159f",
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
      opplysningTypeId: "0194881f-942e-7cb0-aa59-05ea449d88e0",
      navn: "Oppgitt andre ytelser utenfor NAV i søknaden",
      datatype: "boolsk",
      perioder: [
        {
          id: "01993817-53d5-77c6-a8f4-413580d1c34e",
          opprettet: "2025-09-11T11:24:36.94943",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-11T11:24:36.871326",
            meldingId: "5e54ec27-9ca3-48a1-8b3d-287555370187",
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
          id: "01993817-53d8-7a83-b3dd-d4852a93b4e0",
          opprettet: "2025-09-11T11:24:36.952503",
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
              "01993817-518c-78f2-8735-173edcaf7cf0",
              "01993817-518c-78f2-8735-173edcaf7cf1",
              "01993817-518c-78f2-8735-173edcaf7cf2",
              "01993817-518f-7a41-abf0-9618afaff3f4",
              "01993817-518f-7a41-abf0-9618afaff3f5",
              "01993817-518f-7a41-abf0-9618afaff3f6",
              "01993817-53d5-77c6-a8f4-413580d1c34e",
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
      opplysningTypeId: "01990a09-0eab-7957-b88f-14484a50e194",
      navn: "Har løpende rett på dagpenger",
      datatype: "boolsk",
      perioder: [
        {
          id: "01995cb0-e740-7de3-8404-e0d63aa69a6e",
          opprettet: "2025-09-18T13:58:41.472794",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-11",
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
