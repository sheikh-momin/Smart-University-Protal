import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Charts from "../pages/dashboard/Charts";
import ChartofStudent from "./ChartofStudent";
import Loader from "./Loader";

const StudentDetails = () => {
  const { user } = useContext(AuthContext);
  const [studentDetails, setStudentDetails] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://smart-university-protal-server-coral.vercel.app/studentDetails`
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
    <div className="grid lg:grid-cols-2 gap-5 md:grid-cols-1 sm:grid-cols-1">
      <div className="bg-transparent">
        {user?.email && (
          <div className="hero bg-transparent mb-5 hover:scale-110 ease-in duration-500">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={studentDetails.img}
                className="md:max-w-sm rounded-lg shadow-2xl hover:scale-90 ease-in duration-500 w-32 h-32"
              />
              <div>
                <h1 className="md:text-xl font-serif font-bold ">
                  Name: {studentDetails.name}
                </h1>
                <p className="py-2 font-serif">Student ID: {studentDetails.Id}</p>
                <p className="py-2 font-serif">
                  Permanent Address: {studentDetails.address}
                </p>
                <p className="py-2 font-serif">Contact No: {studentDetails.contact}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-transparent">
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>

                {/* <th>aa</th>

                <th>bb</th> */}
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>

                <td className="text-xl bg-transparent font-bold font-mono text-white">Average CGPA</td>
                <td className="text-2xl bg-transparent font-bold font-mono  text-white">3.82</td>
              </tr>
              {/* row 2 */}
              <tr>

                <td className="bg-transparent text-xl font-bold font-mono text-white">Average Subject Score</td>

                <td className="bg-transparent font-bold font-mono text-2xl  text-white">91.78%</td>
              </tr>
              {/* row 3 */}
              <tr>


                <td className="bg-transparent text-xl font-bold font-mono text-white">Rating </td>
                <td className="bg-transparent"><div className="rating rating-md zoom-in-out-box">
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-pink-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-pink-400"/>
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-pink-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-pink-400"  checked />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-pink-400" />
                </div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
};

export default StudentDetails;
