import React from 'react';

const Studentinfo3 = () => {
    return (
        <div >
           <div className='bg-slate-100'>
           <h2 className='text-Black font-mono text-xl text-center'>Contact To Exam  & Result Section</h2>
           </div>
            <div>

                <div className="overflow-x-auto">
                    
                    <table className="table w-full bg-transparent">
                        {/* head*/}
                        <thead >
                            <tr>

                                <th className='bg-transparent'>Name</th>
                                <th className='bg-transparent' >Section</th>
                                <th className='bg-transparent'>Mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>

                                <td>Ruhul Amin</td>
                                <td className='font-bold'>Controller Of Exam</td>
                                <td>
                                    <img className='w-10 h-10' src='https://www.nidirect.gov.uk/sites/default/files/styles/nigov_full_620_x1/public/images/email_logo.jpg?itok=ifUhNgCT'></img>
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr >

                                <td>Limu Ahmed</td>
                                <td className='font-bold'>Controller Of Result</td>
                                <td>
                                    <img className='w-10 h-10' src='https://www.nidirect.gov.uk/sites/default/files/styles/nigov_full_620_x1/public/images/email_logo.jpg?itok=ifUhNgCT'></img>
                                </td>
                            </tr>
                            {/* row 3 */}
                            <tr>

                                <td>Tanvir Hridoy</td>
                                <td className='font-bold'>Controller Of Exam</td>
                                <td>
                                    <img className='w-10 h-10' src='https://www.nidirect.gov.uk/sites/default/files/styles/nigov_full_620_x1/public/images/email_logo.jpg?itok=ifUhNgCT'></img>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Studentinfo3;