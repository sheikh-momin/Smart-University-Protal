import React from "react";
import FacultyCategory from "../../components/Faculty/FacultyCategory";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const EEE = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:grid grid-cols-12 gap-4 my-20">
        <div className="col-span-3 mt-16">
          <FacultyCategory></FacultyCategory>
        </div>
        <div className="col-span-9">
          <div className="border-y border-slate-400 py-2">
            <h1 className="text-center text-teal-700 text-3xl font-bold italic font-serif">
              Electrical and Electronic Engineering
            </h1>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8RWxlY3RyaWNhbCUyMGVuZ2luZWVyaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="mx-auto w-full h-[400px]"
            />
            <h3>
              The Department of Electrical and Electronic Engineering offers
              program leading to the degree of B.Sc. in Electrical and
              Electronic Engineering (EEE). The credit hours required for
              completion of the B. Sc. (EEE) program is 149. The program
              includes courses from General areas namely, English, Physics,
              Chemistry, Economics, Accounting, Arts, and from Engineering
              disciplines namely, Electrical, Electronics, Telecommunication,
              Industrial Derives, Control System and Power Systems Engineering
              as major area, and also Computer and Mechanical Engineering as
              allied Engineering. The program requires some of the courses as
              core courses and it has left option for the students to choose a
              few courses as electives for specialization. <br /> <br />
              The curriculum for the B.Sc. (EEE) has been designed to make the
              program goal-oriented to fulfill the needs of the age.
            </h3>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default EEE;
