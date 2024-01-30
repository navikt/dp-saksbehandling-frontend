import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { HeaderMeny } from "~/components/header-meny/HeaderMeny";
import { getEnv } from "~/utils/env.utils";
import { useSanity } from "~/hooks/useSanity";
import styles from "~/index.module.css";
import { getSaksbehandler, getSession } from "~/models/auth.server";
import type { ISanityTexts } from "~/sanity/sanity.types";
import { allTextsQuery } from "~/sanity/sanity.query";
import { hentOppgaver } from "~/models/oppgave.server";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { sanityClient } from "~/utils/sanity.utils";
import { InternalHeader } from "@navikt/ds-react";
import { masterMenyMock } from "mocks/api-routes/oppgaverResponse";

// Hindrer loader til å kjøre på nytt etter action funksjon
export const shouldRevalidate = () => false;

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request);

  const [saksbehandler, sanityTexts, oppgaver] = await Promise.all([
    getSaksbehandler(session),
    sanityClient.fetch<ISanityTexts>(allTextsQuery, {
      baseLang: "nb",
      lang: "nb",
    }),
    hentOppgaver(session),
  ]);

  const oppgaverMedMock = [masterMenyMock, ...oppgaver];

  return json({
    sanityTexts,
    saksbehandler,
    oppgaver: oppgaverMedMock,
  });
}

export default function Saksbehandling() {
  const { saksbehandler } = useLoaderData<typeof loader>();
  const { hentAppTekstMedId } = useSanity();

  return (
    <>
      <InternalHeader className={styles.header}>
        <Link to={getEnv("BASE_PATH")} className={styles.headerLogo}>
          <InternalHeader.Title as="h1" className={styles.pageHeader}>
            {hentAppTekstMedId("side-header")}
          </InternalHeader.Title>
        </Link>

        <HeaderMeny saksbehandler={saksbehandler} />
      </InternalHeader>
      <Outlet />
    </>
  );
}
