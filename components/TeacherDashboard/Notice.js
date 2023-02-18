import React from 'react';

const Notice = ({ allNotices }) => {
    const { email, date, title, notice, from } = allNotices;
    console.log(allNotices);
    return (

        <div className='w-1/2 mx-3 mt-10 md:mx-64'>
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















        // <div>
        //     <p class=" space-y-1 md:space-y-0 mb-4">
        //         <a class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        //             Link with href
        //         </a>
        //         <button class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        //             Button with data-bs-target
        //         </button>
        //     </p>
        //     <div class="collapse" id="collapseExample">
        //         <div class="block p-6 rounded-lg shadow-lg bg-white">
        //             Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
        //         </div>
        //     </div>
        // </div>





    );
};

export default Notice;