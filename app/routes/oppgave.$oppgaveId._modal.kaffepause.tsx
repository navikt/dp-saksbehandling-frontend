import { Button, Heading, Modal } from "@navikt/ds-react";
import { json } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import styles from "~/route-styles/oppgave.module.css";

export async function loader() {
  const response = await fetch("https://cataas.com/cat/gif");
  const arrayBuffer = await response.arrayBuffer();

  const base64String = Buffer.from(arrayBuffer).toString("base64");
  const mimeType = response.headers.get("content-type");

  return json({ imageSrc: `data:${mimeType};base64,${base64String}` });
}

export default function Kaffepause() {
  const navigate = useNavigate();
  const { imageSrc } = useLoaderData<typeof loader>();

  return (
    <>
      <Modal.Header className={styles.modalCenterHeader}>
        <Heading size={"medium"}>Katt til kaffen ☕️</Heading>
      </Modal.Header>

      <Modal.Body className={styles.modalBody}>
        <img src={imageSrc} alt="" />
      </Modal.Body>

      <Modal.Footer>
        <Button size="small" type="button" variant="primary" onClick={() => navigate(-1)}>
          Nok katt og kaffe
        </Button>
      </Modal.Footer>
    </>
  );
}
