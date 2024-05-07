import React from "react";
import { Link } from "react-router-dom";
import About from "../AboutTheProblem";
import "./style.scss";

export const LandingView = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <div className="header-content">
          <h1 className="header-title">Let us help you</h1>
          <h4 className="header-motto">Understand your kid</h4>
        </div>
        <div className="header-image">
          <img src="../../../public/img/depressedGirl.png" alt="Laughter" />
        </div>
      </header>
      <About />
    </div>
  );
};
