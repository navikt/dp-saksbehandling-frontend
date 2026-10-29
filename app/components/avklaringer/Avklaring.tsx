import {
  CheckmarkCircleFillIcon,
  ExclamationmarkTriangleFillIcon,
  InformationSquareFillIcon,
} from "@navikt/aksel-icons";
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

import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { useBehandling } from "~/hooks/useBehandling";
import { useOppgave } from "~/hooks/useOppgave";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { alleRegelsett } from "~/utils/behandling.utils";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import {
  konverterOpplysningVerdiTilSkjemaVerdi,
  skalViseOpplysning,
} from "~/utils/opplysning.utils";
import { hentValideringForAvklaringSkjema } from "~/utils/validering.util";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  avklaring: components["schemas"]["Avklaring"];
  lukket?: boolean;
}

export function Avklaring({ avklaring, lukket }: IProps) {
  const { pathname } = useLocation();
  const { readonly, underKontroll } = useOppgave();
  const { behandling, prøvingsdatoOpplysning, visArvedeOpplysninger } = useBehandling();

  const prøvingsdatoOpplysningPeriode = prøvingsdatoOpplysning?.perioder.at(-1);
  const prøvingsdato =
    prøvingsdatoOpplysningPeriode &&
    konverterOpplysningVerdiTilSkjemaVerdi(prøvingsdatoOpplysningPeriode.verdi);
  const { oppgaveId, behandlingId } = useTypeSafeParams();
  const [åpenAvklaring, setÅpenAvklaring] = useState<boolean>(
    underKontroll && !!avklaring?.begrunnelse,
  );
  const avklaringForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForAvklaringSkjema(),
    onSubmitSuccess: () => setÅpenAvklaring(false),
    defaultValues: {
      _action: "kvitter-avklaring",
      behandlingId: behandlingId,
      avklaringId: avklaring.id,
      begrunnelse: avklaring.begrunnelse,
    },
  });

  const kanRedigereBegrunnelse = (avklaring.kanKvitteres && !avklaring.maskinelt) || !lukket;

  function hentRegelsettUrl(regelsettId: string) {
    const regelsett = alleRegelsett(behandling).find((regelsett) => regelsett.id === regelsettId);
    const synligeOpplysninger = behandling.opplysninger.filter(
      (opplysning) =>
        regelsett?.opplysninger.includes(opplysning.opplysningTypeId) &&
        skalViseOpplysning(opplysning, visArvedeOpplysninger),
    );
    const opplysning =
      regelsett?.type === "Vilkår" ? synligeOpplysninger.at(-1) : synligeOpplysninger[0];

    if (!regelsett || !opplysning) {
      return `/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/regelsett/${regelsettId}`;
    }

    const fane = {
      Vilkår: "vilkar",
      Fastsettelse: "fastsettelser",
      Prosess: "prosessregler",
    }[regelsett.type];

    return `/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/${fane}?opplysning=${opplysning.opplysningTypeId}`;
  }

  return (
    <ExpansionCard
      key={avklaring.id}
      className={"expansion--subtil"}
      aria-label={avklaring.tittel}
      size={"small"}
      open={åpenAvklaring}
      onToggle={() => {
        setÅpenAvklaring(!åpenAvklaring);
        window.umami.track(!åpenAvklaring ? "Vis avklaring" : "Skjul avklaring", {
          "avklaring-id": avklaring.id,
        });
      }}
      data-color={hentAvklaringFarge(avklaring)}
    >
      <ExpansionCard.Header className={"flex items-center"}>
        <HStack wrap={false} gap="space-12" align="center">
          <div>{hentStatusIcon(avklaring)}</div>
          <div>
            <BodyShort size={"small"} weight={"semibold"}>
              {avklaring.tittel}{" "}
              {avklaring.kode === "SjekkPrøvingsdato" ? "(" + prøvingsdato + ")" : ""}
            </BodyShort>

            {(avklaring.status === "Avklart" || avklaring.status === "Avbrutt") && (
              <Detail>{hentAvklartAvTekst(avklaring)}</Detail>
            )}
          </div>
        </HStack>
      </ExpansionCard.Header>

      <ExpansionCard.Content>
        <div className={"flex flex-col gap-4"}>
          <BodyLong size={"small"}>{avklaring.beskrivelse}</BodyLong>

          {avklaring.regelsett.map((regelsett) => (
            <LoadingLink key={regelsett.id} to={hentRegelsettUrl(regelsett.id)}>
              {regelsett.hjemmel.tittel}
            </LoadingLink>
          ))}

          {kanRedigereBegrunnelse && (
            <>
              <div>
                <Textarea
                  {...avklaringForm.getInputProps("begrunnelse")}
                  resize={"vertical"}
                  readOnly={readonly}
                  size="small"
                  label="Begrunnelse"
                />

                {avklaring.sistEndret && (
                  <Detail>
                    Sist endret {formaterTilNorskDato(avklaring.sistEndret, true)}{" "}
                    {avklaring.avklartAv?.ident}
                  </Detail>
                )}
              </div>

              {!readonly && (
                <Button
                  className={"w-fit"}
                  size={"small"}
                  variant={"primary"}
                  onClick={() => avklaringForm.submit()}
                  disabled={readonly}
                  data-umami-event="Lagre avklaring"
                  data-umami-event-avklaring-id={avklaring.id}
                >
                  Lagre
                </Button>
              )}
            </>
          )}
        </div>
      </ExpansionCard.Content>
    </ExpansionCard>
  );
}

function hentAvklartAvTekst(avklaring: components["schemas"]["Avklaring"]) {
  if (avklaring.avklartAv) {
    return `Avklart av ${avklaring.avklartAv.ident} ${formaterTilNorskDato(avklaring.sistEndret, true)}`;
  }

  if (avklaring.maskinelt) {
    return `Avklart av regelmotor ${formaterTilNorskDato(avklaring.sistEndret, true)}`;
  }

  return "Regelmotor works in mysterious ways";
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
      return <InformationSquareFillIcon color={"var(--ax-text-info-decoration)"} aria-hidden />;
    default:
      return null;
  }
}

function hentAvklaringFarge(avklaring: components["schemas"]["Avklaring"]): AkselStatusColorRole {
  switch (avklaring.status) {
    case "Åpen":
      return "warning";
    case "Avklart":
      return "success";
    case "Avbrutt":
      return "info";
  }
}
