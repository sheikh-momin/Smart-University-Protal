import React, { useState, useRef, useEffect } from "react";

const Notice = () => {
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
    <>
       {/*<!-- Component: Pill lg sized tab --> */}
      <section className="max-w-full" aria-multiselectable="false">
        <ul className="flex items-center lg:gap-2" role="tablist" ref={wrapperRef}>
          <li className="" role="presentation">
            <button
              className={`inline-flex h-12 items-center justify-center lg:gap-2 whitespace-nowrap rounded px-2 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 1
                  ? "bg-emerald-500 text-white hover:bg-emerald-600 focus:bg-emerald-700 disabled:bg-emerald-300"
                  : "w-full justify-self-center stroke-slate-700 text-slate-700 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-emerald-300"
              }`}
              id="tab-label-1e"
              role="tab"
              aria-setsize="3"
              aria-posinset="1"
              tabindex={`${tabSelected.currentTab === 1 ? "0" : "-1"}`}
              aria-controls="tab-panel-1e"
              aria-selected={`${
                tabSelected.currentTab === 1 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 1 })}
            >
              <span>Dept</span>
            </button>
          </li>
          <li className="" role="presentation">
            <button
              className={`inline-flex h-12 items-center justify-center lg:gap-2 whitespace-nowrap rounded px-2 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 2
                  ? "bg-emerald-500 text-white hover:bg-emerald-600 focus:bg-emerald-700 disabled:bg-emerald-300"
                  : "w-full justify-self-center stroke-slate-700 text-slate-700 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-emerald-300"
              }`}
              id="tab-label-2e"
              role="tab"
              aria-setsize="3"
              aria-posinset="2"
              tabindex={`${tabSelected.currentTab === 2 ? "0" : "-1"}`}
              aria-controls="tab-panel-2e"
              aria-selected={`${
                tabSelected.currentTab === 2 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 2 })}
            >
              <span>Admission</span>
            </button>
          </li>
          <li className="" role="presentation">
            <button
              className={`inline-flex h-12 items-center justify-center lg:gap-2 whitespace-nowrap rounded px-2 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 3
                  ? "bg-emerald-500 text-white hover:bg-emerald-600 focus:bg-emerald-700 disabled:bg-emerald-300"
                  : "w-full justify-self-center stroke-slate-700 text-slate-700 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-emerald-300"
              }`}
              id="tab-label-3e"
              role="tab"
              aria-setsize="3"
              aria-posinset="3"
              tabindex={`${tabSelected.currentTab === 3 ? "0" : "-1"}`}
              aria-controls="tab-panel-3e"
              aria-selected={`${
                tabSelected.currentTab === 3 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 3 })}
            >
              <span>Administration</span>
            </button>
          </li>
        </ul>
        <div className="">
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 1 ? "" : "hidden"
            }`}
            id="tab-panel-1e"
            aria-hidden={`${tabSelected.currentTab === 1 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-1e"
            tabindex="-1"
          >
            <p>
              What is the recipe for successful achievement? To my mind there
              are just four essential ingredients: Choose a career you love,
              give it the best there is in you, seize your opportunities, and be
              a member of the team.
            </p>
          </div>
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 2 ? "" : "hidden"
            }`}
            id="tab-panel-2e"
            aria-hidden={`${tabSelected.currentTab === 2 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-2e"
            tabindex="-1"
          >
            <p>
              One must be entirely sensitive to the structure of the material
              that one is handling. One must yield to it in tiny details of
              execution, perhaps the handling of the surface or grain, and one
              must master it as a whole.
            </p>
          </div>
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 3 ? "" : "hidden"
            }`}
            id="tab-panel-3e"
            aria-hidden={`${tabSelected.currentTab === 3 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-3e"
            tabindex="-1"
          >
            <p>
              Even though there is no certainty that the expected results of our
              work will manifest, we have to remain committed to our work and
              duties; because, even if the results are slated to arrive, they
              cannot do so without the performance of work.
            </p>
          </div>
        </div>
      </section>
      {/*<!-- End Pill lg sized tab --> */}
    </>
  
  );
};

export default Notice;
