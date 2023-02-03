import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";

const StudentDetails = () => {
  const { user } = useContext(AuthContext);
  const [studentDetails, setStudentDetails] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/studentDetails`)
        .then((res) => res.json())
        .then((data) => {
          data.map((s) => {
            setStudentDetails(s);
            setLoading(false);
          });
        });
    }
  }, [user]);

  console.log(studentDetails);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <div>
      {user?.email && (
        <div className="hero bg-base-200 mb-5 hover:scale-110 ease-in duration-500">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={studentDetails.img}
              className="max-w-sm rounded-lg shadow-2xl hover:scale-90 ease-in duration-500"
            />
            <div>
              <h1 className="text-2xl font-bold ">
                Name: {studentDetails.name}
              </h1>
              <p className="py-2">Student ID: {studentDetails.Id}</p>
              <p className="py-2">
                Permanent Address: {studentDetails.address}
              </p>
              <p className="py-2">Contact No: {studentDetails.contact}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDetails;
