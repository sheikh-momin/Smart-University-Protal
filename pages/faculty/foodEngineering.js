import React from "react";
import FacultyCategory from "../../components/Faculty/FacultyCategory";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const foodEngineering = () => {
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
              Food Engineering
            </h1>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT-0qpjjPsy49JG4limnWf9lKopqWwRKvQMQ&usqp=CAU"
              alt=""
              className="mx-auto w-full h-[400px]"
            />
            <h3>
              {" "}
              Nutrition and Food Engineering The department brought a balance of
              engineering and food processing. The students get a detailed
              knowledge of food engineering principles and food processing
              systems.
              <br /> <br />
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

export default foodEngineering;
