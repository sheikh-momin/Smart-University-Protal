import Image from "next/image";
import Category from "../../components/Admission/Category";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const ForeignStudent = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-12 gap-4 my-20">
        <div className="col-span-9">
          <div className="border-y border-slate-400 py-2">
            <h1 className="text-center text-teal-700 text-3xl font-bold italic font-serif">Tuition and Fees</h1>
          </div>
          <div className="ml-20 my-5 ">
            <Image src={'/foreignStudent.png'} width={1100} height={800}></Image>
            
          </div>

        </div>
        <div className="col-span-3 mt-16"><Category></Category></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ForeignStudent;