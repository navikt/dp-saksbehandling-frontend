import type { ButtonProps } from "@navikt/ds-react";
import { Button, Link } from "@navikt/ds-react";
import type { PropsWithChildren, Ref } from "react";
import { forwardRef } from "react";
import type { LinkProps } from "react-router";
import { useHref } from "react-router";
import { useLinkClickHandler } from "react-router";

interface IProps extends LinkProps {
  asButtonVariant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  loading?: boolean;
}

export const RemixLink = forwardRef(RemixLinkComponent);

function RemixLinkComponent(
  props: PropsWithChildren<IProps>,
  ref: Ref<HTMLAnchorElement> | undefined,
) {
  const {
    onClick,
    replace = false,
    asButtonVariant,
    size,
    state,
    target,
    to,
    children,
    className,
    loading,
  } = props;
  const href = useHref(to);
  const handleClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
  });

  if (asButtonVariant) {
    return (
      <Button
        className={className || ""}
        href={href}
        size={size}
        variant={asButtonVariant}
        loading={loading}
        onClick={(event) => {
          // @ts-expect-error Dette er OK å ignorere, den klager på at det er feil type (Anchor i stedet for Button), og siden vi alltid sender med as="a" overstyrer vi dette til å være en anchor-tag. Typene bakover i designsystemet gjenspeiler ikke dette.
          onClick?.(event);
          if (!event.defaultPrevented) {
            // @ts-expect-error Se kommentar over
            handleClick(event);
          }
        }}
        ref={ref}
        as="a"
      >
        {children}
      </Button>
    );
  }

  return (
    <Link
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          handleClick(event);
        }
      }}
      ref={ref}
      className={className || ""}
    >
      {children}
    </Link>
  );
}
