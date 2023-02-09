import React from "react";
import Category from "../../components/Admission/Category";
import FacultyCategory from "../../components/Faculty/FacultyCategory";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Business = () => {
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
              Department of Business Administration
            </h1>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fEJ1c2luZXNzJTIwQWRtaW5pc3RyYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="w-full h-[400px]"
            />
            <h3>
              The BBA Program of Eastern University prepares students for entry
              level managerial positions along with knowledge required also for
              their advancement into executive and senior management positions
              in any type of organization. The objective of the BBA Curriculum
              is to impart a well-rounded general and business education so that
              the students can develop their business acumen, social and
              networking skill and can assume leadership role in the competitive
              business world. The up-to-date, forward looking curriculum will
              familiarize the students with general and business environment,
              equip them with tools and techniques of business analysis, build
              their comprehension and assimilation capacity and help them
              acquire entrepreneurial and managerial skill. <br /> <br />
              The BBA is a 132 credit hours program consisting of 45 courses.
              The program includes general education, foundation, business core,
              business functions, integration and concentration courses and a
              full time internship or a project work for a semester. The program
              can be completed in twelve semesters (four years) if a student
              takes 12 credit hours every semester. It can be completed in
              shorter time if a student takes more than 12 credit hours per
              semester.
            </h3>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Business;
