import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

import { VilkaarListeMeny } from "~/components/vilkaar-liste-meny/VilkaarListeMeny";
import { BehandleSoknadMeny } from "~/components/behandle-soknad-meny/BehandleSoknadMeny";
import type { IVilkaar } from "~/models/Vilkaar.server";
import { mockHentVilkaarListe } from "~/models/Vilkaar.server";

import type { ISanityTexts } from "~/sanity/sanity.types";
import { createClient } from "@sanity/client";
import { sanityConfig } from "~/sanity/sanity.config";
import { allTextsQuery } from "~/sanity/sanity.query";

import styles from "~/route-styles/behandle.module.css";

export interface IBehandleLoader {
  sanityTexts: ISanityTexts;
  vilkaarListe: IVilkaar[];
}

export const sanityClient = createClient(sanityConfig);

export async function loader() {
  const sanityTexts = await sanityClient.fetch<ISanityTexts>(allTextsQuery, {
    baseLang: "nb",
    lang: "nb",
  });

  const vilkaarListe = await mockHentVilkaarListe();

  return json({
    sanityTexts,
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
