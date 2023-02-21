import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../Loader";

const  TeacherDashboardProfile = () => {
  const { user } = useContext(AuthContext);
  const [teacherDetails, setTeacherDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://smart-university-protal-server-coral.vercel.app/teacherDetails`
      )
        .then((res) => res.json())
        .then((data) => {
          data.map((s) => {
            setTeacherDetails(s);
          });

          setLoading(false);
        });
    }
  }, [user]);
  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="pr-32 w-full  card bg-base-100 shadow-xl ">
      {user?.email && (
        <div className="hero  mb-5 hover:scale-110 ease-in duration-500  ">
          <div className="hero-content flex-col lg:flex-row ">
            <img
              src={teacherDetails.img}
              className="md:max-w-sm rounded-lg shadow-2xl hover:scale-90 ease-in duration-500 w-48 h-48 ring-2 ring-purple-700  hover:ring-offset-4 "
            />
            <div>
              <h1 className="md:text-2xl font-bold ">
                {teacherDetails.name}
              </h1>
              <p className="py-2">Teacher's Email: {teacherDetails.email}</p>
              <p className="py-2">Designation: {teacherDetails.designation}</p>
              <p className="py-2">Department: {teacherDetails.department}</p>
              <p className="py-2">
                Marital Status: {teacherDetails.maritalStatus}
              </p>
              {/* <p className="py-2">Contact No: {teacherDetails.contact}</p> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboardProfile;
