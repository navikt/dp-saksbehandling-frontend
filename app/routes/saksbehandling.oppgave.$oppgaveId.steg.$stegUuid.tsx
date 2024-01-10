import type { ActionFunctionArgs } from "@remix-run/node";
import { Await, useActionData, useParams } from "@remix-run/react";
import { validationError } from "remix-validated-form";
import invariant from "tiny-invariant";
import { PDFLeser } from "~/components/pdf-leser/PDFLeser";
import type { IBehandlingStegSvar, TBehandlingStegSvartype } from "~/models/oppgave.server";
import { svarOppgaveSteg } from "~/models/oppgave.server";
import { hentValideringRegler } from "~/utils/validering.util";
import { BehandlingSteg } from "~/views/behandling-steg/BehandlingSteg";
import { hentFormattertSvar, parseMetadata } from "~/utils/steg.utils";
import { getSession } from "~/models/auth.server";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { Alert } from "@navikt/ds-react";
import styles from "~/route-styles/stegvisning.module.css";
import { isNetworkResponseSuccess } from "~/utils/type-guards";
import { Suspense } from "react";
import type { INetworkResponse } from "~/utils/types";
import type { JournalpostQuery } from "../../graphql/generated/saf/graphql";

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
  const { journalposterPromises } = useTypedRouteLoaderData(
    "routes/saksbehandling.oppgave.$oppgaveId.steg",
  );
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

      <Suspense fallback={<div>Henter arbeidsforhold</div>}>
        <Await
          resolve={journalposterPromises}
          errorElement={<div>Greide ikke laste inn journalposter 😬</div>}
        >
          {(journalpromises) => {
            const journalposter = lagJournalpostData(journalpromises);
            return (
              <>
                {journalposter?.data?.length > 0 && (
                  <div className={styles.dokumentContainer}>
                    <PDFLeser journalposter={journalposter.data} />
                  </div>
                )}
                {journalposter.errors && (
                  <div className={styles.dokumentContainer}>
                    <Alert variant="error" className="my-4">
                      En feil oppsto når vi skulle hente ut dokumentene.
                    </Alert>
                  </div>
                )}
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
}

interface IJournalposter {
  data: JournalpostQuery["journalpost"][];
  errors: boolean;
}
function lagJournalpostData(
  journalpostResponses: INetworkResponse<JournalpostQuery["journalpost"]>[],
): IJournalposter {
  const journalposter: IJournalposter = {
    data: [],
    errors: false,
  };

  for (const response of journalpostResponses) {
    if (isNetworkResponseSuccess(response) && response.data) {
      journalposter.data.push(response.data);
    } else {
      journalposter.errors = true;
    }
  }
  return journalposter;
}
