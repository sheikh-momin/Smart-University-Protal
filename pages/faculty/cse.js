import React from "react";
import Category from "../../components/Admission/Category";
import FacultyCategory from "../../components/Faculty/FacultyCategory";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const cse = () => {
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
              Computer Science and Engineering
            </h1>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="mx-auto w-full h-[400px]"
            />
            <h3>
              The department of CSE was eastablished in 2003. The department is
              housed in campus II. Currently the Department offers Bachelor of
              Science in Computer Science and Engineering Degree and graduates
              of this program have already secured excellent and prestigious
              jobs in the ICT industry of the countrty. The credit required for
              completion of the B.Sc. (CSE) program is 150. <br /> <br />
              The department, science inception, has gradually advanced in terms
              of logistics and a good number of quality faculty members. At
              present the department has 13 full time and 8 part-time faculty
              members, who are highly qualifed and have completed their
              graduation from Dhaka University and BUET. There are well equipped
              Software Labs, Networking Lab, Microprocessor Lab, DLD Lab and
              Electrical and Electronic Engineering Lab. <br /> <br />
              Apart from academic activities, the students of the Department
              regularly take part in different co-curricular and
              extra-curricular activities such as programming conttest, debates,
              sprots competitions, games contests, welfare programs, etc.
            </h3>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default cse;
