import Category from "../../components/Admission/Category";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const BCcInEEE = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:grid grid-cols-12 gap-4 my-20">
        <div className="col-span-3 mt-16"><Category></Category></div>
        <div className="col-span-9">
          <div className="border-y border-slate-400 py-2">
            <h1 className="text-center text-teal-700 md:text-3xl font-bold italic font-serif">Department of Electrical and Electronics Engineering</h1>
          </div>
          <div className="mx-5 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">B.Sc. in EEE (Electrical and Electronic Engineering)</h1>
            <h3>The Department of Electrical and Electronic Engineering offers program leading to the degree of B.Sc. in Electrical and Electronic Engineering (EEE). The credit hours required for completion of the B. Sc. (EEE) program is 149. The program includes courses from General areas namely, English, Physics, Chemistry, Economics, Accounting, Arts, and from Engineering disciplines namely, Electrical, Electronics, Telecommunication, Industrial Derives, Control System and Power Systems Engineering as major area, and also Computer and Mechanical Engineering as allied Engineering. The program requires some of the courses as core courses and it has left option for the students to choose a few courses as electives for specialization. <br /> <br />

              The curriculum for the B.Sc. (EEE) has been designed to make the program goal-oriented to fulfill the needs of the age.</h3>
          </div>
          <div className="mx-5 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Entry Requirement</h1>
            <h3>Candidates with minimum GPA of 2.0 in both SSC/Dhakil and HSC/Alim/Diploma from Technical Education Board or minimum GPA of 2.00 in one of those exams with total GPA of 6.00 in both the exams are eligible for admission. The GCE students must have passed five subjects in O-Level and two subject in A-Level.</h3>
          </div>
          <div className="mx-5 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Duration of the program</h1>
            <h3>The duration for B. Sc. in Electrical and Electronic Engineering program is four years divided into 12 semesters.</h3>
          </div>
          <div className="mx-5 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Graduation Requirement</h1>
            <h3>To obtain BSEEE degree a student will have to complete 149.0 cr. hrs. with a minimum CGPA of 2.5.</h3>
          </div>
        </div>
        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BCcInEEE;