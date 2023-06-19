import { type IRapporteringsperiode } from "~/models/rapporteringsperiode.server";

export const mockRapporteringsperioder: IRapporteringsperiode[] = [
  {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    fraOgMed: "2023-06-19",
    tilOgMed: "2023-06-19",
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
            timer: "PT8H30M",
            dato: "2023-05-05",
          },
        ],
      },
    ],
  },
];
