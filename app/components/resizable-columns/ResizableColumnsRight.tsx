import { PropsWithChildren } from "react";

import { useResizableColumnsContext } from "./ResizableColumnsContext";

export function ResizableColumnsRight({ children }: PropsWithChildren) {
  const { rightRef, leftWidth, dragging } = useResizableColumnsContext();

  return (
    <div
      ref={rightRef}
      style={{
        width: `${100 - leftWidth}%`,
        transition: dragging ? "none" : "width 100ms ease-out",
      }}
    >
      {children}
    </div>
  );
}
