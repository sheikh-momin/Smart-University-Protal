import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const TeacherForm = () => {
  const { user } = useContext(AuthContext);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleForm = (data) => {
    const email = user.email;
    const img = data.imgURL;
    const bloodGroup = data.bloodGroup;
    const contact = data.contact;
    const maritalStatus = data.maritalStatus;
    const name = data.userName;
    const department = data.department;
    const designation = data.designation;

    const TeacherDetails = {
      img: img,
      email: email,
      name: name,
      bloodGroup: bloodGroup,
      contact: contact,
      maritalStatus: maritalStatus,
      department: department,
      designation: designation,
    };
    console.log(TeacherDetails);

    fetch("https://smart-university-protal-server-coral.vercel.app/teacherDetails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(TeacherDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Your Profile details is updated");
      });
    
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)} className="bg-white rounded-lg">
        <h2 className="bg-blue-600 text-white text-center text-xl font-bold py-4">
          Teacher Profile
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 gap-4 grid-cols-1  p-12 pb-0">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Email:</span>
            </label>
            <input
              type="text"
              // {...register("email", { required: "Email Id is required" })}
              name="mail"
              placeholder="Email"
              className="input input-bordered input-info"
              required
              defaultValue={user?.email}
            />
            {errors.mail && (
              <p className="text-red-600">{errors.mail?.message}</p>
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
              placeholder="Enter Your Name"
              className="input input-bordered input-info w-full max-w-xs"
            />
            {errors.userName && (
              <p className="text-red-600">{errors.userName?.message}</p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Designation</span>
            </label>
            <input
              name="designation"
              {...register("designation", {
                required: "Designation  is required",
              })}
              type="text"
              placeholder="Designation"
              className="input input-bordered w-full max-w-xs input-info"
            />
            {errors.designation && (
              <p className="text-red-600">{errors.designation?.message}</p>
            )}
          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text">Department</span>
            </label>
            <input
              name="department"
              {...register("department", {
                required: "Department is required",
              })}
              type="text"
              placeholder="Department"
              className="input input-bordered w-full max-w-xs input-info"
            />
            {errors.department && (
              <p className="text-red-600">{errors.department?.message}</p>
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
          <div className="form-control text-black">
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
              <span className="label-text">Image URL:</span>
            </label>
            <input
              type="text"
              {...register("imgURL", { required: "Image URL Id is required" })}
              name="imgURL"
              placeholder="image URL"
              className="input input-bordered input-info"
              required
            />
            {errors.imgURL && (
              <p className="text-red-600">{errors.imgURL?.message}</p>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <input type="submit" className="btn btn-primary mt-8 px-8 mb-4" />
        </div>
      </form>
    </div>
  );
};

export default TeacherForm;
