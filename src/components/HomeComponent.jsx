import React from "react";
import Logo from "../assets/butterfly_logo-min.png";
import ButtonComponent from "./ButtonComponent";

const Home = () => {
  return (
    <div id="home">
      <img src={Logo} alt="dey play" />
      <h1 id="welcome">Welcome to Butterfly</h1>
      <div id="home_btn">
        <ButtonComponent label="Butterfly Store Deutschland" />
        <ButtonComponent label="Choose your country" />
      </div>
    </div>
  );
};

export default Home;
