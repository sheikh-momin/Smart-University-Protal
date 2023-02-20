import React from 'react';

const Notice = ({allNotices}) => {
    const {email,date,title,notice,from} = allNotices;
    console.log(allNotices);
    return (

        <div className='flex justify-center'>
            <div className='w-1/2  mt-10'>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium flex justify-around">
                        <h2 className='font-mono font-xl font-semibold text-red-600'> Important Notice</h2>
                        <p>Date: {date}</p>
                    </div>
                    <div className="collapse-content">
                        <h2 className='font-serif font-bold text-2xl mt-5'>Title:{title}</h2>
                        <p className='mt-5 font-serif font-xl'>{notice}</p>
                        <h6 className='font-serif font-bold pl-96 mt-10'>From: {from}</h6>
                        <h4 className='font-serif font-bold pl-96'>{email}</h4>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Notice;