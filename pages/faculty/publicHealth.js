import React from "react";
import FacultyCategory from "../../components/Faculty/FacultyCategory";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const publicHealth = () => {
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
              Public Health
            </h1>
          </div>
          <div>
            <img
              src="https://cdn.flatworldsolutions.com/featured-images/public-health-engineering-services.jpg"
              alt=""
              className="mx-auto w-full h-[400px]"
            />
            <h3>
              The Department of Public Health exclusively focuses on the welfare
              of public health and serves the community by conducting research
              on different health issues and medicines. The graduates contribute
              in presenting a healthy nation through knowledge generation,
              research and giving services in the public health sector. <br />{" "}
              <br />
              Apart from academic activities, the students of the Department
              regularly take part in different co-curricular and
              extra-curricular activities such as programming conttest, debates,
              sports competitions, games contests, welfare programs, etc.
            </h3>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default publicHealth;
