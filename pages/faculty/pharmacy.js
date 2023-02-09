import React from "react";
import FacultyCategory from "../../components/Faculty/FacultyCategory";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const pharmacy = () => {
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
              Pharmacy
            </h1>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1605725961202-18c2678ea41e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fFBoYXJtYWN5JTIwc3R1ZGVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="mx-auto w-full h-[400px]"
            />
            <h3>
              {" "}
              A student with 12 years formal pre-University education (i.e.
              S.S.C. + H.S.C. or its equivalent) must complete sufficient
              courses for graduation that is he/she must earn at total of 160
              credits that includes General Education (suggested by UGC), Basic
              Science and Mathematics, Core Engineering and Other Engineering
              courses. The following uniform grading system approved by the UGC
              for all Universities is applied in evaluating the examinations of
              students. The minimum passing grade for graduation is CGPA 2.50.
              The overall performance of a student will be expressed in terms of
              Cumulative Grade Point Average (CGPA). A student can sit for any
              retake / improvement exam on payment of prescribed fees. Student’s
              performance evaluation in a course is shown in Figure. Students
              are continuously assessed through class attendance, participation,
              group discussion and Class tests. To maintain the quality
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

export default pharmacy;
