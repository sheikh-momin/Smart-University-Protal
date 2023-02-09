import Link from "next/link";
import { useContext } from "react";
import Drawer from "../../components/Dashboard/Drawer";
import FinancialAssistantComponent from "../../components/Dashboard/FinancialAssistantComponent";
import WaiverForm from "../../components/WaiverForm";
import { AuthContext } from "../../Context/AuthProvider";
import DashboardNavbar from "./dashboardNav/DashboardNavbar";
import { ImProfile } from "react-icons/im";
import { FaSearchDollar } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdOutlineAppRegistration } from "react-icons/md";
import { SiDiscourse } from "react-icons/si";
import { MdArrowDropDownCircle } from "react-icons/md";
import { SiLivejournal } from "react-icons/si";
import { AiOutlineBorderOuter } from "react-icons/ai";
import { FaPager } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import { ImLibrary } from "react-icons/im";
import { SlLogout } from "react-icons/sl";

const FinancialAssistant = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSingOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="bg-zinc-300">
      <DashboardNavbar></DashboardNavbar>
      <div className="border-y border-slate-400 py-2">
        <h1 className="text-center text-blue-500 text-3xl font-bold italic font-serif">
          Financial Assistance on GPA
        </h1>
      </div>
      <div className="flex w-full">
        <Drawer></Drawer>

        <div className="flex justify-center lg:ml-20">
          <div className="grid grid-cols-1 gap-x-4 mt-12 mb-20">
            <WaiverForm></WaiverForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialAssistant;
