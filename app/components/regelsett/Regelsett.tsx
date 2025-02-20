import { BodyLong, Button, Detail, Heading, Modal, Table, Tag } from "@navikt/ds-react";

import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import { OpplysningLinje } from "~/components/opplysning-list/OpplysningLinje";
import { OrkestratorOpplysningLinje } from "~/components/orkestrator-opplysning-list/OrkestratorOpplysningLinje";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { IRegelsett } from "~/models/behandling.server";

import styles from "./Regelsett.module.css";
import { PencilWritingIcon } from "@navikt/aksel-icons";
import { useRef } from "react";

interface IProps {
  aktivtRegelsett: IRegelsett;
  readonly?: boolean;
}

export function Regelsett({ aktivtRegelsett, readonly }: IProps) {
  const { behandling, orkestratorOpplysning } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId",
  );
  const aktivtRegelsettOpplysninger = aktivtRegelsett.opplysningIder
    .map((id) => behandling.opplysninger.find((opplysning) => opplysning.id === id))
    .filter((opplysning) => opplysning !== undefined)
    .filter((opplysning) => opplysning.synlig);

  const satsOgBarnetillegg = aktivtRegelsett.navn === "4-12 Sats og barnetillegg";
  const ref = useRef<HTMLDialogElement>(null);

  const brukerOpplysninger = aktivtRegelsettOpplysninger.filter(
    (opplysning) => opplysning?.formål === "Bruker",
  );

  const registerOpplysninger = aktivtRegelsettOpplysninger.filter(
    (opplysning) => opplysning?.formål === "Register",
  );

  const legacyOpplysninger = aktivtRegelsettOpplysninger.filter(
    (opplysning) => opplysning?.formål === "Legacy",
  );

  const regelOpplysninger = aktivtRegelsettOpplysninger.filter(
    (opplysning) => opplysning?.formål === "Regel",
  );

  const mellomstegOpplysninger = aktivtRegelsettOpplysninger.filter(
    (opplysning) => opplysning?.formål === "Mellomsteg",
  );

  if (satsOgBarnetillegg) {
    return (
      <div>
        <Heading className={styles.hjemmelTittel} size="medium">
          {aktivtRegelsett.hjemmel.tittel}
        </Heading>
        <Detail textColor="subtle" className={styles.hjemmelKilde}>
          {aktivtRegelsett.hjemmel.kilde.navn}
        </Detail>

        {orkestratorOpplysning.opplysninger.length > 0 && (
          <>
            <Heading size={"xsmall"} className={styles.opplysningListeHeading}>
              Behandling
            </Heading>
            <ul className={styles.opplysningListe}>
              {orkestratorOpplysning.opplysninger[0].map((opplysning) => (
                <OrkestratorOpplysningLinje
                  key={`${opplysning.id}-${opplysning.verdi}`}
                  opplysning={opplysning}
                  readonly={readonly}
                />
              ))}
            </ul>
          </>
        )}

        {orkestratorOpplysning.opplysninger.length > 0 && (
          <>
            <Heading size={"xsmall"} className={styles.opplysningListeHeading}>
              Barn 1
            </Heading>
            <ul className={styles.opplysningListe}>
              {orkestratorOpplysning?.opplysninger[1]?.map((opplysning) => (
                <OrkestratorOpplysningLinje
                  key={`${opplysning.id}-${opplysning.verdi}`}
                  opplysning={opplysning}
                  readonly={readonly}
                />
              ))}
              <Button
                variant="primary"
                size="small"
                icon={<PencilWritingIcon title="a11y-title" fontSize="1.5rem" />}
                onClick={() => ref.current?.showModal()}
              >
                Endre
              </Button>
            </ul>
          </>
        )}

        {orkestratorOpplysning.opplysninger.length > 0 && (
          <>
            <Heading size={"xsmall"} className={styles.opplysningListeHeading}>
              Barn 2
            </Heading>
            <ul className={styles.opplysningListe}>
              {orkestratorOpplysning?.opplysninger[2]?.map((opplysning) => (
                <OrkestratorOpplysningLinje
                  key={`${opplysning.id}-${opplysning.verdi}`}
                  opplysning={opplysning}
                  readonly={readonly}
                />
              ))}
              <Button
                variant="primary"
                size="small"
                icon={<PencilWritingIcon title="a11y-title" fontSize="1.5rem" />}
                onClick={() => ref.current?.showModal()}
              >
                Endre
              </Button>
            </ul>
          </>
        )}

        <Modal ref={ref} header={{ heading: "Barn fra søknad" }}>
          <Modal.Body>
            <div>
              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell scope="col">Barn</Table.HeaderCell>
                    <Table.HeaderCell scope="col"></Table.HeaderCell>
                    <Table.HeaderCell scope="col"></Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.HeaderCell scope="row">Fornavn</Table.HeaderCell>
                    <Table.DataCell>Kvekk</Table.DataCell>
                    <Table.DataCell><Tag variant="alt1">Register</Tag></Table.DataCell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell scope="row">Etternavn</Table.HeaderCell>
                    <Table.DataCell>Kvakk</Table.DataCell>
                    <Table.DataCell><Tag variant="alt1">Register</Tag></Table.DataCell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell scope="row">Fødselsdato</Table.HeaderCell>
                    <Table.DataCell>02.10.2008</Table.DataCell>
                    <Table.DataCell><Tag variant="alt1">Register</Tag></Table.DataCell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" variant="tertiary" onClick={() => ref.current?.close()}>
              Lukk
            </Button>
            <Button type="button" variant="secondary" onClick={() => ref.current?.close()}>
              Avbryt
            </Button>
            <Button type="button" onClick={() => ref.current?.close()}>
              Lagre endringer
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  return (
    <div>
      <Heading className={styles.hjemmelTittel} size="medium">
        {aktivtRegelsett.hjemmel.tittel}
      </Heading>
      <Detail textColor="subtle" className={styles.hjemmelKilde}>
        {aktivtRegelsett.hjemmel.kilde.navn}
      </Detail>
      <Avklaringer avklaringer={aktivtRegelsett.avklaringer} />

      {brukerOpplysninger.length > 0 && (
        <>
          <Heading size={"xsmall"} className={styles.opplysningListeHeading}>
            Brukerdata
          </Heading>
          <ul className={styles.opplysningListe}>
            {brukerOpplysninger.map((opplysning) => (
              <OpplysningLinje
                key={`${opplysning.id}-${opplysning.verdi}`}
                opplysning={opplysning}
                readonly={readonly}
              />
            ))}
          </ul>
        </>
      )}

      {registerOpplysninger.length > 0 && (
        <>
          <Heading size={"xsmall"} className={styles.opplysningListeHeading}>
            Registerdata
          </Heading>
          <ul className={styles.opplysningListe}>
            {registerOpplysninger.map((opplysning) => (
              <OpplysningLinje
                key={`${opplysning.id}-${opplysning.verdi}`}
                opplysning={opplysning}
                readonly={readonly}
              />
            ))}
          </ul>
        </>
      )}

      {legacyOpplysninger.length > 0 && (
        <>
          <Heading size={"xsmall"} className={styles.opplysningListeHeading}>
            Legacy
          </Heading>
          <ul className={styles.opplysningListe}>
            {legacyOpplysninger.map((opplysning) => (
              <OpplysningLinje
                key={`${opplysning.id}-${opplysning.verdi}`}
                opplysning={opplysning}
                readonly={readonly}
              />
            ))}
          </ul>
        </>
      )}

      {mellomstegOpplysninger.length > 0 && (
        <>
          <Heading size={"xsmall"} className={styles.opplysningListeHeading}>
            Mellomsteg
          </Heading>
          <ul className={styles.opplysningListe}>
            {mellomstegOpplysninger.map((opplysning) => (
              <OpplysningLinje
                key={`${opplysning.id}-${opplysning.verdi}`}
                opplysning={opplysning}
                readonly={readonly}
              />
            ))}
          </ul>
        </>
      )}

      {regelOpplysninger.length > 0 && (
        <>
          <Heading size={"xsmall"} className={styles.opplysningListeHeading}>
            Behandling
          </Heading>
          <ul className={styles.opplysningListe}>
            {regelOpplysninger.map((opplysning) => (
              <OpplysningLinje
                key={`${opplysning.id}-${opplysning.verdi}`}
                opplysning={opplysning}
                readonly={readonly}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
