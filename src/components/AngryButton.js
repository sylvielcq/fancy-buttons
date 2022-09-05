import React, { useState } from "react";

function AngryButton(){

  const [anger, setAnger] = useState();

  return (
    <button style={{ backgroundColor: `rgba(255,0,0,${anger})` }} className="AngryButton">
      {/* If you have NOT reached the maximum */}{anger < 1 && <span>Don't click me too much! </span>}
      {/* If you HAVE reached the maximum */}{anger > 1 && <span>Rawr!</span>}
    </button>
  );
}

export default AngryButton;