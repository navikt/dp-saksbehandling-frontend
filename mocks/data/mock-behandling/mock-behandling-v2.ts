import { components } from "../../../openapi/behandling-typer";

export const mockBehandlingPeriodisertV2: components["schemas"]["BehandlingsresultatV2"] = {
  behandlingId: "01997148-5db5-70b4-b4f1-607730450315",
  behandletHendelse: {
    datatype: "UUID",
    id: "01997148-5c2d-70f5-9044-5bc001c85348",
    type: "Manuell",
  },
  kreverTotrinnskontroll: true,
  basertPå: "019961bc-fa22-7fd7-bf59-65f9558605f1",
  tilstand: "ForslagTilVedtak",
  automatisk: false,
  ident: "14839099313",
  avklaringer: [
    {
      id: "01997148-5db5-70b4-b4f1-607730450313",
      kode: "ManuellBehandling",
      tittel: "Manuell behandling",
      beskrivelse: "Behandlingen er opprettet manuelt og kan ikke automatisk behandles",
      kanKvitteres: true,
      status: "Åpen",
      maskinelt: false,
      sistEndret: "2025-09-22T13:56:32.053634",
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
      perioder: [
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-06-25",
          opplysningsTypeId: ["0194881f-940b-76ff-acf5-ba7bcb367237"],
        },
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
      perioder: [
        {
          status: "IkkeRelevant",
          gyldigFraOgMed: "2025-06-25",
          opplysningsTypeId: ["0194881f-943f-78d9-b874-00a4944c54f1"],
        },
      ],
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
      perioder: [
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-06-25",
          gyldigTilOgMed: "2025-11-09",
          opplysningsTypeId: ["01990a09-0eab-7957-b88f-14484a50e194"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-11-10",
          opplysningsTypeId: ["01990a09-0eab-7957-b88f-14484a50e194"],
        },
      ],
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
      perioder: [
        {
          status: "IkkeRelevant",
          gyldigFraOgMed: "2025-06-25",
          opplysningsTypeId: ["0194881f-9413-77ce-92ec-d29700f0424c"],
        },
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
      perioder: [
        {
          status: "IkkeRelevant",
          gyldigFraOgMed: "2025-06-25",
          opplysningsTypeId: ["0194881f-9443-72b4-8b30-5f6cdb24d54d"],
        },
        {
          status: "IkkeRelevant",
          gyldigFraOgMed: "2025-06-25",
          opplysningsTypeId: ["0194881f-9443-72b4-8b30-5f6cdb24d54b"],
        },
        {
          status: "IkkeRelevant",
          gyldigFraOgMed: "2025-06-25",
          opplysningsTypeId: ["0194881f-9443-72b4-8b30-5f6cdb24d54e"],
        },
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
      perioder: [
        {
          status: "IkkeRelevant",
          gyldigFraOgMed: "2025-06-25",
          opplysningsTypeId: ["0194881f-9442-707b-a6ee-e96c06877bd8"],
        },
        {
          status: "IkkeRelevant",
          gyldigFraOgMed: "2025-06-25",
          opplysningsTypeId: ["0194881f-9442-707b-a6ee-e96c06877bdb"],
        },
        {
          status: "IkkeRelevant",
          gyldigFraOgMed: "2025-06-25",
          opplysningsTypeId: ["0194881f-9442-707b-a6ee-e96c06877bdd"],
        },
        {
          status: "IkkeRelevant",
          opplysningsTypeId: ["0194881f-9442-707b-a6ee-e96c06877bdf"],
        },
        {
          status: "IkkeRelevant",
          gyldigFraOgMed: "2025-06-25",
          opplysningsTypeId: ["0194881f-9442-707b-a6ee-e96c06877be2"],
        },
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
      perioder: [
        {
          status: "IkkeRelevant",
          gyldigFraOgMed: "2025-06-23",
          opplysningsTypeId: ["0194881f-9442-707b-a6ee-e96c06877be1"],
        },
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
      perioder: [
        {
          status: "IkkeRelevant",
          gyldigFraOgMed: "2025-06-25",
          opplysningsTypeId: ["0194881f-91df-746a-a8ac-4a6b2b30685f"],
        },
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
      perioder: [
        {
          status: "IkkeRelevant",
          gyldigFraOgMed: "2025-06-25",
          gyldigTilOgMed: "2025-10-08",
          opplysningsTypeId: ["0194881f-9435-72a8-b1ce-9575cbc2a76e"],
        },
        {
          status: "IkkeRelevant",
          opplysningsTypeId: ["0194881f-9435-72a8-b1ce-9575cbc2a761"],
        },
        {
          status: "IkkeRelevant",
          gyldigFraOgMed: "2025-06-25",
          gyldigTilOgMed: "2025-10-08",
          opplysningsTypeId: ["0194881f-9435-72a8-b1ce-9575cbc2a76f"],
        },
        {
          status: "IkkeRelevant",
          gyldigFraOgMed: "2025-10-09",
          opplysningsTypeId: ["0194881f-9435-72a8-b1ce-9575cbc2a76e"],
        },
        {
          status: "IkkeRelevant",
          gyldigFraOgMed: "2025-10-09",
          opplysningsTypeId: ["0194881f-9435-72a8-b1ce-9575cbc2a76f"],
        },
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
      perioder: [
        {
          status: "IkkeRelevant",
          gyldigFraOgMed: "2025-06-25",
          opplysningsTypeId: ["0194881f-9445-734c-a7ee-045edf29b52d"],
        },
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
      perioder: [
        {
          status: "IkkeRelevant",
          gyldigFraOgMed: "2025-06-25",
          opplysningsTypeId: ["0194881f-9447-7e36-a569-3e9f42bff9f7"],
        },
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
      perioder: [
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-25",
          gyldigTilOgMed: "2025-09-07",
          opplysningsTypeId: ["01956abd-2871-7517-a332-b462c0c31292"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-08-25",
          gyldigTilOgMed: "2025-08-25",
          opplysningsTypeId: ["01948ea0-36e8-72cc-aa4f-16bc446ed3bd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-25",
          gyldigTilOgMed: "2025-08-25",
          opplysningsTypeId: ["01948ea0-e25c-7c47-8429-a05045d80eca"],
        },
        {
          status: "IkkeOppfylt",
          gyldigFraOgMed: "2025-08-25",
          gyldigTilOgMed: "2025-08-25",
          opplysningsTypeId: ["01956ab8-126c-7636-803e-a5d87eda2015"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-08-26",
          gyldigTilOgMed: "2025-08-26",
          opplysningsTypeId: ["01948ea0-36e8-72cc-aa4f-16bc446ed3bd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-26",
          gyldigTilOgMed: "2025-08-26",
          opplysningsTypeId: ["01948ea0-e25c-7c47-8429-a05045d80eca"],
        },
        {
          status: "IkkeOppfylt",
          gyldigFraOgMed: "2025-08-26",
          gyldigTilOgMed: "2025-08-26",
          opplysningsTypeId: ["01956ab8-126c-7636-803e-a5d87eda2015"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-08-27",
          gyldigTilOgMed: "2025-08-27",
          opplysningsTypeId: ["01948ea0-36e8-72cc-aa4f-16bc446ed3bd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-27",
          gyldigTilOgMed: "2025-08-27",
          opplysningsTypeId: ["01948ea0-e25c-7c47-8429-a05045d80eca"],
        },
        {
          status: "IkkeOppfylt",
          gyldigFraOgMed: "2025-08-27",
          gyldigTilOgMed: "2025-08-27",
          opplysningsTypeId: ["01956ab8-126c-7636-803e-a5d87eda2015"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-08-28",
          gyldigTilOgMed: "2025-08-28",
          opplysningsTypeId: ["01948ea0-36e8-72cc-aa4f-16bc446ed3bd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-28",
          gyldigTilOgMed: "2025-08-28",
          opplysningsTypeId: ["01948ea0-e25c-7c47-8429-a05045d80eca"],
        },
        {
          status: "IkkeOppfylt",
          gyldigFraOgMed: "2025-08-28",
          gyldigTilOgMed: "2025-08-28",
          opplysningsTypeId: ["01956ab8-126c-7636-803e-a5d87eda2015"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-08-29",
          gyldigTilOgMed: "2025-08-29",
          opplysningsTypeId: ["01948ea0-36e8-72cc-aa4f-16bc446ed3bd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-29",
          gyldigTilOgMed: "2025-08-29",
          opplysningsTypeId: ["01948ea0-e25c-7c47-8429-a05045d80eca"],
        },
        {
          status: "IkkeOppfylt",
          gyldigFraOgMed: "2025-08-29",
          gyldigTilOgMed: "2025-08-29",
          opplysningsTypeId: ["01956ab8-126c-7636-803e-a5d87eda2015"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-08-30",
          gyldigTilOgMed: "2025-08-30",
          opplysningsTypeId: ["01948ea0-36e8-72cc-aa4f-16bc446ed3bd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-30",
          gyldigTilOgMed: "2025-08-30",
          opplysningsTypeId: ["01948ea0-e25c-7c47-8429-a05045d80eca"],
        },
        {
          status: "IkkeOppfylt",
          gyldigFraOgMed: "2025-08-30",
          gyldigTilOgMed: "2025-08-30",
          opplysningsTypeId: ["01956ab8-126c-7636-803e-a5d87eda2015"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-08-31",
          gyldigTilOgMed: "2025-08-31",
          opplysningsTypeId: ["01948ea0-36e8-72cc-aa4f-16bc446ed3bd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-31",
          gyldigTilOgMed: "2025-08-31",
          opplysningsTypeId: ["01948ea0-e25c-7c47-8429-a05045d80eca"],
        },
        {
          status: "IkkeOppfylt",
          gyldigFraOgMed: "2025-08-31",
          gyldigTilOgMed: "2025-08-31",
          opplysningsTypeId: ["01956ab8-126c-7636-803e-a5d87eda2015"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-09-01",
          gyldigTilOgMed: "2025-09-01",
          opplysningsTypeId: ["01948ea0-36e8-72cc-aa4f-16bc446ed3bd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-01",
          gyldigTilOgMed: "2025-09-01",
          opplysningsTypeId: ["01948ea0-e25c-7c47-8429-a05045d80eca"],
        },
        {
          status: "IkkeOppfylt",
          gyldigFraOgMed: "2025-09-01",
          gyldigTilOgMed: "2025-09-01",
          opplysningsTypeId: ["01956ab8-126c-7636-803e-a5d87eda2015"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-09-02",
          gyldigTilOgMed: "2025-09-02",
          opplysningsTypeId: ["01948ea0-36e8-72cc-aa4f-16bc446ed3bd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-02",
          gyldigTilOgMed: "2025-09-02",
          opplysningsTypeId: ["01948ea0-e25c-7c47-8429-a05045d80eca"],
        },
        {
          status: "IkkeOppfylt",
          gyldigFraOgMed: "2025-09-02",
          gyldigTilOgMed: "2025-09-02",
          opplysningsTypeId: ["01956ab8-126c-7636-803e-a5d87eda2015"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-09-03",
          gyldigTilOgMed: "2025-09-03",
          opplysningsTypeId: ["01948ea0-36e8-72cc-aa4f-16bc446ed3bd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-03",
          gyldigTilOgMed: "2025-09-03",
          opplysningsTypeId: ["01948ea0-e25c-7c47-8429-a05045d80eca"],
        },
        {
          status: "IkkeOppfylt",
          gyldigFraOgMed: "2025-09-03",
          gyldigTilOgMed: "2025-09-03",
          opplysningsTypeId: ["01956ab8-126c-7636-803e-a5d87eda2015"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-09-04",
          gyldigTilOgMed: "2025-09-04",
          opplysningsTypeId: ["01948ea0-36e8-72cc-aa4f-16bc446ed3bd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-04",
          gyldigTilOgMed: "2025-09-04",
          opplysningsTypeId: ["01948ea0-e25c-7c47-8429-a05045d80eca"],
        },
        {
          status: "IkkeOppfylt",
          gyldigFraOgMed: "2025-09-04",
          gyldigTilOgMed: "2025-09-04",
          opplysningsTypeId: ["01956ab8-126c-7636-803e-a5d87eda2015"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-09-05",
          gyldigTilOgMed: "2025-09-05",
          opplysningsTypeId: ["01948ea0-36e8-72cc-aa4f-16bc446ed3bd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-05",
          gyldigTilOgMed: "2025-09-05",
          opplysningsTypeId: ["01948ea0-e25c-7c47-8429-a05045d80eca"],
        },
        {
          status: "IkkeOppfylt",
          gyldigFraOgMed: "2025-09-05",
          gyldigTilOgMed: "2025-09-05",
          opplysningsTypeId: ["01956ab8-126c-7636-803e-a5d87eda2015"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-09-06",
          gyldigTilOgMed: "2025-09-06",
          opplysningsTypeId: ["01948ea0-36e8-72cc-aa4f-16bc446ed3bd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-06",
          gyldigTilOgMed: "2025-09-06",
          opplysningsTypeId: ["01948ea0-e25c-7c47-8429-a05045d80eca"],
        },
        {
          status: "IkkeOppfylt",
          gyldigFraOgMed: "2025-09-06",
          gyldigTilOgMed: "2025-09-06",
          opplysningsTypeId: ["01956ab8-126c-7636-803e-a5d87eda2015"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-09-07",
          gyldigTilOgMed: "2025-09-07",
          opplysningsTypeId: ["01948ea0-36e8-72cc-aa4f-16bc446ed3bd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-07",
          gyldigTilOgMed: "2025-09-07",
          opplysningsTypeId: ["01948ea0-e25c-7c47-8429-a05045d80eca"],
        },
        {
          status: "IkkeOppfylt",
          gyldigFraOgMed: "2025-09-07",
          gyldigTilOgMed: "2025-09-07",
          opplysningsTypeId: ["01956ab8-126c-7636-803e-a5d87eda2015"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-25",
          gyldigTilOgMed: "2025-09-07",
          opplysningsTypeId: ["01973a27-d8b3-7ffd-a81a-a3826963b079"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-25",
          gyldigTilOgMed: "2025-09-07",
          opplysningsTypeId: ["01994cfd-9a27-762e-81fa-61f550467c95"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-08-25",
          gyldigTilOgMed: "2025-08-25",
          opplysningsTypeId: ["01948ea0-ffdc-7964-ab55-52a7e35e1020"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-25",
          gyldigTilOgMed: "2025-08-25",
          opplysningsTypeId: ["01957069-d7d5-7f7c-b359-c00686fbf1f7"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-08-26",
          gyldigTilOgMed: "2025-08-26",
          opplysningsTypeId: ["01948ea0-ffdc-7964-ab55-52a7e35e1020"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-26",
          gyldigTilOgMed: "2025-08-26",
          opplysningsTypeId: ["01957069-d7d5-7f7c-b359-c00686fbf1f7"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-08-27",
          gyldigTilOgMed: "2025-08-27",
          opplysningsTypeId: ["01948ea0-ffdc-7964-ab55-52a7e35e1020"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-27",
          gyldigTilOgMed: "2025-08-27",
          opplysningsTypeId: ["01957069-d7d5-7f7c-b359-c00686fbf1f7"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-08-28",
          gyldigTilOgMed: "2025-08-28",
          opplysningsTypeId: ["01948ea0-ffdc-7964-ab55-52a7e35e1020"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-28",
          gyldigTilOgMed: "2025-08-28",
          opplysningsTypeId: ["01957069-d7d5-7f7c-b359-c00686fbf1f7"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-08-29",
          gyldigTilOgMed: "2025-08-29",
          opplysningsTypeId: ["01948ea0-ffdc-7964-ab55-52a7e35e1020"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-29",
          gyldigTilOgMed: "2025-08-29",
          opplysningsTypeId: ["01957069-d7d5-7f7c-b359-c00686fbf1f7"],
        },
        {
          status: "IkkeOppfylt",
          gyldigFraOgMed: "2025-08-30",
          gyldigTilOgMed: "2025-08-30",
          opplysningsTypeId: ["01948ea0-ffdc-7964-ab55-52a7e35e1020"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-30",
          gyldigTilOgMed: "2025-08-30",
          opplysningsTypeId: ["01957069-d7d5-7f7c-b359-c00686fbf1f7"],
        },
        {
          status: "IkkeOppfylt",
          gyldigFraOgMed: "2025-08-31",
          gyldigTilOgMed: "2025-08-31",
          opplysningsTypeId: ["01948ea0-ffdc-7964-ab55-52a7e35e1020"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-31",
          gyldigTilOgMed: "2025-08-31",
          opplysningsTypeId: ["01957069-d7d5-7f7c-b359-c00686fbf1f7"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-09-01",
          gyldigTilOgMed: "2025-09-01",
          opplysningsTypeId: ["01948ea0-ffdc-7964-ab55-52a7e35e1020"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-01",
          gyldigTilOgMed: "2025-09-01",
          opplysningsTypeId: ["01957069-d7d5-7f7c-b359-c00686fbf1f7"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-09-02",
          gyldigTilOgMed: "2025-09-02",
          opplysningsTypeId: ["01948ea0-ffdc-7964-ab55-52a7e35e1020"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-02",
          gyldigTilOgMed: "2025-09-02",
          opplysningsTypeId: ["01957069-d7d5-7f7c-b359-c00686fbf1f7"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-09-03",
          gyldigTilOgMed: "2025-09-03",
          opplysningsTypeId: ["01948ea0-ffdc-7964-ab55-52a7e35e1020"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-03",
          gyldigTilOgMed: "2025-09-03",
          opplysningsTypeId: ["01957069-d7d5-7f7c-b359-c00686fbf1f7"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-09-04",
          gyldigTilOgMed: "2025-09-04",
          opplysningsTypeId: ["01948ea0-ffdc-7964-ab55-52a7e35e1020"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-04",
          gyldigTilOgMed: "2025-09-04",
          opplysningsTypeId: ["01957069-d7d5-7f7c-b359-c00686fbf1f7"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-09-05",
          gyldigTilOgMed: "2025-09-05",
          opplysningsTypeId: ["01948ea0-ffdc-7964-ab55-52a7e35e1020"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-05",
          gyldigTilOgMed: "2025-09-05",
          opplysningsTypeId: ["01957069-d7d5-7f7c-b359-c00686fbf1f7"],
        },
        {
          status: "IkkeOppfylt",
          gyldigFraOgMed: "2025-09-06",
          gyldigTilOgMed: "2025-09-06",
          opplysningsTypeId: ["01948ea0-ffdc-7964-ab55-52a7e35e1020"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-06",
          gyldigTilOgMed: "2025-09-06",
          opplysningsTypeId: ["01957069-d7d5-7f7c-b359-c00686fbf1f7"],
        },
        {
          status: "IkkeOppfylt",
          gyldigFraOgMed: "2025-09-07",
          gyldigTilOgMed: "2025-09-07",
          opplysningsTypeId: ["01948ea0-ffdc-7964-ab55-52a7e35e1020"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-07",
          gyldigTilOgMed: "2025-09-07",
          opplysningsTypeId: ["01957069-d7d5-7f7c-b359-c00686fbf1f7"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-25",
          gyldigTilOgMed: "2025-08-25",
          opplysningsTypeId: ["01992934-66e4-7606-bdd3-c6c9dd420ffd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-25",
          gyldigTilOgMed: "2025-08-25",
          opplysningsTypeId: ["01992956-e349-76b1-8f68-c9d481df3a32"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-26",
          gyldigTilOgMed: "2025-08-26",
          opplysningsTypeId: ["01992934-66e4-7606-bdd3-c6c9dd420ffd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-26",
          gyldigTilOgMed: "2025-08-26",
          opplysningsTypeId: ["01992956-e349-76b1-8f68-c9d481df3a32"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-27",
          gyldigTilOgMed: "2025-08-27",
          opplysningsTypeId: ["01992934-66e4-7606-bdd3-c6c9dd420ffd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-27",
          gyldigTilOgMed: "2025-08-27",
          opplysningsTypeId: ["01992956-e349-76b1-8f68-c9d481df3a32"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-28",
          gyldigTilOgMed: "2025-08-28",
          opplysningsTypeId: ["01992934-66e4-7606-bdd3-c6c9dd420ffd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-28",
          gyldigTilOgMed: "2025-08-28",
          opplysningsTypeId: ["01992956-e349-76b1-8f68-c9d481df3a32"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-29",
          gyldigTilOgMed: "2025-08-29",
          opplysningsTypeId: ["01992934-66e4-7606-bdd3-c6c9dd420ffd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-29",
          gyldigTilOgMed: "2025-08-29",
          opplysningsTypeId: ["01992956-e349-76b1-8f68-c9d481df3a32"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-30",
          gyldigTilOgMed: "2025-08-30",
          opplysningsTypeId: ["01992934-66e4-7606-bdd3-c6c9dd420ffd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-30",
          gyldigTilOgMed: "2025-08-30",
          opplysningsTypeId: ["01992956-e349-76b1-8f68-c9d481df3a32"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-31",
          gyldigTilOgMed: "2025-08-31",
          opplysningsTypeId: ["01992934-66e4-7606-bdd3-c6c9dd420ffd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-08-31",
          gyldigTilOgMed: "2025-08-31",
          opplysningsTypeId: ["01992956-e349-76b1-8f68-c9d481df3a32"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-01",
          gyldigTilOgMed: "2025-09-01",
          opplysningsTypeId: ["01992934-66e4-7606-bdd3-c6c9dd420ffd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-01",
          gyldigTilOgMed: "2025-09-01",
          opplysningsTypeId: ["01992956-e349-76b1-8f68-c9d481df3a32"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-02",
          gyldigTilOgMed: "2025-09-02",
          opplysningsTypeId: ["01992934-66e4-7606-bdd3-c6c9dd420ffd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-02",
          gyldigTilOgMed: "2025-09-02",
          opplysningsTypeId: ["01992956-e349-76b1-8f68-c9d481df3a32"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-03",
          gyldigTilOgMed: "2025-09-03",
          opplysningsTypeId: ["01992934-66e4-7606-bdd3-c6c9dd420ffd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-03",
          gyldigTilOgMed: "2025-09-03",
          opplysningsTypeId: ["01992956-e349-76b1-8f68-c9d481df3a32"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-04",
          gyldigTilOgMed: "2025-09-04",
          opplysningsTypeId: ["01992934-66e4-7606-bdd3-c6c9dd420ffd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-04",
          gyldigTilOgMed: "2025-09-04",
          opplysningsTypeId: ["01992956-e349-76b1-8f68-c9d481df3a32"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-05",
          gyldigTilOgMed: "2025-09-05",
          opplysningsTypeId: ["01992934-66e4-7606-bdd3-c6c9dd420ffd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-05",
          gyldigTilOgMed: "2025-09-05",
          opplysningsTypeId: ["01992956-e349-76b1-8f68-c9d481df3a32"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-06",
          gyldigTilOgMed: "2025-09-06",
          opplysningsTypeId: ["01992934-66e4-7606-bdd3-c6c9dd420ffd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-06",
          gyldigTilOgMed: "2025-09-06",
          opplysningsTypeId: ["01992956-e349-76b1-8f68-c9d481df3a32"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-07",
          gyldigTilOgMed: "2025-09-07",
          opplysningsTypeId: ["01992934-66e4-7606-bdd3-c6c9dd420ffd"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-09-07",
          gyldigTilOgMed: "2025-09-07",
          opplysningsTypeId: ["01992956-e349-76b1-8f68-c9d481df3a32"],
        },
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
      perioder: [
        {
          status: "Info",
          gyldigFraOgMed: "2025-06-25",
          opplysningsTypeId: ["0194881f-9414-7823-8d29-0e25b7feb7ce"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-06-25",
          opplysningsTypeId: ["0194881f-9414-7823-8d29-0e25b7feb7cf"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-06-25",
          opplysningsTypeId: ["0194881f-9414-7823-8d29-0e25b7feb7d0"],
        },
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
      perioder: [
        {
          status: "IkkeOppfylt",
          opplysningsTypeId: ["0194881f-9444-7a73-a458-0af81c034d85"],
        },
        {
          status: "IkkeOppfylt",
          opplysningsTypeId: ["0194881f-9444-7a73-a458-0af81c034d86"],
        },
        {
          status: "IkkeOppfylt",
          opplysningsTypeId: ["0194881f-9444-7a73-a458-0af81c034d87"],
        },
        {
          status: "IkkeOppfylt",
          opplysningsTypeId: ["0194881f-9444-7a73-a458-0af81c034d88"],
        },
        {
          status: "Oppfylt",
          opplysningsTypeId: ["0194881f-9444-7a73-a458-0af81c034d89"],
        },
        {
          status: "Oppfylt",
          opplysningsTypeId: ["0194881f-9444-7a73-a458-0af81c034d8a"],
        },
        {
          status: "Oppfylt",
          opplysningsTypeId: ["0194881f-9444-7a73-a458-0af81c034d8b"],
        },
        {
          status: "Oppfylt",
          gyldigFraOgMed: "2025-06-25",
          opplysningsTypeId: ["0194ff86-a035-7eb0-9c60-21899f7cc0c1"],
        },
        {
          status: "IkkeOppfylt",
          opplysningsTypeId: ["01980cf4-9010-7bcf-b578-ca5a825d64ef"],
        },
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
      perioder: [
        {
          status: "Info",
          opplysningsTypeId: ["0194881f-91d1-7df2-ba1d-4533f37fcc77"],
        },
        {
          status: "Info",
          opplysningsTypeId: ["0194881f-91d1-7df2-ba1d-4533f37fcc73"],
        },
        {
          status: "Info",
          opplysningsTypeId: ["0194881f-91d1-7df2-ba1d-4533f37fcc74"],
        },
        {
          status: "Info",
          opplysningsTypeId: ["0194881f-91d1-7df2-ba1d-4533f37fcc75"],
        },
        {
          status: "Info",
          gyldigFraOgMed: "2025-06-25",
          opplysningsTypeId: ["0194881f-91d1-7df2-ba1d-4533f37fcc76"],
        },
      ],
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
          id: "01979c85-ac69-78b2-a880-c38a86d583ca",
          opprettet: "2025-06-23T13:21:35.593281",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 15448847,
            datatype: "heltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-06-23T13:21:35.593242",
            meldingId: "b21101f5-d4c4-410e-a0a5-92b8761162cf",
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
          id: "01979c85-ac69-78b2-a880-c38a86d583cc",
          opprettet: "2025-06-23T13:21:35.593367",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "29ef523c-eb70-4a1b-873a-31a0ebd50ed8",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-06-23T13:21:35.593364",
            meldingId: "b21101f5-d4c4-410e-a0a5-92b8761162cf",
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
          id: "01979c85-ac69-78b2-a880-c38a86d583ce",
          opprettet: "2025-06-23T13:21:35.593391",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-23",
          gyldigTilOgMed: "2025-09-18",
          verdi: {
            verdi: "SøknadInnsendtHendelse",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-06-23T13:21:35.59339",
            meldingId: "b21101f5-d4c4-410e-a0a5-92b8761162cf",
          },
        },
        {
          id: "019961bc-fa22-7fd7-bf59-65f9558605ed",
          opprettet: "2025-09-19T13:29:58.818057",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-19",
          gyldigTilOgMed: "2025-09-19",
          verdi: {
            verdi: "BeregnMeldekortHendelse",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.818037",
            meldingId: "c88a2555-0b0c-4e86-ae78-d6db5f3414cb",
          },
        },
        {
          id: "01997148-5db5-70b4-b4f1-607730450312",
          opprettet: "2025-09-22T13:56:32.053578",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-09-22",
          gyldigTilOgMed: "2025-09-22",
          verdi: {
            verdi: "OpprettBehandlingHendelse",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-22T13:56:32.053569",
            meldingId: "01997148-5c2e-7157-9ac9-afae13348950",
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
          id: "01979c85-b14b-7400-82cf-455da35a917f",
          opprettet: "2025-06-23T13:21:36.843199",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2025-06-23",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-06-23T13:21:36.580294",
            meldingId: "1b1e0d31-138c-4249-a136-870e80aa4e18",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01979c85-ac69-78b2-a880-c38a86d583cc"],
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
          id: "01979c85-b14b-7400-82cf-455da35a9180",
          opprettet: "2025-06-23T13:21:36.843343",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2025-06-22",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-06-23T13:21:36.582615",
            meldingId: "1b1e0d31-138c-4249-a136-870e80aa4e18",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01979c85-ac69-78b2-a880-c38a86d583cc"],
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
          id: "01979c85-b14b-7400-82cf-455da35a9181",
          opprettet: "2025-06-23T13:21:36.843411",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-06-23T13:21:36.583141",
            meldingId: "1b1e0d31-138c-4249-a136-870e80aa4e18",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01979c85-ac69-78b2-a880-c38a86d583cc"],
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
          id: "01979c85-b14b-7400-82cf-455da35a9182",
          opprettet: "2025-06-23T13:21:36.843459",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-06-23T13:21:36.583547",
            meldingId: "1b1e0d31-138c-4249-a136-870e80aa4e18",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01979c85-ac69-78b2-a880-c38a86d583cc"],
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
          id: "01979c85-b14b-7400-82cf-455da35a9183",
          opprettet: "2025-06-23T13:21:36.843499",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-06-23T13:21:36.583931",
            meldingId: "1b1e0d31-138c-4249-a136-870e80aa4e18",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01979c85-ac69-78b2-a880-c38a86d583cc"],
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
          id: "01979c85-b14b-7400-82cf-455da35a9184",
          opprettet: "2025-06-23T13:21:36.843549",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "1990-03-14",
            datatype: "dato",
          },
          kilde: {
            type: "System",
            registrert: "2025-06-23T13:21:36.584327",
            meldingId: "1b1e0d31-138c-4249-a136-870e80aa4e18",
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
          id: "01979c85-b14b-7400-82cf-455da35a9185",
          opprettet: "2025-06-23T13:21:36.843592",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-06-23T13:21:36.584601",
            meldingId: "1b1e0d31-138c-4249-a136-870e80aa4e18",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01979c85-ac69-78b2-a880-c38a86d583cc"],
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
          id: "01979c85-b14d-7f1c-833c-96e19bdff35e",
          opprettet: "2025-06-23T13:21:36.845149",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: "2025-06-23",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteAv",
            },
            opplysninger: [
              "01979c85-b14b-7400-82cf-455da35a917f",
              "01979c85-b14b-7400-82cf-455da35a9180",
            ],
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
          id: "01979c85-b14d-7f1c-833c-96e19bdff35f",
          opprettet: "2025-06-23T13:21:36.845247",
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
              "01979c85-b14b-7400-82cf-455da35a9181",
              "01979c85-b14b-7400-82cf-455da35a9182",
              "01979c85-b14b-7400-82cf-455da35a9183",
              "01979c85-b14b-7400-82cf-455da35a9185",
            ],
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
          id: "01979c85-b14e-7db1-9390-a7146e72c2f7",
          opprettet: "2025-06-23T13:21:36.846513",
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
              "01979c85-b14b-7400-82cf-455da35a9181",
              "01979c85-b14d-7f1c-833c-96e19bdff35f",
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
          id: "01979c85-b14f-7569-9d80-799001b28f05",
          opprettet: "2025-06-23T13:21:36.847391",
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
              "01979c85-b14b-7400-82cf-455da35a9182",
              "01979c85-b14b-7400-82cf-455da35a9183",
              "01979c85-b14b-7400-82cf-455da35a9185",
              "01979c85-b14e-7db1-9390-a7146e72c2f7",
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
      redigertAvSaksbehandler: false,
      formål: "Bruker",
      perioder: [
        {
          id: "01979c85-bfaa-766e-a86d-a7411e0399ca",
          opprettet: "2025-06-23T13:21:40.522387",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-06-23T13:21:40.321489",
            meldingId: "9858bed6-7c26-4f56-96e0-6b474cbdfddd",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01979c85-ac69-78b2-a880-c38a86d583cc"],
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
          id: "01979c85-bfaa-766e-a86d-a7411e0399cb",
          opprettet: "2025-06-23T13:21:40.522534",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-06-23T13:21:40.322111",
            meldingId: "9858bed6-7c26-4f56-96e0-6b474cbdfddd",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01979c85-ac69-78b2-a880-c38a86d583cc"],
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
          id: "01979c85-bfaa-766e-a86d-a7411e0399cc",
          opprettet: "2025-06-23T13:21:40.522615",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-06-23T13:21:40.322616",
            meldingId: "9858bed6-7c26-4f56-96e0-6b474cbdfddd",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01979c85-ac69-78b2-a880-c38a86d583cc"],
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
          id: "01979c85-bfaa-766e-a86d-a7411e0399ce",
          opprettet: "2025-06-23T13:21:40.522698",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-06-23T13:21:40.323527",
            meldingId: "9858bed6-7c26-4f56-96e0-6b474cbdfddd",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01979c85-ac69-78b2-a880-c38a86d583cc"],
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
          id: "01979c85-bfaa-766e-a86d-a7411e0399cf",
          opprettet: "2025-06-23T13:21:40.522731",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-06-23T13:21:40.323933",
            meldingId: "9858bed6-7c26-4f56-96e0-6b474cbdfddd",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01979c85-ac69-78b2-a880-c38a86d583cc"],
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-942f-7bde-ab16-68ffd19e9a2a",
      navn: "Mottar andre økonomiske ytelser fra arbeidsgiver eller tidligere arbeidsgiver enn lønn",
      datatype: "boolsk",
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "01979c85-cbe3-75cc-ac75-2a28c89907f8",
          opprettet: "2025-06-23T13:21:43.651192",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-06-23T13:21:43.443135",
            meldingId: "580fc899-2b5e-4e19-a619-1ce34304eca8",
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
          id: "0198f0cf-c780-7578-81a4-d8a6476820a6",
          opprettet: "2025-08-28T15:13:25.632137",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: "2025-06-25",
            datatype: "dato",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-08-28T15:13:24.712449",
            ident: "Z994714",
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
          id: "0198f0cf-c7e5-77eb-9f14-a17472cb1880",
          opprettet: "2025-08-28T15:13:25.733734",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 67,
            datatype: "heltall",
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
          id: "0198f0cf-c7e7-7037-8c01-dedac3ee2dac",
          opprettet: "2025-08-28T15:13:25.735844",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: "2057-03-14",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "LeggTilÅr",
            },
            opplysninger: [
              "01979c85-b14b-7400-82cf-455da35a9184",
              "0198f0cf-c7e5-77eb-9f14-a17472cb1880",
            ],
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
          id: "0198f0cf-c7e9-72db-b541-13268381aee7",
          opprettet: "2025-08-28T15:13:25.737373",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: "2057-03-31",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteDagIMåned",
            },
            opplysninger: ["0198f0cf-c7e7-7037-8c01-dedac3ee2dac"],
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
          id: "0198f0cf-c7ed-79a5-89a9-2ecf305c2e74",
          opprettet: "2025-08-28T15:13:25.741243",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: "2025-06-05",
            datatype: "dato",
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
          id: "0198f0cf-c7ed-79a5-89a9-2ecf305c2e75",
          opprettet: "2025-08-28T15:13:25.741422",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 36,
            datatype: "heltall",
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
          id: "0198f0cf-c7fa-738e-84cf-fa08c828afbb",
          opprettet: "2025-08-28T15:13:25.754551",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 130160,
            datatype: "penger",
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
          id: "0198f0cf-c7fd-7657-8469-ee599259472b",
          opprettet: "2025-08-28T15:13:25.757443",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 1.5,
            datatype: "desimaltall",
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
          id: "0198f0cf-c7fd-7657-8469-ee599259472c",
          opprettet: "2025-08-28T15:13:25.757681",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 3,
            datatype: "desimaltall",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194ff86-a035-7eb0-9c60-21899f7cc0c1",
      navn: "Kravet til reell arbeidssøker er vurdert",
      datatype: "boolsk",
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
      perioder: [
        {
          id: "0198f0cf-c7fd-7657-8469-ee599259472d",
          opprettet: "2025-08-28T15:13:25.757814",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
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
          id: "0198f0cf-c7fe-73a1-b502-7d99b2ba228f",
          opprettet: "2025-08-28T15:13:25.758043",
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
            opplysninger: ["01979c85-bfaa-766e-a86d-a7411e0399cf"],
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
          id: "0198f0cf-c803-7fa3-932c-2e708bbd1299",
          opprettet: "2025-08-28T15:13:25.763078",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: "2025-06-05",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "FørsteArbeidsdag",
            },
            opplysninger: ["0198f0cf-c7ed-79a5-89a9-2ecf305c2e74"],
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
          id: "0198f0cf-c804-729d-ae6b-1f707f4862a0",
          opprettet: "2025-08-28T15:13:25.764143",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 195240,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0198f0cf-c7fa-738e-84cf-fa08c828afbb",
              "0198f0cf-c7fd-7657-8469-ee599259472b",
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
          id: "0198f0cf-c804-729d-ae6b-1f707f4862a1",
          opprettet: "2025-08-28T15:13:25.764411",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0198f0cf-c7fa-738e-84cf-fa08c828afbb",
              "0198f0cf-c7fd-7657-8469-ee599259472c",
            ],
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
          id: "0198f0cf-c804-729d-ae6b-1f707f4862a2",
          opprettet: "2025-08-28T15:13:25.764593",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-c804-729d-ae6b-1f707f4862a3",
          opprettet: "2025-08-28T15:13:25.764734",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-c804-729d-ae6b-1f707f4862a4",
          opprettet: "2025-08-28T15:13:25.764883",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-c805-79ea-b01c-c74700a39841",
          opprettet: "2025-08-28T15:13:25.765026",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-c807-74ff-adff-c26401b873c7",
          opprettet: "2025-08-28T15:13:25.767586",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: "2025-05-31",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "SisteavsluttendeKalenderMåned",
            },
            opplysninger: [
              "0198f0cf-c780-7578-81a4-d8a6476820a6",
              "0198f0cf-c803-7fa3-932c-2e708bbd1299",
            ],
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
          id: "0198f0cf-c807-74ff-adff-c26401b873c8",
          opprettet: "2025-08-28T15:13:25.767808",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01979c85-bfaa-766e-a86d-a7411e0399ca",
              "0198f0cf-c804-729d-ae6b-1f707f4862a2",
            ],
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
          id: "0198f0cf-c807-74ff-adff-c26401b873c9",
          opprettet: "2025-08-28T15:13:25.767962",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01979c85-bfaa-766e-a86d-a7411e0399cb",
              "0198f0cf-c804-729d-ae6b-1f707f4862a3",
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
          id: "0198f0cf-c808-754c-9847-baff1146f633",
          opprettet: "2025-08-28T15:13:25.768109",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "01979c85-bfaa-766e-a86d-a7411e0399cc",
              "0198f0cf-c804-729d-ae6b-1f707f4862a4",
            ],
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
          id: "0198f0cf-c808-754c-9847-baff1146f634",
          opprettet: "2025-08-28T15:13:25.76826",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "01979c85-bfaa-766e-a86d-a7411e0399ce",
              "0198f0cf-c805-79ea-b01c-c74700a39841",
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
          id: "0198f0cf-c80a-76d5-9d6f-30c74c600369",
          opprettet: "2025-08-28T15:13:25.770818",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: "2022-06-01",
            datatype: "dato",
          },
          utledetAv: {
            regel: {
              navn: "TrekkFraMåned",
            },
            opplysninger: [
              "0198f0cf-c7ed-79a5-89a9-2ecf305c2e75",
              "0198f0cf-c807-74ff-adff-c26401b873c7",
            ],
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
          id: "0198f0cf-d005-7328-8c35-2b791813dae7",
          opprettet: "2025-08-28T15:13:27.813773",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-23",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-08-28T15:13:27.474857",
            meldingId: "98e3f00a-1be3-4a14-b3bc-099fe036e00c",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0198f0cf-c780-7578-81a4-d8a6476820a6"],
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
          id: "0198f0cf-d005-7328-8c35-2b791813dae8",
          opprettet: "2025-08-28T15:13:27.81399",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: "01K3RCZKKWKPHYWC5PXJ6Z2DWX",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2025-08-28T15:13:27.475338",
            meldingId: "98e3f00a-1be3-4a14-b3bc-099fe036e00c",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: [
              "0198f0cf-c780-7578-81a4-d8a6476820a6",
              "0198f0cf-c807-74ff-adff-c26401b873c7",
              "0198f0cf-c80a-76d5-9d6f-30c74c600369",
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
          id: "0198f0cf-d008-7efc-a6af-682dcad9653e",
          opprettet: "2025-08-28T15:13:27.816149",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: "01K3RCZKKWKPHYWC5PXJ6Z2DWX",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["0198f0cf-d005-7328-8c35-2b791813dae8"],
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
          id: "0198f0cf-d008-7efc-a6af-682dcad9653f",
          opprettet: "2025-08-28T15:13:27.816274",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-23",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["0198f0cf-d005-7328-8c35-2b791813dae7"],
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
          id: "0198f0cf-d00d-7064-a563-f8a1ad5ba06d",
          opprettet: "2025-08-28T15:13:27.821947",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0198f0cf-d008-7efc-a6af-682dcad9653e"],
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
          id: "0198f0cf-d00f-75bb-9b56-ca1d4a8d60aa",
          opprettet: "2025-08-28T15:13:27.823119",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 600000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0198f0cf-d008-7efc-a6af-682dcad9653e"],
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
          id: "0198f0cf-d010-73e4-bd69-cc9b5d028946",
          opprettet: "2025-08-28T15:13:27.824451",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "0198f0cf-c804-729d-ae6b-1f707f4862a0",
              "0198f0cf-d00d-7064-a563-f8a1ad5ba06d",
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
          id: "0198f0cf-d010-73e4-bd69-cc9b5d028947",
          opprettet: "2025-08-28T15:13:27.824586",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "0198f0cf-c804-729d-ae6b-1f707f4862a1",
              "0198f0cf-d00f-75bb-9b56-ca1d4a8d60aa",
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
          id: "0198f0cf-d011-7f59-86d7-3a6ce256c763",
          opprettet: "2025-08-28T15:13:27.82562",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "0198f0cf-d010-73e4-bd69-cc9b5d028946",
              "0198f0cf-d010-73e4-bd69-cc9b5d028947",
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
          id: "0198f0cf-d013-7d3b-aba1-10e059f48e83",
          opprettet: "2025-08-28T15:13:27.827126",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d013-7d3b-aba1-10e059f48e84",
          opprettet: "2025-08-28T15:13:27.827238",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d013-7d3b-aba1-10e059f48e85",
          opprettet: "2025-08-28T15:13:27.827363",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d013-7d3b-aba1-10e059f48e86",
          opprettet: "2025-08-28T15:13:27.827649",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 130160,
            datatype: "penger",
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
          id: "0198f0cf-d013-7d3b-aba1-10e059f48e87",
          opprettet: "2025-08-28T15:13:27.827795",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: "01K3RCZKKWKPHYWC5PXJ6Z2DWX",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "FiltrerRelevanteInntekter",
            },
            opplysninger: ["0198f0cf-d005-7328-8c35-2b791813dae8"],
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
          id: "0198f0cf-d013-7d3b-aba1-10e059f48e88",
          opprettet: "2025-08-28T15:13:27.827924",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 6,
            datatype: "desimaltall",
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
          id: "0198f0cf-d014-7a77-afca-24a7e70d944f",
          opprettet: "2025-08-28T15:13:27.82803",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d014-7a77-afca-24a7e70d9450",
          opprettet: "2025-08-28T15:13:27.828157",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 3,
            datatype: "desimaltall",
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
          id: "0198f0cf-d014-7a77-afca-24a7e70d9451",
          opprettet: "2025-08-28T15:13:27.828275",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d015-7c75-910e-cc417fa147b8",
          opprettet: "2025-08-28T15:13:27.829001",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 0.0024,
            datatype: "desimaltall",
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
          id: "0198f0cf-d015-7c75-910e-cc417fa147b9",
          opprettet: "2025-08-28T15:13:27.829962",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 37,
            datatype: "penger",
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
          id: "0198f0cf-d016-761c-9014-4af199337cf9",
          opprettet: "2025-08-28T15:13:27.830152",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 0.9,
            datatype: "desimaltall",
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
          id: "0198f0cf-d016-761c-9014-4af199337cfa",
          opprettet: "2025-08-28T15:13:27.830305",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 260,
            datatype: "heltall",
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
          id: "0198f0cf-d016-761c-9014-4af199337cfb",
          opprettet: "2025-08-28T15:13:27.830521",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d016-761c-9014-4af199337cfc",
          opprettet: "2025-08-28T15:13:27.830652",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d016-761c-9014-4af199337cfd",
          opprettet: "2025-08-28T15:13:27.830779",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d016-761c-9014-4af199337cfe",
          opprettet: "2025-08-28T15:13:27.830903",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d017-7f6f-8b1c-9fb5a0eb0edf",
          opprettet: "2025-08-28T15:13:27.831029",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d017-7f6f-8b1c-9fb5a0eb0ee0",
          opprettet: "2025-08-28T15:13:27.83117",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d017-7f6f-8b1c-9fb5a0eb0ee1",
          opprettet: "2025-08-28T15:13:27.831338",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d017-7f6f-8b1c-9fb5a0eb0ee2",
          opprettet: "2025-08-28T15:13:27.831519",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d017-7f6f-8b1c-9fb5a0eb0ee3",
          opprettet: "2025-08-28T15:13:27.831658",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d017-7f6f-8b1c-9fb5a0eb0ee4",
          opprettet: "2025-08-28T15:13:27.831791",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d017-7f6f-8b1c-9fb5a0eb0ee5",
          opprettet: "2025-08-28T15:13:27.831921",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
      redigertAvSaksbehandler: true,
      formål: "Regel",
      perioder: [
        {
          id: "01997149-5497-7d9e-9634-2040d948a90c",
          opprettet: "2025-09-22T13:57:35.25569",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-25",
          gyldigTilOgMed: "2025-10-08",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-09-22T13:57:34.826273",
            ident: "Z994714",
            begrunnelse: {
              verdi: "Får jobb fra 9 oktober ",
              sistEndret: "2025-09-22T13:57:34.826255",
            },
          },
        },
        {
          id: "0199714a-134c-7613-8ba6-fa8b97ee99aa",
          opprettet: "2025-09-22T13:58:24.076542",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-09",
          verdi: {
            verdi: 33,
            datatype: "desimaltall",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-09-22T13:58:23.546903",
            ident: "Z994714",
            begrunnelse: {
              verdi: "Ny jobb! ",
              sistEndret: "2025-09-22T13:58:23.546878",
            },
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
          id: "0198f0cf-d018-73b9-b83c-132a6b4569db",
          opprettet: "2025-08-28T15:13:27.832212",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
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
          id: "0198f0cf-d018-73b9-b83c-132a6b4569dc",
          opprettet: "2025-08-28T15:13:27.832375",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 37.5,
            datatype: "desimaltall",
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
          id: "0198f0cf-d018-73b9-b83c-132a6b4569dd",
          opprettet: "2025-08-28T15:13:27.832553",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d018-73b9-b83c-132a6b4569de",
          opprettet: "2025-08-28T15:13:27.832697",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d018-73b9-b83c-132a6b4569df",
          opprettet: "2025-08-28T15:13:27.832849",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 40,
            datatype: "desimaltall",
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
          id: "0198f0cf-d019-7a94-8fb7-3ec739830073",
          opprettet: "2025-08-28T15:13:27.833035",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 50,
            datatype: "desimaltall",
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
          id: "0198f0cf-d019-7a94-8fb7-3ec739830074",
          opprettet: "2025-08-28T15:13:27.833187",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d019-7a94-8fb7-3ec739830075",
          opprettet: "2025-08-28T15:13:27.833526",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d019-7a94-8fb7-3ec739830076",
          opprettet: "2025-08-28T15:13:27.833595",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d019-7a94-8fb7-3ec739830077",
          opprettet: "2025-08-28T15:13:27.833659",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d019-7a94-8fb7-3ec739830078",
          opprettet: "2025-08-28T15:13:27.83372",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d019-7a94-8fb7-3ec739830079",
          opprettet: "2025-08-28T15:13:27.833783",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d019-7a94-8fb7-3ec73983007a",
          opprettet: "2025-08-28T15:13:27.833884",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d019-7a94-8fb7-3ec73983007b",
          opprettet: "2025-08-28T15:13:27.833985",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d01a-7fac-ab81-5bd6a0cb76ca",
          opprettet: "2025-08-28T15:13:27.83409",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d01a-7fac-ab81-5bd6a0cb76cb",
          opprettet: "2025-08-28T15:13:27.834174",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d01a-7fac-ab81-5bd6a0cb76cc",
          opprettet: "2025-08-28T15:13:27.83424",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0cf-d01c-78ba-9899-db32243d2f1b",
          opprettet: "2025-08-28T15:13:27.836331",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["0198f0cf-d013-7d3b-aba1-10e059f48e85"],
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
          id: "0198f0cf-d01f-714b-b47f-a71fd02be021",
          opprettet: "2025-08-28T15:13:27.839005",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: "01K3RCZKKWKPHYWC5PXJ6Z2DWX",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Oppjuster",
            },
            opplysninger: [
              "0198f0cf-d013-7d3b-aba1-10e059f48e86",
              "0198f0cf-d013-7d3b-aba1-10e059f48e87",
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
          id: "0198f0cf-d01f-714b-b47f-a71fd02be022",
          opprettet: "2025-08-28T15:13:27.839195",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 780960,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0198f0cf-d013-7d3b-aba1-10e059f48e86",
              "0198f0cf-d013-7d3b-aba1-10e059f48e88",
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
          id: "0198f0cf-d01f-714b-b47f-a71fd02be023",
          opprettet: "2025-08-28T15:13:27.83931",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 390480,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0198f0cf-d013-7d3b-aba1-10e059f48e86",
              "0198f0cf-d014-7a77-afca-24a7e70d9450",
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
          id: "0198f0cf-d01f-714b-b47f-a71fd02be024",
          opprettet: "2025-08-28T15:13:27.839447",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["0198f0cf-d017-7f6f-8b1c-9fb5a0eb0edf"],
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
          id: "0198f0cf-d01f-714b-b47f-a71fd02be025",
          opprettet: "2025-08-28T15:13:27.839686",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: [
              "0198f0cf-d017-7f6f-8b1c-9fb5a0eb0ee4",
              "0198f0cf-d017-7f6f-8b1c-9fb5a0eb0ee5",
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
          id: "0198f0cf-d01f-714b-b47f-a71fd02be026",
          opprettet: "2025-08-28T15:13:27.839887",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 37.5,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "0198f0cf-d018-73b9-b83c-132a6b4569dd",
              "0198f0cf-d018-73b9-b83c-132a6b4569de",
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
          id: "0198f0cf-d020-7854-b749-f841e27065f3",
          opprettet: "2025-08-28T15:13:27.840014",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 50,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "01979c85-b14b-7400-82cf-455da35a9185",
              "0198f0cf-d018-73b9-b83c-132a6b4569df",
              "0198f0cf-d019-7a94-8fb7-3ec739830073",
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
          id: "0198f0cf-d020-7854-b749-f841e27065f4",
          opprettet: "2025-08-28T15:13:27.840171",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "0198f0cf-d019-7a94-8fb7-3ec739830074",
              "0198f0cf-d019-7a94-8fb7-3ec739830075",
              "0198f0cf-d019-7a94-8fb7-3ec739830076",
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
          id: "0198f0cf-d020-7854-b749-f841e27065f5",
          opprettet: "2025-08-28T15:13:27.840427",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "0198f0cf-d019-7a94-8fb7-3ec739830078",
              "0198f0cf-d019-7a94-8fb7-3ec739830079",
              "0198f0cf-d019-7a94-8fb7-3ec73983007a",
              "0198f0cf-d019-7a94-8fb7-3ec73983007b",
              "0198f0cf-d01a-7fac-ab81-5bd6a0cb76ca",
              "0198f0cf-d01a-7fac-ab81-5bd6a0cb76cb",
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
          id: "0198f0cf-d020-7854-b749-f841e27065f6",
          opprettet: "2025-08-28T15:13:27.840534",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "IngenAv",
            },
            opplysninger: ["0198f0cf-d01a-7fac-ab81-5bd6a0cb76cc"],
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
          id: "0198f0cf-d023-7e36-8e55-c68ea3b0864c",
          opprettet: "2025-08-28T15:13:27.843015",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0198f0cf-d01f-714b-b47f-a71fd02be021"],
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
          id: "0198f0cf-d023-7e36-8e55-c68ea3b0864d",
          opprettet: "2025-08-28T15:13:27.843431",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 351131.34378688247,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0198f0cf-d01f-714b-b47f-a71fd02be021"],
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
          id: "0198f0cf-d023-7e36-8e55-c68ea3b0864e",
          opprettet: "2025-08-28T15:13:27.843778",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 324114.24420657434,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0198f0cf-d01f-714b-b47f-a71fd02be021"],
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
          id: "0198f0cf-d023-7e36-8e55-c68ea3b0864f",
          opprettet: "2025-08-28T15:13:27.843892",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "0198f0cf-c7fe-73a1-b502-7d99b2ba228f",
              "0198f0cf-d014-7a77-afca-24a7e70d9451",
              "0198f0cf-d01f-714b-b47f-a71fd02be023",
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
          id: "0198f0cf-d023-7e36-8e55-c68ea3b08650",
          opprettet: "2025-08-28T15:13:27.843987",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "0198f0cf-d017-7f6f-8b1c-9fb5a0eb0ee0",
              "0198f0cf-d017-7f6f-8b1c-9fb5a0eb0ee1",
              "0198f0cf-d01f-714b-b47f-a71fd02be024",
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
          id: "0198f0cf-d025-79b7-beed-be14d2a9867f",
          opprettet: "2025-08-28T15:13:27.845925",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "0198f0cf-d01f-714b-b47f-a71fd02be022",
              "0198f0cf-d023-7e36-8e55-c68ea3b0864c",
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
          id: "0198f0cf-d026-7048-9701-7fbbbabdf2f4",
          opprettet: "2025-08-28T15:13:27.846056",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "0198f0cf-d01f-714b-b47f-a71fd02be022",
              "0198f0cf-d023-7e36-8e55-c68ea3b0864c",
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
          id: "0198f0cf-d026-7048-9701-7fbbbabdf2f5",
          opprettet: "2025-08-28T15:13:27.846182",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 351131.34378688247,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "0198f0cf-d01f-714b-b47f-a71fd02be022",
              "0198f0cf-d023-7e36-8e55-c68ea3b0864d",
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
          id: "0198f0cf-d026-7048-9701-7fbbbabdf2f6",
          opprettet: "2025-08-28T15:13:27.846284",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 324114.24420657434,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "0198f0cf-d01f-714b-b47f-a71fd02be022",
              "0198f0cf-d023-7e36-8e55-c68ea3b0864e",
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
          id: "0198f0cf-d026-7048-9701-7fbbbabdf2f7",
          opprettet: "2025-08-28T15:13:27.846552",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "0198f0cf-d016-761c-9014-4af199337cfb",
              "0198f0cf-d016-761c-9014-4af199337cfc",
              "0198f0cf-d016-761c-9014-4af199337cfd",
              "0198f0cf-d016-761c-9014-4af199337cfe",
              "0198f0cf-d017-7f6f-8b1c-9fb5a0eb0ee2",
              "0198f0cf-d017-7f6f-8b1c-9fb5a0eb0ee3",
              "0198f0cf-d023-7e36-8e55-c68ea3b08650",
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
          id: "0198f0cf-d028-75e8-84af-84a2448ed468",
          opprettet: "2025-08-28T15:13:27.848736",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 675245.5879934569,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SumAv",
            },
            opplysninger: [
              "0198f0cf-d026-7048-9701-7fbbbabdf2f4",
              "0198f0cf-d026-7048-9701-7fbbbabdf2f5",
              "0198f0cf-d026-7048-9701-7fbbbabdf2f6",
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
          id: "0198f0cf-d02a-715b-9f7d-c80a692ade8e",
          opprettet: "2025-08-28T15:13:27.850923",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 225081.8626644856,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "0198f0cf-d014-7a77-afca-24a7e70d944f",
              "0198f0cf-d028-75e8-84af-84a2448ed468",
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
          id: "0198f0cf-d02d-718f-8e64-fd903c3e4a28",
          opprettet: "2025-08-28T15:13:27.853124",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 225081.8626644856,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "0198f0cf-d025-79b7-beed-be14d2a9867f",
              "0198f0cf-d02a-715b-9f7d-c80a692ade8e",
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
          id: "0198f0cf-d030-7273-b568-660c8d21f400",
          opprettet: "2025-08-28T15:13:27.856941",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 225082,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["0198f0cf-d02d-718f-8e64-fd903c3e4a28"],
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
          id: "0198f0cf-d032-7abd-8906-2ed14e0578fe",
          opprettet: "2025-08-28T15:13:27.858851",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 225082,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "0198f0cf-d023-7e36-8e55-c68ea3b0864f",
              "0198f0cf-d030-7273-b568-660c8d21f400",
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
          id: "0198f0cf-d033-7a9a-8c08-14d1e0ae29f9",
          opprettet: "2025-08-28T15:13:27.859007",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "0198f0cf-d023-7e36-8e55-c68ea3b0864f",
              "0198f0cf-d030-7273-b568-660c8d21f400",
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
          id: "0198f0cf-d034-7b99-98b4-0eb27d765a97",
          opprettet: "2025-08-28T15:13:27.860675",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 540.1968,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0198f0cf-d015-7c75-910e-cc417fa147b8",
              "0198f0cf-d032-7abd-8906-2ed14e0578fe",
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
          id: "0198f0cf-d034-7b99-98b4-0eb27d765a98",
          opprettet: "2025-08-28T15:13:27.860808",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 202573.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0198f0cf-d016-761c-9014-4af199337cf9",
              "0198f0cf-d032-7abd-8906-2ed14e0578fe",
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
          id: "0198f0cf-d034-7b99-98b4-0eb27d765a99",
          opprettet: "2025-08-28T15:13:27.860918",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 37.5,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "0198f0cf-d018-73b9-b83c-132a6b4569dc",
              "0198f0cf-d018-73b9-b83c-132a6b4569dd",
              "0198f0cf-d033-7a9a-8c08-14d1e0ae29f9",
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
          id: "0198f0cf-d037-7279-b474-033da7d3158d",
          opprettet: "2025-08-28T15:13:27.863749",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 540,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["0198f0cf-d034-7b99-98b4-0eb27d765a97"],
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
          id: "0198f0cf-d038-74f3-92ea-e4f46f6d9e40",
          opprettet: "2025-08-28T15:13:27.864144",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 779.13,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "0198f0cf-d016-761c-9014-4af199337cfa",
              "0198f0cf-d034-7b99-98b4-0eb27d765a98",
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
          id: "0198f0cf-d038-74f3-92ea-e4f46f6d9e41",
          opprettet: "2025-08-28T15:13:27.864289",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 37.5,
            datatype: "desimaltall",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "01979c85-bfaa-766e-a86d-a7411e0399ce",
              "0198f0cf-d018-73b9-b83c-132a6b4569db",
              "0198f0cf-d01f-714b-b47f-a71fd02be026",
              "0198f0cf-d034-7b99-98b4-0eb27d765a99",
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
          id: "0198f0cf-d03a-7855-b0c1-6a4b83921d7f",
          opprettet: "2025-08-28T15:13:27.866122",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 779,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Avrund",
            },
            opplysninger: ["0198f0cf-d038-74f3-92ea-e4f46f6d9e40"],
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
          id: "01997149-549b-7154-a091-0b24442ee85e",
          opprettet: "2025-09-22T13:57:35.25935",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-25",
          gyldigTilOgMed: "2025-10-08",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "SjekkAvTerskel",
            },
            opplysninger: [
              "0198f0cf-d020-7854-b749-f841e27065f3",
              "0198f0cf-d038-74f3-92ea-e4f46f6d9e41",
              "01997149-5497-7d9e-9634-2040d948a90c",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
          },
        },
        {
          id: "0199714a-134f-713b-bcaa-8831c5fdd3d3",
          opprettet: "2025-09-22T13:58:24.079153",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-09",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "SjekkAvTerskel",
            },
            opplysninger: [
              "0198f0cf-d020-7854-b749-f841e27065f3",
              "0198f0cf-d038-74f3-92ea-e4f46f6d9e41",
              "0199714a-134c-7613-8ba6-fa8b97ee99aa",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "0198f0cf-da5d-7dff-a5e4-59c2aec65a61",
          opprettet: "2025-08-28T15:13:30.461253",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-08-28T15:13:30.17862",
            meldingId: "5944dc9e-b416-4810-8567-4f5351865d2e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01979c85-ac69-78b2-a880-c38a86d583cc"],
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
          id: "0198f0cf-da5d-7dff-a5e4-59c2aec65a62",
          opprettet: "2025-08-28T15:13:30.461459",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: [
              {
                fødselsdato: "2011-09-28",
                fornavnOgMellomnavn: "ORANSJE",
                etternavn: "GJØRME",
                statsborgerskap: "NOR",
                kvalifiserer: true,
              },
            ],
            datatype: "barn",
          },
          kilde: {
            type: "System",
            registrert: "2025-08-28T15:13:30.179066",
            meldingId: "5944dc9e-b416-4810-8567-4f5351865d2e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01979c85-ac69-78b2-a880-c38a86d583cc"],
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
          id: "0198f0cf-da5d-7dff-a5e4-59c2aec65a63",
          opprettet: "2025-08-28T15:13:30.46159",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-08-28T15:13:30.180377",
            meldingId: "5944dc9e-b416-4810-8567-4f5351865d2e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01979c85-ac69-78b2-a880-c38a86d583cc"],
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
          id: "0198f0cf-da5d-7dff-a5e4-59c2aec65a64",
          opprettet: "2025-08-28T15:13:30.461709",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-08-28T15:13:30.180742",
            meldingId: "5944dc9e-b416-4810-8567-4f5351865d2e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01979c85-ac69-78b2-a880-c38a86d583cc"],
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
          id: "0198f0cf-da5d-7dff-a5e4-59c2aec65a65",
          opprettet: "2025-08-28T15:13:30.461843",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-08-28T15:13:30.181126",
            meldingId: "5944dc9e-b416-4810-8567-4f5351865d2e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0198f0cf-c780-7578-81a4-d8a6476820a6"],
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
          id: "0198f0cf-da5d-7dff-a5e4-59c2aec65a66",
          opprettet: "2025-08-28T15:13:30.461977",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-08-28T15:13:30.181498",
            meldingId: "5944dc9e-b416-4810-8567-4f5351865d2e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0198f0cf-c780-7578-81a4-d8a6476820a6"],
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
          id: "0198f0cf-da5e-7dab-a12d-e1d42ab48c5d",
          opprettet: "2025-08-28T15:13:30.462103",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-08-28T15:13:30.18185",
            meldingId: "5944dc9e-b416-4810-8567-4f5351865d2e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0198f0cf-c780-7578-81a4-d8a6476820a6"],
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
          id: "0198f0cf-da5e-7dab-a12d-e1d42ab48c5e",
          opprettet: "2025-08-28T15:13:30.462224",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-08-28T15:13:30.182315",
            meldingId: "5944dc9e-b416-4810-8567-4f5351865d2e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0198f0cf-c780-7578-81a4-d8a6476820a6"],
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
          id: "0198f0cf-da5e-7dab-a12d-e1d42ab48c5f",
          opprettet: "2025-08-28T15:13:30.462357",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-08-28T15:13:30.183133",
            meldingId: "5944dc9e-b416-4810-8567-4f5351865d2e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0198f0cf-c780-7578-81a4-d8a6476820a6"],
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
          id: "0198f0cf-da5e-7dab-a12d-e1d42ab48c60",
          opprettet: "2025-08-28T15:13:30.462543",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-08-28T15:13:30.184136",
            meldingId: "5944dc9e-b416-4810-8567-4f5351865d2e",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["0198f0cf-c780-7578-81a4-d8a6476820a6"],
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
          id: "0198f0cf-da60-76d2-ae6a-472852999422",
          opprettet: "2025-08-28T15:13:30.464786",
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
            opplysninger: ["0198f0cf-da5d-7dff-a5e4-59c2aec65a61"],
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
          id: "0198f0cf-da61-78ae-b6aa-3fcd96319bf6",
          opprettet: "2025-08-28T15:13:30.465023",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: 1,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "AntallAv",
            },
            opplysninger: ["0198f0cf-da5d-7dff-a5e4-59c2aec65a62"],
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
          id: "0198f0cf-da61-78ae-b6aa-3fcd96319bf7",
          opprettet: "2025-08-28T15:13:30.465223",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "0198f0cf-d01f-714b-b47f-a71fd02be024",
              "0198f0cf-da5d-7dff-a5e4-59c2aec65a65",
              "0198f0cf-da5d-7dff-a5e4-59c2aec65a66",
              "0198f0cf-da5e-7dab-a12d-e1d42ab48c5d",
              "0198f0cf-da5e-7dab-a12d-e1d42ab48c5e",
              "0198f0cf-da5e-7dab-a12d-e1d42ab48c5f",
              "0198f0cf-da5e-7dab-a12d-e1d42ab48c60",
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
          id: "0198f0cf-da61-78ae-b6aa-3fcd96319bf8",
          opprettet: "2025-08-28T15:13:30.465341",
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
            opplysninger: ["0198f0cf-da5d-7dff-a5e4-59c2aec65a63"],
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
          id: "0198f0cf-da61-78ae-b6aa-3fcd96319bf9",
          opprettet: "2025-08-28T15:13:30.465479",
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
            opplysninger: ["0198f0cf-da5d-7dff-a5e4-59c2aec65a64"],
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
          id: "0198f0cf-da61-78ae-b6aa-3fcd96319bfa",
          opprettet: "2025-08-28T15:13:30.465605",
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
            opplysninger: ["0198f0cf-da5d-7dff-a5e4-59c2aec65a64"],
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
          id: "0198f0cf-da62-75c2-ab50-1d88e264f634",
          opprettet: "2025-08-28T15:13:30.466885",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "0198f0cf-d013-7d3b-aba1-10e059f48e84",
              "0198f0cf-da60-76d2-ae6a-472852999422",
            ],
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
          id: "0198f0cf-da63-7dcc-9246-05f5cca87997",
          opprettet: "2025-08-28T15:13:30.467032",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 37,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0198f0cf-d015-7c75-910e-cc417fa147b9",
              "0198f0cf-da61-78ae-b6aa-3fcd96319bf6",
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
          id: "01997149-549d-753f-ae90-8a5e22472df7",
          opprettet: "2025-09-22T13:57:35.261663",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-06-25",
          gyldigTilOgMed: "2025-10-08",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "0198f0cf-d019-7a94-8fb7-3ec739830077",
              "0198f0cf-d020-7854-b749-f841e27065f4",
              "0198f0cf-da61-78ae-b6aa-3fcd96319bf8",
              "01997149-549b-7154-a091-0b24442ee85e",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
          },
        },
        {
          id: "0199714a-1350-74e3-8d3e-b57129244e3e",
          opprettet: "2025-09-22T13:58:24.080644",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-10-09",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "0198f0cf-d019-7a94-8fb7-3ec739830077",
              "0198f0cf-d020-7854-b749-f841e27065f4",
              "0198f0cf-da61-78ae-b6aa-3fcd96319bf8",
              "0199714a-134f-713b-bcaa-8831c5fdd3d3",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.22-11.40-d6b7360",
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
          id: "0198f0cf-da63-7dcc-9246-05f5cca87999",
          opprettet: "2025-08-28T15:13:30.467321",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "0198f0cf-d020-7854-b749-f841e27065f5",
              "0198f0cf-da61-78ae-b6aa-3fcd96319bf9",
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
          id: "0198f0cf-da64-7d7e-be20-b14d871f5357",
          opprettet: "2025-08-28T15:13:30.468652",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "0198f0cf-d01c-78ba-9899-db32243d2f1b",
              "0198f0cf-da62-75c2-ab50-1d88e264f634",
            ],
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
          id: "0198f0cf-da64-7d7e-be20-b14d871f5358",
          opprettet: "2025-08-28T15:13:30.468861",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 577,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "0198f0cf-d037-7279-b474-033da7d3158d",
              "0198f0cf-da63-7dcc-9246-05f5cca87997",
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
          id: "0198f0cf-da64-7d7e-be20-b14d871f5359",
          opprettet: "2025-08-28T15:13:30.468974",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "0198f0cf-d015-7c75-910e-cc417fa147b9",
              "0198f0cf-da63-7dcc-9246-05f5cca87997",
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
          id: "0198f0cf-da65-7f84-929e-549c7cf93310",
          opprettet: "2025-08-28T15:13:30.469101",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "0198f0cf-da61-78ae-b6aa-3fcd96319bfa",
              "0198f0cf-da63-7dcc-9246-05f5cca87999",
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
          id: "0198f0cf-da68-7a26-9391-c1248ddf82c3",
          opprettet: "2025-08-28T15:13:30.472916",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "0198f0cf-d03a-7855-b0c1-6a4b83921d7f",
              "0198f0cf-da64-7d7e-be20-b14d871f5358",
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
          id: "0198f0cf-da6f-7cfe-bf0a-8a3ae52754d1",
          opprettet: "2025-08-28T15:13:30.479829",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 540,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "0198f0cf-d037-7279-b474-033da7d3158d",
              "0198f0cf-da68-7a26-9391-c1248ddf82c3",
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
          id: "0198f0cf-da72-7bd1-abac-297d86af8166",
          opprettet: "2025-08-28T15:13:30.482886",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 540,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "0198f0cf-d026-7048-9701-7fbbbabdf2f7",
              "0198f0cf-da6f-7cfe-bf0a-8a3ae52754d1",
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
          id: "0198f0cf-da73-73b8-b719-9ced6da1a5d7",
          opprettet: "2025-08-28T15:13:30.483313",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "0198f0cf-d026-7048-9701-7fbbbabdf2f7",
              "0198f0cf-da6f-7cfe-bf0a-8a3ae52754d1",
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
          id: "0198f0cf-da76-7c7e-8ab6-e08336feda55",
          opprettet: "2025-08-28T15:13:30.486221",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "0198f0cf-da64-7d7e-be20-b14d871f5359",
              "0198f0cf-da73-73b8-b719-9ced6da1a5d7",
            ],
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
          id: "0198f0d7-ad27-7b63-aced-8fa27f5cd90f",
          opprettet: "2025-08-28T15:22:03.175216",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-08-28T15:22:02.967287",
            meldingId: "9009d39a-f38b-4a85-9139-3fd055944c59",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["01979c85-ac69-78b2-a880-c38a86d583cc"],
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
          id: "0198f0d7-ad2c-718d-adc9-035d4d48510d",
          opprettet: "2025-08-28T15:22:03.180217",
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
            opplysninger: ["0198f0d7-ad27-7b63-aced-8fa27f5cd90f"],
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
          id: "0198f0d7-ad2d-71ab-9a33-07c1b200b1a9",
          opprettet: "2025-08-28T15:22:03.18128",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "Alle",
            },
            opplysninger: [
              "0198f0cf-c807-74ff-adff-c26401b873c8",
              "0198f0cf-c807-74ff-adff-c26401b873c9",
              "0198f0cf-c808-754c-9847-baff1146f633",
              "0198f0cf-c808-754c-9847-baff1146f634",
              "0198f0d7-ad2c-718d-adc9-035d4d48510d",
            ],
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
          id: "0198f0d7-ad2e-72b1-b4d5-510fcd5d93b3",
          opprettet: "2025-08-28T15:22:03.182414",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "0198f0cf-d01f-714b-b47f-a71fd02be022",
              "0198f0cf-d023-7e36-8e55-c68ea3b0864c",
            ],
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
          id: "0198f0d7-ad2e-72b1-b4d5-510fcd5d93b4",
          opprettet: "2025-08-28T15:22:03.182517",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "0198f0cf-d01f-714b-b47f-a71fd02be022",
              "0198f0cf-d023-7e36-8e55-c68ea3b0864d",
            ],
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
          id: "0198f0d7-ad2e-72b1-b4d5-510fcd5d93b5",
          opprettet: "2025-08-28T15:22:03.182583",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "0198f0cf-d01f-714b-b47f-a71fd02be022",
              "0198f0cf-d023-7e36-8e55-c68ea3b0864e",
            ],
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
          id: "0198f0d7-ad2e-72b1-b4d5-510fcd5d93b6",
          opprettet: "2025-08-28T15:22:03.18265",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: "Gjennomsnittlig inntekt etter avkortning og oppjustering siste 36 måneder",
            datatype: "tekst",
          },
          utledetAv: {
            regel: {
              navn: "Brukt",
            },
            opplysninger: ["0198f0cf-d02d-718f-8e64-fd903c3e4a28"],
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
          id: "0198f0d7-ad2e-72b1-b4d5-510fcd5d93b7",
          opprettet: "2025-08-28T15:22:03.182915",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0198f0cf-d013-7d3b-aba1-10e059f48e87"],
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
          id: "0198f0d7-ad2f-7978-aa12-eb5533b87263",
          opprettet: "2025-08-28T15:22:03.183152",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 320000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0198f0cf-d013-7d3b-aba1-10e059f48e87"],
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
          id: "0198f0d7-ad2f-7978-aa12-eb5533b87264",
          opprettet: "2025-08-28T15:22:03.183443",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 280000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SummerPeriode",
            },
            opplysninger: ["0198f0cf-d013-7d3b-aba1-10e059f48e87"],
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
          id: "0198f0d7-ad2f-7978-aa12-eb5533b87265",
          opprettet: "2025-08-28T15:22:03.183499",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 5,
            datatype: "heltall",
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
          id: "0198f0d7-ad2f-7978-aa12-eb5533b87266",
          opprettet: "2025-08-28T15:22:03.183544",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 0.03,
            datatype: "desimaltall",
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
          id: "0198f0d7-ad2f-7978-aa12-eb5533b87267",
          opprettet: "2025-08-28T15:22:03.183583",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0d7-ad2f-7978-aa12-eb5533b87268",
          opprettet: "2025-08-28T15:22:03.183616",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0d7-ad2f-7978-aa12-eb5533b87269",
          opprettet: "2025-08-28T15:22:03.183664",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0d7-ad2f-7978-aa12-eb5533b8726a",
          opprettet: "2025-08-28T15:22:03.183701",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0d7-ad2f-7978-aa12-eb5533b8726b",
          opprettet: "2025-08-28T15:22:03.183735",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0d7-ad2f-7978-aa12-eb5533b8726c",
          opprettet: "2025-08-28T15:22:03.183768",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0d7-ad2f-7978-aa12-eb5533b8726d",
          opprettet: "2025-08-28T15:22:03.183806",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 2,
            datatype: "desimaltall",
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
          id: "0198f0d7-ad2f-7978-aa12-eb5533b8726e",
          opprettet: "2025-08-28T15:22:03.183841",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 104,
            datatype: "heltall",
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
          id: "0198f0d7-ad2f-7978-aa12-eb5533b8726f",
          opprettet: "2025-08-28T15:22:03.183876",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 52,
            datatype: "heltall",
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
          id: "0198f0d7-ad30-73af-8c14-ab5b45b11796",
          opprettet: "2025-08-28T15:22:03.184034",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 200000,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "0198f0cf-d00f-75bb-9b56-ca1d4a8d60aa",
              "0198f0cf-d014-7a77-afca-24a7e70d944f",
            ],
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
          id: "0198f0d7-ad30-73af-8c14-ab5b45b11797",
          opprettet: "2025-08-28T15:22:03.184079",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 2,
            datatype: "desimaltall",
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
          id: "0198f0d7-ad30-73af-8c14-ab5b45b11798",
          opprettet: "2025-08-28T15:22:03.184115",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 0,
            datatype: "heltall",
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
          id: "0198f0d7-ad30-73af-8c14-ab5b45b11799",
          opprettet: "2025-08-28T15:22:03.184152",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 5,
            datatype: "heltall",
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
          id: "0198f0d7-ad30-73af-8c14-ab5b45b1179a",
          opprettet: "2025-08-28T15:22:03.184187",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0d7-ad30-73af-8c14-ab5b45b1179b",
          opprettet: "2025-08-28T15:22:03.184226",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 3,
            datatype: "desimaltall",
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
          id: "0198f0d7-ad30-73af-8c14-ab5b45b1179c",
          opprettet: "2025-08-28T15:22:03.184262",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0d7-ad30-73af-8c14-ab5b45b1179d",
          opprettet: "2025-08-28T15:22:03.184298",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0d7-ad30-73af-8c14-ab5b45b1179e",
          opprettet: "2025-08-28T15:22:03.184343",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0d7-ad30-73af-8c14-ab5b45b1179f",
          opprettet: "2025-08-28T15:22:03.18438",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0d7-ad30-73af-8c14-ab5b45b117a0",
          opprettet: "2025-08-28T15:22:03.18445",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0d7-ad30-73af-8c14-ab5b45b117a1",
          opprettet: "2025-08-28T15:22:03.184509",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
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
          id: "0198f0d7-ad30-73af-8c14-ab5b45b117a2",
          opprettet: "2025-08-28T15:22:03.184555",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 26,
            datatype: "heltall",
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
          id: "0198f0d7-ad31-7e6b-8208-b996d3304804",
          opprettet: "2025-08-28T15:22:03.185844",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "0198f0d7-ad2e-72b1-b4d5-510fcd5d93b3",
              "0198f0d7-ad2e-72b1-b4d5-510fcd5d93b4",
              "0198f0d7-ad2e-72b1-b4d5-510fcd5d93b5",
            ],
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
          id: "0198f0d7-ad31-7e6b-8208-b996d3304805",
          opprettet: "2025-08-28T15:22:03.185926",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 2700,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0198f0cf-da72-7bd1-abac-297d86af8166",
              "0198f0d7-ad2f-7978-aa12-eb5533b87265",
            ],
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
          id: "0198f0d7-ad32-79b0-92c3-4b9c3c31d17a",
          opprettet: "2025-08-28T15:22:03.186149",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 3904.8,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0198f0cf-d013-7d3b-aba1-10e059f48e86",
              "0198f0d7-ad2f-7978-aa12-eb5533b87266",
            ],
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
          id: "0198f0d7-ad32-79b0-92c3-4b9c3c31d17b",
          opprettet: "2025-08-28T15:22:03.186273",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "SumAv",
            },
            opplysninger: [
              "0198f0d7-ad2f-7978-aa12-eb5533b87267",
              "0198f0d7-ad2f-7978-aa12-eb5533b87268",
              "0198f0d7-ad2f-7978-aa12-eb5533b87269",
              "0198f0d7-ad2f-7978-aa12-eb5533b8726a",
              "0198f0d7-ad2f-7978-aa12-eb5533b8726b",
              "0198f0d7-ad2f-7978-aa12-eb5533b8726c",
            ],
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
          id: "0198f0d7-ad32-79b0-92c3-4b9c3c31d17c",
          opprettet: "2025-08-28T15:22:03.18634",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 2885,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0198f0cf-da64-7d7e-be20-b14d871f5358",
              "0198f0d7-ad2f-7978-aa12-eb5533b87265",
            ],
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
          id: "0198f0d7-ad32-79b0-92c3-4b9c3c31d17d",
          opprettet: "2025-08-28T15:22:03.186445",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0198f0cf-c7fa-738e-84cf-fa08c828afbb",
              "0198f0d7-ad2f-7978-aa12-eb5533b8726d",
            ],
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
          id: "0198f0d7-ad32-79b0-92c3-4b9c3c31d17e",
          opprettet: "2025-08-28T15:22:03.186507",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 260320,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0198f0cf-c7fa-738e-84cf-fa08c828afbb",
              "0198f0d7-ad30-73af-8c14-ab5b45b11797",
            ],
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
          id: "0198f0d7-ad33-75dc-8792-4f03192e831b",
          opprettet: "2025-08-28T15:22:03.187933",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 2700,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "0198f0d7-ad31-7e6b-8208-b996d3304805",
              "0198f0d7-ad32-79b0-92c3-4b9c3c31d17a",
            ],
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
          id: "0198f0d7-ad34-7b52-a9d8-e4459098f50c",
          opprettet: "2025-08-28T15:22:03.188094",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 2700,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Substraksjon",
            },
            opplysninger: [
              "0198f0d7-ad31-7e6b-8208-b996d3304805",
              "0198f0d7-ad32-79b0-92c3-4b9c3c31d17b",
            ],
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
          id: "0198f0d7-ad34-7b52-a9d8-e4459098f50d",
          opprettet: "2025-08-28T15:22:03.188159",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "0198f0cf-d00d-7064-a563-f8a1ad5ba06d",
              "0198f0d7-ad32-79b0-92c3-4b9c3c31d17d",
            ],
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
          id: "0198f0d7-ad34-7b52-a9d8-e4459098f50e",
          opprettet: "2025-08-28T15:22:03.188207",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "0198f0d7-ad30-73af-8c14-ab5b45b11796",
              "0198f0d7-ad32-79b0-92c3-4b9c3c31d17e",
            ],
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
          id: "0198f0d7-ad35-7ce0-a9e0-1e385a52f3e8",
          opprettet: "2025-08-28T15:22:03.189569",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 2700,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "0198f0d7-ad33-75dc-8792-4f03192e831b",
              "0198f0d7-ad34-7b52-a9d8-e4459098f50c",
            ],
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
          id: "0198f0d7-ad35-7ce0-a9e0-1e385a52f3e9",
          opprettet: "2025-08-28T15:22:03.189658",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 52,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "0198f0d7-ad2f-7978-aa12-eb5533b8726e",
              "0198f0d7-ad2f-7978-aa12-eb5533b8726f",
              "0198f0d7-ad34-7b52-a9d8-e4459098f50d",
            ],
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
          id: "0198f0d7-ad35-7ce0-a9e0-1e385a52f3ea",
          opprettet: "2025-08-28T15:22:03.189707",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 52,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "0198f0d7-ad2f-7978-aa12-eb5533b8726e",
              "0198f0d7-ad2f-7978-aa12-eb5533b8726f",
              "0198f0d7-ad34-7b52-a9d8-e4459098f50e",
            ],
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
          id: "0198f0d7-ad37-74b7-9f6a-1d9759385e3b",
          opprettet: "2025-08-28T15:22:03.191139",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 540,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Divisjon",
            },
            opplysninger: [
              "0198f0d7-ad2f-7978-aa12-eb5533b87265",
              "0198f0d7-ad35-7ce0-a9e0-1e385a52f3e8",
            ],
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
          id: "0198f0d7-ad37-74b7-9f6a-1d9759385e3c",
          opprettet: "2025-08-28T15:22:03.191206",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 52,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HøyesteAv",
            },
            opplysninger: [
              "0198f0d7-ad35-7ce0-a9e0-1e385a52f3e9",
              "0198f0d7-ad35-7ce0-a9e0-1e385a52f3ea",
            ],
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
          id: "0198f0d7-ad38-7754-985f-4a10761987f3",
          opprettet: "2025-08-28T15:22:03.192726",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 577,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Addisjon",
            },
            opplysninger: [
              "0198f0cf-da63-7dcc-9246-05f5cca87997",
              "0198f0d7-ad37-74b7-9f6a-1d9759385e3b",
            ],
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
          id: "0198f0d7-ad38-7754-985f-4a10761987f4",
          opprettet: "2025-08-28T15:22:03.192799",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "ErUlik",
            },
            opplysninger: [
              "0198f0cf-da6f-7cfe-bf0a-8a3ae52754d1",
              "0198f0d7-ad37-74b7-9f6a-1d9759385e3b",
            ],
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
          id: "0198f0d7-ad38-7754-985f-4a10761987f5",
          opprettet: "2025-08-28T15:22:03.192853",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 52,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "0198f0cf-d011-7f59-86d7-3a6ce256c763",
              "0198f0d7-ad30-73af-8c14-ab5b45b11798",
              "0198f0d7-ad37-74b7-9f6a-1d9759385e3c",
            ],
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
          id: "0198f0d7-ad38-7754-985f-4a10761987f6",
          opprettet: "2025-08-28T15:22:03.192902",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 260,
            datatype: "heltall",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0198f0d7-ad30-73af-8c14-ab5b45b11799",
              "0198f0d7-ad37-74b7-9f6a-1d9759385e3c",
            ],
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
          id: "0198f0d7-ad3a-75f0-9b9e-a1e4a6a4539b",
          opprettet: "2025-08-28T15:22:03.194174",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 577,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "MinstAv",
            },
            opplysninger: [
              "0198f0cf-d03a-7855-b0c1-6a4b83921d7f",
              "0198f0d7-ad38-7754-985f-4a10761987f3",
            ],
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
          id: "0198f0d7-ad3b-76e5-b5e0-e35c59c33f7f",
          opprettet: "2025-08-28T15:22:03.195483",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 2885,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0198f0d7-ad2f-7978-aa12-eb5533b87265",
              "0198f0d7-ad3a-75f0-9b9e-a1e4a6a4539b",
            ],
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
          id: "0198f0d7-ad3b-76e5-b5e0-e35c59c33f80",
          opprettet: "2025-08-28T15:22:03.195587",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 1731,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "Multiplikasjon",
            },
            opplysninger: [
              "0198f0d7-ad30-73af-8c14-ab5b45b1179b",
              "0198f0d7-ad3a-75f0-9b9e-a1e4a6a4539b",
            ],
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
          id: "0198f0d7-ad3c-714e-a9e9-b95e05b09856",
          opprettet: "2025-08-28T15:22:03.196973",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: 1731,
            datatype: "penger",
          },
          utledetAv: {
            regel: {
              navn: "HvisSannMedResultat",
            },
            opplysninger: [
              "01979c85-b14b-7400-82cf-455da35a9185",
              "0198f0d7-ad30-73af-8c14-ab5b45b1179a",
              "0198f0d7-ad3b-76e5-b5e0-e35c59c33f80",
            ],
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
          id: "0198f0d7-b089-72a0-a9ce-c11a68013b61",
          opprettet: "2025-08-28T15:22:04.04138",
          status: "Arvet",
          opprinnelse: "Arvet",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-08-28T15:22:03.845653",
            meldingId: "d3ce3009-eb5e-45ca-a378-6895d07c34d1",
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
          id: "0198f0d7-b08b-78b9-8ba6-a269bd5f56d2",
          opprettet: "2025-08-28T15:22:04.043764",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "0198f0d7-ad30-73af-8c14-ab5b45b1179c",
              "0198f0d7-ad30-73af-8c14-ab5b45b1179d",
              "0198f0d7-ad30-73af-8c14-ab5b45b1179e",
              "0198f0d7-ad30-73af-8c14-ab5b45b1179f",
              "0198f0d7-ad30-73af-8c14-ab5b45b117a0",
              "0198f0d7-ad30-73af-8c14-ab5b45b117a1",
              "0198f0d7-b089-72a0-a9ce-c11a68013b61",
            ],
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
          id: "019956a0-8ce9-7f3b-9c11-df8e4f3ee6d8",
          opprettet: "2025-09-17T09:43:06.473685",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "FørEllerLik",
            },
            opplysninger: [
              "0198f0cf-c780-7578-81a4-d8a6476820a6",
              "0198f0cf-c7e9-72db-b541-13268381aee7",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2025.09.17-07.39-7de5408",
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
      redigertAvSaksbehandler: true,
      formål: "Regel",
      perioder: [
        {
          id: "01996173-f2b5-7102-a669-ee245c3eb3e9",
          opprettet: "2025-09-19T12:10:12.789343",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-06-25",
          gyldigTilOgMed: "2025-11-09",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "0199714c-ef86-784b-b2e3-6e48b8a149f0",
          opprettet: "2025-09-22T14:01:31.526827",
          status: "Ny",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-11-10",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "Saksbehandler",
            registrert: "2025-09-22T14:01:31.055274",
            ident: "Z994714",
            begrunnelse: {
              verdi: "Ny dagpengesøker ",
              sistEndret: "2025-09-22T14:01:31.055243",
            },
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
          id: "019961bc-fa22-7fd7-bf59-65f9558605ee",
          opprettet: "2025-09-19T13:29:58.8181",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-25",
          gyldigTilOgMed: "2025-09-07",
          verdi: {
            fom: "2025-08-25",
            tom: "2025-09-07",
            datatype: "periode",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
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
          id: "019961bc-fa24-77c3-9b3f-fda816a010d4",
          opprettet: "2025-09-19T13:29:58.820559",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-25",
          gyldigTilOgMed: "2025-08-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010d7",
          opprettet: "2025-09-19T13:29:58.820611",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-26",
          gyldigTilOgMed: "2025-08-26",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010da",
          opprettet: "2025-09-19T13:29:58.820621",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-27",
          gyldigTilOgMed: "2025-08-27",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010dd",
          opprettet: "2025-09-19T13:29:58.820629",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-28",
          gyldigTilOgMed: "2025-08-28",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010e0",
          opprettet: "2025-09-19T13:29:58.820636",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-29",
          gyldigTilOgMed: "2025-08-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010e3",
          opprettet: "2025-09-19T13:29:58.820643",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-30",
          gyldigTilOgMed: "2025-08-30",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010e6",
          opprettet: "2025-09-19T13:29:58.82065",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-31",
          gyldigTilOgMed: "2025-08-31",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010e9",
          opprettet: "2025-09-19T13:29:58.820657",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-01",
          gyldigTilOgMed: "2025-09-01",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010ec",
          opprettet: "2025-09-19T13:29:58.820664",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-02",
          gyldigTilOgMed: "2025-09-02",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010ef",
          opprettet: "2025-09-19T13:29:58.820672",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-03",
          gyldigTilOgMed: "2025-09-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010f2",
          opprettet: "2025-09-19T13:29:58.820679",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-04",
          gyldigTilOgMed: "2025-09-04",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010f5",
          opprettet: "2025-09-19T13:29:58.820685",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-05",
          gyldigTilOgMed: "2025-09-05",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010f8",
          opprettet: "2025-09-19T13:29:58.82069",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-06",
          gyldigTilOgMed: "2025-09-06",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010fb",
          opprettet: "2025-09-19T13:29:58.820695",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-07",
          gyldigTilOgMed: "2025-09-07",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
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
          id: "019961bc-fa24-77c3-9b3f-fda816a010d5",
          opprettet: "2025-09-19T13:29:58.820577",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-25",
          gyldigTilOgMed: "2025-08-25",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010d8",
          opprettet: "2025-09-19T13:29:58.820615",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-26",
          gyldigTilOgMed: "2025-08-26",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010db",
          opprettet: "2025-09-19T13:29:58.820624",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-27",
          gyldigTilOgMed: "2025-08-27",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010de",
          opprettet: "2025-09-19T13:29:58.820631",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-28",
          gyldigTilOgMed: "2025-08-28",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010e1",
          opprettet: "2025-09-19T13:29:58.820638",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-29",
          gyldigTilOgMed: "2025-08-29",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010e4",
          opprettet: "2025-09-19T13:29:58.820645",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-30",
          gyldigTilOgMed: "2025-08-30",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010e7",
          opprettet: "2025-09-19T13:29:58.820652",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-31",
          gyldigTilOgMed: "2025-08-31",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010ea",
          opprettet: "2025-09-19T13:29:58.820659",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-01",
          gyldigTilOgMed: "2025-09-01",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010ed",
          opprettet: "2025-09-19T13:29:58.820666",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-02",
          gyldigTilOgMed: "2025-09-02",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010f0",
          opprettet: "2025-09-19T13:29:58.820674",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-03",
          gyldigTilOgMed: "2025-09-03",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010f3",
          opprettet: "2025-09-19T13:29:58.820681",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-04",
          gyldigTilOgMed: "2025-09-04",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010f6",
          opprettet: "2025-09-19T13:29:58.820687",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-05",
          gyldigTilOgMed: "2025-09-05",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010f9",
          opprettet: "2025-09-19T13:29:58.820692",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-06",
          gyldigTilOgMed: "2025-09-06",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010fc",
          opprettet: "2025-09-19T13:29:58.820697",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-07",
          gyldigTilOgMed: "2025-09-07",
          verdi: {
            verdi: 0,
            datatype: "desimaltall",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
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
          id: "019961bc-fa24-77c3-9b3f-fda816a010d6",
          opprettet: "2025-09-19T13:29:58.820582",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-25",
          gyldigTilOgMed: "2025-08-25",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010d9",
          opprettet: "2025-09-19T13:29:58.820617",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-26",
          gyldigTilOgMed: "2025-08-26",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010dc",
          opprettet: "2025-09-19T13:29:58.820625",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-27",
          gyldigTilOgMed: "2025-08-27",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010df",
          opprettet: "2025-09-19T13:29:58.820633",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-28",
          gyldigTilOgMed: "2025-08-28",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010e2",
          opprettet: "2025-09-19T13:29:58.82064",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-29",
          gyldigTilOgMed: "2025-08-29",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010e5",
          opprettet: "2025-09-19T13:29:58.820647",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-30",
          gyldigTilOgMed: "2025-08-30",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010e8",
          opprettet: "2025-09-19T13:29:58.820654",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-31",
          gyldigTilOgMed: "2025-08-31",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010eb",
          opprettet: "2025-09-19T13:29:58.820661",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-01",
          gyldigTilOgMed: "2025-09-01",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010ee",
          opprettet: "2025-09-19T13:29:58.820668",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-02",
          gyldigTilOgMed: "2025-09-02",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010f1",
          opprettet: "2025-09-19T13:29:58.820676",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-03",
          gyldigTilOgMed: "2025-09-03",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010f4",
          opprettet: "2025-09-19T13:29:58.820683",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-04",
          gyldigTilOgMed: "2025-09-04",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010f7",
          opprettet: "2025-09-19T13:29:58.820688",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-05",
          gyldigTilOgMed: "2025-09-05",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010fa",
          opprettet: "2025-09-19T13:29:58.820693",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-06",
          gyldigTilOgMed: "2025-09-06",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
          },
        },
        {
          id: "019961bc-fa24-77c3-9b3f-fda816a010fd",
          opprettet: "2025-09-19T13:29:58.820698",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-07",
          gyldigTilOgMed: "2025-09-07",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          kilde: {
            type: "System",
            registrert: "2025-09-19T13:29:58.817198",
            meldingId: "107f7198-cc68-4c1f-a86d-a6a61ddabb2e",
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
          id: "019961bc-fa68-75cf-a976-427edd98f089",
          opprettet: "2025-09-19T13:29:58.888348",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-25",
          gyldigTilOgMed: "2025-09-07",
          verdi: {
            verdi: 1731,
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
          id: "019961bc-fa68-75cf-a976-427edd98f08a",
          opprettet: "2025-09-19T13:29:58.888773",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-25",
          gyldigTilOgMed: "2025-09-07",
          verdi: {
            verdi: 4039,
            datatype: "penger",
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
          id: "019961bc-fa68-75cf-a976-427edd98f08b",
          opprettet: "2025-09-19T13:29:58.888973",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-25",
          gyldigTilOgMed: "2025-08-25",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019961bc-fa69-7414-9da8-de7be6b95f1b",
          opprettet: "2025-09-19T13:29:58.88926",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-26",
          gyldigTilOgMed: "2025-08-26",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019961bc-fa69-7414-9da8-de7be6b95f1d",
          opprettet: "2025-09-19T13:29:58.889556",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-27",
          gyldigTilOgMed: "2025-08-27",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019961bc-fa69-7414-9da8-de7be6b95f1f",
          opprettet: "2025-09-19T13:29:58.889902",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-28",
          gyldigTilOgMed: "2025-08-28",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019961bc-fa6a-775c-960c-02853fdb2d15",
          opprettet: "2025-09-19T13:29:58.890251",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-29",
          gyldigTilOgMed: "2025-08-29",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019961bc-fa6a-775c-960c-02853fdb2d17",
          opprettet: "2025-09-19T13:29:58.89054",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-30",
          gyldigTilOgMed: "2025-08-30",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "019961bc-fa6a-775c-960c-02853fdb2d19",
          opprettet: "2025-09-19T13:29:58.890887",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-31",
          gyldigTilOgMed: "2025-08-31",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "019961bc-fa6b-7ec3-bf49-9c436676b0a3",
          opprettet: "2025-09-19T13:29:58.891258",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-01",
          gyldigTilOgMed: "2025-09-01",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019961bc-fa6b-7ec3-bf49-9c436676b0a5",
          opprettet: "2025-09-19T13:29:58.891706",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-02",
          gyldigTilOgMed: "2025-09-02",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019961bc-fa6c-7d21-94ef-e7f868250440",
          opprettet: "2025-09-19T13:29:58.89209",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-03",
          gyldigTilOgMed: "2025-09-03",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019961bc-fa6c-7d21-94ef-e7f868250442",
          opprettet: "2025-09-19T13:29:58.89238",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-04",
          gyldigTilOgMed: "2025-09-04",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019961bc-fa6c-7d21-94ef-e7f868250444",
          opprettet: "2025-09-19T13:29:58.892767",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-05",
          gyldigTilOgMed: "2025-09-05",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
        {
          id: "019961bc-fa6d-733f-9b20-a5ba376481c0",
          opprettet: "2025-09-19T13:29:58.893083",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-06",
          gyldigTilOgMed: "2025-09-06",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
        },
        {
          id: "019961bc-fa6d-733f-9b20-a5ba376481c2",
          opprettet: "2025-09-19T13:29:58.893369",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-07",
          gyldigTilOgMed: "2025-09-07",
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
          id: "019961bc-fa69-7414-9da8-de7be6b95f1a",
          opprettet: "2025-09-19T13:29:58.889115",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-25",
          gyldigTilOgMed: "2025-08-25",
          verdi: {
            verdi: 403,
            datatype: "penger",
          },
        },
        {
          id: "019961bc-fa69-7414-9da8-de7be6b95f1c",
          opprettet: "2025-09-19T13:29:58.889418",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-26",
          gyldigTilOgMed: "2025-08-26",
          verdi: {
            verdi: 403,
            datatype: "penger",
          },
        },
        {
          id: "019961bc-fa69-7414-9da8-de7be6b95f1e",
          opprettet: "2025-09-19T13:29:58.889758",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-27",
          gyldigTilOgMed: "2025-08-27",
          verdi: {
            verdi: 403,
            datatype: "penger",
          },
        },
        {
          id: "019961bc-fa6a-775c-960c-02853fdb2d14",
          opprettet: "2025-09-19T13:29:58.890033",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-28",
          gyldigTilOgMed: "2025-08-28",
          verdi: {
            verdi: 403,
            datatype: "penger",
          },
        },
        {
          id: "019961bc-fa6a-775c-960c-02853fdb2d16",
          opprettet: "2025-09-19T13:29:58.890398",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-29",
          gyldigTilOgMed: "2025-08-29",
          verdi: {
            verdi: 403,
            datatype: "penger",
          },
        },
        {
          id: "019961bc-fa6a-775c-960c-02853fdb2d18",
          opprettet: "2025-09-19T13:29:58.890739",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-30",
          gyldigTilOgMed: "2025-08-30",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "019961bc-fa6b-7ec3-bf49-9c436676b0a2",
          opprettet: "2025-09-19T13:29:58.891084",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-31",
          gyldigTilOgMed: "2025-08-31",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "019961bc-fa6b-7ec3-bf49-9c436676b0a4",
          opprettet: "2025-09-19T13:29:58.891447",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-01",
          gyldigTilOgMed: "2025-09-01",
          verdi: {
            verdi: 403,
            datatype: "penger",
          },
        },
        {
          id: "019961bc-fa6b-7ec3-bf49-9c436676b0a6",
          opprettet: "2025-09-19T13:29:58.89192",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-02",
          gyldigTilOgMed: "2025-09-02",
          verdi: {
            verdi: 403,
            datatype: "penger",
          },
        },
        {
          id: "019961bc-fa6c-7d21-94ef-e7f868250441",
          opprettet: "2025-09-19T13:29:58.892229",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-03",
          gyldigTilOgMed: "2025-09-03",
          verdi: {
            verdi: 403,
            datatype: "penger",
          },
        },
        {
          id: "019961bc-fa6c-7d21-94ef-e7f868250443",
          opprettet: "2025-09-19T13:29:58.892582",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-04",
          gyldigTilOgMed: "2025-09-04",
          verdi: {
            verdi: 403,
            datatype: "penger",
          },
        },
        {
          id: "019961bc-fa6c-7d21-94ef-e7f868250445",
          opprettet: "2025-09-19T13:29:58.892945",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-05",
          gyldigTilOgMed: "2025-09-05",
          verdi: {
            verdi: 412,
            datatype: "penger",
          },
        },
        {
          id: "019961bc-fa6d-733f-9b20-a5ba376481c1",
          opprettet: "2025-09-19T13:29:58.893232",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-06",
          gyldigTilOgMed: "2025-09-06",
          verdi: {
            verdi: 0,
            datatype: "penger",
          },
        },
        {
          id: "019961bc-fa6d-733f-9b20-a5ba376481c3",
          opprettet: "2025-09-19T13:29:58.893602",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-07",
          gyldigTilOgMed: "2025-09-07",
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
          id: "019961c1-c55d-708d-ba4d-809ee34b3a66",
          opprettet: "2025-09-19T13:35:12.989879",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-25",
          gyldigTilOgMed: "2025-08-25",
          verdi: {
            verdi: 1,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c562-7f60-ae1a-52059c6bff31",
          opprettet: "2025-09-19T13:35:12.994225",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-26",
          gyldigTilOgMed: "2025-08-26",
          verdi: {
            verdi: 2,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c565-77e4-8a9d-5139f7867096",
          opprettet: "2025-09-19T13:35:12.997232",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-27",
          gyldigTilOgMed: "2025-08-27",
          verdi: {
            verdi: 3,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c567-7b63-91de-25ca1b1acefd",
          opprettet: "2025-09-19T13:35:12.999817",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-28",
          gyldigTilOgMed: "2025-08-28",
          verdi: {
            verdi: 4,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c56a-7d01-b63e-3dcb573924a8",
          opprettet: "2025-09-19T13:35:13.002372",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-29",
          gyldigTilOgMed: "2025-08-29",
          verdi: {
            verdi: 5,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c56c-772f-be96-60a6c19312a8",
          opprettet: "2025-09-19T13:35:13.004651",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-30",
          gyldigTilOgMed: "2025-08-30",
          verdi: {
            verdi: 5,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c56f-7f84-b390-b47b4c9f9059",
          opprettet: "2025-09-19T13:35:13.007062",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-31",
          gyldigTilOgMed: "2025-08-31",
          verdi: {
            verdi: 5,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c571-7201-8c7f-4e9333b159d6",
          opprettet: "2025-09-19T13:35:13.009398",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-01",
          gyldigTilOgMed: "2025-09-01",
          verdi: {
            verdi: 6,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c573-782b-aadf-88c83390ef08",
          opprettet: "2025-09-19T13:35:13.011768",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-02",
          gyldigTilOgMed: "2025-09-02",
          verdi: {
            verdi: 7,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c576-7367-86e0-2d6d500fa8d7",
          opprettet: "2025-09-19T13:35:13.014193",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-03",
          gyldigTilOgMed: "2025-09-03",
          verdi: {
            verdi: 8,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c578-7120-9369-15b13ade61bf",
          opprettet: "2025-09-19T13:35:13.016488",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-04",
          gyldigTilOgMed: "2025-09-04",
          verdi: {
            verdi: 9,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c57a-7434-a285-df2344714811",
          opprettet: "2025-09-19T13:35:13.018884",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-05",
          gyldigTilOgMed: "2025-09-05",
          verdi: {
            verdi: 10,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c57d-70ca-844f-b14f5f892c64",
          opprettet: "2025-09-19T13:35:13.021483",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-06",
          gyldigTilOgMed: "2025-09-06",
          verdi: {
            verdi: 10,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c57f-7061-adba-fa817c2a13c5",
          opprettet: "2025-09-19T13:35:13.023918",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-07",
          gyldigTilOgMed: "2025-09-07",
          verdi: {
            verdi: 10,
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
          id: "019961c1-c560-73e5-8b29-ebe7f3a8b58b",
          opprettet: "2025-09-19T13:35:12.992589",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-25",
          gyldigTilOgMed: "2025-08-25",
          verdi: {
            verdi: 259,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c563-7ee0-8d6b-fc75661f697a",
          opprettet: "2025-09-19T13:35:12.995823",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-26",
          gyldigTilOgMed: "2025-08-26",
          verdi: {
            verdi: 258,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c566-7620-82e9-ec9b0defe83f",
          opprettet: "2025-09-19T13:35:12.998623",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-27",
          gyldigTilOgMed: "2025-08-27",
          verdi: {
            verdi: 257,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c569-737b-bf24-4a271b679e0f",
          opprettet: "2025-09-19T13:35:13.001196",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-28",
          gyldigTilOgMed: "2025-08-28",
          verdi: {
            verdi: 256,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c56b-73cd-84cc-8bd12c16ff46",
          opprettet: "2025-09-19T13:35:13.003453",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-29",
          gyldigTilOgMed: "2025-08-29",
          verdi: {
            verdi: 255,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c56d-7df1-84dc-63b545f502ea",
          opprettet: "2025-09-19T13:35:13.005788",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-30",
          gyldigTilOgMed: "2025-08-30",
          verdi: {
            verdi: 255,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c570-7454-84c4-ec1bc087b3be",
          opprettet: "2025-09-19T13:35:13.008199",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-08-31",
          gyldigTilOgMed: "2025-08-31",
          verdi: {
            verdi: 255,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c572-77e5-bdec-361ef813ab79",
          opprettet: "2025-09-19T13:35:13.010644",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-01",
          gyldigTilOgMed: "2025-09-01",
          verdi: {
            verdi: 254,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c574-7cd5-883a-c17219223cf2",
          opprettet: "2025-09-19T13:35:13.012926",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-02",
          gyldigTilOgMed: "2025-09-02",
          verdi: {
            verdi: 253,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c577-7eb7-87c1-ec312d67de0a",
          opprettet: "2025-09-19T13:35:13.015331",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-03",
          gyldigTilOgMed: "2025-09-03",
          verdi: {
            verdi: 252,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c579-7425-b7cd-4a90c6ae4317",
          opprettet: "2025-09-19T13:35:13.017706",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-04",
          gyldigTilOgMed: "2025-09-04",
          verdi: {
            verdi: 251,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c57c-757d-8561-03e47d34cb98",
          opprettet: "2025-09-19T13:35:13.020211",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-05",
          gyldigTilOgMed: "2025-09-05",
          verdi: {
            verdi: 250,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c57e-710b-a2e0-34d89148c849",
          opprettet: "2025-09-19T13:35:13.02274",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-06",
          gyldigTilOgMed: "2025-09-06",
          verdi: {
            verdi: 250,
            datatype: "heltall",
          },
        },
        {
          id: "019961c1-c581-7d7b-ad72-e29e092f6cb8",
          opprettet: "2025-09-19T13:35:13.025113",
          status: "Arvet",
          opprinnelse: "Arvet",
          gyldigFraOgMed: "2025-09-07",
          gyldigTilOgMed: "2025-09-07",
          verdi: {
            verdi: 250,
            datatype: "heltall",
          },
        },
      ],
    },
  ],
  rettighetsperioder: [
    {
      fraOgMed: "2025-06-25",
      tilOgMed: "2025-11-09",
      harRett: true,
      opprinnelse: "Arvet",
    },
    {
      fraOgMed: "2025-11-10",
      harRett: true,
      opprinnelse: "Ny",
    },
  ],
};
