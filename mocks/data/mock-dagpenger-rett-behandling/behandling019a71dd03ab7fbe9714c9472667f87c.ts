import type { components } from "../../../openapi/behandling-typer";

export const behandling019a71dd03ab7fbe9714c9472667f87c: components["schemas"]["Behandling"] = {
  behandlingId: "019a71dd-03ab-7fbe-9714-c9472667f87c",
  behandletHendelse: {
    datatype: "UUID",
    id: "037231f5-0511-410c-8a96-00223aba5e3c",
    type: "Søknad",
    skjedde: "2025-11-11",
  },
  behandlingskjedeId: "019a71dd-03ab-7fbe-9714-c9472667f87c",
  automatisk: false,
  ident: "28528148753",
  rettighetsperioder: [
    {
      fraOgMed: "2025-11-11",
      tilOgMed: "2025-11-17",
      harRett: false,
      opprinnelse: "Ny",
    },
  ],
  kreverTotrinnskontroll: true,
  tilstand: "ForslagTilVedtak",
  avklaringer: [
    {
      id: "019a71dd-03ae-7459-9eab-24c875cfda8a",
      kode: "HarTilleggsopplysninger",
      tittel: "Sjekk hva bruker har oppgitt som tilleggsopplysninger i søknaden",
      beskrivelse: "Du må vurdere om tilleggsopplysninger har betydning for saken",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-11-11T08:41:41.379936",
    },
    {
      id: "019a71dd-0508-7cbe-8588-af19e134f762",
      kode: "HattLukkedeSakerSiste8Uker",
      tittel: "Sjekk om nylig lukkede saker i Arena kan påvirke behandlingen",
      beskrivelse:
        "Personen har lukkede saker i Arena siste 8 uker. Har vi nylig gitt avslag bør vi sjekke om det er nødvendig med ekstra \nveiledning.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-11-11T08:41:45.95706",
    },
    {
      id: "019a71dd-0508-7cbe-8588-af19e134f764",
      kode: "MuligGjenopptak",
      tittel: "Sjekk om det er sak som kan gjenopptas i Arena",
      beskrivelse:
        "Personen har åpne saker i Arena som kan være gjenopptak. Saker som skal gjenopptas må håndteres i Arena.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-11-11T08:41:46.223764",
    },
    {
      id: "019a723b-379c-7504-b6c4-20f684bd7946",
      kode: "EØSArbeid",
      tittel: "Sjekk om arbeid i EØS fører til sammenlegging",
      beskrivelse:
        "Personen har oppgitt arbeid fra EØS i søknaden. Det må vurderes om det skal være sammenlegging.",
      kanKvitteres: true,
      status: "Åpen",
      maskinelt: false,
      sistEndret: "2025-11-11T10:24:34.844478",
    },
    {
      id: "019a723b-379c-7504-b6c4-20f684bd794a",
      kode: "InntektNesteKalendermåned",
      tittel: "Sjekk om inntekt for neste måned er relevant",
      beskrivelse:
        "Personen har inntekt som tilhører neste inntektsperiode. Vurder om det er tilstrekkelige inntekter til at utfallet vil \nendre seg i neste inntektsperiode.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-11-11T10:24:39.630826",
    },
    {
      id: "019a723b-379c-7504-b6c4-20f684bd794c",
      kode: "JobbetUtenforNorge",
      tittel: "Sjekk om arbeid utenfor Norge påvirker retten til dagpenger",
      beskrivelse:
        "Personen har oppgitt arbeid utenfor Norge i søknaden. Sjekk om arbeidsforholdene som er oppgitt i søknaden skal være \nmed i vurderingen av retten til dagpenger.",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: true,
      sistEndret: "2025-11-11T10:24:41.958863",
    },
    {
      id: "019a723b-5428-7784-bfdb-73cd6aa0527b",
      kode: "SjekkPrøvingsdato",
      tittel: "Sjekk om valgt prøvingsdato er riktig",
      beskrivelse: "Sjekk at valgt prøvingsdato er riktig",
      kanKvitteres: true,
      status: "Avbrutt",
      maskinelt: true,
      sistEndret: "2025-11-12T13:54:16.860636",
    },
    {
      id: "019a723b-5428-7784-bfdb-73cd6aa0527f",
      kode: "BeregnetArbeidstid",
      tittel: "Sjekk om beregnet arbeidstid er korrekt",
      beskrivelse:
        "Du må sjekke om beregnet vanlig arbeidstid er korrekt og at det er brukt riktig beregningsregel. \nDu må også sjekke om ny vanlig arbeidstid er korrekt",
      kanKvitteres: true,
      status: "Åpen",
      maskinelt: false,
      sistEndret: "2025-11-11T10:24:42.152966",
    },
    {
      id: "019a7821-901c-728b-8416-d2fb02cbdb09",
      kode: "ReellArbeidssøkerUnntak",
      tittel: "Sjekk om søker oppfyller unntak til å være reell arbeidssøker",
      beskrivelse: "Det må vurderes om søker kvalifiserer til unntakene til reell arbeidssøker",
      kanKvitteres: true,
      status: "Åpen",
      maskinelt: false,
      sistEndret: "2025-11-12T13:54:16.860749",
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
      relevantForResultat: false,
      type: "Fastsettelse",
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
      relevantForResultat: true,
      type: "Fastsettelse",
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
      relevantForResultat: false,
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
      relevantForResultat: true,
      type: "Fastsettelse",
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
      relevantForResultat: false,
      type: "Fastsettelse",
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
      relevantForResultat: true,
      type: "Fastsettelse",
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
          id: "019a71dd-03ab-7fbe-9714-c9472667f87b",
          opprettet: "2025-11-11T08:41:41.163447",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: 15606218,
            datatype: "heltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T08:41:41.163439",
            meldingId: "2142907b-5b3d-4a10-bdf3-0d75f7955174",
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
          id: "019a71dd-03ab-7fbe-9714-c9472667f87f",
          opprettet: "2025-11-11T08:41:41.163833",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: "037231f5-0511-410c-8a96-00223aba5e3c",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T08:41:41.163797",
            meldingId: "2142907b-5b3d-4a10-bdf3-0d75f7955174",
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
          id: "019a71dd-03ab-7fbe-9714-c9472667f881",
          opprettet: "2025-11-11T08:41:41.163914",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          gyldigTilOgMed: "2025-11-11",
          verdi: {
            verdi: "SøknadInnsendtHendelse",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T08:41:41.163913",
            meldingId: "2142907b-5b3d-4a10-bdf3-0d75f7955174",
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
          id: "019a71dd-03ad-746e-b54a-24f40482c19f",
          opprettet: "2025-11-11T08:41:41.165251",
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
          id: "019a71dd-0503-76e4-9cae-51d5c103d19b",
          opprettet: "2025-11-11T08:41:41.507504",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: "2025-11-11",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T08:41:41.458443",
            meldingId: "24f5db5b-377c-4633-aeb9-6402ec8c5b85",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a71dd-03ab-7fbe-9714-c9472667f87f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a71dd-0503-76e4-9cae-51d5c103d19c",
          opprettet: "2025-11-11T08:41:41.507709",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: "2025-11-11",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T08:41:41.458627",
            meldingId: "24f5db5b-377c-4633-aeb9-6402ec8c5b85",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a71dd-03ab-7fbe-9714-c9472667f87f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a71dd-0503-76e4-9cae-51d5c103d19d",
          opprettet: "2025-11-11T08:41:41.507776",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: "1981-12-28",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T08:41:41.458823",
            meldingId: "24f5db5b-377c-4633-aeb9-6402ec8c5b85",
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
          id: "019a71dd-0504-70b4-b922-62b312da5570",
          opprettet: "2025-11-11T08:41:41.508438",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: "2025-11-11",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: [
              "019a71dd-0503-76e4-9cae-51d5c103d19b",
              "019a71dd-0503-76e4-9cae-51d5c103d19c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a71dd-0504-70b4-b922-62b312da5571",
          opprettet: "2025-11-11T08:41:41.50847",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2048-12-28",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "LeggTilÅr",
            },
            opplysninger: [
              "019a71dd-03ad-746e-b54a-24f40482c19f",
              "019a71dd-0503-76e4-9cae-51d5c103d19d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a71dd-0504-70b4-b922-62b312da5573",
          opprettet: "2025-11-11T08:41:41.508606",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: "2025-11-11",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: ["019a71dd-0504-70b4-b922-62b312da5570"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a71dd-0504-70b4-b922-62b312da5574",
          opprettet: "2025-11-11T08:41:41.508786",
          status: "Ny",
          opprinnelse: "Ny",
          verdi: {
            verdi: "2048-12-31",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteDagIMåned",
            },
            opplysninger: ["019a71dd-0504-70b4-b922-62b312da5571"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a71dd-0504-70b4-b922-62b312da5576",
          opprettet: "2025-11-11T08:41:41.508975",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "FørEllerLik",
            },
            opplysninger: [
              "019a71dd-0504-70b4-b922-62b312da5573",
              "019a71dd-0504-70b4-b922-62b312da5574",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a71dd-0505-74f1-851a-bf356318eeb7",
          opprettet: "2025-11-11T08:41:41.509317",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: "2025-11-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a71dd-0504-70b4-b922-62b312da5573"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a71dd-0505-74f1-851a-bf356318eeb8",
          opprettet: "2025-11-11T08:41:41.50935",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 36,
            enhet: "måneder",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a71dd-0504-70b4-b922-62b312da5573"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a71dd-0505-74f1-851a-bf356318eeb9",
          opprettet: "2025-11-11T08:41:41.509664",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a71dd-0504-70b4-b922-62b312da5573"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a71dd-0505-74f1-851a-bf356318eeba",
          opprettet: "2025-11-11T08:41:41.509884",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 1.5,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a71dd-0504-70b4-b922-62b312da5573"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a71dd-0505-74f1-851a-bf356318eebb",
          opprettet: "2025-11-11T08:41:41.509908",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 3,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a71dd-0504-70b4-b922-62b312da5573"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a71dd-0505-74f1-851a-bf356318eebc",
          opprettet: "2025-11-11T08:41:41.509927",
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
          id: "019a71dd-0506-73cc-be38-f0cdcc7e654e",
          opprettet: "2025-11-11T08:41:41.510888",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: "2025-11-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "FørsteArbeidsdag",
            },
            opplysninger: ["019a71dd-0505-74f1-851a-bf356318eeb7"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a71dd-0507-7f2a-af76-cc5c8bb4b01e",
          opprettet: "2025-11-11T08:41:41.511305",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 195240,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a71dd-0505-74f1-851a-bf356318eeb9",
              "019a71dd-0505-74f1-851a-bf356318eeba",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a71dd-0507-7f2a-af76-cc5c8bb4b01f",
          opprettet: "2025-11-11T08:41:41.511446",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a71dd-0505-74f1-851a-bf356318eeb9",
              "019a71dd-0505-74f1-851a-bf356318eebb",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a71dd-0507-7f2a-af76-cc5c8bb4b020",
          opprettet: "2025-11-11T08:41:41.511456",
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
          id: "019a71dd-0507-7f2a-af76-cc5c8bb4b022",
          opprettet: "2025-11-11T08:41:41.511714",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: "2025-10-31",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteavsluttendeKalenderMåned",
            },
            opplysninger: [
              "019a71dd-0504-70b4-b922-62b312da5573",
              "019a71dd-0506-73cc-be38-f0cdcc7e654e",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a71dd-0508-7cbe-8588-af19e134f75f",
          opprettet: "2025-11-11T08:41:41.512011",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: "2022-11-01",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "TrekkFraMåned",
            },
            opplysninger: [
              "019a71dd-0505-74f1-851a-bf356318eeb8",
              "019a71dd-0507-7f2a-af76-cc5c8bb4b022",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bdc",
      navn: "Kan ta alle typer arbeid",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a723b-378e-756a-a8ed-2c87038e85bc",
          opprettet: "2025-11-11T10:24:34.830164",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T10:24:34.762571",
            meldingId: "1373eb87-2877-4272-b730-32e37632870e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a71dd-03ab-7fbe-9714-c9472667f87f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-378e-756a-a8ed-2c87038e85bd",
          opprettet: "2025-11-11T10:24:34.830193",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T10:24:34.762648",
            meldingId: "1373eb87-2877-4272-b730-32e37632870e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a71dd-03ab-7fbe-9714-c9472667f87f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-378e-756a-a8ed-2c87038e85be",
          opprettet: "2025-11-11T10:24:34.830211",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T10:24:34.762713",
            meldingId: "1373eb87-2877-4272-b730-32e37632870e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a71dd-03ab-7fbe-9714-c9472667f87f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
          },
        },
      ],
      synlig: true,
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
          id: "019a723b-378e-756a-a8ed-2c87038e85bf",
          opprettet: "2025-11-11T10:24:34.830229",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T10:24:34.762924",
            meldingId: "1373eb87-2877-4272-b730-32e37632870e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a71dd-03ab-7fbe-9714-c9472667f87f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-378e-756a-a8ed-2c87038e85c0",
          opprettet: "2025-11-11T10:24:34.830246",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T10:24:34.763057",
            meldingId: "1373eb87-2877-4272-b730-32e37632870e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a71dd-03ab-7fbe-9714-c9472667f87f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-378e-756a-a8ed-2c87038e85c1",
          opprettet: "2025-11-11T10:24:34.830264",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T10:24:34.763169",
            meldingId: "1373eb87-2877-4272-b730-32e37632870e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a71dd-03ab-7fbe-9714-c9472667f87f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-378e-756a-a8ed-2c87038e85c2",
          opprettet: "2025-11-11T10:24:34.830281",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-31",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T10:24:34.76329",
            meldingId: "1373eb87-2877-4272-b730-32e37632870e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a71dd-0504-70b4-b922-62b312da5573"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Register",
    },
    {
      opplysningTypeId: "0194881f-9444-7a73-a458-0af81c034d88",
      navn: "Permittert fra fiskeindustrien",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a723b-378e-756a-a8ed-2c87038e85c3",
          opprettet: "2025-11-11T10:24:34.830302",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T10:24:34.763398",
            meldingId: "1373eb87-2877-4272-b730-32e37632870e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a71dd-03ab-7fbe-9714-c9472667f87f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-378e-756a-a8ed-2c87038e85c4",
          opprettet: "2025-11-11T10:24:34.830321",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T10:24:34.763492",
            meldingId: "1373eb87-2877-4272-b730-32e37632870e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a71dd-03ab-7fbe-9714-c9472667f87f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-378e-756a-a8ed-2c87038e85c5",
          opprettet: "2025-11-11T10:24:34.830346",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: "01K9RXT29QE02NYE1AD3F9C1B5",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T10:24:34.763599",
            meldingId: "1373eb87-2877-4272-b730-32e37632870e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: [
              "019a71dd-0504-70b4-b922-62b312da5573",
              "019a71dd-0507-7f2a-af76-cc5c8bb4b022",
              "019a71dd-0508-7cbe-8588-af19e134f75f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-378f-75c2-bfe1-d99fac0c0c88",
          opprettet: "2025-11-11T10:24:34.831128",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: "01K9RXT29QE02NYE1AD3F9C1B5",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["019a723b-378e-756a-a8ed-2c87038e85c5"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194929e-2036-7ac1-ada3-5cbe05a83f08",
      navn: "Har helsemessige begrensninger og kan ikke ta alle typer arbeid",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a723b-378f-75c2-bfe1-d99fac0c0c8b",
          opprettet: "2025-11-11T10:24:34.831197",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019a723b-378e-756a-a8ed-2c87038e85bc"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-378f-75c2-bfe1-d99fac0c0c8c",
          opprettet: "2025-11-11T10:24:34.831222",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: ["019a723b-378e-756a-a8ed-2c87038e85bd"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-378f-75c2-bfe1-d99fac0c0c8d",
          opprettet: "2025-11-11T10:24:34.8313",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a71dd-0507-7f2a-af76-cc5c8bb4b020",
              "019a723b-378e-756a-a8ed-2c87038e85be",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-378f-75c2-bfe1-d99fac0c0c8e",
          opprettet: "2025-11-11T10:24:34.831335",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-07-31",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019a723b-378e-756a-a8ed-2c87038e85c2"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-378f-75c2-bfe1-d99fac0c0c8f",
          opprettet: "2025-11-11T10:24:34.831437",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: [
              "019a723b-378e-756a-a8ed-2c87038e85bf",
              "019a723b-378e-756a-a8ed-2c87038e85c0",
              "019a723b-378e-756a-a8ed-2c87038e85c1",
              "019a723b-378e-756a-a8ed-2c87038e85c3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-378f-75c2-bfe1-d99fac0c0c90",
          opprettet: "2025-11-11T10:24:34.831465",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019a723b-378e-756a-a8ed-2c87038e85c4"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-378f-75c2-bfe1-d99fac0c0c91",
          opprettet: "2025-11-11T10:24:34.831486",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019a723b-378e-756a-a8ed-2c87038e85c4"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-3791-703d-8d22-0fabb2fc2c24",
          opprettet: "2025-11-11T10:24:34.833273",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 499995,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a723b-378f-75c2-bfe1-d99fac0c0c88"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-3792-7c7f-9ef3-0a7ae218a759",
          opprettet: "2025-11-11T10:24:34.834167",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 1833315,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a723b-378f-75c2-bfe1-d99fac0c0c88"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
          },
        },
      ],
      synlig: true,
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
          id: "019a723b-3792-7c7f-9ef3-0a7ae218a75c",
          opprettet: "2025-11-11T10:24:34.834272",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a723b-378e-756a-a8ed-2c87038e85bc",
              "019a723b-378f-75c2-bfe1-d99fac0c0c8b",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-3792-7c7f-9ef3-0a7ae218a75d",
          opprettet: "2025-11-11T10:24:34.834298",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a723b-378e-756a-a8ed-2c87038e85bf",
              "019a723b-378f-75c2-bfe1-d99fac0c0c8f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-3796-7648-9a5e-315f5683d68a",
          opprettet: "2025-11-11T10:24:34.838525",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a71dd-0507-7f2a-af76-cc5c8bb4b01e",
              "019a723b-3791-703d-8d22-0fabb2fc2c24",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-3796-7648-9a5e-315f5683d68b",
          opprettet: "2025-11-11T10:24:34.838574",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a71dd-0507-7f2a-af76-cc5c8bb4b01f",
              "019a723b-3792-7c7f-9ef3-0a7ae218a759",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-3796-7648-9a5e-315f5683d68d",
          opprettet: "2025-11-11T10:24:34.838846",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a723b-378e-756a-a8ed-2c87038e85c0",
              "019a723b-378e-756a-a8ed-2c87038e85c1",
              "019a723b-378e-756a-a8ed-2c87038e85c3",
              "019a723b-3792-7c7f-9ef3-0a7ae218a75d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-3797-7201-b026-9f74bd9fa4e9",
          opprettet: "2025-11-11T10:24:34.839247",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a723b-3796-7648-9a5e-315f5683d68a",
              "019a723b-3796-7648-9a5e-315f5683d68b",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-3797-7201-b026-9f74bd9fa4eb",
          opprettet: "2025-11-11T10:24:34.839723",
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
          id: "019a723b-3797-7201-b026-9f74bd9fa4ec",
          opprettet: "2025-11-11T10:24:34.839775",
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
          id: "019a723b-3797-7201-b026-9f74bd9fa4ed",
          opprettet: "2025-11-11T10:24:34.839805",
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
          id: "019a723b-3797-7201-b026-9f74bd9fa4ee",
          opprettet: "2025-11-11T10:24:34.839825",
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
          id: "019a723b-3797-7201-b026-9f74bd9fa4ef",
          opprettet: "2025-11-11T10:24:34.839851",
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
          id: "019a723b-3797-7201-b026-9f74bd9fa4f0",
          opprettet: "2025-11-11T10:24:34.839866",
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
          id: "019a723b-3797-7201-b026-9f74bd9fa4f1",
          opprettet: "2025-11-11T10:24:34.839882",
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
          id: "019a723b-3797-7201-b026-9f74bd9fa4f2",
          opprettet: "2025-11-11T10:24:34.839897",
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
          id: "019a723b-3797-7201-b026-9f74bd9fa4f3",
          opprettet: "2025-11-11T10:24:34.839912",
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
          id: "019a723b-3797-7201-b026-9f74bd9fa4f4",
          opprettet: "2025-11-11T10:24:34.839934",
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
          id: "019a723b-3797-7201-b026-9f74bd9fa4f5",
          opprettet: "2025-11-11T10:24:34.839959",
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
          id: "019a723b-3797-7201-b026-9f74bd9fa4f6",
          opprettet: "2025-11-11T10:24:34.839984",
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
          id: "019a723b-3798-77e1-8cd0-e60fd3ca31da",
          opprettet: "2025-11-11T10:24:34.840032",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 50,
            enhet: "prosent",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a71dd-0504-70b4-b922-62b312da5573"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-3798-77e1-8cd0-e60fd3ca31db",
          opprettet: "2025-11-11T10:24:34.840063",
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
          id: "019a723b-3798-77e1-8cd0-e60fd3ca31dc",
          opprettet: "2025-11-11T10:24:34.84009",
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
          id: "019a723b-3798-77e1-8cd0-e60fd3ca31dd",
          opprettet: "2025-11-11T10:24:34.840118",
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
          id: "019a723b-3798-77e1-8cd0-e60fd3ca31de",
          opprettet: "2025-11-11T10:24:34.840144",
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
          id: "019a723b-3798-77e1-8cd0-e60fd3ca31df",
          opprettet: "2025-11-11T10:24:34.840173",
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
          id: "019a723b-3798-77e1-8cd0-e60fd3ca31e0",
          opprettet: "2025-11-11T10:24:34.840197",
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
          id: "019a723b-3798-77e1-8cd0-e60fd3ca31e1",
          opprettet: "2025-11-11T10:24:34.840216",
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
          id: "019a723b-3798-77e1-8cd0-e60fd3ca31e2",
          opprettet: "2025-11-11T10:24:34.840337",
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
          id: "019a723b-3798-77e1-8cd0-e60fd3ca31e3",
          opprettet: "2025-11-11T10:24:34.840367",
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
          id: "019a723b-3798-77e1-8cd0-e60fd3ca31e4",
          opprettet: "2025-11-11T10:24:34.840398",
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
          id: "019a723b-3798-77e1-8cd0-e60fd3ca31e5",
          opprettet: "2025-11-11T10:24:34.840431",
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
          id: "019a723b-3798-77e1-8cd0-e60fd3ca31e7",
          opprettet: "2025-11-11T10:24:34.840951",
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
            opplysninger: ["019a723b-3797-7201-b026-9f74bd9fa4ec"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-3799-735f-932d-cc8dc1715e3b",
          opprettet: "2025-11-11T10:24:34.841019",
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
            opplysninger: ["019a723b-3797-7201-b026-9f74bd9fa4f1"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-3799-735f-932d-cc8dc1715e3c",
          opprettet: "2025-11-11T10:24:34.841063",
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
              "019a723b-3797-7201-b026-9f74bd9fa4f4",
              "019a723b-3797-7201-b026-9f74bd9fa4f5",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-3799-735f-932d-cc8dc1715e3d",
          opprettet: "2025-11-11T10:24:34.841091",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
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
              "019a723b-378e-756a-a8ed-2c87038e85c3",
              "019a723b-3798-77e1-8cd0-e60fd3ca31da",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-3799-735f-932d-cc8dc1715e3e",
          opprettet: "2025-11-11T10:24:34.84114",
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
              "019a723b-3798-77e1-8cd0-e60fd3ca31db",
              "019a723b-3798-77e1-8cd0-e60fd3ca31dc",
              "019a723b-3798-77e1-8cd0-e60fd3ca31dd",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-3799-735f-932d-cc8dc1715e3f",
          opprettet: "2025-11-11T10:24:34.841191",
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
              "019a723b-3798-77e1-8cd0-e60fd3ca31df",
              "019a723b-3798-77e1-8cd0-e60fd3ca31e0",
              "019a723b-3798-77e1-8cd0-e60fd3ca31e1",
              "019a723b-3798-77e1-8cd0-e60fd3ca31e2",
              "019a723b-3798-77e1-8cd0-e60fd3ca31e3",
              "019a723b-3798-77e1-8cd0-e60fd3ca31e4",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-3799-735f-932d-cc8dc1715e40",
          opprettet: "2025-11-11T10:24:34.841216",
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
            opplysninger: ["019a723b-3798-77e1-8cd0-e60fd3ca31e5"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-3799-735f-932d-cc8dc1715e42",
          opprettet: "2025-11-11T10:24:34.841862",
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
          id: "019a723b-379a-711b-a949-4a48d2d38f7e",
          opprettet: "2025-11-11T10:24:34.842349",
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
              "019a723b-3799-735f-932d-cc8dc1715e3b",
              "019a723b-3799-735f-932d-cc8dc1715e42",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-379b-74f0-aecb-c1ab89e00533",
          opprettet: "2025-11-11T10:24:34.843128",
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
              "019a723b-3797-7201-b026-9f74bd9fa4ed",
              "019a723b-3797-7201-b026-9f74bd9fa4ee",
              "019a723b-3797-7201-b026-9f74bd9fa4ef",
              "019a723b-3797-7201-b026-9f74bd9fa4f0",
              "019a723b-3797-7201-b026-9f74bd9fa4f2",
              "019a723b-3797-7201-b026-9f74bd9fa4f3",
              "019a723b-379a-711b-a949-4a48d2d38f7e",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45d2",
      navn: "Foreldrepenger etter lovens kapittel 14",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a723b-5402-7641-b908-ae46e33cafa3",
          opprettet: "2025-11-11T10:24:42.114041",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T10:24:42.048442",
            meldingId: "7bec3806-4336-4b55-ab00-21b48c37f8f5",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a71dd-0504-70b4-b922-62b312da5573"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5402-7641-b908-ae46e33cafa4",
          opprettet: "2025-11-11T10:24:42.114112",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T10:24:42.048628",
            meldingId: "7bec3806-4336-4b55-ab00-21b48c37f8f5",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a71dd-0504-70b4-b922-62b312da5573"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5402-7641-b908-ae46e33cafa5",
          opprettet: "2025-11-11T10:24:42.11416",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T10:24:42.048735",
            meldingId: "7bec3806-4336-4b55-ab00-21b48c37f8f5",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a71dd-0504-70b4-b922-62b312da5573"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5402-7641-b908-ae46e33cafa6",
          opprettet: "2025-11-11T10:24:42.114202",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T10:24:42.048858",
            meldingId: "7bec3806-4336-4b55-ab00-21b48c37f8f5",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a71dd-0504-70b4-b922-62b312da5573"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5402-7641-b908-ae46e33cafa7",
          opprettet: "2025-11-11T10:24:42.11424",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T10:24:42.048943",
            meldingId: "7bec3806-4336-4b55-ab00-21b48c37f8f5",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a71dd-0504-70b4-b922-62b312da5573"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0196ab10-0cff-7301-99d6-65be50a50201",
      navn: "Bostedsland er Norge",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a723b-5402-7641-b908-ae46e33cafa8",
          opprettet: "2025-11-11T10:24:42.114278",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T10:24:42.049036",
            meldingId: "7bec3806-4336-4b55-ab00-21b48c37f8f5",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a71dd-03ab-7fbe-9714-c9472667f87f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5402-7641-b908-ae46e33cafa9",
          opprettet: "2025-11-11T10:24:42.114318",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T10:24:42.049124",
            meldingId: "7bec3806-4336-4b55-ab00-21b48c37f8f5",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a71dd-03ab-7fbe-9714-c9472667f87f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9433-70e9-a85b-c246150c45cd",
      navn: "Sykepenger etter lovens kapittel 8",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a723b-5402-7641-b908-ae46e33cafaa",
          opprettet: "2025-11-11T10:24:42.114356",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T10:24:42.049205",
            meldingId: "7bec3806-4336-4b55-ab00-21b48c37f8f5",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a71dd-0504-70b4-b922-62b312da5573"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9445-734c-a7ee-045edf29b522",
      navn: "Brukeren er under utdanning eller opplæring",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a723b-5402-7641-b908-ae46e33cafab",
          opprettet: "2025-11-11T10:24:42.114393",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T10:24:42.049288",
            meldingId: "7bec3806-4336-4b55-ab00-21b48c37f8f5",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a71dd-03ab-7fbe-9714-c9472667f87f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d549",
      navn: "Bruker oppholder seg i Norge",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a723b-5403-7bfb-afe7-ac3cf9f6853a",
          opprettet: "2025-11-11T10:24:42.115195",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019a723b-5402-7641-b908-ae46e33cafa8"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5403-7bfb-afe7-ac3cf9f6853b",
          opprettet: "2025-11-11T10:24:42.115247",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a723b-3799-735f-932d-cc8dc1715e3b",
              "019a723b-5402-7641-b908-ae46e33cafa3",
              "019a723b-5402-7641-b908-ae46e33cafa4",
              "019a723b-5402-7641-b908-ae46e33cafa5",
              "019a723b-5402-7641-b908-ae46e33cafa6",
              "019a723b-5402-7641-b908-ae46e33cafa7",
              "019a723b-5402-7641-b908-ae46e33cafaa",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5403-7bfb-afe7-ac3cf9f6853c",
          opprettet: "2025-11-11T10:24:42.115276",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: ["019a723b-5402-7641-b908-ae46e33cafa9"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5403-7bfb-afe7-ac3cf9f6853d",
          opprettet: "2025-11-11T10:24:42.115301",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["019a723b-5402-7641-b908-ae46e33cafab"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5403-7bfb-afe7-ac3cf9f6853e",
          opprettet: "2025-11-11T10:24:42.115434",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErUsann",
            },
            opplysninger: ["019a723b-5402-7641-b908-ae46e33cafab"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5403-7bfb-afe7-ac3cf9f68540",
          opprettet: "2025-11-11T10:24:42.115947",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019a723b-5403-7bfb-afe7-ac3cf9f6853a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5403-7bfb-afe7-ac3cf9f68541",
          opprettet: "2025-11-11T10:24:42.115986",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019a723b-3799-735f-932d-cc8dc1715e3f",
              "019a723b-5403-7bfb-afe7-ac3cf9f6853d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5404-74c6-99fb-0bb9041b056c",
          opprettet: "2025-11-11T10:24:42.116461",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a723b-5403-7bfb-afe7-ac3cf9f6853a",
              "019a723b-5403-7bfb-afe7-ac3cf9f68540",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5404-74c6-99fb-0bb9041b056d",
          opprettet: "2025-11-11T10:24:42.116514",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a723b-5403-7bfb-afe7-ac3cf9f6853e",
              "019a723b-5403-7bfb-afe7-ac3cf9f68541",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5405-7515-b025-77e4f42b8320",
          opprettet: "2025-11-11T10:24:42.117263",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019a723b-3798-77e1-8cd0-e60fd3ca31e7",
              "019a723b-5404-74c6-99fb-0bb9041b056c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5406-7361-abfb-5c5761efd597",
          opprettet: "2025-11-11T10:24:42.118614",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 130160,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a71dd-0504-70b4-b922-62b312da5573"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5406-7361-abfb-5c5761efd598",
          opprettet: "2025-11-11T10:24:42.118712",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: "01K9RXT29QE02NYE1AD3F9C1B5",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["019a723b-378e-756a-a8ed-2c87038e85c5"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5406-7361-abfb-5c5761efd599",
          opprettet: "2025-11-11T10:24:42.118777",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 6,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a71dd-0504-70b4-b922-62b312da5573"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5406-7361-abfb-5c5761efd59a",
          opprettet: "2025-11-11T10:24:42.118828",
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
          id: "019a723b-5406-7361-abfb-5c5761efd59b",
          opprettet: "2025-11-11T10:24:42.11895",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 0.0024,
            enhet: "G",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a71dd-0504-70b4-b922-62b312da5573"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5407-7904-b28f-9b6c2b9315e5",
          opprettet: "2025-11-11T10:24:42.119066",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 37,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a71dd-0504-70b4-b922-62b312da5573"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5407-7904-b28f-9b6c2b9315e6",
          opprettet: "2025-11-11T10:24:42.11915",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 0.9,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a71dd-0504-70b4-b922-62b312da5573"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5407-7904-b28f-9b6c2b9315e7",
          opprettet: "2025-11-11T10:24:42.119199",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 260,
            enhet: "dager",
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a71dd-0504-70b4-b922-62b312da5573"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
          },
        },
      ],
      synlig: false,
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
          id: "019a723b-5408-7ca2-ab52-abdc33e5e2f2",
          opprettet: "2025-11-11T10:24:42.120608",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 40,
            enhet: "timer",
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Oppslag",
            },
            opplysninger: ["019a71dd-0504-70b4-b922-62b312da5573"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5408-7ca2-ab52-abdc33e5e2f3",
          opprettet: "2025-11-11T10:24:42.120653",
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
          id: "019a723b-5408-7ca2-ab52-abdc33e5e2f4",
          opprettet: "2025-11-11T10:24:42.120698",
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
          id: "019a723b-540c-7ce6-82cb-0e20eb0f37ae",
          opprettet: "2025-11-11T10:24:42.124429",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: "01K9RXT29QE02NYE1AD3F9C1B5",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Oppjuster",
            },
            opplysninger: [
              "019a723b-5406-7361-abfb-5c5761efd597",
              "019a723b-5406-7361-abfb-5c5761efd598",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-540c-7ce6-82cb-0e20eb0f37af",
          opprettet: "2025-11-11T10:24:42.124553",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a723b-5406-7361-abfb-5c5761efd597",
              "019a723b-5406-7361-abfb-5c5761efd599",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5411-7c66-b896-fc26acfcecf7",
          opprettet: "2025-11-11T10:24:42.129491",
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
              "019a723b-5408-7ca2-ab52-abdc33e5e2f3",
              "019a723b-5408-7ca2-ab52-abdc33e5e2f4",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5413-7306-a558-1f9a6320bffd",
          opprettet: "2025-11-11T10:24:42.131283",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 516474.9848421324,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a723b-540c-7ce6-82cb-0e20eb0f37ae"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5413-7306-a558-1f9a6320bffe",
          opprettet: "2025-11-11T10:24:42.13149",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 715568.1436686373,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a723b-540c-7ce6-82cb-0e20eb0f37ae"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5413-7306-a558-1f9a6320bfff",
          opprettet: "2025-11-11T10:24:42.131659",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 754952.6366111599,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["019a723b-540c-7ce6-82cb-0e20eb0f37ae"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5414-7c3f-89f6-7bfc3e48e850",
          opprettet: "2025-11-11T10:24:42.132816",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 516474.9848421324,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a723b-540c-7ce6-82cb-0e20eb0f37af",
              "019a723b-5413-7306-a558-1f9a6320bffd",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5414-7c3f-89f6-7bfc3e48e851",
          opprettet: "2025-11-11T10:24:42.132865",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 516474.9848421324,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a723b-540c-7ce6-82cb-0e20eb0f37af",
              "019a723b-5413-7306-a558-1f9a6320bffd",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5414-7c3f-89f6-7bfc3e48e852",
          opprettet: "2025-11-11T10:24:42.13291",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 715568.1436686373,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a723b-540c-7ce6-82cb-0e20eb0f37af",
              "019a723b-5413-7306-a558-1f9a6320bffe",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5414-7c3f-89f6-7bfc3e48e853",
          opprettet: "2025-11-11T10:24:42.132953",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 754952.6366111599,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "019a723b-540c-7ce6-82cb-0e20eb0f37af",
              "019a723b-5413-7306-a558-1f9a6320bfff",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5416-7467-9259-d64303ae1391",
          opprettet: "2025-11-11T10:24:42.134338",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 1986995.7651219296,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SumAv",
            },
            opplysninger: [
              "019a723b-5414-7c3f-89f6-7bfc3e48e851",
              "019a723b-5414-7c3f-89f6-7bfc3e48e852",
              "019a723b-5414-7c3f-89f6-7bfc3e48e853",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5418-7afc-87af-d635f801f4b6",
          opprettet: "2025-11-11T10:24:42.136",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 662331.9217073099,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019a723b-5406-7361-abfb-5c5761efd59a",
              "019a723b-5416-7467-9259-d64303ae1391",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5419-7ea8-bfe3-fa08ef5760d4",
          opprettet: "2025-11-11T10:24:42.137843",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 662331.9217073099,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "019a723b-5414-7c3f-89f6-7bfc3e48e850",
              "019a723b-5418-7afc-87af-d635f801f4b6",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-541b-77d5-9373-889d009a88a7",
          opprettet: "2025-11-11T10:24:42.139831",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 662332,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["019a723b-5419-7ea8-bfe3-fa08ef5760d4"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-541d-7a2e-b638-be6514e5ca37",
          opprettet: "2025-11-11T10:24:42.141373",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 662332,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "019a723b-378f-75c2-bfe1-d99fac0c0c90",
              "019a723b-541b-77d5-9373-889d009a88a7",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-541e-7341-80d4-23f7870adbe0",
          opprettet: "2025-11-11T10:24:42.142978",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 662332,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "019a723b-541b-77d5-9373-889d009a88a7",
              "019a723b-541d-7a2e-b638-be6514e5ca37",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-541f-7561-8a67-d7281f79d33d",
          opprettet: "2025-11-11T10:24:42.14306",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019a723b-541b-77d5-9373-889d009a88a7",
              "019a723b-541d-7a2e-b638-be6514e5ca37",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5420-7c49-bfce-9387b4cfea3e",
          opprettet: "2025-11-11T10:24:42.144701",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 1589.5968,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a723b-5406-7361-abfb-5c5761efd59b",
              "019a723b-541e-7341-80d4-23f7870adbe0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5420-7c49-bfce-9387b4cfea3f",
          opprettet: "2025-11-11T10:24:42.144841",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 596098.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a723b-5407-7904-b28f-9b6c2b9315e6",
              "019a723b-541e-7341-80d4-23f7870adbe0",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5420-7c49-bfce-9387b4cfea40",
          opprettet: "2025-11-11T10:24:42.144915",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
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
              "019a723b-5408-7ca2-ab52-abdc33e5e2f3",
              "019a723b-541f-7561-8a67-d7281f79d33d",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5422-7610-8502-8886e83ec220",
          opprettet: "2025-11-11T10:24:42.14635",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 1590,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["019a723b-5420-7c49-bfce-9387b4cfea3e"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5422-7610-8502-8886e83ec221",
          opprettet: "2025-11-11T10:24:42.146473",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 2292.6876923076925,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "019a723b-5407-7904-b28f-9b6c2b9315e7",
              "019a723b-5420-7c49-bfce-9387b4cfea3f",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5422-7610-8502-8886e83ec222",
          opprettet: "2025-11-11T10:24:42.146569",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
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
              "019a723b-378e-756a-a8ed-2c87038e85be",
              "019a723b-5408-7ca2-ab52-abdc33e5e2f2",
              "019a723b-5411-7c66-b896-fc26acfcecf7",
              "019a723b-5420-7c49-bfce-9387b4cfea40",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5424-7816-bbc3-502e72035544",
          opprettet: "2025-11-11T10:24:42.148229",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 2293,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["019a723b-5422-7610-8502-8886e83ec221"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5424-7816-bbc3-502e72035545",
          opprettet: "2025-11-11T10:24:42.148336",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "SjekkAvTerskel",
            },
            opplysninger: [
              "019a723b-3797-7201-b026-9f74bd9fa4f6",
              "019a723b-3799-735f-932d-cc8dc1715e3d",
              "019a723b-5422-7610-8502-8886e83ec222",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-5425-75af-92ba-81bced56daa1",
          opprettet: "2025-11-11T10:24:42.149999",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019a723b-3798-77e1-8cd0-e60fd3ca31de",
              "019a723b-3799-735f-932d-cc8dc1715e3e",
              "019a723b-5403-7bfb-afe7-ac3cf9f6853c",
              "019a723b-5424-7816-bbc3-502e72035545",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-6339-7606-87a1-795af682015e",
          opprettet: "2025-11-11T10:24:46.009483",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            søknadBarnId: "9051b8f0-9b73-4dd4-9240-e5e346aeacbb",
            verdi: [],
            datatype: "barn",
          },
          kilde: {
            type: "System",
            registrert: "2025-11-11T10:24:45.93772",
            meldingId: "dbe93574-5576-4ace-a288-fe3923b98e0a",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019a71dd-03ab-7fbe-9714-c9472667f87f"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Register",
    },
    {
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a23c",
      navn: "Antall barn som gir rett til barnetillegg",
      datatype: "heltall",
      perioder: [
        {
          id: "019a723b-633c-7930-b677-8ce725935496",
          opprettet: "2025-11-11T10:24:46.012145",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 0,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "AntallAv",
            },
            opplysninger: ["019a723b-6339-7606-87a1-795af682015e"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-633e-7c37-8d7e-ab6cb9bf985e",
          opprettet: "2025-11-11T10:24:46.014116",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "019a723b-5407-7904-b28f-9b6c2b9315e5",
              "019a723b-633c-7930-b677-8ce725935496",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-633f-779c-b62d-5807fbe001ac",
          opprettet: "2025-11-11T10:24:46.015959",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 1590,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "019a723b-5422-7610-8502-8886e83ec220",
              "019a723b-633e-7c37-8d7e-ab6cb9bf985e",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-6340-7ed0-82ba-793de9e19769",
          opprettet: "2025-11-11T10:24:46.016087",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a723b-5407-7904-b28f-9b6c2b9315e5",
              "019a723b-633e-7c37-8d7e-ab6cb9bf985e",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-6341-775b-8fae-05563bf13270",
          opprettet: "2025-11-11T10:24:46.017904",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019a723b-5424-7816-bbc3-502e72035544",
              "019a723b-633f-779c-b62d-5807fbe001ac",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-6343-73ae-a490-ce7228d4cfd5",
          opprettet: "2025-11-11T10:24:46.019753",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 1590,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019a723b-5422-7610-8502-8886e83ec220",
              "019a723b-6341-775b-8fae-05563bf13270",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-6345-7cc4-8651-5a935417dae1",
          opprettet: "2025-11-11T10:24:46.02144",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: 1590,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "019a723b-379b-74f0-aecb-c1ab89e00533",
              "019a723b-6343-73ae-a490-ce7228d4cfd5",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-6345-7cc4-8651-5a935417dae2",
          opprettet: "2025-11-11T10:24:46.021553",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "019a723b-379b-74f0-aecb-c1ab89e00533",
              "019a723b-6343-73ae-a490-ce7228d4cfd5",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
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
          id: "019a723b-6348-7e64-ab03-c02cf8ca80c2",
          opprettet: "2025-11-11T10:24:46.024307",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a723b-6340-7ed0-82ba-793de9e19769",
              "019a723b-6345-7cc4-8651-5a935417dae2",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.10-14.22-9b7b492",
          },
        },
      ],
      synlig: false,
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
          id: "019a7821-8fd7-7094-b1c6-32431bf53c3a",
          opprettet: "2025-11-12T13:54:16.791905",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-11-12T13:54:16.62552",
            ident: "Z993298",
            begrunnelse: {
              verdi: "asd",
              sistEndret: "2025-11-12T13:54:16.625442",
            },
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: true,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9441-7d1b-a06a-6727543a141f",
      navn: "Det er godkjent at bruker kun søker deltidsarbeid",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a7821-8fe2-7ca4-bc99-d7a2fe67a9cb",
          opprettet: "2025-11-12T13:54:16.802719",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019a7821-8fd7-7094-b1c6-32431bf53c3a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.12-12.10-7924d25",
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
          id: "019a7821-8fec-7970-9a5e-181c6078599f",
          opprettet: "2025-11-12T13:54:16.812564",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a7821-8fd7-7094-b1c6-32431bf53c3a",
              "019a7821-8fe2-7ca4-bc99-d7a2fe67a9cb",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.12-12.10-7924d25",
          },
        },
      ],
      synlig: false,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bd9",
      navn: "Kan jobbe i hele Norge",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a90d4-4c54-77fa-b7ab-a5ceefa9bb42",
          opprettet: "2025-11-17T09:00:23.6361",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          gyldigTilOgMed: "2025-11-17",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-11-17T09:00:23.55114",
            ident: "Z993298",
            begrunnelse: {
              verdi: "123",
              sistEndret: "2025-11-17T09:00:23.551132",
            },
          },
        },
        {
          id: "019a90d4-748d-7e4b-b6aa-c711789b394b",
          opprettet: "2025-11-17T09:00:33.933452",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-18",
          gyldigTilOgMed: "2025-11-20",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-11-17T09:00:33.857874",
            ident: "Z993298",
            begrunnelse: {
              verdi: "je",
              sistEndret: "2025-11-17T09:00:33.857867",
            },
          },
        },
        {
          id: "019a90d4-8cf8-7f55-8525-19f6f18ebc20",
          opprettet: "2025-11-17T09:00:40.184232",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-21",
          gyldigTilOgMed: "2025-11-30",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-11-17T09:00:40.118947",
            ident: "Z993298",
            begrunnelse: {
              verdi: "aaa",
              sistEndret: "2025-11-17T09:00:40.11894",
            },
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: true,
      formål: "Bruker",
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bda",
      navn: "Det er godkjent at bruker kun søker arbeid lokalt",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a90d4-4c56-7818-ba0c-a9e16ea1e442",
          opprettet: "2025-11-17T09:00:23.638148",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          gyldigTilOgMed: "2025-11-17",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Utgangspunkt",
            },
            opplysninger: ["019a90d4-4c54-77fa-b7ab-a5ceefa9bb42"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.11.14-09.52-763aab9",
          },
        },
      ],
      synlig: false,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bdb",
      navn: "Oppfyller kravet til mobilitet",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a90d4-4c57-7b9b-8740-39b13e2a2990",
          opprettet: "2025-11-17T09:00:23.639234",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          gyldigTilOgMed: "2025-11-17",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "019a90d4-4c54-77fa-b7ab-a5ceefa9bb42",
              "019a90d4-4c56-7818-ba0c-a9e16ea1e442",
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
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877be2",
      navn: "Reell arbeidssøker",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a90d4-4c5b-7e6b-a793-6e86a139ff91",
          opprettet: "2025-11-17T09:00:23.643131",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          gyldigTilOgMed: "2025-11-17",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "019a723b-378f-75c2-bfe1-d99fac0c0c8c",
              "019a723b-378f-75c2-bfe1-d99fac0c0c8d",
              "019a723b-3792-7c7f-9ef3-0a7ae218a75c",
              "019a7821-8fec-7970-9a5e-181c6078599f",
              "019a90d4-4c57-7b9b-8740-39b13e2a2990",
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
      opplysningTypeId: "01990a09-0eab-7957-b88f-14484a50e194",
      navn: "Har løpende rett på dagpenger",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a90d4-8cfe-7cf2-a7df-b72caca1de42",
          opprettet: "2025-11-17T09:00:40.190716",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-11",
          gyldigTilOgMed: "2025-11-17",
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
