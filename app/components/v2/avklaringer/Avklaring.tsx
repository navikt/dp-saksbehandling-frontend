import { CheckmarkCircleFillIcon, ExclamationmarkTriangleFillIcon } from "@navikt/aksel-icons";
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
import { useState } from "react";
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
  const [åpenAvklaring, setÅpenAvklaring] = useState<boolean>(false);
  const avklaringForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForAvklaringSkjema(),
    onSubmitSuccess: () => setÅpenAvklaring(false),
    defaultValues: {
      _action: "kvitter-avklaring",
      behandlingId: props.behandlingId,
      avklaringId: props.avklaring.id,
      begrunnelse: props.avklaring.begrunnelse,
    },
  });

  const kanRedigereBegrunnelse =
    props.avklaring.kanKvitteres &&
    (props.avklaring.status === "Åpen" || !props.avklaring.maskinelt);

  return (
    <ExpansionCard
      key={props.avklaring.id}
      className={"expansion--subtil"}
      aria-label={props.avklaring.tittel}
      size={"small"}
      open={åpenAvklaring}
      onToggle={() => setÅpenAvklaring(!åpenAvklaring)}
      data-color={hentAvklaringFarge(props.avklaring)}
    >
      <ExpansionCard.Header className={"flex items-center"}>
        <HStack wrap={false} gap="space-12" align="center">
          <div>{hentStatusIcon(props.avklaring)}</div>
          <div>
            <BodyShort size={"small"} weight={"semibold"}>
              {props.avklaring.tittel}
            </BodyShort>
            {(props.avklaring.status === "Avklart" || props.avklaring.status === "Avbrutt") && (
              <Detail>Avklart av {hentAvklartAv(props.avklaring)}</Detail>
            )}
          </div>
        </HStack>
      </ExpansionCard.Header>

      <ExpansionCard.Content>
        <BodyLong size={"small"}>{props.avklaring.beskrivelse}</BodyLong>

        {kanRedigereBegrunnelse && (
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

function hentAvklartAv(avklaring: components["schemas"]["Avklaring"]) {
  if (avklaring.maskinelt) {
    return "regelmotor";
  }

  if (avklaring.avklartAv) {
    return avklaring.avklartAv.ident;
  }

  return "!&/#% Vi skjønner ikke regelmotor";
}

function hentStatusIcon(avklaring: components["schemas"]["Avklaring"]) {
  switch (avklaring.status) {
    case "Åpen":
      return (
        <ExclamationmarkTriangleFillIcon color={"var(--ax-text-warning-decoration)"} aria-hidden />
      );
    case "Avklart":
    case "Avbrutt":
      return <CheckmarkCircleFillIcon color={"var(--ax-text-success-decoration)"} aria-hidden />;
    default:
      return null;
  }
}

function hentAvklaringFarge(avklaring: components["schemas"]["Avklaring"]): AkselStatusColorRole {
  switch (avklaring.status) {
    case "Åpen":
      return "warning";
    case "Avbrutt":
    case "Avklart":
      return "success";
  }
}
