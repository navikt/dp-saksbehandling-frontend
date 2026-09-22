import { BodyShort, Heading } from "@navikt/ds-react";

import { Avklaring } from "~/components/avklaringer/Avklaring";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  avklaringer: components["schemas"]["Avklaring"][];
}

export function Avklaringer({ avklaringer }: IProps) {
  const avklaringerSomGjelder = avklaringer.filter(
    (avklaring) =>
      avklaring.status === "Åpen" || (avklaring.status === "Avklart" && !avklaring.maskinelt),
  );

  return (
    <div className={"card p-4"}>
      <Heading size={"small"}> Hva som må sjekkes</Heading>

      {avklaringerSomGjelder.length === 0 && <BodyShort>Det er ingen avklaringer</BodyShort>}
      <div className={"mt-2 flex flex-col gap-2"}>
        {avklaringerSomGjelder.map((avklaring) => (
          <Avklaring avklaring={avklaring} key={avklaring.id} />
        ))}
      </div>
    </div>
  );
}
