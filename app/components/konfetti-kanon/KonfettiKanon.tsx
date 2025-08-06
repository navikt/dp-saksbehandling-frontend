import confetti from "canvas-confetti";
import { useEffect, useRef } from "react";

import styles from "./KonfettiKanon.module.css";

export function KonfettiKanon() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const minKonfetti = useRef<ReturnType<typeof confetti.create>>(null!);
  useEffect(() => {
    if (canvasRef.current) {
      minKonfetti.current = confetti.create(canvasRef.current, {
        resize: true,
        useWorker: true,
      });
    }
  }, []);

  function tomorrowWorld() {
    const varighet = Date.now() + 1000;
    renderKonfetti(varighet);
  }

  function renderKonfetti(kjøretid: number) {
    const konfigurasjon = {
      particleCount: 2,
      angle: 60,
      spread: 55,
      scalar: 1.2,
      drift: 0.5,
      decay: 0.96,
      colors: ["#FFAB34", "#FEA8DD", "#3983F3", "#C8304E", "#FEFD3B"],
    };

    confetti({ ...konfigurasjon, angle: 60, origin: { x: 0, y: 0.7 } });
    confetti({ ...konfigurasjon, angle: 120, origin: { x: 1, y: 0.7 } });

    if (Date.now() < kjøretid) {
      requestAnimationFrame(() => renderKonfetti(kjøretid));
    }
  }

  return (
    <>
      <button className={styles.tada} onClick={() => tomorrowWorld()}>
        🎉
      </button>

      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </>
  );
}
