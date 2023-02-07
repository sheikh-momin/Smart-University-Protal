import React from "react";
import Drawer from "../../components/Dashboard/Drawer";
import WaiverForm from "../../components/WaiverForm";
import DashboardNavbar from "./dashboardNav/DashboardNavbar";

const FinancialAssistant = () => {
  return (
    <div className="bg-zinc-300">
      <DashboardNavbar></DashboardNavbar>
      <div className="border-y border-slate-400 py-2">
        <h1 className="text-center text-blue-500 text-3xl font-bold italic font-serif">
          Financial Assistance on GPA
        </h1>
      </div>
      <div className="flex w-full">
        <Drawer></Drawer>

        <div className="flex justify-center lg:ml-20">
          <div className="grid grid-cols-1 gap-x-4 mt-12 mb-20">
            <WaiverForm></WaiverForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialAssistant;
