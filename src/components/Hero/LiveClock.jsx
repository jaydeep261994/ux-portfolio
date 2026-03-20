import { useState, useEffect } from "react";

export default function LiveClock({ className = "w-4 h-4" }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const secondAngle = seconds * 6; // 360 / 60
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = hours * 30 + minutes * 0.5;

  const cx = 6;
  const cy = 6;
  const hourLen = 2.2;
  const minLen = 3.2;
  const secLen = 3.6;

  const toRad = (deg) => ((deg - 90) * Math.PI) / 180;

  const hourX = cx + hourLen * Math.cos(toRad(hourAngle));
  const hourY = cy + hourLen * Math.sin(toRad(hourAngle));
  const minX = cx + minLen * Math.cos(toRad(minuteAngle));
  const minY = cy + minLen * Math.sin(toRad(minuteAngle));
  const secX = cx + secLen * Math.cos(toRad(secondAngle));
  const secY = cy + secLen * Math.sin(toRad(secondAngle));

  return (
    <svg
      className={className}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="6"
        cy="6"
        r="4.5"
        stroke="#9E9E9E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1={cx}
        y1={cy}
        x2={hourX}
        y2={hourY}
        stroke="#9E9E9E"
        strokeLinecap="round"
        strokeWidth="1"
      />
      <line
        x1={cx}
        y1={cy}
        x2={minX}
        y2={minY}
        stroke="#9E9E9E"
        strokeLinecap="round"
        strokeWidth="0.75"
      />
      <line
        x1={cx}
        y1={cy}
        x2={secX}
        y2={secY}
        stroke="#9E9E9E"
        strokeLinecap="round"
        strokeWidth="0.35"
      />
    </svg>
  );
}
