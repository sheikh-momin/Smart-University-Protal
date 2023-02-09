import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const RegisteredCourse = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleSignUp = data => {

        const category = data.category;
    const email = data.email;
    const courseName = data.courseName;
    const courseCode = data.courseCode;
    const courseCredit = data.courseCredit;
    const courseSection = data.courseSection;
    const courseAdvise = data.courseAdvise;
    const courseClearence = data.courseClearence;
    

    const registeredDetails = {
      category,
      email,
      courseName,
      courseCode,

      courseCredit,
      courseSection,
      courseAdvise,
      courseClearence
    };
    console.log(registeredDetails);
    fetch(
      "http://localhost:5000/registeredDetails",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(registeredDetails),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Your Profile details is updated");
      });

    }
    return (
        <div >
           <form onSubmit={handleSubmit(handleSignUp)}>

            
           <div className="form-control w-full max-w-xs my-5">
                    <p>Semister</p>
                        <select {...register("category", { required: true })}>
                        
                            <option value="Spring">Spring</option>
                            <option value="Summer">Summer</option>
                            <option value="Fall">Fall</option>
                            

                        </select>

                    </div>
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Student Email</span></label>
                        <input type="email" {...register("email", {
                            required: "email required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-3 gap-4 grid-cols-1'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Name</span></label>
                        <input type="text" {...register("courseName", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseName && <p className='text-red-500'>{errors.courseName.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Code</span></label>
                        <input type="text" {...register("courseCode", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseCode && <p className='text-red-500'>{errors.courseCode.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Credit</span></label>
                        <input type="text" {...register("courseCredit", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseCredit && <p className='text-red-500'>{errors.courseCredit.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Section</span></label>
                        <input type="text" {...register("courseSection", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseSection && <p className='text-red-500'>{errors.courseSection.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Advise</span></label>
                        <input type="text" {...register("courseAdvise", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseAdvise && <p className='text-red-500'>{errors.courseAdvise.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Clearance</span></label>
                        <input type="text" {...register("courseClearence", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseClearence && <p className='text-red-500'>{errors.courseClearence.message}</p>}
                    </div>
                    
                    </div>
                    
                    <input className='container btn btn-accent w-1/4 mx-auto mt-4' value="Submit" type="submit" />
                    {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
                </form>
        </div>
    );
};

export default RegisteredCourse;