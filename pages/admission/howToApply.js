import Link from "next/link";
import Category from "../../components/Admission/Category";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const HowToApply = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-12 gap-4 my-20">
        <div className="col-span-9">
          <div className="border-y border-slate-400 py-2">
            <h1 className="text-center text-teal-700 text-3xl font-bold italic font-serif">How to Apply</h1>
          </div>
          <div className="ml-20 my-5 text-lg">
            
            <h3>Welcome to the Admissions Office at DU. DU offers a diverse set of programs at the undergraduate and graduate level. <br /><br />

              Students seeking admission can collect Admission Form from admission office paying Tk.500 or apply online or download it from the link given bellow and can submit the same either online or directly to admission office.</h3>
          </div>
          <div className="ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Visit and talk to us</h1>
            <h3>We have several ways for you to apply. The best one is to come in and talk with our Admissions Counselors. Our address is: <br /> <br />

              Road 6, Block B,<br />
              Ashulia Model Town, Savar, Dhaka-1345.<br />
              Phone: 09238408233<br />
              Cell: +8801841718666, +8801926324222,<br />
              +8801844144144, +8801794718666<br />
              Email: admission@dreamers.edu.bd</h3>
          </div>
          <div className="ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Apply Online</h1>
            <h3>Please click here to access <Link className="text-teal-600" href="/admission/applyOnline">Apply Online</Link>.</h3>
          </div>
        </div>
        <div className="col-span-3 mt-16"><Category></Category></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HowToApply;