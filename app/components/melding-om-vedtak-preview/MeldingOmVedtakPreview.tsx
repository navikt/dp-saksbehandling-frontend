import { PortableText } from "@portabletext/react";
import { getSanityPortableTextComponents } from "~/sanity/SanityPortableTextComponents";
import type { ISanityBrevMal } from "~/sanity/sanity-types";
import styles from "./MeldingOmVedtakPreview.module.css";
import type { IBehandling } from "~/models/behandling.server";

interface IProps {
  brevMal: ISanityBrevMal;
  fritekst: string;
  behandling: IBehandling;
}

export function MeldingOmVedtakPreview(props: IProps) {
  return (
    <div className={styles.preview}>
      {props.brevMal?.brevBlokker.map((brevBlokk) => (
        <PortableText
          key={brevBlokk.textId}
          value={brevBlokk.innhold}
          components={getSanityPortableTextComponents(props.behandling, props.fritekst, false)}
        />
      ))}
    </div>
  );
}
