import React, { useState } from "react";

function App() {
  const [dictionary] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = () => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const word = dictionary.find(
      (entry) => entry.word.toLowerCase() === lowerSearchTerm
    );
    setSearchResult(word ? word.meaning : "Word not found in the dictionary.");
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a word..."
        />
        <button onClick={handleSearch}>Search</button>
        <h4>Definition:</h4>
      </div>
      <div>{searchResult && <p>{searchResult}</p>}</div>
    </div>
  );
}

export default App;
