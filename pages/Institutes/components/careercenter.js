import React from 'react'

const careercenter = () => {
  return (
    <>
      <div>
        <section className="dark:bg- dark:text-black">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="text-2xl font-semibold sm:text-4xl">Careers Tips</h2>
            <p className="mt-4 mb-8 dark:text-gray-400">
              Sagittis tempor donec id vestibulum viverra. Neque condimentum
              primis orci at lacus amet bibendum.
            </p>
            <div>
              <p>Functions for Students</p>
            </div>
            <div className="space-y-4">
              <details className="w-full border border-gray-200 dark:border-gray-700    rounded-lg">
                <summary className="px-4 py-6 focus:outline-none   focus-visible:ring-violet-400 text-green-800 text-bold">
                  Search for Opportunities
                </summary>
                <hr class="border-gray-200 dark:border-gray-700 mb-8" />

                <p className="  px-4 py-6 pt-0 ml-4 -mt-4 dark:black">
                  Employers specifically seeking UMD students use C4T to post
                  full-time, internship and part-time positions. You can search
                  by industry, job function, geographic location, major, and
                  other criteria. Use the system’s job alert feature to receive
                  notifications of new postings matching your interests. (insert
                  table of industries + description, ex: accordion 3)
                </p>
              </details>
              <details className="w-full border border-gray-200 dark:border-gray-700    rounded-lg">
                <summary className="px-4 py-6 focus:outline-none   focus-visible:ring-violet-400 text-green-800 text-bold">
                  Schedule an Appointment with a Career Advisor
                </summary>
                <hr class="border-gray-200 dark:border-gray-700 mb-8" />

                <p className="  px-4 py-6 pt-0 ml-4 -mt-4 dark:black">
                  Virtual and in-person appointments with career advisors are
                  scheduled through the C4T system. Search for a specific
                  advisor or a time matching your availability.
                </p>
              </details>
              <details className="w-full border border-gray-200 dark:border-gray-700    rounded-lg">
                <summary className="px-4 py-6 focus:outline-none   focus-visible:ring-violet-400 text-green-800 text-bold">
                  RSVP to Student Workshops and Employer Events
                </summary>
                <hr class="border-gray-200 dark:border-gray-700 mb-8" />

                <p className="  px-4 py-6 pt-0 ml-4 -mt-4 dark:black">
                  Claim a seat at a wide variety of career workshops and
                  employer events through your C4T account. Learn more about our
                  events.
                </p>
              </details>
              <details className="w-full border border-gray-200 dark:border-gray-700    rounded-lg">
                <summary className="px-4 py-6 focus:outline-none   focus-visible:ring-violet-400 text-green-800 text-bold">
                  Access Online Tools
                </summary>
                <hr class="border-gray-200 dark:border-gray-700 mb-8" />

                <p className="  px-4 py-6 pt-0 ml-4 -mt-4 dark:black">
                  Use C4T to access the Center’s exclusive career exploration
                  and job search tools (see Student Resources page), which
                  include: FOCUS 2: Major/career exploration self-assessments
                  Interviewing.com: Practice mock interviews virtually
                  Firsthand/Vault: Employer/Industry guides. Must access through
                  Careers4Terps to access the UMD subscription. GoinGlobal:
                  Country career guides, international resources for students
                  working/studying abroad
                </p>
              </details>
            </div>
          </div>
        </section>

        <div>
        <p></p>
        </div>

      </div>
    </>
  );
}

export default careercenter