import type { ActionFunctionArgs } from "@remix-run/node";
import { useActionData, useParams } from "@remix-run/react";
import { validationError } from "remix-validated-form";
import invariant from "tiny-invariant";
import type { IOpplysningType } from "~/models/oppgave.server";
import { svarOppgaveSteg } from "~/models/oppgave.server";
import { hentValideringRegler } from "~/utils/validering.util";
import { OppgaveSteg } from "~/views/oppgave-steg/OppgaveSteg";
import { parseMetadata } from "~/utils/steg.utils";
import { getSession } from "~/models/auth.server";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { Alert, Tabs } from "@navikt/ds-react";
import { DatabaseIcon, FilesIcon } from "@navikt/aksel-icons";
import { DokumentOversikt } from "~/components/dokument-oversikt/DokumentOversikt";
import styles from "~/route-styles/stegvisning.module.css";
import { OppgaveStegDatoer } from "~/components/oppgave-steg-datoer/OppgaveStegDatoer";

export async function action({ request, params }: ActionFunctionArgs) {
  invariant(params.stegUuid, `params.stegUuid er påkrevd`);
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);

  const session = await getSession(request);
  const formData = await request.formData();
  const metaData = parseMetadata<Metadata>(formData, "metadata");
  const stegUuid = params.stegUuid;

  const validering = await hentValideringRegler("Boolean", metaData.id, stegUuid).validate(
    formData,
  );

  // Skjema valideres i client side, men hvis javascript er disabled så må vi kjøre validering i server side også
  if (validering.error) {
    validationError(validering.error);

    return;
  }

  return await svarOppgaveSteg(params.oppgaveId, stegUuid, [], session);
}

export interface Metadata {
  id: string;
  svartype?: IOpplysningType;
  stegUuid?: string;
}

export default function PersonBehandleVilkaar() {
  const { oppgave } = useTypedRouteLoaderData("routes/saksbehandling.oppgave.$oppgaveId");
  const actionResponse = useActionData<typeof action>();

  const { stegUuid } = useParams();
  const steg = oppgave.steg.find((steg) => steg.uuid === stegUuid);

  if (!steg) {
    throw new Response(null, {
      status: 500,
      statusText: `Fant ikke steg med id: ${stegUuid}`,
    });
  }
  return (
    <div className={styles.container}>
      <div className={styles.faktumContainer}>
        <OppgaveSteg steg={steg} />
        {actionResponse?.status === "error" && (
          <Alert variant="error">{`${actionResponse.error.statusCode} ${actionResponse.error.statusText}`}</Alert>
        )}
      </div>

      <Tabs defaultValue="datoer" className={styles.tabsContainer}>
        <Tabs.List>
          <Tabs.Tab value="datoer" label="Datoer" icon={<DatabaseIcon title="Datoer" />} />
          <Tabs.Tab value="dokumenter" label="Dokumenter" icon={<FilesIcon title="Dokumenter" />} />
        </Tabs.List>
        <Tabs.Panel className={styles.tabPanel} value="datoer">
          <OppgaveStegDatoer />
        </Tabs.Panel>
        <Tabs.Panel className={styles.tabPanel} value="dokumenter">
          <DokumentOversikt />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
