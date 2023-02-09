import React from "react";
import FacultyCategory from "../../components/Faculty/FacultyCategory";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const tourism = () => {
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
              Tourism & Hospitality Management
            </h1>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1580795479172-6c29db0fd7c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fFRvdXJpc20lMjAlMjYlMjBIb3NwaXRhbGl0eSUyME1hbmFnZW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="mx-auto w-full h-[400px]"
            />
            <h3>
              {" "}
              The objective of the department is to produce competent human
              resources to meet the ever-growing demand of the tourism industry
              and in their basic functions. Students have the scope to find jobs
              globally and enhance your skill-set. To maintain the quality
              education question papers should be prepared based on Bloom’s
              Taxonomy. Rubrics should be set out for every course so that every
              student ensure what criteria is maintained in the evaluation
              process of examination script.
            </h3>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default tourism;
