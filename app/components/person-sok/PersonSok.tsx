import { Search } from "@navikt/ds-react";
import { Form } from "@remix-run/react";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import styles from "./PersokSok.module.css";

export function PersonSok() {
  const { personSokError } = useTypedRouteLoaderData("root");

  return (
    <div className={styles.sokContainer}>
      <Form>
        <Search
          name="personIdent"
          hideLabel={false}
          size="small"
          label=""
          variant="secondary"
          error={personSokError}
          clearButton
        />
      </Form>
    </div>
  );
}
