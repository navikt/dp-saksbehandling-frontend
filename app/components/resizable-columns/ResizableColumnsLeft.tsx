import { PropsWithChildren } from "react";

import { useResizableColumnsContext } from "./ResizableColumnsContext";

export function ResizableColumnsLeft({ children }: PropsWithChildren) {
  const { leftRef, leftWidth, dragging } = useResizableColumnsContext();

  return (
    <div
      ref={leftRef}
      style={{
        width: `${leftWidth}%`,
        transition: dragging ? "none" : "width 100ms ease",
      }}
    >
      {children}
    </div>
  );
}
