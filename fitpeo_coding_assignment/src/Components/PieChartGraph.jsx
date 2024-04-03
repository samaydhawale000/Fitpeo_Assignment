import React from "react";
import { Heading } from "@chakra-ui/react";
import { PieChart, Pie, Cell, defs, linearGradient, stop, Label } from 'recharts';

export default function PieChartGraph() {
  const data = [
    { name: 'Red', value: 25 },
    { name: 'Blue', value: 45 },
    { name: 'Green', value: 40 }
  ];

  const gradientColors = [
    ['#f52f94', '#ee4fa5'], 
    ['#f1effc', '#f1effc'], 
    ['#653ee9', '#b47eed'], 
  ];

  return (
    <div
      style={{
        width: "37%",
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <div>
        <Heading fontSize="20px">Customers</Heading>
        <Heading
          fontSize="14px"
          color="#b6b6b6"
          marginTop={"6px"}
          fontWeight={"normal"}
        >
          Customers that buy products
        </Heading>
      </div>

      <div style={{display:'flex', justifyContent:'space-around'}}>
        <PieChart width={300} height={300}>
          <defs>
            {gradientColors.map((color, index) => (
              <linearGradient key={`gradient-${index}`} id={`gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color[0]}/>
                <stop offset="95%" stopColor={color[1]} />
              </linearGradient>
            ))}
          </defs>
          <Pie
            data={data}
            dataKey="value"
            cx={150}
            cy={150}
            fill="transparent"
            innerRadius={75} 
          >
            {
              data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`url(#gradient-${index})`} 
                />
              ))
            }
            <Label value="65%" fontSize='32px' fontWeight={800} color="black" position="center"/>
          </Pie>
        </PieChart>
      </div>
    </div>
  );
}
