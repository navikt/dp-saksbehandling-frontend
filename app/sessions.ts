import { createCookieSessionStorage } from "react-router";

import type { IAlert } from "./context/alert-context";

interface ISessionData {
  alert: IAlert;
  aktivtOppgaveFilter: string;
}

const { getSession, commitSession, destroySession } = createCookieSessionStorage<ISessionData>({
  // a Cookie from `createCookie` or the CookieOptions to create one
  cookie: {
    name: "dp-saksbehandling-frontend",
    // all of these are optional
    // domain: "dagpenger.ansatt.dev.nav.no",
    // Expires can also be set (although maxAge overrides it when used in combination).
    // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
    // expires: new Date(Date.now() + 60_000),
    httpOnly: true,
    maxAge: 60,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cret1"],
    secure: true,
  },
});

export { commitSession, destroySession, getSession };
