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

  // Clamp value
  const progress = Math.max(0, Math.min(10, value));
  const dash = (progress / 10) * circumference;

  return (
    <svg width={size} height={size}>
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
        strokeDasharray={`${dash} ${circumference}`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

export default CircleProgress;