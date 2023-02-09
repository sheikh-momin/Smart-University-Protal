import React from "react";
import FacultyCategory from "../../components/Faculty/FacultyCategory";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const civil = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:grid grid-cols-12 gap-4 my-20">
        <div className="col-span-3 mt-16">
          <FacultyCategory></FacultyCategory>
        </div>
        <div className="col-span-9">
          <div className="border-y border-slate-400 py-2">
            <h1 className="text-center text-teal-700 text-3xl font-bold italic font-serif">
              Civil Engineering{" "}
            </h1>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8VGV4dGlsZSUyMGVuZ2luZWVyaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="mx-auto w-full h-[400px]"
            />
            <h3>
              The Department of Civil Engineering offers a 4 years undergraduate
              Program of Bachelor of Science in Civil Engineering. To become a
              graduate in this field one has to complete 160 credit hours. It is
              utmost necessity to enhance the quality of higher education in
              Bangladesh for national and global context. Eastern University
              (EU) is one of the private university trying to maintain quality
              education for creating the leader of the leaders since 2003.
              Department of Civil Engineering has projected itself as one of the
              vital departments of the science and engineering faculty. Almost
              all the physical infrastructure development of the country are the
              products of Civil Engineering. Construction, operation and
              maintenance of buildings, bridges, roads, railways, airports,
              embankment, river training, irrigation, canals, sea and river
              ports, power houses, transmission towers, dams and barrages etc.
              require the knowledge and technology of Civil Engineering.
              Experienced and learned teachers teach the courses based on
              Outcome Based Education (OBE) system. Eastern University is well
              equipped with necessary lab facilities for test, and research
              works. The academic programs of this University are continually
              being updated and improved to reflect the latest development in
              Engineering education. The EU firmly believes that education is
              not only the backbone of the nation but the quality education is
              the last resort of a nation to attain the quickest emancipation.
              Knowledge is not only the power, but also the super power in the
              changed context. The mission of Civil Engineering department is to
              become a department of quality and distinction enabling students
              to flourish academically, personally, and socially through
              obtaining soft skill by OBE system. The reason for offering
              Bachelor of Science in Civil Engineering is to prepare students
              for a wide range of exciting industrial opportunities including
              construction, transportation, mining, roads and highway,
              aerospace, chemical, biomedical, nuclear power, robotics, and
              textiles. Civil Engineers can find employment in the field of
              construction and management, surveying, structural, geotechnical,
              water and transportation. <br /> <br />
              The program is designed to satisfy the growing demand of civil
              professionals throughout the country. It gives students the
              opportunity to obtain broad-base knowledge of Civil Engineering
              suitable for taking the challenge of building infrastructure that
              can minimize the natural and environmental hazards. It also gives
              freedom to tailor the program according to student’s individual
              needs by choosing the optional subjects available in higher
              semesters in the field of structural, geotechnical, environmental
              and transportation engineering. Moreover, there are sufficient
              numbers of Mathematics, Electronics, Electrical Engineering,
              Project Management and other basic science, commerce, Arts and
              Humanities courses. <br /> <br />
              Apart from academic activities, the students of the Department
              regularly take part in different co-curricular and
              extra-curricular activities such as programming conttest, debates,
              sprots competitions, games contests, welfare programs, etc.
            </h3>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default civil;
