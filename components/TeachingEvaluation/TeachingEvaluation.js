// import Link from 'next/link';
import React from 'react';
import Drawer from "../../components/Dashboard/Drawer";
import Dashboardnav from '../../pages/dashboard/dashboardNav/Dashboardnav';
import DashboardNavbar from '../../pages/dashboard/dashboardNav/DashboardNavbar';

const TeachingEvaluation = () => {
    return (
        <div className="bg-[#d4d4d8] pb-80 w-full mx-5 md:mx-40 mt-5">
        <div className="bg-slate-200 drop-shadow-lg py-3 ">
        <h1 className="text-center text-cyan-500 md:text-3xl font-bold italic font-serif">Teaching Evaluation</h1>
        </div>
         <div className='flex justify-center bg-zinc-300'>
            <div className="form-control text-left w-full max-w-3xl mt-10  ">
                
                <div className='flex justify-center'>
                    <select className="mt-5  bg-cyan-200 select select-success w-full max-w-xs">
                <option disabled selected>Select Semester</option>
                <option>Fall-2021</option>
                <option>Summer-2021</option>
                <option>Spring-2022</option>
                <option>Fall-2022</option>
                <option>Summer-2022</option>
                <option>Spring-2023</option>
                <option>Fall-2023</option>
                </select>
                </div>
                  

                    <div className=''>
                    <table class="mt-10  md:w-full border-separate border-2 border-slate-400  ...">
                    <thead className='border-4'>
                        <tr class=" text-2xl border bg-cyan-200  border-info ...">
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
                                <h3 className="font-bold text-lg text-center">Give your Teacher feedback</h3>
                                
                                <div className="form-control">
                                <p className="py-4 text-center">Teaching Quality</p>
                                <div className=' '>
                                <div className='flex justify-center'>
                                    <select className="mt-2  bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                                {/* <label className="  input-group input-group-xs ml-5">
                                    
                                    <div className="form-control max-w-xs ">
                                        <label className="label cursor-pointer group-xl  ">
                                            <span className="label-text ">Very Bad</span> 
                                            <input type="radio" name="radio-10" className="radio bg-zinc-100 checked:bg-red-500" checked />
                                        </label>
                                    </div>
                                    <div className="form-control ml-10">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Bad</span> 
                                            <input type="radio" name="radio-10" className="radio bg-zinc-100 checked:bg-secondary" checked />
                                        </label>
                                    </div>
                                    
                                    
                                    <div className="form-control ml-10">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Avarage</span> 
                                        <input type="radio" name="radio-10" className="radio bg-zinc-100 checked:bg-warning" checked />
                                    </label>

                                    </div>
                                    <div className="form-control ml-10">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Good</span> 
                                        <input type="radio" name="radio-10" className="radio bg-zinc-100 checked:bg-primary" checked />
                                    </label>
                                    </div>
                                    <div className="form-control ml-10">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Very Good</span> 
                                        <input type="radio" name="radio-10" className="radio bg-zinc-100 checked:bg-blue-500" checked />
                                    </label>
                                    </div>
                                    <div className="form-control ml-10">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Excilent</span> 
                                        <input type="radio" name="radio-10" className="radio bg-zinc-100 checked:bg-success" checked />
                                    </label>
                                    </div>
                                </label> */}
                            </div> 
                                
                                </div>

                                <div className="form-control">
                                <p className="py-4 text-center">Class Arrangment</p>
                                <div className='flex justify-center'>
                                    <select className="mt-2  bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                                </div>
                                <div className="form-control">
                                <p className="py-4 text-center">Friendly</p>
                                <div className='flex justify-center'>
                                    <select className="mt-2 bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                                </div>
                                <div className="form-control">
                                <p className="py-4 text-center">Presenting Quality</p>
                                <div className='flex justify-center'>
                                    <select className="mt-2  bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                                </div>
                                <div className="form-control">
                                <p className="py-4 text-center">Time Mantaning</p>
                                <div className='flex justify-center'>
                                    <select className="mt-2  bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                                </div>
                                <div className="form-control">
                                <p className="py-4 text-center">Behavior</p>
                                <div className='flex justify-center'>
                                    <select className="mt-2  bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                                </div>
                                
                                <div className="modal-action">
                                <label htmlFor="my-modal-5" className="btn ">Submit
                                </label>
                                </div>
                            </div>
                            </div>
                            
                        </td>
                        <td class="">CSE-322</td>
                        <td class="">Cloud Computing</td>
                        <td class="">Mominul Islam</td>
                        </tr>
                        <tr class="text-xl border bg-blue-200 border-primary ...">
                        <td class=""> 
                            <label htmlFor="my-modal-5" className="btn bg-primary text-white">Submit Here</label>
                            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                            <div className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <h3 className="font-bold text-lg text-center">Give your Teacher feedback</h3>
                                
                                <div className="form-control">
                                <p className="py-4 text-center">Teaching Quality</p>
                                <div className=' '>
                                <div className='flex justify-center'>
                                    <select className="mt-2  bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                                
                            </div> 
                                
                                </div>

                                <div className="form-control">
                                <p className="py-4 text-center">Class Arrangment</p>
                                <div className='flex justify-center'>
                                    <select className="mt-2  bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                                </div>
                                <div className="form-control">
                                <p className="py-4 text-center">Friendly</p>
                                <div className='flex justify-center'>
                                    <select className="mt-2 bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                                </div>
                                <div className="form-control">
                                <p className="py-4 text-center">Presenting Quality</p>
                                <div className='flex justify-center'>
                                    <select className="mt-2  bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                                </div>
                                <div className="form-control">
                                <p className="py-4 text-center">Time Mantaning</p>
                                <div className='flex justify-center'>
                                    <select className="mt-2  bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                                </div>
                                <div className="form-control">
                                <p className="py-4 text-center">Behavior</p>
                                <div className='flex justify-center'>
                                    <select className="mt-2  bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                                </div>
                                
                                <div className="modal-action">
                                <label htmlFor="my-modal-5" className="btn ">Submit
                                </label>
                                </div>
                            </div>
                            </div>
                            
                        </td>
                        <td class="">CSE-420</td>
                        <td class="">Network Security</td>
                        <td class="">Afnan Sheikh</td>
                        </tr>
                        <tr class="text-xl border bg-green-300 border-green-900 ...">
                        <td class=""> 
                            <label htmlFor="my-modal-5" className="btn  bg-green-500 text-base-300">Submit Here</label>
                            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                            <div className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <h3 className="font-bold text-lg text-center">Give your Teacher feedback</h3>
                                
                                <div className="form-control">
                                <p className="py-4 text-center">Teaching Quality</p>
                                <div className=' '>
                                <div className='flex justify-center'>
                                    <select className="mt-2  bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                                
                            </div> 
                                
                                </div>

                                <div className="form-control">
                                <p className="py-4 text-center">Class Arrangment</p>
                                <div className='flex justify-center'>
                                    <select className="mt-2  bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                                </div>
                                <div className="form-control">
                                <p className="py-4 text-center">Friendly</p>
                                <div className='flex justify-center'>
                                    <select className="mt-2 bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                                </div>
                                <div className="form-control">
                                <p className="py-4 text-center">Presenting Quality</p>
                                <div className='flex justify-center'>
                                    <select className="mt-2  bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                                </div>
                                <div className="form-control">
                                <p className="py-4 text-center">Time Mantaning</p>
                                <div className='flex justify-center'>
                                    <select className="mt-2  bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                                </div>
                                <div className="form-control">
                                <p className="py-4 text-center">Behavior</p>
                                <div className='flex justify-center'>
                                    <select className="mt-2  bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                                </div>
                                
                                <div className="modal-action">
                                <label htmlFor="my-modal-5" className="btn ">Submit
                                </label>
                                </div>
                            </div>
                            </div>
                            
                        </td>
                        <td class="">CSE-125</td>
                        <td class="">DATA MINING</td>
                        <td class="">Tanvirul Islam</td>
                        </tr>
                        <tr class=" text-xl border bg-blue-300 border-blue-900 ...">
                        <td class=""> 
                            <label htmlFor="my-modal-5" className="btn text-base-300 bg-blue-500">Submit Here</label>
                            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                            <div className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <h3 className="font-bold text-lg text-center">Give your Teacher feedback</h3>
                                
                                <div className="form-control">
                                <p className="py-4 text-center">Teaching Quality</p>
                                <div className=' '>
                                <div className='flex justify-center'>
                                    <select className="mt-2  bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                               
                            </div> 
                                
                                </div>

                                <div className="form-control">
                                <p className="py-4 text-center">Class Arrangment</p>
                                <div className='flex justify-center'>
                                    <select className="mt-2  bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                                </div>
                                <div className="form-control">
                                <p className="py-4 text-center">Friendly</p>
                                <div className='flex justify-center'>
                                    <select className="mt-2 bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                                </div>
                                <div className="form-control">
                                <p className="py-4 text-center">Presenting Quality</p>
                                <div className='flex justify-center'>
                                    <select className="mt-2  bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                                </div>
                                <div className="form-control">
                                <p className="py-4 text-center">Time Mantaning</p>
                                <div className='flex justify-center'>
                                    <select className="mt-2  bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                                </div>
                                <div className="form-control">
                                <p className="py-4 text-center">Behavior</p>
                                <div className='flex justify-center'>
                                    <select className="mt-2  bg-cyan-400 select select-success w-full max-w-xs">
                                        <option disabled selected>Select here</option>
                                        <option>Very Bad</option>
                                        <option>Bad</option>
                                        <option>Average</option>
                                        <option>Good</option>
                                        <option>Very Good</option>
                                        <option>Excilent</option>
                                    </select>
                                </div>
                                </div>
                                
                                <div className="modal-action">
                                <label htmlFor="my-modal-5" className="btn ">Submit
                                </label>
                                </div>
                            </div>
                            </div>
                            
                        </td>
                        <td class="">CSE-221</td>
                        <td class="">Ecomerce</td>
                        <td class="">Nishi IIWU</td>
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