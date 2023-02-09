import Category from "../../components/Admission/Category";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";


const BAInEnglish = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:grid grid-cols-12 gap-4 my-20">
        <div className="col-span-3 mt-16"><Category></Category></div>
        <div className="col-span-9">
          <div className="border-y border-slate-400 py-2">
            <h1 className="text-center text-teal-700 md:text-3xl font-bold italic font-serif">Department of English</h1>
          </div>
          <div className="mx-5 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Admission Requirement</h1>
            <h3>To be eligible to apply for admission into B.A. (Hons.) in English a candidate must have a minimum GPA of 2.50 at the SSC/Dakhil and HSC/Alim/Diploma of Bangladesh Technical Education Board. GCE students must have passed five subjects at O-Level and two subjects at A-Level. The final selection will be made on the basis of Admission Test. Students with average GPA 4 or above in SSC (or equivalent) exam and HSC (or equivalent) exam do not need to sit for the admission test</h3>
          </div>
          <div className="mx-5 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Degree Requirements</h1>
            <h3>To qualify for the B.A. (Hons.) degree, a student has to pass all the required courses individually , earn a minimum Cumulative Grade Point Average (CGPA) of 2.50 on completion of 121 credit hours and maintain a record of good conduct.</h3>
          </div>
        </div>
        
      </div>
      <Footer></Footer>

    </div>
  );
};

export default BAInEnglish;