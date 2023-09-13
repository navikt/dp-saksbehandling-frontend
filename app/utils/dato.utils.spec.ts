import { describe, test, expect } from "vitest";
import { formaterPeriodeTilUkenummer } from "./dato.utils";

describe("formaterPeriodeTilUkenummer", () => {
  test("returnerer riktig periodeukenummer", () => {
    const fraOgMed = "2023-05-22";
    const tilOgMed = "2023-06-04";

    const periodeString = formaterPeriodeTilUkenummer(fraOgMed, tilOgMed);

    expect(periodeString).toBe("21 - 22");
  });
});
