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

    const email2 = data.email2;
    const courseTitle2 = data.courseTitle2;
    const courseCode2 = data.courseCode2;
    const credit2 = data.credit2;
    const grade2 = data.grade2;
    const point2 =data.point2;
    const semester2 = data.semester2;

    const email3 = data.email3;
    const courseTitle3 = data.courseTitle3;
    const courseCode3 = data.courseCode3;
    const credit3 = data.credit3;
    const grade3 = data.grade3;
    const point3 =data.point3;
    const semester3 = data.semester3;

    const email4 = data.email4;
    const courseTitle4 = data.courseTitle4;
    const courseCode4 = data.courseCode4;
    const credit4 = data.credit4;
    const grade4 = data.grade4;
    const point4 =data.point4;
    const semester4 = data.semester4;

    const email5 = data.email5;
    const courseTitle5 = data.courseTitle5;
    const courseCode5 = data.courseCode5;
    const credit5 = data.credit5;
    const grade5 = data.grade5;
    const point5 =data.point5;
    const semester5 = data.semester5;

    const email6 = data.email6;
    const courseTitle6 = data.courseTitle6;
    const courseCode6 = data.courseCode6;
    const credit6 = data.credit6;
    const grade6 = data.grade6;
    const point6 =data.point6;
    const semester6 = data.semester6;

    let today = new Date();
    let now = today.toLocaleString();

    const result = {
      email,
      date: now,
      semester: semester,
      subject:[
        { courseTitle: courseTitle, courseCode: courseCode, credit: credit, grade: grade, point:point },
        { courseTitle: courseTitle2, courseCode: courseCode2, credit: credit2, grade:grade2, point:point2 },
        { courseTitle: courseTitle3, courseCode: courseCode3, credit: credit3, grade:grade3, point:point3 },
        { courseTitle: courseTitle4, courseCode: courseCode4, credit: credit4, grade:grade4, point:point4 },
        { courseTitle: courseTitle5, courseCode: courseCode5, credit: credit5, grade:grade5, point:point5 },
        { courseTitle: courseTitle6, courseCode: courseCode6, credit: credit6, grade:grade6, point:point6 }
      ]
    };
    

    fetch(`https://smart-university-protal-server-qyf2.vercel.app/liveResult`,
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
        toast.success("Result Successfully Published");
      });


  }
  return (
    <section className="p-5 mx-5 md:mx-40">
      <div className="flex justify-center">
        <div className="card shadow p-12 py-12 bg-base-200  w-full">
          <h2 className="text-primary text-2xl mb-5">Publish Result</h2>

          <form onSubmit={handleSubmit(handleResultPublish)}>
            <div className="grid lg:grid-cols-2 gap-5">
              <select
                {...register("semester", { required: true })}
                className="select select-bordered w-full select-primary mb-5"
              >
                <option>Select Semester</option>
                <option>Spring2023</option>
                <option>Summer2023</option>
                <option>Fall2023</option>
              </select>
              <input
                {...register("email", { required: true })}
                placeholder="Enter Email"
                className="input input-bordered input-primary w-full  mb-5"
              />
               

              
            </div>
           <div className="grid grid-cols-1 gap-3">
          { /* first row */}
          <h2 className='text-primary text-xl'>First Course </h2>
            <div className="grid lg:grid-cols-5 gap-3">
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
              </div>
                <h2 className='text-primary text-xl'>Second Course </h2>
               { /* 2nd  row */}
            <div className="grid lg:grid-cols-5 gap-3">
            <input
                {...register("courseTitle2", { required: true })}
                placeholder="Enter Course Title"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("courseCode2", { required: true })}
                placeholder="Enter Course Code"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("credit2", { required: true })}
                placeholder="Enter Credit"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("grade2", { required: true })}
                placeholder="Enter Grade"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("point2", { required: true })}
                placeholder="Enter Point"
                className="input input-bordered input-primary w-full  mb-5"
              />
              </div>
               { /* 3rd row */}
                 <h2 className='text-primary text-xl'>Third Course </h2>
            <div className="grid lg:grid-cols-5 gap-3">
            <input
                {...register("courseTitle3", { required: true })}
                placeholder="Enter Course Title"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("courseCode3", { required: true })}
                placeholder="Enter Course Code"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("credit3", { required: true })}
                placeholder="Enter Credit"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("grade3", { required: true })}
                placeholder="Enter Grade"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("point3", { required: true })}
                placeholder="Enter Point"
                className="input input-bordered input-primary w-full  mb-5"
              />
              </div>
                <h2 className='text-primary text-xl'>Fourth Course </h2>
               { /* 4th row */}
            <div className="grid lg:grid-cols-5 gap-3">
            <input
                {...register("courseTitle4", { required: true })}
                placeholder="Enter Course Title"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("courseCode4", { required: true })}
                placeholder="Enter Course Code"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("credit4", { required: true })}
                placeholder="Enter Credit"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("grade4", { required: true })}
                placeholder="Enter Grade"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("point4", { required: true })}
                placeholder="Enter Point"
                className="input input-bordered input-primary w-full  mb-5"
              />
              </div>
                <h2 className='text-primary text-xl'>Fiveth Course </h2>
               { /* 5th row */}
            <div className="grid lg:grid-cols-5 gap-3">
            <input
                {...register("courseTitle5", { required: true })}
                placeholder="Enter Course Title"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("courseCode5", { required: true })}
                placeholder="Enter Course Code"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("credit5", { required: true })}
                placeholder="Enter Credit"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("grade5", { required: true })}
                placeholder="Enter Grade"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("point5", { required: true })}
                placeholder="Enter Point"
                className="input input-bordered input-primary w-full  mb-5"
              />
            </div>
              <h2 className='text-primary text-xl'>Sixth Course </h2>
             { /* 6th row */}
            <div className="grid lg:grid-cols-5 gap-3">
            <input
                {...register("courseTitle6", { required: true })}
                placeholder="Enter Course Title"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("courseCode6", { required: true })}
                placeholder="Enter Course Code"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("credit6", { required: true })}
                placeholder="Enter Credit"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("grade6", { required: true })}
                placeholder="Enter Grade"
                className="input input-bordered input-primary w-full  mb-5"
              />
              <input
                {...register("point6", { required: true })}
                placeholder="Enter Point"
                className="input input-bordered input-primary w-full  mb-5"
              />
            </div>
           </div>
            <input
              className="btn text-white bg-gradient-to-r from-indigo-900 via-purple-600 to-blue-600 w-full  mb-5"
                type="submit"
                value="Publish"
              />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ResultForm