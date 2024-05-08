import About from "../AboutTheProblem";
import Footer from "../Footer";
import ParentsCommunity from "../ParentsCommunity";

import "./style.scss";

export const LandingViewParents = () => {
  return (
    <div className="view">
      <div className="container">
        <div className="left-bar">
          <h1 className="header-title">Let us help you</h1>
          <h4 className="header-motto">Understand your kid</h4>
        </div>
        <div className="right-bar">
          <img src="../../../public/img/rodzina.png" alt="Laughter" />
        </div>
      </div>
      <About />
      <ParentsCommunity />
      <Footer />
    </div>
  );
};
