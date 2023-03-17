import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import type { PDFDocumentProxy } from "pdfjs-dist/types/src/display/api";
import { Heading, Select } from "@navikt/ds-react";
import styles from "./PDFLeser.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.min.js`;

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
};

export function PDFLeser() {
  const [file, setFile] = useState("./sample.pdf");
  const [numPages, setNumPages] = useState<number | undefined>();

  function onFileChange(event: React.ChangeEvent<HTMLSelectElement>) {
    // @ts-ignore
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy) {
    setNumPages(nextNumPages);
  }

  return (
    <div>
      <Heading size={"medium"} level={"3"}>
        Dokumenter
      </Heading>
      <div>
        <Select className={styles.dropdown} label={"Velg fil"} onChange={onFileChange}>
          <option value="./sample.pdf">sample.pdf</option>
          <option value="./test.pdf">test.pdf</option>
        </Select>

        {/*<div>*/}
        {/*  <label htmlFor="file">Load from file:</label>{" "}*/}
        {/*  <input onChange={onFileChange} type="file" />*/}
        {/*</div>*/}

        <div>
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}
