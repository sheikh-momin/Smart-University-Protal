import Category from "../../components/Admission/Category";
import Form from "../../components/Admission/Form";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";



const ApplyOnline = () => {

  

  return (
    <div>
      <Navbar></Navbar>
      <div className="md:grid grid-cols-12 gap-4 my-20">
        <div className="col-span-9">
          <div className="border-y border-slate-400 py-2">
            <h1 className="text-center text-teal-700 text-3xl font-bold italic font-serif">Online Application Form</h1>
          </div>
          <div className="md:ml-20 my-5 ">
            <Form></Form>
          </div>

        </div>
        <div className="col-span-3 mt-16"><Category></Category></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ApplyOnline;