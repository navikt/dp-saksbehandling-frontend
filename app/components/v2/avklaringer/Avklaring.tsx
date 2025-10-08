import {
  ExclamationmarkTriangleFillIcon,
  PersonPencilIcon,
  RobotSmileIcon,
} from "@navikt/aksel-icons";
import { BodyLong, BodyShort, ExpansionCard, Radio, RadioGroup } from "@navikt/ds-react";
import { AkselStatusColorRole } from "@navikt/ds-tokens/types";
import { useForm } from "@rvf/react-router";
import { Form } from "react-router";

import { hentValideringForAvklaringSkjema } from "~/utils/validering.util";

import { components } from "../../../../openapi/behandling-typer";

interface IProps {
  avklaring: components["schemas"]["Avklaring"];
  behandlingId: string;
}

export function Avklaring(props: IProps) {
  const avklaringForm = useForm({
    method: "post",
    schema: hentValideringForAvklaringSkjema(),
    defaultValues: {
      behandlingId: props.behandlingId,
      avklaringId: props.avklaring.id,
      begrunnelse: "",
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
        <div className={"flex content-center gap-2"}>
          {hentStatusIcon(props.avklaring)}
          <BodyShort weight={"semibold"}>{props.avklaring.tittel}</BodyShort>
        </div>
      </ExpansionCard.Header>
      <ExpansionCard.Content className="bg-(--a-surface-subtle)">
        <BodyLong>{props.avklaring.beskrivelse}</BodyLong>
        <Form>
          <input name="_action" value="kvitter-avklaring" readOnly={true} hidden={true} />
          <input {...avklaringForm.getInputProps("avklaringId")} readOnly={true} hidden={true} />
          <input {...avklaringForm.getInputProps("behandlingId")} readOnly={true} hidden={true} />
          <RadioGroup
            {...avklaringForm.getInputProps("begrunnelse")}
            legend="Saksbehandlers vurdering"
            onChange={() => {
              // TODO: fix it haha
              avklaringForm.submit();
            }}
            className="mt-8"
          >
            <Radio value="Vurdert med endringer">Vurdert med endringer</Radio>
            <Radio value="Vurdert, ingen endringer">Vurdert, ingen endringer</Radio>
          </RadioGroup>
        </Form>
      </ExpansionCard.Content>
    </ExpansionCard>
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
