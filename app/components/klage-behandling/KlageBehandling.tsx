import { Table } from "@navikt/ds-react";

import { KlageOpplysning } from "~/components/klage-opplysning/KlageOpplysning";
import { hentKlage } from "~/models/saksbehandling.server";

interface IProps {
  klage: Awaited<ReturnType<typeof hentKlage>>;
  readonly?: boolean;
}

export function KlageBehandling({ klage, readonly }: IProps) {
  const klageSakOpplysninger = klage.behandlingOpplysninger.filter(
    (opplysning) => opplysning.gruppe === "KLAGESAK",
  );
  const fristOpplysninger = klage.behandlingOpplysninger.filter(
    (opplysning) => opplysning.gruppe === "FRIST",
  );

  const formkravOpplysninger = klage.behandlingOpplysninger.filter(
    (opplysning) => opplysning.gruppe === "FORMKRAV",
  );

  return (
    <Table className={"tabell--subtil"} zebraStripes>
      <Table.Body>
        <Table.Row shadeOnHover={false}>
          <Table.HeaderCell colSpan={2}>Klagesak</Table.HeaderCell>
        </Table.Row>

        {klageSakOpplysninger.map((opplysning) => (
          <Table.Row key={opplysning.opplysningId} shadeOnHover={false}>
            <Table.DataCell>
              <KlageOpplysning
                opplysning={opplysning}
                behandlingId={klage.behandlingId}
                readonly={readonly}
                visningType={"horisontal"}
              />
            </Table.DataCell>
          </Table.Row>
        ))}

        <Table.Row shadeOnHover={false}>
          <Table.HeaderCell colSpan={2}>Frist</Table.HeaderCell>
        </Table.Row>

        {fristOpplysninger.map((opplysning) => (
          <Table.Row key={opplysning.opplysningId} shadeOnHover={false}>
            <Table.DataCell>
              <KlageOpplysning
                opplysning={opplysning}
                behandlingId={klage.behandlingId}
                readonly={readonly}
                visningType={"horisontal"}
              />
            </Table.DataCell>
          </Table.Row>
        ))}

        <Table.Row shadeOnHover={false}>
          <Table.HeaderCell colSpan={2}>Formkrav</Table.HeaderCell>
        </Table.Row>

        {formkravOpplysninger.map((opplysning) => (
          <Table.Row key={opplysning.opplysningId} shadeOnHover={false}>
            <Table.DataCell>
              <KlageOpplysning
                opplysning={opplysning}
                behandlingId={klage.behandlingId}
                readonly={readonly}
                visningType={"horisontal"}
              />
            </Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
