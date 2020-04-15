import React, { useState, useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";

const sampledata = [
  { subject: "Total Endorsement", A: 120, B: 110, fullMark: 150 },
  { subject: "Total Order Count", A: 98, B: 130, fullMark: 150 },
  { subject: "Total Profit", A: 86, B: 130, fullMark: 150 },
  { subject: "Total Sold Product", A: 99, B: 100, fullMark: 150 },
  { subject: "Total Visitor Count", A: 85, B: 90, fullMark: 150 },
  { subject: "PageView Count", A: 65, B: 85, fullMark: 150 }
];
export default function GeneralTotalCount() {
  const [data, setData] = useState(sampledata);
  useEffect(() => {
    window.setInterval(() => {
      let changeddata = data.map(function(obj) {
        obj.A = Math.random() * (150 - 20) + 20;
        obj.B = Math.random() * (150 - 20) + 20;
        obj.fullMark = Math.random() * (200 - 20) + 20;
        return obj;
      });
      setData(changeddata);
    }, 50000);
  });
  return (
    <ResponsiveContainer aspect={1.6}>
      <RadarChart outerRadius={100} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="GeneralTotalCount"
          dataKey="A"
          stroke="#993366"
          fill="#999933"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
