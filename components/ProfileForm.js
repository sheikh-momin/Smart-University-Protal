import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../Context/AuthProvider";

const ProfileForm = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleForm = (data) => {
    const Id = data.matric_id;
    const name = data.userName;
    const father = data.father;
    const address = data.address;
    const birthplace = data.birthplace;
    const bloodGroup = data.bloodGroup;
    const contact = data.contact;
    const emergencyContact = data.emergencyContact;
    const maritalStatus = data.maritalStatus;
    const route = data.route;

    const studentDetails = {
      Id: Id,
      name: name,
      father: father,
      address: address,
      birthplace: birthplace,
      bloodGroup: bloodGroup,
      contact: contact,
      emergencyContact: emergencyContact,
      maritalStatus: maritalStatus,
      route: route,
    };
    console.log(studentDetails);
    fetch("http://localhost:5000/studentDetails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(studentDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Your Profile details is updated");
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 gap-4 grid-cols-1">
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

          <div className="form-control ">
            <label className="label">
              <span className="label-text">Email:</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email Id is required" })}
              name="mail"
              placeholder="Email"
              className="input input-bordered input-info"
              required
              // defaultValue={user.email}
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
              {...register("father", {
                required: "Father's Name  is required",
              })}
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
          <input type="submit" className="btn btn-primary mt-8 px-8" />
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
