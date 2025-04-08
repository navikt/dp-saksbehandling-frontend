import { DocPencilIcon, TasklistSendIcon } from "@navikt/aksel-icons";
import { Table, Tabs } from "@navikt/ds-react";
import { Fragment, useState } from "react";
import {
  ActionFunctionArgs,
  data,
  LoaderFunctionArgs,
  Outlet,
  useActionData,
  useLoaderData,
} from "react-router";
import invariant from "tiny-invariant";

import { KlageOpplysning } from "~/components/klage-opplysning/KlageOpplysning";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentKlageOppgave } from "~/models/saksbehandling.server";
import styles from "~/route-styles/oppgave.module.css";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.klageId, "params.klageId er påkrevd");

  const klageOppgave = await hentKlageOppgave(request, params.klageId);
  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return data(
    {
      alert,
      klageOppgave,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function Oppgave() {
  const { klageOppgave, alert } = useLoaderData<typeof loader>();
  const [aktivTab, setAktivTab] = useState("behandling");
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);
  useHandleAlertMessages(alert);

  const klageSakOpplysninger = klageOppgave.behandlingOpplysninger.filter(
    (opplysning) => opplysning.gruppe === "KLAGESAK",
  );
  const fristOpplysninger = klageOppgave.behandlingOpplysninger.filter(
    (opplysning) => opplysning.gruppe === "FRIST",
  );

  const formkravOpplysninger = klageOppgave.behandlingOpplysninger.filter(
    (opplysning) => opplysning.gruppe === "FORMKRAV",
  );

  return (
    <Fragment key={klageOppgave.id}>
      <div className={styles.oppgaveContainer}>
        {/*<OppgaveHandlinger />*/}
        <div className={styles.behandling}>
          <div className={"card"}>
            <Tabs size="medium" value={aktivTab} onChange={setAktivTab}>
              <Tabs.List>
                <Tabs.Tab value="behandling" label="Behandling" icon={<DocPencilIcon />} />
                <Tabs.Tab value="utfall" label="Utfall" icon={<TasklistSendIcon />} />
              </Tabs.List>

              <Tabs.Panel value="behandling">
                <Table className={"tabell--subtil"} zebraStripes>
                  <Table.Body>
                    <Table.Row shadeOnHover={false}>
                      <Table.HeaderCell colSpan={2}>Klagesak</Table.HeaderCell>
                    </Table.Row>
                    {klageSakOpplysninger.map((opplysning) => (
                      <Table.Row key={opplysning.id} shadeOnHover={false}>
                        <Table.DataCell>{opplysning.navn}</Table.DataCell>
                        <Table.DataCell>
                          <KlageOpplysning opplysning={opplysning} oppgaveId={klageOppgave.id} />
                        </Table.DataCell>
                      </Table.Row>
                    ))}

                    <Table.Row shadeOnHover={false}>
                      <Table.HeaderCell colSpan={2}>Frist</Table.HeaderCell>
                    </Table.Row>
                    {fristOpplysninger.map((opplysning) => (
                      <Table.Row key={opplysning.id} shadeOnHover={false}>
                        <Table.DataCell>{opplysning.navn}</Table.DataCell>
                        <Table.DataCell>
                          <KlageOpplysning opplysning={opplysning} oppgaveId={klageOppgave.id} />
                        </Table.DataCell>
                      </Table.Row>
                    ))}

                    <Table.Row shadeOnHover={false}>
                      <Table.HeaderCell colSpan={2}>Formkrav</Table.HeaderCell>
                    </Table.Row>
                    {formkravOpplysninger.map((opplysning) => (
                      <Table.Row key={opplysning.id} shadeOnHover={false}>
                        <Table.DataCell>{opplysning.navn}</Table.DataCell>
                        <Table.DataCell>
                          <KlageOpplysning opplysning={opplysning} oppgaveId={klageOppgave.id} />
                        </Table.DataCell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </Tabs.Panel>

              <Tabs.Panel value="utfall">
                <div className={"m-2"}>
                  {klageOppgave.utfallOpplysninger.map((opplysning) => (
                    <>
                      {opplysning.navn}
                      <KlageOpplysning opplysning={opplysning} oppgaveId={klageOppgave.id} />
                    </>
                  ))}
                </div>
              </Tabs.Panel>
            </Tabs>
          </div>

          <div className={"card"}>{/*<OppgaveInformasjon defaultTab="dokumenter" />*/}</div>

          <Outlet />
        </div>
      </div>
    </Fragment>
  );
}
