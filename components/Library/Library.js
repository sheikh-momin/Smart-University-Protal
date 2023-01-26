import Link from 'next/link';
import React from 'react';
import Dashboardnav from '../../pages/dashboard/dashboardNav/Dashboardnav';
import DashboardNavbar from '../../pages/dashboard/dashboardNav/DashboardNavbar';

const Library = () => {
    return (
       <div>
        <DashboardNavbar></DashboardNavbar>
         <div className='flex bg-teal-800'>
            {/* <DashboardNavbar */}

            <Dashboardnav></Dashboardnav>

            <div className='mt-10 ml-16'>
                <h2 className='text-2xl font-bold text-white text-center'>Faculty of Engineering</h2>
                <div class="grid grid-cols-3 gap-5 ml-10 mt-10">
                    <div className=' bg-slate-200 w-60 h-20 text-center pt-3 rounded-md'>
                        <Link href="/library/eee" className='text-black font-bold text-xl'>Electrical & Electronic Engineering</Link>
                    </div>
                    <div className='bg-slate-200 w-60 h-20 text-center pt-3 rounded-md'>
                        <Link href="/library/cse" className='text-black font-bold text-xl' >Computer Science & Engineering</Link>
                    </div>
                    <div className='bg-slate-200 w-60 h-20 text-center pt-5 rounded-md'>
                        <Link href="/library/civil" className='text-black font-bold text-xl'>Civil Engineering</Link>
                    </div>
                    <div className='bg-slate-200 w-60 h-20 text-center pt-5 rounded-md'>
                        <Link href="/library/ae" className='text-black font-bold text-xl'>Architecture Engineering</Link>
                    </div>
                    <div className='bg-slate-200 w-60 h-20 text-center pt-5 rounded-md'>
                        <Link href="/library/te" className='text-black font-bold text-xl'>Textile Engineering</Link>
                    </div>
                </div>

              











                <div>
                    <h2 className='mt-10 text-2xl font-bold text-white text-center'>Faculty of Business Administration</h2>
                    <div class="grid grid-cols-3 gap-5 ml-10 mt-10">
                        <div className=' bg-slate-200 w-60 h-20 text-center pt-3 rounded-md'>
                            <Link href="/library/ba" className='text-black font-bold text-xl'>Business Administration</Link>
                        </div>
                        <div className='bg-slate-200 w-60 h-20 text-center pt-3 rounded-md'>
                            <Link href="/library/bs" className='text-black font-bold text-xl' >Business Studies</Link>
                        </div>
                        <div className='bg-slate-200 w-60 h-20 text-center pt-5 rounded-md'>
                            <Link href="/library/th" className='text-black font-bold text-xl'>Tourism & Hospitalism</Link>
                        </div>

                    </div>

                </div>


                <div>
                    <h2 className='mt-10 text-2xl font-bold text-white text-center'>Faculty of Allied Health Sciences</h2>
                    <div class="grid grid-cols-3 gap-5 ml-10 mt-10">
                        <div className=' bg-slate-200 w-60 h-20 text-center pt-3 rounded-md'>
                            <Link href="/library/pharmacy" className='text-black font-bold text-xl'>Pharmacy </Link>
                        </div>
                        <div className='bg-slate-200 w-60 h-20 text-center pt-3 rounded-md'>
                            <Link href="/library/nfe" className='text-black font-bold text-xl' >Nutrition and Food Engineering</Link>
                        </div>
                        <div className='bg-slate-200 w-60 h-20 text-center pt-5 rounded-md'>
                            <Link href="/library/publich" className='text-black font-bold text-xl'>Public Health</Link>
                        </div>

                    </div>
                </div>

                <div>
                    <h2 className='mt-10 text-2xl font-bold text-white text-center'>Faculty of Law</h2>
                    <div className='bg-slate-200 w-60 h-20 text-center pt-5 rounded-md ml-10 mt-5'>
                        <Link href="/library/law" className='text-black font-bold text-xl'>Law</Link>
                    </div>
                </div>





            </div>














        </div>
       </div>
    );
};

export default Library;