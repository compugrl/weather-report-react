import React, { useState } from "react";
import "./Temperature.css";

const Temperature = (props) => {
  let [tempVal, setTempVal] = useState(parseInt(props.temp));
  let [tempColor, setColor] = useState(tempVal);

  const changeColor = (temp) => {
    if (temp <= 49) {
      setColor("teal");
    } else if (temp >= 50 && temp <= 59) {
      setColor("green");
    } else if (temp >= 60 && temp <= 69) {
      setColor("gold");
    } else if (temp >= 70 && temp <= 79) {
      setColor("orange");
    } else if (temp >= 80) {
      setColor("red");
    }
  };

  const lowerTemp = () => {
    setTempVal(parseInt((tempVal -= 1)));
    changeColor(tempVal);
  };

  const raiseTemp = () => {
    setTempVal(parseInt((tempVal += 1)));
    changeColor(tempVal);
  };

  return (
    <section className="tempControls">
      <img
        onClick={lowerTemp}
        id="leftArrow"
        alt="left arrow"
        src="assets/left-arrow-blue.jpg"
      />
      <ul>
        <li className={tempColor}>{tempVal}</li>
      </ul>
      <img
        onClick={raiseTemp}
        id="rightArrow"
        alt="right arrow"
        src="assets/right-arrow-blue.jpg"
      />
    </section>
  );
};

export default Temperature;
