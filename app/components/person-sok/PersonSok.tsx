import { Search } from "@navikt/ds-react";
import styles from "./PersokSok.module.css";

export function PersonSok() {
  return (
    <div className={styles.sokeContainer}>
      <Search
        className={styles.sokefelt}
        hideLabel={false}
        size="small"
        label=""
        variant="secondary"
        onChange={(fnr: string) => console.log(fnr)}
        onSearchClick={(fnr: string) => console.log(fnr)}
        onClear={() => console.log()}
        clearButton
      />
    </div>
  );
}
