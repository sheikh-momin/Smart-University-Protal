import EmployeeForm from "../Dashboard/EmployeeForm";

const EmployeeProfile = () => {
  return (
    <div>
      <div className="mt-5">
        <div className="border-y border-slate-400 py-2">
          <h1 className="text-center text-teal-600 text-3xl font-bold italic font-serif">
            Employee Profile
          </h1>
        </div>

        <div>
          <div className="flex justify-center  ">
            <div className="grid grid-cols-1 gap-4 my-20">
              <EmployeeForm></EmployeeForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
