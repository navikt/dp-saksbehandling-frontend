# Copilot Instructions

## Project

Case handling frontend ("saksbehandlingsflate") for Norwegian Dagpenger (unemployment benefits) administration, built for NAV. Uses React Router 7 in SSR/Framework mode with TypeScript.

## Commands

```sh
pnpm dev                  # Start dev server (uses MSW mocks by default)
pnpm build                # Production build
pnpm test                 # Run all tests with Vitest
pnpm test -- path/to/file # Run a single test file
pnpm type-check           # TypeScript type check (tsc)
pnpm graphql-codegen      # Regenerate types from GraphQL schemas
pnpm generate-token       # Generate Azure OBO tokens for dev APIs
```

Linting (ESLint + Prettier) runs automatically via Husky pre-commit hooks (`lint-staged`). No standalone `lint` script.

## Architecture

### React Router 7 SSR

The app runs server-side rendering. Every route file can export `loader` (data fetching) and `action` (mutations), which run server-side. `entry.server.tsx` and `entry.client.tsx` handle SSR hydration.

### File-based routing (`app/routes/`)

Route filenames map to URL paths using React Router conventions:
- `$paramName` → dynamic segment
- `_layoutName` → pathless layout segment (no URL contribution)
- `.` → `/` separator

Example: `oppgave.$oppgaveId.dagpenger-rett.$behandlingId._person._oppgave-oversikt.behandle.tsx` renders at `/oppgave/:oppgaveId/dagpenger-rett/:behandlingId/behandle`.

### Server-side data (`app/models/`)

All backend API calls live in `*.server.ts` files (Vite tree-shakes them from the client bundle). Each file corresponds to an upstream service:
- `saksbehandling.server.ts` → dp-saksbehandling API
- `behandling.server.ts` → dp-behandling API
- `saf.server.ts` → SAF GraphQL (document archive)
- `microsoft.server.ts` → Azure/Microsoft APIs

### Action dispatch pattern

All form mutations in a route go through a single `action()` that delegates to `app/server-side-actions/handle-actions.ts`. Forms include a hidden `_action` field to identify the operation:

```tsx
<input type="hidden" name="_action" value="lagre-opplysning" />
```

`handle-actions.ts` switches on `_action` and calls the appropriate action module from `app/server-side-actions/`.

### Context providers

Layout routes wrap their child routes in React Context providers, providing domain state without prop drilling. Key contexts:
- `OppgaveProvider` — current task/case
- `BehandlingProvider` — current treatment/processing record
- `SaksbehandlerProvider` — authenticated user
- `AlertProvider` — global alerts

Access context values via the matching custom hooks in `app/hooks/` (e.g., `useOppgave()`, `useBehandling()`).

### MSW mocking

Dev mode uses MSW (Mock Service Worker) by default. Set `USE_MSW="false"` in `.env` to hit real dev APIs (requires tokens from `pnpm generate-token` and an active Naisdevice connection). Mock handlers live in `mocks/`.

## Key Conventions

### Path alias

`~/` maps to `app/`. Always use `~/components/...`, `~/models/...`, etc. — never relative paths across directories.

### `.server.ts` suffix

Any file that must only run on the server (API calls, secrets, auth) uses the `.server.ts` suffix. Vite enforces this boundary automatically.

### `useTypedRouteLoaderData`

Use `useTypedRouteLoaderData("route-id")` instead of `useRouteLoaderData` to get type-safe access to ancestor loader data. Route IDs are derived from the filename (e.g., `"root"` for `root.tsx`).

### `useTypeSafeParams`

Use `useTypeSafeParams<{ oppgaveId: string }>()` instead of `useParams()` for type-safe URL params.

### Norwegian domain language

The codebase uses Norwegian terminology throughout. Key terms:
- `oppgave` — task/work item
- `behandling` — case processing/treatment record
- `saksbehandler` — case worker
- `vedtak` — decision/ruling
- `opplysning` — piece of information/data point
- `avklaring` — clarification needed
- `vurdering` — assessment

### Environment setup

Copy `.env.example` to `.env` before running. Do not delete `.env.example`. The `USE_MSW` variable controls whether MSW mocks or real APIs are used.
