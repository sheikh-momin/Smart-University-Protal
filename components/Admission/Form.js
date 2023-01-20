import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";


const Form = () => {
  const [date, setDate] = useState(); 
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleForm = data =>{
    const year = data.year
    const email = data.email
    const semester = data.semester
    const program = data.program
    const userName = data.userName
    const date = data.date
    const gender = data.gender
    const nationality = data.nationality
    const maritalStatus = data.maritalStatus
    const birthPlace = data.birthPlace
    const bloodGroup = data.bloodGroup
    const contact = data.contact
    const emergencyContact = data.emergencyContact
    const transactionID = data.transactionID


    const reportedItem = {
      year: year,
      email: email,
      semester: semester,
      program: program,
      userName: userName,
      gender: gender,
      date: date,
      maritalStatus: maritalStatus,
      nationality: nationality,
      birthPlace: birthPlace,
      bloodGroup: bloodGroup,
      contact: contact,
      emergencyContact: emergencyContact,
      transactionID: transactionID,
    }
    console.log(reportedItem);
    fetch('http://localhost:5000/applyOnline', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reportedItem)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success('Thanks for your response..We saved your form');
      })
  }


  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>

        <div className="md:flex justify-between">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Year</span>
            </label>
            <input type="text" {...register("year", { required: "Year is required" })} name="year" placeholder="Year" className="input input-bordered" required />
            {errors.year && <p className="text-red-600">{errors.year?.message}</p>}
          </div>

          <div >
            <label className="label">
              <span className="label-text">Semester</span>
            </label>
            <select name="semester" {...register("semester", { required: "Semester is required" })}  className="select select-bordered w-full max-w-xs px-20" required>
              <option disabled selected>--Select--</option>
              <option selected>Spring</option>
              <option>Summer</option>
              <option>Fall</option>
            </select>
            {errors.semester && <p className="text-red-600">{errors.semester?.message}</p>}
          </div>

          <div >
            <label className="label">
              <span className="label-text">Program</span>
            </label>
            <select name="program" {...register("program", { required: "Program is required" })} required className="select select-bordered w-full max-w-xs">
              <option disabled selected>--Select--</option>
              <option>B.A.(Hons.) in English</option>
              <option>BBA</option>
              <option>EMBA</option>
              <option>MBA</option>
              <option>B.Sc. in CSE </option>
              <option>B.Sc. in CSE (Diploma Holders)</option>
              <option>M.A. in ELL</option>
              <option>M.A. in ELT – 1 Year</option>
              <option>B.Sc. in EEE</option>
              <option>B.Sc. in EEE - (Diploma Holders)</option>
              <option>LL.B. (Hons.)</option>
              <option>LL.M</option>
              <option>Bachelor of Pharmacy</option>
              <option>B.Sc. in Civil</option>
            </select>
            {errors.program && <p className="text-red-600">{errors.program?.message}</p>}
          </div>
        </div>

        <div>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="userName" {...register("userName", { required: "Name is required" })} type="text" placeholder="Enter Your Full Name" className="input input-bordered w-full max-w-xs" />
          {errors.userName && <p className="text-red-600">{errors.userName?.message}</p>}
        </div>

        <div className="md:flex justify-between">
          <div>
            <label className="label">
              <span className="label-text">Select Date</span>
            </label>
            <input type="date" {...register("date", { required: "Date is required" })} className="input  input-bordered w-full max-w-xs px-12" onChange={e => setDate(e.target.value)} />
            {errors.date && <p className="text-red-600">{errors.date?.message}</p>}
          </div>

          <div className="md:mr-36">
            <label className="label">
              <span className="label-text">
                Gender</span>
            </label>
            <div required className="flex ">
              <input type="radio" {...register("gender", { required: "Gender is required" })} value="Male" name="radio-9 gender" className="radio" checked />
              <p className="inline-block ml-2 mr-3">Male</p>


              <input type="radio" {...register("gender", { required: "Gender is required" })} value="Female" name="radio-9 gender" className="radio" />
              <p className="inline-block ml-2 mr">Female</p>
            </div>
            {errors.gender && <p className="text-red-600">{errors.gender?.message}</p>}
          </div>
        </div>

        <div className="md:flex justify-between">
          <div>
            <label className="label">
              <span className="label-text">
                Nationality</span>
            </label>
            <select name="nationality" {...register("nationality", { required: "Nationality is required" })} className="select select-bordered w-full max-w-xs px-20">
              <option disabled selected>--Select--</option>
              <option>Bangladeshi</option>
              <option>Others</option>
            </select>
            {errors.nationality && <p className="text-red-600">{errors.nationality?.message}</p>}
          </div>

          <div className="md:mr-20">
            <label className="label">
              <span className="label-text">
                Marital Status</span>
            </label>
            <select {...register("maritalStatus", { required: "Marital Status is required" })} name="maritalStatus" className="select select-bordered w-full max-w-xs px-20">
              <option disabled selected>--Select--</option>
              <option>Single</option>
              <option>Married</option>
            </select>
            {errors.maritalStatus && <p className="text-red-600">{errors.maritalStatus?.message}</p>}
          </div>
        </div>

        <div className="md:flex justify-between">
          <div>
            <label className="label">
              <span className="label-text">
                Birth Place</span>
            </label>
            <select name="birthPlace" {...register("birthPlace", { required: "Birth Place is required" })} className="select select-bordered w-full max-w-xs px-20">
              <option disabled selected>--Select--</option>
              <option>Dhaka</option>
              <option>Chittagong</option>
              <option>Comilla</option>
              <option>Khulna</option>
              <option>Jessore</option>
              <option>Narail</option>
              <option>Others</option>
            </select>
            {errors.birthPlace && <p className="text-red-600">{errors.birthPlace?.message}</p>}
          </div>

          <div className="md:mr-20">
            <label className="label">
              <span className="label-text">
                Blood Group</span>
            </label>
            <select name="bloodGroup" {...register("bloodGroup", { required: "Blood Group is required" })} className="select select-bordered w-full max-w-xs px-20">
              <option disabled selected>--Select--</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
            {errors.bloodGroup && <p className="text-red-600">{errors.bloodGroup?.message}</p>}
          </div>
        </div>

        <div className="md:flex justify-between">
          <div>
            <label className="label">
              <span className="label-text">
                Contact No.</span>
            </label>
            <input name="contact" {...register("contact", { required: "Contact No. is required" })} type="text" placeholder="01----" className="input input-bordered w-full max-w-xs px-6" />
            {errors.contact && <p className="text-red-600">{errors.contact?.message}</p>}
          </div>

          <div className="md:mr-20">
            <label className="label">
              <span className="label-text">
                Emergency Contact No.</span>
            </label>
            <input name="emergencyContact" {...register("emergencyContact", { required: "Emergency Contact No. is required" })} type="text" placeholder="01----" className="input input-bordered w-full max-w-xs px-5" />
            {errors.emergencyContact && <p className="text-red-600">{errors.emergencyContact?.message}</p>}
          </div>
        </div>

        <div>
          <label className="label">
            <span className="label-text">
              Email</span>
          </label>
          <input name="email" {...register("email", { required: "Email Address is required" })} type="text" placeholder="email" className="input input-bordered w-full max-w-xs " />
          {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
        </div>
        <div>
          <label className="label">
            <span className="label-text">
              Transaction ID</span>
          </label>
          <input name="transactionID" {...register("transactionID", { required: "Transaction ID is required" })} type="text" placeholder="Transaction ID" className="input input-bordered w-full max-w-xs " />
          {errors.transactionID && <p className="text-red-600">{errors.transactionID?.message}</p>}
        </div>

        
        <input type="submit" className="btn btn-primary mt-5 w-full" />
      </form>
    </div>
  );
};

export default Form;