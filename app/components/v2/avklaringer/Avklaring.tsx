import {
  CheckmarkCircleFillIcon,
  CircleSlashIcon,
  ExclamationmarkTriangleFillIcon,
} from "@navikt/aksel-icons";
import { BodyLong, BodyShort, ExpansionCard, Radio, RadioGroup } from "@navikt/ds-react";
import { AkselStatusColorRole } from "@navikt/ds-tokens/types";
import { useForm } from "@rvf/react-router";
import { useLocation } from "react-router";

import { hentValideringForAvklaringSkjema } from "~/utils/validering.util";

import { components } from "../../../../openapi/behandling-typer";

interface IProps {
  avklaring: components["schemas"]["Avklaring"];
  behandlingId: string;
}

export function Avklaring(props: IProps) {
  const { pathname } = useLocation();
  const avklaringForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForAvklaringSkjema(),
    defaultValues: {
      _action: "kvitter-avklaring",
      behandlingId: props.behandlingId,
      avklaringId: props.avklaring.id,
      begrunnelse: props.avklaring.begrunnelse,
    },
  });

  return (
    <ExpansionCard
      key={props.avklaring.id}
      className={"expansion--subtil"}
      aria-label={props.avklaring.tittel}
      size={"small"}
      data-color={hentAvklaringFarge(props.avklaring)}
    >
      <ExpansionCard.Header className={"flex items-center"}>
        <ExpansionCard.Title className={"flex content-center gap-2"}>
          {hentStatusIcon(props.avklaring)}
          <BodyShort weight={"semibold"}>{props.avklaring.tittel}</BodyShort>
        </ExpansionCard.Title>

        <ExpansionCard.Description>
          {hentAvklaringKortBeskrivelse(props.avklaring)}
        </ExpansionCard.Description>
      </ExpansionCard.Header>

      <ExpansionCard.Content>
        <BodyLong>{props.avklaring.beskrivelse}</BodyLong>

        {props.avklaring.kanKvitteres && (
          <RadioGroup
            {...avklaringForm.getInputProps("begrunnelse")}
            size={"small"}
            legend="Saksbehandlers vurdering"
            onChange={(verdi: string) => {
              avklaringForm.field("begrunnelse").setValue(verdi);
              avklaringForm.submit();
            }}
          >
            <Radio value="Vurdert med endringer">Vurdert med endringer</Radio>
            <Radio value="Vurdert, ingen endringer">Vurdert, ingen endringer</Radio>
          </RadioGroup>
        )}
      </ExpansionCard.Content>
    </ExpansionCard>
  );
}

function hentStatusIcon(avklaring: components["schemas"]["Avklaring"]) {
  switch (avklaring.status) {
    case "Åpen":
      return (
        <ExclamationmarkTriangleFillIcon color={"var(--ax-text-warning-decoration)"} aria-hidden />
      );
    case "Avklart":
      return <CheckmarkCircleFillIcon color={"var(--ax-text-success-decoration)"} aria-hidden />;
    case "Avbrutt":
      return <CircleSlashIcon color={"var(--ax-text-info-decoration)"} aria-hidden />;
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

function hentAvklaringKortBeskrivelse(avklaring: components["schemas"]["Avklaring"]) {
  switch (avklaring.status) {
    case "Avbrutt":
      return "Ikke lenger relevant å sjekke";
    case "Avklart":
      return avklaring.begrunnelse === "Vurdert med endringer" ? "Endringer" : "Ingen endringer";
  }
}
