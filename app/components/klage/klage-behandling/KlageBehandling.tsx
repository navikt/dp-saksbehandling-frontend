import { Button, Table } from "@navikt/ds-react";

import { KlageOpplysning } from "~/components/klage/klage-opplysning/KlageOpplysning";
import { hentKlage } from "~/models/saksbehandling.server";

interface IProps {
  klage: Awaited<ReturnType<typeof hentKlage>>;
  readonly?: boolean;
  setAktivTab: (tab: string) => void;
}

export function KlageBehandling({ klage, readonly, setAktivTab }: IProps) {
  const klageSakOpplysninger = klage.behandlingOpplysninger.filter(
    (opplysning) => opplysning.gruppe === "KLAGESAK",
  );
  const fristOpplysninger = klage.behandlingOpplysninger.filter(
    (opplysning) => opplysning.gruppe === "FRIST",
  );

  const formkravOpplysninger = klage.behandlingOpplysninger.filter(
    (opplysning) => opplysning.gruppe === "FORMKRAV",
  );

  // TODO: hvorfor er det tabell lol (ser ut som at vi bruker ul og li andre steder, f.eks. i RegelsettOpplysningListeElement)
  return (
    <div className={"p-2"}>
      <Table className={"tabell--subtil"}>
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
      <Button
        variant="primary"
        size="small"
        className="mt-4"
        disabled={readonly}
        onClick={() => setAktivTab("utfall")}
      >
        Sett utfall
      </Button>
    </div>
  );
}
