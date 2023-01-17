import React from "react";
import vu from "../Assets/vu.jpg";

const News = () => {
  return (
    <section className="bg-emerald-900 py-24">
      <h2 className="text-center text-white font-serif font-bold text-3xl italic mb-6">
        News & Notice
      </h2>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title ">Notice!</h2>
              <div className="flex flex-col w-full border-opacity-50">
                <div className="divider"></div>

                <div className="btn-group">
                  <button className="btn btn-secondary">Admission</button>
                  <button className="btn btn-primary">Administration</button>
                  <button className="btn btn-primary">Dept</button>
                </div>
              </div>
              <div className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl  dark:text-gray-700 divide-gray-700">
                <div className="px-4 flex items-center text-xs uppercase tracking-wide dark:text-gray-400 dark:border-gray-700">
                  <div className="border dark:text-gray-700">
                    <div className="bg-primary dark:text-white">
                      <h3>January</h3>
                    </div>
                    <div className="dark:text-gray-700">
                      <h4>Wednesday</h4>
                      <h2 className="bold">10</h2>
                      <h4>2023</h4>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-4 border-l-8 dark:border-violet-400">
                  <span className="text-2xl"></span>
                  <span className="text-xs dark:text-gray-400">
                    Admission test result-2023.pdf
                  </span>
                </div>
              </div>

              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div>
            <div>
              <div className="">
                <h4 className="text-3xl text-primary mb-5">News</h4>
              </div>
              <div className=" w-full flex gap-4  overflow-x-auto ">
                <div className=" h-48 w-52 bg-base-100 shadow-xl">
                  <figure className="">
                    <img
                      src="https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80"
                      alt="University"
                      className="  border-t-emerald-800"
                    />
                  </figure>
                  <div className=" items-center text-center">
                    <h2 className="">Campus Life</h2>

                    <div className="border-t items-center justify-center w-full">
                      <h3>January ,11 2023</h3>
                    </div>
                  </div>
                </div>
                <div className=" h-48 w-52 bg-base-100 shadow-xl">
                  <figure className="">
                    <img
                      src="https://www.ox.ac.uk/sites/files/oxford/field/field_image_main/graduation_1.jpg"
                      alt="University"
                      className="  border-t-emerald-800"
                    />
                  </figure>
                  <div className=" items-center text-center">
                    <h2 className=""> convocation</h2>

                    <div className="border-t items-center justify-center w-full">
                      <h3>January ,11 2023</h3>
                    </div>
                  </div>
                </div>
                <div className=" h-48 w-52 bg-base-100 shadow-xl">
                  <figure className="">
                    <img
                      src="https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80"
                      alt="University"
                      className="  border-t-emerald-800"
                    />
                  </figure>
                  <div className=" items-center text-center">
                    <h2 className="">Campus Life</h2>

                    <div className="border-t items-center justify-center w-full">
                      <h3>January ,11 2023</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
