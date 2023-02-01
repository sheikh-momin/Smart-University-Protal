import { Cagliostro } from "@next/font/google";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import DashboardNavbar from "./dashboardNav/DashboardNavbar";


const RegisteredCourse = () => {
  const { user } = useContext(AuthContext)
  const [courses, setCourses] = useState()
  const [semester, setSemester] = useState()
  const handleSemester =(e)=>{
    setSemester(e.target.value)
  }

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/registeredCourseList/${user?.email}`)
        .then(res => res.json())
        .then(data => setCourses(data))
    }
  }, [user])

  return (
    <div>
      <DashboardNavbar></DashboardNavbar>
      <div className="bg-slate-200 drop-shadow-lg py-3 mt-3">
        <h1 className="text-center text-cyan-500 text-3xl font-bold italic font-serif">Registered Course</h1>
      </div>

      <div className="md:mx-40 flex justify-center mt-5">
        <label className="label mr-1">
          <span className="label-text">Select Semester</span>
        </label>
        <select onClick={handleSemester} name="semester" className="select select-bordered w-full max-w-xs">
          <option>Spring-2023</option>
          <option>Summer-2023</option>
          <option>Fall-2023</option>
        </select>

      </div>


      <div className="mt-10 md:mx-40">
        <div className=" mt-3">
          <h1 className="text-center bg-cyan-400 text-white md:text-xl  py-3 font-serif">Registered Course List </h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table  w-full">

            <thead >
              <tr >
                <th>Course Code</th>
                <th>	Course Title</th>
                <th>Credit</th>
                <th>Section</th>
                <th>Teacher</th>
                <th>Advised</th>
                <th>Reg Clearance</th>
              </tr>
            </thead>
            <tbody>

              {
                courses?.data?.map(course=>{
                  console.log(course.subject)
                })
              }

              <tr>
                <th>1</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red green</td>
                <td>Red</td>
                <td>Red</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RegisteredCourse;