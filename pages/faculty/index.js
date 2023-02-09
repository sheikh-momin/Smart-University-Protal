import React from "react";
import FacultyCategory from "../../components/Faculty/FacultyCategory";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Faculty = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="md:grid grid-cols-1 gap-4 my-20">
        <div>
          <FacultyCategory></FacultyCategory>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Faculty;
