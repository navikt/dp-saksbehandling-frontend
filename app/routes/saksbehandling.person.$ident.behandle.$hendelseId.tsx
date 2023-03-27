import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { hentBehandling } from "~/models/behandling.server";
import { invariant } from "@remix-run/router";
import { BehandlingStegMenyPunkt } from "~/components/behandling-steg-meny-punkt/BehandlingStegMenyPunkt";
import React from "react";
import styles from "~/route-styles/behandle.module.css";
import { BehandleSoknadMeny } from "~/components/behandle-soknad-meny/BehandleSoknadMeny";

export async function loader({ params }: LoaderArgs) {
  invariant(params.hendelseId, `params.hendelseID er påkrevd`);
  const behandling = await hentBehandling(params.hendelseId);
  invariant(behandling, `Fant ikke behandling med id: ${params.hendelseId}`);

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
