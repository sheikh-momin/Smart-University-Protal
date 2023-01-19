import Category from "../../components/Admission/Category";
import DateInput from "../../components/Admission/DateInput";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";



const ApplyOnline = () => {


  return (
    <div>
      <Navbar></Navbar>
      <div className="md:grid grid-cols-12 gap-4 my-20">
        <div className="col-span-9">
          <div className="border-y border-slate-400 py-2">
            <h1 className="text-center text-teal-700 text-3xl font-bold italic font-serif">Online Application Form</h1>
          </div>
          <div className="md:ml-20 my-5 ">
            <div className="hero  ">
              <div className="hero-content w-full">
                <div className="card w-full  shadow-2xl bg-base-100">
                  <div className="card-body">

                    <div className="md:flex justify-between">
                      <div className="form-control ">
                        <label className="label">
                          <span className="label-text">Year</span>
                        </label>
                        <input type="text" placeholder="Year" className="input input-bordered" required/>
                      </div>
                      
                      <div >
                        <label className="label">
                          <span className="label-text">Semester</span>
                        </label> 
                        <select disabled className="select select-bordered w-full max-w-xs px-20" required>
                          <option disabled selected>--Select--</option>
                          <option selected>Spring</option>
                          <option>Summer</option>
                          <option>Fall</option>
                          
                        </select>
                      </div>

                      <div >
                        <label className="label">
                          <span className="label-text">Program</span>
                        </label> 
                        <select required className="select select-bordered w-full max-w-xs">
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
                      </div>
                    </div>

                    <div>
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input type="text" placeholder="Enter Your Full Name" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="md:flex justify-between">
                      <div >
                        <DateInput></DateInput>
                      </div>

                      <div className="md:mr-36">
                        <label className="label">
                          <span className="label-text">
                            Gender</span>
                        </label>
                          <div required className="flex ">
                          <input type="radio" name="radio-9" className="radio"  checked />
                          <p className="inline-block ml-2 mr-3">Male</p>
                          
                          
                          <input type="radio" name="radio-9" className="radio"  />
                          <p className="inline-block ml-2 mr">Female</p>
                          </div>
                        
                      </div>
                    </div>

                    <div className="md:flex justify-between">
                      <div>
                        <label className="label">
                          <span className="label-text">
                            Nationality</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs px-20">
                          <option disabled selected>--Select--</option>
                          <option>Bangladeshi</option>
                          <option>Others</option>
                        </select>
                      </div>

                      <div className="md:mr-20">
                        <label className="label">
                          <span className="label-text">
                            Marital Status</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs px-20">
                          <option disabled selected>--Select--</option>
                          <option>Single</option>
                          <option>Married</option>
                        </select>

                      </div>
                    </div>


                    <div className="md:flex justify-between">
                      <div>
                        <label className="label">
                          <span className="label-text">
                            Birth Place</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs px-20">
                          <option disabled selected>--Select--</option>
                          <option>Dhaka</option>
                          <option>Chittagong</option>
                          <option>Comilla</option>
                          <option>Khulna</option>
                          <option>Jessore</option>
                          <option>Narail</option>
                          <option>Others</option>
                        </select>
                      </div>

                      <div className="md:mr-20">
                        <label className="label">
                          <span className="label-text">
                            Blood Group</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs px-20">
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
                      </div>
                    </div>

                    <div className="md:flex justify-between">
                      <div>
                        <label className="label">
                          <span className="label-text">
                            Contact No.</span>
                        </label>
                        <input type="text" placeholder="01----" className="input input-bordered w-full max-w-xs px-6" />
                      </div>

                      <div className="md:mr-20">
                        <label className="label">
                          <span className="label-text">
                            Emergency Contact No.</span>
                        </label>
                        <input type="text" placeholder="01----" className="input input-bordered w-full max-w-xs px-5" />
                      </div>
                    </div>

                    <div>
                      <label className="label">
                        <span className="label-text">
                          Email</span>
                      </label>
                      <input type="text" placeholder="email" className="input input-bordered w-full max-w-xs " />
                    </div>
                    <div>
                      <label className="label">
                        <span className="label-text">
                          Transaction ID</span>
                      </label>
                      <input type="text" placeholder="Transaction ID" className="input input-bordered w-full max-w-xs " />
                    </div>


                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="col-span-3 mt-16"><Category></Category></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ApplyOnline;