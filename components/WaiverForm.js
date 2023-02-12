import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const WaiverForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleForm = (data) => {
    const semester = data.semester
    const email = data.email
    const userName = data.userName
    const gpa = data.GPA
    const phc = data.PCH
    const cgpa = data.CGPA
    const cch = data.CCH
    const contact = data.contact


    const reportedItem = {
      email: email,
      semester: semester,
      userName: userName,
      gpa: gpa,
      phc: phc,
      cgpa: cgpa,
      cch: cch,
      contact: contact,
    }

    fetch('https://smart-university-protal-server-qyf2.vercel.app/waiver', {
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
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)} className="bg-white rounded-lg">
        <h2 className="bg-sky-400 text-white text-center text-xl font-bold py-4">
          Financial Assistance
        </h2>
        <div className="grid lg:grid-cols-2 gap-x-8 md:grid-cols-2 grid-cols-1 px-24">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "ID is required" })}
              
              placeholder="Email"
              className="input input-bordered input-info"
              required
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              
              {...register("userName", { required: "Name is required" })}
              type="text"
              placeholder="Enter Your Full Name"
              className="input input-bordered input-info w-full max-w-xs"
            />
            {errors.userName && (
              <p className="text-red-600">{errors.userName?.message}</p>
            )}
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Semester</span>
            </label>
            <select
              {...register("semester", {
                required: "Semester is required",
              })}
              
              className="select select-bordered w-full max-w-xs px-20 select-info"
            >
              <option disabled selected>
                Select Semester
              </option>
              <option>1st</option>
              <option>2nd</option>
              <option>3rd</option>
              <option>4th</option>
              <option>5th</option>
              <option>6th</option>
              <option>7th</option>
              <option>8th</option>
            </select>
            {errors.semester && (
              <p className="text-red-600">{errors.semester?.message}</p>
            )}
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">GPA</span>
            </label>
            <input
              
              {...register("GPA", {
                required: "Emergency Contact No. is required",
              })}
              type="text"
              placeholder="GPA"
              className="input input-bordered w-full max-w-xs px-5 input-info"
            />
            {errors.GPA && (
              <p className="text-red-600">{errors.GPA?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Previous Semester CH</span>
            </label>
            <input
              
              {...register("PCH", { required: "Previous CH is required" })}
              type="text"
              placeholder="Previous Semester CH"
              className="input input-bordered input-info w-full max-w-xs"
            />
            {errors.PCH && (
              <p className="text-red-600">{errors.PCH?.message}</p>
            )}
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">CGPA</span>
            </label>
            <input
              
              {...register("CGPA", {
                required: "CGPA is required",
              })}
              type="text"
              placeholder="CGPA"
              className="input input-bordered w-full max-w-xs px-5 input-info"
            />
            {errors.CGPA && (
              <p className="text-red-600">{errors.CGPA?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Current Semester CH</span>
            </label>
            <input
              
              {...register("CCH", { required: "Current CH is required" })}
              type="text"
              placeholder="Current Semester CH"
              className="input input-bordered input-info w-full max-w-xs"
            />
            {errors.CCH && (
              <p className="text-red-600">{errors.CCH?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Contact</span>
            </label>
            <input
              
              {...register("contact", { required: "Contact is required" })}
              type="text"
              placeholder="Contact"
              className="input input-bordered input-info w-full max-w-xs"
            />
            {errors.contact && (
              <p className="text-red-600">{errors.contact?.message}</p>
            )}
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
  );
};

export default WaiverForm;
