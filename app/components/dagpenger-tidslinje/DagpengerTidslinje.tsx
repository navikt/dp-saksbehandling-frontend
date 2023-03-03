import { BagFilled, EditFilled, People, SuccessFilled } from "@navikt/ds-icons";
import type { TimelinePeriodProps } from "@navikt/ds-react-internal";
import { Timeline } from "@navikt/ds-react-internal";

export function DagpengerTidslinje() {
  return (
    <Timeline>
      <Timeline.Row label="ARBEIDSØKER" icon={<People aria-hidden />}>
        <Timeline.Period
          start={arbeidssokerPeriode.start}
          end={arbeidssokerPeriode.end}
          status={arbeidssokerPeriode.status}
          icon={arbeidssokerPeriode.icon}
        />
      </Timeline.Row>

      <Timeline.Row label="Dagpengeperiode (Sak)" icon={<People aria-hidden />}>
        <Timeline.Period
          start={dagpengerPeriode.start}
          end={dagpengerPeriode.end}
          status={dagpengerPeriode.status}
          icon={dagpengerPeriode.icon}
        />
      </Timeline.Row>
      <Timeline.Row label="Rapportering/utbetaling" icon={<People aria-hidden />}>
        {rapportering.map((periode, index) => (
          <Timeline.Period
            key={index}
            start={periode.start}
            end={periode.end}
            status={periode.status}
            icon={periode.icon}
          />
        ))}
      </Timeline.Row>
    </Timeline>
  );
}

const arbeidssokerPeriode: TimelinePeriodProps = {
  start: new Date("Jan 1 2022"),
  end: new Date("May 1 2022"),
  status: "info",
  icon: <BagFilled aria-hidden />,
  // statusLabel: "Sykemeldt",
  // children: <div>50% sykemeldt</div>,
};

const dagpengerPeriode: TimelinePeriodProps = {
  start: new Date("Jan 1 2022"),
  end: new Date("May 1 2022"),
  status: "warning",
  icon: <EditFilled aria-hidden />,
};

const rapportering: TimelinePeriodProps[] = [
  {
    start: new Date("Jan 1 2022"),
    end: new Date("Jan 14 2022"),
    status: "success",
    icon: <SuccessFilled />,
  },
  {
    start: new Date("Jan 15 2022"),
    end: new Date("Jan 31 2022"),
    status: "success",
    icon: <SuccessFilled />,
  },
  {
    start: new Date("Feb 1 2022"),
    end: new Date("Feb 14 2022"),
    status: "success",
    icon: <SuccessFilled />,
  },
  {
    start: new Date("Feb 15 2022"),
    end: new Date("Mar 1 2022"),
    status: "success",
    icon: <SuccessFilled />,
  },
  {
    start: new Date("Mar 2 2022"),
    end: new Date("Mar 16 2022"),
    status: "success",
    icon: <SuccessFilled />,
  },
  {
    start: new Date("Mar 17 2022"),
    end: new Date("Mar 31 2022"),
    status: "success",
    icon: <SuccessFilled />,
  },
  {
    start: new Date("Apr 1 2022"),
    end: new Date("Apr 14 2022"),
    status: "success",
    icon: <SuccessFilled />,
  },
  {
    start: new Date("Apr 15 2022"),
    end: new Date("Apr 28 2022"),
    status: "success",
    icon: <SuccessFilled />,
  },
];
