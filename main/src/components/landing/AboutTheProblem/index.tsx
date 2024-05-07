import "./style.scss";

const About = () => {
  return (
    <div className="about">
      <div className="title">
        <h1>About the problem</h1>
      </div>
      <div className="need-flex">
        <div className="problem">
          <div className="description">
            <img
              className="img-third"
              src="../../../../../public/img/zdjecie3.png"
            />
            <div className="info">
              <h4>Lorem ipsum</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Volutpat sodales
                ultricies hendrerit scelerisque est. Velit est euismod eget
                proin facilisis. Eu tempor viverra et pharetra commodo. Vivamus
                orci morbi lectus maecenas massa.
              </p>
            </div>
          </div>
          <div className="description">
            <img
              className="img-second"
              src="../../../../../public/img/zdjecie2.png"
            />
            <div className="info">
              <h4>title</h4>
              <p>bomba bomba bomba bomab bomab</p>
            </div>
          </div>
          <div className="description">
            <img
              className="img-first"
              src="../../../../../public/img/zdjecie1.png"
            />
            <div className="info">
              <h4>title</h4>
              <p>bomba bomba bomba bomab bomab</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
