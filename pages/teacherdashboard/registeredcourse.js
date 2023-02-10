

import RegisteredCourse from '../../components/TeacherDashboard/RegisteredCourse';
import Link from "next/link";
import { RiProfileFill } from 'react-icons/ri';
import { SiCoursera } from 'react-icons/si';
import { AiFillContainer } from 'react-icons/ai';
import { AiFillSave } from 'react-icons/ai';
import { BsFillFileSpreadsheetFill } from 'react-icons/bs';
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Registeredcourse = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleSingOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className='bg-zinc-300'>
            <div className="navbar bg-gradient-to-r from-indigo-900 via-purple-600 to-blue-600">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} htmlFor="my-drawer" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link href='/' className="btn btn-ghost normal-case text-white text-xl">Dreamers University - Teacher Portal</Link>
                </div>
                <div className="navbar-end">
                    {/* <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button> */}
                </div>
            </div>




            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <RegisteredCourse></RegisteredCourse>
                </div>


                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-gradient-to-r from-blue-700  text-white">
                        {/* <!-- Sidebar content here --> */}
                        <aside class="w-64" aria-label="Sidebar">
                            <div class="px-3 py-4 overflow-y-auto rounded bg-transparent dark:bg-gray-800">
                                <ul class="space-y-2">
                                    <li>
                                        <Link href="/teacherdashboard" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <svg aria-hidden="true" class="w-6 h-6 text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                            <span class="ml-3">Dashboard</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/teacherdashboard/teacherProfile" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <RiProfileFill size={25}></RiProfileFill>
                                            <span class="flex-1 ml-3 whitespace-nowrap">Profile</span>

                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/teacherdashboard/teacherCourse" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <SiCoursera size={25}></SiCoursera>
                                            <span class="flex-1 ml-3 whitespace-nowrap">Taken  Course</span>

                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/teacherdashboard/liveResult" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <AiFillContainer size={25}></AiFillContainer>
                                            <span class="flex-1 ml-3 whitespace-nowrap">Result</span>

                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/teacherdashboard/dropList" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                                            <span class="flex-1 ml-3 whitespace-nowrap">Semester Drop List</span>

                                        </Link>
                                    </li>


                                    <li>
                                        <Link href="/teacherdashboard/registeredcourse" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <AiFillSave size={25}></AiFillSave>
                                            <span class="flex-1 ml-3 whitespace-nowrap">Registered Course</span>

                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/teacherdashboard/notice" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <BsFillFileSpreadsheetFill size={25}></BsFillFileSpreadsheetFill>
                                            <span class="flex-1 ml-3 whitespace-nowrap">Routine & Notice</span>

                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/signin" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-red-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                                            <span onClick={handleSingOut} class="flex-1 text-red-800 ml-3 whitespace-nowrap">log Out</span>
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

export default Registeredcourse;