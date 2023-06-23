import { type IRapporteringsperiode } from "~/models/rapporteringsperiode.server";
import { FloppydiskIcon, PencilIcon, ThumbUpIcon } from "@navikt/aksel-icons";

export default function periodeDetaljer(props: { periode: IRapporteringsperiode }) {
  const { periode } = props;

  if (periode.status === "TilUtfylling") {
    return (
      <>
        <PencilIcon /> Til utfylling
      </>
    );
  } else if (periode.status === "Innsendt") {
    return (
      <>
        <FloppydiskIcon /> Innsendt
      </>
    );
  } else if (periode.status === "Godkjent") {
    return (
      <>
        <ThumbUpIcon /> Godkjent
      </>
    );
  }
}
