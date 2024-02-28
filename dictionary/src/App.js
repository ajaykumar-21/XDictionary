import React, { useState } from "react";
import "./App.css";

const customDictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

function App() {
  const [text, setText] = useState("");
  const [meaning, setMeaning] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    const foundWord = customDictionary.find(
      (word) => word.word.toLowerCase() === text.toLowerCase()
    );
    console.log(foundWord);
    if (!foundWord) {
      setMeaning("Word not found in the dictionary.");
    } else {
      setMeaning(foundWord.meaning);
    }
  };
  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Search for a word..."
      ></input>
      <button onClick={handleClick}>Search</button>
      <h5>Definition:</h5>
      {meaning && <p>{meaning}</p>}
    </div>
  );
}

export default App;