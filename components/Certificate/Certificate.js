import React from 'react';
import Drawer from "../../components/Dashboard/Drawer";
import Dashboardnav from '../../pages/dashboard/dashboardNav/Dashboardnav';
import DashboardNavbar from '../../pages/dashboard/dashboardNav/DashboardNavbar';

const Certificate = () => {
    return (
        <div className="bg-[#d4d4d8] pb-80">
        <DashboardNavbar></DashboardNavbar>
        <div className="bg-slate-200 drop-shadow-lg py-3 ">
        <h1 className="text-center text-cyan-500 text-3xl font-bold italic font-serif">Certificate Apply</h1>
        </div>
         <div className='flex bg-zinc-300'>
           
         <div>
             <Drawer></Drawer>
            </div>

            <div className="form-control text-center w-full max-w-3xl mt-6 ml-20">
                
                <div className=" flex form-control  w-full max-w-3xl mt-10 ml-10 bg-base-200 ">
                    <div class=" mt-5 flex flex-initial">
                        <label className="input-group input-group-xs ml-5">
                            <span>ID</span>
                            <input type="text" placeholder="Type here" className="input input-bordered input-xs" />
                        </label>
                        <label className="input-group input-group-xs">
                            <span>Name</span>
                            <input type="text" placeholder="Type here" className="input input-bordered input-xs" />
                        </label>
                        <label className="input-group input-group-xs">
                            <span>Program</span>
                            <input type="text" placeholder="Type here" className="input input-bordered input-xs" />
                        </label>    
                    </div>
                    <div>
                        <div className="form-control w-full max-w-2xl my-5 ml-10 grid grid-cols-2 gap-5">
                            <div>
                                <label className="label">
                                    <span className="label-text bg-base-100">Apply Date</span>     
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>    
                            <div>
                                <label className="label">
                                    <span className="label-text bg-base-100">Delivery Date</span>     
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>    
                            <div>
                                <label className="label">
                                    <span className="label-text bg-base-100">Alternative Email</span>     
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>    
                            <div>
                                <label className="label">
                                    <span className="label-text bg-base-100">Mobile Number</span>     
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>    
                            <div>
                                <label className=" mt-7 input-group input-group-xl ml-2">
                                    <span>Paid Date</span>
                                    <select className="select select-accent w-50% max-w-xs">
                                        <option disabled selected>Select Your Date</option>
                                        <option>Date</option>
                                        <option>Date</option>
                                        <option>Date</option>
                                    </select>
                                </label>
                            </div>    
                            <div>
                                <label className="label">
                                    <span className="label-text bg-base-100">Paid Amount</span>     
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>    
                            <div className=' '>
                                <label className=" mt-5 input-group input-group-xs ml-2">
                                    <span className=''>Payment Type</span>
                                    <div className="form-control max-w-xs ">
                                        <label className="label cursor-pointer group-xl mr-5 ">
                                            <span className="label-text ">Payment Cash</span> 
                                            <input type="radio" name="radio-10" className="radio bg-zinc-300 checked:bg-red-500" checked />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Payment Online</span> 
                                            <input type="radio" name="radio-10" className="radio bg-zinc-300 checked:bg-blue-500" checked />
                                        </label>
                                    </div>
                                </label>
                            </div>     
                            <div>
                                <label className="label md-4">
                                    <span className="label-text bg-base-100">Money Receipt No/ Reference No</span>     
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>     
                        </div>
                    </div>
                </div>
                <div className=" flex form-control  w-full max-w-3xl mt-10 ml-10 bg-base-200 ">
                    <div>
                        <div className="form-control w-full max-w-2xl my-5 ml-10 grid grid-cols-2 gap-5">   
                            <div>
                                <label className=" mt-7 input-group input-group-2xl ">
                                    <span>Document</span>                                  
                                    <select className="select select-accent w-3/4 max-w-xs">
                                        <option disabled selected>Select </option>
                                        <option>Certificate</option>
                                        <option>Transcript</option>                                       
                                    </select>
                                </label>
                            </div>    
                            <div>
                                <label className=" mt-7 input-group input-group-xl ml-2">
                                    <span>Document Type</span>
                                    <select className="select select-accent w-3/4 max-w-xs">
                                        <option disabled selected>Select </option>
                                        <option>Orginal</option>
                                        <option>Duplicate</option>                                      
                                    </select>
                                </label>
                            </div>    
                            <div>
                                <label className="label">
                                    <span className="label-text bg-base-100">Number of Copy</span>     
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>    
                            <div>
                                <label className=" mt-7 input-group input-group-xl ml-2">
                                    <span>Document Version</span>
                                    <select className="select select-accent w-3/4 max-w-xs">
                                        <option disabled selected>Select </option>
                                        <option>Select</option>
                                        <option>Select</option>                                       
                                    </select>
                                </label>
                            </div>

                            <div>
                                <label className=" mt-7 input-group input-group-xl ">
                                    <span>Urgency Type</span>
                                    <select className="select select-accent w-3/4 max-w-xs">
                                        <option disabled selected>Select </option>
                                        <option>Urgent</option>
                                        <option>Regular</option>                                     
                                    </select>
                                </label>
                            </div>
                            <div>
                            <label className="label">
                                    <span className="label-text bg-base-100">ADD DOCUMENT</span>     
                                </label>
                                <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs " /></div>                           
                            </div>
                    </div>                     
                </div>

                <div className=" flex form-control  w-full max-w-3xl mt-10 ml-10 bg-base-200 ">
                    <div>
                        <div className="form-control w-full max-w-2xl my-5  ml-10 grid grid-cols-2 gap-5">   
                               
                               
                            <div>
                                <label className="label">
                                    <span className="label-text bg-base-100 text-lg">Total Payable</span>     
                                </label>
                                
                                
                            </div>  
                            
                            <div>
                                <div className="form-control">
                                    <label className="cursor-pointer label  bg-base-300 mt-5 ml-10">
                                        <span className="label-text  bg-base-100 accent-content text-lg ">Confirm Adjustment</span>
                                        <input type="radio" name="radio-1" className="radio radio-success" />

                                        <input type="radio" name="radio-1" className="radio radio-error" checked />
                                    </label>
                                </div>    
                            </div>  
                            
                        </div>
                           
                            
                    </div>                     
                </div>

                {/* <div>
                <button className=" text-white mt-5 ml-40 btn btn-xs btn-center  bg-cyan-400 sm:btn-sm md:btn-md lg:btn-lg">Save</button>
                </div> */}
               
            </div>

            














        </div>
       </div>
    );
};

export default Certificate;