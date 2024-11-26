import { Button, Heading, Modal } from "@navikt/ds-react";
import { useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";

import { CoffeeLoader } from "~/components/coffee-loader/CoffeeLoader";
import styles from "~/route-styles/oppgave.module.css";
import { logger } from "~/utils/logger.utils";

export default function Kaffepause() {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function fetchCatGif() {
    try {
      setIsLoading(true);
      const response = await fetch("https://cataas.com/cat/gif");
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setImageSrc(url);
      setIsLoading(false);
    } catch (error: unknown) {
      logger.error("Error fetching cat GIF:", error as never);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchCatGif();

    // Cleanup function to revoke the object URL
    return () => {
      if (imageSrc) {
        URL.revokeObjectURL(imageSrc);
      }
    };
  }, []);

  return (
    <>
      <Modal.Header className={styles.modalCenterHeader}>
        <Heading size={"medium"}>Kaffepause ☕️</Heading>
      </Modal.Header>

      <Modal.Body className={styles.modalBody}>
        {!imageSrc ? (
          <CoffeeLoader />
        ) : (
          <>
            <Heading size="small">😽😻🙀😸😼</Heading>
            <img src={imageSrc} alt="Random cat GIF" />
          </>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button size="small" type="button" variant="primary" onClick={() => navigate(-1)}>
          {!imageSrc ? "Nok kaffe" : "Nok katt og kaffe"}
        </Button>

        {imageSrc && (
          <Button
            size="small"
            variant="secondary"
            onClick={() => fetchCatGif()}
            loading={isLoading}
          >
            Ny katt
          </Button>
        )}
      </Modal.Footer>
    </>
  );
}
