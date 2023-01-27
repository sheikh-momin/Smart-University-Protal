import React from "react";
import { useForm } from "react-hook-form";

const ProfileForm = () => {
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
        className="grid lg:grid-cols-4 md:grid-cols-4 gap-4 grid-cols-1"
      >
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Matric Id:</span>
          </label>
          <input
            type="text"
            {...register("matric_id", { required: "Matric Id is required" })}
            name="matric_id"
            placeholder="Matric_id"
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

        <div className="form-control">
          <label className="label">
            <span className="label-text">Father's name</span>
          </label>
          <input
            name="father"
            {...register("father", { required: "Father's Name  is required" })}
            type="text"
            placeholder="Father's Name"
            className="input input-bordered w-full max-w-xs input-info"
          />
          {errors.father && (
            <p className="text-red-600">{errors.father?.message}</p>
          )}
        </div>

        <div className="form-control ">
          <label className="label">
            <span className="label-text">Permanent Address</span>
          </label>
          <input
            name="address"
            {...register("address", {
              required: "Permanent Address is required",
            })}
            type="text"
            placeholder="Permanent Address"
            className="input input-bordered w-full max-w-xs input-info"
          />
          {errors.address && (
            <p className="text-red-600">{errors.address?.message}</p>
          )}
        </div>

        <div className="form-control ">
          <label className="label">
            <span className="label-text">Marital Status</span>
          </label>
          <select
            {...register("maritalStatus", {
              required: "Marital Status is required",
            })}
            name="maritalStatus"
            className="select select-bordered w-full max-w-xs px-20 select-info"
          >
            <option disabled selected>
              --Select--
            </option>
            <option>Single</option>
            <option>Married</option>
          </select>
          {errors.maritalStatus && (
            <p className="text-red-600">{errors.maritalStatus?.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Route</span>
          </label>
          <select
            name="route"
            {...register("route", { required: "route is required" })}
            required
            className="select select-bordered w-full max-w-xs select-info"
          >
            <option disabled selected>
              Select Routes
            </option>
            <option>Gec</option>
            <option>Chawak Bazar</option>
            <option>Jamal Khan</option>
            <option>Khulsi</option>
          </select>
          {errors.route && (
            <p className="text-red-600">{errors.route?.message}</p>
          )}
        </div>

        <div className="form-control ">
          <label className="label">
            <span className="label-text">Birth Place</span>
          </label>
          <select
            name="birthPlace"
            {...register("birthPlace", {
              required: "Birth Place is required",
            })}
            className="select select-bordered w-full max-w-xs px-20 select-info"
          >
            <option disabled selected>
              --Select--
            </option>
            <option>Dhaka</option>
            <option>Chittagong</option>
            <option>Comilla</option>
            <option>Khulna</option>
            <option>Jessore</option>
            <option>Narail</option>
            <option>Others</option>
          </select>
          {errors.birthPlace && (
            <p className="text-red-600">{errors.birthPlace?.message}</p>
          )}
        </div>

        <div className="form-control ">
          <label className="label">
            <span className="label-text">Blood Group</span>
          </label>
          <select
            name="bloodGroup"
            {...register("bloodGroup", {
              required: "Blood Group is required",
            })}
            className="select select-bordered w-full max-w-xs px-20 select-info"
          >
            <option disabled selected>
              --Select--
            </option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
          {errors.bloodGroup && (
            <p className="text-red-600">{errors.bloodGroup?.message}</p>
          )}
        </div>

        <div className="form-control ">
          <label className="label">
            <span className="label-text">Contact No.</span>
          </label>
          <input
            name="contact"
            {...register("contact", {
              required: "Contact No. is required",
            })}
            type="text"
            placeholder="+88----"
            className="input input-bordered w-full max-w-xs px-6 input-info"
          />
          {errors.contact && (
            <p className="text-red-600">{errors.contact?.message}</p>
          )}
        </div>

        <div className="form-control ">
          <label className="label">
            <span className="label-text">Emergency Contact No.</span>
          </label>
          <input
            name="emergencyContact"
            {...register("emergencyContact", {
              required: "Emergency Contact No. is required",
            })}
            type="text"
            placeholder="+88----"
            className="input input-bordered w-full max-w-xs px-5 input-info"
          />
          {errors.emergencyContact && (
            <p className="text-red-600">{errors.emergencyContact?.message}</p>
          )}
        </div>

        <input type="submit" className="btn btn-primary mt-8 p-2 w-full " />
      </form>
    </div>
  );
};

export default ProfileForm;
