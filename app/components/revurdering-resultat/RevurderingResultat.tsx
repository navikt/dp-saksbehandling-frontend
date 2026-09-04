import { BulletListIcon, ChevronDownIcon, ChevronUpIcon } from "@navikt/aksel-icons";
import { Button, Heading, InfoCard, List } from "@navikt/ds-react";
import { useState } from "react";

import {
  ANTALL_PERIODER_SOM_VISES,
  PerioderTabell,
} from "~/components/revurdering-resultat/PerioderTabell";
import { useBehandling } from "~/hooks/useBehandling";

import { components } from "../../../openapi/behandling-typer";

const omgjøringRegelsettId = "Nzc0ODQwNzYy";

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

  const harPengesammenligning =
    pengerSomSkalUtbetalesDenneBehandling && pengerSomSkalUtbetalesForrigeBehandling;

  const maksAntallPerioder = Math.max(
    pengerSomSkalUtbetalesForrigeBehandling?.perioder.length ?? 0,
    pengerSomSkalUtbetalesDenneBehandling?.perioder.length ?? 0,
  );

  if (omgjøringBegrunnelser.length === 0 && !harPengesammenligning) {
    return null;
  }

  return (
    <InfoCard data-color="info">
      <InfoCard.Header icon={<BulletListIcon aria-hidden />}>
        <InfoCard.Title>Resultat av revurdering</InfoCard.Title>
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

          {harPengesammenligning && (
            <>
              <Heading size={"xsmall"}>{pengerSomSkalUtbetalesDenneBehandling.navn}</Heading>
              <div className={"flex gap-4"}>
                <div className={"flex-1"}>
                  <Heading size={"xsmall"}>Før</Heading>
                  <PerioderTabell
                    perioder={pengerSomSkalUtbetalesForrigeBehandling.perioder}
                    utvidet={utvidTabell}
                  />
                </div>

                <div className={"flex-1"}>
                  <Heading size={"xsmall"}>Etter</Heading>
                  <PerioderTabell
                    perioder={pengerSomSkalUtbetalesDenneBehandling.perioder}
                    utvidet={utvidTabell}
                  />
                </div>
              </div>

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
