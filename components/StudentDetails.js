import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Loader from "./Loader";

const StudentDetails = () => {
  const { user } = useContext(AuthContext);
  const [studentDetails, setStudentDetails] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://smart-university-protal-server-sigma.vercel.app/studentDetails`
      )
        .then((res) => res.json())
        .then((data) => {
          data.map((s) => {
            setStudentDetails(s);
          });
          setLoading(false);
        });
    }
  }, [user]);

  // console.log(studentDetails);
  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="bg-zinc-300">
      {user?.email && (
        <div className="hero bg-base-200 mb-5 hover:scale-110 ease-in duration-500">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={studentDetails.img}
              className="md:max-w-sm rounded-lg shadow-2xl hover:scale-90 ease-in duration-500"
            />
            <div>
              <h1 className="md:text-2xl font-bold ">
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
