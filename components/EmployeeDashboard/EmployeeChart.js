import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const EmployeeChart = () => {
  const data = [
    {
      name: "student due",
      debit: 5900,
      pv: 8000,
      amt: 14000,
    },
    {
      name: "Waiver",
      debit: 8680,
      pv: 9670,
      amt: 5060,
    },
    {
      name: "Student's Clearence",
      debit: 25970,
      pv: 18580,
      amt: 13900,
    },
    {
      name: "Teacher's Salary",
      debit: 14800,
      pv: 12000,
      amt: 12280,
    },
    {
      name: "Teacher's Bonus",
      debit: 25000,
      pv: 18080,
      amt: 18000,
    },
  ];
  return (
    <div className="mt-10" style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#D1FFF3" stroke="#D1FFF3" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#C92C6D" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmployeeChart;
