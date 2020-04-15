import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
const sampledata = [
  {
    city_name: "Istanbul - Avrupa",
    city_id: 341,
    Kiz_Bebek_Tulum: 12,
    MickeyMouseKiz: 9
  },
  {
    city_name: "Istanbul - Anadolu",
    city_id: 342,
    Kiz_Bebek_Tulum: 14,
    MickeyMouseKiz: 24
  },
  {
    city_name: "Adana",
    city_id: 1,
    Kiz_Bebek_Tulum: 12,
    MickeyMouseKiz: 13
  },
  {
    city_name: "Van",
    city_id: 65,
    Kiz_Bebek_Tulum: 3,
    MickeyMouseKiz: 9
  },
  {
    city_name: "Kahramanmaras",
    city_id: 46,
    Kiz_Bebek_Tulum: 3,
    MickeyMouseKiz: 6
  }
];
export default function OrderCountByCity() {
  function randomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const [data, setData] = useState(sampledata);
  useEffect(() => {
    window.setInterval(() => {
      setData(
        data.map(function(obj) {
          obj.city_id = parseInt(Math.random() * (150 - 20) + 20);
          obj.Kiz_Bebek_Tulum = parseInt(Math.random() * (150 - 20) + 20);
          obj.MickeyMouseKiz = parseInt(Math.random() * (200 - 20) + 20);
          return obj;
        })
      );
    }, 30000);
  });
  return (
    <ResponsiveContainer aspect={1.6}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="city_name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Kiz_Bebek_Tulum"
          stroke={randomColor()}
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="MickeyMouseKiz" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
