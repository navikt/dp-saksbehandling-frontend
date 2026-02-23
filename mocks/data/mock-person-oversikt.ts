import { components } from "../../openapi/saksbehandling-typer";
import { mockListeOppgaver } from "./mock-oppgaver/mock-liste-oppgaver";
import { mockPerson } from "./mock-person";

export const mockPersonOversikt: components["schemas"]["PersonOversikt"] = {
  person: mockPerson,
  oppgaver: mockListeOppgaver,
  saker: [
    {
      id: "01979c1e-9005-76d8-8efa-99370d5e77e5",
      oppgaver: mockListeOppgaver,
    },
    {
      id: "01979c85-adb5-7b7a-b67d-4265b3b88e81",
      oppgaver: mockListeOppgaver,
    },
  ],
};
