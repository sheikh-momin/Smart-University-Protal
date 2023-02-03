import React from 'react';
import Dashboardnav from '../../pages/dashboard/dashboardNav/Dashboardnav';
import DashboardNavbar from '../../pages/dashboard/dashboardNav/DashboardNavbar';

const StudentApplication = () => {
    return (
        <div>
        <DashboardNavbar></DashboardNavbar>
         <div className='flex bg-zinc-300'>
            {/* <DashboardNavbar */}

            <Dashboardnav></Dashboardnav>

            <div className="form-control text-left w-full max-w-3xl mt-10 ml-40">
                <label className="label text-center text-white bg-teal-400">
                    <span className=" text-center text-3xl">Student Application System</span>
                </label>
                <div>
                <div className="hero min-h-screen bg-base-200 mt-5">
                    <div className="hero-content  ">
                        <div className="text-center ">
                        <h1 className="text-4xl  font-bold text-teal-400">Login Now</h1>
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
                            <button className="btn btn-primary">Login</button>
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