import { hentOppgaver } from "~/models/oppgave.server";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import styles from "~/route-styles/index.module.css";
import { mockOppgaveFilter } from "../../mocks/data/mock-filter";
import { OppgaveFilter } from "~/components/oppgave-filter/OppgaveFilter";
import { OppgaveLagretFilter } from "~/components/oppgave-lagret-filter/OppgaveLagretFilter";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);

  // const token = hentToken(request);
  const oppgaver = await hentOppgaver(request, url.search);

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
