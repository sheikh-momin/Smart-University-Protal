import React from "react";
import FacultyCategory from "../../components/Faculty/FacultyCategory";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const law = () => {
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
              Department of Law
            </h1>
          </div>
          <div>
            <img
              src="https://dept.jnu.ac.bd/assets/slider/31.jpg"
              alt=""
              className="mx-auto w-full h-[400px]"
            />
            <h3>
              Faculty of Law. We acknowledge that integrated legal learning is
              the only key in leveraging the inherent ability of the law to make
              it the best it can be in the pursuit of justice. We believe in
              making students ready to promptly respond to every situation with
              their theoretical and practical treasure of knowledge. It is noted
              that the life of laws dwells in the practicalities of society
              which should be reflected in both curriculum and teaching methods.
              Our faculty of law is unique to that extent which facilitates
              students to understand law from pragmatic point of view going
              beyond the black letter text. We are exceptional for our very own
              personalized educational systems along with our achievements in
              extra-curricular activities as well. The Faculty of Law plays a
              central role to nourish the intellectual life of the students. In
              addition to academic teaching, the faculty undertakes initiatives
              and programmes to foster the soft skills of the students that are
              required to compete in the present job market. The faculty
              emphasizes on the ability of the students and thereby nurtures
              students. It is well known that law is a profession of language
              and writing and Faculty of law aims to make its students capable
              in demonstrating their potentials in both language and writing
              skills.We offer you the best faculties, best learning methods and
              best place to bring out the best out of you. We have undertaken
              significant investment in the field of teaching and researching.
            </h3>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default law;
