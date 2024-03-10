import { useState } from "react";

export default function RandomColor() {
  const [colorType, setColorType] = useState(null);
  const color = "pink";

  console.log("colorType -> " + colorType);

  function handleRGB() {
    console.log("handleRGB -> " + colorType);
  }

  function handleHEX() {
    console.log("handleHEX -> " + colorType);
  }

  return (
      <div   style={{ 
        width:"100vw",
        height:"100vh",
        backgroundColor: color}}
        >
        <button onClick={() => setColorType("RGB")}>Change RGB</button>
        <button onClick={() => setColorType("HEX")}>Change HEX</button>
        <button onClick={colorType == "RGB" ? handleRGB : handleHEX}>
          Generate Random Color
        </button>
      </div>

  );
}
