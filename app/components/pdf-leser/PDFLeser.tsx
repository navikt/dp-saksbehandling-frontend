import React, { useState } from "react";
import { Heading, Select } from "@navikt/ds-react";

import styles from "./PDFLeser.module.css";

export function PDFLeser() {
  const [fileUrl, setFileUrl] = useState("/sample.pdf");

  console.log(fileUrl);

  function setUrl(event: React.ChangeEvent<HTMLSelectElement>) {
    console.log(event.currentTarget.value);
    setFileUrl(event.currentTarget.value);
  }

  return (
    <div>
      <Heading size={"medium"} level={"3"}>
        Dokumenter
      </Heading>

      <div>
        <Select className={styles.dropdown} label={"Velg fil"} onChange={setUrl}>
          <option value={"/sample.pdf"}>sample.pdf</option>
          <option value={"/test.pdf"}>test.pdf</option>
        </Select>
      </div>

      <div className={styles.iframeWrapper}>
        <iframe title={"Pdf leser"} src={fileUrl} className={styles.iframe}></iframe>
      </div>
    </div>
  );
}
