import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../Loader";


const SemesterDropComponent = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext)
  const [semesterDrop, setSemesterDrop] = useState([])
  const [loading, setLoading] = useState(true)
  let today = new Date();
  let date = today.toLocaleString();

  const handleForm = data => {
    const email = user?.email
    const semester = data.semester
    const causes = data.causes
    const whyDrop = data.whyDrop


    const reportedItem = {
      email: email,
      semester: semester,
      date: date,
      causes: causes,
      whyDrop: whyDrop
    }

    fetch('https://smart-university-protal-server-qyf2.vercel.app/drop', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reportedItem)
    })
      .then(res => res.json())
      .then(data => {
        console.log("data", data)
        toast.success('Thanks for your response..We saved your form');
      })
  }

  useEffect(() => {
    if (user?.email) {
      fetch(`https://smart-university-protal-server-coral.vercel.app/drop/${user?.email}`)
        .then(res => res.json())
        .then(data => {
          setSemesterDrop(data)
        })
      setLoading(false)
    }

  }, [user, semesterDrop])
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="bg-zinc-300 w-full mx-5 md:mx-40 mt-5">
      <div className="bg-slate-200 drop-shadow-lg py-3 ">
        <h1 className="text-center text-cyan-500 md:text-3xl text-lg font-bold italic font-serif">Semester Drop</h1>
      </div>

      <div className="w-full">
        <div className="md:flex mt-10 md:mx-40 justify-center">
          <div>
            <form className="bg-white rounded p-10" onSubmit={handleSubmit(handleForm)}>
              <select className="select w-full max-w-xs block bg-slate-200 " {...register("semester")}>
                <option disabled selected>Pick your Semester</option>
                <option value="Spring2023">Spring2023</option>
                <option value="Summer2023">Summer2023</option>
                <option value="Fall2023">Fall2023</option>
              </select>
              <select className="select w-full max-w-xs block bg-slate-200 mt-5" {...register("causes")}>
                <option disabled selected>Select Causes Of Semester Drop</option>
                <option value="Temporary Drop">Temporary Drop</option>
                <option value="Program Transfer">Program Transfer</option>
                <option value="Permanent Drop">Permanent Drop</option>
                <option value="Internship Running">Internship Running</option>
              </select>
              <textarea {...register("whyDrop")} placeholder="Why you want to drop this semester? What is the Causes?" className="textarea textarea-bordered textarea-xs w-full max-w-xs block bg-slate-200 mt-5" ></textarea>
              <input className="btn btn-info btn-md md:btn-wide mt-5" type="submit" />
            </form>
          </div>

          <div className="md:ml-10 w-full">
            <div className=" mt-3">
              <h1 className="text-center rounded bg-cyan-400 text-white md:text-xl  py-3 font-serif">Dropped Semester List </h1>
            </div>
            <div className="overflow-x-auto">
              <table className="table w-full">

                <thead>
                  <tr>
                    <th>Semester</th>
                    <th>Causes</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    semesterDrop?.map((semester) =>
                      user?.email == semester?.email ?
                        <tr>
                          <td>{semester.semester}</td>
                          <td>{semester.causes}</td>
                          <td>{semester.date}</td>
                        </tr>
                        :
                        <></>
                    )
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemesterDropComponent;