import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const chart1 = () => {
  const data = [
    {
      name: "0.00",
      "new student": 40,
      "old student": 24,
      amt: 24,
    },
    {
      name: "1.00",
      "new student": 30,
      "old student": 13,
      amt: 22,
    },
    {
      name: "2.00",
      "new student": 20,
      "old student": 88,
      amt: 22,
    },
    {
      name: "3.00",
      "new student": 47,
      "old student": 39,
      amt: 20,
    },
    {
      name: "4.00",
      "new student": 50,
      "old student": 48,
      amt: 21,
    },
    {
      name: "5.00",
      "new student": 23,
      "old student": 38,
      amt: 25,
    },
    {
      name: "6.00",
      "new student": 50,
      "old student": 43,
      amt: 21,
    },
  ];
  return (
    <div className="bg-white rounded-xl  grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 py-6">
      <h2 className="text-2xl mb-3">Students Survey</h2>
      {/* <h2>chart</h2> */}
      <div className="h-[400px] text-xl">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="old student"
              stroke="#e75480"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="new student" stroke="#0000ff" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default chart1;
