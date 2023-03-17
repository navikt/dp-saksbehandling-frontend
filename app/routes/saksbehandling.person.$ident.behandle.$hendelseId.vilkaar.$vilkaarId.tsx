import React from "react";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import type { IVilkaar } from "~/models/Vilkaar.server";
import { mockHentVilkaar } from "~/models/Vilkaar.server";
import { invariant } from "@remix-run/router";
import styles from "~/route-styles/vilkaar.module.css";
import { FaktumComponent } from "~/components/faktum/Faktum";
import { BodyLong, Button, Heading, Textarea } from "@navikt/ds-react";
import { PDFLeser } from "~/components/pdf-leser/PDFLeser";

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
      <div className={styles.faktumContainer}>
        {vilkaar.fakta.map((faktum) => (
          <FaktumComponent key={faktum.id} faktum={faktum} />
        ))}

        <Form className={styles.vilkaarVurderingContainer}>
          <Heading size={"small"} level={"3"}>
            Vilkårsvurdering (frivilling - internt)
          </Heading>

          <BodyLong>
            Noter grunnlag for at vilkåret er oppfylt eller ikke etter § 4-3 første avsnitt - tapt
            arbeidsinntekt
          </BodyLong>

          <Textarea label={""} />

          <div className={styles.buttonContainer}>
            <Button>Vilkår oppfylt</Button>
            <Button>Vilkår ikke oppfylt</Button>
          </div>
        </Form>
      </div>

      <div>
        <PDFLeser />
      </div>
    </div>
  );
}
