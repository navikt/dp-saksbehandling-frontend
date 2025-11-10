import { CheckmarkCircleFillIcon, ExclamationmarkTriangleFillIcon } from "@navikt/aksel-icons";
import {
  BodyLong,
  BodyShort,
  Button,
  Detail,
  ExpansionCard,
  HStack,
  Textarea,
} from "@navikt/ds-react";
import { AkselStatusColorRole } from "@navikt/ds-tokens/types";
import { useForm } from "@rvf/react-router";
import { useState } from "react";
import { useLocation } from "react-router";

import styles from "~/components/avklaringer/Avklaring.module.css";
import { useOppgave } from "~/hooks/useOppgave";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { hentValideringForAvklaringSkjema } from "~/utils/validering.util";

import { components } from "../../../../openapi/behandling-typer";

interface IProps {
  avklaring: components["schemas"]["Avklaring"];
  behandlingId: string;
}

export function Avklaring(props: IProps) {
  const { pathname } = useLocation();
  const { readonly, underKontroll } = useOppgave();
  const [åpenAvklaring, setÅpenAvklaring] = useState<boolean>(
    underKontroll && !!props.avklaring?.begrunnelse,
  );
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

  const kanRedigereBegrunnelse = props.avklaring.kanKvitteres && !props.avklaring.maskinelt;

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
              <Detail>{hentAvklartAvTekst(props.avklaring)}</Detail>
            )}
          </div>
        </HStack>
      </ExpansionCard.Header>

      <ExpansionCard.Content>
        <BodyLong size={"small"}>{props.avklaring.beskrivelse}</BodyLong>

        {kanRedigereBegrunnelse && (
          <>
            <Textarea
              {...avklaringForm.getInputProps("begrunnelse")}
              resize={"vertical"}
              readOnly={readonly}
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

            {!readonly && (
              <Button
                size={"small"}
                variant={"primary"}
                onClick={() => avklaringForm.submit()}
                disabled={readonly}
              >
                Lagre
              </Button>
            )}
          </>
        )}
      </ExpansionCard.Content>
    </ExpansionCard>
  );
}

function hentAvklartAvTekst(avklaring: components["schemas"]["Avklaring"]) {
  if (avklaring.maskinelt) {
    return "Opplysning endret";
  }

  if (avklaring.avklartAv) {
    return `Avklart av ${avklaring.avklartAv.ident}`;
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
