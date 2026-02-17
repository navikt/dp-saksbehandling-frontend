import { ExternalLinkIcon, PadlockLockedIcon, PencilIcon, TrashIcon } from "@navikt/aksel-icons";
import { Button, Link, Table } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { components } from "openapi/behandling-typer";
import { useState } from "react";
import { useParams } from "react-router";

import { OpplysningPeriodeTabellNyPeriode } from "~/components/opplysning-perioder-tabell/OpplysningPeriodeTabellNyPeriode";
import { OpplysningPeriodeTabellRedigerLinje } from "~/components/opplysning-perioder-tabell/OpplysningPeriodeTabellRedigerLinje";
import { useBehandling } from "~/hooks/useBehandling";
import { useOppgave } from "~/hooks/useOppgave";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { getEnv } from "~/utils/env.utils";
import { formaterOpplysningVerdi, skalVisePeriode } from "~/utils/opplysning.utils";
import { isTekstVerdi } from "~/utils/type-guards";
import { hentValideringForSlettPeriode } from "~/utils/validering.util";

interface IProps {
  opplysning: components["schemas"]["RedigerbareOpplysninger"];
}

const NY_PERIODE_ID = "NY-PERIODE";

export function OpplysningPerioderTabell(props: IProps) {
  const { behandlingId } = useParams();
  const { readonly } = useOppgave();
  const { visArvedeOpplysninger } = useBehandling();
  const [periodeIdUnderRedigering, setPeriodeIdUnderRedigering] = useState<string>();
  const slettPeriodeForm = useForm({
    method: "post",
    submitSource: "state",
    schema: hentValideringForSlettPeriode(),
    defaultValues: { _action: "slett-periode", behandlingId, periodeId: "" },
  });

  // Hvis det finnes 1 ny periode vil den alltid bli overskrevet hvis man legger til en ny periode. Hvis den er arvet eller siste periode har en til og med dato kan vi legge til en ny periode
  const kanLeggeTilNyPeriode =
    props.opplysning.perioder.some((periode) => periode.opprinnelse !== "Ny") ||
    props.opplysning.perioder.at(-1)?.gyldigTilOgMed !== undefined;

  const perioderSomSkalVises = props.opplysning.perioder.filter((periode) =>
    skalVisePeriode(periode, visArvedeOpplysninger),
  );

  if (perioderSomSkalVises.length === 0) {
    return null;
  }

  return (
    <div className={"mt-4 flex flex-col gap-4"}>
      <Table size="small" className={"aksel--compact"} zebraStripes={true}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">Fra og med</Table.HeaderCell>
            <Table.HeaderCell scope="col">Til og med</Table.HeaderCell>
            <Table.HeaderCell scope="col">{props.opplysning.navn}</Table.HeaderCell>
            <Table.HeaderCell scope="col">Begrunnelse</Table.HeaderCell>
            <Table.HeaderCell scope="col" colSpan={2}>
              Valg
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {perioderSomSkalVises.map((periode, index) => {
            if (periode.id === periodeIdUnderRedigering) {
              return (
                <OpplysningPeriodeTabellRedigerLinje
                  key={periode.id}
                  opplysning={props.opplysning}
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

                {!readonly && props.opplysning.redigerbar && (
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
                      />
                    </Table.DataCell>

                    <Table.DataCell>
                      <Button
                        size={"xsmall"}
                        variant={"tertiary"}
                        icon={<PencilIcon />}
                        onClick={() => setPeriodeIdUnderRedigering(periode.id)}
                      />
                    </Table.DataCell>
                  </>
                )}

                {props.opplysning.datatype === "inntekt" && isTekstVerdi(periode.verdi) && (
                  <Table.DataCell colSpan={2}>
                    <Link
                      href={`${getEnv("DP_INNTEKT_REDIGERING_FRONTEND_URL")}/inntektId/${periode.verdi.verdi}?opplysningId=${periode.id}&behandlingId=${behandlingId}`}
                      target="_blank"
                    >
                      Inntektredigering <ExternalLinkIcon aria-hidden />
                    </Link>
                  </Table.DataCell>
                )}

                {(readonly || !props.opplysning.redigerbar) &&
                  props.opplysning.datatype !== "inntekt" && (
                    <Table.DataCell colSpan={2}>
                      <PadlockLockedIcon aria-label={"Ikke redigerbar"} />
                    </Table.DataCell>
                  )}
              </Table.Row>
            );
          })}

          {periodeIdUnderRedigering === NY_PERIODE_ID && (
            <OpplysningPeriodeTabellNyPeriode
              opplysning={props.opplysning}
              setPeriodeUnderRedigering={setPeriodeIdUnderRedigering}
            />
          )}
        </Table.Body>
      </Table>

      {props.opplysning.redigerbar && (
        <div>
          <Button
            size={"small"}
            variant={"secondary"}
            onClick={() => setPeriodeIdUnderRedigering(NY_PERIODE_ID)}
            disabled={!kanLeggeTilNyPeriode}
          >
            Legg til ny periode
          </Button>
        </div>
      )}
    </div>
  );
}
