# dp-saksbehandling-frontend - Saksbehandlingsflate for Dagpenger

## Komme i gang

Appen er basert på [Remix](https://remix.run/docs)

```sh
npm install
cp .env.example .env
npm run dev
```

## Kjøre mot dev-APIer i localhost

For å kjøre requester mot [dp-rapportering](https://wonderwalled-azure.intern.dev.nav.no/api/obo?aud=dev-gcp.teamdagpenger.dp-rapportering), [dp-behandling](https://wonderwalled-azure.intern.dev.nav.no/api/obo?aud=dev-gcp.teamdagpenger.dp-behandling) og [dp-vedtak](https://wonderwalled-azure.intern.dev.nav.no/api/obo?aud=dev-gcp.teamdagpenger.dp-vedtak) må vi ha et token per tjeneste, generert med wonderwalled-idporten. Logg på med en saksbehandlerbruker. Hent ut verdien fra `access_token`, rediger `.env` og endre `DP_RAPPORTERING_TOKEN`, `DP_BEHANDLING_TOKEN`, `DP_VEDTAK_TOKEN` til det matchende genererte tokenet. Env-variabelen `IS_LOCALHOST="true"` må også være satt.

Disse tokenene vil vare i en time før du må generere et nytt token.

Eksempel på riktig config:

```
IS_LOCALHOST="true"
DP_RAPPORTERING_TOKEN="langStrengHerFraAccess_token"
DP_BEHANDLING_TOKEN="annenLangStrengHerFraAccess_token"
DP_VEDTAK_TOKEN="enTredjeLangStrengHerFraAccess_token"
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

## Vanlig oppstart av prosjektet (når alt er satt opp)

1. Start opp Naisdevice (den må bli grønn)
2. `$ git pull`
3. `$ nvm use`
4. `$ npm install`
5. Bruk [trydgebrukeren](https://nav-it.slack.com/archives/C04RRM5QEAV/p1682666310232779) for å logge inn på de neste tre stegene
6. Legg inn token fra [dp-rapportering](https://wonderwalled-azure.intern.dev.nav.no/api/obo?aud=dev-gcp.teamdagpenger.dp-rapportering) i `.env`-filen
7. Legg inn token fra [dp-behandling](https://wonderwalled-azure.intern.dev.nav.no/api/obo?aud=dev-gcp.teamdagpenger.dp-behandling) i `.env`-filen
8. [dp-vedtak](https://wonderwalled-azure.intern.dev.nav.no/api/obo?aud=dev-gcp.teamdagpenger.dp-vedtak)
9. `$ npm run dev`
10. Gå til http://localhost:3000/saksbehandling
11. Ferdig!

## Potensielle errorer

### Feil node versjon

```npm ERR! code EBADENGINE
npm ERR! engine Unsupported engine
npm ERR! engine Not compatible with your version of node/npm: execa@7.1.1
npm ERR! notsup Not compatible with your version of node/npm: execa@7.1.1
npm ERR! notsup Required: {"node":"^14.18.0 || ^16.14.0 || >=18.0.0"}
npm ERR! notsup Actual: {"npm":"9.6.3","node":"v16.13.0"}

npm ERR! A complete log of this run can be found in: /Use
```

Kjør `$ nvm use` og det burde løse problemet.

### Manglende autentisering ved installasjon av @navikt npm pakker

```
npm ERR! code E401
npm ERR! 401 Unauthorized - GET https://npm.pkg.github.com/download/@navikt/dp-auth/0.3.7/5c5965d82448aa24ef9c53430a745429555e153f - unauthenticated: User cannot be authenticated with the token provided.

npm ERR! A complete log of this run can be found in: /Users/<user>/.npm/\_logs/2023-09-05T08_44_38_897Z-debug-0.log
```

Github token er utdatert.

1. Gå til Github
2. Trykk Profil ikon
3. Trykk `Settings`
4. Trykk `Developer settings`
5. Trykk `Personal access token`
6. Trykk `Tokens (classic)`
7. Trykk `Generate new token` --> `Generate new token (classic)`
8. Skriv noe som `NAV IT` under `Note`
9. Velg hvor lenge du vil at det skal vare under `Expiration`
10. Under `Select scope` velg `repo` og `read:packages`
11. Trykk `Generate token`
12. Kopier `ghp_x...` tokenet og putt det i `.npmrc` filen på maskinen din
13. Trykk `Configure SSO`
14. Trykk `Authorize` på `navikt`
15. Ferdig!
