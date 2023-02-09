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

    const courseName2 = data.courseName2;
    const courseCode2 = data.courseCode2;
    const courseCredit2 = data.courseCredit2;
    const courseSection2 = data.courseSection2;
    const courseAdvise2 = data.courseAdvise2;
    const courseClearence2 = data.courseClearence2;
    

    const courseName3 = data.courseName3;
    const courseCode3 = data.courseCode3;
    const courseCredit3 = data.courseCredit3;
    const courseSection3 = data.courseSection3;
    const courseAdvise3 = data.courseAdvise3;
    const courseClearence3 = data.courseClearence3;

    const courseName4 = data.courseName4;
    const courseCode4 = data.courseCode4;
    const courseCredit4 = data.courseCredit4;
    const courseSection4 = data.courseSection4;
    const courseAdvise4 = data.courseAdvise4;
    const courseClearence4= data.courseClearence4;

    const courseName5 = data.courseName5;
    const courseCode5 = data.courseCode5;
    const courseCredit5 = data.courseCredit5;
    const courseSection5 = data.courseSection5;
    const courseAdvise5 = data.courseAdvise5;
    const courseClearence5 = data.courseClearence5;

    const courseName6 = data.courseName6;
    const courseCode6 = data.courseCode6;
    const courseCredit6 = data.courseCredit6;
    const courseSection6 = data.courseSection6;
    const courseAdvise6 = data.courseAdvise6;
    const courseClearence6 = data.courseClearence6;

    const registeredDetails = {
      category,
      email,
      courseName,
      courseCode,
      courseCredit,
      courseSection,
      courseAdvise,
      courseClearence,

      courseName2,
      courseCode2,
      courseCredit2,
      courseSection2,
      courseAdvise2,
      courseClearence2,

      courseName3,
      courseCode3,
      courseCredit3,
      courseSection3,
      courseAdvise3,
      courseClearence3,

      courseName4,
      courseCode4,
      courseCredit4,
      courseSection4,
      courseAdvise4,
      courseClearence4,

      courseName5,
      courseCode5,
      courseCredit5,
      courseSection5,
      courseAdvise5,
      courseClearence5,

      courseName6,
      courseCode6,
      courseCredit6,
      courseSection6,
      courseAdvise6,
      courseClearence6,
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

           <div className='lg:flex gap-10'>
           <div className="form-control w-full max-w-xs my-5 container">
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
                    
                    </div>
                    <div className='grid lg:grid-cols-6 md:grid-cols-6 gap-4 grid-cols-1'>
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
                    <div className='grid lg:grid-cols-6 md:grid-cols-6 gap-4 grid-cols-1'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Name</span></label>
                        <input type="text" {...register("courseName2", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseName2 && <p className='text-red-500'>{errors.courseName2.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Code</span></label>
                        <input type="text" {...register("courseCode2", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseCode2 && <p className='text-red-500'>{errors.courseCode2.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Credit</span></label>
                        <input type="text" {...register("courseCredit2", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseCredit2 && <p className='text-red-500'>{errors.courseCredit2.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Section</span></label>
                        <input type="text" {...register("courseSection2", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseSection2 && <p className='text-red-500'>{errors.courseSection2.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Advise</span></label>
                        <input type="text" {...register("courseAdvise2", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseAdvise2 && <p className='text-red-500'>{errors.courseAdvise2.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Clearance</span></label>
                        <input type="text" {...register("courseClearence2", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseClearence2 && <p className='text-red-500'>{errors.courseClearence2.message}</p>}
                    </div>
                    
                    </div>

                    <div className='grid lg:grid-cols-6 md:grid-cols-6 gap-4 grid-cols-1'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Name</span></label>
                        <input type="text" {...register("courseName3", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseName3 && <p className='text-red-500'>{errors.courseName3.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Code</span></label>
                        <input type="text" {...register("courseCode3", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseCode3 && <p className='text-red-500'>{errors.courseCode3.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Credit</span></label>
                        <input type="text" {...register("courseCredit3", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseCredit3 && <p className='text-red-500'>{errors.courseCredit3.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Section</span></label>
                        <input type="text" {...register("courseSection3", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseSection3 && <p className='text-red-500'>{errors.courseSection3.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Advise</span></label>
                        <input type="text" {...register("courseAdvise3", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseAdvise3 && <p className='text-red-500'>{errors.courseAdvise3.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Clearance</span></label>
                        <input type="text" {...register("courseClearence3", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseClearence3 && <p className='text-red-500'>{errors.courseClearence3.message}</p>}
                    </div>
                    
                    </div>

                    <div className='grid lg:grid-cols-6 md:grid-cols-6 gap-4 grid-cols-1'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Name</span></label>
                        <input type="text" {...register("courseName4", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseName4 && <p className='text-red-500'>{errors.courseName4.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Code</span></label>
                        <input type="text" {...register("courseCode4", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseCode4 && <p className='text-red-500'>{errors.courseCode4.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Credit</span></label>
                        <input type="text" {...register("courseCredit4", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseCredit4 && <p className='text-red-500'>{errors.courseCredit4.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Section</span></label>
                        <input type="text" {...register("courseSection4", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseSection4 && <p className='text-red-500'>{errors.courseSection4.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Advise</span></label>
                        <input type="text" {...register("courseAdvise4", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseAdvise4 && <p className='text-red-500'>{errors.courseAdvise4.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Clearance</span></label>
                        <input type="text" {...register("courseClearence4", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseClearence4 && <p className='text-red-500'>{errors.courseClearence4.message}</p>}
                    </div>
                    
                    </div>

                    <div className='grid lg:grid-cols-6 md:grid-cols-6 gap-4 grid-cols-1'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Name</span></label>
                        <input type="text" {...register("courseName5", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseName5 && <p className='text-red-500'>{errors.courseName5.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Code</span></label>
                        <input type="text" {...register("courseCode5", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseCode5 && <p className='text-red-500'>{errors.courseCode5.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Credit</span></label>
                        <input type="text" {...register("courseCredit5", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseCredit5 && <p className='text-red-500'>{errors.courseCredit5.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Section</span></label>
                        <input type="text" {...register("courseSection5", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseSection5 && <p className='text-red-500'>{errors.courseSection5.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Advise</span></label>
                        <input type="text" {...register("courseAdvise5", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseAdvise5 && <p className='text-red-500'>{errors.courseAdvise5.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Clearance</span></label>
                        <input type="text" {...register("courseClearence5", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseClearence5 && <p className='text-red-500'>{errors.courseClearence5.message}</p>}
                    </div>
                    
                    </div>

                    <div className='grid lg:grid-cols-6 md:grid-cols-6 gap-4 grid-cols-1'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Name</span></label>
                        <input type="text" {...register("courseName6", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseName6 && <p className='text-red-500'>{errors.courseName6.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Code</span></label>
                        <input type="text" {...register("courseCode6", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseCode6 && <p className='text-red-500'>{errors.courseCode6.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Credit</span></label>
                        <input type="text" {...register("courseCredit6", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseCredit6 && <p className='text-red-500'>{errors.courseCredit6.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Section</span></label>
                        <input type="text" {...register("courseSection6", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseSection6 && <p className='text-red-500'>{errors.courseSection6.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Advise</span></label>
                        <input type="text" {...register("courseAdvise6", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.courseAdvise6 && <p className='text-red-500'>{errors.courseAdvise6.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Course Clearance</span></label>
                        <input type="text" {...register("courseClearence6", {
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