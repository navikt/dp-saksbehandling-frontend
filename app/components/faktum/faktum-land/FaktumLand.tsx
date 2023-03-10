import React from "react";

import type { IFaktum } from "../Faktum";
import type { ILandFaktum } from "~/models/faktum.server";
import { getCountryName } from "~/utils/country.utils";
import { Select } from "@navikt/ds-react";

export interface IDropdownOption {
  value: string;
  label: string;
}

export function FaktumLand({ faktum }: IFaktum<ILandFaktum>) {
  const sortByLabel = (optionA: IDropdownOption, optionB: IDropdownOption) => {
    if (optionA.label === optionB.label) return 0;
    return optionA.label > optionB.label ? 1 : -1;
  };

  const options = faktum.gyldigeLand
    .map((code) => ({
      value: code,
      label: getCountryName(code, "nb"),
    }))
    .sort(sortByLabel);

  return (
    <div>
      <Select label={faktum.beskrivendeId} size="medium" value={faktum.svar}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </div>
  );
}
