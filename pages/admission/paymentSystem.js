import Category from "../../components/Admission/Category";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const PaymentSystem = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-12 gap-4 my-20">
        <div className="col-span-9">
          <div className="border-y border-slate-400 py-2">
            <h1 className="text-center text-teal-700 text-3xl font-bold italic font-serif">Admission Requirements</h1>
          </div>
          <div className="ml-20 my-5 text-lg">
            <h1 className="mb-3 text-2xl text-teal-600 font-bold">General Requirements</h1>
            
          </div>
          <div className="ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Application forms</h1>
            <h3>Application forms are available at: Road 6, Block B, Ashulia Model Town, Savar, Dhaka-1345. You can also download the form by clicking on the “How to Apply” link on the left.</h3>
          </div>
          <div className="ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Papers need to be submitted (Undergraduate):</h1>
            <h3>1. Three copies of recent colored passport sized photographs. <br />
              2. Photocopies ofAll Academic Mark-sheets and Certificates. <br />
              3. Photocopy of Students and Parents NID Card <br />
              4. Applicants in Freedom Fighter category are requested to submit relevant documents.</h3>
          </div>
          <div className="ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Note: Admission test is waived for candidates with combined GPA 7.00. However, they may have to face an interview.</h1>
            <h3>Transfer of credits from comparable educational institutions may be considered before admission. Rules on credit transfer are available from the Admissions Office.</h3>
          </div>
          <div className="ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Papers need to be submitted (Graduate):</h1>
            <h3>1. Three copies of recent colored passport sized photographs. <br />
              2. Photocopies of All Academic Mark-sheets and Certificates.<br />
              3. Photocopy of Students and Parents NID Card<br />
              4. Applicants in Freedom Fighter category are requested to submit relevant documents.<br />
              5. Job Experience Certificate for Executive MBA Program<br />
<br />
              Transfer of credits from comparable educational institutions may be considered before <br />admission. Rules on credit transfer are available from the Admissions Office.
<br />
              Incomplete applications will not be accepted. Any applicant who gives false information during the application process will be immediately disqualified from the application process or summarily dismissed from the university.</h3>
          </div>
          <div className="ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Payable during Admission</h1>
            <h3>Admission Form= Tk. 500 <br />
              Admission Fee Tk. 10,000 + Registration Fee Tk. 7,000 + Security Deposit Tk. 2,000 = Total Tk. 19,000</h3>
          </div>
          <div className="ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Total Payable during Admission = Tk. 19,500</h1>
            
          </div>
          <div className="ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Admission Test</h1>
            <h3>DU will call applicants who meet the minimum eligibility requirements for an Admission Test, which will comprise of a written test and, in some cases, a departmental interview.</h3>
          </div>
        </div>
        <div className="col-span-3 mt-16"><Category></Category></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PaymentSystem;