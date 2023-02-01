import React from 'react';
import Dashboardnav from '../../pages/dashboard/dashboardNav/Dashboardnav';
import DashboardNavbar from '../../pages/dashboard/dashboardNav/DashboardNavbar';

const Certificate = () => {
    return (
        <div>
        <DashboardNavbar></DashboardNavbar>
         <div className='flex bg-teal-600'>
           
            <Dashboardnav></Dashboardnav>

            <div className="form-control text-left w-full max-w-3xl mt-10 ml-40">
                <label className="label text-center text-slate-800 bg-teal-500">
                    <span className=" text-center text-3xl">Dreamers University Certificate Apply</span>
                </label>
                <div className=" flex form-control  w-full max-w-3xl mt-10  bg-teal-500 ">
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
                        <div className="form-control w-full max-w-2xl mt-5 ml-10 grid grid-cols-2 gap-5">
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">Apply Date</span>     
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>    
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">Delivery Date</span>     
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>    
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">Alternative Email</span>     
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>    
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">Mobile Number</span>     
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
                                    <span className="label-text text-white">Paid Amount</span>     
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>    
                            <div className=' bg-teal-400'>
                                <label className=" mt-5 input-group input-group-xs ml-2">
                                    <span className=''>Payment Type</span>
                                    <div className="form-control max-w-xs ">
                                        <label className="label cursor-pointer group-xl ">
                                            <span className="label-text ">Payment Cash</span> 
                                            <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Payment Online</span> 
                                            <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                        </label>
                                    </div>
                                </label>
                            </div>     
                            <div>
                                <label className="label md-4">
                                    <span className="label-text text-white">Money Receipt No/ Reference No</span>     
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>     
                        </div>
                    </div>
                </div>
                <div className=" flex form-control  w-full max-w-3xl mt-10  bg-teal-500 ">
                    <div>
                        <div className="form-control w-full max-w-2xl mt-2 ml-10 grid grid-cols-2 gap-5">   
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
                                    <span className="label-text text-white">Number of Copy</span>     
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
                                    <span className="label-text text-white">ADD DOCUMENT</span>     
                                </label>
                                <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs " /></div>                           
                            </div>
                    </div>                     
                </div>

                <div className=" flex form-control  w-full max-w-3xl mt-10  bg-teal-500 ">
                    <div>
                        <div className="form-control w-full max-w-2xl mt-2 ml-10 grid grid-cols-2 gap-5">   
                               
                               
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">Total Payable</span>     
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>  

                            <div>
                                <div className="form-control">
                                    <label className="cursor-pointer label">
                                        <span className="label-text">Remember me</span>
                                        <input type="checkbox" checked className="checkbox checkbox-accent" />
                                    </label>
                                </div>    
                            </div>  
                            
                        </div>
                           
                            
                    </div>                     
                </div>

                <div>
                <button className=" mt-5 ml-50% btn btn-xs btn-center  bg-blue-700 sm:btn-sm md:btn-md lg:btn-lg">Save</button>
                </div>
                {/* <div>
                    <table class="mt-10 w-full border-collapse border border-slate-300 ...">
                    <thead >
                        <tr class=" text-2xl border bg-info border-slate-300 ...">
                        <th class="">Submit Status</th>
                        <th class="">Course Title</th>
                        <th class="">Course Name</th>
                        <th class="">Teacher Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr class=" text-xl border bg-secondary border-slate-300 ...">
                        <td class=""> 
                            <label htmlFor="my-modal-5" className="btn bg-secondary-focus ">Submit Here</label>
                            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                            <div className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <h3 className="font-bold text-lg">Give your Teacher feedback</h3>
                                
                                <div className="form-control">
                                <p className="py-4">Teaching Quality</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>

                                <div className="form-control">
                                <p className="py-4">Class Arrangment</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>
                                <div className="form-control">
                                <p className="py-4">Friendly</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>
                                <div className="form-control">
                                <p className="py-4">Presenting Quality</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>
                                <div className="form-control">
                                <p className="py-4">Time Mantaning</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>
                                <div className="form-control">
                                <p className="py-4">Behavior</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>
                                <div className="modal-action">
                                <label htmlFor="my-modal-5" className="btn">Submit</label>
                                </div>
                            </div>
                            </div>
                            
                        </td>
                        <td class="">Indianapolis</td>
                        <td class="">Indianapolis</td>
                        <td class="">Indianapolis</td>
                        </tr>
                        <tr class="text-xl border bg-primary border-slate-300 ...">
                        <td class=""> 
                            <label htmlFor="my-modal-5" className="btn bg-primary-focus">Submit Here</label>
                            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                            <div className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <h3 className="font-bold text-lg">Give your Teacher feedback</h3>
                                
                                <div className="form-control">
                                <p className="py-4">Teaching Quality</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>

                                <div className="form-control">
                                <p className="py-4">Class Arrangment</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>
                                <div className="form-control">
                                <p className="py-4">Friendly</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>
                                <div className="form-control">
                                <p className="py-4">Presenting Quality</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>
                                <div className="form-control">
                                <p className="py-4">Time Mantaning</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>
                                <div className="form-control">
                                <p className="py-4">Behavior</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>
                                <div className="modal-action">
                                <label htmlFor="my-modal-5" className="btn">Submit</label>
                                </div>
                            </div>
                            </div>
                            
                        </td>
                        <td class="">Columbus</td>
                        <td class="">Columbus</td>
                        <td class="">Columbus</td>
                        </tr>
                        <tr class="text-xl border bg-success border-slate-300 ...">
                        <td class=""> 
                            <label htmlFor="my-modal-5" className="btn  bg-green-500">Submit Here</label>
                            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                            <div className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <h3 className="font-bold text-lg">Give your Teacher feedback</h3>
                                
                                <div className="form-control">
                                <p className="py-4">Teaching Quality</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>

                                <div className="form-control">
                                <p className="py-4">Class Arrangment</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>
                                <div className="form-control">
                                <p className="py-4">Friendly</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>
                                <div className="form-control">
                                <p className="py-4">Presenting Quality</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>
                                <div className="form-control">
                                <p className="py-4">Time Mantaning</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>
                                <div className="form-control">
                                <p className="py-4">Behavior</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>
                                <div className="modal-action">
                                <label htmlFor="my-modal-5" className="btn  bg-green-500">
                                <div id="snackbar">Some text some message..</div>
                                    Submitted</label>
                                </div>
                            </div>
                            </div>
                            
                        </td>
                        <td class="">Detroit</td>
                        <td class="">Detroit</td>
                        <td class="">Detroit</td>
                        </tr>
                        <tr class=" text-xl border bg-blue-500 border-slate-300 ...">
                        <td class=""> 
                            <label htmlFor="my-modal-5" className="btn  bg-blue-600">Submit Here</label>
                            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                            <div className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <h3 className="font-bold text-lg">Give your Teacher feedback</h3>
                                
                                <div className="form-control">
                                <p className="py-4">Teaching Quality</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>

                                <div className="form-control">
                                <p className="py-4">Class Arrangment</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>
                                <div className="form-control">
                                <p className="py-4">Friendly</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>
                                <div className="form-control">
                                <p className="py-4">Presenting Quality</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>
                                <div className="form-control">
                                <p className="py-4">Time Mantaning</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>
                                <div className="form-control">
                                <p className="py-4">Behavior</p>

                                <label className="cursor-pointer label">
                                    <span className="label-text">Very Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-error" />
                                    <span className="label-text">Bad</span>
                                    <input type="checkbox" checked className="checkbox checkbox-secondary" />
                                    <span className="label-text">Avarage</span>
                                    <input type="checkbox" checked className="checkbox checkbox-warning" />
                                    <span className="label-text">Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                                    <span className="label-text">Very Good</span>
                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                </label>
                                </div>
                                <div className="modal-action">
                                <label htmlFor="my-modal-5" className="btn">Submit</label>
                                </div>
                            </div>
                            </div>
                            
                        </td>
                        <td class="">Detroit</td>
                        <td class="">Detroit</td>
                        <td class="">Detroit</td>
                        </tr>
                    </tbody>
                    </table>
                </div> */}
            </div>

            














        </div>
       </div>
    );
};

export default Certificate;