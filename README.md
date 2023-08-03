# dp-saksbehandling-frontend - Saksbehandlingsflate for Dagpenger

## Komme i gang

Appen er basert på [Remix](https://remix.run/docs)

```sh
npm install
cp .env.example .env
npm run dev
```

## Kjøre mot dev-APIer i localhost

For å kjøre requester mot dp-rapportering må vi ha et token, generert med [wonderwalled-idporten](https://wonderwalled-azure.intern.dev.nav.no/api/obo?aud=dev-gcp.teamdagpenger.dp-rapportering). Logg på med en saksbehandlerbruker. Hent ut verdien fra `access_token`, rediger `.env` og endre `DP_RAPPORTERING_TOKEN` til det nylig genererte tokenet. Env-variabelen `IS_LOCALHOST="true"` må også være satt.

Dette tokenet vil vare i en time før du må generere et nytt token.

Eksempel på riktig config:

```
IS_LOCALHOST="true"
DP_RAPPORTERING_TOKEN="langStrengHerFraAccess_token"
```

## Tester

Vi har to testrammeverk som vi brukes til ulike formål. 

### Vitest
Vitest brukes til unit testing av eksempelvis komponenter, loaders og actions.

```
// Kjør testene som vanlig
npm run test

// Generer test coverage
npm run test-coverage

// Kjør testene med watch
npm run test -- --watch
```

### Playwright
Playwright brukes til e2e (ende til ende) testing, og er et veldig fint verktøy for å teste flyt og samspillet mellom de ulike delene av løsningen.

```
// Kjør vanlig playwright i kommandolinjen
npm run playwright

// Kjør med UI inkludert
npm run playwright:ui
```

## Vanlige problemer med oppsett

Hvis du ikke lager `.env` og kopierer innholdet fra `.env.example` får du sannsynligvis få denne feilmeldingen:

```
TypeError: Invalid URL
    at new NodeError (node:internal/errors:393:5)
    at URL.onParseError (node:internal/url:565:9)
    at new URL (node:internal/url:645:5)
    [...]
```

Ikke slett `.env.example` eller legg denne filen inn i `.gitignore` da det er nødvendig for oppsettet av løsningen.

## Henvendelser

Spørsmål knyttet til koden eller prosjektet kan rettes mot:

- André Roaldseth, andre.roaldseth@nav.no

### For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #team-dagpenger-dev.
