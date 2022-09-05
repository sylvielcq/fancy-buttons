import React, { useState } from "react";

function TextRepeaterButton(){

  const [repetitions, setRepetitions] = useState();
  const textArray = [];
  for (let i = 0; i < repetitions; i++) {
    textArray.push(<span key={i}>I like this text</span>);
  }

  return (
    <button className="TextRepeaterButton">
      {textArray}
    </button>
  );
}

export default TextRepeaterButton;