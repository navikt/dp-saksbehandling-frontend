import { Form, useActionData } from "@remix-run/react";
import { Alert, BodyLong, Button, TextField } from "@navikt/ds-react";
import styles from "~/route-styles/vilkaar.module.css";
import classNames from "classnames";
import { type ActionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { useEffect } from "react";
import { hentPDL } from "~/models/pdl.server";

export interface Data {
  errors?: [{ message: string }];
  data: { hentPerson: { navn?: Personnavn[] } };
}

export type Personnavn = {
  fornavn: string;
  mellomnavn: string;
  etternavn: string;
};

export async function action({ request }: ActionArgs) {
  console.log("PDL SUBMIT");
  const formData = await request.formData();
  const ident = formData.get("oppslagsnummer");
  invariant(ident, "greide ikke lese formdata");

  return hentPDL(request, ident as string);
}

export default function Pdl() {
  const data = useActionData<typeof action>();
  useEffect(() => {
    if (data?.errors) {
      throw new Error(
        `PDL BLE SINT PÅ DEG, DU HAR ${data.errors.length} FEIL! Første beskjeden er: ${data.errors[0].message}`,
      );
    }
  }, [data]);
  return (
    <>
      <main className={classNames(styles.container)}>
        <div>
          <Alert variant={"warning"}>Ikke bruk denne lokalt</Alert>
          <Form key={"pdl"} method={"POST"}>
            <TextField
              type={"number"}
              name={"oppslagsnummer"}
              label={"Personnummer du vil slå opp"}
            ></TextField>
            <br />
            <Button>Slå opp</Button>
          </Form>
          <BodyLong>
            Navn:{" "}
            {data?.data.hentPerson.navn?.map((navn: Personnavn) => {
              return navn.fornavn + navn.etternavn;
            })}
          </BodyLong>
        </div>
      </main>
    </>
  );
}
