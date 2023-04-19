import type { LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { hentBehandling } from "~/models/behandling.server";
import { BehandlingStegMenyPunkt } from "~/components/behandling-steg-meny-punkt/BehandlingStegMenyPunkt";
import { BehandleSoknadMeny } from "~/components/behandle-soknad-meny/BehandleSoknadMeny";
import styles from "~/route-styles/behandle.module.css";

export async function loader({ params }: LoaderArgs) {
  console.log("Kjører loader() i saksbehandling.person.$ident.behandle.$behandlingId");
  invariant(params.behandlingId, `params.behandlingId er påkrevd`);
  const behandling = await hentBehandling(params.behandlingId);
  invariant(behandling, `Fant ikke behandling med id: ${params.behandlingId}`);

  return json({ behandling });
}

export default function PersonBehandle() {
  const { behandling } = useLoaderData<typeof loader>();

  return (
    <div className={styles.container}>
      <div className={styles.menyContainer}>
        <div className={styles.behandlingStegListe}>
          <ul>
            {behandling.steg.map((steg) => (
              <BehandlingStegMenyPunkt key={steg.uuid} {...steg} />
            ))}
          </ul>
        </div>

        <BehandleSoknadMeny />
      </div>
      <Outlet />
    </div>
  );
}
