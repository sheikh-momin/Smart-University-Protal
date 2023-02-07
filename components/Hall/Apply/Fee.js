import React from 'react'


const Fee = () => {
  
  return (
    <div className="grid justify-center">
      {/*<!-- Component: Basic accordion 
      <section className="w-full divide-y rounded divide-slate-200 ">
        <details className="p-4 group">
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            Room Type and Accommodation Fee
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac02 desc-ac02"
            >
              <title id="title-ac02">Open icon</title>
              <desc id="desc-ac02">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-slate-500">
            Undergraduate Residence Halls mainly consist of shared rooms
            (2-person, 3-person & 4-person), with 2-person room and 3-person
            room being the majority. Hall application and residence fees are
            based on a semester basis. A limited number of single rooms are also
            available. Each room is equipped with a standard set of furniture
            and air conditioning. En Suite twin rooms on the 21/F and 22/F of
            Residential and Amenities Complex will be available for
            undergraduate students’ residence. Priority will be given to Year 4
            students
          </p>
        </details>
        <details className="p-4 group">
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            Rules and Regulations of Residence Hall
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac03 desc-ac03"
            >
              <title id="title-ac03">Open icon</title>
              <desc id="desc-ac03">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-slate-500">1. Halls of Residence</p>
          <p>
            {" "}
            Currently, there are six male student’s Halls at IIUC Campus,
            Kumira, Sitakunda, Chittagong. More Halls are to be constructed both
            for male and female students in the Campus. The University will, in
            course of time, be a fully residential one. A student, who does not
            reside in a Hall of the University, shall be called a Day Scholar. A
            day scholar shall reside with his parents or legal guardian or with
            a person authorized by the parents or legal guardian.
          </p>
          <p>2.Hall Administration</p>
          <p>
            Halls are led by Provosts. There are House Tutors and Administrative
            Assistants in the Halls. Hall Provost and House tutors are committed
            to look after the students within the framework of University Rules
            and Regulations. Further they are also required to organize various
            student activities in halls such as observing and arranging the
            National & Islamic days, sports and cultural programs.{" "}
          </p>
        </details>
        <details className="p-4 group">
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            Apply
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac04 desc-ac04"
            >
              <title id="title-ac04">Open icon</title>
              <desc id="desc-ac04">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-slate-500">
         
          </p>
        </details>
      </section>    --> */}
      {/*<!-- End Basic accordion --> */}

      <div className="card  w-full  shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Your Semester</span>
            </label>
            <select className="select input-bordered  w-full ">
              <option disabled selected>
                1st Semester
              </option>
              <option>2nd Semester</option>
              <option>3rd Semester</option>
              <option>4th Semester</option>
              <option>5th Semester</option>
            </select>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fee