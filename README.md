# dp-saksbehandling-frontend - Saksbehandlingsflate for Dagpenger

## Komme i gang

Appen er basert på    ~~[Remix](https://remix.run/docs)~~ [React router Framework mode](https://reactrouter.com/home)

Lag .env fil og oppdater .env med unleash token. Du finner unleash token
her https://dagpenger-unleash-web.nav.cloud.nais.io/admin/api

```
cp .env.example .env
```

Installer NPM pakker og kjør appen

```sh
npm install
npm run dev
```

## Kjøre mot dev-APIer i localhost

Vi trenger `access_token` for å kunne kjøre requester mot backend endepunkter. Vi må ha et token per tjeneste og
Env-variabelen `USE_MSW="false"` må også være satt. Start opp Naisdevice (den må bli grønn)

For å generere nye tokens, kjør:

```sh
npm run generate-token
```

Følg instruksjoner scriptet gir. Scriptet vil oppdaterer nødvendige tokens og `.env` filen vil se f.eks slik ut.

```
USE_MSW="false"
DP_SAKSBEHANDLING_TOKEN="annenLangStrengHerFraAccess_token"
DP_BEHANDLING_TOKEN="enTredjeLangStrengHerFraAccess_token"
```

Disse tokenene vil vare i en time før du må generere et nytt token.

## Manuelt oppdatering av lokalt Azure tokens

Logg på med en testbruker. Hent ut verdien fra `access_token`, rediger `.env` og
endre `DP_SAKSBEHANDLING_TOKEN`, `DP_BEHANDLING_TOKEN` til det
matchende genererte tokenet.

[dp-saksbehandling](https://azure-token-generator.intern.dev.nav.no/api/obo?aud=dev-gcp.teamdagpenger.dp-saksbehandling),
[dp-behandling](https://azure-token-generator.intern.dev.nav.no/api/obo?aud=dev-gcp.teamdagpenger.dp-behandling),


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

- #team-dagpenger-behandling på slack
- Sindre Sægrov, sindre.segrov@nav.no

## Vanlig oppstart av prosjektet (når alt er satt opp)

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
