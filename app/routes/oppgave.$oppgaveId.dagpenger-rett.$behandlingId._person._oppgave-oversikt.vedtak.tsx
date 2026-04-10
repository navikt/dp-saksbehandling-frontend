import { Heading } from "@navikt/ds-react";
import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  useActionData,
  useLoaderData,
  useLocation,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { MeldingOmVedtak } from "~/components/melding-om-vedtak/MeldingOmVedtak";
import { MeldingOmVedtakProvider } from "~/context/melding-om-vedtak-context";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentMeldingOmVedtakHtml } from "~/models/saksbehandling.server";
import { sanityClient } from "~/sanity/sanity.config";
import { brevMalQuery, regelmotorOpplysningQuery } from "~/sanity/sanity-queries";
import { ISanityBrevMal, ISanityRegelmotorOpplysning } from "~/sanity/sanity-types";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");

  const [meldingOmVedtak, sanityBrevMaler, sanityRegelmotorOpplysninger] = await Promise.all([
    hentMeldingOmVedtakHtml(request, params.oppgaveId),
    sanityClient.fetch<ISanityBrevMal[]>(brevMalQuery),
    sanityClient.fetch<ISanityRegelmotorOpplysning[]>(regelmotorOpplysningQuery),
  ]);

  return { sanityBrevMaler, sanityRegelmotorOpplysninger, meldingOmVedtak };
}

export default function Vedtak() {
  const location = useLocation();
  const { sanityBrevMaler, sanityRegelmotorOpplysninger, meldingOmVedtak } =
    useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <div className="flex flex-col gap-4">
      <div className={"card p-4"} key={location.key}>
        <Heading size={"small"} level={"2"} className={"mb-4"}>
          Melding om vedtak
        </Heading>

        {meldingOmVedtak && (
          <MeldingOmVedtakProvider
            meldingOmVedtak={meldingOmVedtak}
            sanityBrevMaler={sanityBrevMaler}
            sanityRegelmotorOpplysninger={sanityRegelmotorOpplysninger}
          >
            <MeldingOmVedtak />
          </MeldingOmVedtakProvider>
        )}
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return <ErrorMessageComponent error={error} />;
}
