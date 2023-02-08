import React from 'react';

const Result = ({ liveResult }) => {
    // console.log(liveResult);
    const { name, details,RegisteredId, email,Semester } = liveResult;
    return (
        <div>
            
            <div className='mt-10 ml-5'>
                <h2 className='font-serif text-xl'>Name:{name} </h2>
                <p className='font-serif text-xl'>Registered ID:{RegisteredId}</p>
                <p className='font-serif text-xl'>Email: {email}</p>
            </div>
            <div className=" mt-3">
                <h1 className="text-center rounded bg-cyan-400 text-white md:text-xl  py-3 font-serif">Semester: {Semester}</h1>
            </div>
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
