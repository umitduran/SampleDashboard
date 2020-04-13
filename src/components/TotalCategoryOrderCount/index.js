import React, { useState, useEffect } from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";
export default function TotalCategoryOrderCount() {
  const sampledata = [
    { name: "Kız Bebek Tulum", count: 1689, fill: "#8884d8" },
    { name: "Mickey Mouse", count: 400, fill: "#83a6ed" },
    { name: "Telefon", count: 800, fill: "#8dd1e1" },
    { name: "Bilgisayar", count: 2198, fill: "#82ca9d" },
    { name: "Ofis", count: 100, fill: "#a4de6c" }
  ];
  const style = {
    top: 0,
    left: 350,
    lineHeight: "36px"
  };
  const [data, setData] = useState(sampledata);
  useEffect(() => {
    window.setInterval(() => {
      setData(
        data.map(function(obj) {
          obj.count = parseInt(Math.random() * (2000 - 1000) + 100);
          obj.fill =
            "#" +
            (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
          return obj;
        })
      );
    }, 45000);
  });
  return (
    <RadialBarChart
      width={500}
      height={300}
      cx={150}
      cy={150}
      innerRadius={20}
      outerRadius={140}
      barSize={30}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise={true}
        dataKey="count"
      />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
  );
}
