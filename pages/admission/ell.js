import Category from "../../components/Admission/Category";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const ELL = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-12 gap-4 my-20">
        <div className="col-span-9">
          <div className="border-y border-slate-400 py-2">
            <h1 className="text-center text-teal-700 text-3xl font-bold italic font-serif">Department of English</h1>
          </div>
          <div className="ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">M.A. ELL(English Language & Literature)</h1>
            <h3>The M.A. ELL program consists of 3 Semesters and 41 credit hours spread over 13 courses each having 3-credit hour weight. There will be a viva-voce exam of 2-credit hour weight to be held finally after the completion of all the written courses including Research Methodology and Practice course. Students have to do 4 courses a Semester, but there will be option to do 2/3 courses a Semester if a student so desires.</h3>
          </div>
          <div className="ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Admission Requirement</h1>
            <h3>For admission into M.A. ELL (English Language and Literature) a candidate must have a 4-year B.A.(Hons.) degree in English or must have passed M.A. (Preliminary) in English</h3>
          </div>
          <div className="ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Degree Requirements</h1>
            <h3>To qualify for the M.A. ELL degree, a student has to pass all the required courses individually , earn a minimum Cumulative Grade Point Average (CGPA) of 2.50 on completion of 41 credit hours and maintain a record of good conduct.</h3>
          </div>
        </div>
        <div className="col-span-3 mt-16"><Category></Category></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ELL;