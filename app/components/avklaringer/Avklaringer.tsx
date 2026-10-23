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

  const maskinelleAvklaringer = avklaringer
    .filter((avklaring) => avklaring.maskinelt)
    .sort((a, b) => new Date(b.sistEndret).getTime() - new Date(a.sistEndret).getTime());

  return (
    <div className={"flex flex-col gap-4"}>
      <div>
        <Heading level="3" size={"small"}>
          Avklaringer
        </Heading>

        {avklaringerSomGjelder.length === 0 && <BodyShort>Det er ingen avklaringer</BodyShort>}
        <div className={"mt-2 flex flex-col gap-2"}>
          {avklaringerSomGjelder.map((avklaring) => (
            <Avklaring avklaring={avklaring} key={avklaring.id} />
          ))}
        </div>
      </div>
      {maskinelleAvklaringer.length > 0 && (
        <div>
          <Heading level="3" size={"small"}>
            Maksinelle avklaringer
          </Heading>
          <div className={"mt-2 flex flex-col gap-2"}>
            {maskinelleAvklaringer.map((avklaring) => (
              <Avklaring avklaring={avklaring} key={avklaring.id} lukket />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
