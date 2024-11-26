import confetti from "canvas-confetti";
import { useEffect, useRef } from "react";

import styles from "./KonfettiKanon.module.css";

export function KonfettiKanon() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const myConfetti = useRef<ReturnType<typeof confetti.create>>(null!);

  useEffect(() => {
    if (canvasRef.current) {
      myConfetti.current = confetti.create(canvasRef.current, {
        resize: true,
        useWorker: true,
      });
    }
  }, []);

  function fyreFestival() {
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }

  function fire(particleRatio: number, opts: confetti.Options) {
    const count = 200;
    const defaults = {
      origin: { y: 0.5 },
    };

    myConfetti.current({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  return (
    <>
      <button className={styles.tada} onClick={() => fyreFestival()}>
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
