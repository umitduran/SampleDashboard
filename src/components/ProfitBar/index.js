import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const sampledata = [
  { name: "Telefon", profit: 4000, visitorCount: 2400, totalSold: 2400 },
  { name: "Bilgisayar", profit: 3000, visitorCount: 1398, totalSold: 2210 },
  { name: "Moda", profit: 2000, visitorCount: 9800, totalSold: 2290 },
  { name: "Ofis", profit: 2780, visitorCount: 3908, totalSold: 2000 }
];

export default function ProfitBar() {
  const [data, setData] = useState(sampledata);
  useEffect(() => {
    window.setInterval(() => {
      setData(
        data.map(function(obj) {
          obj.profit = parseInt(Math.random() * (10000 - 1000) + 100);
          obj.visitorCount = parseInt(Math.random() * (10000 - 1000) + 100);
          obj.totalSold = parseInt(Math.random() * (10000 - 1000) + 100);
          return obj;
        })
      );
    }, 20000);
  });
  return (
    <BarChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="profit" fill="#ff8c1a" background={{ fill: "#ffe6cc" }} />
      <Bar
        dataKey="visitorCount"
        fill="#ff80ff"
        background={{ fill: "#ffe6ff" }}
      />
      <Bar
        dataKey="totalSold"
        fill="#339933"
        background={{ fill: "#ecf9ec" }}
      />
    </BarChart>
  );
}
