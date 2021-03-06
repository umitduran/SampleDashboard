import React, { useState, useEffect } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

const sampledata = [
  { name: "Moda", value: 1129 },
  { name: "Bilgisayar", value: 19987 },
  { name: "Telefon", value: 10129 },
  { name: "Ofis", value: 1129 }
];

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`Total Order Count ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};
export default function TopCategoryBar() {
  function randomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const [activeIndex, setActiveIndex] = useState(0);
  function onPieEnter(data, index) {
    setActiveIndex(index);
  }
  const [data, setData] = useState(sampledata);
  useEffect(() => {
    window.setInterval(() => {
      setData(
        data.map(function(obj) {
          obj.value = parseInt(Math.random() * (10000 - 1000) + 100);
          obj.fill =
            "#" +
            (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
          return obj;
        })
      );
    }, 54000);
  });
  return (
    <ResponsiveContainer aspect={1.6}>
      <PieChart>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          innerRadius={60}
          outerRadius={80}
          fill={randomColor()}
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
