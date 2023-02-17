import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const studentapplicationform = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleForm = (data) => {
    const applicationType = data.applicationType;
    const applicationBody = data.applicationBody;
    const semester = data.semester;
    const instruction = data.instruction;

    const StudentApplication = {
      applicationType: applicationType,
      applicationBody: applicationBody,
      semester: semester,
      instruction: instruction,
    };
    console.log(StudentApplication);

    fetch("https://smart-university-protal-server-coral.vercel.app/studentApplication", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(StudentApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Your Application is submitted");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)} className="bg-white rounded-lg">
        <h2 className="bg-sky-400 text-white text-center text-xl font-bold py-4">
          Create New Application
        </h2>
        <div className="grid lg:grid-cols-1 md:grid-cols-1 gap-4 grid-cols-1  p-12 pb-0">
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-gray-400">Application Type</span>
            </label>
            <select
              {...register("applicationType", {
                required: "Application Type is required",
              })}
              name="applicationType"
              className="px-20 select-info"
            >
              <option disabled selected>
                --Select--
              </option>
              <option>Application for Final-term Exam Permission</option>
              <option>Application for Registration Permission</option>
              <option>Application for Mid-term Exam Permission</option>
              <option>Application for Late Registration</option>
            </select>
            <hr className="bg-black" />
            {errors.applicationType && (
              <p className="text-red-600">{errors.applicationType?.message}</p>
            )}
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-gray-400">Semester</span>
            </label>
            <select
              {...register("semester", {
                required: "Application Type is required",
              })}
              name="semester"
              className="px-20 select-info"
            >
              <option disabled selected>
                --Select--
              </option>
              <option>Fall-202</option>
              <option>Summer-2022</option>
              <option>Spring-2022</option>
              <option>Fall-2021</option>
            </select>
            <hr className="bg-black" />
            {errors.semester && (
              <p className="text-red-600">{errors.semester?.message}</p>
            )}
          </div>
          <div className="form-control ">
            <input
              type="text"
              {...register("instruction", {
                required: "Instruction is required",
              })}
              name="instruction"
              placeholder="Instruction"
              className="input input-bordered bg-white "
              required
            />
            {errors.instruction && (
              <p className="text-red-600">{errors.instruction?.message}</p>
            )}
          </div>
          <div className="form-control ">
            <textarea
              type="text"
              {...register("applicationBody", {
                required: "applicationBody is required",
              })}
              name="applicationBody"
              placeholder="Application Body"
              className="textarea textarea-bordered textarea-lg bg-white"
              rows="8"
              required
            ></textarea>
            {errors.applicationBody && (
              <p className="text-red-600">{errors.applicationBody?.message}</p>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <input type="submit" className="btn btn-info  mt-8 px-8 mb-4" />
        </div>
      </form>
    </div>
  );
};

export default studentapplicationform;
