/* eslint-disable react/prop-types */
const HalfRadialChart = ({ value, text, fillColor = "#4CAF50" }) => {
  const radius = 50;
  const strokeWidth = 10;
  const circumference = Math.PI * radius; // Only half of the circumference for a half-circle
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width="60" height="50" viewBox="0 0 120 60">
      <path
        d={`M 10 50 A ${radius} ${radius} 0 0 1 110 50`} // Half-circle arc path
        fill="transparent"
        stroke="#E0E0E0"
        strokeWidth={strokeWidth}
      />
      <path
        d={`M 10 50 A ${radius} ${radius} 0 0 1 110 50`}
        fill="transparent"
        stroke={fillColor}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      <text
        className="font-bold"
        x="60"
        y="35"
        textAnchor="middle"
        fontSize="24"
        fill={fillColor}
      >
        {value}
      </text>
      <text
        className="text-base font-bold"
        x="60"
        y="50"
        textAnchor="middle"
        fill="#666"
      >
        {text}
      </text>
    </svg>
  );
};

export default HalfRadialChart;
