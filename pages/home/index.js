import React from "react";
import Carusol from "../../components/Carusol";
import Colabaration from "../../components/Colabaration";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Faculty from "../faculty";
const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Carusol></Carusol>
      <Faculty></Faculty>
      <Colabaration></Colabaration>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
