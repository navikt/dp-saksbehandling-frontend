import { CalendarIcon } from "@navikt/aksel-icons";
import { BodyShort, Button, Chips, DatePicker } from "@navikt/ds-react";
import {
  endOfMonth,
  endOfWeek,
  format,
  getWeek,
  startOfMonth,
  startOfWeek,
  startOfYear,
  subMonths,
} from "date-fns";
import { nb } from "date-fns/locale";
import { useState } from "react";
import { useSearchParams } from "react-router";

type DateRange = {
  from: Date | undefined;
  to?: Date | undefined;
};

export function PeriodeVelger() {
  const [åpen, setÅpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const tom = searchParams.get("tom");
  const fom = searchParams.get("fom");

  function togglePeriode(periode?: DateRange) {
    if (!periode) {
      searchParams.delete("fom");
      searchParams.delete("tom");
      setSearchParams(searchParams);
    }

    if (periode) {
      oppdaterSearchParams(
        "fom",
        periode.from ? format(periode.from, "yyyy-MM-dd", { locale: nb }) : "",
      );
      oppdaterSearchParams(
        "tom",
        periode.to ? format(periode.to, "yyyy-MM-dd", { locale: nb }) : "",
      );
    }
  }

  function oppdaterSearchParams(key: string, value: string) {
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }
    setSearchParams(searchParams);
  }

  return (
    <div>
      <BodyShort weight={"semibold"}>Periode</BodyShort>
      <div className={"flex items-center gap-2"}>
        <Chips size={"medium"}>
          {perioder.map((periode) => {
            const periodeFom = periode.value.from
              ? format(periode.value.from, "yyyy-MM-dd")
              : undefined;
            const periodeTom = periode.value.to
              ? format(periode.value.to, "yyyy-MM-dd")
              : undefined;

            return (
              <Chips.Toggle
                key={periode.label}
                selected={fom === periodeFom && tom === periodeTom}
                onClick={() =>
                  togglePeriode(
                    fom === periodeFom && tom === periodeTom ? undefined : periode.value,
                  )
                }
              >
                {periode.label}
              </Chips.Toggle>
            );
          })}
        </Chips>

        <DatePicker
          onSelect={togglePeriode}
          mode="range"
          onClose={() => setÅpen(false)}
          open={åpen}
        >
          <Button
            onClick={() => setÅpen((current) => !current)}
            icon={<CalendarIcon />}
            size={"small"}
            variant={"secondary"}
          >
            Velg dager
          </Button>
        </DatePicker>
      </div>
    </div>
  );
}

interface IPerioder {
  label: string;
  value: DateRange;
}

const perioder = hentPerioder();

function hentPerioder(): IPerioder[] {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentWeek = getWeek(now, { weekStartsOn: 1, locale: nb });
  const lastMonth = subMonths(now, 1);

  // Beregn nåværende tertial (T1: jan-apr, T2: mai-aug, T3: sep-des)
  const currentMonth = now.getMonth();
  let tertialNumber: number;
  let tertialStart: Date;
  let tertialEnd: Date;

  if (currentMonth < 4) {
    tertialNumber = 1;
    tertialStart = new Date(currentYear, 0, 1);
    tertialEnd = new Date(currentYear, 3, 30);
  } else if (currentMonth < 8) {
    tertialNumber = 2;
    tertialStart = new Date(currentYear, 4, 1);
    tertialEnd = new Date(currentYear, 7, 31);
  } else {
    tertialNumber = 3;
    tertialStart = new Date(currentYear, 8, 1);
    tertialEnd = new Date(currentYear, 11, 31);
  }

  return [
    { label: "I dag", value: { from: now, to: now } },
    {
      label: `Uke ${currentWeek}`,
      value: {
        from: startOfWeek(now, { weekStartsOn: 1, locale: nb }),
        to: endOfWeek(now, { weekStartsOn: 1, locale: nb }),
      },
    },
    {
      label: format(lastMonth, "MMMM yyyy", { locale: nb }),
      value: {
        from: startOfMonth(lastMonth),
        to: endOfMonth(lastMonth),
      },
    },
    {
      label: `T${tertialNumber} ${currentYear}`,
      value: {
        from: tertialStart,
        to: tertialEnd,
      },
    },
    {
      label: `${currentYear} hittil`,
      value: {
        from: startOfYear(now),
        to: now,
      },
    },
  ];
}
