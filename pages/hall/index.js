
import Image from "next/image";
import Pic from "../../Assets/uimg.jpg";
import React, { useState, useRef, useEffect } from "react";
import Activities from "../../components/Hall/Activities/Activities"
import Apply from "../../components/Hall/Apply/Fee"

const index = () => {

 const [tabSelected, setTabSelected] = useState({
   currentTab: 1,
   noTabs: 3,
 });

 const wrapperRef = useRef(null);

 const handleKeyDown = (e) => {
   if (e.keyCode === 39) {
     if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
       if (
         tabSelected.currentTab >= 1 &&
         tabSelected.currentTab < tabSelected.noTabs
       ) {
         setTabSelected({
           ...tabSelected,
           currentTab: tabSelected.currentTab + 1,
         });
       } else {
         setTabSelected({
           ...tabSelected,
           currentTab: 1,
         });
       }
     }
   }

   if (e.keyCode === 37) {
     if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
       if (
         tabSelected.currentTab > 1 &&
         tabSelected.currentTab <= tabSelected.noTabs
       ) {
         setTabSelected({
           ...tabSelected,
           currentTab: tabSelected.currentTab - 1,
         });
       } else {
         setTabSelected({
           ...tabSelected,
           currentTab: tabSelected.noTabs,
         });
       }
     }
   }
 };

 useEffect(() => {
   window.addEventListener("keydown", handleKeyDown);
   return () => {
     window.removeEventListener("keydown", handleKeyDown);
   };
 });

  return (
    <div className="">
      <section>
        <div
          className="hero p-8 "
          style={{
            backgroundImage: `url("https://www4.hksyu.edu/hmu/wp-content/uploads/2019/06/cropped-hmu4-2.jpg")`,
          }}
        >
          <div className=" "></div>
          <div className="hero-content text-center text-white">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Dremears Hall </h1>
              <p className="mb-5"></p>
            </div>
          </div>
        </div>
      </section>

      {/*<!-- Component: Basic lg sized tab full width --> */}
      <section className="max-w-full" aria-multiselectable="false">
        <ul
          className="flex items-center border-b border-slate-200"
          role="tablist"
          ref={wrapperRef}
        >
          <li className="flex-1" role="presentation ">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 1
                  ? "border-emerald-500 stroke-emerald-500 text-emerald-500 hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 focus:border-emerald-600 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-slate-500"
              }`}
              id="tab-label-1a"
              role="tab"
              aria-setsize="3"
              aria-posinset="1"
              tabindex={`${tabSelected.currentTab === 1 ? "0" : "-1"}`}
              aria-controls="tab-panel-1a"
              aria-selected={`${
                tabSelected.currentTab === 1 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 1 })}
            >
              <span>HALL FACILITIES</span>
            </button>
          </li>
          <li className="flex-1" role="presentation ">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 2
                  ? "border-emerald-500 stroke-emerald-500 text-emerald-500 hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 focus:border-emerald-600 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-slate-500"
              }`}
              id="tab-label-2a"
              role="tab"
              aria-setsize="3"
              aria-posinset="2"
              tabindex={`${tabSelected.currentTab === 2 ? "0" : "-1"}`}
              aria-controls="tab-panel-2a"
              aria-selected={`${
                tabSelected.currentTab === 2 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 2 })}
            >
              <span>HALL ACTIVITIES</span>
            </button>
          </li>
          <li className="flex-1" role="presentation ">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 3
                  ? "border-emerald-500 stroke-emerald-500 text-emerald-500 hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 focus:border-emerald-600 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-slate-500"
              }`}
              id="tab-label-3a"
              role="tab"
              aria-setsize="3"
              aria-posinset="3"
              tabindex={`${tabSelected.currentTab === 3 ? "0" : "-1"}`}
              aria-controls="tab-panel-3a"
              aria-selected={`${
                tabSelected.currentTab === 3 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 3 })}
            >
              <span>APPLY</span>
            </button>
          </li>
        </ul>
        <div className="">
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 1 ? "" : "hidden"
            }`}
            id="tab-panel-1a"
            aria-hidden={`${tabSelected.currentTab === 1 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-1a"
            tabindex="-1"
          >
            <>
              <section>
                <div>
                  <section className="py-6 dark:bg-slate-200 dark:text-black">
                    <div className="container p-4 mx-auto space-y-16 sm:p-10">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold leading-none sm:text-2xl">
                          HALL FACILITIES
                        </h3>
                        <p className="max-w-2xl dark:text-black">
                          Indoor sports court, gym room, study room, band room,
                          etc. are also available for residents’ use.
                        </p>
                      </div>
                      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                        <div className=" space-x-6">
                          <img
                            alt=""
                            className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
                            src="https://www4.hksyu.edu/hmu/wp-content/uploads/2021/01/DSC02834_s.jpg "
                          />
                          <div className="flex flex-col">
                            <h4 className="text-xl font-semibold">
                              Hall Complex
                            </h4>
                            <p className="text-sm dark:text-gray-400"></p>
                          </div>
                        </div>
                        <div className=" space-x-6">
                          <img
                            alt=""
                            className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
                            src="https://www4.hksyu.edu/hmu/wp-content/uploads/2021/01/4J2A9132_s.jpg"
                          />
                          <div className="flex flex-col">
                            <h4 className="text-xl font-semibold">
                              Study Room
                            </h4>
                            <p className="text-sm dark:text-gray-400"></p>
                          </div>
                        </div>
                        <div className=" space-x-6">
                          <img
                            alt=""
                            className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
                            src="https://www4.hksyu.edu/hmu/wp-content/uploads/2021/01/4J2A9117_s.jpg"
                          />
                          <div className="flex flex-col">
                            <h4 className="text-xl font-semibold">
                              Common Area
                            </h4>
                            <p className="text-sm dark:text-gray-400"></p>
                          </div>
                        </div>
                        <div className=" space-x-6">
                          <img
                            alt=""
                            className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
                            src="https://www4.hksyu.edu/hmu/wp-content/uploads/2021/01/4J2A9135_s.jpg"
                          />
                          <div className="flex flex-col">
                            <h4 className="text-xl font-semibold">
                              Common Room
                            </h4>
                            <p className="text-sm dark:text-gray-400"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </section>
            </>
          </div>
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 2 ? "" : "hidden"
            }`}
            id="tab-panel-2a"
            aria-hidden={`${tabSelected.currentTab === 2 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-2a"
            tabindex="-1"
          >
            <>
              <Activities></Activities>
            </>
          </div>
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 3 ? "" : "hidden"
            }`}
            id="tab-panel-3a"
            aria-hidden={`${tabSelected.currentTab === 3 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-3a"
            tabindex="-1"
          >
            <>
              <p className="text-xl text-black bold mb-8">
                The on-campus undergraduate residential halls of Dreamers
                University provide a total of 1086 residential places, with 556
                places in the Residential and Amenities Complex and 530 places
                in the Research Complex.
              </p>

              <div>
               
              </div>
              <Apply></Apply>
            </>
          </div>
        </div>
      </section>
      {/*<!-- End Basic lg sized tab full width --> */}
    </div>
  );
}

export default index