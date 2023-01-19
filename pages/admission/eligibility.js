import Category from "../../components/Admission/Category";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Eligibility = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:grid grid-cols-12 gap-4 my-20">
        <div className="col-span-9">
          <div className="border-y border-slate-400 py-2">
            <h1 className="text-center text-teal-700 text-3xl font-bold italic font-serif">Admission Eligibility</h1>
          </div>
          <div className="md:ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Undergraduate Admission Requirements:</h1>
            <h3 className="">1. Minimum GPA of 2.5 each in SSC and HSC or equivalent public examinations. <br />
              2. Candidates with GPA 2.00 in any examination must have minimum GPA 6.00 combined.<br />
              3. In case of the ward of Freedom Fighter, at least GPA 5.00 combined in SSC/Dakhil, HSC/Alim or Equivalent Examination is required. Proof of Certificate must be submitted in this connection.<br />
              4. ‘0’ Level in 5 (five) subjects and ‘A’ Level in 2 (two) major subjects with minimum ‘B’ Grade in four subjects and ‘C’ Grade in three subjects.<br />
              5. For EEE/CSE programs, students must have had Physics and Mathematics in HSC/A-Level or equivalent level with fulfilling the above criteria.<br />
              6. Acceptable score in EU Admission Test.</h3>
          </div>
          <div className="md:ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Graduate Admission Requirements:</h1>
            <h3>1. The candidates applying for Master programs must have minimum GPA 2.00 or equivalent results at the Bachelor level and must fulfill the admission requirement for Bachelor program as per UGC’s set criteria. <br />
              2. A relevant undergraduate degree from a recognized university with a GPA of 2.00 (in a scale of 4.0) or 40% marks in graduation level out of 1000 marks. <br />
              3. At least 2 years of job experience with Bachelor degree or 4-year Bachelor (Honors) degree required for EMBA.</h3>
          </div>
          
      </div>
        <div className="col-span-3 mt-16"><Category></Category></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Eligibility