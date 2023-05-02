import { Alert, Heading } from "@navikt/ds-react";
import { Header } from "@navikt/ds-react-internal";
import { isRouteErrorResponse, Link } from "@remix-run/react";
import { BASE_PATH } from "~/constants";
import styles from "./RootErrorBoundaryView.module.css";

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
        <Header>
          <Link to={BASE_PATH} className={styles.headerLogo}>
            <Header.Title as="h1">NAV Dagpenger</Header.Title>
          </Link>
        </Header>

        <div className={styles.container}>
          <ErrorMessageComponent error={error} />
        </div>
      </body>
    </html>
  );
}

export function ErrorMessageComponent({ error }: any) {
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
    return (
      <Alert className={styles.enableHorisontalScroll} variant="error">
        <Heading spacing size="medium" level="1">
          {error.message}
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
