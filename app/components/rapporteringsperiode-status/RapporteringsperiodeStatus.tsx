import { type IRapporteringsperiode } from "~/models/rapporteringsperiode.server";
import { FloppydiskIcon, PencilIcon, QuestionmarkIcon, ThumbUpIcon } from "@navikt/aksel-icons";

export function RapporteringsperiodeStatus(props: { periode: IRapporteringsperiode }) {
  const { periode } = props;

  if (periode.status === "TilUtfylling") {
    return (
      <>
        Til utfylling <PencilIcon />
      </>
    );
  } else if (periode.status === "Innsendt") {
    return (
      <>
        Innsendt <FloppydiskIcon />
      </>
    );
  } else if (periode.status === "Godkjent") {
    return (
      <>
        Godkjent <ThumbUpIcon />
      </>
    );
  } else {
    return (
      <>
        Ukjent <QuestionmarkIcon />
      </>
    );
  }
}
