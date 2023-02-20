import Link from "next/link";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";



const index = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className='mb-10'>
        <div>
          <div className="text-black font-bold text-3xl bg-base-200 p-5 mb-20 mt-10 border-l-8 border-green-800 ">
            <h2>Institutes And Centers</h2>
          </div>

          <div className="w-11/12 m-auto grid lg:grid-cols-2 justify-center">
            <Link href="Institutes/components/careercenter">
              <div className="flex shadow w-11/12 h-52 p-3 ">
                <div className="p-5 mr-5">
                  <img
                    src="https://www.jmu.edu/career/_actionlinkbuttons/button-careeradvocates.png"
                    alt=""
                    className="w-52"
                  />
                </div>

                <div className=" w-96   ">
                  <div className="border-b-4 border-cyan-600 mb-3">
                    <p className="text-2xl font-bold ">Career Center </p>
                  </div>
                  <div className=" scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100  h-32 overflow-y-auto">
                    <p className=" text-cyan-600 text-justify text-xs  ">
                      Welcome to the University Career Center homepage. Our
                      mission is to promote the success of Texas Tech students
                      and alumni through face-to-face and virtual methods. We
                      serve the Red Raider community through individual
                      appointments as well as presentations, career fairs,
                      employer infosessions, etiquette events and our Career
                      Closet.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="Institutes/components/research">
              <div className="flex shadow w-11/12 h-52 p-3 ">
                <div className="p-5 mr-5">
                  <img
                    src="https://twin-cities.umn.edu/sites/twin-cities.umn.edu/files/styles/mobile/public/BRI%20IEM_900x600.jpg?itok=lts1HZzE"
                    alt=""
                    className="w-52"
                  />
                </div>

                <div className=" w-96   ">
                  <div className="border-b-4 border-cyan-600 mb-3">
                    <p className="text-2xl font-bold ">Research Center </p>
                  </div>
                  <div className=" scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100  h-32 overflow-y-auto">
                    <p className=" text-cyan-600 text-justify text-xs  ">
                      Welcome to the University Career Center homepage. Our
                      mission is to promote the success of Texas Tech students
                      and alumni through face-to-face and virtual methods. We
                      serve the Red Raider community through individual
                      appointments as well as presentations, career fairs,
                      employer infosessions, etiquette events and our Career
                      Closet.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default index;
