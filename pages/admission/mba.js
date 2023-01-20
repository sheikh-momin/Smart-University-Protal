import Category from "../../components/Admission/Category";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const MBA = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:grid grid-cols-12 gap-4 my-20">
        <div className="col-span-9">
          <div className="border-y border-slate-400 py-2">
            <h1 className="text-center text-teal-700 text-3xl font-bold italic font-serif">Department of Business Administration</h1>
          </div>
          <div className="md:ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">MBA (Masters of Business Administration) - Regular</h1>
            <h3>The regular MBA program is a multi-disciplinary professional graduate study designed to meet the needs of the students who want to develop their career as successful managers, executives, and professionals of local and multinational organizations and as entrepreneurs. The program offers a unique opportunity for the prospective and practicing managers and professionals to upgrade their professional knowledge, expertise and improve their decision making and problem solving skills in different management areas of private and public sector and not-for-profit organizations.</h3>
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
            <h1 className="mb-3 text-teal-600 font-bold">Features of the Regular MBA Program</h1>
            <h3>The MBA (Regular) is a two-year (six semesters) program. A full-time student with any other Master's Degree should be able to complete the program in 16 to 20 months. A part time student will however take a longer time depending upon the number of courses he enrolls in every semester. A student with a 4-year BBA degree should be able to complete in 12 to 20 months as he may get exemption in some courses. A maximum of 24 credit hours may be exempted. Equivalence Committee of the University decides on course waiver based on previous results. <br /><br />

              Students are required to complete 16 foundation and functional courses, one capstone/integrated course and any four courses chosen from the area of concentration. In addition to completion of these 21 courses of 63 credit hours (3 credit hours for each course), a student is required to undergo an Internship Program, or write a thesis or undertake a Specialized Business Project of 3 credit hours. The total number of credit hours that are required to complete the regular MBA program at Eastern University is 66. <br /><br />

              A student is required to take at least two courses per semester. A student must complete the program within a maximum period of 6 (six) years from the initial date of registration. <br /><br />

              The regular MBA is a comprehensive program with appropriate emphasis on functional, cross-functional and support areas of modern business and organizational management. In addition to course work, carefully selected and designed project works, assignments, case studies, etc. serve the purpose of cross-functional integration of professional knowledge and skills of students in the context of real life business situations. Project works, case assignments, etc. are carefully designed to integrate the learning in individual courses to the real life practices.</h3>
          </div>
          <div className="md:ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Admission Requirement</h1>
            <h3>Candidates must have at least second division or a minimum GPA of 2.50 in both SSC/Dakhil and HSC/Alim/Diploma from Technical Education Board or Minimum GPA of 2.00 in one of those exam with total GPA of 6.00 in both the exams are eligible for admission. The GCE Students must have passed five subjects in O-level and two subjects in A-level.</h3>
          </div>
          <div className="md:ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Degree Requirement</h1>
            <h3>To qualify for the MBA degree, a student has to pass all the required courses individually, pass the internship or the project with a minimum “C” grade, earn a minimum Cumulative Grade Point Average (CGPA) of 2.50 and maintain a record of good conduct.</h3>
          </div>
        </div>
        <div className="col-span-3 mt-16"><Category></Category></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MBA;