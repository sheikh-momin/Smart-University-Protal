import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const ChartofStudent = () => {
    const data = [
        {
            month: "Jan",
            due: 4000,
            payment: 2400,
            amt: 2400
        },
        {
            month: "Feb",
            due: 3000,
            payment: 1398,
            amt: 2210
        },
        {
            month: "Mar",
            due: 2000,
            payment: 9800,
            amt: 2290
        },
        {
            month: "Apr",
            due: 2780,
            payment: 3908,
            amt: 2000
        },
        {
            month: "May",
            due: 1890,
            payment: 4800,
            amt: 2181
        },
        {
            month: "Jun",
            due: 2390,
            payment: 3800,
            amt: 2500
        },
        {
            month: "Jul",
            due: 3490,
            payment: 4300,
            amt: 2100
        },
        {
            month: "Aug",
            due: 3490,
            payment: 2800,
            amt: 2100
        },
        {
            month: "Sep",
            due: 3490,
            payment: 5300,
            amt: 2100
        },
        {
            month: "Oct",
            due: 3490,
            payment: 4500,
            amt: 2100
        },
        {
            month: "Nov",
            due: 3490,
            payment: 3300,
            amt: 2100
        }
        ,
        {
            month: "Dec",
            due: 3490,
            payment: 2300,
            amt: 2100
        }
    ]
    return (
        <div className="bg-blue-400 rounded-xl   py-6">
      <h2 className="text-2xl mb-3 text-center text-white">Payment Scheme</h2>
      <div className="h-[220px] text-xl">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={400}
            height={220}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="000000" />
            <YAxis stroke="000000" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="payment"
              stroke="#fff"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="due" stroke="#0000FF" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
    );
};

export default ChartofStudent;