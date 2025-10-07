import {
  ExclamationmarkTriangleFillIcon,
  PersonPencilIcon,
  RobotSmileIcon,
} from "@navikt/aksel-icons";
import {
  BodyLong,
  BodyShort,
  ExpansionCard,
  Heading,
  Label,
  Radio,
  RadioGroup,
} from "@navikt/ds-react";
import { AkselStatusColorRole } from "@navikt/ds-tokens/types";
import { useForm } from "@rvf/react-router";
import { Form } from "react-router";

import { hentValideringForAvklaringSkjema } from "~/utils/validering.util";

import { components } from "../../../../openapi/behandling-typer";
import { Avklaring } from "./Avklaring";

interface IProps {
  avklaringer: components["schemas"]["Avklaring"][];
  behandlingId: string;
}

export function Avklaringer(props: IProps) {
  return (
    <div className={"card p-4"}>
      <Heading size={"small"}> Hva som må sjekkes</Heading>

      {props.avklaringer.map((avklaring) => (
        <Avklaring avklaring={avklaring} behandlingId={props.behandlingId} key={avklaring.id} />
      ))}
    </div>
  );
}
