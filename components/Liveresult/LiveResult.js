import React, { useEffect, useState } from 'react';
import Dashboardnav from '../../pages/dashboard/dashboardNav/Dashboardnav';
import DashboardNavbar from '../../pages/dashboard/dashboardNav/DashboardNavbar';
import Result from './Result';

const LiveResult = () => {
    const [liveResult, setliveResult] = useState([]);
    useEffect(() => {
        fetch('result.json')
            .then(res => res.json())
            .then(data => setliveResult(data))
    }, [])

    return (
        <div className='bg-zinc-300 w-full mx-5 md:mx-40 mt-5'>
            <div className="bg-slate-200 drop-shadow-lg py-3 ">
                <h1 className="text-center text-cyan-500 md:text-3xl text-lg font-bold italic font-serif">Result Archive</h1>
            </div>
            <div className='flex justify-center'>

                <div className='w-3/4'>
                    {
                        liveResult.map(result => <Result
                            key={result._id}
                            liveResult={result}
                        ></Result>)
                    }
                </div>








            </div>
        </div>
    );
};

export default LiveResult;
