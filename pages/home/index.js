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
import MessengerCustomerChat from "react-messenger-customer-chat";


const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Carusol></Carusol>
      <News></News>
      <FacultyHome></FacultyHome>
      <CampusLife></CampusLife>
      <Colabaration></Colabaration>
      <MessengerCustomerChat
        pageId="1552348765040416"
        appId="955564245411512"
      />
      ,<Footer></Footer>
    </div>
  );
};

export default HomePage;
