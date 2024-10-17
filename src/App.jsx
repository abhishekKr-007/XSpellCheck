import React, { useState, useEffect } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const XSpellCheck = () => {
  const [text, setText] = useState("");
  const [correction, setCorrection] = useState("");

  const checkSpelling = (input) => {
    const words = input.split(" ");
    for (let word of words) {
      const lowerCaseWord = word.toLowerCase();
      if (customDictionary[lowerCaseWord]) {
        return `Did you mean: ${customDictionary[lowerCaseWord]}?`;
      }
    }
    return "";
  };

  useEffect(() => {
    if (text.trim() === "") {
      setCorrection("");
    } else {
      const suggestion = checkSpelling(text);
      setCorrection(suggestion);
    }
  }, [text]);

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text..."
        rows="4"
        cols="50"
      />
      <p>{correction}</p>
    </div>
  );
};

export default XSpellCheck;
