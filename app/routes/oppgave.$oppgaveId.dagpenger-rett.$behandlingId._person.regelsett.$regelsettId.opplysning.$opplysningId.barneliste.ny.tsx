import { ArrowLeftIcon } from "@navikt/aksel-icons";
import { Button, Heading } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  useLoaderData,
  useRouteError,
} from "react-router";

import Barneskjema from "~/components/barn/Barneskjema";
import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { OrkestratorBarn } from "~/components/orkestrator/orkestrator-barn/OrkestratorBarn";
import { useBehandling } from "~/hooks/useBehandling";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { hentOrkestratorLandListe } from "~/models/orkestrator-opplysning.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isBarneliste } from "~/utils/type-guards";
import { hentValideringForNyBarneperiode } from "~/utils/validering.util";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ request }: LoaderFunctionArgs) {
  const orkestratorLandliste = await hentOrkestratorLandListe(request);
  return { orkestratorLandliste };
}

export default function LeggTilBarn() {
  const { oppgaveId, behandlingId, regelsettId } = useTypeSafeParams();
  const { behandling } = useBehandling();
  const { orkestratorLandliste } = useLoaderData<typeof loader>();

  const barnOpplysning = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "0194881f-9428-74d5-b160-f63a4c61a23b",
  );
  const opplysningUrl = `/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/regelsett/${regelsettId}/opplysning/${barnOpplysning?.opplysningTypeId}`;
  const sisteBarneperiode = barnOpplysning?.perioder.at(-1);
  const sisteBarneperiodeVerdi =
    sisteBarneperiode && isBarneliste(sisteBarneperiode.verdi)
      ? sisteBarneperiode.verdi
      : undefined;

  const nyttBarnForm = useForm({
    method: "post",
    schema: hentValideringForNyBarneperiode(),
    submitSource: "state",
    defaultValues: {
      _action: "legg-til-barn",
      soknadBarnId: sisteBarneperiodeVerdi?.søknadBarnId,
      behandlingId: behandling.behandlingId,
      begrunnelse: "",
      gyldigFraOgMed: undefined,
      barn:
        sisteBarneperiodeVerdi?.verdi.map((barn) => ({
          fornavnOgMellomnavn: barn.fornavnOgMellomnavn || "",
          etternavn: barn.etternavn || "",
          fødselsdato: barn.fødselsdato,
          statsborgerskap: barn.statsborgerskap || "",
          kvalifiserer: (barn.kvalifiserer ? "true" : "false") as "true" | "false",
        })) || [],
    },
  });

  return (
    <main className="main">
      <LoadingLink to={opplysningUrl} className={"flex items-center gap-1 pb-2"}>
        <ArrowLeftIcon />
        Redigering av barn
      </LoadingLink>

      <div className={"card p-4"}>
        <Barneskjema
          behandlingId={behandling.behandlingId}
          sisteBarneperiode={sisteBarneperiodeVerdi}
        />
        <Heading size={"small"} spacing>
          Legg til nytt barn
        </Heading>

        <div className={"flex flex-wrap gap-4"}>
          {sisteBarneperiodeVerdi?.verdi.map((barn, index: number) => (
            <OrkestratorBarn
              key={`barn-${barn.fødselsdato}-${barn.fornavnOgMellomnavn}`}
              barnNummer={index + 1}
              barn={barn}
              orkestratorLandliste={orkestratorLandliste}
            />
          ))}
        </div>
        <div className="mt-8 flex gap-2">
          <LoadingLink to={opplysningUrl} asButtonVariant={"secondary"}>
            Avbryt
          </LoadingLink>

          <Button
            type="button"
            size="small"
            loading={nyttBarnForm.formState.isSubmitting}
            onClick={() => nyttBarnForm.submit()}
          >
            Legg til barn
          </Button>
        </div>
      </div>
    </main>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
