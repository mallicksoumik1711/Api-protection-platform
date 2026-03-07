import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from 'recharts';

const data = [
  { name: 'Mon', requests: 1200 },
  { name: 'Tue', requests: 2100 },
  { name: 'Wed', requests: 1800 },
  { name: 'Thu', requests: 2600 },
  { name: 'Fri', requests: 2400 },
  { name: 'Sat', requests: 1900 },
  { name: 'Sun', requests: 2800 },
];

export default function PremiumWeeklyBarChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{ top: 24, right: 30, left: -10, bottom: 20 }}
      >
        {/* Very subtle grid */}
        <CartesianGrid 
          strokeDasharray="3 6" 
          stroke="rgba(255,255,255,0.04)" 
          vertical={false} 
        />

        {/* Elegant axes */}
        <XAxis
          dataKey="name"
          tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 13, fontWeight: 500 }}
          axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
          tickLine={false}
          dy={12}
        />
        <YAxis
          tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 13, fontWeight: 500 }}
          axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
          tickLine={false}
          dx={-8}
          tickFormatter={(value) => `${value.toLocaleString()}`}
        />

        {/* Premium tooltip */}
        <Tooltip
          cursor={{ fill: 'rgba(255,255,255,0.04)' }}
          contentStyle={{
            backgroundColor: 'rgba(15, 23, 42, 0.96)',
            border: '1px solid rgba(255,255,255,0.09)',
            borderRadius: '12px',
            boxShadow: '0 16px 40px -10px rgba(0,0,0,0.55)',
            padding: '14px 18px',
            backdropFilter: 'blur(8px)',
          }}
          labelStyle={{ 
            color: '#e2e8f0', 
            fontWeight: 600, 
            fontSize: 14,
            marginBottom: 8 
          }}
          itemStyle={{ 
            color: '#f1f5f9', 
            fontSize: 13 
          }}
          formatter={(value) => [`${value.toLocaleString()} requests`, '']}
        />

        {/* Optional legend – clean & subtle */}
        <Legend 
          wrapperStyle={{ 
            paddingTop: 16,
            color: 'rgba(255,255,255,0.75)',
            fontSize: 13,
            fontWeight: 500 
          }} 
          iconType="circle"
          iconSize={10}
        />

        {/* Premium bar style */}
        <Bar
          dataKey="requests"
          name="Weekly Requests"
          fill="#1e293b"                   // Deep violet base
          radius={[10, 10, 0, 0]}         // Rounded tops – very elegant
          barSize={36}                     // Slightly wider for premium feel
          stroke="#334155"                 // Lighter stroke for glow
          strokeWidth={1}
        >
          {/* Optional: subtle label on top of bars */}
          <LabelList
            dataKey="requests"
            position="top"
            offset={12}
            fill="rgba(255,255,255,0.75)"
            fontSize={12}
            fontWeight={500}
            formatter={(value) => value >= 2000 ? value.toLocaleString() : ''}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}