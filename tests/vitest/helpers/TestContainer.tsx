import { unstable_createRemixStub } from "@remix-run/testing";
import { type PropsWithChildren } from "react";

interface IProps {
  action?: any;
  loader?: any;
}

interface IRemixStubProps {
  path: string;
  element: React.ReactElement;
  action?: any;
  loader?: any;
}

export function TestContainer(props: PropsWithChildren<IProps>) {
  const { action, loader, children } = props;

  const config: IRemixStubProps = {
    path: "/",
    element: <>{children}</>,
  };

  if (action) {
    config.action = action;
  }

  if (loader) {
    config.loader = loader;
  }

  const RemixStub = unstable_createRemixStub([config]);

  return (
    <>
      <RemixStub />
    </>
  );
}
