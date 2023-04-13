import React, { useState } from "react";
import { Heading, Select } from "@navikt/ds-react";

import styles from "./PDFLeser.module.css";
import { getEnv } from "~/utils/env.utils";

export function PDFLeser() {
  const [fileUrl, setFileUrl] = useState(`${getEnv("BASE_PATH")}/test.pdf`);

  function setUrl(event: React.ChangeEvent<HTMLSelectElement>) {
    setFileUrl(event.currentTarget.value);
  }

  return (
    <div>
      <Heading size={"medium"} level={"3"}>
        Dokumenter
      </Heading>

      <div>
        <Select className={styles.dropdown} label={"Velg fil"} onChange={setUrl} value={fileUrl}>
          <option value={`${getEnv("BASE_PATH")}/sample.pdf`}>sample.pdf</option>
          <option value={`${getEnv("BASE_PATH")}/test.pdf`}>test.pdf</option>
        </Select>
      </div>

      <div className={styles.iframeWrapper}>
        <iframe title={"Pdf leser"} src={fileUrl} className={styles.iframe}></iframe>
      </div>
    </div>
  );
}
