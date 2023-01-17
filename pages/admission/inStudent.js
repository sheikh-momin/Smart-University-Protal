import Category from "../../components/Admission/Category";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const InStudent = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-12 gap-4 my-20">
        <div className="col-span-9">
          <div className="border-y border-slate-400 py-2">
            <h1 className="text-center text-teal-700 text-3xl font-bold italic font-serif">International Students</h1>
          </div>
          <div className="ml-20 my-5 text-lg">
            
            <h3>Individuals who are not citizens or permanent residents of Bangladesh are defined as international applicants. International applicants seeking admission into EU must meet the same academic standards as those required for Bangladeshi students. There are wide variations, however, among educational systems throughout the world that make an exact comparison of educational standards difficult. International applicants who cannot sit for admission test are selected on the basis of their prior academic results, English proficiency, probability of success in the chosen curriculum as evidenced by prior work in the academic area involved, and certification of adequate financial resources.</h3>
          </div>
          
        </div>
        <div className="col-span-3 mt-16"><Category></Category></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default InStudent;