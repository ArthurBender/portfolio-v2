import { useEffect, useState } from "react";

type CircleProgressProps = {
  value: number;
  size?: number;
  backgroundStroke?: string;
  progressStroke?: string;
};

const CircleProgress = ({
  value,
  size = 120,
  backgroundStroke = "#ffffff",
  progressStroke = "var(--color-primary)",
}: CircleProgressProps) => {
  const strokeWidth = size * 0.1;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const padding = strokeWidth / 2 + 1;

  // Clamp value (0–10)
  const progress = Math.max(0, Math.min(10, value));
  const dash = (progress / 10) * circumference;

  // Animation state
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    // Trigger animation on mount
    requestAnimationFrame(() => {
      setOffset(circumference - dash);
    });
  }, [dash, circumference]);

  return (
    <svg width={size} height={size} viewBox={`${-padding} ${-padding} ${size + padding * 2} ${size + padding * 2}`}>
      {/* Outer red border */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius + strokeWidth / 2 + 0.25}
        fill="none"
        stroke={backgroundStroke}
        strokeWidth={strokeWidth * 0.3}
      />

      {/* Inner red border */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius - strokeWidth / 2 - 0.25}
        fill="none"
        stroke={backgroundStroke}
        strokeWidth={strokeWidth * 0.3}
      />

      {/* Background circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={backgroundStroke}
        strokeWidth={strokeWidth}
      />

      {/* Progress circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={progressStroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{
          transition: "stroke-dashoffset 0.8s ease-out",
        }}
      />
    </svg>
  );
};

export default CircleProgress;
