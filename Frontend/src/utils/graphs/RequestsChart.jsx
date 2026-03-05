import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Mon", requests: 1200 },
  { name: "Tue", requests: 2100 },
  { name: "Wed", requests: 1800 },
  { name: "Thu", requests: 2600 },
  { name: "Fri", requests: 2400 },
  { name: "Sat", requests: 1900 },
  { name: "Sun", requests: 2800 },
];

export default function RequestsChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorReq" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.55} />
            <stop offset="95%" stopColor="#a78bfa" stopOpacity={0.04} />
          </linearGradient>
        </defs>

        <XAxis
          dataKey="name"
          tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 13 }}
          axisLine={false}
          tickLine={false}
          dy={12}
        />
        <YAxis
          tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 13 }}
          axisLine={false}
          tickLine={false}
          dx={-8}
        />

        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(15, 15, 35, 0.94)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "12px",
            boxShadow: "0 16px 40px -10px rgba(0,0,0,0.5)",
            padding: "12px 16px",
          }}
          labelStyle={{ color: "#e0e0ff", fontWeight: 500 }}
          itemStyle={{ color: "#fff" }}
        />

        <Area
          type="monotone"
          dataKey="requests"
          stroke="#c4b5fd"
          strokeWidth={2.5}
          fill="url(#colorReq)"
          activeDot={{ r: 7, stroke: "#c4b5fd", strokeWidth: 3, fill: "#000" }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}