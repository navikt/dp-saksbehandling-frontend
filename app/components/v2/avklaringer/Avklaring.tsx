import {
  CheckmarkCircleFillIcon,
  CircleSlashIcon,
  ExclamationmarkTriangleFillIcon,
} from "@navikt/aksel-icons";
import {
  BodyLong,
  BodyShort,
  Button,
  Detail,
  ExpansionCard,
  HStack,
  TextField,
} from "@navikt/ds-react";
import { AkselStatusColorRole } from "@navikt/ds-tokens/types";
import { useForm } from "@rvf/react-router";
import { useLocation } from "react-router";

import styles from "~/components/avklaringer/Avklaring.module.css";
import { formaterTilNorskDato } from "~/utils/dato.utils";
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
          <HStack wrap={false} gap="space-4" align="center">
            <div>{hentStatusIcon(props.avklaring)}</div>
            <div>
              <BodyShort weight={"semibold"}>{props.avklaring.tittel}</BodyShort>
            </div>
          </HStack>
        </ExpansionCard.Title>
      </ExpansionCard.Header>

      <ExpansionCard.Content>
        <BodyLong>{props.avklaring.beskrivelse}</BodyLong>

        {props.avklaring.kanKvitteres && (
          <>
            <TextField
              {...avklaringForm.getInputProps("begrunnelse")}
              className={styles.begrunnelseInput}
              size="small"
              label="Begrunnelse"
            />

            {props.avklaring.sistEndret && (
              <Detail>
                Sist endret {formaterTilNorskDato(props.avklaring.sistEndret, true)}{" "}
                {props.avklaring.avklartAv?.ident}
              </Detail>
            )}

            <Button size={"small"} variant={"primary"} onClick={() => avklaringForm.submit()}>
              Lagre
            </Button>
          </>
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
