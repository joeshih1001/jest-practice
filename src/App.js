import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const buttonDisableColor = disabled ? "grey" : newButtonColor;

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? buttonDisableColor : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        onClick={(e) => setDisabled(e.target.checked)}
        id="disabled-button"
      />
      <label htmlFor="disabled-button">Disabled button</label>
    </div>
  );
}

export default App;
