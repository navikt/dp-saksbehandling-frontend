import { Tabs } from "@navikt/ds-react";
import OpplysningForslag from "~/components/opplysning-forslag/OpplysningForslag";

export default function Oversikt() {
  return (
    <Tabs.Panel value="oversikt">
      <OpplysningForslag />
    </Tabs.Panel>
  );
}
