import { components } from "../../openapi/saksbehandling-typer";
import { mockListeOppgaver } from "./mock-liste-oppgaver";
import { mockPerson } from "./mock-person";

export const mockPersonOversikt: components["schemas"]["PersonOversikt"] = {
  person: mockPerson,
  oppgaver: mockListeOppgaver,
  saker: [
    {
      id: "01979c1e-9005-76d8-8efa-99370d5e77e5",
      behandlinger: [
        {
          id: "018e2222-9df8-7aa4-94a6-318fada10999",
          behandlingType: "KLAGE",
          opprettet: "2025-06-24T00:00:00",
          oppgaveId: "018e9999-9df8-7aa4-94a6-318fada10999",
        },
        {
          id: "019353b5-3ee6-7693-8fdd-649153c18f74",
          behandlingType: "RETT_TIL_DAGPENGER",
          opprettet: "2025-06-23T11:28:57.936476",
          oppgaveId: "018f05a0-667a-7597-a835-fab53189d051",
        },
      ],
    },
    {
      id: "01979c85-adb5-7b7a-b67d-4265b3b88e81",
      behandlinger: [
        {
          id: "019391c0-d9f5-78d9-8704-02f749bfb17b",
          behandlingType: "RETT_TIL_DAGPENGER",
          opprettet: "2025-06-23T13:21:35.602787",
          oppgaveId: "018e2229-9df8-7aa4-94a6-318fada10999",
        },
      ],
    },
  ],
};
