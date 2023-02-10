import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../Loader";


const RegisteredCourseComponent = () => {
  const { user } = useContext(AuthContext)
  const [courses, setCourses] = useState([])
  const [semester, setSemester] = useState("")
  const [loading, setLoading] = useState(true)

  const handleSemester = (e) => {
    setSemester(e.target.value)
  }

  useEffect(() => {
    if (user?.email) {
      fetch(`https://smart-university-protal-server-coral.vercel.app/registeredCourseList/${semester}`)
        .then(res => res?.json())
        .then(data => {
          setCourses(data)
        })
      setLoading(false)
    }

  }, [user, semester])
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="bg-[#d4d4d8] pb-80 w-full mx-5 md:mx-40 mt-5" >
      <div className="bg-slate-200 drop-shadow-lg py-3 ">
        <h1 className="text-center text-cyan-500 md:text-3xl text-lg font-bold italic font-serif">Registered Course</h1>
      </div>
      <div className="w-full">
        <div className=" flex justify-center mt-10">

          <select onChange={handleSemester} name="semester" className="select  select-bordered w-full max-w-xs">
            <option disabled selected className="text-center">--Select Semester--</option>
            <option className="text-center">Spring2023</option>
            <option className="text-center">Summer2023</option>
            <option className="text-center">Fall2023</option>
          </select>

        </div>


        <div className="mt-10 ">
          <div className=" mt-3">
            <h1 className="text-center bg-cyan-400 rounded text-white md:text-xl  py-3 font-serif">Registered Course List </h1>
          </div>
          <div className="overflow-x-auto">
            <table className="table w-40  md:w-full">

              <thead >
                <tr >
                  <th>Course Code</th>
                  <th>Course Title</th>
                  <th>Credit</th>
                  <th>Section</th>
                  <th>Teacher</th>
                  <th>Advised</th>
                  <th>Reg Clearance</th>
                </tr>
              </thead>
              <tbody>

                {
                  user?.email == courses?.email ?
                    courses?.subject?.map((course) =>
                      <tr key={course.CourseCode}>
                        <th className="text-blue-600">{course.CourseCode}</th>
                        <th>{course.CourseTitle}</th>
                        <th className="text-orange-500">{course.credit}</th>
                        <th>{course.section}</th>
                        <th className="text-blue-600">{course.teacher}</th>
                        <th>{course.advise}</th>
                        <th className="text-green-600">{course.clearance}</th>
                      </tr>
                    )
                    :
                    <></>
                }


              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisteredCourseComponent;