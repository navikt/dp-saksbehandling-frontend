import { ChevronDownIcon, ChevronUpIcon } from "@navikt/aksel-icons";
import { Button, Radio, RadioGroup } from "@navikt/ds-react";
import { compareAsc } from "date-fns";
import { useState } from "react";

import { GenericTable } from "~/components/generic-table/GenericTable";
import { useBehandling } from "~/hooks/useBehandling";
import { formaterOpplysningVerdi, formaterPeriodeMedUke } from "~/utils/opplysning.utils";

import { components } from "../../../openapi/behandling-typer";

const ANTALL_PERIODER_SOM_VISES = 5;

const tableColumns = {
  periode: { header: "Periode" },
  eldreVerdi: { header: "Før" },
  nyVerdi: { header: "Ny" },
} as const;

export function hentBetalingsopplysning(
  behandling: Pick<components["schemas"]["Behandling"], "behandletHendelse" | "opplysninger">,
) {
  return behandling.opplysninger.find(
    (opplysning) =>
      opplysning.opplysningTypeId === "01994cfd-9a27-762e-81fa-61f550467c95" &&
      opplysning.perioder.length > 0,
  );
}

export function RevurderingResultat() {
  const { behandling, forrigeBehandling } = useBehandling();
  const [utvidTabell, setUtvidTabell] = useState(false);
  const [sortOrder, setSortOrder] = useState<"eldste" | "nyeste">("eldste");

  const pengerSomSkalUtbetalesDenneBehandling = hentBetalingsopplysning(behandling);
  if (!pengerSomSkalUtbetalesDenneBehandling) {
    return null;
  }

  const pengerSomSkalUtbetalesForrigeBehandling = forrigeBehandling?.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "01994cfd-9a27-762e-81fa-61f550467c95",
  );

  const maksAntallPerioder = Math.max(
    pengerSomSkalUtbetalesForrigeBehandling?.perioder.length ?? 0,
    pengerSomSkalUtbetalesDenneBehandling?.perioder.length ?? 0,
  );

  const alleTableValues = pengerSomSkalUtbetalesDenneBehandling.perioder.map((periode, index) => ({
    id: periode.id,
    gyldigFraOgMed: periode.gyldigFraOgMed,
    gyldigTilOgMed: periode.gyldigTilOgMed,
    eldreVerdi: pengerSomSkalUtbetalesForrigeBehandling?.perioder[index]?.verdi,
    nyVerdi: periode.verdi,
  }));

  const sortedTableValues = [...alleTableValues].sort((a, b) => {
    const dateOrder = compareAsc(new Date(a.gyldigFraOgMed ?? 0), new Date(b.gyldigFraOgMed ?? 0));
    return sortOrder === "eldste" ? dateOrder : -dateOrder;
  });

  const tableValues = utvidTabell
    ? sortedTableValues
    : sortedTableValues.slice(0, ANTALL_PERIODER_SOM_VISES);

  return (
    <div className={"flex flex-col gap-2 py-2"}>
      {pengerSomSkalUtbetalesDenneBehandling && (
        <>
          <RadioGroup
            legend="Sorter perioder"
            hideLegend
            onChange={(value) => setSortOrder(value)}
            value={sortOrder}
            size="small"
          >
            <div className="flex flex-row gap-4">
              <Radio value="eldste">Eldste først</Radio>
              <Radio value="nyeste">Nyeste først</Radio>
            </div>
          </RadioGroup>

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
                icon={utvidTabell ? <ChevronUpIcon aria-hidden /> : <ChevronDownIcon aria-hidden />}
                onClick={() => setUtvidTabell(!utvidTabell)}
              >
                {utvidTabell ? "Vis færre perioder" : `Vis alle ${maksAntallPerioder} perioder`}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
