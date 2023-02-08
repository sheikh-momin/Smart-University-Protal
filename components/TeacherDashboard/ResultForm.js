import React from 'react'
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";

const ResultForm = () => {
  const { register, handleSubmit } = useForm();
  const handleResultPublish = (data) => {
    const email = data.email;
    const courseTitle = data.courseTitle;
    const courseCode = data.courseCode;
    const credit = data.credit;
    const grade = data.grade;
    const point =data.point;
    const semester = data.semester;

    let today = new Date();
    let now = today.toLocaleString();

    const result = {
      email,
      courseTitle,
      courseCode,
      credit,
      grade,
      point,
      semester,
      date:now,
    }

    fetch(`http://localhost:5000/publish`,
      {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(result),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Result Successfully Published");
      });


  }
  return (
    <section className="p-5">
      <div className="flex justify-center">
        <div className="card shadow p-12 py-12 bg-base-200  w-full">
          <h2 className="text-primary text-2xl mb-5">Publish Result</h2>

          <form onSubmit={handleSubmit(handleResultPublish)}>
          <div className="grid lg:grid-cols-2 gap-5">
         

            <input
              {...register("email", { required: true })}
              placeholder="Enter Email"
              className="input input-bordered input-primary w-full  mb-5"
            />
               <input
              {...register("courseTitle", { required: true })}
              placeholder="Enter Course Title"
              className="input input-bordered input-primary w-full  mb-5"
            />
               <input
              {...register("courseCode", { required: true })}
              placeholder="Enter Course Code"
              className="input input-bordered input-primary w-full  mb-5"
            />
               <input
              {...register("credit", { required: true })}
              placeholder="Enter Credit"
              className="input input-bordered input-primary w-full  mb-5"
            />
               <input
              {...register("grade", { required: true })}
              placeholder="Enter Grade"
              className="input input-bordered input-primary w-full  mb-5"
            />
               <input
              {...register("point", { required: true })}
              placeholder="Enter Point"
              className="input input-bordered input-primary w-full  mb-5"
            />
            <select
              {...register("semester", { required: true })}
              className="select select-bordered w-full select-primary mb-5"
            >
              <option>Select Semester</option>
              <option>Spring-2023</option>
              <option>Summer-2023</option>
              <option>Fall-2023</option>
            </select>
            <input className="btn btn-primary w-full  mb-5" type="submit" value="Publish" />
            </div>

          
          </form>
        </div>
      </div>
    </section>
  );
}

export default ResultForm