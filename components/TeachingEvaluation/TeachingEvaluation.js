// import Link from 'next/link';
import React from 'react';
import Dashboardnav from '../../pages/dashboard/dashboardNav/Dashboardnav';
import DashboardNavbar from '../../pages/dashboard/dashboardNav/DashboardNavbar';

const TeachingEvaluation = () => {
    return (
        <div>
        <DashboardNavbar></DashboardNavbar>
         <div className='flex bg-zinc-300'>
            {/* <DashboardNavbar */}

            <Dashboardnav></Dashboardnav>
            <div className="form-control text-left w-full max-w-3xl mt-10 ml-40">
                <label className="label text-center text-white bg-teal-400">
                    <span className=" text-center text-3xl">Teaching Evaluation</span>
                </label>
                <select className="mt-5  bg-teal-200 select select-success w-full max-w-xs">
                <option disabled selected>Select Semester</option>
                <option>Fall-2021</option>
                <option>Summer-2021</option>
                <option>Spring-2022</option>
                <option>Fall-2022</option>
                <option>Summer-2022</option>
                <option>Spring-2023</option>
                <option>Fall-2023</option>
                </select>  

                <div>
                    <table class="mt-10 w-full border-separate border-2 border-slate-400  ...">
                    <thead className='border-4'>
                        <tr class=" text-2xl border bg-teal-100  border-info ...">
                        <th class="">Submit Status</th>
                        <th class="">Course Title</th>
                        <th class="">Course Name</th>
                        <th class="">Teacher Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr class=" text-xl border-4 bg-red-100 border-secondary-focus ...">
                        <td class=""> 
                            <label htmlFor="my-modal-5" className="btn bg-secondary text-white ">Submit Here</label>
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
                        <tr class="text-xl border bg-blue-200 border-primary ...">
                        <td class=""> 
                            <label htmlFor="my-modal-5" className="btn bg-primary text-white">Submit Here</label>
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
                        <tr class="text-xl border bg-green-300 border-green-900 ...">
                        <td class=""> 
                            <label htmlFor="my-modal-5" className="btn  bg-green-500 text-base-300">Submit Here</label>
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
                        <tr class=" text-xl border bg-blue-300 border-blue-900 ...">
                        <td class=""> 
                            <label htmlFor="my-modal-5" className="btn text-base-300 bg-blue-500">Submit Here</label>
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
                </div>
                <div>
                
                </div>

                

            </div>

            

           

              











                













        </div>
       </div>
    );
};

export default TeachingEvaluation;