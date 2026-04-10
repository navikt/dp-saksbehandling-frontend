import { ArrowLeftIcon } from "@navikt/aksel-icons";
import { Button, Heading } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { components } from "openapi/soknad-orkestrator-typer";
import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  useLoaderData,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { OrkestratorOpplysning } from "~/components/orkestrator/orkestrator-opplysning/OrkestratorOpplysning";
import { useBehandling } from "~/hooks/useBehandling";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { hentOrkestratorLandListe } from "~/models/orkestrator-opplysning.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { hentValideringForNyttBarn } from "~/utils/validering.util";

const nyttBarnOpplysninger: components["schemas"]["BarnOpplysning"][] = [
  { id: "fornavnOgMellomnavn", verdi: "", dataType: "tekst" },
  { id: "etternavn", verdi: "", dataType: "tekst" },
  { id: "fodselsdato", verdi: "", dataType: "dato" },
  { id: "oppholdssted", verdi: "", dataType: "land" },
  { id: "forsorgerBarnet", verdi: "false", dataType: "boolsk" },
  { id: "kvalifisererTilBarnetillegg", verdi: "false", dataType: "boolsk" },
  { id: "barnetilleggFom", verdi: "", dataType: "dato" },
  { id: "barnetilleggTom", verdi: "", dataType: "dato" },
  { id: "begrunnelse", verdi: "", dataType: "tekst" },
];

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.barnId, "params.barnId er påkrevd");

  const orkestratorLandliste = await hentOrkestratorLandListe(request);
  return { orkestratorLandliste };
}

export default function LeggTilBarn() {
  const { oppgaveId, behandlingId, barnId } = useTypeSafeParams();
  const { behandling } = useBehandling();
  const { orkestratorLandliste } = useLoaderData<typeof loader>();

  const barnListeUrl = `/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/rediger-barn/${barnId}`;

  const nyttBarnForm = useForm({
    method: "post",
    schema: hentValideringForNyttBarn(),
    submitSource: "state",
    defaultValues: {
      _action: "legg-til-barn",
      soknadBarnId: barnId,
      behandlingId: behandling.behandlingId,
      fornavnOgMellomnavn: "",
      etternavn: "",
      fodselsdato: undefined,
      oppholdssted: "",
      forsorgerBarnet: undefined as "true" | "false" | undefined,
      kvalifisererTilBarnetillegg: undefined as "true" | "false" | undefined,
      barnetilleggFom: undefined,
      barnetilleggTom: undefined,
      begrunnelse: "",
    },
  });

  return (
    <main className="main">
      <LoadingLink to={barnListeUrl} className={"flex items-center gap-1 pb-2"}>
        <ArrowLeftIcon />
        Redigering av barn
      </LoadingLink>

      <div className={"card p-4"}>
        <Heading size={"small"} spacing>
          Legg til nytt barn
        </Heading>

        <div className={"flex flex-col gap-4"}>
          {nyttBarnOpplysninger.map((opplysning) => (
            <OrkestratorOpplysning
              key={opplysning.id}
              opplysning={opplysning}
              formScope={nyttBarnForm.scope(opplysning.id)}
              orkestratorLandliste={orkestratorLandliste}
            />
          ))}
        </div>

        <div className="mt-8 flex gap-2">
          <LoadingLink to={barnListeUrl} asButtonVariant={"secondary"}>
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
