import { execSync } from "child_process";
import dotenv from "dotenv";
import fs from "fs";
import inquirer from "inquirer";
import path from "path";

import { getEnv } from "~/utils/env.utils";
import { isDefined } from "~/utils/type-guards";

import { mockJournalposter } from "../mocks/data/mock-journalposter";
import { mockGradertPerson, mockPerson } from "../mocks/data/mock-person";
import {
  konverterSSOBrukerTilBehandler,
  mockAnnenSaksbehandler,
  mockSaksbehandler,
} from "../mocks/data/mock-saksbehandler";
import { components as BehandlingComponents } from "../openapi/behandling-typer";
import { components as SaksbehandlingComponents } from "../openapi/saksbehandling-typer";

dotenv.config();

function kebabToCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function uuidTilVariabelNavn(uuid: string, prefix: string): string {
  const uuidUtenBindestrek = uuid.replace(/-/g, "");
  return `${prefix}${uuidUtenBindestrek}`;
}

export async function genererMockDagpengerRettBehandling(behandlingId?: string) {
  const { hentBehandling } = await import("~/models/behandling.server");

  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "behandlingId",
      message: "Skriv inn behandlingId:",
      default: behandlingId,
    },
  ]);

  console.info(`Fetching behandling ${answers.behandlingId}...`);
  const behandling = await hentBehandling(
    new Request(getEnv("DP_BEHANDLING_URL")),
    answers.behandlingId,
  );

  const defaultFilnavn = uuidTilVariabelNavn(answers.behandlingId, "behandling");
  const { filnavn } = await inquirer.prompt([
    {
      type: "input",
      name: "filnavn",
      message: "Overskriv filnavn i mock-kebab-case (uten .ts):",
      default: defaultFilnavn,
    },
  ]);

  await lagMockFil<BehandlingComponents["schemas"]["Behandling"]>({
    data: behandling,
    filnavn: filnavn,
    variabelNavn: kebabToCamelCase(filnavn),
    mockDataType: "DAGPENGER_RETT_BEHANDLING",
    mockMappe: "mock-dagpenger-rett-behandling",
  });

  await leggTilIMockListe({
    mockListeFilsti: "mocks/data/mock-dagpenger-rett-behandling/mock-behandlinger.ts",
    mockListeVariabelNavn: "mockBehandlinger",
    mockFilnavn: filnavn,
    mockVariabelNavn: kebabToCamelCase(filnavn),
  });

  return behandling;
}

export async function genererMockOppgave(id?: string) {
  let oppgaveId = id;

  if (!oppgaveId) {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "oppgaveId",
        message: "Skriv inn oppgaveId:",
        validate: (input) => input.length > 0 || "OppgaveId er påkrevd",
      },
    ]);
    oppgaveId = answers.oppgaveId;
  }

  if (!oppgaveId) {
    throw new Error("OppgaveId er påkrevd");
  }

  const { hentOppgave } = await import("~/models/saksbehandling.server");
  const oppgave = await hentOppgave(new Request(getEnv("DP_SAKSBEHANDLING_URL")), oppgaveId);

  const defaultFilnavn = oppgave.emneknagger
    .map((emneknagg) => emneknagg.toLowerCase().replace(/\s+/g, "-"))
    .join("-");

  const answers = await inquirer.prompt([
    {
      type: "select",
      name: "saksbehandler",
      message: "Velg saksbehandler:",
      choices: [
        {
          value: konverterSSOBrukerTilBehandler(mockSaksbehandler),
          name: mockSaksbehandler.displayName,
        },
        {
          value: konverterSSOBrukerTilBehandler(mockAnnenSaksbehandler),
          name: mockAnnenSaksbehandler.displayName,
        },
        { value: oppgave.saksbehandler, name: "Fra dev oppgave" },
      ],
    },
    {
      type: "select",
      name: "tilstand",
      message: "Overstyr tilstand:",
      choices: [
        "KLAR_TIL_BEHANDLING",
        "UNDER_BEHANDLING",
        "KLAR_KONTROLL",
        "UNDER_KONTROLL",
        "FERDIG_BEHANDLET",
        "PAA_VENT",
      ],
      default: oppgave.tilstand,
    },
    {
      type: "checkbox",
      name: "journalpostIder",
      message: "Overstyr journalposter: ",
      choices: [
        ...oppgave.journalpostIder.map((id) => ({ name: "Fra dev oppgave", value: id })),
        ...mockJournalposter
          .filter(isDefined)
          .map((post) => ({ name: post.tittel, value: post.journalpostId })),
      ],
      default: oppgave.journalpostIder,
    },

    {
      type: "select",
      name: "person",
      message: "Overstyr person:",
      choices: [
        { value: oppgave.person, name: "Fra dev oppgave" },
        { value: mockPerson, name: "Vanlig person" },
        {
          value: mockGradertPerson,
          name: "Gradert person",
        },
      ],
      default: oppgave.person,
    },
    {
      type: "select",
      name: "meldingOmVedtakKilde",
      message: "Overstyr melding om vedtak kilde:",
      choices: ["DP_SAK", "GOSYS", "INGEN"],
      default: oppgave.meldingOmVedtakKilde,
    },
    {
      type: "select",
      name: "brevVariant",
      message: "Overstyr brev variant:",
      choices: ["GENERERT", "EGENDEFINERT"],
      default: oppgave.meldingOmVedtakKilde,
      when: (answers) => answers.meldingOmVedtakKilde === "DP_SAK",
    },
    {
      type: "checkbox",
      name: "emneknagger",
      message: "Overstyr emneknagger:",
      choices: [
        "Alder",
        "Arbeidsinntekt",
        "Avslag",
        "Gjenopptak",
        "Ikke registrert",
        "Innvilgelse",
        "Innsending",
        "Klage",
        "Minsteinntekt",
        "Opphold utland",
        "Ordinær",
        "Permitert fisk",
        "Reell arbeidssøker",
        "Verneplikt",
      ],
      default: oppgave.emneknagger,
    },
    {
      type: "input",
      name: "filnavn",
      message: "Oversriv filnavn i mock-kebab-case (uten .ts):",
      default: defaultFilnavn,
    },
  ]);

  const mockOppgave: SaksbehandlingComponents["schemas"]["Oppgave"] = {
    ...oppgave,
    saksbehandler: answers.saksbehandler,
    person: answers.person,
    emneknagger: answers.emneknagger,
    tilstand: answers.tilstand,
    journalpostIder: answers.journalpostIder,
    meldingOmVedtakKilde: answers.meldingOmVedtakKilde,
  };

  await lagMockFil<SaksbehandlingComponents["schemas"]["Oppgave"]>({
    data: mockOppgave,
    filnavn: answers.filnavn,
    variabelNavn: kebabToCamelCase(answers.filnavn),
    mockDataType: "OPPGAVE",
    mockMappe: "mock-oppgaver",
  });

  await leggTilIMockListe({
    mockListeFilsti: "mocks/data/mock-oppgaver/mock-oppgaver.ts",
    mockListeVariabelNavn: "mockOppgaver",
    mockFilnavn: answers.filnavn,
    mockVariabelNavn: kebabToCamelCase(answers.filnavn),
  });

  await leggTilIMockListe({
    mockListeFilsti: "mocks/data/mock-oppgaver/mock-liste-oppgaver.ts",
    mockListeVariabelNavn: "mockListeOppgaver",
    mockFilnavn: answers.filnavn,
    mockVariabelNavn: kebabToCamelCase(answers.filnavn),
    variabelNavnFunction: "konverterOppgaveTilListeOppgave",
  });

  return mockOppgave;
}

async function lagMockFil<T>(params: {
  data: T;
  filnavn: string;
  variabelNavn: string;
  mockDataType: "OPPGAVE" | "DAGPENGER_RETT_BEHANDLING";
  mockMappe?: string;
}) {
  const { data, filnavn, variabelNavn, mockMappe, mockDataType } = params;
  const mockDir = path.join(process.cwd(), "mocks", "data", mockMappe ? mockMappe : "");
  const filePath = path.join(mockDir, `${filnavn}.ts`);

  let filInnhold: string;

  switch (mockDataType) {
    case "OPPGAVE":
      filInnhold = `import type { components } from "../../../openapi/saksbehandling-typer";
      
      export const ${variabelNavn}: components["schemas"]["Oppgave"] = ${JSON.stringify(data, null, 2)};`;
      break;
    case "DAGPENGER_RETT_BEHANDLING":
      filInnhold = `import type { components } from "../../../openapi/behandling-typer";
        
        export const ${variabelNavn}: components["schemas"]["Behandling"] = ${JSON.stringify(data, null, 2)};`;
      break;
  }

  fs.writeFileSync(filePath, filInnhold, "utf-8");

  // Format with Prettier
  try {
    execSync(`npx prettier --write "${filePath}"`, { stdio: "inherit" });
    console.info(`Oppgave mock-fil opprettet og formatert: ${filePath}`);
  } catch {
    console.warn(`Oppgave mock-fil opprettet, men Prettier formatering feilet: ${filePath}`);
  }
}

export async function leggTilIMockListe(params: {
  mockListeFilsti: string;
  mockListeVariabelNavn: string;
  mockVariabelNavn: string;
  mockFilnavn: string;
  variabelNavnFunction?: string;
}) {
  const {
    mockListeFilsti,
    mockListeVariabelNavn,
    mockVariabelNavn,
    mockFilnavn,
    variabelNavnFunction,
  } = params;
  const filsti = path.join(process.cwd(), mockListeFilsti);

  let filinnhold: string;
  try {
    filinnhold = fs.readFileSync(filsti, "utf-8");
  } catch (error) {
    console.error("Kunne ikke lese filen:", filsti, error);
    throw error;
  }

  const nyImport = `import { ${mockVariabelNavn} } from "./${mockFilnavn}";`;
  const importRegex = /^(import .+?;\s*)+/s;
  const importMatch = filinnhold.match(importRegex);

  if (!importMatch) {
    throw new Error(`Fant ikke importseksjon i ${mockListeFilsti}`);
  }

  const importBlokk = importMatch[0];
  const oppdatertImportBlokk = importBlokk.includes(nyImport)
    ? importBlokk // import finnes allerede
    : importBlokk.trimEnd() + "\n" + nyImport + "\n";

  let oppdatertInnhold = filinnhold.replace(importRegex, oppdatertImportBlokk);
  const arrayRegex = new RegExp(
    `export const ${mockListeVariabelNavn}:?[^=]*=\\s*\\[([\\s\\S]*?)];`,
  );

  const arrayMatch = oppdatertInnhold.match(arrayRegex);

  if (!arrayMatch) {
    throw new Error(`Fant ikke eksportert array "${mockListeVariabelNavn}" i ${mockListeFilsti}`);
  }

  let arrayInnhold = arrayMatch[1];

  // Fjern trailing-komma
  arrayInnhold = arrayInnhold.trim().replace(/,\s*$/, "");

  // Splitt til elementer
  const eksisterendeElementer = arrayInnhold
    ? arrayInnhold
        .split(",")
        .map((x) => x.trim())
        .filter(Boolean)
    : [];

  // Legg kun til hvis mocken ikke finnes
  if (!eksisterendeElementer.some((el) => el.includes(mockVariabelNavn))) {
    const nyttElement = variabelNavnFunction
      ? `${variabelNavnFunction}(${mockVariabelNavn})`
      : mockVariabelNavn;
    eksisterendeElementer.push(nyttElement);
  }

  const nyttArrayInnhold =
    eksisterendeElementer.length > 0
      ? `\n  ${eksisterendeElementer.join(",\n  ")}\n`
      : `\n  ${variabelNavnFunction ? `${variabelNavnFunction}(${mockVariabelNavn})` : mockVariabelNavn}\n`;

  const oppdatertArray = `export const ${mockListeVariabelNavn} = [${nyttArrayInnhold}];`;

  oppdatertInnhold = oppdatertInnhold.replace(arrayRegex, oppdatertArray);

  try {
    fs.writeFileSync(filsti, oppdatertInnhold, "utf-8");
  } catch (err) {
    console.error("Kunne ikke skrive filen:", filsti, err);
    throw err;
  }

  try {
    execSync(`npx prettier --write "${filsti}"`, { stdio: "inherit" });
    console.info(`${mockVariabelNavn} lagt til i ${mockListeFilsti}`);
  } catch {
    console.warn(`${mockVariabelNavn} ble lagt til i ${mockListeFilsti}, men Prettier feilet`);
  }
}

async function main() {
  try {
    const oppgave = await genererMockOppgave();

    switch (oppgave.behandlingType) {
      case "RETT_TIL_DAGPENGER":
        await genererMockDagpengerRettBehandling(oppgave.behandlingId);
        break;
      case "KLAGE":
        break;
      case "INNSENDING":
        break;
    }

    console.info("\n✅ Ferdig! Behandling og oppgave opprettet.");
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

main();
