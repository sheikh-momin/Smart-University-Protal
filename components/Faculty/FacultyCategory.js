import Link from "next/link";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";



const FacultyCategory = () => {
  return (
    <div>
      <div className="border-t-8 bg-slate-200 border-emerald-800  ">
        <div className="border-b border-slate-700 text-lg w-full  ">
          <div className="dropdown dropdown-hover w-full my-3 ml-2">
            <label tabIndex={0} className=" m-1">
              Faculty of Engineering
              <AiFillCaretDown className="inline-block ml-2"></AiFillCaretDown>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box "
            >
              <li>
                <Link href="/faculty/eee">
                  {" "}
                  Electrical and Electronic Engineering
                </Link>
              </li>
              <li>
                <Link href="/faculty/cse">Computer Science and Engineering</Link>
              </li>
              <li>
                <Link href="/faculty/textile">Textile Engineering</Link>
              </li>
              <li>
                <Link href="/faculty/civil">Civil Engineering</Link>
              </li>
              <li>
                <Link href="/faculty/architecture">Architecture</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-b border-slate-700 text-lg w-full  ">
          <div className="dropdown dropdown-hover w-full my-3 ml-2">
            <label tabIndex={0} className=" m-1">
              Faculty of Allied Health Sciences
              <AiFillCaretDown className="inline-block ml-2"></AiFillCaretDown>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box "
            >
              <li>
                <Link href="/faculty/pharmacy"> Pharmacy</Link>
              </li>
              <li>
                <Link href="/faculty/foodEngineering">
                  Nutrition and Food Engineering
                </Link>
              </li>
              <li>
                <Link href="/faculty/publicHealth">Public Health</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-b border-slate-700 text-lg w-full  ">
          <div className="dropdown dropdown-hover w-full my-3 ml-2">
            <label tabIndex={0} className=" m-1">
              Faculty of Business Administration
              <AiFillCaretDown className="inline-block ml-2"></AiFillCaretDown>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box "
            >
              <li>
                <Link href="/faculty/business">
                  Bachelor of Business Administration
                </Link>
              </li>
              <li>
                <Link href="/faculty/tourism"> Tourism & Hospitality Management</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-b border-slate-700 text-lg w-full  ">
          <div className="dropdown dropdown-hover w-full my-3 ml-2">
            <label tabIndex={0} className=" m-1">
              Faculty of Law
              <AiFillCaretDown className="inline-block ml-2"></AiFillCaretDown>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box "
            >
              <li>
                <Link href="/faculty/law">Department of Law</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-b border-slate-700 text-lg w-full  ">
          <div className="dropdown dropdown-hover w-full my-3 ml-2">
            <label tabIndex={0} className=" m-1">
              Faculty of Arts
              <AiFillCaretDown className="inline-block ml-2"></AiFillCaretDown>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box "
            >
              <li>
                <Link href="/faculty/english"> B.A. (Hons.) In English</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyCategory;
