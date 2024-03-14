import type { ActionFunctionArgs } from "@remix-run/node";
import { useActionData, useParams } from "@remix-run/react";
import invariant from "tiny-invariant";
import type { IOpplysning } from "~/models/oppgave.server";
import { svarOppgaveOpplysning } from "~/models/oppgave.server";
import { OppgaveSteg } from "~/components/oppgave-steg/OppgaveSteg";
import { getSession } from "~/models/auth.server";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { Alert, Tabs } from "@navikt/ds-react";
import { DatabaseIcon, FilesIcon } from "@navikt/aksel-icons";
import { DokumentOversikt } from "~/components/dokument-oversikt/DokumentOversikt";
import styles from "~/route-styles/stegvisning.module.css";
import { OppgaveOpplysninger } from "~/components/oppgave-opplysninger/OppgaveOpplysninger";
import { hentValideringRegler } from "~/utils/validering.util";
import { parseSkjemadata } from "~/utils/steg.utils";
import { validationError } from "remix-validated-form";
import { isNetworkResponseError } from "~/utils/type-guards";
import { oppgaveErFerdigBehandlet } from "~/routes/saksbehandling.oppgave.$oppgaveId";

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

  const mockPerson = { navn: "Donald Duck", ident: "12345678910" };

  return (
    <div className={styles.container}>
      <div className={styles.stegContainer}>
        <OppgaveSteg steg={steg} readonly={oppgaveErFerdigBehandlet(oppgave)} />

        {isNetworkResponseError(actionResponse) && (
          <Alert
            className="my-4"
            variant="error"
          >{`${actionResponse.error.statusCode} ${actionResponse.error.statusText}`}</Alert>
        )}
      </div>

      <Tabs defaultValue="opplysninger" className={styles.tabsContainer}>
        <Tabs.List>
          <Tabs.Tab
            value="opplysninger"
            label="Opplysninger"
            icon={<DatabaseIcon title="Opplysninger" />}
          />
          <Tabs.Tab value="dokumenter" label="Dokumenter" icon={<FilesIcon title="Dokumenter" />} />
        </Tabs.List>

        <Tabs.Panel className={styles.tabPanel} value="opplysninger">
          <OppgaveOpplysninger opplysninger={mockOppgaveOpplysninger} person={mockPerson} />
        </Tabs.Panel>

        <Tabs.Panel className={styles.tabPanel} value="dokumenter">
          <DokumentOversikt />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

const mockOppgaveOpplysninger: IOpplysning[] = [
  {
    opplysningNavn: "Faktisk søknadsdato",
    dataType: "LocalDate",
    status: "Faktum",
    svar: {
      verdi: "2024-02-11",
    },
  },
  {
    opplysningNavn: "Søknadsdato",
    dataType: "LocalDate",
    status: "Faktum",
    svar: {
      verdi: "2024-02-11",
    },
  },
  {
    opplysningNavn: "Virkningsdato",
    dataType: "LocalDate",
    status: "Faktum",
    svar: {
      verdi: "2024-02-14",
    },
  },
];
