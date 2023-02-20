import React from 'react';
import { Legend, RadialBar, RadialBarChart, Tooltip, XAxis } from 'recharts';

const TeacherChart = () => {
    const data = [
        {
            "name": "C Programming",
            "uv": "CSE-111",     
            "enroll-student": 24,
            "fill": "#ff0000"
        },
        {
            "name": "Computer Networking",
            "uv": "CSE-123",
            "enroll-student": 45,
            "fill": "#ffa500"
        },
        {
            "name": "Database Management",
            "uv": "CSE-101",
            "enroll-student": 13,
            "fill": "#4b0082"
        },
        {
            "name": "Algorithm",
            "uv": "CSE-201",
            "enroll-student": 18,
            "fill": "#008000"
        },
        {
            "name": "Data Structure",
            "uv": "CSE-311",
            "enroll-student": 39,
            "fill": "#ee82ee"
        },
        {
            "name": "English",
            "uv": "CSE-204",
            "enroll-student": 48,
            "fill": "#d0ed57"
        },
        {
            "name": "Physics I",
            "uv": "PHY-101",
            "enroll-student": 28,
            "fill": "#0000ff"
        }
    ]

    return (
        <div className='flex justify-center '>
            <RadialBarChart
                width={860}
                height={650}
                innerRadius="30%"
                outerRadius="100%"
                data={data}
                startAngle={180}
                endAngle={0}
            >
                <RadialBar  minAngle={15} className="font-bold ml-20" label={{ fill: '#000',  }} background clockWise={true} dataKey='enroll-student' />
                <Legend   iconSize={30} width={300} height={440} layout='vertical' verticalAlign='middle' align="left" />
                {/* <XAxis></XAxis> */}
                <Tooltip />
                {/* position: 'insideStart' */}
            </RadialBarChart>
        </div>
    );
};

export default TeacherChart;