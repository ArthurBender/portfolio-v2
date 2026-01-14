import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import type { Skill } from "../types";


const AngleTick = ({ payload, x, y }: any) => {
  const fontSize = Math.max(10, Math.min(16, screen.width / 30));
  console.log(fontSize)

  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      dominantBaseline="middle"
      style={{fontSize}}
      fill="var(--color-text)"
    >
      {payload.value}
    </text>
  )
};

const GraphSkillsView = ({ content }: { content: Skill[] }) => {
  return (
    <ResponsiveContainer width="100%" maxHeight={400} style={{ pointerEvents: 'none' }} aspect={1}>
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
        <PolarAngleAxis dataKey="name" tick={<AngleTick />}/>

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