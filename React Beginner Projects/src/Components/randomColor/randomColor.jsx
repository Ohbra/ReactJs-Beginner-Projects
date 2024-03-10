import { useState } from "react";

export default function RandomColor() {
  const [colorType, setColorType] = useState(null);
  const [color, setColor] = useState("white");

 function utility(limit){
    return Math.round(Math.random() * limit);
 }

  function handleRGB() {
    setColor("red")
  }

  function handleHEX() {
    let hexColor = "#";
    let length = 6;
    for (let index = 0; index < length; index++) {
        hexColor += `${utility(index)}`;
   
    }
    console.log(hexColor)
    setColor(hexColor)
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
