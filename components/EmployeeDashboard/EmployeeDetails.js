import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const EmployeeDetails = () => {
  const { user } = useContext(AuthContext);
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://smart-university-protal-server-coral.vercel.app/employeeDetails`
      )
        .then((res) => res.json())
        .then((data) => {
          data.map((s) => {
            setEmployeeDetails(s);
          });
          setLoading(false);
        });
    }
  }, [user]);

  return (
    <div className="mx-5 md:mx-40">
      {user?.email && (
        <div className="hero bg-sky-100 mb-5 hover:scale-110 ease-in duration-500">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={employeeDetails.img}
              className="md:max-w-sm rounded-lg shadow-2xl hover:scale-90 ease-in duration-500 w-48 h-48"
            />
            <div>
              <h1 className="md:text-2xl font-bold ">
                Employee's Name: {employeeDetails.name}
              </h1>
              <p className="py-2">Employee's Email: {employeeDetails.email}</p>
              <p className="py-2">Designation: {employeeDetails.designation}</p>
              <p className="py-2">Department: {employeeDetails.department}</p>
              {/* <p className="py-2">
                Marital Status: {employeeDetails.maritalStatus}
              </p> */}
              <p className="py-2">Contact No: {employeeDetails.contact}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeDetails;
