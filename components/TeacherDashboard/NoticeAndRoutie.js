import React from 'react';
import News from '../../pages/News';
import Link from 'next/link';

const NoticeAndRoutie = () => {
    return (
        <div className="container mx-auto w-1/2">
      <div className="border-y border-slate-400 py-2">
        <h1 className="text-center text-blue-600 text-3xl font-bold italic font-serif">
          Notice And Routine
        </h1>
      </div>

      <div>
      <div className="mt-10">
      <form className="bg-zinc-200 rounded-lg">
        <h2 className="bg-blue-600 text-white text-center text-xl font-bold py-4">
        Notice And Routine
        </h2>

        <div className="form-control flex justify-center mt-5 ">
            <div className="input-group justify-center ">
                <input type="text" placeholder="Search by Notice Title" className="input input-bordered " />
                <button className="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>
        </div>

        
        <div className="flex flex-col w-full border-opacity-50">
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center"><div><a className="link link-primary">প্রধানমন্ত্রী গবেষণা ও উচ্চ শিক্ষা সহায়তা তহবিলের আওতায় পিএইচডি বৃত্তি বিজ্ঞপ্তি</a></div></div>
        <div className="divider"></div> 
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center"><a className="link link-primary">পবিত্র শব-ই-মেরাজ উপলক্ষে ছুটির বিজ্ঞপ্তি</a></div></div>
        <div className="divider"></div> 
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center"><a className="link link-primary">Admission Notice of Professional Master's in Japanese Studies (PMJS)</a></div>
            
        <div className="btn-group grid grid-cols-2">
  <button className="btn btn-outline  mr-20">Previous page</button>
  <button className="btn btn-outline ml-20 ">Next</button>
</div>
        {/* <div className="flex justify-center">
          <input type="submit" className="btn btn-primary mt-8 px-8 mb-4" />
        </div> */}
      </form>
      </div>
      </div>
      
      
    </div>
    
    );
};

export default NoticeAndRoutie;