import { Tabs } from "@navikt/ds-react";
import { OpplysningForslag } from "~/components/opplysning-forslag/OpplysningForslag";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export default function Oppgave() {
  const { behandling } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return (
    <Tabs.Panel value="oversikt">
      <OpplysningForslag opplysninger={behandling.opplysning} />
    </Tabs.Panel>
  );
}
