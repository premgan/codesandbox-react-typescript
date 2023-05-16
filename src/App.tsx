import "./styles.css";
import React, { useState } from 'react';
export default function App() {
    const [input, setInput] = useState<string>('');
    const [reversed, setReversed] = useState<string>('');
  
    const reverseString = () => {
      const reversedString = input.split('').reverse().join('');
      setReversed(reversedString);
    };
  return (
    <div>
      <label htmlFor="input">Enter a string: </label>
      <input
        type="text"
        id="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={reverseString}>Reverse</button>
      <p>Reversed string: {reversed}</p>
    </div>
  );
}

