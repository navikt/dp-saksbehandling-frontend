import type { components } from "../../../openapi/behandling-typer";

export const behandling019df2f6273877f3b629c54a0360c47b: components["schemas"]["Behandling"] = {
  behandlingId: "019df2f6-2738-77f3-b629-c54a0360c47b",
  behandletHendelse: {
    datatype: "UUID",
    id: "019df2f4-b427-7af5-b707-002223c09b59",
    type: "Ferietillegg",
    skjedde: "2026-05-04",
  },
  behandlingskjedeId: "019df2f6-2738-77f3-b629-c54a0360c47b",
  automatisk: true,
  ident: "17869697486",
  rettighetsperioder: [
    {
      fraOgMed: "2026-01-01",
      tilOgMed: "2026-12-31",
      harRett: false,
      opprinnelse: "Ny",
    },
  ],
  opprettet: "2026-05-04T14:28:31.452778",
  sistEndret: "2026-05-05T07:02:55.320316",
  kreverTotrinnskontroll: false,
  tilstand: "Ferdig",
  avklaringer: [],
  vilkår: [
    {
      id: "NzgxMjkyOTM2",
      navn: "Ferietillegg",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "14",
        tittel: "§ 4-14. Ferietillegg",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-14",
      },
      type: "Vilkår",
      relevantForResultat: true,
      opplysningTypeId: "019d7231-21b8-7d1f-9e3a-314195d9f347",
      opplysninger: [
        "019d7695-7c15-74b7-a3af-7c82e47c2a20",
        "019d7231-ddc0-7059-a631-7d4d06b974de",
        "019d7232-0fe1-79fa-8a87-b6937fe67079",
        "019d7231-21b8-7d1f-9e3a-314195d9f347",
      ],
    },
    {
      id: "NzgxMjkyOTM2",
      navn: "Ferietillegg",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "14",
        tittel: "§ 4-14. Ferietillegg",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-14",
      },
      type: "Vilkår",
      relevantForResultat: true,
      opplysninger: [],
    },
  ],
  fastsettelser: [],
  saksbehandlingsregler: [],
  opplysninger: [
    {
      opplysningTypeId: "01958ef2-e237-77c4-89e1-de91256e2e4a",
      navn: "hendelseType",
      datatype: "tekst",
      perioder: [
        {
          id: "019df2f6-2738-77f3-b629-c54a0360c479",
          opprettet: "2026-05-04T14:28:31.416247",
          type: "Faktum",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-05-04",
          gyldigTilOgMed: "2026-05-04",
          verdi: {
            verdi: "BeregnFerietilleggHendelse",
            datatype: "tekst",
          },
          kilde: {
            type: "System",
            registrert: "2026-05-04T14:28:31.416076",
            meldingId: "402b5ac4-f0ca-4ec7-944c-d15d02e345ce",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "019d7695-7c15-74b7-a3af-7c82e47c2a20",
      navn: "Året som det skal beregnes ferietillegg for",
      datatype: "heltall",
      perioder: [
        {
          id: "019df2f6-2738-77f3-b629-c54a0360c47a",
          opprettet: "2026-05-04T14:28:31.416521",
          type: "Faktum",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2025-01-01",
          gyldigTilOgMed: "2025-12-31",
          verdi: {
            verdi: 2025,
            datatype: "heltall",
          },
          kilde: {
            type: "System",
            registrert: "2026-05-04T14:28:31.416076",
            meldingId: "402b5ac4-f0ca-4ec7-944c-d15d02e345ce",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "019d7232-0fe1-79fa-8a87-b6937fe67079",
      navn: "Antall dager som må være forbrukt for at man skal ha krav på ferietillegg",
      datatype: "heltall",
      perioder: [
        {
          id: "019df2f6-2751-70b6-af78-e1b490e747bb",
          opprettet: "2026-05-04T14:28:31.441117",
          type: "Faktum",
          opprinnelse: "Ny",
          verdi: {
            verdi: 40,
            datatype: "heltall",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "019d7231-ddc0-7059-a631-7d4d06b974de",
      navn: "Antall dager forbrukte i opptjeningsåret",
      datatype: "heltall",
      perioder: [
        {
          id: "019df684-8d4b-721d-a7b8-d71fa1148917",
          opprettet: "2026-05-05T07:02:55.307688",
          type: "Faktum",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-01",
          gyldigTilOgMed: "2026-12-31",
          verdi: {
            verdi: 26,
            datatype: "heltall",
          },
          kilde: {
            type: "System",
            registrert: "2026-05-05T07:02:54.932405",
            meldingId: "dc0ff07e-fab0-453a-9d5a-76fbdf607410",
          },
          utledetAv: {
            regel: {
              navn: "innhentMed",
            },
            opplysninger: ["019df2f6-2738-77f3-b629-c54a0360c47a"],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.05.05-05.00-5ba3def",
          },
        },
      ],
      synlig: true,
      redigerbar: true,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
    {
      opplysningTypeId: "019d7231-21b8-7d1f-9e3a-314195d9f347",
      navn: "Har krav på ferietillegg",
      datatype: "boolsk",
      perioder: [
        {
          id: "019df684-8d51-710d-89dc-3f4037f37ba3",
          opprettet: "2026-05-05T07:02:55.313919",
          type: "Faktum",
          opprinnelse: "Ny",
          gyldigFraOgMed: "2026-01-01",
          gyldigTilOgMed: "2026-12-31",
          verdi: {
            verdi: false,
            datatype: "boolsk",
          },
          utledetAv: {
            regel: {
              navn: "StørreEnn",
            },
            opplysninger: [
              "019df2f6-2751-70b6-af78-e1b490e747bb",
              "019df684-8d4b-721d-a7b8-d71fa1148917",
            ],
            versjon:
              "europe-north1-docker.pkg.dev/nais-management-233d/teamdagpenger/dp-behandling:2026.05.05-05.00-5ba3def",
          },
        },
      ],
      synlig: true,
      redigerbar: false,
      redigertAvSaksbehandler: false,
      formål: "Regel",
    },
  ],
  forslagOm: "Avslag",
};
