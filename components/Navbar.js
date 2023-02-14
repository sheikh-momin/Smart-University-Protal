import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState();
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://smart-university-protal-server-ruby.vercel.app/allUsers/${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setAllUsers(data);
        });
    }
  }, [user]);

  const menuItems = (
    <>
      <li>
        <Link href="/" className="text-xl font-semibold">
          Home
        </Link>
      </li>
      <li>
        <Link href="/faculty" className="text-xl font-semibold">
          Faculty
        </Link>
      </li>
      <li>
        <Link href="/admission" className="text-xl font-semibold">
          Admission
        </Link>
      </li>
      <li>
        <Link href="/about" className="text-xl font-semibold">
          About
        </Link>
      </li>
      <li>
        <Link href="/blog" className="text-xl font-semibold">
          Blog
        </Link>
      </li>
      <li>
        <Link href="/academic" className="text-xl font-semibold">
          Academic
        </Link>
      </li>
      <li>
        <Link href="/campuslife" className="text-xl font-semibold">
          Campus life
        </Link>
      </li>
      <li>
        <Link href="/Institutes" className="text-xl font-semibold">
          Institution Center
        </Link>
      </li>
      <li>
        <Link href="/jobplacement" className="text-xl font-semibold">
          Job Placement{" "}
        </Link>
      </li>
      <li>
        <Link href="/hall" className="text-xl font-semibold">
          Hall
        </Link>
      </li>
      <li>
        {user?.email ? (
          <>
            {allUsers?.roll == "Student" ? (
              <Link
                href="/dashboard"
                className="text-xl text-[#facc15] font-bold"
              >
                Student Portal
              </Link>
            ) : (
              <></>
            )}
          </>
        ) : (
          <Link href="/signin" className="text-xl font-semibold">
            Sign In
          </Link>
        )}
        {user?.email ? (
          <>
            {allUsers?.roll == "Teacher" ? (
              <Link
                href="/teacherdashboard"
                className="text-xl  text-[#facc15] font-bold"
              >
                Teachers Dashboard
              </Link>
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
        {user?.email ? (
          <>
            {allUsers?.roll == "admin" ? (
              <Link
                href="/admindashboard"
                className="text-xl  text-[#facc15] font-bold"
              >
                Admin Dashboard
              </Link>
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
        {user?.email ? (
          <>
            {allUsers?.roll == "Employee" ? (
              <Link
                href="/employeeDashboard"
                className="text-xl  text-[#facc15] font-bold"
              >
                Employee Dashboard
              </Link>
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-teal-800 text-white py-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {menuItems}
            </ul>
          </div>
          <div className="w-52 flex">
            <div className="w-18 h-10 mt-3">
              <img
                src="https://www.linkpicture.com/q/images-removebg-preview-4.png"
                alt=""
                className="w-12 h-10"
              />
             
            </div>
            <div className="w-2/3">
              <Link
                href="/home"
                className="btn btn-ghost normal-case text-md md:text-xl font-serif italic"
              >
                Dreamers University 
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
