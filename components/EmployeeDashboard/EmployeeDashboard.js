import EmployeeChart from "./EmployeeChart";
import EmployeeDetails from "./EmployeeDetails";

const EmployeeDashboard = () => {
  return (
    <div className="md:w-3/4 w-full bg-zinc-300 ">
      <section className="">
        <h2></h2>
        <div>
          <EmployeeDetails></EmployeeDetails>
          <EmployeeChart></EmployeeChart>
        </div>
      </section>
    </div>
  );
};

export default EmployeeDashboard;
