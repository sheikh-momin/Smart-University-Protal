import Link from 'next/link';
import React from 'react';
import { AiFillDashboard } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';
import StudentDue from '../../components/EmployeeDashboard/StudentDue';

const semesterdue = () => {
    return (
        <div className="bg-zinc-300">
        <div className="navbar bg-teal-500">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} htmlFor="my-drawer" className="btn text-black btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
            </div>
          </div>
          <div className="navbar-center">
            <Link href='/dashboard' className="btn btn-ghost normal-case text-black  md:text-2xl">Dreamers University - Employee Portal</Link>
          </div>
          <div className="navbar-end">
  
          </div>
        </div>
  
  
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content w-full flex justify-center">
            <StudentDue></StudentDue>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-teal-500 text-white">
              {/* <!-- Sidebar content here --> */}
              <aside class="w-64" aria-label="Sidebar">
                <div class="px-3 py-4 overflow-y-auto rounded  dark:bg-gray-800">
                  <ul class="space-y-2">
                    <li className="">
                      <Link href="/employeeDashboard" class="flex items-center p-2 text-base font-normal text-black hover:text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700">
                        <AiFillDashboard size="25px" className="text-amber-400  ml-1"></AiFillDashboard>
                        <span class="ml-2 font-bold ">Dashboard</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/employeeDashboard/employeeProfile" class="flex items-center p-2 text-base font-normal text-black hover:text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700">
                        <ImProfile size="20px" className="text-amber-400 ml-2"></ImProfile>
                        <span class="flex-1 ml-2 whitespace-nowrap font-bold">Profile</span>
  
                      </Link>
                    </li>
                    <li>
                      <Link href="/employeeDashboard/studentdue" class="flex items-center p-2 text-base font-normal text-black hover:text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700">
                        <ImProfile size="20px" className="text-amber-400 ml-2"></ImProfile>
                        <span class="flex-1 ml-2 whitespace-nowrap font-bold">Semester Due</span>
  
                      </Link>
                    </li>
  
                    {/* <li>
                      <Link href="/signin" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700">
                        <SlLogout size="20px" className="text-rose-500  ml-1"></SlLogout>
                        <span onClick={handleSingOut} class="flex-1 ml-3 whitespace-nowrap text-rose-600 font-bold">log Out</span>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </aside>
  
            </ul>
          </div>
        </div>
      </div>
    );
};

export default semesterdue;