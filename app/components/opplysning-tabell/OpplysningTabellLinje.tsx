import type { IOpplysning } from "~/models/behandling.server";
import { useState } from "react";
import { Button, Table } from "@navikt/ds-react";
import { Opplysning } from "~/components/opplysning/Opplysning";
import { getEnv } from "~/utils/env.utils";
import styles from "./OpplysningTabell.module.css";
import { useFetcher } from "@remix-run/react";
import type { action as endreOpplysningAction } from "~/routes/action-endre-opplysning";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

interface IProps {
  opplysning: IOpplysning;
  readonly?: boolean;
}

export function OpplysningTabellLinje(props: IProps) {
  const { opplysning } = props;
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const endreOpplysningFetcher = useFetcher<typeof endreOpplysningAction>();
  const [verdi, setVerdi] = useState<string>(opplysning.verdi);
  const [redigerOpplysning, setRedigerOpplysning] = useState(false);

  const readonly = getEnv("GCP_ENV") === "prod" || props.readonly;
  const kanRedigere = !readonly && opplysning.redigerbar;
  const dirtyInput = verdi !== opplysning.verdi;

  function lagreOpplysning() {
    setRedigerOpplysning(false);
    const formData = new FormData();
    formData.append("oppgaveId", oppgave.oppgaveId);
    formData.append("behandlingId", oppgave.behandlingId);
    formData.append("opplysningId", opplysning.id);
    formData.append("verdi", verdi);
    endreOpplysningFetcher.submit(formData, {
      method: "POST",
      action: "/action-endre-opplysning",
    });
  }

  return (
    <Table.Row key={opplysning.navn}>
      <Table.DataCell scope="row">{opplysning.navn}</Table.DataCell>
      <Table.DataCell colSpan={kanRedigere ? 1 : 2}>
        <Opplysning
          opplysning={opplysning}
          verdi={verdi}
          onChange={setVerdi}
          readonly={readonly || !redigerOpplysning}
        />
      </Table.DataCell>

      {kanRedigere && (
        <>
          {!dirtyInput && (
            <Table.DataCell>
              <Button
                className={styles.lagreKnapp}
                variant="tertiary"
                type="button"
                size="xsmall"
                onClick={() => setRedigerOpplysning(!redigerOpplysning)}
              >
                {redigerOpplysning ? "Lukk" : "Endre"}
              </Button>
            </Table.DataCell>
          )}

          {dirtyInput && (
            <Table.DataCell>
              <Button
                variant="tertiary"
                type="button"
                size="xsmall"
                loading={endreOpplysningFetcher.state !== "idle"}
                onClick={() => lagreOpplysning()}
              >
                Lagre endringer
              </Button>
            </Table.DataCell>
          )}
        </>
      )}
    </Table.Row>
  );
}
