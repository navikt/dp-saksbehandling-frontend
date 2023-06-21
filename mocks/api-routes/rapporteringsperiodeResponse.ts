import { type IRapporteringsperiode } from "~/models/rapporteringsperiode.server";

export const mockRapporteringsperioder: IRapporteringsperiode[] = [
  {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    fraOgMed: "2023-06-19",
    tilOgMed: "2023-06-21",
    korrigerer: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    korrigertAv: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    status: "TilUtfylling",
    dager: [
      {
        dagIndex: 0,
        dato: "2023-06-19",
        muligeAktiviteter: ["Arbeid"],
        aktiviteter: [
          {
            id: "4a49e571-6384-4eab-9c2e-3f4d48d30b9a",
            type: "Arbeid",
            timer: "PT8H0M",
            dato: "2023-06-19",
          },
        ],
      },
      {
        dagIndex: 1,
        dato: "2023-06-20",
        muligeAktiviteter: ["Arbeid", "Ferie"],
        aktiviteter: [
          {
            id: "4a49e571-6384-4eab-9c2e-3f4d48d30b9a",
            type: "Ferie",
            timer: "PT8H0M",
            dato: "2023-06-20",
          },
        ],
      },
      {
        dagIndex: 2,
        dato: "2023-06-21",
        muligeAktiviteter: ["Arbeid"],
        aktiviteter: [
          {
            id: "4a49e571-6384-4eab-9c2e-3f4d48d30b9a",
            type: "Arbeid",
            timer: "PT3H30M",
            dato: "2023-06-21",
          },
        ],
      },
      {
        dagIndex: 3,
        dato: "2023-06-22",
        muligeAktiviteter: ["Arbeid"],
        aktiviteter: [
          {
            id: "4a49e571-6384-4eab-9c2e-3f4d48d30b9a",
            type: "Arbeid",
            timer: "PT3H0M",
            dato: "2023-06-22",
          },
        ],
      },
      {
        dagIndex: 4,
        dato: "2023-06-23",
        muligeAktiviteter: ["Arbeid"],
        aktiviteter: [
          {
            id: "4a49e571-6384-4eab-9c2e-3f4d48d30b9a",
            type: "Arbeid",
            timer: "PT5H30M",
            dato: "2023-06-23",
          },
        ],
      },
      {
        dagIndex: 5,
        dato: "2023-06-24",
        muligeAktiviteter: ["Arbeid"],
        aktiviteter: [
          {
            id: "4a49e571-6384-4eab-9c2e-3f4d48d30b9a",
            type: "Arbeid",
            timer: "PT1H30M",
            dato: "2023-06-24",
          },
        ],
      },
      {
        dagIndex: 6,
        dato: "2023-06-25",
        muligeAktiviteter: ["Arbeid"],
        aktiviteter: [
          {
            id: "4a49e571-6384-4eab-9c2e-3f4d48d30b9a",
            type: "Arbeid",
            timer: "PT2H0M",
            dato: "2023-06-25",
          },
        ],
      },
      {
        dagIndex: 7,
        dato: "2023-06-26",
        muligeAktiviteter: ["Arbeid"],
        aktiviteter: [
          {
            id: "4a49e571-6384-4eab-9c2e-3f4d48d30b9a",
            type: "Arbeid",
            timer: "PT6H0M",
            dato: "2023-06-26",
          },
        ],
      },
      {
        dagIndex: 7,
        dato: "2023-06-27",
        muligeAktiviteter: ["Arbeid"],
        aktiviteter: [
          {
            id: "4a49e571-6384-4eab-9c2e-3f4d48d30b9a",
            type: "Arbeid",
            timer: "PT0H30M",
            dato: "2023-06-27",
          },
        ],
      },
      {
        dagIndex: 8,
        dato: "2023-06-28",
        muligeAktiviteter: ["Arbeid"],
        aktiviteter: [],
      },
      {
        dagIndex: 9,
        dato: "2023-06-29",
        muligeAktiviteter: ["Arbeid"],
        aktiviteter: [
          {
            id: "4a49e571-6384-4eab-9c2e-3f4d48d30b9a",
            type: "Arbeid",
            timer: "PT2H0M",
            dato: "2023-06-29",
          },
        ],
      },
      {
        dagIndex: 10,
        dato: "2023-06-30",
        muligeAktiviteter: ["Arbeid"],
        aktiviteter: [
          {
            id: "4a49e571-6384-4eab-9c2e-3f4d48d30b9a",
            type: "Arbeid",
            timer: "PT2H0M",
            dato: "2023-06-30",
          },
        ],
      },
      {
        dagIndex: 11,
        dato: "2023-07-01",
        muligeAktiviteter: ["Arbeid"],
        aktiviteter: [
          {
            id: "4a49e571-6384-4eab-9c2e-3f4d48d30b9a",
            type: "Arbeid",
            timer: "PT2H0M",
            dato: "2023-07-01",
          },
        ],
      },
      {
        dagIndex: 12,
        dato: "2023-07-02",
        muligeAktiviteter: ["Arbeid"],
        aktiviteter: [
          {
            id: "4a49e571-6384-4eab-9c2e-3f4d48d30b9a",
            type: "Arbeid",
            timer: "PT2H0M",
            dato: "2023-07-02",
          },
        ],
      },
      {
        dagIndex: 13,
        dato: "2023-07-03",
        muligeAktiviteter: ["Arbeid"],
        aktiviteter: [
          {
            id: "4a49e571-6384-4eab-9c2e-3f4d48d30b9a",
            type: "Arbeid",
            timer: "PT2H0M",
            dato: "2023-07-03",
          },
        ],
      },
    ],
  },
];
