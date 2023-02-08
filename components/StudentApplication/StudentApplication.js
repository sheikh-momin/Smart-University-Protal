import React from 'react';
import Drawer from "../../components/Dashboard/Drawer";
import Dashboardnav from '../../pages/dashboard/dashboardNav/Dashboardnav';
import DashboardNavbar from '../../pages/dashboard/dashboardNav/DashboardNavbar';
import { ImProfile } from 'react-icons/im';
import { FaSearchDollar } from 'react-icons/fa';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { MdOutlineAppRegistration } from 'react-icons/md';
import { SiDiscourse } from 'react-icons/si';
import { MdArrowDropDownCircle } from 'react-icons/md';
import { SiLivejournal } from 'react-icons/si';
import { AiOutlineBorderOuter } from 'react-icons/ai';
import { FaPager } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { TbCertificate } from 'react-icons/tb';
import { ImLibrary } from 'react-icons/im';
import { SlLogout } from 'react-icons/sl';
import Link from 'next/link';
import StudentApplicationComponent from '../Dashboard/StudentApplicationComponent';

const StudentApplication = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleSingOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))

    }
    return (
        <div className="bg-[#d4d4d8] pb-80">
        <DashboardNavbar></DashboardNavbar>
        <div className="bg-slate-200 drop-shadow-lg py-3 ">
        <h1 className="text-center text-cyan-500 text-3xl font-bold italic font-serif">Student Application System</h1>
        </div>
         <div className='flex bg-zinc-300'>
            {/* <DashboardNavbar */}

            <div>
             <Drawer></Drawer>
            </div>

            <div className="form-control text-left w-full max-w-3xl mt-10 ml-20">
                {/* <label className="label text-center text-white bg-teal-400">
                    <span className=" text-center text-3xl">Student Application System</span>
                </label> */}
                <div>
                <div className="hero min-h-screen bg-base-200 mt-5 ml-10">
                    <div className="hero-content  ">
                        <div className="text-center ">
                        <h1 className="text-4xl text-cyan-400 font-bold ">Login Now</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                {/* <a  className="label-text-alt link link-hover">Forgot password?</a> */}
                            </label>
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn bg-cyan-300 btn-primary">Login</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="navbar-end">

                </div>
            </div>


            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content w-full flex justify-center">
                    <StudentApplicationComponent></StudentApplicationComponent>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-gradient-to-r from-blue-900   to-cyan-600 text-white">
                        {/* <!-- Sidebar content here --> */}
                        <aside class="w-64" aria-label="Sidebar">
                            <div class="px-3 py-4 overflow-y-auto rounded  dark:bg-gray-800">
                                <ul class="space-y-2">
                                    <li className="">
                                        <Link href="/dashboard" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700">
                                            <svg aria-hidden="true" class="w-6 h-6 ml-1 text-amber-400 transition duration-75 dark:text-black group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                            <span class="ml-2 font-bold ">Dashboard</span>
                                        </Link>
                                    </li>


                                    <li>
                                        <Link href="/dashboard/studentProfile" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700">
                                            <ImProfile size="20px" className="text-amber-400 ml-2"></ImProfile>
                                            <span class="flex-1 ml-2 whitespace-nowrap font-bold">Profile</span>

                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/dashboard/FinancialAssistant" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700">
                                            <FaSearchDollar size="22px" className="text-amber-400 ml-2"></FaSearchDollar>
                                            <span class="flex-1 ml-2 whitespace-nowrap font-bold">FinancialAssistant</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/dashboard/payment" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700">
                                            <RiSecurePaymentFill size="25px" className="text-amber-400 ml-1"></RiSecurePaymentFill>
                                            <span class="flex-1 ml-2 whitespace-nowrap font-bold">Payment</span>

                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/dashboard/clearance" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700">
                                            <MdOutlineAppRegistration size="25px" className="text-amber-400 ml-1"></MdOutlineAppRegistration>
                                            <span class="flex-1 ml-2 whitespace-nowrap font-bold">Registration/Clearance</span>

                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/dashboard/registeredCourse" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700">
                                            <SiDiscourse size="20px" className="text-amber-400 ml-2"></SiDiscourse>
                                            <span class="flex-1 ml-2 whitespace-nowrap font-bold">Registered Course</span>

                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/dashboard/semesterDrop" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700">
                                            <MdArrowDropDownCircle size="25px" className="text-amber-400 ml-1"></MdArrowDropDownCircle>
                                            <span class="flex-1 ml-2 whitespace-nowrap font-bold">Semester Drop</span>

                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/liveresult" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700">
                                            <SiLivejournal size="20px" className="text-amber-400 ml-1"></SiLivejournal>
                                            <span class="flex-1 ml-3 whitespace-nowrap font-bold">Live Result</span>

                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/routine&notics" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700">
                                            <AiOutlineBorderOuter size="25px" className="text-amber-400 ml-1"></AiOutlineBorderOuter>
                                            <span class="flex-1 ml-2 whitespace-nowrap font-bold">Routine & Notice</span>

                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/studentapplication" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700">
                                            <FaPager size="20px" className="text-amber-400 ml-1"></FaPager>
                                            <span class="flex-1 ml-3 whitespace-nowrap font-bold">Student Application</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/teachingevaluation" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700">
                                            <GiTeacher size="20px" className="text-amber-400 ml-1"></GiTeacher>
                                            <span class="flex-1 ml-3 whitespace-nowrap font-bold">Teaching Evaluation</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/certificate" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700">
                                            <TbCertificate size="23px" className="text-amber-400 ml-1"></TbCertificate>
                                            <span class="flex-1 ml-2 whitespace-nowrap font-bold">Certificate</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/library" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700">
                                            <ImLibrary size="20px" className="text-amber-400 ml-1"></ImLibrary>
                                            <span class="flex-1 ml-3 whitespace-nowrap font-bold">Library</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/signin" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700">
                                            <SlLogout size="20px" className="text-red-500  ml-1"></SlLogout>
                                            <span onClick={handleSingOut} class="flex-1 ml-3 whitespace-nowrap text-red-500 font-bold">log Out</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </aside>

                    </ul>
                </div>
            </div>
       </div>
    );
};

export default StudentApplication;