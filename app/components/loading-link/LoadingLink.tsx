import { Loader } from "@navikt/ds-react";
import { PropsWithChildren } from "react";
import { Link, LinkProps, useNavigation } from "react-router";

export function LoadingLink(props: PropsWithChildren<LinkProps>) {
  const navigation = useNavigation();

  const isNavigatingToThisLink =
    navigation.state === "loading" && navigation.location?.pathname === props.to;

  return (
    <Link to={props.to} className={props.className} viewTransition>
      {props.children}
      {isNavigatingToThisLink && <Loader size={"xsmall"} />}
    </Link>
  );
}
