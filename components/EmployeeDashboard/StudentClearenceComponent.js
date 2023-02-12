

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const StudentClearenceComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleForm = data => {
    const semester = data.semester
    const email = data.email
    const registration = data.registration
    const midExm = data.midExm
    const finalExm = data.finalExm
    

    const reportedItem = {
      email: email,
      semester: semester,
      registration: registration,
      midExm: midExm,
      finalExm: finalExm
    }

    fetch('https://smart-university-protal-server-qyf2.vercel.app/clearance', {
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
    console.log("kdfgki", data);
  };
  return (
    <div>
      <div className="bg-zinc-300 mt-5">
        <div className="border-y border-slate-400 py-2">
          <h1 className="text-center text-teal-600  md:text-3xl font-bold italic font-serif">
            Student Clearance
          </h1>
        </div>
        <div className="flex justify-center ">
          <div className="grid grid-cols-1 gap-4 my-20">
            <form onSubmit={handleSubmit(handleForm)} className="bg-white rounded-lg">
              <h2 className="bg-sky-400 text-white text-center text-xl font-bold py-4">
                Update Clearance
              </h2>
              <div className="grid lg:grid-cols-2 gap-x-8 md:grid-cols-2 grid-cols-1 px-24">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Semester</span>
                  </label>
                  <input
                    type="text"
                    {...register("semester", { required: "ID is required" })}
                    
                    placeholder="Semester"
                    className="input input-bordered input-info"
                    
                  />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    
                    {...register("email", { required: "Name is required" })}
                    type="text"
                    placeholder="Enter Your Email"
                    className="input input-bordered input-info w-full max-w-xs"
                  />
                  
                </div>

                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Registration Clearance</span>
                  </label>
                  <input
                    
                    {...register("registration", {
                      required: "Emergency Contact No. is required",
                    })}
                    type="text"
                    placeholder="Type Registration Clearance"
                    className="input input-bordered w-full max-w-xs px-5 input-info"
                  />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">MidExm Clearance</span>
                  </label>
                  <input
                    
                    {...register("midExm", { required: "Previous CH is required" })}
                    type="text"
                    placeholder="Type MidExm Clearance"
                    className="input input-bordered input-info w-full max-w-xs"
                  />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">FinalExm Clearance</span>
                  </label>
                  <input
                    
                    {...register("finalExm", { required: "Previous CH is required" })}
                    type="text"
                    placeholder="Type FinalExm Clearance"
                    className="input input-bordered input-info w-full max-w-xs"
                  />
                  
                </div>



              </div>

              <div className="flex justify-center">
                <input
                  type="submit"
                  className="btn btn-info text-white  mt-8 px-8 mb-4"
                />
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentClearenceComponent;