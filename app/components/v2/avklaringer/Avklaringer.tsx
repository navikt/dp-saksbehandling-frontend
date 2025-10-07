import {
  ExclamationmarkTriangleFillIcon,
  PersonPencilIcon,
  RobotSmileIcon,
} from "@navikt/aksel-icons";
import { BodyShort, ExpansionCard, Heading } from "@navikt/ds-react";
import { AkselStatusColorRole } from "@navikt/ds-tokens/types";

import { components } from "../../../../openapi/behandling-typer";

interface IProps {
  avklaringer: components["schemas"]["Avklaring"][];
}

export function Avklaringer(props: IProps) {
  return (
    <div className={"card p-4"}>
      <Heading size={"small"}> Hva som må sjekkes</Heading>

      {props.avklaringer.map((avklaring) => (
        <ExpansionCard
          key={avklaring.id}
          className={"expansion--subtil bg-(--a-surface-warning-moderate)"}
          aria-label={avklaring.tittel}
          size={"small"}
          // TODO Denne funker ikke? Må ses på sammen med å sette bg i css over
          data-color={hentAvklaringFarge(avklaring)}
        >
          <ExpansionCard.Header className={"flex items-center"}>
            <div className={"flex content-center gap-2"}>
              {hentStatusIcon(avklaring)}
              <BodyShort weight={"semibold"}>{avklaring.tittel}</BodyShort>
            </div>
          </ExpansionCard.Header>
          <ExpansionCard.Content>{avklaring.beskrivelse}</ExpansionCard.Content>
        </ExpansionCard>
      ))}
    </div>
  );
}

function hentStatusIcon(avklaring: components["schemas"]["Avklaring"]) {
  switch (avklaring.status) {
    case "Åpen":
      return <ExclamationmarkTriangleFillIcon color={"var(--a-orange-600)"} fontSize={"1.5rem"} />;
    case "Avklart":
      return avklaring.maskinelt ? (
        <RobotSmileIcon fontSize={"1.5rem"} />
      ) : (
        <PersonPencilIcon fontSize="1.5rem" />
      );
    case "Avbrutt":
      return <RobotSmileIcon fontSize="1.5rem" />;
    default:
      return null;
  }
}

function hentAvklaringFarge(avklaring: components["schemas"]["Avklaring"]): AkselStatusColorRole {
  switch (avklaring.status) {
    case "Åpen":
      return "warning";
    case "Avbrutt":
      return "info";
    case "Avklart":
      return "success";
  }
}
