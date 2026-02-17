import { Button, type ButtonProps, Link, Loader } from "@navikt/ds-react";
import { PropsWithChildren, ReactNode } from "react";
import { Link as ReactRouterLink, LinkProps, useNavigation } from "react-router";

interface IProps extends LinkProps {
  asButtonVariant?: ButtonProps["variant"];
  buttonSize?: ButtonProps["size"];
  icon?: ReactNode;
  tittelPåHover?: string;
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
        size={props.buttonSize ? props.buttonSize : "xsmall"}
        title={props.tittelPåHover}
        to={props.to}
        className={props.className}
        icon={props.icon}
        loading={isNavigatingToThisLink}
      >
        {props.children}
      </Button>
    );
  }

  return (
    <Link
      as={ReactRouterLink}
      to={props.to}
      className={props.className}
      title={props.tittelPåHover}
      viewTransition
    >
      {props.children}
      {isNavigatingToThisLink && <Loader size={"xsmall"} />}
    </Link>
  );
}
