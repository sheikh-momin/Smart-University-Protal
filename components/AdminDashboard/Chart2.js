import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart2 = () => {
  const data = [
    {
      name: "Jan",
      pv: 24,
      amt: 24,
    },
    {
      name: "Feb",
      pv: 13,
      amt: 22,
    },
    {
      name: "Mar",
      pv: 98,
      amt: 22,
    },
    {
      name: "Apr",

      pv: 50,
      amt: 20,
    },
    {
      name: "May",
      pv: 70,
      amt: 21,
    },
    {
      name: "Jun",

      pv: 30,
      amt: 25,
    },
    {
      name: "Jul",
      pv: 43,
      amt: 21,
    },
    {
      name: "Aug",
      pv: 48,
      amt: 21,
    },
    {
      name: "Sep",
      pv: 53,
      amt: 21,
    },
    {
      name: "Oct",
      pv: 30,
      amt: 21,
    },
    {
      name: "Nov",
      pv: 66,
      amt: 21,
    },
    {
      name: "Dec",
      pv: 70,
      amt: 21,
    },
  ];

  return (
    <div className="grid grid-cols-1">
      <div className="bg-white rounded-xl grid grid-cols-1 py-6">
        <h2 className="text-2xl mb-3">Student Passing</h2>
        <div className="h-[400px] text-xl">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={50}
              height={100}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="2 2" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar barSize={25} dataKey="pv" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Chart2;
