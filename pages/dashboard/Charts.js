import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Line, Tooltip, XAxis, YAxis } from 'recharts';

const Charts = () => {
    const data = [
        {
            month: "Jan",
            uv: 4000,
            payment: 2400,
            amt: 2400
        },
        {
            month: "Feb",
            uv: 3000,
            payment: 1398,
            amt: 2210
        },
        {
            month: "Mar",
            uv: 2000,
            payment: 9800,
            amt: 2290
        },
        {
            month: "Apr",
            uv: 2780,
            payment: 3908,
            amt: 2000
        },
        {
            month: "May",
            uv: 1890,
            payment: 4800,
            amt: 2181
        },
        {
            month: "Jun",
            uv: 2390,
            payment: 3800,
            amt: 2500
        },
        {
            month: "Jul",
            uv: 3490,
            payment: 4300,
            amt: 2100
        },
        {
            month: "Aug",
            uv: 3490,
            payment: 2800,
            amt: 2100
        },
        {
            month: "Sep",
            uv: 3490,
            payment: 5300,
            amt: 2100
        },
        {
            month: "Oct",
            uv: 3490,
            payment: 4500,
            amt: 2100
        },
        {
            month: "Nov",
            uv: 3490,
            payment: 3300,
            amt: 2100
        }
        ,
        {
            month: "Dec",
            uv: 3490,
            payment: 2300,
            amt: 2100
        }
    ];




    return (
        <div className='mt-16 ml-10'>

            <h2 className=' text-4xl text-center mt-5 font-semibold'>Payment Scheme</h2>

            <ComposedChart
                width={900}
                height={450}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                }}>



                <Line className='' type="monotone" dataKey="payment" stroke="#000" activeDot={{ r: 8 }} />
                <XAxis dataKey="month" stroke="#000" />
                <YAxis stroke="#000" />
                <Tooltip></Tooltip>
                {/* dataKey="amt" */}
                <Area type="monotone" fill="#000" stroke="#0000" />
                <Bar dataKey="payment" barSize={20} fill="#008080" />
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
            </ComposedChart>
        </div>
    );
};

export default Charts;