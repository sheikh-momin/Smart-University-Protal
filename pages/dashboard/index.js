import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import Drawer from '../../components/Dashboard/Drawer';
import Dashboardnav from './dashboardNav/Dashboardnav';
import DashboardNavbar from './dashboardNav/DashboardNavbar';

const index = () => {
    return (
        <div className='bg-zinc-300'>
            <DashboardNavbar></DashboardNavbar>
            <div className='flex w-full'>
            <Drawer></Drawer>
            
            <Dashboard></Dashboard>
            
            </div>
        </div>
    );
};

export default index;