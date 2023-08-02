import { vi } from "vitest";
import { type SessionWithOboProvider } from "@navikt/dp-auth";

import * as mockAuth from "~/utils/auth.utils.server";

const mockToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJwaWQiOiIxMjMxMjMxMjMifQ.XdPmoIvLFmgz51eH_05WBNOllgWEtp9kYHkWAHqMwEc";

export function mockSession() {
  const obj: SessionWithOboProvider = {
    token: mockToken,
    apiToken: async () => "access_token",
    expiresIn: 123,
  };

  return {
    getAzureSession: vi.spyOn(mockAuth, "getAzureSession").mockReturnValue(Promise.resolve(obj)),
    getRapporteringOboToken: vi
      .spyOn(mockAuth, "getRapporteringOboToken")
      .mockReturnValue(Promise.resolve(mockToken)),
  };
}
