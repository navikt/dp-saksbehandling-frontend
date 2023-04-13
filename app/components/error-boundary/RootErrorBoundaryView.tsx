import { Header } from "@navikt/ds-react-internal";
import styles from "./RootErrorBoundaryView.module.css";

interface IProps {
  meta: JSX.Element;
  links: JSX.Element;
  children: JSX.Element;
}

export default function RootErrorBoundaryView({ meta, links, children }: IProps) {
  return (
    <html lang="en">
      <head>
        {meta}
        {links}
      </head>
      <body>
        <Header>
          <Header.Title as="h1">NAV Dagpenger</Header.Title>
        </Header>
        <div className={styles.container}>{children}</div>
      </body>
    </html>
  );
}
