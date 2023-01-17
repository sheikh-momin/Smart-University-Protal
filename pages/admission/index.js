import Category from "../../components/Admission/Category";
import Info from "../../components/Admission/Info";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";



const Admission = () => {
  return (
    <div >
      <Navbar></Navbar>
      <div className="grid grid-cols-12 gap-4 my-20">
        <div className="col-span-9"><Info></Info></div>
        <div className="col-span-3 mt-16"><Category></Category></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Admission;