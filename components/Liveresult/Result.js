import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../Loader';

const Result = ({ liveResult }) => {
    const { user } = useContext(AuthContext)
    const [courses, setCourses] = useState([])
    const [semester, setSemester] = useState("")
    const [loading, setLoading] = useState(true)
    const { name, details, RegisteredId, email, Semester } = liveResult;
    
    const handleSemester = (e) => {
        setSemester(e.target.value)
    }

    useEffect(() => {
        if (user?.email) {
            fetch(`https://smart-university-protal-server-coral.vercel.app/liveResult/${semester}`)
                .then(res => res?.json())
                .then(data => {
                    setCourses(data)
                })
            setLoading(false)
        }

    }, [user, semester])
    if (loading) {
        return <Loader></Loader>;
    }
    console.log(courses);
    return (
        <div>
            <div className=" flex justify-center mt-10">

                <select onChange={handleSemester} name="semester" className="select  select-bordered w-full max-w-xs">
                    <option disabled selected className="text-center">--Select Semester--</option>
                    <option className="text-center">Spring2023</option>
                    <option className="text-center">Summer2023</option>
                    <option className="text-center">Fall2023</option>
                </select>

            </div>
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
                        
                        {courses?.subject?.map(detail =>
                            <tr>
                                <td>{detail.courseTitle}</td>
                                <td>{detail.courseCode}</td>
                                <td>{detail.credit}</td>
                                <td>{detail.grade}</td>
                                <td>{detail.point}</td>
                        
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
        
    );
};

export default Result;
