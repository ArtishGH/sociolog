import "./style.scss";
import { useState } from "react";

const Form = () => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({
    container1: "",
    container2: "",
    container3: "",
    container4: "",
    container5: "",
    container6: "",
  });

  const handleOptionChange =
    (containerId: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSelectedOptions((prevState) => ({
        ...prevState,
        [containerId]: value,
      }));
    };
  return (
    <div className="container-form">
      <div className="title">
        <h1>
          Answer these questions to know how close is your relation with your
          son
        </h1>
        <img className="relation-image" src="../../../public/img/relacja.png" />
      </div>
      <div className="questions">
        <div className="question-extended">
          <div className="green"></div>
          <div className="question">
            <h3>How close do you think you are with your child</h3>
            <div className="answers">
              <label>Good</label>
              <input
                type="radio"
                value="good"
                checked={selectedOptions.container1 === "good"}
                onChange={handleOptionChange("container1")}
              />
              <label>I don' t know</label>
              <input
                type="radio"
                value="idk"
                checked={selectedOptions.container1 === "idk"}
                onChange={handleOptionChange("container1")}
              />
              <label>Maybe</label>
              <input
                type="radio"
                value="maybe"
                checked={selectedOptions.container1 === "maybe"}
                onChange={handleOptionChange("container1")}
              />
              <label>Bad</label>
              <input
                type="radio"
                value="bad"
                checked={selectedOptions.container1 === "bad"}
                onChange={handleOptionChange("container1")}
              />
            </div>
          </div>
        </div>
        <div className="question-extended">
          <div className="green"></div>
          <div className="question">
            <h3>How close do you think you are with your child</h3>
            <div className="answers">
              <label>Good</label>
              <input
                type="radio"
                value="good"
                checked={selectedOptions.container2 === "good"}
                onChange={handleOptionChange("container2")}
              />
              <label>I don' t know</label>
              <input
                type="radio"
                value="idk"
                checked={selectedOptions.container2 === "idk"}
                onChange={handleOptionChange("container2")}
              />
              <label>Maybe</label>
              <input
                type="radio"
                value="maybe"
                checked={selectedOptions.container2 === "maybe"}
                onChange={handleOptionChange("container2")}
              />
              <label>Bad</label>
              <input
                type="radio"
                value="bad"
                checked={selectedOptions.container2 === "bad"}
                onChange={handleOptionChange("container2")}
              />
            </div>
          </div>
        </div>
        <div className="question-extended">
          <div className="green"></div>
          <div className="question">
            <h3>How close do you think you are with your child</h3>
            <div className="answers">
              <label>Good</label>
              <input
                type="radio"
                value="good"
                checked={selectedOptions.container3 === "good"}
                onChange={handleOptionChange("container3")}
              />
              <label>I don' t know</label>
              <input
                type="radio"
                value="idk"
                checked={selectedOptions.container3 === "idk"}
                onChange={handleOptionChange("container3")}
              />
              <label>Maybe</label>
              <input
                type="radio"
                value="maybe"
                checked={selectedOptions.container3 === "maybe"}
                onChange={handleOptionChange("container3")}
              />
              <label>Bad</label>
              <input
                type="radio"
                value="bad"
                checked={selectedOptions.container3 === "bad"}
                onChange={handleOptionChange("container3")}
              />
            </div>
          </div>
        </div>
        <div className="question-extended">
          <div className="green"></div>
          <div className="question">
            <h3>How close do you think you are with your child</h3>
            <div className="answers">
              <label>Good</label>
              <input
                type="radio"
                value="good"
                checked={selectedOptions.container4 === "good"}
                onChange={handleOptionChange("container4")}
              />
              <label>I don' t know</label>
              <input
                type="radio"
                value="idk"
                checked={selectedOptions.container4 === "idk"}
                onChange={handleOptionChange("container4")}
              />
              <label>Maybe</label>
              <input
                type="radio"
                value="maybe"
                checked={selectedOptions.container4 === "maybe"}
                onChange={handleOptionChange("container4")}
              />
              <label>Bad</label>
              <input
                type="radio"
                value="bad"
                checked={selectedOptions.container4 === "bad"}
                onChange={handleOptionChange("container4")}
              />
            </div>
          </div>
        </div>
        <div className="question-extended">
          <div className="green"></div>
          <div className="question">
            <h3>How close do you think you are with your child</h3>
            <div className="answers">
              <label>Good</label>
              <input
                type="radio"
                value="good"
                checked={selectedOptions.container5 === "good"}
                onChange={handleOptionChange("container5")}
              />
              <label>I don' t know</label>
              <input
                type="radio"
                value="idk"
                checked={selectedOptions.container5 === "idk"}
                onChange={handleOptionChange("container")}
              />
              <label>Maybe</label>
              <input
                type="radio"
                value="maybe"
                checked={selectedOptions.container5 === "maybe"}
                onChange={handleOptionChange("container5")}
              />
              <label>Bad</label>
              <input
                type="radio"
                value="bad"
                checked={selectedOptions.container5 === "bad"}
                onChange={handleOptionChange("container5")}
              />
            </div>
          </div>
        </div>
        <div className="question-extended">
          <div className="green"></div>
          <div className="question">
            <h3>How close do you think you are with your child</h3>
            <div className="answers">
              <label>Good</label>
              <input
                type="radio"
                value="good"
                checked={selectedOptions.container6 === "good"}
                onChange={handleOptionChange("container6")}
              />
              <label>I don' t know</label>
              <input
                type="radio"
                value="idk"
                checked={selectedOptions.container6 === "idk"}
                onChange={handleOptionChange("container6")}
              />
              <label>Maybe</label>
              <input
                type="radio"
                value="maybe"
                checked={selectedOptions.container6 === "maybe"}
                onChange={handleOptionChange("container6")}
              />
              <label>Bad</label>
              <input
                type="radio"
                value="bad"
                checked={selectedOptions.container6 === "bad"}
                onChange={handleOptionChange("container6")}
              />
            </div>
          </div>
        </div>
      </div>
      <button className="submit">Submit your answers</button>
    </div>
  );
};

export default Form;
