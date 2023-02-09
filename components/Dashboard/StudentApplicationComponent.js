

const StudentApplicationComponent = () => {
  return (
    <div className="bg-zinc-300 w-full md:mx-40 mx-5">
      <div className=" drop-shadow-lg py-3 ">
        <h1 className="text-center text-cyan-500 text-3xl font-bold italic font-serif"></h1>
      </div>
      <div className="bg-slate-200 drop-shadow-lg py-3 ">
        <h1 className="text-center text-cyan-500 md:text-3xl text-lg font-bold italic font-serif">Student Application System</h1>
      </div>
      <div className='flex justify-center'>
        {/* <DashboardNavbar */}



        <div className="form-control text-left w-full max-w-3xl ">
          {/* <label className="label text-center text-white bg-teal-400">
                    <span className=" text-center text-3xl">Student Application System</span>
                </label> */}
          <div>
            <div className="hero min-h-screen ">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Login now!</h1>
                  
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <div className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Student ID</span>
                      </label>
                      <input type="text" placeholder="ID" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input type="text" placeholder="password" className="input input-bordered" />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
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

export default StudentApplicationComponent;