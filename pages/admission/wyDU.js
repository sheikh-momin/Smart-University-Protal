import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Category from "../../components/Admission/Category";


const WyDU = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="grid grid-cols-12 gap-4 my-20">
        <div className="col-span-9">
          <div className="border-y border-slate-400 py-2">
            <h1 className="text-center text-teal-700 text-3xl font-bold italic font-serif">Why Dreamers University</h1>
          </div>

          <div className="ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Government & UGC Approved and Recognized Leader in Higher Education:</h1>
            <h3>Dreamers University and its campus, the education programs and curricula, and the governing policies—all are approved by the University Grants Commission. The high quality of education, democratic governance of the University, its strict adherence to laws, policies and rules, impartial selection of students, faculty and staff and non interference in its academic and administrative affairs from any one or from any quarter—all of these have, over the years, established Dreamers University as a proven leader and role-model in the area of higher education. The University now enjoys the reputation of being one of the best and youngest universities in Bangladesh.</h3>
          </div>

          <div className="ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Student Growth:</h1>
            <h3>The number of students enrolled at Dreamers has steadily grown, as evidenced from the graph below, in the past few years and now it enjoys a healthy number of students where the University can provide the finest education irrespective of where the student comes from or which department they are enrolled in.</h3>
          </div>

          <div className="ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Faculty Strength:</h1>
            <h3>Dreamers University hires top-of-the class, talented graduates as junior faculty, experienced teachers and researchers as senior faculty and professionally accomplished experts as adjunct faculty. Dreamers also promotes professional development of all faculty through a series of programs and workshops with the goal to establish the best faculty at any university.</h3>
          </div>

          <div className="ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">High Quality Education:</h1>
            <h3>Dreamers University is seriously committed to, and aggressively pursues, the goal of providing the highest quality education. With innovative and student-centered, discussion, and case-study based instruction method, forward looking and practical curricula, carefully selected students, highly qualified faculty ensure this high quality education.</h3>
          </div>

          <div className="ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Superior Internship Experience at Recognized Industries:</h1>
            <h3>The BBA and MBA Program curricula requires its students to undergo a one semester, full time internship at a well-recognized business organization. This allows our students to gain valuable job experience. Engineering & Technology students are required to work on projects which also gives them valuable experiential learning. The moot-court practice helps Law students gain practical experience of a law court. The Arts students go through thesis preparation that help them gain mastery over the subject as well as exposure to real life exercise.</h3>
          </div>

          <div className="ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Job Opportunity:</h1>
            <h3>Graduates from the Dreamers are often employed at the best and recognized organizations in the country, as well as in reputed multinational and national companies like Standard Chartered Bank, HSBC Bank, General Electric BEXIMCO, SQUARE, PRAN, Partex, etc. Many students are hired even before their graduation by the organizations where they do internships. Others get jobs soon after graduation, either through attending Job-Fairs organized by Dreamers, or through aggressive individual effort or joint effort with the Career Service Office at Dreamers.</h3>
          </div>

          <div className="ml-20 my-5 text-lg">
            <h1 className="mb-3 text-teal-600 font-bold">Affordable Fees:</h1>
            <h3>The Founders have set up Dreamers University with a spirit of social service – not for profit. Compared to the high quality education provided by Dreamers, the tuition and other fees are considered very reasonable compared to other, similar universities.</h3>
          </div>
        </div>


        <div className="col-span-3 mt-16"><Category></Category></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default WyDU;