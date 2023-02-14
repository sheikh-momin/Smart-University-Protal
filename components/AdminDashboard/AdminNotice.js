import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AdminNotice = () => {




  const { register, handleSubmit, formState: { errors } } = useForm();
  const [date, setDate] = useState();
  console.log(date);
  const handleForm = data => {
    const email = data.email;
    const date = data.date;
    const title = data.subject;
    const notice = data.notice;
    const from = data.from;
    console.log(email, date, title, notice, from);


    const noticeDetails = {
      email: email,
      date: date,
      title: title,
      notice: notice,
      from: from,
    };

    fetch("http://localhost:5000/notice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(noticeDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Your notice is posted");

      });



  }
  return (
    <div>
      <div className="bg-slate-200 drop-shadow-lg py-3 mt-5">
          <h1 className="text-center text-cyan-500 md:text-3xl text-lg font-bold italic font-serif">
           Important Notice For Teachers
          </h1>
        </div>
      <form onSubmit={handleSubmit(handleForm)} className="bg-white">
        <div className="pt-8 px-48">
          <div className="flex justify-center">
            <div className="form-control mr-5">
              <label className="label">
                <span className="label-text">Email:</span>
              </label>
              <input
                type="email"
                {...register("email", { required: "Email Id is required" })}
                name="email"
                placeholder="Email"
                className="input input-bordered input-info w-80"
                required
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>

            <div className='form-control '>
              <label className="label">
                <span className="label-text">Mention the Date</span>
              </label>
              <input
                type="date"
                {...register("date", { required: "Date is required" })}
                className="input  input-bordered input-info  px-20"
                onChange={(e) => setDate(e.target.value)}
              />
              {errors.date && (
                <p className="text-red-600">{errors.date?.message}</p>
              )}
            </div>
          </div>




          <div className='ml-40'>
            <div className="form-control mt-10">
              <label className="label">
                <span className="label-text">Title:</span>
              </label>
              <input
                name="subject"
                {...register("subject", {
                  required: "subject is required",
                })}
                type="text"
                placeholder="Title"
                className="input input-bordered input-info w-80 "
              />
              {errors.subject && (
                <p className="text-red-600">{errors.subject?.message}</p>
              )}
            </div>





            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text">Notice</span>
              </label>

              <textarea
                name="notice"
                {...register("notice", {
                  required: "notice is required",
                })}
                type="text"
                placeholder="Notice"
                className="textarea textarea-info  w-80 h-44"
              />
              {errors.notice && (
                <p className="text-red-600">{errors.notice?.message}</p>
              )}
            </div>


            <div className="form-control ">
              <label className="label">
                <span className="label-text">From:</span>
              </label>
              <input
                name="from"
                {...register("from", {
                  required: "from is required",
                })}
                type="text"
                placeholder="From"
                className="input input-bordered input-info w-80"
              />
              {errors.from && (
                <p className="text-red-600">{errors.from?.message}</p>
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

export default AdminNotice;