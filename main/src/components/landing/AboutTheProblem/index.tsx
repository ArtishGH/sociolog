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
              src="../../../../public/img/zdjecie3.png"
            />
            <div className="info">
              <h4>Depression</h4>
              <p>
                Depression is a common mental disorder. Globally, more than 264 million people of all ages suffer from depression. Depression is a major contributor to the overall global burden of disease.
              </p>
            </div>
          </div>

          <div className="description">
            <img
              className="img-second"
              src="../../../../../public/img/zdjecie2.png"
            />
            <div className="info">
              <h4>Autism</h4>
              <p>Autism spectrum disorder (ASD) is a developmental disability caused by differences in the brain. People with ASD often have problems with social communication and interactio.</p>
            </div>
          </div>
          <div className="description">
            <img
              className="img-first"
              src="../../../../../public/img/zdjecie1.png"
            />
            <div className="info">
              <h4>Asperger</h4>
              <p>Asperger syndrome is often considered a high functioning form of autism. It can lead to difficulty interacting socially, repeat behaviors, and clumsiness. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
