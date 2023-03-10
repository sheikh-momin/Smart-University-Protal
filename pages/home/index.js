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
import MiddleNav from "../../components/MiddleNav";
import TopNav from "../../components/TopNav";
import AlumniCard from "../../components/AlumniCard";
import AlumniCardSlide from "../../components/AlumniCardSlide";
import CardFlip from "../../components/CardFlip";
import ModifyCampusLife from "../../components/ModifyCampusLife";
import FlipcardSlide from "../../components/FlipcardSlide";
import Testimonial from "../../components/Testimonial";

const HomePage = () => {
  return (
    <div className=" ">
      <TopNav></TopNav>
      <MiddleNav></MiddleNav>
      <Navbar></Navbar>
      <Carusol></Carusol>
     <NewsNotice></NewsNotice>
      <FacultyHome></FacultyHome>
      <CampusLife></CampusLife>
      <AlumniCardSlide></AlumniCardSlide>
      
      
      <AlumniCard></AlumniCard>
      
      <FlipcardSlide></FlipcardSlide>
      
      
      <Colabaration></Colabaration>,<Footer></Footer>
    </div>
  );
};

export default HomePage;
