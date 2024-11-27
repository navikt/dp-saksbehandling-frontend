import { Pagination } from "@navikt/ds-react";
import { useSearchParams } from "@remix-run/react";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import styles from "./OppgaveListePaginering.module.css";

export function OppgaveListePaginering() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { totaltAntallOppgaver } = useTypedRouteLoaderData("routes/_oppgaver");
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
