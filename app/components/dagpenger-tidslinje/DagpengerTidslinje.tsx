import { BriefcaseIcon } from "@navikt/aksel-icons";
import { Timeline } from "@navikt/ds-react-internal";
import type { IArbeidssokerperiode } from "~/models/arbeidssoker.server";

import styles from "./DagpengerTidslinje.module.css";

interface IProps {
  arbeidssokerStatus: IArbeidssokerperiode[];
}

export function DagpengerTidslinje(props: IProps) {
  const { arbeidssokerStatus } = props;

  return (
    <Timeline className={styles.dagpengerTidslinjeKontainer}>
      {arbeidssokerStatus &&
        arbeidssokerStatus.length > 0 &&
        arbeidssokerStatus.map((periode) => (
          <Timeline.Row
            key={periode.fraOgMedDato}
            label="ARBEIDSØKER"
            icon={<BriefcaseIcon aria-hidden fontSize="1.5rem" />}
          >
            <Timeline.Period
              start={new Date(periode.fraOgMedDato)}
              end={periode.tilOgMedDato ? new Date(periode.fraOgMedDato) : new Date()}
              status="info"
              icon={<BriefcaseIcon aria-hidden fontSize="1.5rem" />}
            />
          </Timeline.Row>
        ))}
      {/* <Timeline.Row
        label="DAGPENGERPERIODE (SAK)"
        icon={<BriefcaseIcon aria-hidden fontSize="1.5rem" />}
      >
        <Timeline.Period
          start={dagpengerPeriode.start}
          end={dagpengerPeriode.end}
          status={dagpengerPeriode.status}
          icon={dagpengerPeriode.icon}
        />
      </Timeline.Row>
      <Timeline.Row
        label="RAPPOTERING/UTBETALING"
        icon={<BriefcaseIcon aria-hidden fontSize="1.5rem" />}
      >
        {rapportering.map((periode, index) => (
          <Timeline.Period
            key={index}
            start={periode.start}
            end={periode.end}
            status={periode.status}
            icon={periode.icon}
          />
        ))}
      </Timeline.Row> */}
    </Timeline>
  );
}

// const arbeidssokerPeriode: TimelinePeriodProps = {
//   start: new Date("Jan 1 2022"),
//   end: new Date("May 1 2022"),
//   status: "info",
//   icon: <BriefcaseIcon aria-hidden fontSize="1.2rem" />,
//   // statusLabel: "Sykemeldt",
//   // children: <div>50% sykemeldt</div>,
// };

// const dagpengerPeriode: TimelinePeriodProps = {
//   start: new Date("Jan 1 2022"),
//   end: new Date("May 1 2022"),
//   status: "warning",
//   icon: <PencilIcon aria-hidden fontSize="1.2rem" />,
// };

// const rapportering: TimelinePeriodProps[] = [
//   {
//     start: new Date("Jan 1 2022"),
//     end: new Date("Jan 14 2022"),
//     status: "success",
//     icon: <CheckmarkIcon fontSize="1.2rem" />,
//   },
//   {
//     start: new Date("Jan 15 2022"),
//     end: new Date("Jan 31 2022"),
//     status: "success",
//     icon: <CheckmarkIcon fontSize="1.2rem" />,
//   },
//   {
//     start: new Date("Feb 1 2022"),
//     end: new Date("Feb 14 2022"),
//     status: "success",
//     icon: <CheckmarkIcon fontSize="1.2rem" />,
//   },
//   {
//     start: new Date("Feb 15 2022"),
//     end: new Date("Mar 1 2022"),
//     status: "success",
//     icon: <CheckmarkIcon fontSize="1.2rem" />,
//   },
//   {
//     start: new Date("Mar 2 2022"),
//     end: new Date("Mar 16 2022"),
//     status: "success",
//     icon: <CheckmarkIcon fontSize="1.2rem" />,
//   },
//   {
//     start: new Date("Mar 17 2022"),
//     end: new Date("Mar 31 2022"),
//     status: "success",
//     icon: <CheckmarkIcon fontSize="1.2rem" />,
//   },
//   {
//     start: new Date("Apr 1 2022"),
//     end: new Date("Apr 14 2022"),
//     status: "success",
//     icon: <CheckmarkIcon fontSize="1.2rem" />,
//   },
//   {
//     start: new Date("Apr 15 2022"),
//     end: new Date("Apr 28 2022"),
//     status: "success",
//     icon: <CheckmarkIcon fontSize="1.2rem" />,
//   },
// ];
