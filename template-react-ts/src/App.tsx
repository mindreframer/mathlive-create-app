import React from "react";
import { MathElement } from "./MathElement";

function App() {
  return (
    <div className="Issue-container">
      <p>Please try to reproduce your Mathlive issue below:</p>
      <MathElement
        value={`\\sigma=\\sqrt[]{\\frac{1}{N}\\sum ^N_{i=1}(x_i-\\mu)^2}\\text{^^20where^^20}\\mu=\\frac{1}{N}\\sum ^N_{i=1}x_i`}
      />
    </div>
  );
}

export default App;
