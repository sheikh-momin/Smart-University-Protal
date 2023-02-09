import Link from "next/link";
import { useContext } from "react";
import EmployeeDashboard from "../../components/EmployeeDashboard/EmployeeDashboard";
import { AuthContext } from "../../Context/AuthProvider";
import { SlLogout } from 'react-icons/sl';

const index = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleSingOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))

  }

  return (
    <div className="bg-zinc-300">
      <div className="navbar bg-gradient-to-r from-blue-900   to-cyan-500">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} htmlFor="my-drawer" className="btn text-white btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
          </div>
        </div>
        <div className="navbar-center">
          <Link href='/dashboard' className="btn btn-ghost normal-case text-white  md:text-2xl">Dreamers University - Employee Portal</Link>
        </div>
        <div className="navbar-end">

        </div>
      </div>


      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-full flex justify-center">
          <EmployeeDashboard></EmployeeDashboard>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-gradient-to-r from-blue-900   to-cyan-600 text-white">
            {/* <!-- Sidebar content here --> */}
            <aside class="w-64" aria-label="Sidebar">
              <div class="px-3 py-4 overflow-y-auto rounded  dark:bg-gray-800">
                <ul class="space-y-2">
                  <li className="">
                    <Link href="/employeeDashboard" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700">
                      <svg aria-hidden="true" class="w-6 h-6 ml-1 text-amber-400 transition duration-75 dark:text-black group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                      <span class="ml-2 font-bold ">Dashboard</span>
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

export default index;