import { components } from "../../openapi/saksbehandling-typer";
import { mockListeOppgaver } from "./mock-oppgaver/mock-liste-oppgaver";
import { mockPerson } from "./mock-person";

export const mockPersonOversikt: components["schemas"]["PersonOversikt"] = {
  person: mockPerson,
  oppgaver: mockListeOppgaver,
  saker: [
    {
      id: "01979c1e-9005-76d8-8efa-99370d5e77e5",
      behandlinger: [
        {
          id: "0199390e-35aa-7f47-9e95-2c384bcb2e93",
          behandlingType: "KLAGE",
          utlostAv: "KLAGE",
          opprettet: "2025-06-24T00:00:00",
          oppgaveId: "0199390e-3602-7b10-9402-77ca0d12d8ac",
        },
        {
          id: "019b2cbf-a124-77ab-8944-496c1856f599",
          behandlingType: "RETT_TIL_DAGPENGER",
          utlostAv: "SØKNAD",
          opprettet: "2025-06-23T11:28:57.936476",
          oppgaveId: "019b2cbf-a883-718c-8ad3-eecfc980ffd7",
        },
        {
          id: "019b2ccd-878b-754a-b941-507d4da5ab71",
          behandlingType: "RETT_TIL_DAGPENGER",
          utlostAv: "MELDEKORT",
          opprettet: "2025-06-23T11:28:57.936476",
          oppgaveId: "019b2ccd-885d-71eb-8977-f453029fd5b4",
        },
      ],
    },
    {
      id: "01979c85-adb5-7b7a-b67d-4265b3b88e81",
      behandlinger: [
        {
          id: "019b2cbf-a124-77ab-8944-496c1856f599",
          behandlingType: "RETT_TIL_DAGPENGER",
          utlostAv: "SØKNAD",
          opprettet: "2025-06-23T13:21:35.602787",
          oppgaveId: "019b2cbf-a883-718c-8ad3-eecfc980ffd7",
        },
      ],
    },
  ],
};
