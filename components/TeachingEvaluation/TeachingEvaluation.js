// import Link from 'next/link';
import React from 'react';
import Dashboardnav from '../../pages/dashboard/dashboardNav/Dashboardnav';
import DashboardNavbar from '../../pages/dashboard/dashboardNav/DashboardNavbar';

const TeachingEvaluation = () => {
    return (
        <div>
        <DashboardNavbar></DashboardNavbar>
         <div className='flex bg-teal-600'>
            {/* <DashboardNavbar */}

            <Dashboardnav></Dashboardnav>
            <div className="form-control text-left w-full max-w-3xl mt-10 ml-40">
                <label className="label text-center text-slate-800 bg-teal-500">
                    <span className=" text-center text-3xl">Dreamers University Teaching Evaluation</span>
                </label>
                <select className="mt-5  bg-teal-200 select select-success w-full max-w-xs">
                <option disabled selected>Select Semester</option>
                <option>Fall-2021</option>
                <option>Summer-2021</option>
                <option>Spring-2022</option>
                <option>Fall-2022</option>
                <option>Summer-2022</option>
                <option>Spring-2023</option>
                <option>Fall-2023</option>
                </select>  

                <div>
                    <table class="mt-10 w-full border-collapse border border-slate-300 ...">
                    <thead>
                        <tr class=" text-2xl border bg-info border-slate-300 ...">
                        <th class="">Submit Status</th>
                        <th class="">Course Title</th>
                        <th class="">Course Name</th>
                        <th class="">Teacher Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class=" text-xl border bg-secondary-focus border-slate-300 ...">
                        <td class="">Indiana</td>
                        <td class="">Indianapolis</td>
                        <td class="">Indianapolis</td>
                        <td class="">Indianapolis</td>
                        </tr>
                        <tr class="text-xl border bg-primary-focus border-slate-300 ...">
                        <td class="">Ohio</td>
                        <td class="">Columbus</td>
                        <td class="">Columbus</td>
                        <td class="">Columbus</td>
                        </tr>
                        <tr class="text-xl border bg-success border-slate-300 ...">
                        <td class="">Michigan</td>
                        <td class="">Detroit</td>
                        <td class="">Detroit</td>
                        <td class="">Detroit</td>
                        </tr>
                        <tr class=" text-xl border bg-warning border-slate-300 ...">
                        <td class="">Michigan</td>
                        <td class="">Detroit</td>
                        <td class="">Detroit</td>
                        <td class="">Detroit</td>
                        </tr>
                    </tbody>
                    </table>
                </div>

            </div>

            

            {/* <div className='mt-10 ml-16'>
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





            </div> */}














        </div>
       </div>
    );
};

export default TeachingEvaluation;