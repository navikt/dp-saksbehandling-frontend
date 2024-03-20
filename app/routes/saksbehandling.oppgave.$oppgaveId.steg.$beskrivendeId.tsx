import type { ActionFunctionArgs } from "@remix-run/node";
import { useActionData, useParams } from "@remix-run/react";
import invariant from "tiny-invariant";
import type { IOpplysning } from "~/models/oppgave.server";
import { svarOppgaveOpplysning } from "~/models/oppgave.server";
import { OppgaveSteg } from "~/components/oppgave-steg/OppgaveSteg";
import { getSession } from "~/models/auth.server";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { Alert } from "@navikt/ds-react";
import styles from "~/route-styles/stegvisning.module.css";
import { hentValideringRegler } from "~/utils/validering.util";
import { parseSkjemadata } from "~/utils/steg.utils";
import { validationError } from "remix-validated-form";
import { isNetworkResponseError } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);

  const session = await getSession(request);
  const formData = await request.formData();
  const skjemadata = parseSkjemadata<SkjemaMetadata>(formData, "metadata");

  const validering = await hentValideringRegler(skjemadata.opplysninger).validate(formData);

  // Skjema valideres i client side, men hvis javascript er disabled så må vi kjøre validering i server side også
  if (validering.error) {
    return validationError(validering.error);
  }

  return await svarOppgaveOpplysning(params.oppgaveId, [], session);
}

export interface SkjemaMetadata {
  opplysninger: IOpplysning[];
}

export default function OppgaveStegView() {
  const { oppgave } = useTypedRouteLoaderData("routes/saksbehandling.oppgave.$oppgaveId");
  const actionResponse = useActionData<typeof action>();

  const { beskrivendeId } = useParams();
  const steg = oppgave.steg.find((steg) => steg.beskrivendeId === beskrivendeId);

  if (!steg) {
    throw new Response(null, {
      status: 500,
      statusText: `Fant ikke steg med navn: ${beskrivendeId}`,
    });
  }

  return (
    <div className={styles.stegContainer}>
      <OppgaveSteg steg={steg} />

      {isNetworkResponseError(actionResponse) && (
        <Alert
          className="my-4"
          variant="error"
        >{`${actionResponse.error.statusCode} ${actionResponse.error.statusText}`}</Alert>
      )}
    </div>
  );
}
