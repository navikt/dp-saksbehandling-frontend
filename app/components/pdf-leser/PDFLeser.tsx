import React, { useState } from "react";
import { Heading, Select } from "@navikt/ds-react";

import styles from "./PDFLeser.module.css";
import { getEnv } from "~/utils/env.utils";

interface IProps {
  fileUrl?: string;
}

export function PDFLeser(props: IProps) {
  const [fileUrl, setFileUrl] = useState(`${getEnv("BASE_PATH")}/test.pdf`);

  console.log("props.fileUrl: ", props.fileUrl);

  function setUrl(event: React.ChangeEvent<HTMLSelectElement>) {
    setFileUrl(event.currentTarget.value);
  }

  return (
    <div>
      <Heading size={"medium"} level={"3"}>
        Dokumenter
      </Heading>

      <div>
        L
        <Select className={styles.dropdown} label={"Velg fil"} onChange={setUrl} value={fileUrl}>
          <option value={`${getEnv("BASE_PATH")}/sample.pdf`}>sample.pdf</option>
          <option value={`${getEnv("BASE_PATH")}/test.pdf`}>test.pdf</option>
        </Select>
      </div>

      <div className={styles.iframeWrapper}>
        <iframe title={"Pdf leser"} src={fileUrl} className={styles.iframe}></iframe>
      </div>

      <div className={styles.iframeWrapper}>
        <iframe title={"Pdf leser"} src={props.fileUrl} className={styles.iframe}></iframe>
      </div>
    </div>
  );
}
