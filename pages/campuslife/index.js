import React from 'react';
import Facilities from '../../components/campusLife/Facilities';
import Hostel from '../../components/campusLife/Hostel';
import StudentActivities from '../../components/campusLife/StudentActivities';
import Transport from '../../components/campusLife/Transport';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Campuslife = () => {
    return (
        <div>
            <Navbar></Navbar>
            <StudentActivities></StudentActivities>
            <Facilities></Facilities>
            <Hostel></Hostel>
            <Transport></Transport>
            <Footer></Footer>
        </div>
    );
};

export default Campuslife;