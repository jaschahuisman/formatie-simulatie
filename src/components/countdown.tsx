"use client";
import { useEffect, useState } from "react";

type Props = {
  targetDate: Date;
} & React.HTMLAttributes<HTMLSpanElement>;

function formatTimeLeft(ms: number): string {
  if (ms <= 0) return "0s";
  const totalSeconds = Math.floor(ms / 1000);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  if (h > 0) return `${h}u ${m}m ${s}s`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

export function Countdown({ targetDate, ...props }: Props) {
  const [timeLeft, setTimeLeft] = useState(() =>
    Math.max(targetDate.getTime() - Date.now(), 0)
  );

  useEffect(() => {
    const update = () => {
      setTimeLeft(Math.max(targetDate.getTime() - Date.now(), 0));
    };
    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return <span {...props}>{formatTimeLeft(timeLeft)}</span>;
}
