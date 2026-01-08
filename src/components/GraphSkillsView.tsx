import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import type { Skill } from "../types";

const GraphSkillsView = ({ content }: { content: Skill[] }) => {
  return (
    <ResponsiveContainer width="100%" height={400} style={{ pointerEvents: 'none' }}>
      <RadarChart
        outerRadius="85%"
        data={content}
        margin={{
          top: 10,
          left: 100,
          right: 100,
          bottom: 10,
        }}
      >
        <PolarGrid/>
        <PolarAngleAxis dataKey="name" />

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