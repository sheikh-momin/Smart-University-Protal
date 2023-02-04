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
        <div>
            <DashboardNavbar></DashboardNavbar>
            <div className='flex'>
                <Dashboardnav></Dashboardnav>



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
