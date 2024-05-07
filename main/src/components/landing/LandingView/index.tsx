// import About from "../AboutTheProblem";
import "./style.scss";

export const LandingView = () => {
  return (
    <div className="view">
      <div className="container">
          <div className="left-bar">
            <h1 className="header-title">Let us help you</h1>
            <h4 className="header-motto">Understand your kid</h4>
          </div>
          <div className="right-bar">
            <img src="../../../public/img/depressedGirl.png" alt="Laughter" />
          </div>
      </div>
    </div>
  );
};