import { useHref } from "@remix-run/react";
import type { LinkProps } from "@remix-run/react";
import React, { forwardRef } from "react";
import type { Ref, PropsWithChildren } from "react";
import { useLinkClickHandler } from "react-router-dom";
import { Button, Link } from "@navikt/ds-react";

interface IProps extends LinkProps {
  as: "Link" | "Button";
}

export const RemixLink = forwardRef(RemixLinkComponent);

function RemixLinkComponent(
  props: PropsWithChildren<IProps>,
  ref: Ref<HTMLAnchorElement> | undefined
) {
  const { onClick, replace = false, state, target, to, as, children, className } = props;
  const href = useHref(to);
  const handleClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
  });

  if (as === "Button") {
    return (
      <Button
        href={href}
        size={"small"}
        variant={"secondary"}
        onClick={(event) => {
          /* Dette er OK å ignorere, den klager på at det er feil type 
          (Anchor i stedet for Button), og siden vi alltid sender med 
          as="a" overstyrer vi dette til å være en anchor-tag. Typene 
          bakover i designsystemet gjenspeiler ikke dette. */
          // @ts-ignore
          onClick?.(event);
          if (!event.defaultPrevented) {
            // @ts-ignore
            handleClick(event);
          }
        }}
        ref={ref}
        as="a"
        className={className || ""}
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
