import React from "react";
import Carusol from "../../components/Carusol";
import Colabaration from "../../components/Colabaration";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Faculty from "../faculty";
import Notice from "../Notice";
import News from "../News";
import CampusLife from "../../components/CampusLife";
import FacultyHome from "../../components/facultyHome";
import MiddleNav from "../../components/MiddleNav";
import TopNav from "../../components/TopNav";
import AlumniCard from "../../components/AlumniCard";
import AlumniCardSlide from "../../components/AlumniCardSlide";

const HomePage = () => {
  return (
    <div>
      <TopNav></TopNav>
      <MiddleNav></MiddleNav>
      <Navbar></Navbar>
      <Carusol></Carusol>
      <News></News>
      <FacultyHome></FacultyHome>
      <CampusLife></CampusLife>
      <AlumniCard></AlumniCard>
      <AlumniCardSlide></AlumniCardSlide>
      <Colabaration></Colabaration>,<Footer></Footer>
    </div>
  );
};

export default HomePage;
