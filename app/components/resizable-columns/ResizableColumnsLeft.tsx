import { PropsWithChildren } from "react";

import { useResizableColumnsContext } from "./ResizableColumnsContext";

export function ResizableColumnsLeft({ children }: PropsWithChildren) {
  const { leftRef, leftWidth } = useResizableColumnsContext();

  return (
    <div ref={leftRef} style={{ width: `${leftWidth}%` }}>
      {children}
    </div>
  );
}
