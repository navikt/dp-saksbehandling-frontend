import type { ActionFunctionArgs } from "@remix-run/node";
import { useActionData, useParams } from "@remix-run/react";
import { validationError } from "remix-validated-form";
import invariant from "tiny-invariant";
import type { IBehandlingStegSvar, TBehandlingStegSvartype } from "~/models/oppgave.server";
import { svarOppgaveSteg } from "~/models/oppgave.server";
import { hentValideringRegler } from "~/utils/validering.util";
import { BehandlingSteg } from "~/views/behandling-steg/BehandlingSteg";
import { hentFormattertSvar, parseMetadata } from "~/utils/steg.utils";
import { getSession } from "~/models/auth.server";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { Alert, Tabs } from "@navikt/ds-react";
import { DatabaseIcon, FilesIcon } from "@navikt/aksel-icons";
import { DokumentOversikt } from "~/components/dokument-oversikt/DokumentOversikt";
import styles from "~/route-styles/stegvisning.module.css";
import { BehandligStegDatoer } from "~/components/behandling-steg-datoer/BehandligStegDatoer";

export async function action({ request, params }: ActionFunctionArgs) {
  invariant(params.stegUuid, `params.stegUuid er påkrevd`);
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);

  const session = await getSession(request);
  const formData = await request.formData();
  const metaData = parseMetadata<Metadata>(formData, "metadata");
  const stegUuid = params.stegUuid;

  const validering = await hentValideringRegler(metaData.svartype, metaData.id, stegUuid).validate(
    formData,
  );

  // Skjema valideres i client side, men hvis javascript er disabled så må vi kjøre validering i server side også
  if (validering.error) {
    validationError(validering.error);

    return;
  }

  const svar: IBehandlingStegSvar = {
    type: metaData.svartype,
    svar: hentFormattertSvar(validering.submittedData[stegUuid], metaData.svartype),
    begrunnelse: {
      tekst: validering.submittedData.begrunnelse,
    },
  };

  return await svarOppgaveSteg(params.oppgaveId, svar, stegUuid, session);
}

export interface Metadata {
  svartype: TBehandlingStegSvartype;
  id: string;
  stegUuid?: string;
}

export default function PersonBehandleVilkaar() {
  const { oppgave } = useTypedRouteLoaderData("routes/saksbehandling.oppgave.$oppgaveId");
  const actionResponse = useActionData<typeof action>();

  const readonly = oppgave.tilstand !== "TilBehandling";
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
        <BehandlingSteg steg={steg} readonly={readonly} />
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
          <BehandligStegDatoer />
        </Tabs.Panel>
        <Tabs.Panel className={styles.tabPanel} value="dokumenter">
          <DokumentOversikt />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
