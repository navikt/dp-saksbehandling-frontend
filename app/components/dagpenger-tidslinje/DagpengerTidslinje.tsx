import { BriefcaseIcon } from "@navikt/aksel-icons";
import { Alert } from "@navikt/ds-react";
import { Timeline } from "@navikt/ds-react-internal";
import type { IArbeidssokerStatus } from "~/models/arbeidssoker.server";
import styles from "./DagpengerTidslinje.module.css";
import type { INetworkResponse } from "~/utils/types";
import { isNetworkResponseSuccess } from "~/utils/type-guards";
import { useState } from "react";
import { FormattedDate } from "~/components/FormattedDate";

interface IProps {
  arbeidssokerStatusResponse: INetworkResponse<IArbeidssokerStatus>;
}

export function DagpengerTidslinje(props: IProps) {
  const { arbeidssokerStatusResponse } = props;
  const [activePeriod, setActivePeriod] = useState("");

  if (arbeidssokerStatusResponse.status === "error") {
    if (arbeidssokerStatusResponse.error.statusCode === 401) {
      return (
        <Alert
          variant="error"
          className="my-2"
        >{`${arbeidssokerStatusResponse.error.statusCode}: Denne bruker har ikke tilgang til å hente arbeidssøker status. Mangler Gosys-Nasjonal-gruppen rollen.`}</Alert>
      );
    }

    return (
      <Alert
        variant="error"
        className="my-2"
      >{`${arbeidssokerStatusResponse.error.statusCode}: ${arbeidssokerStatusResponse.error.statusText}`}</Alert>
    );
  }

  if (isNetworkResponseSuccess(arbeidssokerStatusResponse)) {
    if (arbeidssokerStatusResponse.data?.arbeidssokerperioder.length === 0) {
      return <></>;
    }

    return (
      <>
        <Timeline className={styles.dagpengerTidslinjeKontainer}>
          <Timeline.Row label="ARBEIDSSØKER" icon={<BriefcaseIcon aria-hidden fontSize="1.5rem" />}>
            {arbeidssokerStatusResponse.data?.arbeidssokerperioder.map((periode) => (
              <Timeline.Period
                key={periode.id}
                start={new Date(periode.fraOgMedDato)}
                end={periode.tilOgMedDato ? new Date(periode.tilOgMedDato) : new Date()}
                status="info"
                onSelectPeriod={() => setActivePeriod(periode.id)}
                isActive={activePeriod === periode.id}
                id={periode.id}
                aria-controls="timeline-panel"
                icon={<BriefcaseIcon aria-hidden fontSize="1.5rem" />}
              />
            ))}
          </Timeline.Row>

          <Timeline.Zoom>
            <Timeline.Zoom.Button label="6 mnd" interval="month" count={6} />
            <Timeline.Zoom.Button label="12 mnd" interval="month" count={12} />
            <Timeline.Zoom.Button label="36 mnd" interval="month" count={36} />
          </Timeline.Zoom>
        </Timeline>
        {activePeriod && (
          <div aria-controls={activePeriod} id="timeline-panel" className="mt-8">
            {(() => {
              const periode = arbeidssokerStatusResponse.data?.arbeidssokerperioder.find(
                (p) => p.id === activePeriod,
              );

              return (
                <>
                  Valgt periode:{" "}
                  {periode && (
                    <>
                      fra <FormattedDate date={periode.fraOgMedDato} />
                    </>
                  )}{" "}
                  {periode && periode.tilOgMedDato && (
                    <>
                      {" "}
                      - til <FormattedDate date={periode.tilOgMedDato} />
                    </>
                  )}
                </>
              );
            })()}
          </div>
        )}
      </>
    );
  }
}
