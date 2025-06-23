import { PropsWithChildren } from "react";

import { useResizableColumnsContext } from "./ResizableColumnsContext";

export function ResizableColumnsRight({ children }: PropsWithChildren) {
  const { rightRef, leftWidth } = useResizableColumnsContext();

  return (
    <div ref={rightRef} style={{ width: `${100 - leftWidth}%` }}>
      {children}
    </div>
  );
}
