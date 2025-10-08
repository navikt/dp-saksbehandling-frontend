import { ArrowLeftIcon, PencilIcon, TrashIcon } from "@navikt/aksel-icons";
import { Button, Heading, Table, Timeline } from "@navikt/ds-react";
import { add, sub } from "date-fns";
import { useState } from "react";
import {
  ActionFunctionArgs,
  Link,
  type LoaderFunctionArgs,
  useActionData,
  useLoaderData,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { TidslinjeNavigering } from "~/components/tidslinje-navigering/TidslinjeNavigering";
import {
  AntallUkerITidslinje,
  formaterOpplysningVerdi,
  hentFargeForOpplysningPeriode,
  hentIkonForOpplysningPeriode,
  TidslinjeStartSlutt,
} from "~/components/vilkår-tidslinje/VilkårTidslinje";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentBehandlingV2 } from "~/models/behandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  invariant(params.regelsettNavn, "params.regelsettNavn er påkrevd");
  invariant(params.opplysningId, "params.opplysningId er påkrevd");
  const behandling = await hentBehandlingV2(request, params.behandlingId);
  const regelsett = [...behandling.vilkår, ...behandling.fastsettelser].find(
    (sett) => sett.navn === params.regelsettNavn,
  );
  const opplysning = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === params.opplysningId,
  );

  if (!regelsett) {
    throw new Response(`Finner ikke regelsett med navn ${params.regelsettNavn}`, { status: 404 });
  }

  if (!opplysning) {
    throw new Response(`Finner ikke opplysning med id ${params.opplysningId}`, { status: 404 });
  }

  return { behandling, regelsett, opplysning, oppgaveId: params.oppgaveId };
}

export default function Opplysning() {
  const { behandling, regelsett, opplysning, oppgaveId } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  const opplysningForRegelsett = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === regelsett.opplysningTypeId,
  );

  const regelsettOpplysninger = behandling.opplysninger.filter((opplysning) =>
    regelsett.opplysninger.includes(opplysning.opplysningTypeId),
  );

  const førsteFraOgMedDatoRegelsett = regelsettOpplysninger
    .flatMap((opplysning) => opplysning.perioder)
    .map((periode) => periode.gyldigFraOgMed)
    .filter((dato): dato is string => dato != null)
    .sort((a, b) => a.localeCompare(b))
    .at(0);

  const [antallUkerITidslinjeRegelsett, setAntallUkerITidslinjeRegelsett] =
    useState<AntallUkerITidslinje>("4");
  const [tidslinjeStartSluttRegelsett, setTidslinjeStartSluttRegelsett] =
    useState<TidslinjeStartSlutt>({
      start: new Date(førsteFraOgMedDatoRegelsett ?? new Date()),
      end: add(new Date(førsteFraOgMedDatoRegelsett ?? new Date()), { weeks: 2 }),
    });

  const førsteFraOgMedDatoOpplysning = opplysning.perioder
    .map((periode) => periode.gyldigFraOgMed)
    .filter((dato): dato is string => dato != null)
    .sort((a, b) => a.localeCompare(b))
    .at(0);

  const [antallUkerITidslinjeOpplysning, setAntallUkerITidslinjeOpplysning] =
    useState<AntallUkerITidslinje>("4");
  const [tidslinjeStartSluttOpplysning, setTidslinjeStartSluttOpplysning] =
    useState<TidslinjeStartSlutt>({
      start: new Date(førsteFraOgMedDatoOpplysning ?? new Date()),
      end: add(new Date(førsteFraOgMedDatoOpplysning ?? new Date()), { weeks: 2 }),
    });

  return (
    <>
      <div className={"card m-4 p-4"}>
        <Link to={"./../../../../behandle"} className={"flex items-center gap-1"}>
          <ArrowLeftIcon />
          Behandling
        </Link>

        <Heading size={"large"}>{regelsett.navn}</Heading>

        <TidslinjeNavigering
          tidslinjeStartSlutt={tidslinjeStartSluttRegelsett}
          setTidslinjeStartSlutt={setTidslinjeStartSluttRegelsett}
          antallUkerITidslinje={antallUkerITidslinjeRegelsett}
          setAntallUkerITidslinje={setAntallUkerITidslinjeRegelsett}
        />

        <Timeline
          startDate={tidslinjeStartSluttRegelsett.start}
          endDate={tidslinjeStartSluttRegelsett.end}
          className={"aksel--compact"}
        >
          <Timeline.Row key={regelsett.navn} label={regelsett.navn}>
            {opplysningForRegelsett?.perioder.map((periode, index) => {
              const start = periode.gyldigFraOgMed
                ? new Date(periode.gyldigFraOgMed)
                : sub(new Date(), { years: 1 });

              const slutt = periode.gyldigTilOgMed
                ? new Date(periode.gyldigTilOgMed)
                : add(new Date(), { years: 1 });

              return (
                <Timeline.Period
                  key={index}
                  start={start}
                  end={slutt}
                  status={hentFargeForOpplysningPeriode(periode.verdi)}
                  icon={hentIkonForOpplysningPeriode(periode.verdi)}
                />
              );
            })}
          </Timeline.Row>

          {regelsettOpplysninger
            .filter((opplysning) => opplysning.synlig)
            .map((opplysning) => (
              <Timeline.Row
                key={opplysning.opplysningTypeId}
                label={"\u00A0"}
                icon={
                  <Link
                    to={`/v2/oppgave/${oppgaveId}/dagpenger-rett/${behandling.behandlingId}/regelsett/${regelsett.navn}/opplysning/${opplysning.opplysningTypeId}`}
                    className={"ml-6"}
                  >
                    {opplysning.navn}
                  </Link>
                }
              >
                {opplysning.perioder.map((periode) => {
                  const start = periode.gyldigFraOgMed
                    ? new Date(periode.gyldigFraOgMed)
                    : sub(new Date(), { years: 1 });

                  const slutt = periode.gyldigTilOgMed
                    ? new Date(periode.gyldigTilOgMed)
                    : add(new Date(), { years: 1 });

                  return (
                    <Timeline.Period
                      key={periode.id}
                      start={start}
                      end={slutt}
                      status={hentFargeForOpplysningPeriode(periode.verdi)}
                      icon={hentIkonForOpplysningPeriode(periode.verdi)}
                    >
                      {formaterOpplysningVerdi(periode.verdi)}
                    </Timeline.Period>
                  );
                })}
              </Timeline.Row>
              //     <OpplysningTidslinjerad
              //     key={opplysning.opplysningTypeId}
              //   opplysning={opplysning}
              //   behandlingId={behandling.behandlingId}
              //   oppgaveId={oppgaveId}
              //   regelsettNavn={regelsett.navn}
              // />
            ))}
        </Timeline>
      </div>

      <div className={"card m-4 p-4"}>
        <Heading size={"large"}>{opplysning.navn}</Heading>

        <TidslinjeNavigering
          tidslinjeStartSlutt={tidslinjeStartSluttOpplysning}
          setTidslinjeStartSlutt={setTidslinjeStartSluttOpplysning}
          antallUkerITidslinje={antallUkerITidslinjeOpplysning}
          setAntallUkerITidslinje={setAntallUkerITidslinjeOpplysning}
        />

        <Timeline
          startDate={tidslinjeStartSluttOpplysning.start}
          endDate={tidslinjeStartSluttOpplysning.end}
          className={"aksel--compact"}
        >
          <Timeline.Row key={opplysning.navn} label={""}>
            {opplysning.perioder.map((periode, index) => {
              const start = periode.gyldigFraOgMed
                ? new Date(periode.gyldigFraOgMed)
                : sub(new Date(), { years: 1 });

              const slutt = periode.gyldigTilOgMed
                ? new Date(periode.gyldigTilOgMed)
                : add(new Date(), { years: 1 });

              return (
                <Timeline.Period
                  key={index}
                  start={start}
                  end={slutt}
                  status={hentFargeForOpplysningPeriode(periode.verdi)}
                  icon={hentIkonForOpplysningPeriode(periode.verdi)}
                ></Timeline.Period>
              );
            })}
          </Timeline.Row>
        </Timeline>

        <Table size="small" className={"tabell--subtil"} zebraStripes={true}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope="col">Fra og med</Table.HeaderCell>
              <Table.HeaderCell scope="col">Til og med</Table.HeaderCell>
              <Table.HeaderCell scope="col">Verdi</Table.HeaderCell>
              <Table.HeaderCell scope="col">Begrunnelse</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {opplysning.perioder.map((periode) => (
              <Table.Row key={periode.id}>
                <Table.DataCell>
                  {periode.gyldigFraOgMed ? formaterTilNorskDato(periode.gyldigFraOgMed) : "--"}
                </Table.DataCell>
                <Table.DataCell>
                  {periode.gyldigTilOgMed ? formaterTilNorskDato(periode.gyldigTilOgMed) : "--"}
                </Table.DataCell>
                <Table.DataCell>{formaterOpplysningVerdi(periode.verdi)}</Table.DataCell>
                <Table.DataCell>{periode.kilde?.begrunnelse?.verdi}</Table.DataCell>
                <Table.DataCell>
                  <Button size={"xsmall"} variant={"tertiary-neutral"} icon={<TrashIcon />} />
                </Table.DataCell>
                <Table.DataCell>
                  <Button
                    size={"xsmall"}
                    variant={"tertiary-neutral"}
                    icon={<PencilIcon />}
                  ></Button>
                </Table.DataCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
