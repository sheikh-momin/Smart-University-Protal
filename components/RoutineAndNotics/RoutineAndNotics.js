import React from 'react';
import Drawer from "../../components/Dashboard/Drawer";
import Dashboardnav from '../../pages/dashboard/dashboardNav/Dashboardnav';
import DashboardNavbar from '../../pages/dashboard/dashboardNav/DashboardNavbar';

const RoutineAndNotics = () => {
    return (
        <div className="bg-[#d4d4d8] pb-80">
        <DashboardNavbar></DashboardNavbar>
        <div className="bg-slate-200 drop-shadow-lg py-3 ">
        <h1 className="text-center text-cyan-500 text-3xl font-bold italic font-serif">Class Routine And Notices</h1>
        </div>
         <div className='flex bg-zinc-300'>
            {/* <DashboardNavbar */}

            <div>
             <Drawer></Drawer>
            </div>

            <div className="form-control text-center w-full max-w-3xl mt-10 ml-20">
                {/* <label className="label text-center text-white bg-teal-400">
                    <span className=" text-center text-3xl">Class Routine</span>
                </label> */}

                <div className=" flex form-control  w-full max-w-4xl mt-7 ml-10 bg-cyan-300 ">
                    <div>
                        <div className="form-control w-full max-w-2xl mt-2 ml-10 grid grid-cols-1 gap-5">        
                            <div>
                                <h1 className='text-center text-slate-900 text-xl mt-5'>Routine may change frequently. Please check the routine before go to class.</h1>
                                <p className="text-center text-slate-600 text-md mt-4" >Routine Display sequence is Course Code, Course Title, Section, Campus, Building, Level, Room, Time, Teacher.</p>                              
                            </div>     
                        </div>       
                    </div>                     
                </div>

                <div className=" flex form-control  w-full max-w-3xl mt-5 ml-10 ">
                    <div>
                        <div className="form-control w-full max-w-3xl  ml-10 grid grid-cols-2 gap-5">                       
                            <div>
                                <div className="form-control w-full max-w-3xl">
                                    <label className="label">
                                        <span className="label-text bg-base-200 text-teal-900 text-lg">Select Semester</span>
                                    </label>
                                    <select className="select select-bordered  bg-cyan-200 select-success w-full max-w-3xl">
                                        <option disabled selected>Click Here</option>
                                        <option>Spring-2021</option>
                                        <option>Fall-2022</option>
                                        <option>Summer-2022</option>
                                        <option>Spring-2022</option>
                                        <option>Fall-2023</option>
                                        <option>Summer-2023</option>
                                        <option>Spring-2023</option>
                                    </select>
                                </div>  
                            </div>  
                        </div>
                           
                            
                    </div>                     
                </div>

                
                <div className=" flex form-control  w-full max-w-3xl mt-10 ml-10  bg-white ">
                    <div>
                        <div className="form-control w-full max-w-2xl mt-2 ml-5 grid grid-cols-1 gap-5">   
                            <h1 className='text-center text-slate-600 bg-cyan-200 text-xl ml-10 mt-5'>Academic Class Routine of :</h1>

                            <div className="collapse ml-10">
                                <input type="checkbox" className="peer" /> 
                                <div className="collapse-title bg-cyan-300 text-primary-content peer-checked:bg-cyan-300 peer-checked:text-secondary-content">
                                    Saturday
                                </div>
                                <div className="collapse-content bg-cyan-300 text-primary-content peer-checked:bg-cyan-100 peer-checked:text-secondary-content"> 
                                    <p>hello</p>
                                </div>
                            </div>

                            <div className="collapse ml-10">
                                <input type="checkbox" className="peer" /> 
                                <div className="collapse-title bg-cyan-300 text-primary-content peer-checked:bg-cyan-300 peer-checked:text-secondary-content">
                                    Sunday
                                </div>
                                <div className="collapse-content bg-cyan-3000 text-primary-content peer-checked:bg-cyan-100 peer-checked:text-secondary-content"> 
                                    <p>hello</p>
                                </div>
                            </div>

                            <div className="collapse ml-10">
                                <input type="checkbox" className="peer" /> 
                                <div className="collapse-title bg-cyan-300 text-primary-content peer-checked:bg-cyan-300 peer-checked:text-secondary-content">
                                    Monday
                                </div>
                                <div className="collapse-content bg-cyan-300 text-primary-content peer-checked:bg-cyan-100 peer-checked:text-secondary-content"> 
                                    <p>hello</p>
                                </div>
                            </div>

                            <div className="collapse ml-10">
                                <input type="checkbox" className="peer" /> 
                                <div className="collapse-title bg-cyan-300 text-primary-content peer-checked:bg-cyan-300 peer-checked:text-secondary-content">
                                    Tuesday
                                </div>
                                <div className="collapse-content bg-cyan-300 text-primary-content peer-checked:bg-cyan-100 peer-checked:text-secondary-content"> 
                                    <p>hello</p>
                                </div>
                            </div>

                            <div className="collapse ml-10">
                                <input type="checkbox" className="peer" /> 
                                <div className="collapse-title bg-cyan-300 text-primary-content peer-checked:bg-cyan-300 peer-checked:text-secondary-content">
                                    Wednesday
                                </div>
                                <div className="collapse-content bg-cyan-300 text-primary-content peer-checked:bg-cyan-100 peer-checked:text-secondary-content"> 
                                    <p>hello</p>
                                </div>
                            </div>

                            <div className="collapse ml-10">
                                <input type="checkbox" className="peer" /> 
                                <div className="collapse-title bg-cyan-300 text-primary-content peer-checked:bg-cyan-300 peer-checked:text-secondary-content">
                                    Thursday
                                </div>
                                <div className="collapse-content bg-cyan-300 text-primary-content peer-checked:bg-cyan-100 peer-checked:text-secondary-content"> 
                                    <p>hello</p>
                                </div>
                            </div>

                            <div className=" md-1 collapse ml-10">
                                <input type="checkbox" className="peer" /> 
                                <div className="collapse-title bg-cyan-300 text-primary-content peer-checked:bg-cyan-300 peer-checked:text-secondary-content">
                                    Friday
                                </div>
                                <div className="collapse-content bg-cyan-300 text-primary-content peer-checked:bg-cyan-100 peer-checked:text-secondary-content"> 
                                    <p>hello</p>
                                </div>
                            </div>                                                       
                         </div>                           
                    </div>                     
                </div> 

                <div className="flex flex-col w-full">
                    <div className="divider"></div> 
                </div>


                <div className=" flex form-control  w-full max-w-4xl mt-5 ml-10 bg-cyan-400 ">
                    <div>
                        <div className="form-control w-full max-w-4xl mt-2  grid grid-cols-1 gap-5">        
                            <div>
                                <h1 className='text-center text-white text-3xl '> Notices</h1>                              
                            </div>     
                        </div>       
                    </div>                     
                </div>

                <div className=" flex form-control  w-full max-w-3xl mt-5  ">
                    <div>
                        <div className="form-control w-full max-w-3xl  ml-10 grid grid-cols-2 gap-5">                       
                            <div>
                                <div className="form-control w-full max-w-3xl">
                                    <label className="label">
                                        <span className="label-text bg-cyan-100 text-teal-900 text-lg">Program</span>
                                    </label>
                                    <select className="select select-bordered  bg-cyan-200  select-success w-full max-w-3xl">
                                        <option disabled selected>Pick a Program</option>
                                        <option>Computer Science and Engineering</option>
                                        <option>Business Administration</option>
                                        <option>Pharmacy</option>
                                        <option>Software Engineering</option>
                                        <option>Civil Engineering</option>
                                        <option>Law</option>
                                        <option>English</option>
                                    </select>
                                </div>  
                            </div>  
                        </div>
                           
                            
                    </div>                     
                </div>

                <div className="artboard artboard-horizontal phone-2 bg-base-200 bg-center ml-12 mt-14">Notices</div>
            
                <div className="artboard artboard-horizontal phone-2 bg-base-200 bg-center ml-12 mt-14">Notices</div>

                <div className="flex flex-col w-full">               
                     <div className="divider"></div>    
                </div>
            
            </div>          
        </div>
       </div>
    );
};

export default RoutineAndNotics;