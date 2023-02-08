import DashboardNavbar from "../../pages/dashboard/dashboardNav/DashboardNavbar";
import WaiverForm from "../WaiverForm";


const FinancialAssistantComponent = () => {
  return (
    <div>
      <div className="bg-zinc-300 mt-5">
        <div className="border-y border-slate-400 py-2">
          <h1 className="text-center text-blue-500 md:text-3xl font-bold italic font-serif">
            Financial Assistance on GPA
          </h1>
        </div>
        <div className="flex justify-center ">
          <div className="grid grid-cols-1 gap-4 my-20">
            <WaiverForm></WaiverForm>
          </div>
        </div>
        {/* <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-4 mx-20 my-5">
          <WaiverForm></WaiverForm>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default FinancialAssistantComponent;