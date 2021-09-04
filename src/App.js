import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "🐶": "dog",
  "🐈": "cat",
  "🐘": "elephant",
  "🐯": "tiger",
  "🦁": "lion",
  "🦊": "fox",
  "🦌": "deer",
  "🦓": "zebra",
  "🐄": "cow",
  "🐪": "camel"
};

const animals = Object.keys(emojiDictionary);
console.log(animals);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.innerText;
    if (!event.target.innerText) {
      userInput = event.target.value;
    }
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry!! We don't have this in our database";
    }

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>What Animal?</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <ul>
        {animals.map((animal) => {
          return (
            <li
              onClick={emojiInputHandler}
              style={{
                display: "inline",
                padding: "1rem",
                fontSize: "1.5rem",
                cursor: "pointer"
              }}
            >
              {animal}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
