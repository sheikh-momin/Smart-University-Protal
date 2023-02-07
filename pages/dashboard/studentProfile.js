import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import Drawer from "../../components/Dashboard/Drawer";
import ProfileForm from "../../components/ProfileForm";
import Dashboardnav from "./dashboardNav/Dashboardnav";
import DashboardNavbar from "./dashboardNav/DashboardNavbar";

const StudentProfile = () => {
  return (
    <div className="bg-zinc-300">
      <DashboardNavbar></DashboardNavbar>

      
      <div className="border-y border-slate-400 py-2">
        <h1 className="text-center text-blue-500 text-3xl font-bold italic font-serif">
          Student Profile
        </h1>
      </div>
      
      <div>
        <div className="flex w-full">
          <Drawer></Drawer>

          <div className="flex justify-center lg:ml-40 lg:mt-12">
            <div className="grid grid-cols-1 gap-4 my-20">
              <ProfileForm></ProfileForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
