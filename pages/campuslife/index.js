import React from 'react';
import Facilities from '../../components/campusLife/Facilities';
import StudentActivities from '../../components/campusLife/StudentActivities';
import Navbar from '../../components/Navbar';

const Campuslife = () => {
    return (
        <div>
            <Navbar></Navbar>
            <StudentActivities></StudentActivities>
            <Facilities></Facilities>
        </div>
    );
};

export default Campuslife;