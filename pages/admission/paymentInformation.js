import Category from "../../components/Admission/Category";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Link from "next/link";

const PaymentInformation = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:grid grid-cols-12 gap-4 my-20">
        <div className="col-span-9">
          <div className="border-y border-slate-400 py-2">
            <h1 className="text-center text-teal-700 text-3xl font-bold italic font-serif">Payment Information</h1>
          </div>
          <div className="md:ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Payable during Admission</h1>
            <h3>Admission Form= Tk. 500 <br />
              Admission Fee Tk. 10,000 + Registration Fee Tk. 7,000 + Security Deposit Tk. 2,000 = Total Tk. 19,000</h3>
          </div>
          <div className="md:ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Total Payable during Admission = Tk. 19,500</h1>

          </div>
          <div className="md:ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Online Payment</h1>
            <h3>Contact a bKash Agent,Pay Tk. 500 to bKash no. 01794718666, and collect a TrxID number.
              Go to DU Website , go to admission, go to <Link className="text-teal-600" href="/admission/applyOnline">Online Admission</Link> and then go to New Admission
              Fill- up the Admission Form
              Insert the TrxID number.
              Submit the form either online or send to admission@dreamers.edu.bd
              or, if you have personal bKash account, transfer Tk.500 to bKash no. 01794718666 and collect a TrxID number.
              Go to DU Website , go to admission, go to <Link className="text-teal-600" href="/admission/applyOnline">Online Admission</Link> and then go to New Admission
              Fill- up the Admission Form
              Insert the TrxID number
              Submit the form either online or send to admission@dreamers.edu.bd</h3>
          </div>
        </div>
        <div className="col-span-3 mt-16"><Category></Category></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PaymentInformation;