import { BulletListIcon, ChevronDownIcon, ChevronUpIcon } from "@navikt/aksel-icons";
import { Button, Heading, InfoCard, List } from "@navikt/ds-react";
import { useState } from "react";

import { GenericTable } from "~/components/generic-table/GenericTable";
import { useBehandling } from "~/hooks/useBehandling";
import { formaterOpplysningVerdi, formaterPeriodeMedUke } from "~/utils/opplysning.utils";

import { components } from "../../../openapi/behandling-typer";

const omgjøringRegelsettId = "Nzc0ODQwNzYy";
const ANTALL_PERIODER_SOM_VISES = 5;

const tableColumns = {
  periode: { header: "Periode" },
  eldreVerdi: { header: "Før" },
  nyVerdi: { header: "Ny" },
} as const;

export function RevurderingResultat() {
  const { behandling, forrigeBehandling } = useBehandling();
  const [utvidTabell, setUtvidTabell] = useState(false);

  const relevanteHendelsestyper: components["schemas"]["Hendelse"]["type"][] = [
    "Omgjøring",
    "Meldekort",
  ];
  if (!relevanteHendelsestyper.includes(behandling.behandletHendelse.type)) {
    return null;
  }

  const omgjøringRegelsett =
    behandling.fastsettelser.find((regelsett) => regelsett.id === omgjøringRegelsettId) ??
    behandling.saksbehandlingsregler?.find((regelsett) => regelsett.id === omgjøringRegelsettId);

  if (!omgjøringRegelsett) {
    return null;
  }

  const omgjøringOpplysninger = behandling.opplysninger.filter((opplysninger) =>
    omgjøringRegelsett.opplysninger.includes(opplysninger.opplysningTypeId),
  );

  const omgjøringBegrunnelser = omgjøringOpplysninger
    .map((opplysning) => ({
      opplysningTypeId: opplysning.opplysningTypeId,
      begrunnelse: opplysning.perioder[0]?.kilde?.begrunnelse,
    }))
    .filter(
      (
        entry,
      ): entry is {
        opplysningTypeId: string;
        begrunnelse: NonNullable<typeof entry.begrunnelse>;
      } => entry.begrunnelse !== undefined,
    );

  const pengerSomSkalUtbetalesDenneBehandling = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "01994cfd-9a27-762e-81fa-61f550467c95",
  );

  const pengerSomSkalUtbetalesForrigeBehandling = forrigeBehandling?.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "01994cfd-9a27-762e-81fa-61f550467c95",
  );

  const maksAntallPerioder = Math.max(
    pengerSomSkalUtbetalesForrigeBehandling?.perioder.length ?? 0,
    pengerSomSkalUtbetalesDenneBehandling?.perioder.length ?? 0,
  );

  if (!pengerSomSkalUtbetalesDenneBehandling) {
    return null;
  }

  const alleTableValues = pengerSomSkalUtbetalesDenneBehandling.perioder.map((periode, index) => ({
    id: periode.id,
    gyldigFraOgMed: periode.gyldigFraOgMed,
    gyldigTilOgMed: periode.gyldigTilOgMed,
    eldreVerdi: pengerSomSkalUtbetalesForrigeBehandling?.perioder[index]?.verdi,
    nyVerdi: periode.verdi,
  }));

  const tableValues = utvidTabell
    ? alleTableValues
    : alleTableValues.slice(0, ANTALL_PERIODER_SOM_VISES);

  return (
    <InfoCard data-color="info">
      <InfoCard.Header icon={<BulletListIcon aria-hidden />}>
        <InfoCard.Title>Betalingsoversikt</InfoCard.Title>
      </InfoCard.Header>
      <InfoCard.Content>
        <div className={"flex flex-col gap-4"}>
          {omgjøringBegrunnelser.length > 0 && (
            <>
              <Heading size={"xsmall"}>Vedtaket omgjøres fordi</Heading>
              <List as="ul">
                {omgjøringBegrunnelser.map(({ opplysningTypeId, begrunnelse }) => (
                  <List.Item key={opplysningTypeId}>{begrunnelse.verdi}</List.Item>
                ))}
              </List>
            </>
          )}

          {pengerSomSkalUtbetalesDenneBehandling && (
            <>
              <Heading size={"xsmall"}>{pengerSomSkalUtbetalesDenneBehandling.navn}</Heading>

              <GenericTable
                columns={tableColumns}
                data={tableValues}
                getRowKey={(value) => value.id}
                defaultColumn="periode"
              >
                {(columnKey, value) => {
                  switch (columnKey) {
                    case "periode":
                      return value.gyldigFraOgMed && value.gyldigTilOgMed
                        ? formaterPeriodeMedUke(value.gyldigFraOgMed, value.gyldigTilOgMed)
                        : "--";
                    case "eldreVerdi":
                      return value.eldreVerdi ? formaterOpplysningVerdi(value.eldreVerdi) : "--";
                    case "nyVerdi":
                      return formaterOpplysningVerdi(value.nyVerdi);
                  }
                }}
              </GenericTable>

              {maksAntallPerioder > ANTALL_PERIODER_SOM_VISES && (
                <div>
                  <Button
                    variant={"tertiary"}
                    size={"small"}
                    aria-expanded={utvidTabell}
                    icon={
                      utvidTabell ? <ChevronUpIcon aria-hidden /> : <ChevronDownIcon aria-hidden />
                    }
                    onClick={() => setUtvidTabell(!utvidTabell)}
                  >
                    {utvidTabell ? "Vis færre perioder" : `Vis alle ${maksAntallPerioder} perioder`}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </InfoCard.Content>
    </InfoCard>
  );
}
