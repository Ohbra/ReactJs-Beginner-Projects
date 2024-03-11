import { useState, useEffect } from "react";

export default function RandomColor() {
  const [colorType, setColorType] = useState(null);
  const [color, setColor] = useState("white");

  useEffect(() => {
    if (colorType === "RGB") handleRGB();
    else handleHEX();
  }, [colorType])
  

 function utility(limit){
    return Math.floor(Math.random() * limit);
 }

  function handleRGB() {
    let r = utility(256)
    let g = utility(256)
    let b = utility(256)

    console.log(color)

    // setColor(`rgb${r},${g},${b}`)
    setColor(`rgb(${r},${g},${b})`)
  }

  function handleHEX() {
    let hexColor = "#";
    let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    for (let index = 0; index < 6; index++) {
        hexColor += hex[utility(hex.length)];
   
    }
    console.log(hexColor)
    setColor(hexColor)
  }

  return (
      <div   style={{ 
        width:"90vw",
        height:"80vh",
        backgroundColor: color}}
        >
        <button onClick={() => setColorType("RGB")}>Change RGB</button>
        <button onClick={() => setColorType("HEX")}>Change HEX</button>
        <button onClick={colorType == "RGB" ? handleRGB : handleHEX}>
          Generate Random Color
        </button>

        <div style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          marginTop:"50px",
          fontSize:"50px",
          flexDirection:"column"
        }}>
          <h2>{colorType}</h2>
          <h2>{color}</h2>
        </div>
      </div>

  );
}
