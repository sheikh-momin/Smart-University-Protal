import { useContext, useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { AuthContext } from "../../Context/AuthProvider";

import DashboardNavbar from "./dashboardNav/DashboardNavbar";


const Clearance = () => {
  const { user } = useContext(AuthContext)
  const [clearance, setClearance] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user?.email) {
      fetch(`https://smart-university-protal-server-sigma.vercel.app/clearance/${user?.email}`)
        .then(res => res.json())
        .then(data => {
          setClearance(data)
          setLoading(false)
        })
    }
  }, [user, clearance])

  if(loading){
    return <Loader></Loader>
  }
  
  return (
    <div className="bg-[#d4d4d8] pb-80">
      <DashboardNavbar></DashboardNavbar>
      <div className="bg-slate-200 drop-shadow-lg py-3 mt-5">
        <h1 className="text-center text-cyan-500 md:text-3xl text-lg font-bold italic font-serif">Registration/Exam Clearance</h1>
      </div>

      <div className="overflow-x-auto mt-20 md:mx-40">
        <table className="table w-full">

          <thead className="">
            <tr >
              <th className="bg-cyan-500">
                Semester</th>
              <th className="bg-cyan-500">Registration</th>
              <th className="bg-cyan-500">Mid Term Exam</th>
              <th className="bg-cyan-500">Final Exam/Assessment</th>
            </tr>
          </thead>
          <tbody>
          
          {
              clearance.map(cleat => <tr key={cleat._id}>
                <th className="text-sky-700">{cleat.semester}</th>
                
                {
                  cleat.registration=="Yes" ?
                    <td className="text-green-500 font-semibold">{cleat.registration}</td>
                    :
                    <td className="text-red-500 font-semibold">{cleat.registration}</td>
                }
                {
                  cleat.midExm=="Yes" ?
                    <td className="text-green-500 font-semibold">{cleat.midExm}</td>
                    :
                    <td className="text-red-500 font-semibold">{cleat.midExm}</td>
                }
                {
                  cleat.finalExm=="Yes" ?
                    <td className="text-green-500 font-semibold">{cleat.finalExm}</td>
                    :
                    <td className="text-red-500 font-semibold">{cleat.finalExm}</td>
                }
              </tr>)
          }

           

          </tbody>
        </table>
      </div>
    </div>
  );
};


export default  Clearance;

