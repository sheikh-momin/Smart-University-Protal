import React from 'react';

const StudentDue = () => {
    return (
        <div className='mt-5'>
            <div className="border-y border-slate-400 py-2">
                <h1 className="text-center text-blue-500 md:text-3xl font-bold italic font-serif">
                    Semester Due
                </h1>
            </div>



            {/* dropdown for student details  */}
            <div className='flex justify-center mt-10'>
                <select className="select select-primary w-full max-w-xs">
                    <option disabled selected className='text-center'>Semester</option>
                    <option>Spring-22</option>
                    <option>Summer-22</option>
                    <option>Autumn-23</option>
                    {/* <option>Walking Dead</option> */}
                </select>
                <select className="select select-primary w-full max-w-xs ml-5">
                    <option disabled selected className='text-center'>Department</option>
                    <option>Computer Science & Engineering</option>
                    <option>Civil Engineering</option>
                    <option>Architecture Engineering</option>
                    <option>Law & Justice</option>
                    <option>Business Administration</option>
                    <option>Business Studies</option>
                    {/* <option>Phermacy</option> */}
                    <option>Public Health</option>
                </select>
                <select className="select select-primary w-full max-w-xs ml-5">
                    <option disabled selected className='text-center'>Batch</option>
                    <option>47</option>
                    <option>48</option>
                    <option>49</option>
                    <option>50</option>
                </select>
            </div>

            {/* student information */}
            <div className='mt-10 flex justify-between'>

                <div className=''>
                    <h2 className='text-xl font-serif'>Student Name: Afnan Sheikh</h2>
                    <h2 className='text-xl font-serif'>Student ID: 15-2323</h2>
                </div>
                <div className='ml-5'>
                    <h2 className='text-xl font-serif'>Department: Computer Science & Engineering</h2>
                    <h2 className='text-xl font-serif'>Batch: 47</h2>
                </div>
                <div className='ml-5'>
                    <h2 className='text-xl font-serif'>Phone: 01826355354</h2>
                    <h2 className='text-xl font-serif'>Email: afnan15-2323@du.edu.bd </h2>
                </div>

            </div>




            <div className='mt-20'>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full bg-cyan-400">
                        {/* <!-- head --> */}
                        <thead className=''>
                            <tr>
                                <th className='bg-cyan-400'>SL No</th>
                                <th className='bg-cyan-400'>Month</th>
                                <th className='bg-cyan-400'>Payment</th>
                                <th className='bg-cyan-400'>Due</th>
                            </tr>
                        </thead>
                        <tbody className='text-xl'>
                            {/* <!-- row 1 --> */}
                            <tr >
                                <th>1</th>
                                <td>January</td>
                                <td className='text-green-500'>10/1</td>
                                <td className='text-green-500'>Clear</td>
                            </tr>
                            {/* <!-- row 2 --> */}
                            <tr>
                                <th>2</th>
                                <td>February</td>
                                <td className='text-green-500'>2/2</td>
                                <td className='text-green-500'>Clear</td>
                            </tr>
                            {/* <!-- row 3 --> */}
                            <tr>
                                <th>3</th>
                                <td>March</td>
                                <td className='text-red-500'>Pending</td>
                                <td className='text-red-500'>Due</td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>April</td>
                                <td className='text-red-500'>Pending</td>
                                <td className='text-red-500'>Due</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>










        </div>
    );
};

export default StudentDue;