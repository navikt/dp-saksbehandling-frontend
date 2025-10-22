import { Button, type ButtonProps, Link, Loader } from "@navikt/ds-react";
import { PropsWithChildren } from "react";
import { Link as ReactRouterLink, LinkProps, useNavigation } from "react-router";

interface IProps extends LinkProps {
  asButtonVariant?: ButtonProps["variant"];
}

export function LoadingLink(props: PropsWithChildren<IProps>) {
  const navigation = useNavigation();

  const isNavigatingToThisLink =
    navigation.state === "loading" && navigation.location.pathname === props.to;

  if (props.asButtonVariant) {
    return (
      <Button
        as={ReactRouterLink}
        variant={props.asButtonVariant}
        size={"xsmall"}
        to={props.to}
        className={props.className}
        loading={isNavigatingToThisLink}
      >
        {props.children}
      </Button>
    );
  }

  return (
    <Link as={ReactRouterLink} to={props.to} className={props.className} viewTransition>
      {props.children}
      {isNavigatingToThisLink && <Loader size={"xsmall"} />}
    </Link>
  );
}
