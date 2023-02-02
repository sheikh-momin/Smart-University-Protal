import React from "react";
import Navbar from "../../components/Navbar";
import WaiverForm from "../../components/WaiverForm";
import Dashboardnav from "./dashboardNav/Dashboardnav";

const FinancialAssistant = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="border-y border-slate-400 py-2">
        <h1 className="text-center text-teal-700 text-3xl font-bold italic font-serif">
          Financial Assistance on GPA
        </h1>
      </div>
      <div className="flex w-full">
        <Dashboardnav></Dashboardnav>

        <div className="flex justify-center lg:ml-48">
          <div className="grid grid-cols-1 gap-4 my-20">
            <WaiverForm></WaiverForm>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-4 mx-20 my-5">
          <WaiverForm></WaiverForm>
        </div>
      </div> */}
    </div>
  );
};

export default FinancialAssistant;
