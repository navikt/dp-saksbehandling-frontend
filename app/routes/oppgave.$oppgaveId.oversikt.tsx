import OpplysningForslag from "~/components/opplysning-forslag/OpplysningForslag";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export default function Oppgave() {
  const { behandling } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return <OpplysningForslag opplysninger={behandling.opplysning} />;
}
