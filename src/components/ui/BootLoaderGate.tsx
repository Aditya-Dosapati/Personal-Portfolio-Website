"use client";

import { useEffect, useRef, useState } from "react";

type BootLoaderGateProps = {
  children: React.ReactNode;
};

type BootPhase = "checking" | "boot" | "glitch" | "done";

const BOOT_STORAGE_KEY = "aditya-portfolio-boot-v1";
const LINE_DELAY_MS = 260;

const bootLines = [
  "initializing system...",
  "loading machine learning modules...",
  "preparing application layer...",
  "connecting to data pipeline...",
  "system ready",
] as const;

export function BootLoaderGate({ children }: BootLoaderGateProps) {
  const [phase, setPhase] = useState<BootPhase>("checking");
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRefs = useRef<number[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const initTimer = window.setTimeout(() => {
      const seen = window.sessionStorage.getItem(BOOT_STORAGE_KEY) === "1";

      if (seen) {
        setPhase("done");
        return;
      }

      setPhase("boot");

      let currentLine = 0;
      const lineTimer = window.setInterval(() => {
        currentLine += 1;
        setVisibleLines(currentLine);
        setProgress(Math.min(100, Math.round((currentLine / bootLines.length) * 100)));

        if (currentLine >= bootLines.length) {
          window.clearInterval(lineTimer);

          const glitchTimer = window.setTimeout(() => {
            setPhase("glitch");
          }, 40);

          const doneTimer = window.setTimeout(() => {
            window.sessionStorage.setItem(BOOT_STORAGE_KEY, "1");
            setPhase("done");
          }, 180);

          timerRefs.current.push(glitchTimer, doneTimer);
        }
      }, LINE_DELAY_MS);

      timerRefs.current.push(lineTimer);
    }, 0);

    timerRefs.current.push(initTimer);

    return () => {
      timerRefs.current.forEach((id) => {
        window.clearTimeout(id);
        window.clearInterval(id);
      });
      timerRefs.current = [];
    };
  }, []);

  if (phase === "done") {
    return <>{children}</>;
  }

  return (
    <>
      <div className={`boot-overlay ${phase === "glitch" ? "boot-overlay-glitch" : ""}`}>
        <div className="boot-scanlines" aria-hidden="true" />

        <div className={`boot-panel ${phase === "glitch" ? "boot-panel-glitch" : ""}`}>
          <p className="boot-kicker">welcome // launching portfolio experience</p>

          <div className="boot-log-wrap">
            {bootLines.slice(0, visibleLines).map((line, index) => (
              <p
                key={line}
                className={`boot-log-line ${line === "system ready" ? "boot-ready-line" : ""}`}
                style={{ animationDelay: `${index * 55}ms` }}
              >
                <span className="boot-prompt">&gt;</span> {line}
                {index === visibleLines - 1 ? <span className="boot-cursor" aria-hidden="true" /> : null}
              </p>
            ))}
          </div>

          <div className="boot-progress-block">
            <p className="boot-progress-label">load</p>
            <p className="boot-progress-value">{progress}%</p>
          </div>
          <div className="boot-progress-track" aria-hidden="true">
            <div className="boot-progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </>
  );
}
