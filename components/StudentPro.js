import React from 'react';

const StudentPro = () => {
    return (
   <div className="bg-indigo-500 md:p-8 p-2 rounded-xl md:text-xl h-[312px]">
            <h2 className='text-center text-white text-xl font-serif font-bold'>Completed Course</h2>
            <div className="grid justify-items-center mt-5">
            <div className=" w-28 h-28 radial-progress bg-white text-primary-content border-4 border-primary" style={{ "--value": 70 }}>70%</div>
           <div className='mt-5'>
           <h2 className=' font-serif  text-white'>Total Credit : 168 Credit hour</h2>
            <p className=' font-serif  text-white'>Duration : 4 Year</p>
           </div>

            
            </div>
        </div>
    );
};

export default StudentPro;