import Link from "next/link";
import { useContext } from "react";
import EmployeeDashboard from "../../components/EmployeeDashboard/EmployeeDashboard";
import { AuthContext } from "../../Context/AuthProvider";
import { SlLogout } from "react-icons/sl";
import { AiFillDashboard } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { SlLogout } from "react-icons/sl";
import { AiFillDashboard } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import StudentDue from "../../components/EmployeeDashboard/StudentDue";
import { CgCalendarDue } from "react-icons/cg";
import { MdOutlineRequestPage } from "react-icons/md";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa";

const index = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSingOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-zinc-200">
      <div className="navbar  bg-gradient-to-r from-teal-600   to-stone-600">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              htmlFor="my-drawer"
              className="btn text-black btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className="navbar-center">
          <Link
            href="/dashboard"
            className="btn btn-ghost normal-case text-black  md:text-2xl"
          >
            Dreamers University - Administration Portal
          </Link>
        </div>
        <div className="navbar-end"></div>
      </div>

      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-full flex justify-center">
          <EmployeeDashboard></EmployeeDashboard>
          {/* <StudentDue></StudentDue> */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-gradient-to-r from-teal-600   to-zinc-500 text-white">
            {/* <!-- Sidebar content here --> */}
            <aside class="w-64" aria-label="Sidebar">
              <div class="px-3 py-4 overflow-y-auto rounded  dark:bg-gray-800">
                <ul class="space-y-2">
                  <li className="">
                    <Link
                      href="/employeeDashboard"
                      class="flex items-center p-2 text-base font-normal text-black hover:text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700"
                    >
                      <AiFillDashboard
                        size="25px"
                        className="text-amber-400  ml-1"
                      ></AiFillDashboard>
                      <span class="ml-2 font-bold ">Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/employeeDashboard/profile"
                      class="flex items-center p-2 text-base font-normal text-black hover:text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700"
                    >
                      <ImProfile
                        size="20px"
                        className="text-amber-400 ml-2"
                      ></ImProfile>
                      <span class="flex-1 ml-2 whitespace-nowrap font-bold">
                        Profile
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/employeeDashboard/studentDue"
                      class="flex items-center p-2 text-base font-normal text-black hover:text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700"
                    >
                      <CgCalendarDue
                        size="25px"
                        className="text-amber-400 ml-2"
                      ></CgCalendarDue>
                      <span class="flex-1 ml-2 whitespace-nowrap font-bold">
                        Student Due
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/employeeDashboard/studentClearence"
                      class="flex items-center p-2 text-base font-normal text-black hover:text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700"
                    >
                      <MdOutlineRequestPage
                        size="25px"
                        className="text-amber-400 ml-2"
                      ></MdOutlineRequestPage>
                      <span class="flex-1 ml-2 whitespace-nowrap font-bold">
                        Student Clearance
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/employeeDashboard/waiver"
                      class="flex items-center p-2 text-base font-normal text-black hover:text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700"
                    >
                      <BsFillBarChartLineFill
                        size="20px"
                        className="text-amber-400 ml-2"
                      ></BsFillBarChartLineFill>
                      <span class="flex-1 ml-2 whitespace-nowrap font-bold">
                        Student Waiver
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/employeeDashboard/studentApplication"
                      class="flex items-center p-2 text-base font-normal text-black hover:text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700"
                    >
                      <FaWpforms
                        size="20px"
                        className="text-amber-400 ml-2"
                      ></FaWpforms>
                      <span class="flex-1 ml-2 whitespace-nowrap font-bold">
                        Student Application
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/employeeDashboard/studentdue"
                      class="flex items-center p-2 text-base font-normal text-black hover:text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700"
                    >
                      <ImProfile
                        size="20px"
                        className="text-amber-400 ml-2"
                      ></ImProfile>
                      <span class="flex-1 ml-2 whitespace-nowrap font-bold">
                        Student Due
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/signin"
                      class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700"
                    >
                      <SlLogout
                        size="20px"
                        className="text-rose-500  ml-1"
                      ></SlLogout>
                      <span
                        onClick={handleSingOut}
                        class="flex-1 ml-3 whitespace-nowrap text-rose-600 font-bold"
                      >
                        log Out
                      </span>
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

export default index;
