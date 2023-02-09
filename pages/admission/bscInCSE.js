import Category from "../../components/Admission/Category";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const BScInCSE = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:grid grid-cols-12 gap-4 my-20">
        <div className="col-span-3 mt-16"><Category></Category></div>
        <div className="col-span-9">
          <div className="border-y border-slate-400 py-2">
            <h1 className="text-center text-teal-700 md:text-3xl font-bold italic font-serif">Department of Computer Science and Engineering</h1>
          </div>
          <div className="mx-5 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">B.Sc. in CSE (Computer Science and Engineering)</h1>
            <h3>The department of CSE was eastablished in 2003. The department is housed in campus II. Currently the Department offers Bachelor of Science in Computer Science and Engineering Degree and graduates of this program have already secured excellent and prestigious jobs in the ICT industry of the countrty. The credit required for completion of the B.Sc. (CSE) program is 150. <br /> <br />

              The department, science inception, has gradually advanced in terms of logistics and a good number of quality faculty members. At present the department has 13 full time and 8 part-time faculty members, who are highly qualifed and have completed their graduation from Dhaka University and BUET. There are well equipped Software Labs, Networking Lab, Microprocessor Lab, DLD Lab and Electrical and Electronic Engineering Lab. <br /> <br />

              Apart from academic activities, the students of the Department regularly take part in different co-curricular and extra-curricular activities such as programming conttest, debates, sprots competitions, games contests, welfare programs, etc.</h3>
          </div>
          <div className="mx-5 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Entry Requirement</h1>
            <h3>Candidates with minimum GPA of 2.50 in both SSC/ Dhakil and HSC/ Alim/ Diploma from Technical Education Board or minimum GPA of 2.00 in one of those exams with total GPA of 6.00 in both the exams are eligible for admission. The GCE students must have passed 5 (five) subjects in O-Level with a minimum GPA of 2.50 and 2 (Two) subjects in A-Level a minimum GPA of 2.00. One "E" grade willbe accepted in "O" level or "A" level . <br /> <br />

              In addition to the above requirements, for admissionin CSE Department, the candidate must have science background in both SSC and HSC (or in equivalent level) as well as the candidate must have mathematics at HSC Level (or in equivalent level).</h3>
          </div>
          <div className="mx-5 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Duration of the program</h1>
            <h3>The duration for B. Sc. in Computer Science and Engineering program is four years divided into 12 semesters</h3>
          </div>
          <div className="mx-5 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Graduation Requirement</h1>
            <h3>To obtain BSCSE degree a student will have to complete 150.0 cr. hrs. with a minimum CGPA of 2.5.</h3>
          </div>
        </div>
        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BScInCSE;