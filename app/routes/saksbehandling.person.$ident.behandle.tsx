import React from "react";
import type { LoaderArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import type { IVilkaar } from "~/models/Vilkaar.server";
import { mockHentVilkaarListe } from "~/models/Vilkaar.server";
import { VilkaarListeMeny } from "~/components/vilkaar-liste-meny/VilkaarListeMeny";
import styles from "~/route-styles/behandle.module.css";

export async function loader({ request }: LoaderArgs) {
  return await mockHentVilkaarListe();
}

export default function PersonBehandle() {
  const vilkaarListe = useLoaderData<typeof loader>() as IVilkaar[];
  return (
    <div className={styles.container}>
      <VilkaarListeMeny vilkaarListe={vilkaarListe} />
      <Outlet />
    </div>
  );
}
