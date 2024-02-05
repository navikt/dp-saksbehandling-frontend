import type { MouseEvent } from "react";
import React, { useRef } from "react";
import styles from "~/route-styles/test.module.css";

export default function Test() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  function handleResize(event: MouseEvent<HTMLDivElement>) {
    if (wrapperRef.current) {
      wrapperRef.current.style.gridTemplateColumns = `minmax(min-content, ${event.clientX}px) 20px minmax(min-content, auto)`;
    }
  }

  function handleMouseUp() {
    // @ts-ignore
    window.removeEventListener("mousemove", handleResize);
    window.removeEventListener("mouseup", handleMouseUp);
  }

  function handleMouseDown() {
    // @ts-ignore
    window.addEventListener("mousemove", handleResize);
    window.addEventListener("mouseup", handleMouseUp);
  }

  return (
    <div className={styles.container} ref={wrapperRef}>
      <div className={styles.leftColumn}>Left Column</div>
      <div
        className={styles.resizeHandle}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      ></div>
      <div className={styles.rightColumn}>Right Column</div>
    </div>
  );
}
