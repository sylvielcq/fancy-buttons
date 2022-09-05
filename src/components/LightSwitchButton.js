import React, { useState } from "react";

function LightSwitchButton(props){

  const {light, switchLight} = props;
  const handleClick = () => switchLight();

  return (
    <button onClick={handleClick} className="LightSwitchButton">
      {/* When the state is on */}{light === "on" && <span><i>💡</i> I'm on!</span>}
      {/* When the state is off */}{light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;