import React from 'react'
import img from "../../../Assets/s.jpg"
import header from "./header/Header"
import Navbar from "../../../components/Navbar"
import Banner from "../../../components/Institutes/ResearchBanner/ResearchBanner"

const research = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      {/*<div
        className="bg-[url(https://cdn.pixabay.com/photo/2015/08/27/09/22/banner-909710_960_720.jpg)] w-full p-24 flex"
        // style={{
        //   backgroundImage: `url(https://www.w3schools.com/css/img_forest.jpg)`,
        // }}
  ></div>*/}

      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-10 bg-white">
        <div className="p-8  sm:p-16">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Center For Advanched Theory
                <br className="hidden md:block" />
                <span className="inline-block text-deep-purple-accent-400"></span>
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="mb-4 text-base text-gray-700">
                The Center hopes to become a leading institution in theoretical
                investigations in the field of liberal arts and human sciences.
                We provide facilities in advanced research in diverse areas of
                intellectual activities. Our program comprises three tiers of
                activity, viz., supporting research, provide advanced teaching
                (by means of workshops, seminars, public lectures, colloquiums),
                and editing research publications (in the form of monographs,
                occasional papers, journals, bulletins). Our works, in addition,
                aims at promoting a wide intercultural exchange in advanced
                research.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*card Start */}
      <div id="card" className="bg-[#002147] w-full p-8 py-10 lg:flex ">
        {/*<!-- Component: Basic card --> */}
        <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md w-9/12 lg:flex-1 mr-12 sm:mb-5  lg:-mb-20  border-l-4 border-green-800  ">
          <div className="p-6">
            <h3 className="mb-4 text-xl font-medium text-slate-700">
              Message from the Director
            </h3>
            <p>
              Founded in 2016 in response to the revival of interest in theories
              of culture, civilization, and the history of mankind worldwide,
              the Center for Advanced Theory (CAT), currently concentrates on
              three related fields: classical psychoanalysis, historical
              studies, and literary theory. Our seminars, colloquiums, webinars,
              etc., are widely attended. Our publications, translations, and
              reprints receive a warm
            </p>
            <div className="text-black float-right mt-5 text-right">
              <p>Prof. Salimullah Khan, PhD </p>
              <p>Director, Center for Advanced Theory (CAT)</p>
            </div>
          </div>
        </div>
        {/*<!-- End Basic card --> */}

        <div className="lg:-mt-20 border-l-4 border-green-800  ">
          <img src="https://ged.ulab.edu.bd/sites/default/files/styles/faculty_avatar/public/images/faculty/Prof.%20Salimullah%20Khan.jpg?itok=vL0y89_4" />
        </div>
      </div>

      {/* 2nd Section  */}

      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full mt-24  md:px-24 lg:px-8 lg:py-10 bg-white">
        <div className="p-8  sm:p-16">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Center for Language Studies Since
                <br className="hidden md:block" />
                <span className="inline-block text-deep-purple-accent-400"></span>
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="mb-4 text-base text-gray-700">
                its inception in September 2014, the Center for Language Studies
                (CLS) has primarily aimed at imparting effective English
                language skills to the students of University of Liberal Arts
                Bangladesh (ULAB) through courses and teaching strategies that
                would make them suitably proficient to meet all kinds of
                academic and professional communicative requirements. CLS,
                therefore, generates the understanding of the opportunities and
                challenges of modern era by improving the quality of English
                language teaching and learning at ULAB. In addition, CLS
                addresses the professional language essentials of the staff and
                faculty members of the university. As part of its far-reaching
                mission, CLS also emphasizes the enrichment of its faculty
                members’ research skills through
                symposiums-workshops-conferences on contemporary national and
                global English language teaching-learning issues.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*card Start */}
      <div id="card" className="bg-[#002147] w-full p-8 py-10 lg:flex ">
        {/*<!-- Component: Basic card --> */}
        <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md w-9/12 lg:flex-1 mr-12 sm:mb-5  lg:-mb-20  border-l-4 border-green-800  ">
          <div className="p-6">
            <h3 className="mb-4 text-xl font-medium text-slate-700">
              Message from the Director
            </h3>
            <p>
              Admittedly, empowering the learners with 21st Century Skills is a key objective of our tertiary education where English plays a decisive role as the language of wider communication. And thus, we are dedicatedly engaged in creating self-motivated, autonomous learners who would academically and professionally excel regarding communication skills in English. And in doing so, we maintain a...
            </p>
            <div className="text-black float-right mt-5 text-right">
              <p>Prof. Salimullah Khan, PhD </p>
              <p>Director, Center for Advanced Theory (CAT)</p>
            </div>
          </div>
        </div>
        {/*<!-- End Basic card --> */}

        <div className="lg:-mt-20 border-l-4 border-green-800  ">
          <img src="https://ged.ulab.edu.bd/sites/default/files/styles/faculty_avatar/public/images/faculty/Prof.%20Salimullah%20Khan.jpg?itok=vL0y89_4" />
        </div>
      </div>
    </>
  );
}

export default research