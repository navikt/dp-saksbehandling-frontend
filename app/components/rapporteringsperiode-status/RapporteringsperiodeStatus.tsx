import { type IRapporteringsperiode } from "~/models/rapporteringsperiode.server";
import { FloppydiskIcon, PencilIcon, QuestionmarkIcon, ThumbUpIcon } from "@navikt/aksel-icons";
import styles from "./RapporteringsperiodeStatus.module.css";

export function RapporteringsperiodeStatus(props: { periode: IRapporteringsperiode }) {
  const { periode } = props;

  if (periode.status === "TilUtfylling") {
    return (
      <span className={styles.statustekst}>
        Til utfylling <PencilIcon />
      </span>
    );
  } else if (periode.status === "Innsendt") {
    return (
      <span className={styles.statustekst}>
        Innsendt <FloppydiskIcon />
      </span>
    );
  } else if (periode.status === "Godkjent") {
    return (
      <span className={styles.statustekst}>
        Godkjent <ThumbUpIcon />
      </span>
    );
  } else {
    return (
      <span className={styles.statustekst}>
        Ukjent <QuestionmarkIcon />
      </span>
    );
  }
}
