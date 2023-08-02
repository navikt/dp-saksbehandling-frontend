import { Form, useActionData } from "@remix-run/react";
import { BodyLong, Button, TextField } from "@navikt/ds-react";
import styles from "~/route-styles/vilkaar.module.css";
import classNames from "classnames";
import { type ActionArgs, json } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getAzureSession } from "~/utils/auth.utils.server";

export async function action({ request }: ActionArgs) {
  const session = await getAzureSession(request);

  if (!session) {
    throw new Error("Feil ved henting av sesjon");
  }
  //const pdlAdresse = "https://pdl-api.dev.intern.nav.no/graphql";
  console.log("PDL SUBMIT");
  const formData = await request.formData();
  const personnummer = formData.get("oppslagsnummer");
  invariant(personnummer, "greide ikke lese formdata");
  return json({ person: "Denne knappen gjør ingenting enda" });
}

export default function Pdl() {
  const data = useActionData<typeof action>();
  return (
    <>
      <main className={classNames(styles.container)}>
        <div>
          <Form key={"pdl"} method={"POST"}>
            <TextField
              type={"number"}
              name={"oppslagsnummer"}
              label={"Personnummer du vil slå opp"}
            ></TextField>
            <br />
            <Button>Slå opp</Button>
          </Form>
          <BodyLong>{data?.person}</BodyLong>
        </div>
      </main>
    </>
  );
}
