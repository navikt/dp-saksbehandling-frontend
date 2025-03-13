import { Table } from "@navikt/ds-react";
import classnames from "classnames";

import { formaterNorskDato } from "~/utils/dato.utils";

import { IStatistikk } from "../../../mocks/data/mock-statistikk";
import styles from "./Statistikk.module.css";

interface IProps {
  statistikk: IStatistikk;
}

export function Statistikk({ statistikk }: IProps) {
  const mineFullforteVedtak = {
    tittel: "Mine fullførte vedtak",
    data: [
      // @ts-expect-error TODO feil i dp-saks
      { tittel: "I dag", verdi: statistikk.individuellStatistikk.dag },
      {
        tittel: "Denne uken",
        // @ts-expect-error TODO feil i dp-saks
        verdi: statistikk.individuellStatistikk.uke,
      },
      // @ts-expect-error TODO feil i dp-saks
      { tittel: "Totalt", verdi: statistikk.individuellStatistikk.totalt },
    ],
  };

  const alleFullforteVedtak = {
    tittel: "Alle fullførte vedtak",
    data: [
      // @ts-expect-error TODO feil i dp-saks
      { tittel: "I dag", verdi: statistikk.generellStatistikk.dag },
      {
        tittel: "Denne uken",
        // @ts-expect-error TODO feil i dp-saks
        verdi: statistikk.generellStatistikk.uke,
      },
      // @ts-expect-error TODO feil i dp-saks
      { tittel: "Totalt", verdi: statistikk.generellStatistikk.totalt },
    ],
  };

  const beholdningsinfo = {
    tittel: "Beholdning",
    data: [
      {
        tittel: "Klar til behandling",
        // @ts-expect-error TODO feil i dp-saks
        verdi: statistikk.beholdningsinfo.antallOppgaverKlarTilBehandling,
      },
      {
        tittel: "Klar til kontroll",
        // @ts-expect-error TODO feil i dp-saks
        verdi: statistikk.beholdningsinfo.antallOppgaverKlarTilKontroll,
      },
      {
        tittel: "Eldste oppgave",
        // @ts-expect-error TODO feil i dp-saks
        verdi: formaterNorskDato(statistikk.beholdningsinfo.datoEldsteUbehandledeOppgave),
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
