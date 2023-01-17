import Category from "../../components/Admission/Category";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Waiver = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-12 gap-4 my-20">
        <div className="col-span-9">
          <div className="border-y border-slate-400 py-2">
            <h1 className="text-center text-teal-700 text-3xl font-bold italic font-serif">Scholarship And Waivers</h1>
          </div>
          <div className="ml-20 my-5 ">
            <h1 className="mb-3 text-teal-600 font-bold border-b border-slate-300 text-2xl">Scholarship</h1>
            <h3 className="text-lg">Abul Quasem Haider Education Development Scholarship <br />

              AKM Saiful Majid Scholarship<br />

              ABM Shahidul Islam Scholarship<br />

              Mohammad Enayet Ullah Foundation Scholarship<br />
              Dr Samsuddoha Khandaker Scholarship<br />

              Saleh Ahmed Chowdhury Scholarship<br />

              Anwara Begum Scholarship<br />

              Alkad Banu Alam Shikkha Britti<br />

              Zinnater Noor Scholarship<br />

              Farida Akhter Scholarship<br />

              Late Aminul Islam Scholarship<br />

              Khursdida Begum Scholarship<br />

              Khalil Anwara Scholarship<br />

              Rezia -Maksud Foundation Scholarship<br />

              Jahima Khatun Scholarship<br />

              Alif Group Scholarship<br />

              Late Zamila Khatun Memorial Trust Scholarship<br />

              Abdul Matlub Ahmad Scholarship<br />

              Prof. Dr. Abdur Rab Scholarship</h3>
          </div>

        </div>
        <div className="col-span-3 mt-16"><Category></Category></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Waiver;