import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const AlumniForm = () => {
  const { user } = useContext(AuthContext);
  const [alumni, setAlumni] = useState([]);
  const [loading, setLoading] = useState([]);
  const [date, setDate] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleForm = (data) => {
    const email = data.email;
    const country = data.country;
    const organization = data.organization;
    const department = data.department;
    const designation = data.designation;
    const date = data.date;

    const alumniDetails = {
      email: email,
      organization: organization,
      country: country,
      designation: designation,
      department: department,
      date: date,
    };
    // console.log(alumniDetails);

    fetch("http://localhost:5000/alumniDetails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(alumniDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Your Info is Saved");
      });
  };

  //   useEffect(() => {
  //     if (user?.email) {
  //       fetch(`http://localhost:5000/alumniDetails`)
  //         .then((res) => res.json())
  //         .then((data) => {
  //           data.map((s) => {
  //             setAlumni(s);
  //           });
  //           setLoading(false);
  //         });
  //     }
  //   }, [user]);
  //   console.log(s);

  //   if (loading) {
  //     return <progress className="progress text-center w-56"></progress>;
  //   }

  return (
    <div className="bg-zinc-300">
      <form onSubmit={handleSubmit(handleForm)} className="bg-white rounded-lg">
        <h2 className="bg-sky-400 text-white text-center text-xl font-bold py-4">
          Alumni Professional Info Save
        </h2>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-x-12 grid-cols-1  pt-8 px-48">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Email:</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Id is required" })}
              name="email"
              placeholder="Email"
              className="input input-bordered input-info"
              required
              defaultValue={user?.email}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Organization</span>
            </label>
            <input
              name="organization"
              {...register("organization", {
                required: "Organization is required",
              })}
              type="text"
              placeholder="Organization"
              className="input input-bordered input-info "
            />
            {errors.organization && (
              <p className="text-red-600">{errors.organization?.message}</p>
            )}
          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text">Designation</span>
            </label>
            <input
              name="designation"
              {...register("designation", {
                required: "Designation is required",
              })}
              type="text"
              placeholder="Designation"
              className="input input-bordered input-info"
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
              className="input input-bordered input-info"
            />
            {errors.department && (
              <p className="text-red-600">{errors.department?.message}</p>
            )}
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Country</span>
            </label>
            <input
              name="country"
              {...register("country", {
                required: "Country is required",
              })}
              type="text"
              placeholder="Country"
              className="input input-bordered input-info"
            />
            {errors.country && (
              <p className="text-red-600">{errors.country?.message}</p>
            )}
          </div>
          <div className="md:flex justify-between">
            <div>
              <label className="label">
                <span className="label-text">Start Date</span>
              </label>
              <input
                type="date"
                {...register("date", { required: "Date is required" })}
                className="input  input-bordered input-info  px-28"
                onChange={(e) => setDate(e.target.value)}
              />
              {errors.date && (
                <p className="text-red-600">{errors.date?.message}</p>
              )}
            </div>
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

export default AlumniForm;
