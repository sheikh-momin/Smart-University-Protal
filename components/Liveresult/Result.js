import React from 'react';

const Result = ({ liveResult }) => {
    // console.log(liveResult);
    const { name, details,RegisteredId, email,Semester } = liveResult;
    return (
        <div>
            <h2 className='text-2xl text-teal-700 text-center mt-10 font-serif'>Dreamers University Result Archive</h2>
            <div className='mt-10 ml-5'>
                <h2 className='font-serif text-xl'>Name:{name} </h2>
                <p className='font-serif text-xl'>Registered ID:{RegisteredId}</p>
                <p className='font-serif text-xl'>Email: {email}</p>
            </div>
            <h2 className=' mt-5 text-xl text-center font-bold mb-5'>Semester: {Semester}</h2>
            <div className='overflow-x-auto'>
                <table className="table table-zebra w-full text-xl">
                    <thead>
                        <tr>
                            <th>Course Code</th>
                            <th>Course Title</th>
                            <th>Credit</th>
                            <th>Grade</th>
                            <th>Point</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                      {details.map(detail =>
                            <tr>
                                <td>{detail.CourseCode}</td>
                                <td>{detail.CourseTitle}</td>
                                <td>{detail.credit}</td>
                                <td>{detail.Grade}</td>
                                <td>{detail.Point}</td>
                           
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
        
    );
};

export default Result;
