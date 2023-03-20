import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

import { BehandleSoknadMeny } from "~/components/behandle-soknad-meny/BehandleSoknadMeny";
import { VilkaarListeMeny } from "~/components/vilkaar-liste-meny/VilkaarListeMeny";
import { mockHentVilkaarListe } from "~/models/vilkaar.server";

import styles from "~/route-styles/behandle.module.css";

export async function loader() {
  const vilkaarListe = await mockHentVilkaarListe();

  return json({
    vilkaarListe,
  });
}

export default function PersonBehandle() {
  const { vilkaarListe } = useLoaderData<typeof loader>();
  return (
    <div className={styles.container}>
      <div className={styles.menyContainer}>
        <VilkaarListeMeny vilkaarListe={vilkaarListe} />
        <BehandleSoknadMeny />
      </div>
      <Outlet />
    </div>
  );
}
