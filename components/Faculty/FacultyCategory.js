import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";

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
                <a href="/faculty/eee">
                  {" "}
                  Electrical and Electronic Engineering
                </a>
              </li>
              <li>
                <a href="/faculty/cse">Computer Science and Engineering</a>
              </li>
              <li>
                <a href="/faculty/textile">Textile Engineering</a>
              </li>
              <li>
                <a href="/faculty/civil">Civil Engineering</a>
              </li>
              <li>
                <a href="/faculty/architecture">Architecture</a>
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
                <a href="/faculty/pharmacy"> Pharmacy</a>
              </li>
              <li>
                <a href="/faculty/foodEngineering">
                  Nutrition and Food Engineering
                </a>
              </li>
              <li>
                <a href="/faculty/publicHealth">Public Health</a>
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
                <a href="/faculty/business">
                  Bachelor of Business Administration
                </a>
              </li>
              <li>
                <a href="/faculty/tourism"> Tourism & Hospitality Management</a>
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
                <a href="/faculty/law">Department of Law</a>
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
                <a href="/faculty/english"> B.A. (Hons.) In English</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyCategory;
