import { useState } from "react";
import "./styles.css";

export default function App() {
  const [spacing, setSpacing] = useState(10);
  const [blur, setBlur] = useState(10);
  const [base, setBase] = useState('yellow');
  
  return (
    <div>
      <h2>
        Update CSS Variables with <span className="hl">JS</span>
      </h2>
      <div className="controls">
        <label htmlFor="spacing">Spacing:</label>
        <input
          id="spacing"
          type="range"
          name="spacing"
          min="10"
          max="200"
          value={spacing}
        />

        <label htmlFor="blur">Blur:</label>
        <input
          id="blur"
          type="range"
          name="blur"
          min="0"
          max="25"
          value={blur}
        />

        <label htmlFor="base">Base Color</label>
        <input id="base" type="color" name="base" value="#ffc600" />
      </div>

      <img
        src="https://source.unsplash.com/7bwQXzbF6KE/800x500"
        alt="person on mountain"
      />
    </div>
  );
}
