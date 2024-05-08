import "./style.scss";

const ParentsCommunity = () => {
  return (
    <div className="container-chat">
      <h1>Join to Parents Community</h1>
      <div className="both-bars">
        <div className="left-bar">
          <h3>Chat now</h3>
          <h6>With people like you</h6>
          <div className="input-button">
            <button onClick={() => (window.location.href = "/chat")}>Join now</button>
          </div>
        </div>
        <div className="right-bar">
          <img className="main-image" src="../../../public/img/guyshelp.png" alt="guys" />
          <img className="white-ground-image" src="../../../public/img/Vector3.png" />
        </div>
      </div>

      <p></p>
    </div>
  );
};

export default ParentsCommunity;
