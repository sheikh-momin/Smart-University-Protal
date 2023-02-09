import React from "react";
import FacultyCategory from "../../components/Faculty/FacultyCategory";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const architecture = () => {
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
              Architecture
            </h1>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
              alt=""
              className="mx-auto w-full h-[400px]"
            />
            <h3>
              The mission of the department is to develop the students to
              develop a career as Professional Architecture. The contents are
              selected to provide a harmonious blend of relevant basic courses,
              fundamentals of building technology, and their applications as
              well as social, technical and environmental relevance. The
              curriculum for the B.Sc. has been designed to make the program
              goal-oriented to fulfill the needs of the age
            </h3>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default architecture;
