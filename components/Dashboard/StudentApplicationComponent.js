import StudentApplicationform from "../../components/Dashboard/studentapplicationform";
const StudentApplicationComponent = () => {
  return (
    <div className="bg-zinc-300 w-full md:mx-40 mx-5">
      <div className=" drop-shadow-lg py-3 ">
        <h1 className="text-center text-cyan-500 text-3xl font-bold italic font-serif"></h1>
      </div>
      <div className="bg-slate-200 drop-shadow-lg py-3 ">
        <h1 className="text-center text-cyan-500 md:text-3xl text-lg font-bold italic font-serif">
          Student Application System
        </h1>
      </div>
      <StudentApplicationform></StudentApplicationform>
    </div>
  );
};

export default StudentApplicationComponent;
