import styles from "~/route-styles/saksbehandling-index.module.css";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getSession } from "~/models/auth.server";
import { hentOppgaver } from "~/models/oppgave.server";
import { mockOppgaveFilter } from "../../mocks/data/mock-filter";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import { OppgaveFilter } from "~/components/oppgave-filter/OppgaveFilter";
import { OppgaveLagretFilter } from "~/components/oppgave-lagret-filter/OppgaveLagretFilter";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);

  const session = await getSession(request);
  const oppgaver = await hentOppgaver(session, url.search);

  return json({ oppgaver, oppgaveFilter: mockOppgaveFilter });
}

export default function Saksbehandling() {
  return (
    <main className={styles.container}>
      <div className={styles.filterMeny}>
        <OppgaveFilter />
      </div>

      <div className={styles.lagretFilter}>
        <OppgaveLagretFilter />
      </div>

      <div className={styles.oppgaveListe}>
        <OppgaveListe />
      </div>
    </main>
  );
}
