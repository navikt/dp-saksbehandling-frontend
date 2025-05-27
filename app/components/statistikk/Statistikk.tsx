import { Table } from "@navikt/ds-react";
import classnames from "classnames";

import { formaterTilNorskDato } from "~/utils/dato.utils";

import { paths } from "../../../openapi/saksbehandling-typer";
import styles from "./Statistikk.module.css";

interface IProps {
  statistikk: paths["/statistikk"]["get"]["responses"]["200"]["content"]["application/json"];
}

export function Statistikk({ statistikk }: IProps) {
  const mineFullforteVedtak = {
    tittel: "Mine fullførte vedtak",
    data: [
      { tittel: "I dag", verdi: statistikk.individuellStatistikk.dag },
      {
        tittel: "Denne uken",
        verdi: statistikk.individuellStatistikk.uke,
      },
      { tittel: "Totalt", verdi: statistikk.individuellStatistikk.totalt },
    ],
  };

  const alleFullforteVedtak = {
    tittel: "Alle fullførte vedtak",
    data: [
      { tittel: "I dag", verdi: statistikk.generellStatistikk.dag },
      {
        tittel: "Denne uken",
        verdi: statistikk.generellStatistikk.uke,
      },
      { tittel: "Totalt", verdi: statistikk.generellStatistikk.totalt },
    ],
  };

  const beholdningsinfo = {
    tittel: "Beholdning",
    data: [
      {
        tittel: "Klar til behandling",
        verdi: statistikk.beholdningsinfo.antallOppgaverKlarTilBehandling,
      },
      {
        tittel: "Klar til kontroll",
        verdi: statistikk.beholdningsinfo.antallOppgaverKlarTilKontroll,
      },
      {
        tittel: "Eldste oppgave",
        verdi: statistikk.beholdningsinfo.datoEldsteUbehandledeOppgave
          ? formaterTilNorskDato(statistikk.beholdningsinfo.datoEldsteUbehandledeOppgave)
          : "Ingen oppgaver",
      },
    ],
  };

  return (
    <>
      <StatistikkTabell {...mineFullforteVedtak} />
      <StatistikkTabell {...alleFullforteVedtak} />
      <StatistikkTabell {...beholdningsinfo} />
    </>
  );
}

interface IStatistikkTabellProps {
  tittel: string;
  data: { tittel: string; verdi: string | number }[];
}

function StatistikkTabell({ tittel, data }: IStatistikkTabellProps) {
  return (
    <Table
      className={classnames(styles.container, "table--subtle-zebra", "aksel--compact")}
      size="small"
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col" colSpan={2}>
            {tittel}
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map((dataRad) => (
          <Table.Row key={dataRad.tittel}>
            <Table.DataCell scope="row">{dataRad.tittel}</Table.DataCell>
            <Table.DataCell>{dataRad.verdi}</Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
