import React from "react";
import { Checkbox, CheckboxGroup, Detail } from "@navikt/ds-react";
import { useSearchParams } from "@remix-run/react";
import type { IOppgaveFilter } from "../../../mocks/data/mock-filter";
import { oppgaveFilterText } from "~/components/oppgave-filter-type/OppgaveFilterText";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import styles from "./OppgaveFilterType.module.css";

interface IProps {}

export function OppgaveFilterType(props: IProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { oppgaveFilter } = useTypedRouteLoaderData("routes/_index");
  let aktiveFilter = parseUrlParamsToOppgaveFilter(searchParams);

  function oppdaterUrlSearchParams() {
    searchParams.delete("oppgaveType");

    aktiveFilter.forEach((filter) => {
      if (filter.emneknagger.length > 0) {
        filter.emneknagger.forEach((knagg) => {
          searchParams.append("oppgaveType", `${filter.id}.${knagg}`);
        });
      } else {
        searchParams.append("oppgaveType", filter.id);
      }
    });

    setSearchParams(searchParams);
  }

  function toggleOppgaveFilter(oppgaveTyper: string[]) {
    aktiveFilter = oppgaveTyper.map((id) => {
      const existingFilter = aktiveFilter.find((filter) => filter.id === id);
      return existingFilter ? existingFilter : { id, emneknagger: [] };
    });

    oppdaterUrlSearchParams();
  }

  function toggleEmneknagger(emneknagger: string[], oppgaveType: string) {
    aktiveFilter = aktiveFilter.map((filter) => {
      if (filter.id === oppgaveType) {
        return { id: filter.id, emneknagger: emneknagger };
      }
      return filter;
    });

    oppdaterUrlSearchParams();
  }

  function hentAktiveOppgaveFilter() {
    return aktiveFilter.map((filter) => filter.id);
  }

  function hentAktiveEmneknaggerForOppgaveFilter(filterId: string) {
    return aktiveFilter.find((filter) => filter.id === filterId)?.emneknagger;
  }

  function visEmneknaggerForOppgaveFilter(filter: IOppgaveFilter): boolean {
    if (filter.emneknagger.length > 0) {
      return !!aktiveFilter.find((f) => f.id === filter.id);
    }
    return false;
  }

  return (
    <>
      <CheckboxGroup
        className="kompakt-checkbox"
        size="small"
        legend={<Detail textColor="subtle">Oppgavetype</Detail>}
        onChange={(verdi) => toggleOppgaveFilter(verdi)}
        defaultValue={hentAktiveOppgaveFilter()}
      >
        {oppgaveFilter.map((filter) => (
          <div key={filter.id}>
            <Checkbox value={filter.id}>{oppgaveFilterText[filter.id]}</Checkbox>

            {visEmneknaggerForOppgaveFilter(filter) && (
              <CheckboxGroup
                legend=""
                size="small"
                className={styles.emneknaggCheckbox}
                defaultValue={hentAktiveEmneknaggerForOppgaveFilter(filter.id)}
                onChange={(verdi) => toggleEmneknagger(verdi, filter.id)}
              >
                {filter.emneknagger.map((knagg) => (
                  <Checkbox key={knagg} value={knagg}>
                    {oppgaveFilterText[knagg]}
                  </Checkbox>
                ))}
              </CheckboxGroup>
            )}
          </div>
        ))}
      </CheckboxGroup>
    </>
  );
}

function parseUrlParamsToOppgaveFilter(searchParams: URLSearchParams): IOppgaveFilter[] {
  const oppgaveFilter: IOppgaveFilter[] = [];
  for (const [, value] of searchParams.entries()) {
    if (value.includes(".")) {
      const string = value.split(".");
      const oppgaveId = string[0];
      const emneknagg = string[1];

      const existingFilterIndex = oppgaveFilter.findIndex((filter) => filter.id === oppgaveId);
      if (existingFilterIndex !== -1) {
        oppgaveFilter[existingFilterIndex].emneknagger.push(emneknagg);
      } else {
        oppgaveFilter.push({ id: oppgaveId, emneknagger: [emneknagg] });
      }
    } else {
      oppgaveFilter.push({ id: value, emneknagger: [] });
    }
  }

  return oppgaveFilter;
}