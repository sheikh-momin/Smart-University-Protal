import Image from "next/image";
import Category from "../../components/Admission/Category";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";


const Fees = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:grid grid-cols-12 gap-4 my-20">
        <div className="col-span-3 mt-16"><Category></Category></div>
        <div className="col-span-9">
          <div className="border-y border-slate-400 py-2">
            <h1 className="text-center text-teal-700 md:text-3xl font-bold italic font-serif">Tuition and Fees</h1>
          </div>
          <div className="mx-5 my-5 ">
            <Image src={'/fees1.png'} width={1100} height={800}></Image>
            <Image src={'/fees2.png'} width={1100} height={800}></Image>
          </div>
          
        </div>
        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Fees;