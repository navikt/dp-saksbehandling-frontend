import { Pagination } from "@navikt/ds-react";
import { useSearchParams } from "@remix-run/react";

import styles from "./OppgaveListePaginering.module.css";

interface IProps {
  totaltAntallOppgaver: number;
}

export function OppgaveListePaginering({ totaltAntallOppgaver }: IProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const antallOppgaverPerSide = searchParams.get("antallOppgaver")
    ? parseInt(searchParams.get("antallOppgaver") as string)
    : 100;
  const antallSider = Math.ceil(totaltAntallOppgaver / antallOppgaverPerSide);

  function endreSide(page: number) {
    searchParams.set("side", page.toString());
    setSearchParams(searchParams);
  }

  if (antallSider <= 1) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Pagination
        page={searchParams.get("side") ? parseInt(searchParams.get("side") as string) : 1}
        onPageChange={endreSide}
        count={antallSider}
        boundaryCount={1}
        siblingCount={1}
        size="xsmall"
      />
    </div>
  );
}