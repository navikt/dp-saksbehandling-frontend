import { Alert, Heading, InternalHeader } from "@navikt/ds-react";
import { isRouteErrorResponse, Link, useLocation } from "@remix-run/react";
import { logger } from "~/utils/logger.utils";
import styles from "./RootErrorBoundaryView.module.css";
import type { JSX } from "react";
import { faro } from "@grafana/faro-core";

interface IProps {
  meta: JSX.Element;
  links: JSX.Element;
  error: unknown;
}

export function RootErrorBoundaryView({ meta, links, error }: IProps) {
  return (
    <html lang="en">
      <head>
        {meta}
        {links}
      </head>
      <body>
        <InternalHeader>
          <Link to={"/"} className={styles.headerLogo}>
            <InternalHeader.Title as="h1">NAV Dagpenger</InternalHeader.Title>
          </Link>
        </InternalHeader>

        <div className={styles.container}>
          <ErrorMessageComponent error={error} />
        </div>
      </body>
    </html>
  );
}

export function ErrorMessageComponent({ error }: any) {
  const location = useLocation();
  logger.error(`Feil i path: ${location.pathname}`);
  logger.error(error);

  // Treffer Response errors, eks. throw new Response(), 401, 404, 500 errors
  if (isRouteErrorResponse(error)) {
    const hasStatusText = error.statusText.length > 0;

    return (
      <Alert variant="error">
        <Heading spacing size="medium" level="1">
          {error.status} Error {hasStatusText && `: ${error.statusText}`}
        </Heading>
        <p>{error.data}</p>
      </Alert>
    );
  }

  // Treffer Uncaught-exceptions, eks. feil ved import, throw new Error()
  if (error instanceof Error) {
    console.log("push Error to faro", error);
    faro.api.pushError(error);
    return (
      <Alert className={styles.enableHorisontalScroll} variant="error">
        <Heading spacing size="medium" level="1">
          {error.name}
        </Heading>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </Alert>
    );
  }

  return (
    <Alert variant="error">
      <Heading spacing size="medium" level="1">
        Ukjent feil
      </Heading>
    </Alert>
  );
}
