import Category from "../../components/Admission/Category";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const LLB = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:grid grid-cols-12 gap-4 my-20">
        <div className="col-span-3 mt-16"><Category></Category></div>
        <div className="col-span-9">
          <div className="border-y border-slate-400 py-2">
            <h1 className="text-center text-teal-700 md:text-3xl font-bold italic font-serif">Department of Law</h1>
          </div>
          <div className="mx-5 my-5 text-2xl">
            <h1 className="mb-3 text-teal-700 font-bold">LL.B (Hons.)</h1>
            
          </div>
          
          <div className="mx-5 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Degree Requirement</h1>
            <h3>To qualify for the LL.B. (Hons.), a student has to pass all required courses individually with a minimum Cumulative Grade Point Average (CGPA) of 2.50. Students are required to undertake 130 credit hours.</h3>
          </div>
        </div>
        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LLB;