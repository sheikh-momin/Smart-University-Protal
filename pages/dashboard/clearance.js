import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import DashboardNavbar from "./dashboardNav/DashboardNavbar";


const Clearance = () => {
  const { user } = useContext(AuthContext)
  const [clearance, setClearance] = useState([])
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/clearance/${user?.email}`)
        .then(res => res.json())
        .then(data => {
          setClearance(data)
        })
    }
  }, [user])
  
  return (
    <div>
      <DashboardNavbar></DashboardNavbar>
      <div className="bg-slate-200 drop-shadow-lg py-3 mt-3">
        <h1 className="text-center text-cyan-500 text-3xl font-bold italic font-serif">Registration/Exam Clearance</h1>
      </div>

      <div className="overflow-x-auto mt-5 md:mx-40">
        <table className="table w-full">

          <thead className="">
            <tr>
              <th>
                Semester</th>
              <th>Registration</th>
              <th>Mid Term Exam</th>
              <th>Final Exam/Assessment</th>
            </tr>
          </thead>
          <tbody>
          
          {
              clearance.map(cleat => <tr>
                <th>{cleat.semester}</th>
                <td>{cleat.registration}</td>
                <td>{cleat.midExm}</td>
                <td>{cleat.finalExm}</td>
              </tr>)
          }

           

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clearance;