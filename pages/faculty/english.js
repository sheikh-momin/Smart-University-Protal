import React from "react";
import FacultyCategory from "../../components/Faculty/FacultyCategory";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const english = () => {
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
              B.A. (Hons.) In English
            </h1>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/903165068/photo/meeting-with-business-partners.jpg?b=1&s=170667a&w=0&k=20&c=-ieg061VoVIyis6oAvCuUNiGNQ7FQuDSWuOvk8V6tdk="
              alt=""
              className="mx-auto w-full h-[400px]"
            />
            <h3>
              The Objective of the B.A. (Hons.) in English program is to provide
              students with sound knowledge of English language and literature
              and develop their academic knowledge and skill in the field of
              arts and literature. The program covers a comprehensive curriculum
              following standard international guidelines. The program has been
              designed to prepare the students to adjust to the reality of the
              contemporary world facing multidimensional issues. With sound
              knowledge of English literature and language, students will be
              able to find the roads to success open to them.
            </h3>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default english;
