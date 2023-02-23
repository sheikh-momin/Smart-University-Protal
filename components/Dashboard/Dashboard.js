import React from "react";
import Charts from "../../pages/dashboard/Charts";
import ChartofStudent from "../ChartofStudent";
import ProtalFooter from "../ProtalFooter/ProtalFooter";
import StudentDetails from "../StudentDetails";
import Studentinfo from "../Studentinfo";
import Studentinfo2 from "../Studentinfo2";
import Studentinfo3 from "../Studentinfo3";
import StudentPro from "../StudentPro";

const Dashboard = () => {
  return (
    <div className="md:w-3/4 w-full ">
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

        <div className="w-full grid gap-5 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1" >
          <div className="pt-10">
            <ChartofStudent></ChartofStudent>
          </div>
          <div className="pt-10">

            <StudentPro></StudentPro>
          </div>


        </div>


       

        <div className="w-full grid gap-5 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1" >
        
          <div className="pt-10">

            <Studentinfo2></Studentinfo2>
         
        </div>
          <div className="pt-10">

            <Studentinfo3></Studentinfo3>
         
        </div>



        </div>





      </section>

    </div>
  );
};

export default Dashboard;
