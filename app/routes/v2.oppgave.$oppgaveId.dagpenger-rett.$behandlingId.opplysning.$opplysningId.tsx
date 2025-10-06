import { ArrowLeftIcon, PencilIcon, TrashIcon } from "@navikt/aksel-icons";
import { Button, Heading, Table, Timeline, TimelinePeriodProps } from "@navikt/ds-react";
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
  hentIkonForOpplysningPeriode,
  TidslinjeStartSlutt,
} from "~/components/vilkår-tidslinje/VilkårTidslinje";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentBehandling } from "~/models/behandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { isAlert } from "~/utils/type-guards";

import { components } from "../../openapi/behandling-typer";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  invariant(params.opplysningId, "params.opplysningId er påkrevd");
  const behandling = await hentBehandling(request, params.behandlingId);
  const opplysning = behandling.opplysningsgrupper.find(
    (opplysning) => opplysning.opplysningTypeId === params.opplysningId,
  );

  if (!opplysning) {
    throw new Response(`Finner ikke opplysning med id ${params.opplysningId}`, { status: 404 });
  }

  return { opplysning };
}

export default function Opplysning() {
  const { opplysning } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  const førsteFraOgMedDato = opplysning.opplysninger
    .map((opplysning) => opplysning.gyldigFraOgMed)
    .filter((dato) => dato !== null && dato !== undefined)
    .sort()
    .at(0);

  const [antallUkerITidslinje, setAntallUkerITidslinje] = useState<AntallUkerITidslinje>("4");
  const [tidslinjeStartSlutt, setTidslinjeStartSlutt] = useState<TidslinjeStartSlutt>({
    start: new Date(førsteFraOgMedDato ?? new Date()),
    end: add(new Date(førsteFraOgMedDato ?? new Date()), { weeks: 2 }),
  });

  return (
    <div className={"card m-4 p-4"}>
      <Link to={"./../../behandle"} className={"flex items-center gap-1"}>
        <ArrowLeftIcon />
        Behandling
      </Link>

      <Heading size={"large"}>{opplysning.navn}</Heading>

      <TidslinjeNavigering
        tidslinjeStartSlutt={tidslinjeStartSlutt}
        setTidslinjeStartSlutt={setTidslinjeStartSlutt}
        antallUkerITidslinje={antallUkerITidslinje}
        setAntallUkerITidslinje={setAntallUkerITidslinje}
      />

      <Timeline
        startDate={tidslinjeStartSlutt.start}
        endDate={tidslinjeStartSlutt.end}
        className={"aksel--compact"}
      >
        <Timeline.Row key={opplysning.navn} label={""}>
          {opplysning.opplysninger.map((opplysning) => {
            const start = opplysning.gyldigFraOgMed
              ? new Date(opplysning.gyldigFraOgMed)
              : sub(new Date(), { years: 1 });

            const slutt = opplysning.gyldigTilOgMed
              ? new Date(opplysning.gyldigTilOgMed)
              : add(new Date(), { years: 1 });

            return (
              <Timeline.Period
                key={opplysning.id}
                start={start}
                end={slutt}
                status={
                  opplysning.verdien ? hentStatusForOpplysningPeriode(opplysning.verdien) : "info"
                }
                icon={opplysning?.verdien ? hentIkonForOpplysningPeriode(opplysning.verdien) : ""}
              >
                {opplysning?.verdien ? formaterOpplysningVerdi(opplysning.verdien) : ""}
              </Timeline.Period>
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
          {opplysning.opplysninger.map((o) => (
            <Table.Row key={o.id}>
              <Table.DataCell>
                {o.gyldigFraOgMed ? formaterTilNorskDato(o.gyldigFraOgMed) : "--"}
              </Table.DataCell>
              <Table.DataCell>
                {o.gyldigTilOgMed ? formaterTilNorskDato(o.gyldigTilOgMed) : "--"}
              </Table.DataCell>
              <Table.DataCell>{o.verdien ? formaterOpplysningVerdi(o.verdien) : ""}</Table.DataCell>
              <Table.DataCell>{o.kilde?.begrunnelse?.verdi}</Table.DataCell>
              <Table.DataCell>
                <Button size={"xsmall"} variant={"tertiary-neutral"} icon={<TrashIcon />} />
              </Table.DataCell>
              <Table.DataCell>
                <Button size={"xsmall"} variant={"tertiary-neutral"} icon={<PencilIcon />}></Button>
              </Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}

function hentStatusForOpplysningPeriode(
  opplysningsverdi: components["schemas"]["Opplysningsverdi"],
): TimelinePeriodProps["status"] {
  switch (opplysningsverdi.datatype) {
    case "tekst":
      return "info";
    case "inntekt":
      return "info";
    case "dato":
      return "info";
    case "heltall":
      return "info";
    case "desimaltall":
      return "info";
    case "penger":
      return `info`;
    case "ulid":
      return `info`;
    case "boolsk":
      return opplysningsverdi.verdi ? "success" : "danger";
    case "periode":
      return `info`;
    case "barn":
      return `info`;
  }
}
