import {
  Children,
  isValidElement,
  KeyboardEvent,
  MouseEvent,
  PropsWithChildren,
  TouchEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./ResizableColumn.module.css";
import { ResizableColumnsContext } from "./ResizableColumnsContext";
import { ResizableColumnsLeft } from "./ResizableColumnsLeft";
import { ResizableColumnsRight } from "./ResizableColumnsRight";

interface ResizableColumnsProps {
  defaultLeftWidth?: number;
}

export function ResizableColumns({
  children,
  defaultLeftWidth = 50,
}: PropsWithChildren<ResizableColumnsProps>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const venstreInnholdRef = useRef<HTMLDivElement>(null);
  const hoyreInnholdRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<boolean>(false);
  const [venstreBreddeProsent, setVenstreBreddeProsent] = useState<number>(defaultLeftWidth);

  const minVenstreBreddeProsent = 37;
  const minHoyreBreddeProsent = 15;

  // Valider struktur
  const childrenArray = Children.toArray(children);
  const leftColumn = childrenArray.find(
    (child) => isValidElement(child) && child.type === ResizableColumnsLeft,
  );
  const rightColumn = childrenArray.find(
    (child) => isValidElement(child) && child.type === ResizableColumnsRight,
  );

  if (!leftColumn || !rightColumn) {
    throw new Error("ResizableColumns må ha én ResizableColumns.Left og én ResizableColumns.Right");
  }

  function handleMouseDown(
    event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>,
  ): void {
    setDragging(true);
    event.preventDefault();
  }

  function handleMouseUp(): void {
    setDragging(false);
  }

  function oppdaterBredde(posX: number): void {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    // Beregn prosentandel
    let nyVenstreBreddeProsent = (posX / containerRect.width) * 100;

    // Bruk begrensninger
    const maksVenstreBreddeProsent = 100 - minHoyreBreddeProsent;
    nyVenstreBreddeProsent = Math.max(
      minVenstreBreddeProsent,
      Math.min(maksVenstreBreddeProsent, nyVenstreBreddeProsent),
    );

    setVenstreBreddeProsent(nyVenstreBreddeProsent);
  }

  function handleMouseMove(event: globalThis.MouseEvent): void {
    if (!dragging) return;
    oppdaterBredde(event.clientX - (containerRef.current?.getBoundingClientRect().left || 0));
  }

  function handleTouchMove(event: globalThis.TouchEvent): void {
    if (!dragging) return;

    const touch = event.touches[0];
    oppdaterBredde(touch.clientX - (containerRef.current?.getBoundingClientRect().left || 0));
    event.preventDefault();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>): void {
    const steg = 1; // 1% steg for tastaturnavigasjon

    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      const retning = event.key === "ArrowLeft" ? -1 : 1;
      const maksVenstreBreddeProsent = 100 - minHoyreBreddeProsent;
      const nyVenstreBreddeProsent = Math.max(
        minVenstreBreddeProsent,
        Math.min(maksVenstreBreddeProsent, venstreBreddeProsent + steg * retning),
      );
      setVenstreBreddeProsent(nyVenstreBreddeProsent);
    }
  }

  useEffect(() => {
    if (!dragging) return;

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchend", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchend", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [dragging]);

  const contextValue = {
    leftRef: venstreInnholdRef,
    rightRef: hoyreInnholdRef,
    leftWidth: venstreBreddeProsent,
  };

  return (
    <ResizableColumnsContext.Provider value={contextValue}>
      <div ref={containerRef} className={styles.resizableContainer}>
        {leftColumn}
        <button
          className={styles.pillHandle}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          onKeyDown={handleKeyDown}
          type="button"
          aria-label="Endre bredde på panelene"
        />
        {rightColumn}
      </div>
    </ResizableColumnsContext.Provider>
  );
}

// Attach the subcomponents
ResizableColumns.Left = ResizableColumnsLeft;
ResizableColumns.Right = ResizableColumnsRight;
