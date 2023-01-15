import React from 'react';
import Facilities from '../../components/campusLife/Facilities';
import Hostel from '../../components/campusLife/Hostel';
import StudentActivities from '../../components/campusLife/StudentActivities';
import Navbar from '../../components/Navbar';

const Campuslife = () => {
    return (
        <div>
            <Navbar></Navbar>
            <StudentActivities></StudentActivities>
            <Facilities></Facilities>
            <Hostel></Hostel>
        </div>
    );
};

export default Campuslife;