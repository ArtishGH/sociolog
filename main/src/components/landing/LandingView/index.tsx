import About from "../AboutTheProblem";
import Footer from "../Footer";
import OurOffer from "../OurOffer";
import "./style.scss";

export const LandingView = () => {
  return (
    <div className="view">
      <div className="container">
        <div className="left-bar">
          <h1 className="header-title">Let us help you</h1>
          <h4 className="header-motto">Understand your business</h4>
        </div>
        <div className="right-bar">
          <img src="../../../public/img/depressedGirl.png" alt="Laughter" />
        </div>
      </div>
      <About />
      <OurOffer />

      <Footer />
    </div>
  );
};
