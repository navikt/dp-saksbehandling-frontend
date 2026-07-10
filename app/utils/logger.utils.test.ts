import { Writable } from "node:stream";

import { beforeEach, describe, expect, test, vi } from "vitest";

import { createLogger } from "./logger.utils";

// Simulerer prod-miljø (ikke localhost)
vi.stubEnv("IS_LOCALHOST", "false");

function lagTestLogger() {
  const linjer: string[] = [];
  const destination = new Writable({
    write(chunk, _encoding, callback) {
      linjer.push(chunk.toString().trim());
      callback();
    },
  });
  const logger = createLogger(destination);
  return { logger, linjer };
}

function parseLogg(linjer: string[]): Record<string, unknown> {
  return JSON.parse(linjer[0]);
}

describe("logger.utils — ECS-format (prod)", () => {
  beforeEach(() => {
    vi.stubEnv("IS_LOCALHOST", "false");
  });

  test("info-logg har log.level og @timestamp", () => {
    const { logger, linjer } = lagTestLogger();
    logger.info("testmelding");

    const logg = parseLogg(linjer);
    expect(logg["level"]).toBe("info");
    expect(logg["@timestamp"]).toBeDefined();
    expect(logg["message"]).toBe("testmelding");
  });

  test("error-logg har log.level error", () => {
    const { logger, linjer } = lagTestLogger();
    logger.error("noe gikk galt");

    const logg = parseLogg(linjer);
    expect(logg["level"]).toBe("error");
    expect(logg["message"]).toBe("noe gikk galt");
  });

  test("warn-logg har log.level warn", () => {
    const { logger, linjer } = lagTestLogger();
    logger.warn("advarsel");

    const logg = parseLogg(linjer);
    expect(logg["level"]).toBe("warn");
    expect(logg["message"]).toBe("advarsel");
  });

  test("logg med objekt flater ut felter korrekt", () => {
    const { logger, linjer } = lagTestLogger();
    logger.warn({ status: 404, message: "Not Found" });

    const logg = parseLogg(linjer);
    expect(logg["level"]).toBe("warn");
    expect(logg["status"]).toBe(404);
  });

  test("logg inneholder @version: 1", () => {
    const { logger, linjer } = lagTestLogger();
    logger.info("versjonssjekk");

    const logg = parseLogg(linjer);
    expect(logg["@version"]).toBe("1");
  });

  test("logg inneholder ikke fnr eller PII-feltnavn", () => {
    const { logger, linjer } = lagTestLogger();
    logger.info("Henter sak for bruker");

    const logg = parseLogg(linjer);
    expect(Object.keys(logg)).not.toContain("fnr");
    expect(Object.keys(logg)).not.toContain("fodselsnummer");
  });

  test("logg er gyldig JSON", () => {
    const { logger, linjer } = lagTestLogger();
    logger.info("json-sjekk");

    expect(() => JSON.parse(linjer[0])).not.toThrow();
  });
});
