import React from "react";
import Charts from "../../pages/dashboard/Charts";
import StudentDetails from "../StudentDetails";

const Dashboard = () => {
  return (
    <div className="w-3/4 bg-white ">
      <section className="">
        <h2></h2>
        <div>
          <StudentDetails></StudentDetails>
        </div>

        <div className="grid grid-cols-3 gap-4 w-9/12 mx-auto text-white mt-10">
          <div className="bg-amber-300 p-8 rounded-xl">
            <h4 className="text-2xl">Total Payable</h4>
            <h2 className="text-5xl">$14000</h2>
          </div>
          <div className="bg-fuchsia-400 p-8 rounded-xl">
            <h4 className="text-2xl">Total Paid</h4>
            <h2 className="text-5xl">$7000</h2>
          </div>
          <div className="bg-blue-400 p-8 rounded-xl">
            <h4 className="text-2xl">Total Due</h4>
            <h2 className="text-5xl">$7000</h2>
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
