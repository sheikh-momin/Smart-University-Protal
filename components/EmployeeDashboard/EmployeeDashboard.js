import EmployeeChart from "./EmployeeChart";
import EmployeeDetails from "./EmployeeDetails";

const EmployeeDashboard = () => {
  return (
    <div className="md:w-3/4 w-full bg-tranparent ">
      <section className="">
        <h2></h2>
        <div>
          <EmployeeDetails></EmployeeDetails>
          <div className="grid grid-cols-3 gap-4 md:w-9/12 md:mx-auto mx-5 text-black mt-24 mb-24">
            <div className="bg-white md:p-8 p-2 rounded-xl">
              <h2 className="md:text-xl">11000</h2>
              <h4 className="md:text-2xl">New Admission</h4>
              <progress
                className="progress progress-info lg:w-56 sm:24"
                value="100"
                max="100"
              ></progress>
              <h4 className="md:">10% higher than last month</h4>
            </div>
            <div className="bg-white md:p-8 p-2 rounded-xl">
              <h2 className="md:text-xl">60800</h2>
              <h4 className="md:text-2xl">Total Students</h4>
              <progress
                className="progress progress-accent lg:w-56 sm:24"
                value="100"
                max="100"
              ></progress>
              <h4 className="md:">8% higher than last month</h4>
            </div>
            <div className="bg-white md:p-8 p-2 rounded-xl">
              <h2 className="md:text-xl">12521</h2>
              <h4 className="md:text-2xl">Master</h4>
              <progress
                className="progress progress-secondary lg:w-56 sm:24"
                value="100"
                max="100"
              ></progress>
              <h4 className="md:">4% higher than last month</h4>
            </div>
          </div>
          <EmployeeChart></EmployeeChart>
        </div>
      </section>
    </div>
  );
};

export default EmployeeDashboard;
