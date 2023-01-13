<<<<<<< HEAD
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"

=======
import Navbar from "../../components/Navbar";
>>>>>>> 99a8b7a07efa1a761b9b0c9ad07f13adb0dc60cd

const About = () => {
  return (
    <div>
      {/* <h1>About</h1> */}
      {/* <h2>about</h2> */}
      <Navbar></Navbar>
      <div className="bg-teal-700">
        <div>
          <img
            src="https://wallpaperaccess.com/full/1209573.jpg"
            className="w-full h-3/6 pt-5"
          />
        </div>

        <div className="flex mt-10">
          <div className="w-1/3 h-96">
            <div className="drawer drawer-mobile ">
              <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <label
                  htmlFor="my-drawer-2"
                  className="btn btn-primary drawer-button lg:hidden"
                >
                  Open drawer
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  bg-teal-700  text-white">
                  {/* <!-- Sidebar content here --> */}
<<<<<<< HEAD
                  <li><a className="ml-10 text-md">Objective Of Dreamers University</a></li>
                  <li><a className="ml-10 text-md">History of Dreamers University</a></li>
                  <li><a className="ml-10 text-md">Structure of Dreamers University</a></li>
                  <li><a className="ml-10 text-md">Member States</a></li>
=======
                  <li>
                    <a className="ml-10 text-md">Objective Of University</a>
                  </li>
                  <li>
                    <a className="ml-10 text-md">
                      History of Dreamers University
                    </a>
                  </li>
                  <li>
                    <a className="ml-10 text-md">
                      Structure of Dreamers University
                    </a>
                  </li>
                  <li>
                    <a className="ml-10 text-md">Member States</a>
                  </li>
>>>>>>> 99a8b7a07efa1a761b9b0c9ad07f13adb0dc60cd
                </ul>
              </div>
            </div>
          </div>

          <div className="w-2/3">
            <h2 className="text-white text-4xl">About Dreamers University</h2>
            <p className="text-white text-md mt-3">
              Islamic University of Technology (Dreamers University) is an
              educational and research institution in Bangladesh run and funded
              by the Organisation of Islamic Cooperation (OIC).The main
              objective of Dreamers University is to contribute in developing
              the human resources of the member states of the OIC, particularly
              in the fields of engineering, technology and technical education.
              Dreamers University receives direct endowment from OIC member
              countries and offers scholarships to its students in the form of
              free tuition, boarding, lodging and medicare. The aesthetic campus
              was designed by Turkish architect Pamir Mehmet, an MIT graduate
            </p>

            <h2 className="text-white text-4xl mt-12">
              Objective of Dreamers University
            </h2>
            <p className="text-white text-md mt-3">
              The Islamic University of Technology is basically an educational
              and research institution. The main objective of the University is
              to help generally in human resources development in member states
              of the OIC, particularly in different fields of engineering,
              technology and technical education.
            </p>

            <ul>
              <li className="text-white mt-4">
                1. Provide instruction in engineering, technology and technical
                and vocational education and in such branches of learning
                connected with the above fields as per requirement of the Member
                States and as approved the Conference, and in particular, train
                instructors, technicians in technologies needed in the Member
                States and to upgrade the mid level and lower level manpower to
                international standards.
              </li>
              <li className="text-white mt-4">
                2. Conduct, promote and guide research in engineering, in
                industrial and technological fields and in technical and
                vocational education to the benefits of the Member States of the
                OIC.
              </li>
              <li className="text-white mt-4">
                3. Hold examination and grant and confer certificates, degrees,
                diplomas and other academic distinctions on persons who have
                pursued courses of study provided by the University and have
                passed the examinations of the University under such conditions
                as may be prescribed by the academic rules and regulations of
                the University.
              </li>
              <li className="text-white mt-4">
                4. May confer other academic distinctions on persons of high
                eminence of the Member States with the approval of the general
                assembly on the recommendation of the Board.
              </li>
              <li className="text-white mt-4">
                5. Promote technical cooperation, exchange technical know-how
                and disseminate basic information in the field of human resource
                development through short and special courses, seminars,
                workshops and publications.
              </li>
              <li className="text-white mt-4">
                6. Ensure coordination between the objective of the University
                with other national and regional institutions of the Islamic
                Countries as well as with international institutions.
              </li>
              <li className="text-white mt-4">
                7. Undertake advisory and consultancy services for government,
                International Bodies and foundations or allied organizations.
              </li>
              <li className="text-white mt-4">
                8. Participate in the meetings of commissions and committees
                established by the Conference with appropriate background and
                technical papers.
              </li>
            </ul>

            <h3 className="text-white text-4xl mt-12">
              {" "}
              History of Dreamers University
            </h3>
            <p className="text-white text-md mt-3">
              “Islamic University of Technology”​ after fulfilling appropriate
              procedural requirements.”​Islamic University of Technology at
              Dhaka, Bangladesh commonly known as Dreamers University is a
              subsidiary organ of the Organisation of the Islamic Conference
              (OIC), representing fifty seven member countries from Asia,
              Africa, Europe and South America.
            </p>
            <h2 className="text-white text-md mt-3">
              It was initially established as the Islamic Centre for Technical
              and Vocational Training and Research, ICTVTR in pursuance of the
              Resolution No. 5/9-E of the Ninth Islamic Conference of Foreign
              Ministers (ICFM) held in Dakar, Senegal in 1978. The foundation
              stone of ICTVTR was laid on 27 March 1981 by His Excellency Late
              Ziaur Rahman, the President of Bangladesh in the presence of His
              Excellency Late Yasir Arafat, President of Palestine and Late Dr.
              Habib Chatty, the then Secretary General of the OIC on the 30-acre
              land donated by the Government of the People's Republic of
              Bangladesh to the OIC.
            </h2>
            <p className="text-white text-md mt-3">
              ICTVTR was renamed as the Islamic Institute of Technology (IIT),
              by the Twenty-second ICFM held in Casablanca, Kingdom of Morocco
              in 1994. It is mandated to help develop human resources in the
              Member Countries of the OIC in the fields of engineering and
              technology as well as technical education.
            </p>
            <h2 className="text-white text-md mt-3">
              The process of renaming Islamic Institute of Technology (IIT) as
              Islamic University of Technology (Dreamers University) began with
              a discussion in the 25th meeting of the Governing Board of IIT
              held in Dhaka, Bangladesh on 20-23 November 2000. In course of
              deliberation, the Honourable Members of the Governing Board felt
              the necessity of renaming the Institute and decided unanimously
              the following:
            </h2>
            <p className="text-white text-md mt-3">
              “124. The Conference commended the activities of the Islamic
              Institute of Technology in Dhaka, decided that the Institute
              should become a university without financial implications, with
              the title “The Islamic University of Technology”, and encouraged
              it to continue its efforts in developing the human resources of
              Member States in the area of science and technology.”
            </p>
            <p className="text-white text-md mt-3">
              The renaming of IIT as Dreamers University is an important
              milestone in the annals of this unique educational institution,
              only of its kind under the umbrella of the OIC which has been
              emerging as the most visible demonstration of the Islamic
              Solidarity and Joint Islamic Action under the Makkah - Al -
              Mukarramah Declaration.
            </p>
            <p className="text-white text-md mt-3">
              Dreamers University is basically an educational and research
              institution offering a wide range of undergraduate and
              postgraduate academic programmes conducted in the fields of
              engineering and vocational education. It also offers knowledge and
              skill updating and upgrading short and special courses as needed
              by the Member States. International and regional seminars and
              workshops are also arranged regularly by Dreamers University to
              provide forums and to keep abreast of the latest technological
              developments. It also undertakes technological and industrial
              research projects, promotes technical cooperation, exchanges
              technical know-how and disseminates basic information of
              development of human resources as co-focal point under UN-OIC
              collaboration among the Member States of the OIC. Dreamers
              University ensures coordination between its objectives with other
              national and regional institutions of the Islamic countries as
              well as with international institutions. It also undertakes
              advisory and consultancy services for Government, International
              Bodies, Foundations and allied Organisations.
            </p>
<<<<<<< HEAD
            <h2 className="text-white text-md mt-3">It was initially established as the Islamic Centre for Technical and Vocational Training and Research, ICTVTR in pursuance of the Resolution No. 5/9-E of the Ninth Islamic Conference of Foreign Ministers (ICFM) held in Dakar, Senegal in 1978. The foundation stone of ICTVTR was laid on 27 March 1981 by His Excellency Late Ziaur Rahman, the President of Bangladesh in the presence of His Excellency Late Yasir Arafat, President of Palestine and Late Dr. Habib Chatty, the then Secretary General of the OIC on the 30-acre land donated by the Government of the People's Republic of Bangladesh to the OIC.</h2>
            <p className="text-white text-md mt-3">ICTVTR was renamed as the Islamic Institute of Technology (IIT), by the Twenty-second ICFM held in Casablanca, Kingdom of Morocco in 1994. It is mandated to help develop human resources in the Member Countries of the OIC in the fields of engineering and technology as well as technical education.</p>
            <h2 className="text-white text-md mt-3">The process of renaming Islamic Institute of Technology (IIT) as Islamic University of Technology (Dreamers University) began with a discussion in the 25th meeting of the Governing Board of IIT held in Dhaka, Bangladesh on 20-23 November 2000. In course of deliberation, the Honourable Members of the Governing Board felt the necessity of renaming the Institute and decided unanimously the following:</h2>
            <p className="text-white text-md mt-3">“124. The Conference commended the activities of the Islamic Institute of Technology in Dhaka, decided that the Institute should become a university without financial implications, with the title “The Islamic University of Technology”, and encouraged it to continue its efforts in developing the human resources of Member States in the area of science and technology.”</p>
            <p className="text-white text-md mt-3">The renaming of IIT as Dreamers University is an important milestone in the annals of this unique educational institution, only of its kind under the umbrella of the OIC which has been emerging as the most visible demonstration of the Islamic Solidarity and Joint Islamic Action under the Makkah - Al - Mukarramah Declaration.</p>
            <p className="text-white text-md mt-3">Dreamers University is basically an educational and research institution offering a wide range of undergraduate and postgraduate academic programmes conducted in the fields of engineering and vocational education. It also offers knowledge and skill updating and upgrading short and special courses as needed by the Member States. International and regional seminars and workshops are also arranged regularly by Dreamers University to provide forums and to keep abreast of the latest technological developments. It also undertakes technological and industrial research projects, promotes technical cooperation, exchanges technical know-how and disseminates basic information of development of human resources as co-focal point under UN-OIC collaboration among the Member States of the OIC. Dreamers University ensures coordination between its objectives with other national and regional institutions of the Islamic countries as well as with international institutions. It also undertakes advisory and consultancy services for Government, International Bodies, Foundations and allied Organisations.</p>

            <h3 className="text-white text-4xl mt-12">Structure of Dreamers University</h3>
            <p className="text-white text-md mt-3">The structure of the University comprises the Joint General Assembly, the Governing Board, Syndicate and the Vice Chancellor. The internal setup and working conditions of the University are governed by its Internal Rules and Regulations as approved by the ICFM as well as by the provisions of the Personnel and Financial Regulations of the OIC.</p>
            <p className="text-white text-md mt-3">The Vice Chancellor of the University is the chief executive in charge of the overall management of the University and takes measures necessary for realizing the objectives of the University. The Member States cooperate in every possible manner to assist the University in pursuing its objectives. The budget of the University is financed by mandatory contributions of the Government of the Member States in proportion to their contribution to the budget of the General Secretariat of the Organization of the Islamic Conference.</p>

            <h5 className="text-white text-xl mt-10 mb-20"> Funded by organisation of Dreamers Cooperation</h5>
=======

            <h3 className="text-white text-4xl mt-12">
              Structure of Dreamers University
            </h3>
            <p className="text-white text-md mt-3">
              The structure of the University comprises the Joint General
              Assembly, the Governing Board, Syndicate and the Vice Chancellor.
              The internal setup and working conditions of the University are
              governed by its Internal Rules and Regulations as approved by the
              ICFM as well as by the provisions of the Personnel and Financial
              Regulations of the OIC.
            </p>
            <p className="text-white text-md mt-3">
              The Vice Chancellor of the University is the chief executive in
              charge of the overall management of the University and takes
              measures necessary for realizing the objectives of the University.
              The Member States cooperate in every possible manner to assist the
              University in pursuing its objectives. The budget of the
              University is financed by mandatory contributions of the
              Government of the Member States in proportion to their
              contribution to the budget of the General Secretariat of the
              Organization of the Islamic Conference.
            </p>
>>>>>>> 99a8b7a07efa1a761b9b0c9ad07f13adb0dc60cd

            <h5 className="text-white text-xl mt-10">
              {" "}
              Funded by organisation of Dreamers Cooperation
            </h5>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <Footer></Footer>
      {/* .. */}
=======
>>>>>>> 99a8b7a07efa1a761b9b0c9ad07f13adb0dc60cd
    </div>
  );
};

export default About;
