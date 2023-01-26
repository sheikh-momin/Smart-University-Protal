import Link from "next/link";
import React from "react";
import Navbar from "../../components/Navbar";

const index = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className="p-8">
        <div className="grid grid-cols-2 content-evenly text-black font-bold text-3xl bg-base-200 p-5 mb-20 mt-10 ">
          <div className="col-start-1 col-end-3">
            <h2>Find Jobs or Internships</h2>
          </div>

          <div className="col-end-7 col-span-2">
            {/* The button to open modal */}
            <label
              htmlFor="my-modal-3"
              className="btn btn-wide btn-primary bg-green-800 text-white hover:text-black"
            >
              Upload Your Resume
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal bg-green-800">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold"></h3>
                <div className="flex justify-center">
                  <div className="w-96">
                    <h2 className="text-primary text-2xl mb-5">
                      Upload Your Resume
                    </h2>
                    <form
                      action="https://smart-university-protal-server-ruby.vercel.app/resume"
                      method="post"
                      encType="multipart/form-data"
                    >
                      <input
                        type="file"
                        name="pdf"
                        className="file-input file-input-bordered file-input-primary  w-full mb-3 "
                      />

                      <input
                        className="btn btn-primary w-full mb-5"
                        type="submit"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white text-center font-bold bg-green-800 text-xl  p-5 mb-20 mt-10 ">
          {" "}
          <h2>
            First Things First: Prepare Your Resume, Cover Letter, And More
          </h2>{" "}
        </div>

        <ul className="p-4 lg:p-8 dark:bg-green-800 text-white">
          <li>
            <article>
              <a
                rel="noopener noreferrer"
                href="#"
                className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12  hover:dark:bg-gray-900 "
              >
                <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9"></h3>
                <time
                  datetime=""
                  className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-white"
                >
                  Resume
                </time>
                <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300 ">
                  You’ll eventually end up tailoring your resumes to specific
                  jobs, but creating your resume early or freshening up an
                  existing resume makes things easier when it’s time to apply.
                  Once you feel confident with your draft, you can use it as a
                  foundation to then tailor it to the different roles to which
                  you are applying.
                </p>
              </a>
            </article>
          </li>
          <li>
            <article>
              <a
                rel="noopener noreferrer"
                href="#"
                className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900"
              >
                <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9"></h3>
                <time
                  datetime=""
                  className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-white"
                >
                  Cover Letter
                </time>
                <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
                  Cover Letters aren’t always required, but getting familiar
                  with what to include before you start applying can help you
                  easily create one when it is required. Even when not required,
                  if there is an option to submit one and it is an organization
                  you are interested in, expressing that interest in a cover
                  letter that highlights your skills and experiences can go a
                  long way.
                </p>
              </a>
            </article>
          </li>
          <li>
            <article>
              <a
                rel="noopener noreferrer"
                href="#"
                className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900"
              >
                <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9"></h3>
                <time
                  datetime=""
                  className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-white"
                >
                  Digital Profiles
                </time>
                <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
                  Your digital “brand” is important in this virtual environment.
                  You’ll want to make sure your online and social media profiles
                  are complete and showcase you well when employers are
                  searching online for candidates. By freshening up your
                  profiles, these tools can start working for you by notifying
                  you of targeted job postings recommendations and connections.
                  We recommend starting with profiles on LinkedIn, Handshake,
                  UCAN.
                </p>
              </a>
            </article>
          </li>
          <li>
            <article>
              <a
                rel="noopener noreferrer"
                href="#"
                className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900"
              >
                <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9"></h3>
                <time
                  datetime=""
                  className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-white"
                >
                  Interview
                </time>
                <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
                  Plan ahead! Interviewing is a SKILL -- you want to get good at
                  it! Interviews can be scheduled on short timelines in a search
                  process, so get ahead of the game by preparing and practicing.
                </p>
              </a>
            </article>
          </li>
        </ul>
      </section>
    </>
  );
};

export default index;
