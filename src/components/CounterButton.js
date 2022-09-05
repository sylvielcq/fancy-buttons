import React, { useState } from "react";

function CounterButton(){

  const [clickAmount, setClickAmount] = useState();

  return (
    <button className="CounterButton">
      You clicked me {clickAmount} times
    </button>
  );
}

export default CounterButton;