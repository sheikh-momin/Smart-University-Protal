import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const MakeCourse = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleSignUp = data => {
    const category = data.category;
    const email = data.email;
    

    const courseName2 = data.courseName2;
    const courseCode2 = data.courseCode2;
    const courseCredit2 = data.courseCredit2;
    const courseSection2 = data.courseSection2;
    const courseenroll2 = data.courseenroll2;
    
    

    const courseName3 = data.courseName3;
    const courseCode3 = data.courseCode3;
    const courseCredit3 = data.courseCredit3;
    const courseSection3 = data.courseSection3;
    const courseenroll3 = data.courseenroll3;
    

    const courseName4 = data.courseName4;
    const courseCode4 = data.courseCode4;
    const courseCredit4 = data.courseCredit4;
    const courseSection4 = data.courseSection4;
    const courseenroll4 = data.courseenroll4;
    

    const courseName5 = data.courseName5;
    const courseCode5 = data.courseCode5;
    const courseCredit5 = data.courseCredit5;
    const courseSection5 = data.courseSection5;
    const courseenroll5 = data.courseenroll5;
    

    const courseName6 = data.courseName6;
    const courseCode6 = data.courseCode6;
    const courseCredit6 = data.courseCredit6;
    const courseSection6 = data.courseSection6;
    const courseenroll6 = data.courseenroll6;
    

    const registeredDetails = {
      email,
      semester:category,
      subject:[
        
        {
            CourseTitle:courseName2,
            CourseCode:courseCode2,
            credit:courseCredit2,
            section:courseSection2,
            enroll:courseenroll2,
            
        },
        {
            CourseTitle:courseName3,
            CourseCode:courseCode3,
            credit:courseCredit3,
            section:courseSection3,
            enroll:courseenroll3,
            
        },
        {
            CourseTitle:courseName4,
            CourseCode:courseCode4,
            credit:courseCredit4,
            section:courseSection4,
            enroll:courseenroll4,
            
        },
        {
            CourseTitle:courseName5,
            CourseCode:courseCode5,
            credit:courseCredit5,
            section:courseSection5,
            enroll:courseenroll5,
            
        },
        {
            CourseTitle:courseName6,
            CourseCode:courseCode6,
            credit:courseCredit6,
            section:courseSection6,
            enroll:courseenroll6,
            
        }
      ],

    };
    console.log(registeredDetails);

    fetch(
      "http://localhost:5000/teacherCourse",
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
        toast.success("Teacher details is updated");
      });



  }
    return (
      <div  className='container mx-auto bg-slate-200 px-5 pb-3'>
      <div className=" mt-5">
          <h1 className="text-center rounded bg-blue-600 text-white md:text-xl  py-3 font-serif">Make Teacher Courses</h1>
      </div>
     <form onSubmit={handleSubmit(handleSignUp)}>

     <div className='container mx-auto lg:flex justify-center gap-10'>
     <div className="form-control w-full max-w-xs my-5 container">
                  
                  <select className='select select-bordered w-full max-w-xs md:mt-5' {...register("category", { required: true })}>
                  
                      <option value="Spring2023">Spring2023</option>
                      <option value="Summer2023">Summer2023</option>
                      <option value="Fall2023">Fall2023</option>
                      

                  </select>

              </div>
              
              <div className="form-control w-full max-w-xs md:mt-10">
                  
                  <input  placeholder='Teacher Email' type="email" {...register("email", {
                      required: "email required"
                  })} className="input input-bordered w-full max-w-xs" />
                  {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
              </div>
              
              </div>

              <div className='grid lg:grid-cols-5 md:grid-cols-5 gap-4 grid-cols-1'>
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
                  <label className="label"> <span className="label-text">Enrolled Student</span></label>
                  <input type="text" {...register("courseenroll2", {
                      required: "Name is Required"
                  })} className="input input-bordered w-full max-w-xs" />
                  {errors.courseenroll && <p className='text-red-500'>{errors.courseenroll.message}</p>}
              </div>
              
              
              </div>

              <div className='grid lg:grid-cols-5 md:grid-cols-5 gap-4 grid-cols-1'>
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
                  <label className="label"> <span className="label-text">Enrolled Student</span></label>
                  <input type="text" {...register("courseenroll3", {
                      required: "Name is Required"
                  })} className="input input-bordered w-full max-w-xs" />
                  {errors.courseenroll3 && <p className='text-red-500'>{errors.courseenroll3.message}</p>}
              </div>
              
            
              
              </div>

              <div className='grid lg:grid-cols-5 md:grid-cols-5 gap-4 grid-cols-1'>
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
                  <label className="label"> <span className="label-text">Enrolled Student</span></label>
                  <input type="text" {...register("courseenroll4", {
                      required: "Name is Required"
                  })} className="input input-bordered w-full max-w-xs" />
                  {errors.courseenroll4 && <p className='text-red-500'>{errors.courseenroll4.message}</p>}
              </div>
              
              
              
              </div>

              <div className='grid lg:grid-cols-5 md:grid-cols-5 gap-4 grid-cols-1'>
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
                  <label className="label"> <span className="label-text">Enrolled Student</span></label>
                  <input type="text" {...register("courseenroll5", {
                      required: "Name is Required"
                  })} className="input input-bordered w-full max-w-xs" />
                  {errors.courseenroll5 && <p className='text-red-500'>{errors.courseenroll5.message}</p>}
              </div>
              
              
              </div>

              <div className='grid lg:grid-cols-5 md:grid-cols-5 gap-4 grid-cols-1'>
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
                  <label className="label"> <span className="label-text">Enrolled Student</span></label>
                  <input type="text" {...register("courseenroll6", {
                      required: "Name is Required"
                  })} className="input input-bordered w-full max-w-xs" />
                  {errors.courseenroll6 && <p className='text-red-500'>{errors.courseenroll6.message}</p>}
              </div>
              
              
              
              </div>
              
              <div className='flex justify-center'>
              <input className='btn bg-gradient-to-r from-blue-700 w-1/4 mx-auto mt-4' value="Submit" type="submit" />
              </div>
              {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
          </form>
  </div>
    );
};

export default MakeCourse;