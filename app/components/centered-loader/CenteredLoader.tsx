import { Loader } from "@navikt/ds-react";
import { LoaderProps } from "@navikt/ds-react/";

import styles from "./CenteredLoader.module.css";

interface IProps {
  size: LoaderProps["size"];
}

export function CenteredLoader(props: IProps) {
  return (
    <div className={styles.loaderContainer}>
      <Loader size={props.size} />
    </div>
  );
}
