import { hentOppgaver } from "~/models/oppgave.server";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import styles from "~/route-styles/index.module.css";
import { mockOppgaveFilter } from "../../mocks/data/mock-filter";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import { OppgaveListeMeny } from "~/components/oppgave-liste-meny/OppgaveListeMeny";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);

  // const token = hentToken(request);
  const oppgaver = await hentOppgaver(request, url.search);

  return json({ oppgaver, oppgaveFilter: mockOppgaveFilter });
}

export default function Saksbehandling() {
  return (
    <div className={styles.container}>
      <aside className={styles.leftColumn}>
        <OppgaveListeMeny />
      </aside>

      <main>
        <OppgaveListe />
      </main>
    </div>
  );
}
