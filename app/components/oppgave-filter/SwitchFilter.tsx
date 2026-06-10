import { Switch } from "@navikt/ds-react";

import { useToggleSearchParam } from "~/hooks/useToggleSearchParam";

interface Props {
  param: string;
  children: React.ReactNode;
}

const SwitchFilter = ({ param, children }: Props) => {
  const { searchParams, setSearchParams } = useToggleSearchParam();
  const keyChecked = searchParams.get(param);

  function handleChange(param: string, checked: boolean) {
    if (checked) {
      searchParams.set(param, "true");
    } else {
      searchParams.delete(param);
    }
    setSearchParams(searchParams);
  }

  return (
    <Switch
      size={"small"}
      checked={keyChecked === "true"}
      onChange={(event) => handleChange(param, event.target.checked)}
    >
      {children}
    </Switch>
  );
};

export default SwitchFilter;
