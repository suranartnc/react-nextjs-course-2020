import React, { useState, useEffect } from "react";
import styles from "./DictStyles";

import dict from "./data/eng2thai.json";

function translate(word) {
  return dict.filter(vocab => {
    return vocab.search === word
  })
}

export default function DictApp() {
  const [results, setResults] = useState([]);

  function onInputChanged(e) {
    // Write some code here...
  }

  function onSubmitted() {
    // Write some code here...
  }

  return (
    <div style={styles.app}>
      <div style={styles.wrapper}>
        <div style={styles.form}>
          <input
            style={styles.keyword}
            placeholder="keywords..."
            value=""
            onChange={onInputChanged}
          />
          <button style={styles.button} onClick={onSubmitted}>Search</button>
        </div>
        <ul style={styles.results}>
          {results.map(function(vocab, index) {
            return <li key={`${vocab.result}-${index}`}>{vocab.result}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
