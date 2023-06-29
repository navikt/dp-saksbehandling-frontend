# dp-saksbehandling-frontend - Saksbehandlingsflate for Dagpenger

## Komme i gang

Appen er basert på [Remix](https://remix.run/docs)

Husk å duplisere `.env.example` og endre navnet til `.env` ellers vil du sannsynligvis få denne feilmeldingen:

```
TypeError: Invalid URL
    at new NodeError (node:internal/errors:393:5)
    at URL.onParseError (node:internal/url:565:9)
    at new URL (node:internal/url:645:5)
    at new Request (/Users/beeccy/Projects/dp-saksbehandling-frontend/node_modules/@remix-run/web-fetch/src/request.js:81:16)
    at /Users/beeccy/Projects/dp-saksbehandling-frontend/node_modules/@remix-run/web-fetch/src/fetch.js:42:19
    at new Promise (<anonymous>)
    at AsyncFunction.fetch (/Users/beeccy/Projects/dp-saksbehandling-frontend/node_modules/@remix-run/web-fetch/src/fetch.js:40:9)
    at fetch (/Users/beeccy/Projects/dp-saksbehandling-frontend/node_modules/@remix-run/node/dist/fetch.js:44:19)
    at hentOppgaver (/Users/beeccy/Projects/dp-saksbehandling-frontend/app/models/oppgave.server.ts:54:26)
    at loader (/Users/beeccy/Projects/dp-saksbehandling-frontend/app/root.tsx:76:26)
```

Ikke slett `.env.example` eller legg denne filen inn i `.gitignore` under noen omstendighet da det er nødvendig for å kunne kjøre viktige URLer for denne løsningen!

Etter dette er på plass, kan du kjøre:

```sh
npm install
npm run dev
```

Dette starter opp applikasjonen i dev miljøet, den bygger automatisk attributer i endrede filer.

# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Installation

```sh
npm install
npx playwright install
```

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## End-to-end testing

Runs the end-to-end tests.

```sh
npm run playwright
```

Starts the interactive UI mode.

```sh
npm run playwright:ui
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.
