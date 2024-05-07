import About from "../AboutTheProblem";
import OurOffer from "../OurOffer";
import "./style.scss";

export const LandingView = () => {
<<<<<<< HEAD
  return (
    <div className="view">
      <div className="container">
        <div className="left-bar">
          <h1 className="header-title">Let us help you</h1>
          <h4 className="header-motto">Understand your kid</h4>
=======
    return (
        <div className="landing-container">
            <header className="landing-header">
                <div className="header-content"> // sigma
                    <h1 className="header-title">Let us help you</h1>
                    <p className="header-motto">Laughter is the best medicine</p>
                </div>
                <div className="header-image">
                    <img src="/img/sociologyHeaderImage.avif" alt="Laughter" />
                </div>
            </header>
>>>>>>> origin/bartek
        </div>
        <div className="right-bar">
          <img src="../../../public/img/depressedGirl.png" alt="Laughter" />
        </div>
      </div>
      <About />
      <OurOffer />
    </div>
  );
};
