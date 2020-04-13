import React, { useState, useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis
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
    <RadarChart
      cx={300}
      cy={150}
      outerRadius={150}
      width={600}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="GeneralTotalCount"
        dataKey="A"
        stroke="#993366"
        fill="#999933"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}
