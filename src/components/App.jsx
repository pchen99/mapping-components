import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEmoji(element) {
  return (
    <Entry
      key={element.id}
      emoji={element.emoji}
      name={element.name}
      meaning={element.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {/* <Entry emoji={emojipedia[1].emoji} /> */}
        {emojipedia.map(createEmoji)}
      </dl>
    </div>
  );
}

export default App;
