import { useRef } from "react";
import confetti from "canvas-confetti";
import styles from "./KonfettiKanon.module.css";

export function KonfettiKanon() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const myConfetti = confetti.create(canvasRef.current || undefined, {
    resize: true,
    useWorker: true,
  });

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

    myConfetti({
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
