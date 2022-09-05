import React, { useState } from "react";

function LightSwitchButton(){

  const [light, setLight] = useState('off');

  const handleClick = () => setLight(light === "on" ? "off" : "on");

  return (
    <button onClick={handleClick} className="LightSwitchButton">
      {/* When the state is on */}{light === "on" && <span><i>💡</i> I'm on!</span>}
      {/* When the state is off */}{light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;