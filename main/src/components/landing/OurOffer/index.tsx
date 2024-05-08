import "./style.scss";

const OurOffer = () => {
  return (
    <div className="offer">
      <div className="title">
        <h1>Our offer</h1>
      </div>
      <div className="offer-points-first">
        <h3>Meeting with experts</h3>
        <p>
          Our program even on free trial offers you 7 hours with our expert.
          These meetings are aiming to solve your problem as fast as it’s
          possible.
        </p>
      </div>
      {/* arrow zrobiony aboslute */}
      <img
        className="arrow"
        src="../../../../public/img/Vector6.png"
        alt="dziwka"
      />
      <img className="business" src="../../../../public/img/business.png" />
      <div className="offer-points-second">
        <h3>Tracking your buisness progress</h3>
        <p>
          Even though that’s not everything we are offering you. A website to
          track business's progress could help you to make an improvement and
          get your company on the next level
        </p>
      </div>
      {/* arrow zrobiony aboslute */}
      <img
        className="arrow2"
        src="../../../../public/img/Vector6.png"
        alt="dziwka"
      />
      <div className="offer-points-third">
        <h3>Data about parents and children</h3>
        <p>
          Because many parents are using our product, they are leaving a lot of
          data usseful data here, like how they' re feeling, what they are
          dealing with etc.
        </p>
      </div>
      <img
        className="arrow3"
        src="../../../../public/img/Vector6.png"
        alt="dziwka"
      />
      <div className="space">
      <button onClick={() => (window.location.href = "/statistics")}>See More</button>
      </div>
      <hr></hr>
    </div>
  );
};

export default OurOffer;
