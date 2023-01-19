import Category from "../../components/Admission/Category";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const EMBA = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:grid grid-cols-12 gap-4 my-20">
        <div className="col-span-9">
          <div className="border-y border-slate-400 py-2">
            <h1 className="text-center text-teal-700 text-3xl font-bold italic font-serif">Department of Business Administration</h1>
          </div>
          <div className="md:ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">MBA (Masters of Business Administration) - Executive</h1>
            <h3>Recognizing the need to prepare highly skilled and qualified managers and professionals for private, public and not-for-profit organizations, Eastern University has designed its Executive MBA Program which offers a unique opportunity for managers, executives and professionals to upgrade their professional expertise and to improve their problem-solving skills. This is a multidisciplinary professional graduate program, which is designed for managers of all levels from both local, national and multinational organizations.</h3>
          </div>
          <div className="md:ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Objectives</h1>
            <h3>To develop the competence necessary for executives in an increasingly complex and globalized business world. <br />
              To enhance critical thinking and develop communication, interpersonal and leadership skills.<br />
              To enhance the real life exposure and practical orientation of the students.<br />
              To enhance the ability of the students to identify business opportunities and resolve managerial problems.<br />
              To develop students' understanding of the functional areas of business and develop a general perspective of their interrelationships.<br />
              To promote the intellectual growth of students who would like to pursue higher studies and research leading to Ph.D and to groom them to be academics in pursuance of a teaching profession at University level in their area of specialization.</h3>
          </div>
          <div className="md:ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Features of the Executive MBA Program</h1>
            <h3>The Executive MBA is a four-semester program for full time students. A part time student will however take a longer time depending upon the number of courses he enrolls in every semester. In total, an Executive MBA student is required to complete 14 courses, each accounting for 3 credit hours, that is, a total of 42 credit hours. A student should take 2 to 4 courses per semester. Classes are held in the afternoon in the week ends and in the evening on selected days to suit the convenience of the students. A student with a 4-year BBA or M.Com degree may be allowed waiver of a maximum of 15 credit hours. <br /> <br />

              Assignments, project works and case studies serve the purpose of cross functional integration of professional knowledge and skills in the context of real life business situations. Project works and assignments are designed to relate the learning in an individual course to the real life practices. Students are particularly encouraged to do project works in their respective organizations focusing on any strategic area.</h3>
          </div>
          <div className="md:ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Admission Requirement</h1>
            <h3>Candidates with a minimum GPA of 2.50 in both SSC/Dakhil and HSC/Alim/Diploma from Technical Education Board or Minimum GPA of 2.00 in one of those exam with total GPA of 6.00 in both the exams are eligible for admission .The GCE Students must have passed five subjects in O-level and two subjects in A-level. In addition, the candidates must have at least 2 years of job experience.</h3>
          </div>
          <div className="md:ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Degree Requirement</h1>
            <h3>A student must complete the program within a maximum period of 4 (four) years from the date of registration. To qualify for the EMBA degree, a student has to pass all the required courses individually, pass the internship or the project with a minimum “C” grade, earn a minimum Cumulative Grade Point Average (CGPA) of 2.50 and maintain a record of good conduct.</h3>
          </div>
        </div>
        <div className="col-span-3 mt-16"><Category></Category></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default EMBA;