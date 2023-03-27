import { Form } from "@remix-run/react";
import { PDFLeser } from "~/components/pdf-leser/PDFLeser";

import styles from "~/route-styles/vilkaar.module.css";

export default function PersonBehandleVilkaar() {
  return (
    <div className={styles.container}>
      <div className={styles.faktumContainer}>
        <Form className={styles.vilkaarVurderingContainer}>
          <div>NOE SVAR TING</div>
        </Form>
      </div>

      <div className={styles.dokumentContainer}>
        <PDFLeser />
      </div>
    </div>
  );
}
