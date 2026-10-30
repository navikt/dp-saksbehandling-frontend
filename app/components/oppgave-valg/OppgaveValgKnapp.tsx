import { Button, Tooltip } from "@navikt/ds-react";
import type { ReactNode } from "react";
import { Link } from "react-router";

interface HandlingProps {
  label: string;
  icon: ReactNode;
  loading: boolean;
}

export type OppgaveValgHandling = HandlingProps &
  ({ to: string; onClick?: never } | { onClick: () => void; to?: never });

interface Props {
  handling: OppgaveValgHandling;
  iconOnly?: boolean;
  disabled?: boolean;
}

export function OppgaveValgKnapp({ handling, iconOnly = false, disabled = false }: Props) {
  const erDeaktivert = disabled || handling.loading;
  const knappProps = {
    size: "xsmall",
    variant: "tertiary-neutral",
    loading: handling.loading,
    icon: handling.icon,
    "aria-label": handling.label,
    className: "aksel--font-regular aksel--full-bredde",
  } as const;
  const innhold = !iconOnly && handling.label;
  const knapp =
    handling.to !== undefined ? (
      <Button
        {...knappProps}
        as={Link}
        to={handling.to}
        aria-disabled={erDeaktivert}
        tabIndex={erDeaktivert ? -1 : undefined}
        onClick={(event) => {
          if (erDeaktivert) {
            event.preventDefault();
          }
        }}
      >
        {innhold}
      </Button>
    ) : (
      <Button {...knappProps} type="button" onClick={handling.onClick} disabled={erDeaktivert}>
        {innhold}
      </Button>
    );

  return iconOnly ? <Tooltip content={handling.label}>{knapp}</Tooltip> : knapp;
}
