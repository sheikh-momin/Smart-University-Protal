import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../Loader";


const WaiverComponent = () => {
  const { user } = useContext(AuthContext)
  const [clearance, setClearance] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user?.email) {
      fetch(`https://smart-university-protal-server-coral.vercel.app/waiver`)
        .then(res => res.json())
        .then(data => {
          setClearance(data)
          setLoading(false)
        })
    }
  }, [user, clearance])

  if (loading) {
    return <Loader></Loader>
  }
  
  return (
    <div className="bg-zinc-300 pb-80 md:mx-40 mx-5 w-full mt-5">
      <div className="bg-slate-200 drop-shadow-lg py-3 ">
        <h1 className="text-center text-teal-600 md:text-3xl text-lg font-bold italic font-serif">Students Waiver</h1>
      </div>
      <div className="overflow-x-auto mt-20  w-full">
        <table className="table w-full">

          <thead className="">
            <tr >
              <th className="bg-teal-400">
                UserName</th>
              <th className="bg-teal-400">Semester</th>
              <th className="bg-teal-400">Email</th>
              <th className="bg-teal-400">GPA</th>
              <th className="bg-teal-400">PCH</th>
              <th className="bg-teal-400">CGAP</th>
              <th className="bg-teal-400">CCH</th>
              <th className="bg-teal-400">Contact</th>
            </tr>
          </thead>
          <tbody>

            {
              clearance.map(cleat => <tr key={cleat._id}>
                <th className="text-sky-700">{cleat.userName}</th> 
                <th className="text-sky-700">{cleat.email}</th>
                <th className="text-sky-700">{cleat.semester}</th>
                <th className="text-sky-700">{cleat.gpa}</th>
                <th className="text-sky-700">{cleat.phc}</th>
                <th className="text-sky-700">{cleat.cgpa}</th>
                <th className="text-sky-700">{cleat.cch}</th>
                <th className="text-sky-700">{cleat.contact}</th>
              </tr>)
            }



          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WaiverComponent;