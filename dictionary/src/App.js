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

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = () => {
    if (!search.trim()) {
      setSearchResult("Word not found in the dictionary.");
      return;
    }
    const lowerSearch = search.toLowerCase();
    const word = dictionary.find(
      (entry) => entry.word.toLowerCase() === lowerSearch
    );
    setSearchResult(word ? word.meaning : "Word not found in the dictionary.");
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a word..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <p>Definition: {searchResult}</p>
      </div>
    </div>
  );
}

export default App;
