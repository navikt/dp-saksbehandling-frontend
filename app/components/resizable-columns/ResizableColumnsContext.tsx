import { createContext, RefObject, useContext } from "react";

export interface ResizableColumnsContextType {
  leftRef: RefObject<HTMLDivElement | null>;
  rightRef: RefObject<HTMLDivElement | null>;
  leftWidth: number;
}

export const ResizableColumnsContext = createContext<ResizableColumnsContextType | null>(null);

export function useResizableColumnsContext() {
  const context = useContext(ResizableColumnsContext);
  if (!context) {
    throw new Error("ResizableColumns components must be used within ResizableColumns");
  }
  return context;
}
