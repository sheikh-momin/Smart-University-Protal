import React from 'react';
import Drawer from "../../components/Dashboard/Drawer";
import Dashboardnav from '../../pages/dashboard/dashboardNav/Dashboardnav';
import DashboardNavbar from '../../pages/dashboard/dashboardNav/DashboardNavbar';

const StudentApplication = () => {
    return (
        <div className="bg-[#d4d4d8] pb-80">
        <DashboardNavbar></DashboardNavbar>
        <div className="bg-slate-200 drop-shadow-lg py-3 ">
        <h1 className="text-center text-cyan-500 text-3xl font-bold italic font-serif">Student Application System</h1>
        </div>
         <div className='flex bg-zinc-300'>
            {/* <DashboardNavbar */}

            <div>
             <Drawer></Drawer>
            </div>

            <div className="form-control text-left w-full max-w-3xl mt-10 ml-20">
                {/* <label className="label text-center text-white bg-teal-400">
                    <span className=" text-center text-3xl">Student Application System</span>
                </label> */}
                <div>
                <div className="hero min-h-screen bg-base-200 mt-5 ml-10">
                    <div className="hero-content  ">
                        <div className="text-center ">
                        <h1 className="text-4xl text-cyan-400 font-bold ">Login Now</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                {/* <a  className="label-text-alt link link-hover">Forgot password?</a> */}
                            </label>
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn bg-cyan-300 btn-primary">Login</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                
                </div>

                

            </div>














        </div>
       </div>
    );
};

export default StudentApplication;