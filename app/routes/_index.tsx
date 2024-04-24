import { hentNesteOppgave, hentOppgaver, leggTilbakeOppgave } from "~/models/oppgave.server";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import { OppgaveListeMeny } from "~/components/oppgave-liste-meny/OppgaveListeMeny";
import styles from "~/route-styles/index.module.css";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);

  // const token = hentToken(request);
  const oppgaver = await hentOppgaver(request, url.search);

  return json({ oppgaver });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const aksjon = formData.get("aksjon");

  switch (aksjon) {
    case "legg-tilbake":
      const oppgaveId = formData.get("oppgaveId") as string;
      if (!oppgaveId) {
        throw new Error("Mangler oppgaveId");
      }
      return await leggTilbakeOppgave(request, oppgaveId);

    case "tildel-neste-oppave":
      const oppgave = await hentNesteOppgave(request);
      return redirect(`/oppgave/${oppgave.oppgaveId}/behandle`);

    default:
  }
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
