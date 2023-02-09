import React from "react";
import FacultyCategory from "../../components/Faculty/FacultyCategory";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const textile = () => {
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
              Textile Engineering{" "}
            </h1>
          </div>
          <div>
            <img
              src="https://nstiwpanipat.dgt.gov.in/sites/default/files/inline-images/AAA20191121_104932-min.jpg"
              alt=""
              className="mx-auto w-full h-[400px]"
            />
            <h3>
              The Department of Textile Engineering deals with the application
              of scientific and engineering principles to the design and control
              of all aspects of fiber, textile, and apparel processes, products,
              and machinery. It encompasses different areas of engineering, such
              as mechanical, electrical, computer, chemical, instrumentation,
              electronic and structural engineering. The curriculum for the
              B.Sc. has been designed to make the program goal-oriented to
              fulfill the needs of the age
            </h3>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default textile;
