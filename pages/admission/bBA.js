import Category from "../../components/Admission/Category";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const BBA = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:grid grid-cols-12 gap-4 my-20">
        <div className="col-span-9">
          <div className="border-y border-slate-400 py-2">
            <h1 className="text-center text-teal-700 text-3xl font-bold italic font-serif">Department of Business Administration</h1>
          </div>
          <div className="md:ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">BBA (Bachelor of Business Administration)</h1>
            <h3>The BBA Program of Eastern University prepares students for entry level managerial positions along with knowledge required also for their advancement into executive and senior management positions in any type of organization. The objective of the BBA Curriculum is to impart a well-rounded general and business education so that the students can develop their business acumen, social and networking skill and can assume leadership role in the competitive business world. The up-to-date, forward looking curriculum will familiarize the students with general and business environment, equip them with tools and techniques of business analysis, build their comprehension and assimilation capacity and help them acquire entrepreneurial and managerial skill. <br /> <br />

              The BBA is a 132 credit hours program consisting of 45 courses. The program includes general education, foundation, business core, business functions, integration and concentration courses and a full time internship or a project work for a semester. The program can be completed in twelve semesters (four years) if a student takes 12 credit hours every semester. It can be completed in shorter time if a student takes more than 12 credit hours per semester.</h3>
          </div>
          <div className="md:ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Admission Requirement</h1>
            <h3>Candidates with a minimum GPA of 2.50 in both SSC/Dakhil and HSC/Alim/Diploma from Technical Education Board or Minimum GPA of 2.00 in one of those exam with total GPA of 6.00 in both the exams are eligible for admission .The GCE Students must have passed five subjects in O-level and two subjects in A-level.</h3>
          </div>
          <div className="md:ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Degree Requirement</h1>
            <h3>To qualify for the BBA degree, a student has to pass all the required courses individually, pass the internship or the project with a minimum “C” grade, earn a minimum Cumulative Grade Point Average (CGPA) of 2.50 and maintain a record of good conduct.</h3>
          </div>
        </div>
        <div className="col-span-3 mt-16"><Category></Category></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BBA;