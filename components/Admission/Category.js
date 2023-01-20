import Link from "next/link";
import { AiFillCaretDown } from "react-icons/ai";

const Category = () => {
  return (
    <div className="border-t-8 bg-slate-200 border-emerald-800  ">
      <div className="border-b border-slate-700 text-lg w-full  ">
        <div className="dropdown dropdown-hover w-full my-3 ml-2">
          <label tabIndex={0} className=" m-1">Admission Overview <AiFillCaretDown className="inline-block ml-2"></AiFillCaretDown></label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box ">
            <Link href="/admission"><li ><a>Admission Information </a></li></Link>
            <Link href="/admission/wyDU"><li><a>Why Dreamers University</a></li></Link>
          </ul>
        </div>
      </div>

      <div className="border-b border-slate-700 text-lg w-full  ">
        <div className="dropdown dropdown-hover w-full my-3 ml-2">
          <label tabIndex={0} className=" m-1">Undergraduate Programs <AiFillCaretDown className="inline-block ml-2"></AiFillCaretDown></label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box ">
            <Link href="/admission/baInEnglish"><li><a>B.A.(Hons.) in English</a></li></Link>
            <Link href="/admission/bBA"><li><a>BBA</a></li></Link>
            <Link href="/admission/bscInCivil"><li><a>BSc in Civil</a></li></Link>
            <Link href="/admission/bscInCSE"><li><a>BSc in CSE</a></li></Link>
            <Link href="/admission/bscInEEE"><li><a>BSc in EEE</a></li></Link>
            <Link href="/admission/llb"><li><a>LL.B (Hons.)</a></li></Link>
            <Link href="/admission/bPharm"><li><a>B. Pharm</a></li></Link>
          </ul>
        </div>
      </div>

      <div className="border-b border-slate-700 text-lg w-full  ">
        <div className="dropdown dropdown-hover w-full my-3 ml-2">
          <label tabIndex={0} className=" m-1">Graduate Programs <AiFillCaretDown className="inline-block ml-2"></AiFillCaretDown></label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box ">
            <Link href="/admission/mba"><li><a>MBA (Master of Business Administration)</a></li></Link>
            <Link href="/admission/emba"><li><a>EMBA (Evening Master of Business Administration)</a></li></Link>
            <Link href="/admission/ell"><li><a>M.A. ELL(English Language & Literature)</a></li></Link>
            <Link href="/admission/llm"><li><a>LL.M</a></li></Link>
          </ul>
        </div>
      </div>

      <div className="border-b border-slate-700 text-lg w-full  ">
        <div className="my-3 ml-2">
          <Link  href="/admission/fees"><h1>Tuition and Fees</h1></Link>
        </div>
      </div>

      <div className="border-b border-slate-700 text-lg w-full  ">
        <div className="my-3 ml-2">
          <Link  href="/admission/waiver"><h1>Scholarship And Waivers</h1></Link>
        </div>
      </div>

      <div className="border-b border-slate-700 text-lg w-full  "> 
        <div className="dropdown dropdown-hover w-full my-3 ml-2">
          <label tabIndex={0} className=" m-1">International Students <AiFillCaretDown className="inline-block ml-2"></AiFillCaretDown></label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box ">
            <Link href="/admission/inStudent"><li><a>International Students</a></li></Link>
            <Link href="/admission/foreignStudent"><li><a>Fee Structure For Foreign Students</a></li></Link>
          </ul>
        </div>
      </div>

      <div className="border-b border-slate-700 text-lg w-full  ">
        <div className="my-3 ml-2">
          <Link href="/admission/howToApply"><h1>How to Apply</h1></Link>
        </div>

      </div>

      <div className="border-b border-slate-700 text-lg w-full  ">
        <div className="my-3 ml-2">
          <Link href="/admission/applyOnline"><h1>Apply Online</h1></Link>
        </div>
        
      </div>

      

      <div className="border-b border-slate-700 text-lg w-full  ">
        <div className="dropdown dropdown-hover w-full my-3 ml-2">
          <label tabIndex={0} className=" m-1">Admission Procedures <AiFillCaretDown className="inline-block ml-2"></AiFillCaretDown></label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box ">
            <Link href="/admission/eligibility"><li><a>Admission Eligibility</a></li></Link>
            <Link href="/admission/paymentSystem"><li><a>Admission Requirements
              Payment System</a></li></Link>
          </ul>
        </div>
      </div>

      <div className=" text-lg w-full  ">
        <div className="dropdown dropdown-hover w-full my-3 ml-2">
          <label tabIndex={0} className=" m-1">Payment System <AiFillCaretDown className="inline-block ml-2"></AiFillCaretDown></label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box ">
            <Link href="/admission/paymentInformation"><li><a>Payment Information</a></li></Link>
            <Link href="/admission/paymentProcedure"><li><a>Payment Procedure</a></li></Link>
          </ul>
        </div>
      </div>



    </div>
  );
};

export default Category;