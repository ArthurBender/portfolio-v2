'use client';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import type { Skill } from "../../../types";

import { useTranslations } from 'next-intl';

type AngleTickProps = { payload: { value: string }; x: string | number; y: string | number };

const AngleTick = ({ payload, x, y }: AngleTickProps) => {
  const t = useTranslations();

  let fontSize = 16;
  try {
    if (window) fontSize = Math.max(10, Math.min(16, window.innerWidth / 30));
  } catch {}

  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      dominantBaseline="middle"
      style={{fontSize}}
      fill="var(--color-text)"
    >
      {t(payload.value)}
    </text>
  )
};

const GraphSkillsView = ({ content }: { content: Skill[] }) => {
  return (
    <ResponsiveContainer width="100%" height={400} minHeight={240} style={{ pointerEvents: 'none' }}>
      <RadarChart
        outerRadius="85%"
        data={content}
        margin={{
          top: 10,
          left: 40,
          right: 40,
          bottom: 10,
        }}
      >
        <PolarGrid/>
        <PolarAngleAxis dataKey="nameKey" tick={(props: AngleTickProps) => <AngleTick {...props} />}/>

        <PolarRadiusAxis
          domain={[0, 10]}
          tick={false}
          axisLine={false}
          tickLine={false}
        />
        <Radar
          name="Skills"
          dataKey="level"
          stroke="var(--color-primary)"
          fill="var(--color-primary)"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}


export default GraphSkillsView;