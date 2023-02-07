import React from "react";
import AlumniForm from "../../components/Dashboard/AlumniForm";
import Drawer from "../../components/Dashboard/Drawer";
import DashboardNavbar from "./dashboardNav/DashboardNavbar";

const AlumniInfo = () => {
  return (
    <div className="bg-zinc-300">
      <DashboardNavbar></DashboardNavbar>

      <div className="border-y border-slate-400 py-2">
        <h1 className="text-center text-blue-500 text-3xl font-bold italic font-serif">
          Alumni Professional Info Save
        </h1>
      </div>

      <div>
        <div className="flex w-full">
          <Drawer></Drawer>

          <div className="flex justify-center lg:ml-12 ">
            <div className="grid grid-cols-1 gap-4 my-12">
              <AlumniForm></AlumniForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniInfo;
