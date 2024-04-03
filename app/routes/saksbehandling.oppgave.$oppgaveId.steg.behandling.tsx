import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { hentOppgave } from "~/models/oppgave.server";
import { getSession } from "~/models/auth.server";
import styles from "~/route-styles/stegvisning.module.css";
import React from "react";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const session = await getSession(request);
  const oppgave = await hentOppgave(params.oppgaveId, session);

  return json({ oppgave });
}

export default function Behandling() {
  const { oppgave } = useLoaderData<typeof loader>();

  if (!oppgave.behandling) {
    return <div>Mangler behandling data fra dp-behandling</div>;
  }

  // const opplysningKeys = Object.keys(oppgave.behandling.opplysning[0]);

  return (
    <div className={styles.stegContainer}>
      <div>
        <pre>{JSON.stringify(oppgave.behandling, null, 2)}</pre>
      </div>
      {/*<Table className={classnames("kompakt-tabell", styles.table)}>*/}
      {/*  <Table.Header>*/}
      {/*    <Table.Row>*/}
      {/*      {opplysningKeys.map((key) => (*/}
      {/*        <Table.HeaderCell scope="col" key={key}>*/}
      {/*          {key}*/}
      {/*        </Table.HeaderCell>*/}
      {/*      ))}*/}
      {/*    </Table.Row>*/}
      {/*  </Table.Header>*/}

      {/*  <Table.Body>*/}
      {/*    {oppgave.behandling.opplysning.map((opplysning) => (*/}
      {/*      <Table.Row key={opplysning.id}>*/}
      {/*        {Object.entries(opplysning).map(([key, value]) => (*/}
      {/*          <Table.DataCell key={key}>*/}
      {/*            {BehandlingOpplysning(key as keyof IBehandlingOpplysning, value)}*/}
      {/*          </Table.DataCell>*/}
      {/*        ))}*/}
      {/*      </Table.Row>*/}
      {/*    ))}*/}
      {/*  </Table.Body>*/}
      {/*</Table>*/}
    </div>
  );
}

// function BehandlingOpplysning<T extends keyof IBehandlingOpplysning>(
//   key: T,
//   value: IBehandlingOpplysning[T],
// ) {
//   switch (key) {
//     case "id":
//       return <>{value}</>;
//     case "opplysningstype":
//       return <>{value}</>;
//     case "verdi":
//       return <>{value}</>;
//     case "status":
//       return <>{value}</>;
//     case "gyldigFraOgMed":
//       return <>{value ? <>{new Date(value as string).toLocaleString("no-NO")}</> : "Uendelig"}</>;
//     case "gyldigTilOgMed":
//       return <>{value ? <>{new Date(value as string).toLocaleString("no-NO")}</> : "Uendelig"}</>;
//     case "datatype":
//       return <>{value}</>;
//     case "redigerbar":
//       return <>{value}</>;
//     case "utledetAv":
//       return undefined;
//
//     default:
//       return <>{value}</>;
//   }
// }
