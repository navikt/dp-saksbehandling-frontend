import type { PortableTextComponents } from "@portabletext/react";
import type { PropsWithChildren } from "react";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export const SanityPortableTextComponents: PortableTextComponents = {
  marks: {
    behandlingOpplysningReference: ({ value, children }) => (
      <BehandlingOpplysningReference value={value}>{children}</BehandlingOpplysningReference>
    ),
  },
};

export function BehandlingOpplysningReference(props: PropsWithChildren<{ value: any }>) {
  const { behandling } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const opplysning = behandling.opplysning.find(
    (o) => `opplysning.${o.navn}` === props.value.reference.textId,
  );

  return <span>{opplysning?.verdi}</span>;
}
