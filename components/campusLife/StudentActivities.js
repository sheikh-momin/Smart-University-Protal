import React from 'react';

const StudentActivities = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-center mt-10 text-teal-700 text-4xl font-bold italic font-serif'>Student Activities</h1>
            <div className="divider"></div>
            <p>The overall activities of OSA are divided into two major areas of operations:</p>
            <p className='text-xl italic '> <span className='text-2xl font-bold italic font-serif'>Campus Activities </span><br></br>

Student Orientation <br></br>
Students’ Discipline <br></br>
Student Services and Facilities <br></br>
Event Organization & Festival Celebration <br></br>
Student Organizations and Clubs activities <br></br>
Extra-curricular activities and competitions</p>
        <p  className='text-xl italic '>
        <span className='text-2xl font-bold italic font-serif'>External Activities </span>
        <br></br>
National & International Competitions <br></br>
Student Exchange Programs <br></br>
Community Service <br></br>
Event Participation <br></br>
Collaboration and Liaison with External Organizations
        </p>

        </div>
    );
};

export default StudentActivities;