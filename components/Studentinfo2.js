import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
// import { FaBeer } from "react-icons/ai";

const Studentinfo2 = () => {
    return (
        <div>
            <div className='bg-slate-100'>
            <h2 className='text-Black font-mono text-xl text-center'>Contact For Recommendation</h2>
           </div>

            <div className="overflow-x-auto">
                
                <table className="table w-full bg-transparent">
                    {/* head*/}
                    <thead >
                        <tr>

                            <th className='bg-transparent'>Name</th>
                            <th className='bg-transparent' >Degree</th>
                            <th className='bg-transparent'>Mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>

                            <td>Pro. Sheikh Emon</td>
                            <td className='font-bold'>MSc,Phd</td>
                            <td>
                                <img className='w-10 h-10' src='https://www.nidirect.gov.uk/sites/default/files/styles/nigov_full_620_x1/public/images/email_logo.jpg?itok=ifUhNgCT'></img>
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr >

                            <td>Pro. Ahmed Nishi</td>
                            <td className='font-bold'>MSc,Phd</td>
                            <td>
                                <img className='w-10 h-10' src='https://www.nidirect.gov.uk/sites/default/files/styles/nigov_full_620_x1/public/images/email_logo.jpg?itok=ifUhNgCT'></img>
                            </td>
                        </tr>
                        {/* row 3 */}
                        <tr>

                            <td>Pro. Tanvirul Islam</td>
                            <td className='font-bold'>MSc,Phd</td>
                            <td>
                                <img className='w-10 h-10' src='https://www.nidirect.gov.uk/sites/default/files/styles/nigov_full_620_x1/public/images/email_logo.jpg?itok=ifUhNgCT'></img>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Studentinfo2;