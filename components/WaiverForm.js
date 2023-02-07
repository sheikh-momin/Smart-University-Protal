import React from "react";
import { useForm } from "react-hook-form";

const WaiverForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleForm = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleForm)}
        className="grid lg:grid-cols-2 gap-8 md:grid-cols-2 grid-cols-1"
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">ID No</span>
          </label>
          <input
            type="text"
            {...register("matric_id", { required: "ID is required" })}
            name="matric_id"
            placeholder="ID No"
            className="input input-bordered input-info"
            required
          />
          {errors.matric_id && (
            <p className="text-red-600">{errors.matric_id?.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="userName"
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
            name="semester"
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
            name="GPA"
            {...register("GPA", {
              required: "Emergency Contact No. is required",
            })}
            type="text"
            placeholder="GPA"
            className="input input-bordered w-full max-w-xs px-5 input-info"
          />
          {errors.GPA && <p className="text-red-600">{errors.GPA?.message}</p>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Previous Semester CH</span>
          </label>
          <input
            name="PCH"
            {...register("PCH", { required: "Previous CH is required" })}
            type="text"
            placeholder="Previous Semester CH"
            className="input input-bordered input-info w-full max-w-xs"
          />
          {errors.PCH && <p className="text-red-600">{errors.PCH?.message}</p>}
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">CGPA</span>
          </label>
          <input
            name="CGPA"
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
            name="CCH"
            {...register("CCH", { required: "Current CH is required" })}
            type="text"
            placeholder="Current Semester CH"
            className="input input-bordered input-info w-full max-w-xs"
          />
          {errors.CCH && <p className="text-red-600">{errors.CCH?.message}</p>}
        </div>

        <input
          type="submit"
          className="btn btn-primary mt-8 p-2 w-full max-w-xs"
        />
      </form>
    </div>
  );
};

export default WaiverForm;
