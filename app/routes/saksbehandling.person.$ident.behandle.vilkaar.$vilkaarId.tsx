import React from "react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { mockHentVilkaar } from "~/models/Vilkaar.server";
import { invariant } from "@remix-run/router";
import type { LoaderArgs } from "@remix-run/node";
import type { IVilkaar } from "~/models/Vilkaar.server";
import styles from "~/route-styles/vilkaar.module.css";
import { FaktumComponent } from "~/components/faktum/Faktum";

export async function loader({ params }: LoaderArgs) {
  invariant(params.vilkaarId, `params.vilkaarId er påkrevd`);

  const vilkaar = await mockHentVilkaar(params.vilkaarId);
  invariant(vilkaar, `Fant ikke vilkår: ${params.vilkaarId}`);

  return json(vilkaar);
}

export default function PersonBehandleVilkaar() {
  const vilkaar = useLoaderData<typeof loader>() as IVilkaar;

  return (
    <div className={styles.container}>
      <div>
        {vilkaar.fakta.map((faktum) => (
          <FaktumComponent key={faktum.id} faktum={faktum} />
        ))}
      </div>
      <div>Inline PDF</div>
    </div>
  );
}
