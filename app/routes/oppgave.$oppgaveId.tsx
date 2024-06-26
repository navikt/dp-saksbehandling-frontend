import type { LoaderFunctionArgs } from "@remix-run/node";
import { defer } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { hentOppgave } from "~/models/oppgave.server";
import { hentJournalpost } from "~/models/saf.server";
import styles from "~/route-styles/oppgave.module.css";
import { hentOppgaverForPerson } from "~/models/person.server";
import { hentBehandling } from "~/models/behandling.server";
import { OppgaveInformasjon } from "~/components/oppgave-informasjon/OppgaveInformasjon";
import { OpplysningTabell } from "~/components/opplysning-tabell/OpplysningTabell";
import { hentValideringRegler } from "~/utils/validering.util";
import { ValidatedForm } from "remix-validated-form";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const oppgave = await hentOppgave(request, params.oppgaveId);
  const behandling = await hentBehandling(request, oppgave.behandlingId);
  const oppgaverForPersonPromise = hentOppgaverForPerson(request, oppgave.person.ident);

  function hentJournalposter() {
    return Promise.all(
      oppgave.journalpostIder.map((journalpostId) => hentJournalpost(request, journalpostId)),
    );
  }

  const journalposterPromises = hentJournalposter();
  return defer({
    oppgave,
    behandling,
    oppgaverForPersonPromise,
    journalposterPromises,
  });
}

export default function Oppgave() {
  const { behandling } = useLoaderData<typeof loader>();

  return (
    <div className={styles.container}>
      <div className={styles.opplysninger}>
        <ValidatedForm
          validator={hentValideringRegler(behandling.opplysning)}
          method="post"
          className={styles.behandling}
        >
          <OpplysningTabell readonly={true} opplysninger={behandling.opplysning} />
        </ValidatedForm>
        <Outlet />
      </div>
      <OppgaveInformasjon />
    </div>
  );
}
