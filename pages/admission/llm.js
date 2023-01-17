import Category from "../../components/Admission/Category";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const LLM = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-12 gap-4 my-20">
        <div className="col-span-9">
          <div className="border-y border-slate-400 py-2">
            <h1 className="text-center text-teal-700 text-3xl font-bold italic font-serif">Department of Law</h1>
          </div>
          <div className="ml-20 my-5 text-2xl">
            <h1 className="mb-3 text-teal-700 font-bold">LL.M</h1>
            
          </div>
          <div className="ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Duration of the Programs</h1>
            <h3>LL.M.(1year) – LL.M. one year program consists of three semesters and each semester lasts for four months.</h3>
          </div>
          <div className="ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Admission Requirements</h1>
            <h3>For LL.M. (1 Year) : Any one who has obtained LL.B. (Hons.) degree from this University or from any other recognized University in Bangladesh, or obtained an equivalent degree from any other foreign University is eligible for admission.</h3>
          </div>
        </div>
        <div className="col-span-3 mt-16"><Category></Category></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LLM;