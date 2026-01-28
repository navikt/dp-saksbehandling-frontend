import { components } from "../../openapi/behandling-typer";

export const mockVurderinger: components["schemas"]["SaksbehandlersVurderinger"] = {
  behandlingId: "019503bd-b922-7807-afa4-e0d615e40260",
  opplysninger: [
    {
      opplysningTypeId: "0194ff86-a035-7eb0-9c60-21899f7cc0c1",
      navn: "Kravet til reell arbeidssøker er relevant",
      datatype: "boolsk",
      perioder: [
        {
          id: "019a71dd-0505-74f1-851a-bf356318eebc",
          opprettet: "2025-11-11T08:41:41.509927",
          opprinnelse: "Arvet",
          verdi: {
            verdi: true,
            datatype: "boolsk",
          },
        },
      ],
    },
    {
      opplysningTypeId: "0194881f-9414-7823-8d29-0e25b7feb7cf",
      navn: "Arbeidsgivers rapporteringsfrist",
      datatype: "dato",
      perioder: [
        {
          id: "019a71dd-0506-73cc-be38-f0cdcc7e654e",
          opprettet: "2025-11-11T08:41:41.510888",
          opprinnelse: "Arvet",
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
    },
  ],
};
