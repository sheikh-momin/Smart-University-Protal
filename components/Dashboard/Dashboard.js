import React from "react";
import Charts from "../../pages/dashboard/Charts";
import ProtalFooter from "../ProtalFooter/ProtalFooter";
import StudentDetails from "../StudentDetails";

const Dashboard = () => {
  return (
    <div className="md:w-3/4 w-full bg-zinc-300 ">
      <section className="">
        <h2></h2>
        <div>
          <StudentDetails></StudentDetails>
        </div>

        <div className="grid grid-cols-3 gap-4 md:w-9/12 md:mx-auto mx-5 text-white mt-10">
          <div className="bg-amber-300 md:p-8  p-2 rounded-xl">
            <h4 className="md:text-2xl">Total Payable</h4>
            <h2 className="md:text-5xl">$14000</h2>
          </div>
          <div className="bg-fuchsia-400  md:p-8 p-2 rounded-xl">
            <h4 className="md:text-2xl">Total Paid</h4>
            <h2 className="md:text-5xl">$7000</h2>
          </div>
          <div className="bg-blue-400  md:p-8 p-2 rounded-xl">
            <h4 className="md:text-2xl">Total Due</h4>
            <h2 className="md:text-5xl">$7000</h2>
          </div>
        </div>

        <div className="flex justify-center">
          <Charts></Charts>
        </div>
      </section>
      
    </div>
  );
};

export default Dashboard;
