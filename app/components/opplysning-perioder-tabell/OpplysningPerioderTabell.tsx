import { ExternalLinkIcon, PadlockLockedIcon, PencilIcon, TrashIcon } from "@navikt/aksel-icons";
import { Button, HelpText, Link, Table } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

import { components } from "@/openapi/behandling-typer";
import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { OpplysningPeriodeTabellNyPeriode } from "~/components/opplysning-perioder-tabell/OpplysningPeriodeTabellNyPeriode";
import { OpplysningPeriodeTabellRedigerLinje } from "~/components/opplysning-perioder-tabell/OpplysningPeriodeTabellRedigerLinje";
import { useFeatureFlags } from "~/hooks/useFeatureFlags";
import { useOppgave } from "~/hooks/useOppgave";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { getEnv } from "~/utils/env.utils";
import { formaterOpplysningVerdi } from "~/utils/opplysning.utils";
import { isBarneliste, isTekstVerdi } from "~/utils/type-guards";
import { hentValideringForSlettPeriode } from "~/utils/validering.util";

interface IProps {
  opplysning: components["schemas"]["RedigerbareOpplysninger"];
}

const NY_PERIODE_ID = "NY-PERIODE";

export function OpplysningPerioderTabell({ opplysning }: IProps) {
  const navigate = useNavigate();
  const { behandlingId, regelsettId } = useParams();
  const { readonly, oppgave } = useOppgave();
  const { featureFlags } = useFeatureFlags();
  const [periodeIdUnderRedigering, setPeriodeIdUnderRedigering] = useState<string>();
  const slettPeriodeForm = useForm({
    method: "post",
    submitSource: "state",
    schema: hentValideringForSlettPeriode(),
    defaultValues: { _action: "slett-periode", behandlingId, periodeId: "" },
  });

  const isBarneopplysning = opplysning.opplysningTypeId === "0194881f-9428-74d5-b160-f63a4c61a23b";

  // Hvis det finnes 1 ny periode vil den alltid bli overskrevet hvis man legger til en ny periode. Hvis den er arvet eller siste periode har en til og med dato kan vi legge til en ny periode
  const kanLeggeTilNyPeriode =
    featureFlags.kanAlltidLeggeTilPeriode ||
    isBarneopplysning ||
    opplysning.perioder.length === 0 ||
    opplysning.perioder.some((periode) => periode.opprinnelse !== "Ny") ||
    opplysning.perioder.at(-1)?.gyldigTilOgMed !== undefined;

  return (
    <div className={"mt-4 flex flex-col gap-4"}>
      <Table size="small" className={"aksel--compact"} zebraStripes={true}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">Fra og med</Table.HeaderCell>
            <Table.HeaderCell scope="col">Til og med</Table.HeaderCell>
            <Table.HeaderCell scope="col">{opplysning.navn}</Table.HeaderCell>
            <Table.HeaderCell scope="col">Begrunnelse</Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <div className={"flex items-center gap-2"}>
                Opprinnelse
                <HelpText>
                  Er opplysningsperioden vedtatt i en tidligere behandling eller opprettet i denne
                  behandlingen?
                </HelpText>
              </div>
            </Table.HeaderCell>
            <Table.HeaderCell scope="col" colSpan={2}>
              Valg
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {opplysning.perioder.map((periode, index) => {
            if (periode.id === periodeIdUnderRedigering) {
              return (
                <OpplysningPeriodeTabellRedigerLinje
                  key={periode.id}
                  opplysning={opplysning}
                  setPeriodeUnderRedigering={setPeriodeIdUnderRedigering}
                  periode={periode}
                  periodeIndex={index}
                />
              );
            }

            return (
              <Table.Row key={periode.id}>
                <Table.DataCell>
                  {periode.gyldigFraOgMed ? formaterTilNorskDato(periode.gyldigFraOgMed) : "--"}
                </Table.DataCell>

                <Table.DataCell>
                  {periode.gyldigTilOgMed ? formaterTilNorskDato(periode.gyldigTilOgMed) : "--"}
                </Table.DataCell>

                <Table.DataCell>{formaterOpplysningVerdi(periode.verdi)}</Table.DataCell>

                <Table.DataCell>
                  {periode.kilde?.begrunnelse ? periode.kilde?.begrunnelse.verdi : "--"}
                </Table.DataCell>
                <Table.DataCell>{periode.opprinnelse}</Table.DataCell>

                {!readonly &&
                  opplysning.redigerbar &&
                  periode.opprinnelse !== "Arvet" &&
                  !isBarneopplysning && (
                    <>
                      <Table.DataCell>
                        <Button
                          size={"xsmall"}
                          variant={"tertiary"}
                          icon={<TrashIcon />}
                          loading={slettPeriodeForm.formState.isSubmitting}
                          onClick={() => {
                            slettPeriodeForm.field("periodeId").setValue(periode.id);
                            slettPeriodeForm.submit();
                          }}
                          data-umami-event="Slett periode"
                          data-umami-event-opplysning-type-id={opplysning.opplysningTypeId}
                        />
                      </Table.DataCell>

                      <Table.DataCell>
                        <Button
                          size={"xsmall"}
                          variant={"tertiary"}
                          icon={<PencilIcon />}
                          data-umami-event="Rediger periode"
                          data-umami-event-opplysning-type-id={opplysning.opplysningTypeId}
                          onClick={() => setPeriodeIdUnderRedigering(periode.id)}
                        />
                      </Table.DataCell>
                    </>
                  )}

                {opplysning.datatype === "inntekt" && isTekstVerdi(periode.verdi) && (
                  <Table.DataCell colSpan={2}>
                    {/* Query-paramet heter historisk opplysningId, men forventer opplysningTypeId-verdi. */}
                    <Link
                      href={`${getEnv("DP_INNTEKT_REDIGERING_FRONTEND_URL")}/inntektId/${periode.verdi.verdi}?opplysningId=${opplysning.opplysningTypeId}&behandlingId=${behandlingId}`}
                      target="_blank"
                    >
                      Inntektsredigering <ExternalLinkIcon aria-hidden />
                    </Link>
                  </Table.DataCell>
                )}

                {isBarneliste(periode.verdi) && (
                  <Table.DataCell colSpan={2}>
                    <LoadingLink
                      to={`/oppgave/${oppgave.oppgaveId}/dagpenger-rett/${behandlingId}/regelsett/${regelsettId}/opplysning/${opplysning.opplysningTypeId}/barneliste/${periode.id}`}
                    >
                      Se barneliste
                    </LoadingLink>
                  </Table.DataCell>
                )}

                {(readonly || !opplysning.redigerbar) && opplysning.datatype !== "inntekt" && (
                  <Table.DataCell colSpan={2}>
                    <PadlockLockedIcon aria-label={"Ikke redigerbar"} />
                  </Table.DataCell>
                )}
              </Table.Row>
            );
          })}

          {periodeIdUnderRedigering === NY_PERIODE_ID && (
            <OpplysningPeriodeTabellNyPeriode
              opplysning={opplysning}
              setPeriodeUnderRedigering={setPeriodeIdUnderRedigering}
            />
          )}
        </Table.Body>
      </Table>

      {opplysning.redigerbar && !readonly && (
        <div>
          <Button
            size={"small"}
            variant={"secondary"}
            onClick={() =>
              isBarneopplysning
                ? navigate(`barneliste/ny`)
                : setPeriodeIdUnderRedigering(NY_PERIODE_ID)
            }
            data-umami-event="Legg til periode"
            data-umami-event-opplysning-type-id={opplysning.opplysningTypeId}
            disabled={!kanLeggeTilNyPeriode}
          >
            Legg til ny periode
          </Button>
        </div>
      )}
    </div>
  );
}
