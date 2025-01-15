import {
  CheckmarkCircleIcon,
  CircleIcon,
  CircleSlashIcon,
  ExclamationmarkTriangleFillIcon,
  XMarkOctagonFillIcon,
} from "@navikt/aksel-icons";
import { Heading } from "@navikt/ds-react";
import classnames from "classnames";
import { useState } from "react";

import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import { OpplysningLinje } from "~/components/opplysning-list/OpplysningLinje";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { IRegelsett } from "~/models/behandling.server";

import styles from "./Behandling.module.css";

interface IProps {
  readonly?: boolean;
}

export function Behandling(props: IProps) {
  const { behandling } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const [aktivtRegelsett, setAktivtRegelsett] = useState<IRegelsett>(behandling.vilkår[0]);
  const aktivtRegelsettOpplysninger = behandling.opplysninger.filter((opplysning) =>
    aktivtRegelsett.opplysningIder?.includes(opplysning.id),
  );

  return (
    <div>
      <Avklaringer avklaringer={behandling.avklaringer} />
      <div className={styles.container}>
        <ul className={styles.regelsettMeny}>
          {behandling.vilkår.map((regelsett, index) => (
            <li key={index}>
              <button
                className={classnames({
                  [styles.akitvtRegelsett]: aktivtRegelsett.navn === regelsett.navn,
                })}
                onClick={() => setAktivtRegelsett(regelsett)}
              >
                {renderStatusIcon(regelsett.status, regelsett.relevant)}
                {regelsett.navn}
              </button>
            </li>
          ))}

          <div className={styles.divider} />

          {behandling.fastsettelser.map((regelsett) => (
            <li key={regelsett.navn}>
              <button
                className={classnames({
                  [styles.akitvtRegelsett]: aktivtRegelsett.navn === regelsett.navn,
                })}
                onClick={() => setAktivtRegelsett(regelsett)}
              >
                {renderStatusIcon(regelsett.status, regelsett.relevant)}
                {regelsett.navn}
              </button>
            </li>
          ))}
        </ul>

        <div>
          <Heading className={styles.regelsettHeading} size="medium">
            {aktivtRegelsett.navn}
          </Heading>
          <Avklaringer avklaringer={aktivtRegelsett.avklaringer} />
          <ul className={styles.opplysningListe}>
            {aktivtRegelsettOpplysninger.map((opplysning) => (
              <OpplysningLinje
                key={`${opplysning.id}`}
                opplysning={opplysning}
                readonly={props.readonly}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function renderStatusIcon(status: IRegelsett["status"], relevant: boolean) {
  if (!relevant) {
    return <CircleSlashIcon fontSize="1.5rem" />;
  }

  switch (status) {
    case "Info":
      return <CircleIcon fontSize="1.5rem" color={"var(--a-blue-500)"} />;
    case "Oppfylt":
      return <CheckmarkCircleIcon fontSize="1.5rem" color={"var(--a-green-500)"} />;
    case "IkkeOppfylt":
      return <XMarkOctagonFillIcon fontSize="1.5rem" color={"var(--a-red-500)"} />;
    case "HarAvklaring":
      return <ExclamationmarkTriangleFillIcon fontSize="1.5rem" color={"var(--a-orange-500)"} />;
  }
}
