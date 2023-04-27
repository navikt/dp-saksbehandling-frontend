import { useHref } from "@remix-run/react";
import type { LinkProps } from "@remix-run/react";
import React, { forwardRef } from "react";
import type { Ref } from "react";
import { useLinkClickHandler } from "react-router-dom";
import { Button, Link } from "@navikt/ds-react";

interface IProps extends LinkProps {
  as: "Link" | "Button";
  children: React.ReactElement | string;
}

export const RemixLink = forwardRef(RemixLinkComponent);

function RemixLinkComponent(
  { onClick, replace = false, state, target, to, as, children }: IProps,
  ref: Ref<HTMLAnchorElement> | undefined
) {
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
        onClick={(event) => {
          // @ts-ignore
          onClick?.(event);
          if (!event.defaultPrevented) {
            // @ts-ignore
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
    >
      {children}
    </Link>
  );
}
