import React from "react";
import Carusol from "../../components/Carusol";
import Colabaration from "../../components/Colabaration";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Faculty from "../faculty";
import Notice from "../Notice";
import NewsNotice from "../../components/NewsNotice/NewsNotice";
import CampusLife from "../../components/CampusLife";
import FacultyHome from "../../components/facultyHome";

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Carusol></Carusol>
     <NewsNotice></NewsNotice>
      <FacultyHome></FacultyHome>
      <CampusLife></CampusLife>
      <Colabaration></Colabaration>,<Footer></Footer>
    </div>
  );
};

export default HomePage;
